# Judge Report — Lead Your AI Squad (Lesson 6 of 6)
Judged: 2026-09-01 · docs/JUDGE.md v2 (gated) · 8 page screenshots in dist/review/

## Defect hunt (found and fixed this round)
- Page overflow on multiple documents (builder stopped mid-trim). Fixed via the new
  `body.compact` density option in the shared stylesheet, and by paginating two
  overstuffed teacher guides to three pages rather than cramming.
- Cover motif art was missing or colliding with cover text on several lessons; all five
  motifs redrawn at a consistent bottom-right scale. A new machine gate now enforces this.


## Gate results
| Gate | Item | Result | Evidence |
|---|---|---|---|
| 0 | Layout (overflow / footer / cover collision) | meets | `npm run render` green across all three gates |
| 0 | Timing sums | meets | Top-level blocks total exactly 45 min, matching cover + listing |
| 0 | Answer key present | meets | Teacher guide carries exemplars/answers for every scored task |
| 1 | Alignment per code | meets | 3 standards (ISTE 1.5.c / ISTE 1.7.c / CCSS W.6.4); taught + assessed printed beside each in the teacher guide |
| 1 | Depth (DOK) | meets | Main activity is apply/analyze; the defend/critique step reaches DOK 3 and is assessed |
| 1 | Assessment ↔ objectives | meets | Each objective maps to a checklist row or exit-ticket item |
| 2 | Sub-teacher runnable | meets | Scripted teacher lines, timed blocks, what-if coaching in the guide |
| 2 | Differentiation | meets | Support / extension / ELL / unplugged all named |
| 2 | Print reality | meets | Line-art spot art, single accent colour, honest write-in space |
| 3 | Thumbnail test | meets | Cover reads at 200px: title, grade chip, "Lesson 6 of 6", motif |
| 3 | Value density | meets | Framework + activity + named-character scenarios + keys — not a 10-minute DIY |
| 3 | Representation | meets | Named, varied characters; each competent in their own scenario |
| 3 | Voice / listing | meets | Kid-world vocabulary on student pages (ANTI_SLOP 13b); title within 80 chars |

**Fails: 0 · Partials: 0 → VERDICT: PASS**

## Notes
- Analogy: Game-squad party leader. Unit through-line (Human -> AI -> Human) carried from Lesson 1.
- Non-blocking: a projectable slide version of the warm-up would help large rooms.
