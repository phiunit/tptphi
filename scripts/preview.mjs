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
  const pngs = fs.readdirSync(rev).filter(f => f.endsWith('.png'));
  const cover = pngs.find(f => /cover/i.test(f));
  const order = ['worksheet-p1', 'lesson-plan-p1', 'worksheet-p2', 'unit-overview-p1', 'teacher-guide-p1'];
  const samples = order.map(b => pngs.find(f => f.startsWith(b))).filter(Boolean).slice(0, 3);
  const total = fs.readdirSync(path.join(p.dir, 'dist')).filter(f => f.endsWith('.pdf')).length;
  const img = f => `data:image/png;base64,${fs.readFileSync(path.join(rev, f)).toString('base64')}`;
  const sheet = f => `<div class="pg"><img src="${img(f)}"><div class="band">PREVIEW · full download has ${total} print-ready PDFs</div></div>`;
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face{font-family:'Space Grotesk';font-weight:700;src:url('file://${path.resolve('brand/fonts/SpaceGrotesk-700.ttf')}')}
    *{margin:0;box-sizing:border-box} body{width:8.5in}
    .pg{width:8.5in;height:11in;position:relative;page-break-after:always;overflow:hidden;background:#fff}
    .pg:last-child{page-break-after:auto} .pg img{width:8.5in;height:11in;display:block}
    .band{position:absolute;left:-2in;right:-2in;top:46%;transform:rotate(-24deg);background:rgba(255,176,32,.82);color:#14141F;
      font:700 30px 'Space Grotesk',sans-serif;letter-spacing:2px;text-align:center;padding:14px 0;text-transform:uppercase}
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
