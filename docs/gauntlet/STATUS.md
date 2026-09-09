# STATUS — Gauntlet, AI Literacy line (authority: this file + PLAN.md)
Updated 2026-09-05 08:20 UTC by the lead.

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

- Round 2 wave 3: bundle+unit and buyer critics (reports r2-critic-bundle-unit, r2-critic-buyer); unit+bundle builder:
  preview band fits and is translucent + PREVIEW tag, bundle preview shows student pages, bundle title/badge "Save 30%",
  Standards line + nine codes (validate allows a bundle up to 12), L4 sentence two names the activity, human → AI →
  human in L4/L6, cover CSS unified, L4/L5/L6 art polish, all seven upload sheets regenerated; full audit GREEN — (this commit)

## Agreed (decided, being built) — see PLAN.md D1–D9 + per-lesson
- L2–L6 builders, one per product folder. Two waves (L6, L3, L2 → then L4, L5): six in parallel hit the account
  rate limit twice and died mid-edit; resumed builders finish on top of the dirty tree. Tree is dirty from an interrupted first attempt
  (rate limit); builders treat current content as draft.
- Lead reviews cover-200 / fill / 2–3 page screenshots + checks JSON per report; commits per product.

- Deferred to round 3 (lead): unify lesson-plan p1 section layout (L1 inline chips / L2–L4 row / L5–L6 float) — two critics flagged it.

### Round 3 (started 2026-09-09) — fresh blind critics per lesson, waves of two
- L1 critic done → r3-critic-L1.md: LP/WS/TG SHIP, listing REJECT (description promise the plan didn't keep). 10 small fixes accepted, title overrule logged. FIXED 77234a3 (audit green).
- L5 critic done → r3-critic-L5.md: cover/TG/listing SHIP; LP/WS/deck REJECT on one root cause (Defend It sheet handoff unwritten) + narrow exit-ticket job field. Procedure decided by lead. FIXED 77234a3 (audit green; job field 59 → 469 pt).
- L2 critic done → r3-critic-L2.md: cover SHIP, everything else REJECT on one root cause (Exit #3 in three phrasings, one line for a two-part item) + Frame block untimed against handwriting speed. All 16 accepted. FIXED (see commit below): retimed 2·8·7·3, .addcard boxes 104px (field 48.8pt), Exit #2/#3 two lines each. Builder flags accepted: slide 8 drops the feed line to fit the compare gate; Exit #2 condensed on slide 11 (list gate).
- L3 critic running. Next: L4 + L6.

### News Desk (PLAN.md "NEWS DESK BUILD")
- Builder A DONE 633461a: frames.html (10 frames, 247 fillable fields, FK 2.8), lesson-plan.html (2 pp), cover (3 iterations, lead-approved), product.yaml (title 77 chars). Lead rulings: includes grows to six files (Worked Examples PDF ships); TG exactly 4 pp; examples exactly 4 pp; Frame 5 cites 6.RP.A.3c only (3b not on the list — revisit if a critic flags it).
- Builder B running: teacher-guide, examples + FACTS.md, slides.yaml, then news-desk-frame-free.
- Status stays `draft` (catalog + yaml) until every FACTS.md line is verified — validate blocks `rendered` while PENDING.

## Open (needs a decision or a human)
- HUMAN GATE (Phi): TPT bundle with a $0 child — confirm at upload; fallback is the bundle zip (already packs all six).
- HUMAN GATE (Phi): open each .pptx in real PowerPoint/Keynote once before upload (LibreOffice unavailable here).
- Round 3 in progress (see Agreed). Remaining critics: L2, L3, L4, L6.
- HUMAN GATE (Phi): FACTS.md verification for news-desk-frames worked examples before status `rendered`; "about the author" line decision (STRATEGY.md News desk).
- Idea (lead, not yet agreed): a GLOSS_TERMS gate — idioms allowed on student pages only if glossed in the same panel.
