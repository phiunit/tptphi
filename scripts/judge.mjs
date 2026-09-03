// TPT Judge — step 1 (mechanical): screenshot EVERY page of a product at print
// size into dist/review/, so a reviewer (human or agent) can inspect each page
// against docs/JUDGE.md. Judgment itself is not automated — the rubric is.
// Usage: npm run judge -- <product-slug>
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts } from './lib.mjs';

const slug = process.argv[2];
if (!slug) { console.error('Usage: npm run judge -- <product-slug>'); process.exit(1); }
const [product] = listProducts(slug);
if (!product) { console.error(`No product "${slug}"`); process.exit(1); }

const reviewDir = path.join(product.dir, 'dist', 'review');
// clear our own page shots; slide-NN.png belongs to slides.mjs (rebuilt by render)
if (fs.existsSync(reviewDir)) for (const f of fs.readdirSync(reviewDir)) if (!/^slide-\d+\.png$/.test(f)) fs.rmSync(path.join(reviewDir, f), { recursive: true, force: true });
fs.mkdirSync(reviewDir, { recursive: true });

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 850, height: 1100 } });
const srcDir = path.join(product.dir, 'src');
for (const f of fs.readdirSync(srcDir).filter(f => f.endsWith('.html'))) {
  await page.setViewportSize({ width: 850, height: 1100 }); // reset: a grown viewport from the previous doc re-lays-out covers and hides bottom-anchored art
  await page.goto('file://' + path.join(srcDir, f), { waitUntil: 'networkidle' });
  const base = f.replace(/\.html$/, '');
  const boxes = await page.evaluate(() =>
    [...document.querySelectorAll('.page')].map(pg => {
      const b = pg.getBoundingClientRect();
      return { x: b.x, y: b.y + window.scrollY, width: b.width, height: Math.min(b.height, 1056) };
    }));
  // Playwright clips only inside the viewport — grow it to cover the whole document
  const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: 850, height: Math.max(1100, Math.ceil(docHeight)) });
  if (!boxes.length) { // cover/preview: whole canvas
    const out = path.join(reviewDir, base + '.png');
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 850, height: 1100 } });
    console.log('shot', path.relative(process.cwd(), out));
    continue;
  }
  for (let i = 0; i < boxes.length; i++) {
    const out = path.join(reviewDir, `${base}-p${i + 1}.png`);
    await page.screenshot({ path: out, clip: boxes[i] });
    console.log('shot', path.relative(process.cwd(), out));
  }
}
await browser.close();
console.log(`\nNow review every PNG in dist/review/ against docs/JUDGE.md and write ${slug}/JUDGE.md.`);
