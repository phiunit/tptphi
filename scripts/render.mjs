// Render every product's src/*.html into dist/ — PDFs for documents,
// PNGs for anything named *.cover.html or *.preview*.html (TPT thumbnails).
// Usage: npm run render [-- <product-slug>]
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts } from './lib.mjs';

const slug = process.argv[2];
const products = listProducts(slug);
if (!products.length) { console.error('No products found' + (slug ? ` for slug "${slug}"` : '')); process.exit(1); }

const browser = await launch();
const page = await browser.newPage();

// Teachers organize downloads by filename: name outputs "<Lesson Name> - <Doc>.pdf"
const DOC_NAMES = { 'lesson-plan': 'Lesson Plan', 'worksheet': 'Worksheet',
  'teacher-guide': 'Teacher Guide', 'product.cover': 'Cover', 'product.preview': 'Preview' };
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
      const out = path.join(distDir, outName(p.meta, base) + '.png');
      await page.setViewportSize({ width: 850, height: 1100 });
      await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 850, height: 1100 } });
      console.log('PNG ', path.relative(process.cwd(), out));
    } else {
      const out = path.join(distDir, outName(p.meta, base) + '.pdf');
      await page.pdf({ path: out, width: '8.5in', height: '11in', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
      console.log('PDF ', path.relative(process.cwd(), out));
    }
  }
}
await browser.close();
console.log('Render complete.');
