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

for (const p of products) {
  const srcDir = path.join(p.dir, 'src');
  const distDir = path.join(p.dir, 'dist');
  fs.mkdirSync(distDir, { recursive: true });
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
  for (const f of files) {
    const url = 'file://' + path.join(srcDir, f);
    await page.goto(url, { waitUntil: 'networkidle' });
    const base = f.replace(/\.html$/, '');
    const asImage = /\.cover$|\.preview/.test(base);
    if (asImage) {
      const out = path.join(distDir, base + '.png');
      await page.setViewportSize({ width: 850, height: 1100 });
      await page.screenshot({ path: out, fullPage: true });
      console.log('PNG ', path.relative(process.cwd(), out));
    } else {
      const out = path.join(distDir, base + '.pdf');
      await page.pdf({ path: out, width: '8.5in', height: '11in', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
      console.log('PDF ', path.relative(process.cwd(), out));
    }
  }
}
await browser.close();
console.log('Render complete.');
