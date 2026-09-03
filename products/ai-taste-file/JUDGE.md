# Judge Report v2 — Teach AI Your Taste (Lesson 4 of 6)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · 7 screenshots in dist/review/ (viewport-reset judge)

## Process note
The v1 report (2026-09-01) was templated and relied on a judge screenshot tool with a viewport
carry-over bug. An independent audit (2026-09-02/03) re-read every page and source file. This
v2 report replaces it.

## Defects found by the independent audit — all fixed
1. **A standards code failed the alignment test (Gate 0 #4).** ISTE 1.1.c (customizing digital
   environments) was neither taught nor assessed by anything on the pages. Fixed: CUT and
   replaced with CCSS ELA SL.6.1, which the Editor's Chair partner-note protocol actually teaches
   (LP p2) and the two written notes assess (WS p2). chips / TG full text updated (the yaml description was NOT — see the second audit below).
2. **Overclaim on a teacher page.** Said a new chat "remembers nothing" as an absolute. Fixed:
   "a fresh chat knows nothing about you" (accurate for the default case).
3. **Analogy wobble.** Student page mixed "algorithm" and "feed". Fixed: "a For-You Page for words".
4. **Section numbering drifted** between worksheet (1–5) and TG references. Fixed: 1–5 everywhere.
5. **Overflow.** TG p2 by 29px, WS p2 by 92px. Fixed: `body.compact`, draft/revision boxes 112px.
6. **Cover art within 12px of a chip.** Fixed: motif redrawn lower-right; gate green.

## Gate 0 hunt
Every student sentence read aloud; the copy-ready AI prompt (TG p2) matches the worksheet
step it references; timing 6+9+12+14+4 = 45 ✓ (validate); three codes verbatim (validate);
ghost-note vs editor's-note exemplar present (TG p2); layout gates green; no copyrighted
creators or platforms named.

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 1 | Alignment per code | meets | W.6.5 taught DI beat 3 + Activity 2, assessed starred revision + ET; ISTE 1.6.b taught Taste File + own draft, assessed checklist rows 1 & 3; SL.6.1 taught partner-note protocol, assessed the two written notes + marked revision |
| 1 | Depth | meets | Taste File = DOK 2; editor's notes and revision = DOK 3 evaluate/create, assessed |
| 1 | Assessment ↔ objectives | meets | Obj1→Taste File sections; Obj2→two specific notes; Obj3→starred revision + ET#2 "fits my taste file because" |
| 2 | Sub-teacher runnable | meets | Scripted DI beats, note rules ("exactly 2 notes, no rewriting"), what-ifs |
| 2 | Differentiation | meets | Support frames + tone words (TG p2), extension, ELL, unplugged (partner plays the AI) |
| 2 | Print reality | meets | Line-art heart glyph, one accent, 112px boxes |
| 3 | Thumbnail | meets | Cover verified: title, lesson chip, grade chip, motif clear of text |
| 3 | Value density | meets | Taste-file framework + editor-not-ghostwriter loop + copy-ready prompt + note exemplars |
| 3 | Representation | meets | Student-authored content ("a channel or profile page you'd actually make") — every student is the author |
| 3 | Voice / listing | meets | Kid-world vocabulary; title 75 chars |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- ET lines on WS p2 are single-line; a second line each would suit longer answers.

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
- **Item 1 above claimed "yaml … all updated" — false.** The listing *description* still read
  "ISTE 1.6.b and 1.1.c" (the cut code), and UPLOAD_SHEET.md carried it too. Description now names
  1.6.b and CCSS ELA SL.6.1; upload sheet regenerated.
- Editor's Loop Checklist had a ✓ header but no tick targets; printed check squares added (same fix as L1).
- Cover subtitle ended "No prep, no devices needed." directly above a chip saying the same; removed.
Verdict after re-audit: **PASS** (0 fails, 0 partials).

## Digital companions — added 2026-09-03
- **Fillable worksheet** (`… - Worksheet (Fillable).pdf`): 12 transparent form fields laid over the printed
  write-in boxes (checklist rows are real checkboxes). Verified by rasterising the PDF with typed test values:
  fields sit inside their boxes, no border or fill covers the print design.
- **Slide deck** (`… - Slides.pptx`, 12 slides): one slide per lesson moment, minutes on each block, teacher
  script in speaker notes, cover art on the title slide. Reviewed via `dist/review/slide-NN.png` (HTML twin of
  the same geometry); the deck builder's text-overflow gate is green. Not yet opened in PowerPoint itself —
  LibreOffice is unavailable in this sandbox — so the first real-PowerPoint open is on the pre-upload checklist.
- Listing INCLUDES line updated to name both; both ship inside the product zip.
