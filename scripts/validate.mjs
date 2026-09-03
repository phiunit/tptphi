// Pre-upload checklist: every product must have complete metadata + rendered assets.
// Usage: npm run validate [-- <product-slug>]
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { listProducts, ROOT } from './lib.mjs';

// Standards registry: codes must exist AND their text must match verbatim.
// Registry is the source of truth (curriculum/standards-registry.yaml).
let REG = null;
const regPath = path.join(ROOT, 'curriculum', 'standards-registry.yaml');
if (fs.existsSync(regPath)) {
  try { REG = parse(fs.readFileSync(regPath, 'utf8')).frameworks || null; } catch { REG = null; }
}
const norm = t => String(t).replace(/\s+/g, ' ').trim().toLowerCase();
function checkStandards(meta) {
  const errs = [];
  for (const s of meta.standards || []) {
    if (!s.framework || !s.code) { errs.push('standard missing framework or code'); continue; }
    if (!REG) continue; // registry not present yet — skip rather than false-fail
    const fw = REG[s.framework];
    if (!fw) { errs.push(`unknown framework "${s.framework}" (not in standards-registry.yaml)`); continue; }
    const entry = (fw.codes || {})[s.code];
    if (entry === undefined) { errs.push(`code ${s.framework} ${s.code} is NOT in the registry — verify it or remove it`); continue; }
    const regText = typeof entry === 'object' ? entry.text : entry;
    if (regText && norm(regText) !== norm(s.text || '')) {
      errs.push(`${s.framework} ${s.code} text does not match the registry verbatim`);
    }
  }
  return errs;
}

const REQUIRED = ['title', 'line', 'grades', 'price_usd', 'description', 'tags', 'standards', 'resource_types'];
let fail = 0;
for (const p of listProducts(process.argv[2])) {
  const errs = [];
  for (const k of REQUIRED) if (p.meta[k] == null || p.meta[k] === '') errs.push(`missing ${k}`);
  if (p.meta.title && p.meta.title.length > 80) errs.push(`title ${p.meta.title.length} chars (TPT max ~80)`);
  if (p.meta.description && p.meta.description.length < 400) errs.push('description under 400 chars — thin for TPT SEO');
  if (Array.isArray(p.meta.tags) && p.meta.tags.length < 3) errs.push('fewer than 3 tags');
  if (Array.isArray(p.meta.standards) && (p.meta.standards.length < 3 || p.meta.standards.length > 5))
    errs.push(`${p.meta.standards.length} standards (rule: 3-5 real, taught-and-assessed codes)`);
  errs.push(...checkStandards(p.meta));
  const dist = path.join(p.dir, 'dist');
  const distFiles = fs.existsSync(dist) ? fs.readdirSync(dist) : [];
  if (!distFiles.some(f => f.endsWith('.pdf'))) errs.push('no rendered PDF in dist/ (run npm run render)');
  if (!distFiles.some(f => f.toLowerCase().includes('cover') && f.endsWith('.png'))) errs.push('no cover PNG in dist/');
  if (errs.length) { fail++; console.log(`✗ ${p.slug}\n   - ` + errs.join('\n   - ')); }
  else console.log(`✓ ${p.slug} — upload-ready (${distFiles.length} assets)`);
}
process.exit(fail ? 1 : 0);
