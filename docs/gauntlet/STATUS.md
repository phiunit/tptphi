# STATUS — Gauntlet, AI Literacy line (authority: this file + PLAN.md)
Updated 2026-09-05 06:30 UTC by the lead.

## Done (with commits)
- Round 1 critics (9, fresh context) — reports in docs/gauntlet/2026-09-03/ — d85fe5e, 30326b4
- Adjudication + build order — workbench.md — 30326b4
- Tooling: fillable measurer (0-height blanks, prose underscores), preview band + key page, upload-sheet subjects /
  boilerplate / bundle gate, deck content gate, catalog title sync — 30326b4
- Bundle cover to unit chip grammar, one-line sub, six-card art; overview + listing truths; bundle zip packs children — c7bb02a

- L1 ai-prompting-101 built to PLAN (D1–D6, D8, D9; L1 section) — lead reviewed cover-200, ws p2, tg p2 — f66b687
- scripts/slides.mjs title-slide chip → "No prep · No devices needed" (D6) — f66b687

- L3 built to PLAN — lead reviewed cover-200, ws p1–p2 — d64bc21
- L2 built to PLAN (3-page TG accepted) — lead reviewed cover-200, ws p1–p2 — a9dacd8
- L6 built to PLAN (3-page TG accepted) — lead reviewed cover strip, ws p1, tg p2 — 1fdd172
- L4 built to PLAN — lead reviewed cover strip, ws p2, tg p1 — 1a4f8d6
- L5 built to PLAN — lead reviewed cover 4-up, ws p1–p2 — (this commit)
- Full audit GREEN across all seven products after the six builds; catalog titles synced to product.yaml — (this commit)

- Round 2 critics (fresh, one product each, blind A/B vs baseline): reports r2-critic-L1..L6 — all 36 A/B picks favoured
  the rebuilt pages (per critic descriptions; map files in scratchpad). Tooling from their findings: print-media
  layout gate + PDF page-count assertion, includes-exist gate, one-of radio groups, deck title override — c23759e, 836a3fb
- Round 2 fixes built and lead-reviewed: L1–L3 c6e3519 · L4–L5 7798238 · L6 (this commit); full audit GREEN

## Agreed (decided, being built) — see PLAN.md D1–D9 + per-lesson
- L2–L6 builders, one per product folder. Two waves (L6, L3, L2 → then L4, L5): six in parallel hit the account
  rate limit twice and died mid-edit; resumed builders finish on top of the dirty tree. Tree is dirty from an interrupted first attempt
  (rate limit); builders treat current content as draft.
- Lead reviews cover-200 / fill / 2–3 page screenshots + checks JSON per report; commits per product.

## Open (needs a decision or a human)
- HUMAN GATE (Phi): TPT bundle with a $0 child — confirm at upload; fallback is the bundle zip (already packs all six).
- HUMAN GATE (Phi): open each .pptx in real PowerPoint/Keynote once before upload (LibreOffice unavailable here).
- Round 2 wave 3: bundle+unit, buyer, student critics (fresh) on the rebuilt line. Then Round 3: fresh critics on every surface REJECTed in round 2 (L1 lp/ws/tg/listing · L2 deck/listing · L3 lp/ws · L4 cover/lp/ws/deck/listing · L5 all · L6 lp/ws/tg/deck).
- Idea (lead, not yet agreed): a GLOSS_TERMS gate — idioms allowed on student pages only if glossed in the same panel.
