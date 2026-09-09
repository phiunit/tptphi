# Round 3 — Critic report: L1 `ai-prompting-101` (2026-09-09)

Fresh critic, blind to JUDGE.md / docs/gauntlet / git history. Checked dist/review PNGs (19), all src, product.yaml, UPLOAD_SHEET.md, the five shipped PDFs (page counts LP 2 / WS 2 / WS-fillable 2 / TG 3 / Preview 4 = .page div counts = listing claims), zip manifest (5 files), .pptx (11 slide XMLs), fillable widget dump (24 widgets) + typed rasters, standards text vs registry, RETIRED_TERMS grep, UK-spelling/"tick" grep (clean).

## lesson-plan — SHIP IT
Blocks 8+10+20+7 = 45; sub-blocks 10+7+3; exit 1+6; 4 scripted transitions; 9 verbatim lines; 6 what-ifs; materials true; chips = yaml.
1. MINOR — `lesson-plan.html:103` Showcase (3 min) "With devices: run the best one live…" + what-if "run it again" is 5–6 min of work. Fix: "With devices: run ONE live instead of the third reading."
2. MINOR — `lesson-plan.html:59` Objective 1 "Explain why…" is assessed by Exit #1 part two ("what would the genie hand back?") — elicits an example, not an explanation.
3. MINOR — `lesson-plan.html:54` Prep "Print worksheets. That's it." but Support/ELL depend on sentence starters on TG p.3.

## worksheet (print + fillable) — SHIP IT
FK ≈ 4.1; lines 24px, boxes 92/72px, rows ~34px; >half DOK 2+; exit maps to objectives; neither page >45% blank; US spelling; planted fact verified (EHT M87 April 2019). Fillable: 24 widgets = every write-in, nothing else; transparent; checks render.
1. MINOR — `worksheet.html:92` checklist scores "R — Gives at least 2 rules" but p.1 P.R.O. box never says "at least 2".
2. MINOR — `worksheet.html:105` "one class's repaired wish" reads "which class?" to an ELL reader.
3. MINOR — `worksheet.html:107` "a real place (… a librarian …)" — a librarian is not a place. Same in `lesson-plan.html:109`, `teacher-guide.html:80`.

## teacher-guide — SHIP IT
Key for every item; planted sentence named, other two marked true; Mateo arithmetic correct; standards text identical to registry; 8 what-ifs; "Never put the key on the projector" present.
1. MINOR — `teacher-guide.html:105` "So far it mostly replaces tasks inside jobs, not whole jobs" — contestable empirical claim inside a "nobody knows" paragraph.
2. MINOR — "a real place … librarian" (see WS 3).

## listing — REJECT
Title 78 chars; description 2045 chars, opener correct; all page/slide/file counts true; INCLUDES = zip; sheet = yaml; sibling names match; "saves 30%" true.
1. MAJOR — description: "the plan says exactly what ChatGPT, Claude or Gemini add." The plan never names those tools and has only two "With devices: run it live" lines.
2. MINOR — title third slot "FREE No Prep" carries two differentiators.
3. MINOR — UPLOAD_SHEET's own rule "the second sentence must name THIS lesson's activity" is broken by sentence 2 "This lesson runs on paper."
4. Human gate: "opens in PowerPoint, Keynote or Google Slides" unverifiable here.

## Regression look — cover and deck
No BLOCKER/MAJOR. Cover title 3+2 words/line, sub 8 words, chips present, lamp in frame. Deck 11 slides, chips sum 45, no answers on student-visible slides.

---
## Lead adjudication (2026-09-09)
ACCEPT: LP1, LP2 (reword objective, not the item), LP3, WS1, WS2, WS3 (three files), TG1, Listing 1 (fix BOTH sides: plan Tech cell names the tools; description promise softened to what the plan does), Listing 3 (fix the rule text in `scripts/upload_sheet.mjs` to match COPY.md: filter line → hook → do line; the sheet's rule was pre-COPY.md).
OVERRULE: Listing 2 — "No Prep" is a TPT search keyword, "FREE" is the badge; the third slot may carry keyword + badge. House formula amended in GAUNTLET.md.
Human gate stays open (open .pptx in real PowerPoint).
