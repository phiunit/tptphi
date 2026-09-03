// Readability gate: student-facing pages must read at ~grade 6-8.
// Flesch-Kincaid grade level over the prose a student actually reads
// (skips teacher-facing docs, tables of card data, and standards codes).
// Usage: npm run readability [-- <slug>]
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts } from './lib.mjs';

const STUDENT_DOCS = /worksheet|student/i;
const MAX_GRADE = 8.5; // FK grade level ceiling for student prose

function syllables(w) {
  w = w.toLowerCase().replace(/[^a-z]/g, '');
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  return (w.match(/[aeiouy]{1,2}/g) || ['x']).length;
}
function fk(text) {
  const sentences = text.split(/[.!?]+(?=\s|$)/).filter(s => s.trim().split(/\s+/).length > 2);
  const words = text.split(/\s+/).filter(w => /[a-z]/i.test(w));
  if (!sentences.length || words.length < 20) return null;
  const syl = words.reduce((a, w) => a + syllables(w), 0);
  return { grade: 0.39 * (words.length / sentences.length) + 11.8 * (syl / words.length) - 15.59,
           words: words.length, sentences: sentences.length,
           longest: sentences.reduce((a, s) => s.split(/\s+/).length > a.split(/\s+/).length ? s : a, '') };
}

const browser = await launch();
const page = await browser.newPage();
let fail = 0;
for (const p of listProducts(process.argv[2])) {
  const srcDir = path.join(p.dir, 'src');
  for (const f of fs.readdirSync(srcDir).filter(f => STUDENT_DOCS.test(f))) {
    await page.goto('file://' + path.join(srcDir, f), { waitUntil: 'networkidle' });
    const text = await page.evaluate(() => {
      // student prose only: paragraphs and list items, not tables/chips/mastheads/footers
      const skip = 'table, .chips, .masthead, .footer, .kicker, svg';
      document.querySelectorAll(skip).forEach(el => el.remove());
      return [...document.querySelectorAll('p, li')].map(el => el.textContent.trim())
        .filter(t => t.split(/\s+/).length > 4).join(' ');
    });
    const r = fk(text);
    if (!r) { console.log(`?  ${p.slug}/${f} — too little prose to score`); continue; }
    const ok = r.grade <= MAX_GRADE;
    if (!ok) fail++;
    console.log(`${ok ? '✓' : '✗'}  ${p.slug}/${f} — FK grade ${r.grade.toFixed(1)} (${r.words} words, ${r.sentences} sentences)`);
    if (!ok) console.log(`     longest sentence (${r.longest.trim().split(/\s+/).length} words): "${r.longest.trim().slice(0, 110)}..."`);
  }
}
await browser.close();
if (fail) { console.log(`\n${fail} student document(s) above grade ${MAX_GRADE}. Shorten sentences and swap long words.`); process.exitCode = 1; }
