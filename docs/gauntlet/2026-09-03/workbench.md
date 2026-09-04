# Gauntlet — AI Literacy line · 2026-09-03
Bar: docs/GAUNTLET.md (v1). Reference surface: products/ai-prompting-101. Baseline PNGs snapshotted before round 1.
Products: ai-prompting-101 (L1) · ai-training-data-crate (L2) · ai-fact-check-lab (L3) · ai-taste-file (L4) · ai-boring-work (L5) · ai-agent-intern (L6) · bundle-ai-line.

## Round 1 — critics dispatched (fresh context, 9 critics)
_pending_

## Round 1 — results (9 critics, 45 surfaces)
SHIP IT: L2 cover · L3 cover · L3 listing · buyer: L2, L5, L6. Everything else REJECT.
Reports: r1-critic-{L1..L6,bundle-unit,buyer,student}.md (this folder).

### Adjudication (lead)
- **Title pipes** — bar says "≤ 1 pipe-separated hook". Ruling: the grade-band segment is a descriptor, not a hook; the
  house formula (keyword phrase | grade band | differentiator) stands. Bar text clarified. Standardize the band on
  "Middle School 6-8" (L5, L6 use "Grades 6-8").
- **Cover legibility at 200px** — accepted: sub becomes one ≤ 10-word line at ≥ 40px bold, chips ≥ 24px, "for grades 6–8"
  leaves every sub (chip carries it), art fully inside the frame and carrying the analogy (L4 heart, L5 board, L6 squad).
- **Fillable gaps** — root cause was the measurer (0-height inline blanks skipped; prose underscores not detected), fixed in
  fillable.mjs; remaining gaps are content (verdict/circle-one → tick boxes; L2 plain table cells → .slot).
- **"AI changes jobs more than it deletes them" / "teachers can tell" / "fresh chat knows nothing" / "training data"** —
  accepted as disputable or false; hedged wording adopted everywhere they appear.
- **Bundle zip** — accepted: the bundle zip now packs every child lesson's PDFs and deck so "6 lessons" is true by file,
  whatever TPT's child rule turns out to be (still a human gate at upload).
- **Description opener** — accepted: opener becomes one clause + the lesson's own hook in sentence two; the device
  sentence moves to INCLUDES; L1 gets the funnel paragraph; every INCLUDES lists fillable, deck, Support/Extension/ELL.
- **Rejected findings** — L3 "move Draft #3 up to make a 2-page worksheet" (buyer #5): the three-passage structure is the
  RI.6.8 fix from the last audit; instead Draft #2/#3 get the write-in space the p2 blank was hiding.
  L6 buyer #15 "loose-leaf contradicts zero prep": loose-leaf is not prep; description will say "plus scrap paper".
### Build order
1. Tooling (done): fillable measurer, preview band + key page, upload sheet subjects/boilerplate/bundle gate, deck content gate, catalog title.
2. Per-lesson builders (parallel, one per lesson) working only inside their product folder against their critic files.
3. Lead: bundle cover/overview/listing, render.mjs bundle zip, GAUNTLET.md pipe ruling, full audit.
4. Round 2: fresh critics on every REJECTed surface + blind A/B against the baseline PNGs.
