# The Gauntlet Loop — how a product earns "ship"

The gauntlet loop is Matt Shumer's pattern (named while building Claude of Duty): one group of
agents builds, a separate group judges against a concrete bar, and the work goes back through the
loop until the judges stop finding reasons to reject it. `npm run audit` is the machine floor;
the gauntlet is what sits above it. It replaces the single self-written JUDGE.md pass.

## Roles (never merged)
- **Lead** (the session agent): sets the bar, splits the work into independently judgeable
  surfaces, dispatches, adjudicates evidence, keeps the ledger. **Never grades its own fixes.**
- **Builder** (the lead, or a builder agent): fixes the largest supported gap first. **Never
  declares PASS.** Never writes to the ledger's verdict column.
- **Critic** (a fresh subagent per round, per assignment): hostile auditor with separate context.
  Inspects the REAL artifact (review PNGs, PDFs, the .pptx's slide PNGs, product.yaml) — never a
  summary, never the builder's notes. **Never opens `products/*/JUDGE.md` or `docs/gauntlet/`**
  (that is builder self-assessment and prior-round context). A critic who saw a draft never
  judges its retry.

## Surfaces (the units that get a verdict)
Per product: `cover` · `lesson-plan` · `worksheet` (print + fillable) · `teacher-guide` ·
`deck` · `listing` (title, description, INCLUDES, standards, UPLOAD_SHEET). Cross-cutting:
`buyer` (what a teacher sees before paying, across the whole line) · `student` (what a
12-year-old and an ELL reader experience on paper and on the projector) · `unit` (the six
lessons as one coherent course + the bundle).

## The bar (concrete; the critic compares side by side, not "does it feel good")
A surface SHIPS only when it meets every line below AND wins or ties a blind side-by-side
against the **reference**: the same surface in `products/ai-prompting-101` (the most-audited
lesson; for L1 itself the reference is the written exemplar in each line).

**cover** — at 200px tall you can read what it is (title), for whom (grade chip ≥ 24px) and why care (one
≤ 10-word sub at ≥ 40px bold); ≤ 4 words per title line; art fully inside the frame; chips: lesson-of-6, grade, minutes, "No prep · No devices needed"; motif and dots ≥ 12px
from every text line (machine gate); nothing said twice; art carries the lesson's analogy.
**lesson-plan** — ≤ 2 pages; every block has minutes and they sum to 45 (machine gate) and each
block is doable in its minutes for 30 students; a sub who has never seen it can run it from the
page: ≥ 3 verbatim teacher lines, every transition written, one what-if per activity; materials
list complete and true to the worksheet; Support / Extension / ELL / No-device all named;
standards chips = yaml (machine gate); bridge lines hedged for standalone buyers.
**worksheet** — FK ≤ 8.5 on the whole page (machine gate); every task classifiable, ≥ half at
DOK 2+, ≥ 1 DOK 3 that is assessed; ≥ 24px per ruled line, ≥ 72px per box, rows/cells ≥ 34px;
every instruction unambiguous to a 12-year-old on first read; no adult/business vocabulary
(brand/RETIRED_TERMS.txt + ANTI_SLOP 13b); named characters varied and each competent; exit
ticket measures the stated objectives; photocopy-safe art; no page > 45% blank; fillable copy
has a field on every write-in and nothing else.
**teacher-guide** — ≤ 3 pages; exemplar or key for EVERY student item including the exit
ticket; taught/assessed line per standard naming a real item; discussion moves + what-ifs;
"why this lesson" orientation; no page > 60% blank; every factual claim true and un-disputable.
**deck** — one moment per slide, in lesson order, minutes match the plan; speaker notes carry the
script and the answer keys, slides never carry answers or a false claim; ≤ 6 bullets; no text
overflow (machine gate); title slide reads at the back of a room.
**listing** — title ≤ 80, keyword-first, house formula `<keyword phrase> | Middle School 6-8 | <one differentiator>` (the grade band is a descriptor, not a second hook); description ≥ 400 chars, opens
"NO STUDENT AI ACCOUNTS NEEDED", every promise (pages, passages, keys, fillable, deck) true;
standards named exactly as yaml; INCLUDES complete; UPLOAD_SHEET identical to yaml.
**buyer** — the six covers read as one line at thumbnail size; the free lesson makes the paid
five obvious; price note math true; no listing contradicts another; a teacher can tell in 10 s
what they will print tomorrow.
**student** — first read of every instruction: no "wait, what do I do?"; cultural references
carry the concept (never decoration); nothing embarrassing to read aloud; ELL: frames present,
idioms glossed or avoided.
**unit** — through-line (human → AI → human) visible in every lesson; naming, chips, kickers,
footers uniform; no lesson references material another lesson doesn't have; bundle overview true.

## Critic output (per surface)
`SHIP IT` or `REJECT`, then numbered findings, each with: severity (BLOCKER / MAJOR / MINOR),
file + line or PNG name, the quoted text or what was seen, why it fails the bar line it fails,
and the specific fix. A REJECT with zero BLOCKER/MAJOR findings is not allowed — name the line
of the bar it loses to. A SHIP IT must say what was checked. When unsure, REJECT.

## The loop
1. **Round N critics** (fresh): one critic per product (all six surfaces) + `buyer` + `student`
   + `unit`. Parallel. They receive only this file and the paths.
2. **Adjudicate**: the lead de-duplicates, drops findings that contradict a machine gate or the
   corpus (with a written reason in the ledger), and orders by severity.
3. **Build**: fix largest supported gap first; re-run `npm run audit`.
4. **Blind A/B** (from round 2): for every revised surface a fresh critic sees the baseline PNG
   and the new PNG unlabeled (A/B), picks the better one, and names why. If the baseline wins,
   the revision is reverted or redone.
5. **Repeat** with fresh critics on every REJECTed surface plus a random third of the SHIPped ones
   (regression check).

## Stop rules
Stop when ANY holds: every surface has SHIP IT from a critic who has not seen an earlier round;
two consecutive rounds produce no net change in verdicts; four rounds. Always record remaining
gaps below the bar and every pending human gate (real-PowerPoint open, TPT attended upload).

## Ledger
`docs/gauntlet/<date>/workbench.md`: bar version, per-round verdict table (surface × product),
findings with disposition (fixed / rejected-with-reason / deferred), A/B results, residual gaps,
human gates. Critics never write to it.
