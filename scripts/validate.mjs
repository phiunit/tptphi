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

// Teacher guide 'Full Standards Text' must be the product.yaml text, verbatim (one source of truth).
function checkGuideText(p) {
  const errs = [];
  const tg = path.join(p.dir, 'src', 'teacher-guide.html');
  if (!fs.existsSync(tg)) return errs;
  const html = fs.readFileSync(tg, 'utf8').replace(/&amp;/g, '&').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  for (const st of p.meta.standards || []) {
    if (!html.includes(String(st.text).replace(/\s+/g, ' ').trim())) errs.push(`teacher guide does not contain the verbatim text for ${st.framework} ${st.code}`);
  }
  return errs;
}
// product.yaml status must agree with catalog.yaml (two sources of truth drifting = a lie somewhere)
let CATALOG = {};
try { for (const row of parse(fs.readFileSync(path.join(ROOT, 'curriculum', 'catalog.yaml'), 'utf8')).products || []) CATALOG[row.slug] = row; } catch {}
function checkStatus(p) {
  const row = CATALOG[p.slug]; if (!row) return [`not in curriculum/catalog.yaml`];
  return row.status !== p.meta.status ? [`status "${p.meta.status}" in product.yaml vs "${row.status}" in catalog.yaml`] : [];
}


// Retired terms: analogies we've abandoned and jargon we've banned must not resurface anywhere in a product.
const RETIRED = fs.existsSync(path.join(ROOT, 'brand', 'RETIRED_TERMS.txt'))
  ? fs.readFileSync(path.join(ROOT, 'brand', 'RETIRED_TERMS.txt'), 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')) : [];
function checkRetired(p) {
  const errs = [];
  const terms = [...RETIRED, ...(p.meta.retired_terms || [])];
  const files = [path.join(p.dir, 'product.yaml'), ...(fs.existsSync(path.join(p.dir, 'src')) ? fs.readdirSync(path.join(p.dir, 'src')).map(f => path.join(p.dir, 'src', f)) : [])];
  for (const f of files) {
    let text = fs.readFileSync(f, 'utf8');
    for (const st of p.meta.standards || []) text = text.split(String(st.text)).join(' ').split(String(st.text).replace(/&/g, '&amp;')).join(' '); // verbatim standards text is exempt
    if (f.endsWith('product.yaml')) text = text.replace(/^(slug|bundle_of|retired_terms):.*$/gm, '');  // slugs are not prose
    text = text.replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/href="[^"]*"/g, '');
    for (const t of terms) {
      const re = new RegExp(`(^|[^\\w-])${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\w-])`, 'i');
      const m = re.exec(text);
      if (m) errs.push(`retired term "${t}" in ${path.basename(f)}: "…${text.slice(Math.max(0, m.index - 30), m.index + t.length + 30).replace(/\s+/g, ' ')}…"`);
    }
  }
  return errs;
}

let fail = 0;
for (const p of listProducts(process.argv[2])) {
  const errs = [];
  for (const k of REQUIRED) if (p.meta[k] == null || p.meta[k] === '') errs.push(`missing ${k}`);
  if (p.meta.title && p.meta.title.length > 80) errs.push(`title ${p.meta.title.length} chars (TPT max ~80)`);
  if (p.meta.description && p.meta.description.length < 400) errs.push('description under 400 chars — thin for TPT SEO');
  if (Array.isArray(p.meta.tags) && p.meta.tags.length < 3) errs.push('fewer than 3 tags');
  if (Array.isArray(p.meta.standards) && (p.meta.standards.length < 3 || p.meta.standards.length > 5))
    errs.push(`${p.meta.standards.length} standards (rule: 3-5 real, taught-and-assessed codes)`);
  errs.push(...checkStandards(p.meta), ...checkGuideText(p), ...checkStatus(p), ...checkRetired(p), ...checkIncludes(p));
  const dist = path.join(p.dir, 'dist');
  const distFiles = fs.existsSync(dist) ? fs.readdirSync(dist) : [];
  if (!distFiles.some(f => f.endsWith('.pdf'))) errs.push('no rendered PDF in dist/ (run npm run render)');
  if (!distFiles.some(f => f.toLowerCase().includes('cover') && f.endsWith('.png'))) errs.push('no cover PNG in dist/');
  if (errs.length) { fail++; console.log(`✗ ${p.slug}\n   - ` + errs.join('\n   - ')); }
  else console.log(`✓ ${p.slug} — upload-ready (${distFiles.length} assets)`);
}
process.exit(fail ? 1 : 0);

// Every file the listing promises must exist in dist/ and inside the product zip (a print-side spill can
// delete a PDF at render time; the listing must never promise a file the buyer won't get).
import { execFileSync as _exec } from 'node:child_process';
function checkIncludes(p) {
  const errs = []; const distDir = path.join(p.dir, 'dist');
  const inc = Array.isArray(p.meta.includes) ? p.meta.includes.map(String) : [];
  const zip = fs.existsSync(distDir) ? fs.readdirSync(distDir).find(f => f.endsWith('.zip')) : null;
  let zipList = [];
  if (zip) { try { zipList = _exec('unzip', ['-Z1', path.join(distDir, zip)]).toString().split('\n'); } catch {} }
  for (const raw of inc) {
    const m = String(raw).match(/^\s*([^()]*?\.(pdf|pptx))\b/); if (!m) continue; // items may carry a "(what it is)" gloss
    const base = path.basename(m[1].trim());
    if (!fs.existsSync(path.join(distDir, base))) errs.push(`includes: "${base}" is promised but missing from dist/`);
    else if (zip && !zipList.includes(base)) errs.push(`includes: "${base}" is missing from the zip`);
  }
  return errs;
}
