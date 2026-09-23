// The whole quality gauntlet in one command — what CI runs on every push and every Monday,
// and what an agent runs before calling a product done. Stops at the first red gate.
//   npm run audit [-- <slug>]
// Sequence: render (layout + cover-clearance gates, fillable PDFs, decks, zips) → validate
// (listing, standards, status, retired terms) → readability (student pages ≤ grade 8.5) →
// judge screenshots → preview PDFs.
import { spawnSync } from 'node:child_process';

const slug = process.argv[2];
const steps = ['render', 'validate', 'readability', 'judge', 'preview', 'shipcheck'];
const t0 = Date.now();
if (slug) {
  for (const step of steps) run(step, slug);
} else {
  // No slug: gauntlet every product that is not under construction. `status: draft` means a builder
  // is still writing pages (its includes/decks may not exist yet); drafts are audited explicitly with
  // `npm run audit -- <slug>` and can never reach `rendered` without passing the whole gauntlet.
  const { listProducts } = await import('./lib.mjs');
  for (const p of listProducts()) {
    if (p.meta?.status === 'draft') { console.log(`\n── ${p.slug}: SKIPPED (status draft) ──`); continue; }
    for (const step of steps) run(step, p.slug);
  }
}
console.log(`\nAUDIT GREEN — ${steps.join(' → ')} in ${Math.round((Date.now() - t0) / 1000)}s`);

function run(step, s) {
  console.log(`\n══ ${step}${s ? ' ' + s : ''} ══`);
  const args = ['run', '-s', step]; if (s) args.push('--', s);
  const r = spawnSync('npm', args, { stdio: 'inherit' });
  if (r.status !== 0) { console.error(`\nAUDIT RED at "${step}" — fix and re-run.`); process.exit(r.status || 1); }
}
