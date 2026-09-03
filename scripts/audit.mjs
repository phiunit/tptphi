// The whole quality gauntlet in one command — what CI runs on every push and every Monday,
// and what an agent runs before calling a product done. Stops at the first red gate.
//   npm run audit [-- <slug>]
// Sequence: render (layout + cover-clearance gates, fillable PDFs, decks, zips) → validate
// (listing, standards, status, retired terms) → readability (student pages ≤ grade 8.5) →
// judge screenshots → preview PDFs.
import { spawnSync } from 'node:child_process';

const slug = process.argv[2];
const steps = ['render', 'validate', 'readability', 'judge', 'preview'];
const t0 = Date.now();
for (const step of steps) {
  if (step === 'judge' && !slug) {
    // judge.mjs takes one slug; fan out over every product
    const { listProducts } = await import('./lib.mjs');
    for (const p of listProducts()) run('judge', p.slug);
    continue;
  }
  run(step, slug);
}
console.log(`\nAUDIT GREEN — ${steps.join(' → ')} in ${Math.round((Date.now() - t0) / 1000)}s`);

function run(step, s) {
  console.log(`\n══ ${step}${s ? ' ' + s : ''} ══`);
  const args = ['run', '-s', step]; if (s) args.push('--', s);
  const r = spawnSync('npm', args, { stdio: 'inherit' });
  if (r.status !== 0) { console.error(`\nAUDIT RED at "${step}" — fix and re-run.`); process.exit(r.status || 1); }
}
