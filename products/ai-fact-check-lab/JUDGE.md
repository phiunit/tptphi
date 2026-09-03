# Judge Report v2 — Hallucination Hunters (Lesson 3 of 6)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · 9 screenshots in dist/review/ (viewport-reset judge)

## Process note
The v1 report (2026-09-01) was templated and relied on a judge screenshot tool with a viewport
carry-over bug. An independent audit (2026-09-02/03) re-read every page and source file. This
v2 report replaces it. This lesson had the most findings in the unit.

## Defects found by the independent audit — all fixed
1. **Listing promised what the files didn't deliver (Gate 0 #5).** Description said "3 passages";
   the worksheet carried two. Fixed: worksheet is now 3 pages — Draft 1 (p1), Draft 2 (p2),
   Draft 3 + exit ticket (p3). yaml page count updated.
2. **Alignment-washing on CCSS RI.6.8.** The standard is "trace and evaluate the ARGUMENT";
   the passages were lists of facts with no conclusion to evaluate. Fixed: every draft now ends
   with a conclusion claim built on its (partly false) evidence; fact-desk method step 4 tests
   whether the conclusion survives; TG answer key has a conclusion row per draft.
3. **Answer key incomplete (Gate 0 #9).** No exemplar for the verdict/conclusion. Fixed (TG p2).
4. **Write-in space.** Claim-log rows too short. Fixed: 40px rows.
5. **TG overflow** after the answer-key rows were added. Fixed: 3-page TG.
6. **Cover art collision.** A stale second motif `<svg>` sat under the new one and ran through
   the chip row. Fixed: stale block removed; cover passes the 12px clearance gate; verified on
   product.cover.png (document + lens motif bottom-right, clear of all text).

## Gate 0 hunt
Every planted error cross-checked against the answer key (Moon landing 1969 not 1959; Moon
reflects light; Everest is in the Himalayas; Canberra not Sydney; Bell not Edison for the
telephone; the Edison quote is fabricated by design and labelled so in the key); true facts in
the passages verified (12 Moon-walkers, Pacific largest, Nile flows north, phonograph 1877,
Kitty Hawk 1903). Timing 7+10+20+4+4 = 45 ✓ (validate). Three codes verbatim (validate).
Layout gates green. Read-aloud clean.

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 1 | Alignment per code | meets | RI.6.8 taught method steps 1 & 4, assessed RUN/FIX/KILL verdict + evidence note per draft; ISTE 1.3.b taught lateral reading (step 3), assessed "Second source" columns + ET#2; ISTE 1.3.d taught Fact Desk activity, assessed ET#2 real-claim + stand-up evidence |
| 1 | Depth | meets | Underline/rank = DOK 2; verdict with evidence + conclusion test = DOK 3, assessed on all three drafts |
| 1 | Assessment ↔ objectives | meets | Obj1 (why AI hallucinates)→ET#1; Obj2 (method)→claim logs + verdicts; Obj3 (transfer)→ET#2 |
| 2 | Sub-teacher runnable | meets | Warm-up read-aloud + vote + reveal is scripted; desk stand-up protocol; what-ifs in TG |
| 2 | Differentiation | meets | Support, extension, ELL, unplugged (passages printed; devices optional) |
| 2 | Print reality | meets | Line-art lens glyph, grey panels only on passages, 40px rows |
| 3 | Thumbnail | meets | Cover verified: title, lesson chip, grade chip, motif |
| 3 | Value density | meets | Three purpose-built error-planted passages + complete key + four-step method + verdict protocol |
| 3 | Representation | meets | Student reporters Priya, Theo, and Marcus, each a competent writer; errors belong to "the AI draft," never a student |
| 3 | Voice / listing | meets | "Smooth is not the same as true" through-line; title 79 chars |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- TG p3 is light (standards text + terms). Acceptable; a "common student mistakes" box could fill it.

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
- **Listing promised an exit-ticket key and discussion questions the teacher guide did not contain.**
  Added to TG p3: an Exit Ticket Key (full / partial credit for #1 and #2) and four discussion questions.
- Answer key stated "Sydney is the largest city" — a claim a student can lateral-read into a dispute
  (Melbourne, by some boundaries). Now "Canberra, not Sydney."
- Two unstyled empty rows under each claim log rendered as stray lines; replaced with a proper 4th slot.
Verdict after re-audit: **PASS** (0 fails, 0 partials).

## Digital companions — added 2026-09-03
- **Fillable worksheet** (`… - Worksheet (Fillable).pdf`): 32 transparent form fields laid over the printed
  write-in boxes (checklist rows are real checkboxes). Verified by rasterising the PDF with typed test values:
  fields sit inside their boxes, no border or fill covers the print design.
- **Slide deck** (`… - Slides.pptx`, 12 slides): one slide per lesson moment, minutes on each block, teacher
  script in speaker notes, cover art on the title slide. Reviewed via `dist/review/slide-NN.png` (HTML twin of
  the same geometry); the deck builder's text-overflow gate is green. Not yet opened in PowerPoint itself —
  LibreOffice is unavailable in this sandbox — so the first real-PowerPoint open is on the pre-upload checklist.
- Listing INCLUDES line updated to name both; both ship inside the product zip.
