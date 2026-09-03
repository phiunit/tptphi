# Judge Report v2 — Robots Do the Boring Work (Lesson 5 of 6)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · 7 screenshots in dist/review/ (viewport-reset judge)

## Process note
The v1 report (2026-09-01) was templated and relied on a judge screenshot tool with a viewport
carry-over bug. An independent audit (2026-09-02/03) re-read every page and source file. This
v2 report replaces it.

## Defects found by the independent audit — all fixed
1. **Character mismatch across documents.** The front-desk character had different names on the
   worksheet vs. the teacher guide. Fixed: Jaylen everywhere (WS / LP / TG / yaml).
2. **Alignment-washing on CCSS SL.6.4.** The share-out assessed presenting but nothing taught
   delivery. Fixed: share-out step now coaches "look up, speak up, land the trade" and gives every
   pair 30 seconds (LP p2; WS p2 "Defend It — Say It Out Loud").
3. **Bridge assumed prior lessons.** Fixed: hedged for standalone buyers.
4. **Retired-terms gate false positive** on the verbatim CSTA 2-IC-20 text ("career options").
   Fixed in tooling: verbatim standards text is exempt from the scan.
5. **Title** rewritten to the keyword-first house formula (75 chars).
6. **Cover chip row** standardized to the unit pattern.

## Gate 0 hunt
Twelve tasks A–L match across WS ↔ TG sort key; every task has a defensible column in the key
(TG p1–2) with the "at least two per column" rule satisfiable; timing 7+10+15+8+5 = 45 ✓
(validate); three codes verbatim (validate); layout green; the "tradeoff" vocabulary is
introduced on the student page before it is used (WS p2).

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 1 | Alignment per code | meets | CSTA 2-IC-20 taught DI (how automation changes tasks) + sort, assessed Trade cards + ET; SL.6.4 taught delivery coaching, assessed the share-out; ISTE 1.3.d taught the studio scenario, assessed ET real-job board |
| 1 | Depth | meets | Sort = DOK 2; Trade cards (who wins / loses / what goes wrong) = DOK 3, assessed |
| 1 | Assessment ↔ objectives | meets | Obj1→sort; Obj2→Trade cards; Obj3→ET real job |
| 2 | Sub-teacher runnable | meets | Scripted warm-up, DI panel, house rule, share-out protocol |
| 2 | Differentiation | meets | Support, extension, ELL, unplugged |
| 2 | Print reality | meets | Line-art desk/fader glyphs, one accent, 34px sort slots + ruled trade lines |
| 3 | Thumbnail | meets | Cover verified: title, lesson chip, grade chip, motif |
| 3 | Value density | meets | 12-task studio scenario + three-column framework + trade-card protocol + key |
| 3 | Representation | meets | Nia owns the studio; Ravi and Jaylen skilled crew; no group tokenized |
| 3 | Voice / listing | meets | "Because robots is not a reason"; title 75 chars |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- A cut-out card version of tasks A–L for kinesthetic sorting.

## Second independent audit — 2026-09-03 (post-fix re-verification)
A second adversarial judge re-read all 46 screenshots and every source file after the fixes above.
It found defects the first pass and this report had missed; every one is now fixed and re-rendered.
Two were tooling blind spots, closed at the root:
- **Cover gate ignored decorative star dots.** An 8px dot sat on the subtitle of every lesson cover
  (it read as a stray period). The render gate only tested motif SVGs. Fixed: `.star` elements are
  now art for the 12px clearance test; the dot moved to the right margin on all six covers.
- **Readability gate under-sampled.** It scored only `p`/`li` text and stripped tables, so role cards
  and table prompts students actually read were never measured. Fixed: it now scores everything on
  the page except mastheads, chips, footers and art (scores re-run, all still ≤ 8.5).

Product-specific findings, fixed:
- **Share-out did not fit its 8 minutes** (1 min + 15 pairs × 30 s > 8). Restructured: 1 min delivery
  coaching → 4 min pairs-of-pairs (every pair still speaks and is scored) → 3 min whole-class round.
- Cover said "automate it, assist it, or keep it human" while every page says AUGMENT; fixed.
- Kicker "The Studio Task Board" broke the unit pattern; now "The Task Board Lesson".
- Second star dot (640/520) read as a stray period after "your class"; moved.
- Stale UPLOAD_SHEET.md carried the retired title; regenerated.
Verdict after re-audit: **PASS** (0 fails, 0 partials).

## Digital companions — added 2026-09-03
- **Fillable worksheet** (`… - Worksheet (Fillable).pdf`): 26 transparent form fields laid over the printed
  write-in boxes (checklist rows are real checkboxes). Verified by rasterising the PDF with typed test values:
  fields sit inside their boxes, no border or fill covers the print design.
- **Slide deck** (`… - Slides.pptx`, 12 slides): one slide per lesson moment, minutes on each block, teacher
  script in speaker notes, cover art on the title slide. Reviewed via `dist/review/slide-NN.png` (HTML twin of
  the same geometry); the deck builder's text-overflow gate is green. Not yet opened in PowerPoint itself —
  LibreOffice is unavailable in this sandbox — so the first real-PowerPoint open is on the pre-upload checklist.
- Listing INCLUDES line updated to name both; both ship inside the product zip.
