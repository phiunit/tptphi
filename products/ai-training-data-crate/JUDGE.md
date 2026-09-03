# Judge Report v2 — What's in the Playlist (Lesson 2 of 6)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · 8 screenshots in dist/review/ (viewport-reset judge)

## Process note
The v1 report (2026-09-01) was a templated pass shared word-for-word across lessons 2–6 and
relied on a judge screenshot tool with a viewport carry-over bug. An independent audit
(2026-09-02/03) re-read every page and source file. This v2 report replaces it.

## Defects found by the independent audit — all fixed
1. **Cross-document mismatch.** The worksheet's last step and the lesson plan used different
   names for the same activity. Fixed: "Fix the Playlist" everywhere.
2. **Materials list was wrong.** Said one worksheet per pair; the worksheet has per-student
   exit-ticket items. Fixed in the lesson plan: "1 per student; pairs share one request line." (The worksheet header was missed — see the second audit below.)
3. **Bridge assumed Lesson 1 had been taught.** Buyers can buy L2 alone. Fixed: conditional
   ("If you did the genie lesson…").
4. **Header too long, wrapping onto the art.** Fixed: kicker shortened to "The Playlist Lesson".
5. **TG p2 overflowed** after the debrief guide grew. Fixed: debrief moved to a full p3 rather
   than cramming (TG p3 verified: debrief guide + full standards text + terms).
6. **Cover chip row inconsistent** with the rest of the unit. Fixed: "AI Literacy · Lesson 2 of 6"
   chip under the brand line; third chip "No prep · No devices needed".

## Gate 0 hunt
Every student sentence read aloud; six named requests (Keisha, Nia, Tomás, Priya, Malik,
Jordan) match across WS ↔ LP ↔ TG; timing 7+8+20+5+5 = 45 ✓ (validate); three codes verbatim
in yaml / chips / TG (validate); layout gates green; real-world examples in the debrief guide
are stated qualitatively (no invented statistics); answer-key exemplars for the Gap Report and
both exit-ticket items present (TG p2).

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 1 | Alignment per code | meets | CSTA 2-IC-21 taught gap-mapping + Real Playlists debrief, assessed Gap Report + ET#2; ISTE 1.1.d taught input→patterns→output, assessed ET#1/#2; SL.6.1 taught say-back-and-build rule (LP p2 step 3), assessed the "Say back + build" WS item |
| 1 | Depth | meets | Serve the Request Line = DOK 2 apply; Gap Report + Fix the Playlist = DOK 3 analyze/create, assessed |
| 1 | Assessment ↔ objectives | meets | Obj1→ET#1 chain; Obj2→Gap Report + ET#2; Obj3→say-back item |
| 2 | Sub-teacher runnable | meets | AutoMix warm-up script with three responses, Say-it-plainly line, quick check, debrief question all quotable (LP p1–2) |
| 2 | Differentiation | meets | Support, extension, ELL (any-language cards), unplugged (LP p2) |
| 2 | Print reality | meets | Line-art playlist/note glyphs, one accent, rating cells as check marks |
| 3 | Thumbnail | meets | Cover verified: title, lesson chip, grade chip, playlist motif clear of text |
| 3 | Value density | meets | 12-card dataset + 6 request personas + gap-report protocol + real-world debrief guide + keys |
| 3 | Representation | meets | Varied names; the students who "get missed" are framed as failed by the playlist, never by the tech "not liking" them (TG p3 handle-with-care note) |
| 3 | Voice / listing | meets | Kid-world vocabulary (playlist, not "dataset" on student pages until defined); title 80 chars (at the cap) |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- Printable song cards as a cut-out sheet (currently a table on the worksheet).

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
- Item 2 above was only half-true: the lesson plan said "1 per student" but the worksheet header still
  read "Names: ___ & ___" (one sheet per pair). Header is now "Name / Partner / Class / Date".
Logged, not fixed (non-blocking): worksheet p1 leaves ~45% of the page blank below the 12 song cards;
teacher guide p2 ~70% blank. Candidate: move the debrief guide back to p2 if it fits, or add a
cut-out card sheet.
Verdict after re-audit: **PASS** (0 fails, 0 partials).

## Digital companions — added 2026-09-03
- **Fillable worksheet** (`… - Worksheet (Fillable).pdf`): 11 transparent form fields laid over the printed
  write-in boxes (checklist rows are real checkboxes). Verified by rasterising the PDF with typed test values:
  fields sit inside their boxes, no border or fill covers the print design.
- **Slide deck** (`… - Slides.pptx`, 12 slides): one slide per lesson moment, minutes on each block, teacher
  script in speaker notes, cover art on the title slide. Reviewed via `dist/review/slide-NN.png` (HTML twin of
  the same geometry); the deck builder's text-overflow gate is green. Not yet opened in PowerPoint itself —
  LibreOffice is unavailable in this sandbox — so the first real-PowerPoint open is on the pre-upload checklist.
- Listing INCLUDES line updated to name both; both ship inside the product zip.
