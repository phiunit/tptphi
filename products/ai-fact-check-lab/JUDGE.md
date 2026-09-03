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
