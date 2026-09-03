# Judge Report v2 — Lead Your AI Squad (Lesson 6 of 6)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · 8 screenshots in dist/review/ (viewport-reset judge)

## Process note
The v1 report (2026-09-01) was templated and relied on a judge screenshot tool with a viewport
carry-over bug. An independent audit (2026-09-02/03) re-read every page and source file. This
v2 report replaces it.

## Defects found by the independent audit — all fixed
1. **Layout (Gate 0 #6).** Worksheet p2 overflowed by 30px. Fixed: quest-card fields 56px on p1,
   46px on p2; page verified clean.
2. **Broken internal reference.** Lesson plan pointed to "TG p.3" for material that was on p.2.
   Fixed: exit-ticket scoring moved to TG p3 so the reference is true.
3. **Scout role lacked an evidence requirement**, so the Accuracy check had nothing to point at.
   Fixed: Scout output must say "where you'd verify it."
4. **Cover chip row** standardized; kicker "Lesson 6 of 6".

## Gate 0 hunt
Party roles (Planner / Scout / Critic, with the student as Leader) consistent across WS ↔ LP ↔ TG; timing
7+10+22+6 = 45 ✓ (validate); three codes verbatim (validate); no real game titles or
characters; answer-key exemplar quest card and verdict guidance present (TG p2–3).

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 1 | Alignment per code | meets | ISTE 1.5.c taught quest-card decomposition (Goal / What we know / Rules / Done looks like), assessed ET quest card; ISTE 1.7.c taught role hand-offs, assessed Step 4 leader review; W.6.4 taught card writing for a reader, assessed quest card clarity |
| 1 | Depth | meets | Card writing = DOK 2–3; Leader review with evidence + Run-it-back note = DOK 3 evaluate, assessed |
| 1 | Assessment ↔ objectives | meets | Obj1→quest card; Obj2→Step 4 checks; Obj3→Run-it-back note |
| 2 | Sub-teacher runnable | meets | Scripted warm-up, role cards, rotation protocol, what-ifs |
| 2 | Differentiation | meets | Support, extension, ELL, unplugged (partners play the agents) |
| 2 | Print reality | meets | Line-art badge glyph, one accent, 46–56px fields |
| 3 | Thumbnail | meets | Cover verified: title, lesson chip, grade chip, motif |
| 3 | Value density | meets | Quest-card template + party-role model + leader-review rubric + exemplar |
| 3 | Representation | meets | Student is the leader of an AI squad — agency stays with the human |
| 3 | Voice / listing | meets | "The name on the quest is YOURS"; title 79 chars |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- Role cards as a cut-out sheet.

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

Product-specific findings: none beyond the shared cover-dot and readability items.
Logged, not fixed (non-blocking): teacher guide p2 is ~65% blank after the exit-ticket scoring moved to
p3. Readability re-scored on the full page (role cards and quest-card table included): grade 6.1.
Verdict after re-audit: **PASS** (0 fails, 0 partials).

## Digital companions — added 2026-09-03
- **Fillable worksheet** (`… - Worksheet (Fillable).pdf`): 14 transparent form fields laid over the printed
  write-in boxes (checklist rows are real checkboxes). Verified by rasterising the PDF with typed test values:
  fields sit inside their boxes, no border or fill covers the print design.
- **Slide deck** (`… - Slides.pptx`, 12 slides): one slide per lesson moment, minutes on each block, teacher
  script in speaker notes, cover art on the title slide. Reviewed via `dist/review/slide-NN.png` (HTML twin of
  the same geometry); the deck builder's text-overflow gate is green. Not yet opened in PowerPoint itself —
  LibreOffice is unavailable in this sandbox — so the first real-PowerPoint open is on the pre-upload checklist.
- Listing INCLUDES line updated to name both; both ship inside the product zip.
