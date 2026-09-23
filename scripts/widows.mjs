// Widow check — a single word stranded alone on the last line of a paragraph, bullet or cell.
//   npm run widows [-- <slug>]
// Every blind A/B in the Opus 5.5 pass found these, and no other gate could: the text is correct, the page
// fits, and only a reader sees "too." sitting on a line by itself. Printed pages are measured in print media
// at the real page width; a word is a widow when it starts a new line after the one before it.
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts } from './lib.mjs';

const slug = process.argv[2];
const MIN_WORDS = 6;   // shorter lines (labels, "Name:", headings) are allowed to end on one word
const browser = await launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 816, height: 1056 });
let total = 0;
for (const p of listProducts(slug)) {
  const srcDir = path.join(p.dir, 'src');
  for (const f of fs.readdirSync(srcDir).filter(f => f.endsWith('.html') && !f.startsWith('product.'))) {
    await page.goto('file://' + path.join(srcDir, f), { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    const hits = await page.evaluate((MIN) => {
      const out = [];
      const sel = 'p, li, td, th, .say, .whatif, .callout, .sub, .cue, .frame';
      for (const el of document.querySelectorAll(sel)) {
        // Measure leaf-ish blocks only: skip an element that contains another measured block.
        if (el.querySelector(sel)) continue;
        const words = [];
        const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        for (let n; (n = tw.nextNode());) { const re = /\S+/g; let m; while ((m = re.exec(n.data))) words.push([n, m.index, m.index + m[0].length, m[0]]); }
        // Punctuation that lands in its own text node (")." after </strong>) is not a word; measure the real
        // last word against the real word before it, or "fits)." alone on a line goes unseen.
        for (let i = words.length - 1; i >= 0; i--) if (!/[\p{L}\p{N}]/u.test(words[i][3])) words.splice(i, 1);
        if (words.length < MIN) continue;
        const rect = w => { const r = document.createRange(); r.setStart(w[0], w[1]); r.setEnd(w[0], w[2]); const rs = r.getClientRects(); return rs[rs.length - 1]; };
        const a = rect(words[words.length - 2]), b = rect(words[words.length - 1]);
        if (!a || !b) continue;
        if (b.top > a.top + 2) {
          const pg = el.closest('.page'); const pages = [...document.querySelectorAll('.page')];
          out.push({ page: pages.indexOf(pg) + 1, word: words[words.length - 1][3], text: el.textContent.replace(/\s+/g, ' ').trim().slice(-70) });
        }
      }
      return out;
    }, MIN_WORDS);
    for (const h of hits) { total++; console.log(`${p.slug}/${f} p${h.page}: "${h.word}"  …${h.text}`); }
  }
}
await browser.close();
console.log(total ? `\n${total} widow(s)` : '✓ no widows');
process.exitCode = total ? 1 : 0;
