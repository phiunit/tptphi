// Pre-upload checklist: every product must have complete metadata + rendered assets.
// Usage: npm run validate [-- <product-slug>]
import fs from 'node:fs';
import path from 'node:path';
import { listProducts } from './lib.mjs';

const REQUIRED = ['title', 'line', 'grades', 'price_usd', 'description', 'tags', 'standards', 'resource_types'];
let fail = 0;
for (const p of listProducts(process.argv[2])) {
  const errs = [];
  for (const k of REQUIRED) if (p.meta[k] == null || p.meta[k] === '') errs.push(`missing ${k}`);
  if (p.meta.title && p.meta.title.length > 80) errs.push(`title ${p.meta.title.length} chars (TPT max ~80)`);
  if (p.meta.description && p.meta.description.length < 400) errs.push('description under 400 chars — thin for TPT SEO');
  if (Array.isArray(p.meta.tags) && p.meta.tags.length < 3) errs.push('fewer than 3 tags');
  const dist = path.join(p.dir, 'dist');
  const distFiles = fs.existsSync(dist) ? fs.readdirSync(dist) : [];
  if (!distFiles.some(f => f.endsWith('.pdf'))) errs.push('no rendered PDF in dist/ (run npm run render)');
  if (!distFiles.some(f => f.includes('cover') && f.endsWith('.png'))) errs.push('no cover PNG in dist/');
  if (errs.length) { fail++; console.log(`✗ ${p.slug}\n   - ` + errs.join('\n   - ')); }
  else console.log(`✓ ${p.slug} — upload-ready (${distFiles.length} assets)`);
}
process.exit(fail ? 1 : 0);
