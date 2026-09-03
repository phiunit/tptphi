// Render every product's src/*.html into dist/ — PDFs for documents,
// PNGs for anything named *.cover.html or *.preview*.html (TPT thumbnails).
// Usage: npm run render [-- <product-slug>]
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts } from './lib.mjs';
import { makeFillable } from './fillable.mjs';
import { buildSlides } from './slides.mjs';

const slug = process.argv[2];
const products = listProducts(slug);
if (!products.length) { console.error('No products found' + (slug ? ` for slug "${slug}"` : '')); process.exit(1); }

const browser = await launch();
const page = await browser.newPage();

// Teachers organize downloads by filename: name outputs "<Lesson Name> - <Doc>.pdf"
const DOC_NAMES = { 'lesson-plan': 'Lesson Plan', 'worksheet': 'Worksheet',
  'teacher-guide': 'Teacher Guide', 'product.cover': 'Cover', 'product.preview': 'Preview', 'slides': 'Slides' };
function outName(meta, base) {
  const lesson = (meta.short_name || String(meta.title).split(':')[0]).trim().replace(/[\/:*?"<>|]/g, '');
  const doc = DOC_NAMES[base] || base.replace(/\b\w/g, c => c.toUpperCase()).replace(/-/g, ' ');
  return `${lesson} - ${doc}`;
}

for (const p of products) {
  const srcDir = path.join(p.dir, 'src');
  const distDir = path.join(p.dir, 'dist');
  fs.mkdirSync(distDir, { recursive: true });
  // clear stale outputs (review/ screenshots are managed by judge.mjs)
  for (const f of fs.readdirSync(distDir)) if (/\.(pdf|png)$/.test(f)) fs.rmSync(path.join(distDir, f));
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
  for (const f of files) {
    const url = 'file://' + path.join(srcDir, f);
    await page.goto(url, { waitUntil: 'networkidle' });
    const base = f.replace(/\.html$/, '');
    const asImage = /\.cover$|\.preview/.test(base);
    if (!asImage) {
      // Layout QA gate (see docs/ANTI_SLOP.md): a document page must fit US Letter
      // exactly and keep clear of its footer, or the render FAILS.
      const problems = await page.evaluate(() => {
        const PAGE = 1056, FOOTER_GAP = 8; // 11in @ 96dpi
        return [...document.querySelectorAll('.page')].flatMap((pg, i) => {
          const out = [];
          const pgTop = pg.getBoundingClientRect().top;
          const h = pg.getBoundingClientRect().height;
          const footer = pg.querySelector('.footer');
          let maxBottom = 0, culprit = '';
          pg.querySelectorAll('*').forEach(el => {
            if (footer && (el === footer || footer.contains(el))) return;
            const bb = el.getBoundingClientRect();
            if (bb.bottom - pgTop > maxBottom) { maxBottom = bb.bottom - pgTop; culprit = el.tagName.toLowerCase() + (el.className ? '.' + el.className : ''); }
          });
          if (h > PAGE + 0.5) out.push(`page ${i + 1}: overflows US Letter by ${Math.round(h - PAGE)}px (lowest element: ${culprit})`);
          if (footer) {
            const fTop = footer.getBoundingClientRect().top - pgTop;
            if (maxBottom > fTop - FOOTER_GAP) out.push(`page ${i + 1}: content (${culprit}) runs into the footer zone (${Math.round(maxBottom)}px vs footer at ${Math.round(fTop)}px)`);
          } else out.push(`page ${i + 1}: missing .footer`);
          return out;
        });
      });
      if (problems.length) {
        console.error(`LAYOUT FAIL ${p.slug}/src/${f}:`);
        for (const bad of problems) console.error('  - ' + bad);
        process.exitCode = 1;
        continue; // do not emit a broken PDF
      }
    }
    if (asImage) {
      // Cover QA gate: absolutely-positioned motif art must not overlap text (ANTI_SLOP rule 5)
      const clash = await page.evaluate(() => {
        const wrappers = [...document.querySelectorAll('body > svg')].filter(el => getComputedStyle(el).position === 'absolute');
        // Compare the DRAWN SHAPES, not the svg's bounding box — sparse art often
        // has a huge box but clears the text visually.
        // Shapes clipped to their svg viewport (geometry outside the viewBox is not visible)
        const art = wrappers.flatMap(w => { const wb = w.getBoundingClientRect();
          return [...w.querySelectorAll('path,rect,circle,ellipse,line,polygon')].map(el => {
            const r = el.getBoundingClientRect();
            return { left: Math.max(r.left, wb.left), right: Math.min(r.right, wb.right),
                     top: Math.max(r.top, wb.top), bottom: Math.min(r.bottom, wb.bottom) };
          }).filter(r => r.right > r.left && r.bottom > r.top); })
          // Decorative star dots are art too (a dot on a subtitle reads as a stray period)
          .concat([...document.querySelectorAll('.star')].map(el => { const r = el.getBoundingClientRect(); return { left: r.left, right: r.right, top: r.top, bottom: r.bottom }; }));
        if (!art.length) return null;
        // Per-LINE text boxes (Range rects), so ragged right edges don't false-positive
        const lines = [];
        const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        for (let n = walk.nextNode(); n; n = walk.nextNode()) {
          if (!n.nodeValue.trim() || n.parentElement.closest('svg')) continue;
          const rg = document.createRange(); rg.selectNodeContents(n);
          for (const r of rg.getClientRects()) if (r.width > 1 && r.height > 1)
            lines.push({ r, owner: n.parentElement });
        }
        for (const ab of art) {
          for (const { r: tb, owner } of lines) {
            if (ab.left < tb.right + 12 && ab.right > tb.left - 12 && ab.top < tb.bottom + 12 && ab.bottom > tb.top - 12) // 12px clearance, not mere non-overlap
              return `motif art within 12px of text in <${owner.tagName.toLowerCase()}${owner.className ? '.' + owner.className : ''}>`;
          } }
        return null;
      });
      if (clash) { console.error(`LAYOUT FAIL ${p.slug}/src/${f}:\n  - ${clash}`); process.exitCode = 1; continue; }
    }
    if (asImage) {
      const out = path.join(distDir, outName(p.meta, base) + '.png');
      await page.setViewportSize({ width: 850, height: 1100 });
      await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 850, height: 1100 } });
      console.log('PNG ', path.relative(process.cwd(), out));
    } else {
      const out = path.join(distDir, outName(p.meta, base) + '.pdf');
      await page.pdf({ path: out, width: '8.5in', height: '11in', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
      // Digital companion: typeable copy of every worksheet (same layout, real form fields)
      if (/^worksheet/.test(base)) {
        const fill = out.replace(/\.pdf$/, ' (Fillable).pdf');
        const n = await makeFillable(page, path.join(srcDir, f), out, fill);
        if (n) console.log('FORM', path.relative(process.cwd(), fill), '(' + n + ' fields)');
      }
      console.log('PDF ', path.relative(process.cwd(), out));
    }
  }
}

// Package each product's PDFs into one zip (TPT free listings accept a single file;
// regenerating here means the zip can never go stale behind the PDFs).
import { execFileSync } from 'node:child_process';
for (const p of listProducts(slug)) {
  const distDir = path.join(p.dir, 'dist');
  // Digital companion: projectable deck, built from src/slides.yaml when present
  for (const old of fs.readdirSync(distDir).filter(f => f.endsWith('.pptx'))) fs.rmSync(path.join(distDir, old));
  const deck = await buildSlides(p, distDir, path.join(distDir, outName(p.meta, 'slides') + '.pptx'), page);
  if (deck) console.log('DECK', path.relative(process.cwd(), deck.file), '(' + deck.count + ' slides)');
  const pdfs = fs.readdirSync(distDir).filter(f => /\.(pdf|pptx)$/.test(f) && !/ - Preview\.pdf$/.test(f)).map(f => path.join(distDir, f));
  if (!pdfs.length) continue;
  for (const z of fs.readdirSync(distDir).filter(f => f.endsWith('.zip'))) fs.rmSync(path.join(distDir, z));
  const lesson = (p.meta.short_name || String(p.meta.title).split(':')[0]).trim().replace(/[\\/:*?"<>|]/g, '');
  const zipPath = path.join(distDir, `${lesson} (Future Skills).zip`);
  try { execFileSync('zip', ['-q', '-j', zipPath, ...pdfs]); console.log('ZIP ', path.relative(process.cwd(), zipPath)); }
  catch (e) { console.warn('zip skipped (is `zip` installed?):', e.message.split('\n')[0]); }
}
await browser.close();
console.log('Render complete.');
