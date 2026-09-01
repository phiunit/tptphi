# TPT Judge — the pre-upload quality gauntlet

Run AFTER render+validate are green, BEFORE a product's status moves to `rendered`.
`npm run judge -- <slug>` screenshots every page to `dist/review/`; the reviewing agent
(or Phi) then scores every page against this rubric and writes `products/<slug>/JUDGE.md`.

## The three judges (review through each lens, in order)
1. **The skeptical veteran teacher** (20 years in, hates gimmicks, photocopies everything):
   Could I teach this tomorrow morning with zero prep? Are the directions unambiguous for a
   12-year-old? Does the timing actually work? Is the cultural hook teaching or decorating?
2. **The admin/department head** (approves purchases): Are the standards real, correctly
   cited, and actually addressed by the activities — not just chip decoration? Is anything
   inaccurate, unsafe, or complaint-bait?
3. **The demotion algorithm** (TPT's AI-slop hunter): Any error a screenshot could catch —
   typos, layout glitches, inconsistent terms, generic-AI phrasing, art that doesn't match
   content? Would a 1-star "this is AI junk" review be defensible?

## Scorecard (1–5 each; PASS = every dimension ≥4 AND average ≥4.5)
| # | Dimension | 5 looks like |
|---|---|---|
| 1 | Thumbnail test | Cover reads at 200px: what it is, for whom, why care |
| 2 | Teach-tomorrow clarity | A sub could run it from the page alone |
| 3 | Pedagogy | Objectives ↔ activities ↔ assessment actually align |
| 4 | Standards integrity | Real codes,truthfully addressed, cited in 3 places |
| 5 | Engagement hook | Analogy carries the concept; kids would retell it |
| 6 | Student-page quality | Directions, honest write-in space, spot art, reading level ~6th |
| 7 | Timing honesty | Blocks sum to the advertised total; each block realistic |
| 8 | Differentiation | Support + extension + unplugged, all real not token |
| 9 | Completeness | Everything the listing promises is in the files; answer key; TOU/credits |
| 10 | Listing quality | Title ≤80 front-loaded; description 400+ keyword-rich, honest |

## Report format (products/<slug>/JUDGE.md)
- Scorecard table with a one-line justification per score
- "Fix now" list (anything <4 or any judge objection) — fix these, re-render, re-judge
- "Would improve" list (optional polish, logged not blocking)
- Verdict: PASS / FAIL + date

## Rules
- Judge the SCREENSHOTS, not the source — buyers see pixels, not HTML.
- Read every student-facing sentence aloud; flag anything a 6th grader would misread.
- Verify every standard code against docs/STANDARDS.md — chips must match teacher-guide text.
- Check the listing description against the actual files: every promised item must exist.
