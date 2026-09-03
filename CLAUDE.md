# Phi Unit TPT Factory — Agent Operating Manual

This repo is a product factory for the "Phi Unit Teaches the Future" TeachersPayTeachers store.
When Phi asks you to "build the next product," follow this manual exactly.

## The loop
0. Read `corpus/` (VOICE.md, FRAMEWORKS.md, SEEDS.md) if populated — it carries Phi's
   distilled slipbox: his voice, frameworks, and mined product ideas. Ground new products
   in it. (Refresh instructions: corpus/DISTILL_PROMPT.md, runs on Phi's machine.)
1. Read `curriculum/catalog.yaml`, pick the highest-priority product with `status: idea`
   (or the one Phi names).
2. Create `products/<slug>/product.yaml` — copy the shape of
   `products/ai-prompting-101/product.yaml`. Description 400+ chars, keyword-front-loaded,
   standards named. Verify standard codes against `docs/STANDARDS.md` — NEVER invent codes.
3. Write `products/<slug>/src/*.html` pages using `brand/templates/print.css`
   (`<body class="line-ai|line-finance|line-entrepreneur|line-games">`).
   Minimum set: `lesson-plan.html`, `worksheet.html`, `teacher-guide.html`, `product.cover.html`.
   Use `products/ai-prompting-101/src/` as the reference for structure and quality bar.
4. `npm run render -- <slug>` then `npm run validate -- <slug>`. Fix until green.
   Render now HARD-FAILS on page overflow / footer collisions. Visually check the
   cover PNG and EVERY page screenshot against `docs/ANTI_SLOP.md` before moving on.
5. `npm run readability -- <slug>` (student pages must score ≤ grade 8.5), then `npm run judge -- <slug>`, then review every dist/review/*.png against `docs/JUDGE.md`
   and write `products/<slug>/JUDGE.md`. Fix everything on the "Fix now" list and
   re-judge until verdict is PASS. No product ships without a passing judge report.
6. Update the product's `status` in catalog.yaml (idea → rendered), commit, push.

## Quality bar (non-negotiable)
- **No-prep:** a teacher can print and teach the same morning. Say so explicitly.
- **Unplugged mode:** every tech lesson includes a no-device variant.
- **Culture is load-bearing:** hip-hop/anime/gaming references must carry the concept
  (literal genie = literal AI; game balance = ratios), never decoration.
- **Timed, scripted lessons:** every activity block has minutes; teacher lines are quotable.
- **Assessment included:** exit ticket or rubric in every product.
- **Spot art:** student-facing pages get simple inline-SVG spot illustrations tied to the
  lesson's analogy (see ai-prompting-101 worksheet: lamp/sparkle defs + <use>). Style is
  photocopy-safe: dark line-art outlines with one accent fill, never photos or clip-art.
  Teacher pages get a lighter touch: title lamp in the header row + small accents on key h2s.
- **Branding on materials:** generic only — masthead "Future Skills · <Line>", footer
  "© Future Skills Series". Never put the store name inside lesson pages or covers.
- **Voice:** cool teacher, not textbook. Students addressed directly on worksheets;
  teacher pages efficient and professional. Kid-world vocabulary on student pages —
  no business jargon (intern, deliverable, stakeholder...); see ANTI_SLOP.md rule 13b.
- 3–5 real standards per product, cited in description + lesson chips + teacher guide full text.

## Grade band
Default grades 6–8. Reading level ~6th grade on student-facing pages.

## Never
- Never invent standards codes, research citations, or statistics.
- Never auto-publish to TPT — the uploader is attended-only by design (Phi's decision,
  see docs/PIPELINE.md risk note).
- Never use copyrighted characters/lyrics/logos (no real anime characters, no real artist
  lyrics). Archetypes and originals only — "an anime-style story," not Naruto.

## Commands
| | |
|---|---|
| `npm run new -- <slug> "<Title>" <line>` | scaffold a product |
| `npm run render [-- <slug>]` | HTML → PDF/PNG (Chromium at /opt/pw-browsers/chromium in cloud sessions) |
| `npm run validate [-- <slug>]` | upload-readiness check |
| `npm run judge -- <slug>` | screenshot every page to dist/review/ for the JUDGE.md gauntlet |
| `npm run readability [-- <slug>]` | Flesch-Kincaid gate on student pages (ceiling: grade 8.5) |
| `npm run sheet [-- <slug>]` | generate the paste-ready TPT upload sheet from product.yaml |
| `npm run storefront` | render brand/storefront/*.html to TPT-spec PNGs |
| `npm run upload -- <slug>` | local-only attended TPT form pre-fill |

## Key docs
`docs/ANTI_SLOP.md` (what "done" means — read before rendering) ·
`docs/JUDGE.md` (pre-upload quality gauntlet) ·
`docs/STRATEGY.md` (store/pricing/SEO) · `docs/STANDARDS.md` (which frameworks per line) ·
`docs/PIPELINE.md` (end-to-end flow) · `brand/BRAND.md` (voice + visual system)
