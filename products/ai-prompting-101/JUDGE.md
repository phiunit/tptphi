# Judge Report v4 — How to Talk to AI (Lesson 1 of 6, FREE)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · 7 screenshots in dist/review/ (viewport-reset judge)

## Process note (read first)
The v3 report (2026-09-01) was written from screenshots produced by a `judge.mjs` that carried
the previous file's viewport into the next — covers were captured at the wrong size, so its
cover verdicts were not evidence-backed. An independent audit pass (2026-09-02/03) re-read
every page and every source file adversarially. This v4 report replaces v3 in full.

## Defects found by the independent audit — all fixed
1. **Alignment-washing on ISTE 1.3.b.** Exit Ticket #2 assessed "what would you double-check"
   but nothing in the lesson taught it. Fixed: Exit Ticket block now opens with a scripted
   1-minute "genies are tricksters" rule (lesson plan p2; TG p2 taught/assessed line updated).
2. **Cover art collision.** Lamp smoke ran through the 45-min chip. Fixed: lesson chip moved
   under the brand line, motif redrawn; render now hard-fails art within 12px of any text.
3. **Write-in space too small** for 12-year-old handwriting on Cursed Wish boxes; enlarging
   them overflowed worksheet p1 (49px) and TG p2 (44px). Fixed: `body.compact`, boxes 100px.
4. **Checklist had no tick targets** (empty cells). Fixed: printed check squares per wish.
5. **Genie-test row was ambiguous** ("Genie-proof?"). Fixed: "✓ only if the genie can't twist it."
6. **Business jargon on a teacher page** ("AI workflow"). Fixed → "AI task"; term retired
   store-wide in brand/RETIRED_TERMS.txt and enforced by validate.

## Gate 0 hunt (what was checked, nothing found after fixes)
Read every student sentence aloud; Mateo's math ($15/wk × 8 wks = $120 ✓); timing
8+10+22+5 = 45 ✓ (validate); three codes identical in yaml / lesson chips / TG full text
(validate verbatim-check); render layout gates green; no copyrighted names; answer key
exemplars present for all three wishes (TG p1).

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 1 | Alignment per code | meets | 1.5.c taught P.R.O. (LP p1), assessed checklist P/R/O rows (WS p2); 1.3.b taught trickster rule (LP p2, scripted), assessed ET#2; W.6.4 taught three clauses, assessed wish repairs + ET#1 |
| 1 | Depth | meets | Repairs = DOK 2–3; Break-it = DOK 3 evaluate, assessed via checklist + "sneakiest twist" |
| 1 | Assessment ↔ objectives | meets | Obj1→Genie test row; Obj2→ET#1; Obj3→ET#2 (works unplugged: "imagine the answer you'd expect") |
| 2 | Sub-teacher runnable | meets | Scripted warm-up ruins, Bridge, Worst-Genie improv moves, honesty Q&A (TG p2) |
| 2 | Differentiation | meets | Support frames (TG p2), extension, ELL, unplugged (LP p2) |
| 2 | Print reality | meets | Line-art lamp/sparkle, one accent, 100px boxes, tick squares |
| 3 | Thumbnail | meets | Cover: title, "Lesson 1 of 6", FREE, grade chip, lamp — verified on cover.png |
| 3 | Value density | meets | P.R.O. framework + adversarial Break-it mechanic + 3 scenario world + exemplar keys |
| 3 | Representation | meets | Amara / Mateo / Yuki, each the competent hero |
| 3 | Voice / listing | meets | Kid-world vocabulary; title 78 chars keyword-first; description leads with "No student AI accounts needed" |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- Projectable warm-up slides for large rooms (candidate add-on).
- Remove the FREE badge if the price ever changes.
