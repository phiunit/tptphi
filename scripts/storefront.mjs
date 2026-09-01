// Render brand/storefront/*.html to PNG at each file's exact body size.
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from './lib.mjs';
const dir = path.join(ROOT, 'brand', 'storefront');
const out = path.join(dir, 'dist');
fs.mkdirSync(out, { recursive: true });
const browser = await launch();
const page = await browser.newPage();
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.html'))) {
  await page.goto('file://' + path.join(dir, f), { waitUntil: 'networkidle' });
  const { w, h } = await page.evaluate(() => ({ w: document.body.offsetWidth, h: document.body.offsetHeight }));
  await page.setViewportSize({ width: w, height: h });
  const dest = path.join(out, f.replace('.html', `-${w}x${h}.png`));
  await page.screenshot({ path: dest, clip: { x: 0, y: 0, width: w, height: h } });
  console.log('PNG', path.relative(process.cwd(), dest));
}
await browser.close();
