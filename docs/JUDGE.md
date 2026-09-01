# TPT Judge v2 — the pre-upload quality gauntlet

Run AFTER render+validate are green, BEFORE status moves to `rendered`.
`npm run judge -- <slug>` screenshots every page to `dist/review/`; the judge reviews the
SCREENSHOTS (buyers see pixels, not HTML) and writes `products/<slug>/JUDGE.md`.

Grounding: Fordham's "Supplemental Curriculum Bazaar" study professionally reviewed 300+
top-downloaded TPT/online lessons and rated most "mediocre or probably not worth using."
Their failure modes — weak teacher guidance, alignment-washing, low-level tasks, weak
assessment, poor representation — are this rubric's kill criteria. Structure follows
EdReports: sequential GATES with cited evidence, not averaged scores (averages let charm
subsidize defects).

## Judge discipline (anti-leniency rules — the judge is the adversary)
- FIRST PASS: hunt for reasons to FAIL. List every defect found before any scoring begins.
  A judge who finds zero defects must state per gate what it checked and didn't find.
- Every rating MUST cite evidence: page + what's on it. "Looks good" is not a rating.
- "Meets" is the ceiling for competent; "exemplary" requires naming what beats the
  competent version. When unsure, rate DOWN.
- Read every student-facing sentence aloud; flag anything a 6th grader could misread.
- The builder grading its own work inflates: assume your first impression is one notch too kind.

## GATE 0 — Auto-fail (ANY one = FAIL, stop scoring, fix, re-judge)
1. A factual error, anywhere.
2. A typo, grammar, or punctuation error, anywhere (demotion-algorithm bait).
3. Timing that doesn't sum to the advertised total, or any block a real class can't do in
   the minutes given.
4. A standards code that can't survive the alignment test in Gate 1 (alignment-washing).
5. The listing promises anything the files don't deliver.
6. A layout defect visible in any screenshot (overflow, collision, orphaned header, cut art).
7. Copyrighted characters/lyrics/logos; invented citations or statistics.
8. Content that stereotypes or could harm any student group; culture used as costume.
9. Activities with answers but no answer key / exemplar for the teacher.

## GATE 1 — Rigor & alignment (Fordham killed most lessons here)
- **Alignment test, per claimed code:** name the exact activity where it is TAUGHT and the
  exact item where it is ASSESSED. Can't name both → CUT THE CODE from the product.
  3 codes that survive beat 5 that don't.
- **Depth test (DOK):** classify every student task. Recall/identify only = FAIL. At least
  half the tasks at DOK 2+ (apply/analyze), at least one at DOK 3 (create, evaluate,
  argue, critique) — and the DOK 3 task must be assessed, not decorative.
- **Assessment test:** the exit ticket/rubric must measure the stated objectives — map each
  objective to the assessment item that catches a student who didn't get it.

## GATE 2 — Classroom usability
- A substitute teacher who has never seen this could run it from the page alone (script,
  transitions, what-ifs). Weak teacher guidance was Fordham's #1 finding.
- Differentiation is real: support, extension, unplugged, AND an explicit ELL note.
- Materials list is complete and honest; every handout referenced actually exists.
- Print reality: photocopy-safe art, no ink-heavy backgrounds on student pages, honest
  write-in space for 12-year-old handwriting.

## GATE 3 — Craft & market
- Thumbnail test at 200px: what it is, for whom, why care.
- Value-density test: if a competent teacher could rebuild this in 10 minutes, it fails —
  name the elements that make it worth paying for instead of DIYing.
- Representation scan: who appears in scenarios/examples, who is the hero; no group
  invisible, none tokenized.
- Voice: cool teacher, not textbook; zero AI-tell phrasing (see ANTI_SLOP.md).
- Listing: title ≤80 keyword-front-loaded; description 400+, honest, keyword-rich.

## Verdict
- Each gate item: **meets / partial / fail**, with evidence.
- PASS requires: Gate 0 clean, zero fails anywhere, and at most TWO partials total
  (each partial logged with a fix-by note).
- Report format: defect list (from first pass) → gate tables → "Fix now" → "Would improve"
  → verdict + date. Fix everything on "Fix now," re-render, RE-JUDGE from scratch.
