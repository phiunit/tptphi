# Judge Report v1 — AI Literacy Unit Bundle (6 lessons)
Judged: 2026-09-03 · docs/JUDGE.md v2 (gated) · cover + unit-overview screenshots in dist/review/

## Scope
The bundle ships the six lesson products (each judged PASS separately — see their JUDGE.md) plus
a Unit Overview (pacing guide) and a cover. This report covers the bundle-only assets and the
listing.

## Defects found by the independent audit — all fixed
1. **Cover did not list what's inside.** Fixed: six lesson titles on the cover; "No AI Accounts" chip.
2. **Discount claim unverified.** Fixed and checked: $0 + 5 × $4 = $20 separately; $14 = 30% off.
3. **Bundle standards list** now carries five codes that each appear in at least one lesson's
   taught/assessed map (ISTE 1.5.c, 1.3.b; CSTA 2-IC-20, 2-IC-21; CCSS W.6.4) — verbatim per
   the registry (validate).
4. **Retired-terms gate** false-positive on verbatim CSTA text — fixed in tooling.
5. **Status mismatch** between product.yaml and catalog was possible; validate now enforces equality.

## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 0 | Listing ↔ files | meets (after 2nd audit) | Description names 6 lessons, pacing guide, unplugged-by-design; all present. Unit Overview standards row and page count were stale — fixed, see below |
| 2 | Usability | meets | Unit Overview: sequence, per-lesson minutes, through-line (Human → AI → Human), when to run each |
| 3 | Thumbnail | meets | Cover verified: unit title, "6 lessons," grade chip, No AI Accounts chip |
| 3 | Listing | meets | Title 78 chars keyword-first; description 400+; price note honest |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Would improve (non-blocking)
- Add a one-page unit assessment (cumulative exit ticket) as a bundle-exclusive.

## Second independent audit — 2026-09-03 (post-fix re-verification)
A second adversarial judge re-read all 46 screenshots and every source file after the fixes above.
It found defects the first pass and this report had missed; every one is now fixed and re-rendered.
The bundle cover was already clean (its stars sit off the text).

Product-specific findings, fixed:
- **The "Listing ↔ files: meets" row above was false.** The Unit Overview's standards table still listed
  ISTE 1.1.c for Lesson 4 (cut in favour of SL.6.1), and "What's in every lesson" said "2-page
  worksheet" when Lesson 3's is 3 pages. Both corrected ("2- to 3-page").
Verdict after re-audit: **PASS** (0 fails, 0 partials).

## Round 2 addendum (2026-09-05, docs/gauntlet/PLAN.md "Unit + bundle (round 2)")
- Cover rebuilt on the L1 template: badge "SAVE 30%", one-sentence sub ("Every AI job starts and ends with a human."),
  chips `Grades 6–8 · 6 × 45-min lessons · No prep · No devices needed`, solid-fill art (no gold-over-violet opacity),
  unused .list/.row CSS removed. The six lesson titles now live in the listing + Unit Overview, not on the cover.
- Listing: title "… | Save 30%" (73 chars); price sentence "$14 for all six — the five paid lessons alone are $20. Save 30%.";
  per-lesson file list (31 files); Standards line names all nine codes across the unit. `standards:` keeps the five anchor
  codes (validate's 3–5 rule); the four lesson-level ELA codes are cited in the description and the Overview table.
- Preview: cover + Lesson 3 worksheet p1 + Lesson 1 plan p1 + Lesson 1 guide last page + Overview p1, band
  "FULL DOWNLOAD: 6 LESSONS · 31 FILES" at ~35% opacity, fitted inside the page width.
- Overview: sub-tomorrow → Lesson 3; "reading level checked to the middle-school range"; discussion guide (three questions with answers).
- Verdict: PASS (whole-repo `npm run audit` GREEN).
