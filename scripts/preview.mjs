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
  // Buyers want to see the student page AND the answer key before paying (gauntlet: buyer critic)
  const order = ['worksheet-p1', 'teacher-guide-p1', 'lesson-plan-p1', 'unit-overview-p1', 'unit-overview-p2', 'worksheet-p2'];
  const samples = order.map(b => pngs.find(f => f.startsWith(b))).filter(Boolean).slice(0, 3);
  const distFiles = fs.readdirSync(path.join(p.dir, 'dist'));
  const has = re => distFiles.some(f => re.test(f));
  const parts = [];
  if (has(/ - Lesson Plan\.pdf$/)) parts.push('LESSON PLAN');
  if (has(/ - Worksheet\.pdf$/)) parts.push(has(/Fillable\)\.pdf$/) ? 'WORKSHEET (+ FILLABLE)' : 'WORKSHEET');
  if (has(/ - Teacher Guide\.pdf$/)) parts.push('TEACHER GUIDE');
  if (has(/\.pptx$/)) parts.push('SLIDE DECK');
  if (has(/ - Unit Overview\.pdf$/)) parts.push('UNIT OVERVIEW');
  const band = p.meta.bundle_of
    ? `PREVIEW · ${p.meta.bundle_of.length} complete lessons · plans, worksheets (+ fillable), teacher guides, slide decks`
    : `PREVIEW · full download: ${parts.join(' · ')}`;
  const img = f => `data:image/png;base64,${fs.readFileSync(path.join(rev, f)).toString('base64')}`;
  const sheet = f => `<div class="pg"><img src="${img(f)}"><div class="band">${band}</div></div>`;
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face{font-family:'Space Grotesk';font-weight:700;src:url('file://${path.resolve('brand/fonts/SpaceGrotesk-700.ttf')}')}
    *{margin:0;box-sizing:border-box} body{width:8.5in}
    .pg{width:8.5in;height:11in;position:relative;page-break-after:always;overflow:hidden;background:#fff}
    .pg:last-child{page-break-after:auto} .pg img{width:8.5in;height:11in;display:block}
    .band{position:absolute;left:-2in;right:-2in;top:46%;transform:rotate(-24deg);background:rgba(255,176,32,.82);color:#14141F;
      font:700 22px 'Space Grotesk',sans-serif;letter-spacing:1.5px;text-align:center;padding:14px 0;text-transform:uppercase}
  </style></head><body>${cover ? `<div class="pg"><img src="${img(cover)}"></div>` : ''}${samples.map(sheet).join('')}</body></html>`;
  const tmp = path.join(p.dir, 'dist', '.preview.html'); fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'networkidle' });
  const lesson = (p.meta.short_name || String(p.meta.title).split(':')[0]).trim().replace(/[\\/:*?"<>|]/g, '');
  const out = path.join(p.dir, 'dist', `${lesson} - Preview.pdf`);
  await page.pdf({ path: out, width: '8.5in', height: '11in', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  fs.rmSync(tmp);
  console.log('PREVIEW', path.relative(process.cwd(), out), `(cover + ${samples.length} sample pages)`);
}
await browser.close();
