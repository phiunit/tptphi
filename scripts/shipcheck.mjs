// Ship check — the last gate before a product can be committed or uploaded.
//   npm run shipcheck [-- <slug>]
// `render` wipes a product's dist/ (the old preview is stale the moment pages change), so a render run on its
// own leaves the product with no preview — and the preview is the one file a buyer sees before paying.
// Nothing else would notice: every other gate passes. Require a preview newer than every file it depicts.
import fs from 'node:fs';
import path from 'node:path';
import { listProducts } from './lib.mjs';

const slug = process.argv[2];
const bad = [];
for (const p of listProducts(slug)) {
  if (!slug && p.meta?.status === 'draft') continue;
  const dist = path.join(p.dir, 'dist'); if (!fs.existsSync(dist)) { bad.push(`${p.slug}: no dist/`); continue; }
  const files = fs.readdirSync(dist);
  const prev = files.find(f => / - Preview\.pdf$/.test(f));
  if (!prev) { bad.push(`${p.slug}: no preview PDF in dist/ — run "npm run preview -- ${p.slug}"`); continue; }
  const pt = fs.statSync(path.join(dist, prev)).mtimeMs;
  const newer = files.filter(f => /\.(pdf|pptx)$/.test(f) && f !== prev && fs.statSync(path.join(dist, f)).mtimeMs > pt + 1000);
  if (newer.length) bad.push(`${p.slug}: preview is older than "${newer[0]}" — run "npm run preview -- ${p.slug}"`);
}
if (bad.length) { console.error('SHIP CHECK RED:\n  - ' + bad.join('\n  - ')); process.exit(1); }
console.log(`✓ ship check — ${slug ? slug + " has" : "every non-draft product has"} a current preview`);
