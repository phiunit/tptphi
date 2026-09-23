// Build the TPT "Preview" file: cover + up to 3 sample pages (student pages first),
// each stamped with a translucent PREVIEW band. Sourced from dist/review/*.png (run judge first).
// Usage: npm run preview [-- <slug>]
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts } from './lib.mjs';

const browser = await launch();
const page = await browser.newPage();
for (const p of listProducts(process.argv[2])) {
  const rev = path.join(p.dir, 'dist', 'review');
  if (!fs.existsSync(rev)) { console.log('skip (no dist/review — run judge):', p.slug); continue; }
  const pngs = fs.readdirSync(rev).filter(f => f.endsWith('.png') && !/^slide-/.test(f)); // deck shots are not print pages
  const cover = pngs.find(f => /cover/i.test(f));
  // Sample order (gauntlet, buyer critic): worksheet p1, lesson plan p1, then the teacher guide's LAST page — never a key page.
  const lastOf = (dir, base) => {
    const all = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.startsWith(base + '-p') && f.endsWith('.png')) : [];
    return all.sort((a, b) => Number(a.match(/-p(\d+)/)[1]) - Number(b.match(/-p(\d+)/)[1])).pop();
  };
  const pick = (dir, base) => path.join(dir, base + '-p1.png');
  let samples;
  if (Array.isArray(p.meta.preview_pages) && p.meta.preview_pages.length) {
    // product.yaml may name the sample pages (review PNG basenames, e.g. "worksheet-p2"): the default picks
    // page 1 of each document, which is not always the page that sells the lesson.
    // "worksheet-p2" is this product's own page; "ai-boring-work/worksheet-p1" is a child's (bundles).
    samples = p.meta.preview_pages.map(n => { const [a, b] = String(n).replace(/\.png$/, '').split('/');
      return b ? path.join(p.dir, '..', a, 'dist', 'review', b + '.png') : path.join(rev, a + '.png'); });
    const missing = samples.filter(f => !fs.existsSync(f));
    if (missing.length) throw new Error(`${p.slug}: preview_pages names ${missing.map(f => path.basename(f)).join(', ')}, not found in dist/review/`);
  } else if (p.meta.bundle_of) {
    // A bundle previews its children: a student page, a plan page, a guide page, then the unit overview.
    const child = slug => path.join(p.dir, '..', slug, 'dist', 'review');
    const tgLast = lastOf(child('ai-prompting-101'), 'teacher-guide');
    samples = [pick(child('ai-fact-check-lab'), 'worksheet'), pick(child('ai-prompting-101'), 'lesson-plan'),
      tgLast && path.join(child('ai-prompting-101'), tgLast), pick(rev, 'unit-overview')].filter(f => f && fs.existsSync(f));
  } else {
    const tgLast = lastOf(rev, 'teacher-guide');
    samples = [pick(rev, 'worksheet'), pick(rev, 'lesson-plan'), tgLast && path.join(rev, tgLast)].filter(f => f && fs.existsSync(f)).slice(0, 3);
  }
  const distFiles = fs.readdirSync(path.join(p.dir, 'dist'));
  const has = re => distFiles.some(f => re.test(f));
  const parts = [];
  if (has(/ - Lesson Plan\.pdf$/)) parts.push('PLAN');
  if (has(/ - Worksheet\.pdf$/)) parts.push(has(/Fillable\)\.pdf$/) ? 'WORKSHEET + FILLABLE' : 'WORKSHEET');
  // A frames pack's student pages are Frames, not a worksheet; the band said nothing about them at all.
  const nFrames = (() => { try { const f = distFiles.find(f => / - Frames\.pdf$/.test(f)); return f ? (fs.readFileSync(path.join(p.dir, 'dist', f), 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length : 0; } catch { return 0; } })();
  if (nFrames) parts.push(`${nFrames} FRAME${nFrames > 1 ? 'S' : ''}${has(/Frames \(Fillable\)\.pdf$/) ? ' + FILLABLE' : ''}`);
  if (has(/ - Teacher Guide\.pdf$/)) parts.push('GUIDE');
  if (has(/ - Worked Examples\.pdf$/)) parts.push('EXAMPLES');
  if (has(/\.pptx$/)) parts.push('SLIDES');
  if (has(/ - Unit Overview\.pdf$/)) parts.push('UNIT OVERVIEW');
  // Bundle file count = every child's shipped PDFs + decks, plus the overview (what the buyer actually downloads).
  const bundleFiles = (p.meta.bundle_of || []).reduce((n, slug) => {
    const d = path.join(p.dir, '..', slug, 'dist');
    return n + (fs.existsSync(d) ? fs.readdirSync(d).filter(f => /( - (Lesson Plan|Worksheet|Worksheet \(Fillable\)|Teacher Guide)\.pdf|\.pptx)$/.test(f)).length : 0);
  }, distFiles.filter(f => /\.(pdf|pptx)$/.test(f) && !/ - Preview\.pdf$/.test(f)).length); // the bundle's own files: overview, capstone sheet and its fillable
  const band = p.meta.bundle_of
    ? `FULL DOWNLOAD: ${p.meta.bundle_of.length} LESSONS · ${bundleFiles} FILES`
    : `FULL DOWNLOAD: ${parts.join(' · ')}`;
  const img = f => `data:image/png;base64,${fs.readFileSync(path.isAbsolute(f) ? f : path.join(rev, f)).toString('base64')}`;
  const sheet = f => `<div class="pg"><img src="${img(f)}"><div class="band"><span>${band}</span></div><div class="tag">PREVIEW</div></div>`;
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face{font-family:'Space Grotesk';font-weight:700;src:url('file://${path.resolve('brand/fonts/SpaceGrotesk-700.ttf')}')}
    *{margin:0;box-sizing:border-box} body{width:8.5in}
    .pg{width:8.5in;height:11in;position:relative;page-break-after:always;overflow:hidden;background:#fff}
    .pg:last-child{page-break-after:auto} .pg img{width:8.5in;height:11in;display:block}
    .tag{position:absolute;top:.07in;left:50%;transform:translateX(-50%);background:#FFB020;color:#14141F;font:700 11pt 'Space Grotesk',Arial,sans-serif;padding:4px 12px;border-radius:99px;letter-spacing:1px}
    .band{position:absolute;left:-2in;right:-2in;top:46%;transform:rotate(-24deg);background:rgba(255,176,32,.35);color:#14141F;
      font:700 22px 'Space Grotesk',sans-serif;letter-spacing:1.5px;text-align:center;padding:14px 0;text-transform:uppercase}
    .band span{display:inline-block;white-space:nowrap}
  </style></head><body>${cover ? `<div class="pg"><img src="${img(cover)}"></div>` : ''}${samples.map(sheet).join('')}</body></html>`;
  const tmp = path.join(p.dir, 'dist', '.preview.html'); fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'networkidle' });
  // Band text must sit inside the 612pt page width with margin (≤ 736px) — shrink until it does, never clip.
  await page.evaluate(() => { for (const el of document.querySelectorAll('.band')) {
    let fs = 22; while (el.querySelector('span').getBoundingClientRect().width > 736 && fs > 10) { fs -= 1; el.style.fontSize = fs + 'px'; el.style.letterSpacing = (fs >= 16 ? 1 : 0.5) + 'px'; } } });
  const lesson = (p.meta.short_name || String(p.meta.title).split(':')[0]).trim().replace(/[\\/:*?"<>|]/g, '');
  const out = path.join(p.dir, 'dist', `${lesson} - Preview.pdf`);
  await page.pdf({ path: out, width: '8.5in', height: '11in', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  fs.rmSync(tmp);
  console.log('PREVIEW', path.relative(process.cwd(), out), `(cover + ${samples.length} sample pages)`);
}
await browser.close();
