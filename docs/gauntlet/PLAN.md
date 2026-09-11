# PLAN — Gauntlet round-1 build (authority for every builder agent)
Lead decides; agents build exactly this. Companion file: docs/gauntlet/STATUS.md (open / agreed / done).
Critic finding lists: docs/gauntlet/2026-09-03/r1-critic-<L1..L6|buyer|student|bundle-unit>.md — those are the
symptoms; THIS file is the decision. Where they differ, this file wins. Bar: docs/GAUNTLET.md.

## Hard rules for every agent
- You own ONLY `products/<your-slug>/**` (src/*.html, src/slides.yaml, product.yaml). Touch nothing else: no
  scripts/, brand/, docs/, curriculum/, other products. If a fix needs a script change, write it in "Notes to lead".
- Never rename files, `short_name`, slugs, or h1 titles. Never commit or run git commands that change state.
- Never invent facts, statistics, citations, standards codes, or new named characters. Reuse the lesson's own
  characters. Hedge anything about the future of work or AI capability ("so far", "nobody can promise").
- The tree may be DIRTY in your folder: an interrupted builder left half-applied edits. Treat current content as a
  draft — keep what matches this plan, remove what doesn't, and make every gate green.
- Recon first: read your product's files, then write your exact-edit plan to
  `/tmp/claude-0/-home-user-tptphi/d870f865-e84d-5580-b699-c35e975116a0/scratchpad/gauntlet/<slug>-plan.md`, then build.
- Verify with `npm run audit -- <slug>` (render → validate → readability → judge → preview) until GREEN. Then view
  every PNG in `products/<slug>/dist/review/` yourself before reporting. Visual surfaces: iterate at least three
  times against the reference (products/ai-prompting-101 cover/pages, or the decision text below) before verifying.

## Decisions (D1–D9) — apply all that touch your product
**D1 Cover (thumbnail-first).** Buyers see it 200px tall on a phone. Keep: brand line, lesson chip
("AI Literacy · Lesson N of 6"), kicker, two-line h1. Change: the sub becomes ONE sentence, ≤ 10 words, ≥ 40px,
weight 600, white — it states the concept, not the audience ("AI grants what you SAID, not what you MEANT.").
Delete "for grades 6–8" / "capstone for grades 6–8" from every sub (the chip carries it). Chip row = exactly
`Grades 6–8` (solid) · `45-min lesson` · `No prep · No devices needed`, chip font ≥ 24px. Art: fully inside the
frame (no negative offsets that crop it), gold accent + light tint (#FFD27A) — never a ≤ 0.5-opacity gold over the
violet (renders brown). Art must carry the lesson's analogy (per-lesson spec below). Keep the 12px clearance gate green.
**D2 Listing.** Title keeps the house formula `<keyword phrase>: <descriptor> | Middle School 6-8 | <differentiator>`
(≤ 80; band is always "Middle School 6-8"; L2 drops the word "Activity"). Description: sentence 1 =
"NO STUDENT AI ACCOUNTS NEEDED — this lesson runs fully on paper." Sentence 2 = the lesson's own hook and the
activity by its real name. Then the body. Standards sentence names EVERY code exactly as in the yaml. INCLUDES
lists, in this order: lesson plan (N pages), worksheet (N pages) + fillable PDF copy, teacher guide with a key for
every student item, slide deck (.pptx, N slides, script in the notes), Support / Extension / ELL / no-device
variants. Closing line: "Lesson N of 6 in the AI Literacy unit — stands alone; the 6-lesson bundle saves 30%."
(L1 adds one sentence naming lessons 2–6 by short name.) yaml `includes:` = the five shipped filenames.
**D3 Teacher guide.** A key or exemplar for EVERY student item — every worksheet task, the DOK-3 task, each exit
ticket item. A "When it goes sideways" panel with four what-ifs. Taught/assessed line per standard must name a
real item that really assesses the verb. ≤ 3 pages; no page > 60% blank (fold to 2 pages when content is short).
Disputable claims hedged; no predictions stated as fact.
**D4 Lesson plan.** One italic "If …" what-if line under EVERY block. A quoted transition line at every seam
(hand-out, swap, swap back, into exit ticket). Materials cell lists the worksheet, "Slides (optional)", and anything
the guide references (rubrics, board). Blocks sum to 45 and are doable for 30 students (re-split sub-blocks if
needed; keep the total). Bridges to other lessons hedged: "(If your class did the genie lesson…)".
**D5 Worksheet.** Opening panel glosses every idiom the page uses, at first use, in kid-plain words; drop slang from
assessment labels (Exit ticket labels are plain: "Last Check" / "Be real with yourself"). Roles defined on the page
before they are used. Ruled lines ≥ 24px, boxes ≥ 72px, table cells ≥ 34px; every "circle one" becomes tick boxes
(td.tick pattern from L1 — it makes the fillable copy work). Exit ticket must measure every stated objective. No
page > 45% blank — rebalance across pages. Named characters varied; failures never fall only on one group.
**D6 Deck (src/slides.yaml).** Minute chips = the plan's blocks (sum 45). Notes carry the script AND the keys.
Student-visible question slides never show the answer (move subs to notes or add a reveal slide). Card text
≤ 90 chars when 4 cards, ≤ 140 otherwise; compare text ≤ 170; list items ≤ 110 (the build gate enforces it).
Title-slide chip reads "No prep · No devices needed". Closer note: "Next in the unit: <short name> (Lesson N, sold
separately)". Stage-direction titles ("Model it live") become student-facing ("Watch one get fixed").
**D7 Through-line.** L2 and L5 get one sentence in TG "Why this lesson" and in the closer sub:
human → AI → human — a human starts it, AI does the middle, a human checks / decides.
**D8 Fillable.** Header "Name / Class / Date" must become fields (use `<span class="blank">` per blank). Every write-in
must be a known idiom (.writebox, .lines .l, .wline, .blank, td.slot, td.logslot, empty .worktable td, .write,
td.tick). New idiom needed → don't hack it; tell the lead.
**D9 Facts.** Hedge: "AI takes over tasks, not whole jobs — nobody can promise the final count." · "Unless you tell
it — or it has saved notes about you — an AI doesn't know your taste." · Pasting text into a prompt is NOT training.
Remove "and teachers can tell." everywhere → "— and you'd know it."

## Per-lesson decisions
### L1 ai-prompting-101 (reference lesson — must be flawless)
Critic files: r1-critic-L1, student #1–7, buyer #2. Cover art: whole lamp inside the frame, smoke in #FFD27A tint.
Exit #2 needs something REAL to evaluate: print a 3-sentence sample genie answer to Amara's repaired wish on
the worksheet with ONE planted checkable fact (a plausible-sounding wrong number about black holes); Exit #2 =
"Which line would you double-check, and where would you check it?" Key in the TG only, never on a slide. Exit #1
adds "then one sentence: what would the genie have done with the short version?" (Objective 1). Break-it
instruction: "Say your twist out loud to your partner, then tick the boxes. Write your best one below. Then swap
back." TG: key for Genie-test row, model twists (2 per wish, "counts if it obeys every word"), Exit #1/#2 keys,
what-ifs; fix "Hero." vs "Once there was a hero. The end." (use the worksheet's). Deck: Exit Ticket 4 min (drop the
separate 1); notes get the three exemplar repairs, the exit key, the three genie improv moves. Gloss: fine print →
"the rules (the fine print)", loophole, zine → "class magazine", "Keep it 100" → "Be real with yourself".
Listing: name ISTE 1.5.c and 1.3.b; add the lessons-2–6 funnel sentence.
### L2 ai-training-data-crate
Critic files: r1-critic-L2, student #8–16. Roles ("App" / "Request Line") defined in the opening panel; serve table
moves to p1 with rows ≥ 36px (fills the 45% blank tail); Fix-the-Playlist cards ≥ 72px; the two "nailed it"
requests must not both be the Black-coded names — swap one success/failure so no group carries the failures.
Fit scale words: "Perfect fit / Kind of fits / Nothing fits". Say-back frames on the student page. Debrief 5 min:
3–4 pairs (1) → three real playlists (3) → the big question (1). TG: fold to 2 pages; exemplars for Gap Report
Q1/Q2 and say-back; fix "your feed = your watch history" (training data is everyone's behaviour; your history is
the request); face analysis wording → "face-analysis tools have had higher error rates on darker skin when training
photos leaned lighter (documented in 2018 research)" — no numbers. Deck: question slides 3 and 10 lose the answer
sub (to notes); four-card slide 7 text ≤ 90; compare slide 9 ≤ 170. Slide 2 "Say less." → "Got it."
Listing: title drops "Activity"; INCLUDES per D2; "doctor the playlist" → "Fix the Playlist".
### L3 ai-fact-check-lab
Critic files: r1-critic-L3, student #17–24, buyer #4–5. Keep three passages and three pages. Draft #2/#3 verdict +
evidence get 3 ruled lines each (fills p2's blank); note prompt = "what's wrong, your second source, and does the
ending still stand?" Verdict RUN / FIX / KILL → three tick boxes per draft; glosses on each page. Rename "Clock
Out" → "Last Check"; rewrite the MEMO panel as a plain note from the editor (concept first, jargon out: runs →
"gets printed", clears → "passes the check"). "twelve people have walked" → "twelve people had walked on the Moon
by 1972". TG: key for the "Second source" column per draft (acceptable sources + what fails); Luna 2 (uncrewed,
1959) anticipation row; Wright wording "first sustained, controlled powered flights — the widely accepted record";
group key rows by draft. Deck: RANK card ≤ 90; "two of those sentences were false"; sub "not checked ones";
slide 8 titles "Round 1 / Round 2 / Verdicts out loud". Cover sub: fix "lateral-read every claim" → the RANK-consistent
line ("Smooth is not the same as true."); doc rectangle opacity 0.25; handle inside frame.
### L4 ai-taste-file
Critic files: r1-critic-L4, student #25–31, buyer #6–7. Cover: REPLACE the headphones with a feed card (rounded
rectangle with two text bars) carrying a solid gold heart, plus a page with an editor's mark; kicker "THE REVISION
LESSON". SL.6.1 decision = (a): Step 2 becomes a scripted 60-second SPOKEN exchange (editor reads the two notes
aloud, writer asks one question, editor answers), checklist row 4 records it; plan/TG/deck describe it. Fix
"training data" misuse (D9); hedge memory (D9). Step 2 instruction rewritten kid-plain (who writes on whose sheet;
with-devices: the teacher's projected account). Tone words: "lowkey" → "quiet", "hype" → "loud and excited".
Checklist rows ≥ 34px with tick boxes; So-Me/Not-Me boxes ≥ 72px; exit items two ruled lines each; Exit 3 "Why
would 'make it better' NOT have helped you?" (Objective 1). TG: one worked chain (a sample draft, two editor notes,
the starred revision, exit answers) on p1; with-devices what-ifs; state the disanalogy (the feed remembers; most
chats don't). Deck slide 3 hedge; slide 4 "fortune-cookie" → "notes for a generic writer".
### L5 ai-boring-work
Critic files: r1-critic-L5, student #32–37. Cover: REPLACE the faders with the analogy — a three-column board with
letter tiles, a small robot glyph over the first two columns, a hand glyph over the third. Sort board → three tall
boxes ("write as many letters as belong; every column needs at least 2"). Worksheet adds a listener strip: three
delivery moves (eyes / voice / pace) as tick boxes + "keep" and "fix" lines, so SL.6.4 is assessed for everyone.
Exit Ticket AUTOMATE line adds "— and who loses something when it does" (Objective 2 / 2-IC-20). Gloss "call" =
decision once, then say "Choice #1 / #2"; plain rewrites of studio jargon (demo → first recording, take → try,
single → the song to release first, set the mics → set up the microphones, freestyle session → made-up-on-the-spot
rap session, set order and vibe → song order and mood). Plan: materials add Defense Rubric + board; hand-out line;
share-out scoring via the listener strip (teacher samples); "toll booth" → "cafeteria cashier"; remove the
reviewer-note parenthetical. TG: D9 jobs hedge everywhere (plan, TG, description, slide 3); worked claim-frame
exemplar; exit exemplar includes a trade. Deck: per-task likely-column key in slides 8–9 notes; "artists" not
"clients" everywhere. Listing: lesson number in description; "negotiating a fee" → "agreeing on a price".
### L6 ai-agent-intern
Critic files: r1-critic-L6, student #38–44, buyer #15. The deck currently FAILS the content gate (slide 4 cards
> 90, slide 6 right > 170) — fix first. Agent definition, one sentence used on worksheet panel, plan Bridge + DI,
slide 3, TG: "An AI agent does a multi-step job on its own — and where your card is vague, it guesses forward."
Role confusion: p1 panel "Everyone is a party member AND a leader. Steps 1–2 you're the leader; in Step 3 you
switch and play an AI agent for a teammate; in Step 4 you're the leader again." Critic role object: "Read the card
as the audience; write 3 upgrades to the plan the Planner wrote." Gloss SHIP IT "(good to go)" / RUN IT BACK "(do it
again)" at first use; quest-card and exit cells ≥ 72px; "player" → "party member"; Scout mark "✓ (we know it for
sure — say how) or ? (needs checking — say where)". Plan: what-if per block incl. teams of 4 / remainder rule;
hedge "P.R.O. grown up"; kicker drops "· Capstone". TG: fold to 2 pages; exemplar squad output + a filled CHECK row;
exemplar exit quest card for a real task; "stands alone" first in Why this lesson. Cover: REPLACE the banner/circles
with four figure silhouettes in a row, one taller in gold with a small card (the leader). Listing: real 5-line
with-devices block in the plan (teacher's projected account, one card per team) so the promise is true; "plus scrap
paper" instead of loose-leaf.

## Verification (every agent, identical)
1. `npm run audit -- <slug>` is GREEN (paste the last line).
2. Cover thumbnail: `python3 -c "import pymupdf;p=pymupdf.open('products/<slug>/dist/review/product.cover.png');pix=p[0].get_pixmap(matrix=pymupdf.Matrix(200/1100,200/1100));pix.save('<scratch>/<slug>-cover-200.png')"`
   and view it: can YOU read what / for whom / why care?
3. Fillable: rasterise every page with typed values (pymupdf: set every Text field to "typed", every CheckBox True,
   `.update()`, `get_pixmap(dpi=80)`) to `<scratch>/<slug>-fill-pN.png` and view them.
4. Blank-tail per page: measure with Playwright (lowest element bottom ÷ 1056) and report.
5. Checks JSON — all must be true:
```json
{"audit_green":true,"cover_sub_one_line_le10_words":true,"cover_chip_font_ge24":true,"cover_art_inside_frame":true,
 "lp_whatif_every_block":true,"lp_transition_every_seam":true,"lp_minutes_sum_45":true,
 "ws_min_line_px_ge24":true,"ws_min_box_px_ge72":true,"ws_cell_px_ge34":true,"ws_max_blank_pct_le45":true,
 "ws_circle_one_replaced_by_ticks":true,"tg_key_every_student_item":true,"tg_whatifs_panel":true,"tg_max_blank_pct_le60":true,
 "deck_minutes_sum_45":true,"deck_no_answers_on_question_slides":true,"deck_notes_carry_keys":true,
 "listing_title_le80_band_middle_school":true,"listing_opener_and_hook":true,"listing_includes_5_files":true,
 "facts_hedged_per_D9":true,"retired_terms_clean":true}
```
## Report format (every agent, identical, nothing else)
```
## REPORT <slug>
Status: DONE | BLOCKED (why)
Decisions applied: D1 D2 … (list any NOT applied and why)
Critic findings: fixed [#…] · overruled by PLAN [#…] · deferred to lead [#…]
Screenshots: <absolute paths> cover, cover-200, ws-p1..n, tg-p1..n, lp-p1..2, fill-p1..n, changed slides
Blank tails: ws p1 xx% … tg p1 xx% …
Checks JSON: {…}
Notes to lead (≤ 5 lines): variations from the brief; new write-in idioms needing script support
```

# ROUND 2 FIXES (lead decisions from the round-2 critic reports, 2026-09-04)
Same hard rules, verification and report format as above. Scope per product is ONLY the items below plus
keeping every gate green. The render gate now measures PRINT media and asserts PDF page count = .page count
(a 1px print-side spill made a 4-page teacher guide out of a 3-page layout); trim to fit, never drop a required
item. US spelling and "check the box", never "tick", on every student page and in every listing.

## L1 ai-prompting-101
- Timing: Showcase 5 → 3 min, Exit Ticket 5 → 7 (1 + 6); mirror in the plan header, deck chips (8+10+20+1+6), TG.
- Lesson plan p2 opens with a floating callout: give it an h2 "Direct Instruction (cont.)" or pull it onto p1.
- Worksheet Exit #1 part two → "Now cover everything after your first five words. If that was the whole wish,
  what would the genie hand back? One sentence:" · "the genie's answer to one class's repaired wish (about black
  holes)" · "Which sentence would you double-check" (plan, TG, deck too) · tick → check everywhere.
- Teacher guide: trim ~2 lines on p1 so the PDF is 3 pages (gate) · "So far it mostly replaces tasks inside jobs,
  not whole jobs."
- Listing: "spot the checkable claims in a confident-sounding sample AI answer — one of them is false"; page
  counts re-verified from the PDFs.
## L2 ai-training-data-crate
- "one-genre playlist" → "one-vibe playlist (all loud, all fast, all party)" in product.yaml (both places), the
  lesson-plan sub, and the deck subtitle.
- Deck slide 9 left panel → questions ("Who asked for Spanish and got English? Who asked for slow and got
  medium?"); the declarations move to notes. Slide 9 right: "have misheard … more often". Add `title: "What's in
  the Playlist?"` at the top of slides.yaml (display title; short_name stays).
- Kicker (cover + plan) → "The Training Data Lesson".
- Plan: debrief "2–3 pairs (1 min)"; add the live-request transition line ("Turn to the pair beside you. Make up
  ONE request for their app — they can't say no.").
- Worksheet: Exit #3 → "One gap your partner spotted, and the idea YOU added to it." · Rule 3 → "Check ONE Fit
  box (Perfect / Kind of / Nothing) honestly." · row 7 → "Ask the pair next to you for ONE request. Write it:" ·
  "say your partner's idea back to them" · row-7 write-in same height as rows 1–6.
- TG: "some companies have since rebuilt their datasets, citing exactly that gap" · "behavior".
- Listing: tick → check.
## L3 ai-fact-check-lab
- Plan "Verdicts out loud (4 min)": one desk per draft per stamp (5–6 desks speak); everyone else adds a tally
  mark. Materials add pens/pencils. Objectives map to items ("(Exit #1)", "(drafts 1–3, C/S)", "(second-source
  column + stamp)").
- Worksheet: Desk words add "stamp = your verdict box (RUN, FIX, or KILL) — check one" · Draft #3 ending →
  "Edison's record makes him the most important inventor of the 1800s." (TG key wording follows) · method steps
  1–4 as four short bullets if they fit, else keep · Desk Helpers title → "use these on Draft #3 (and to check
  #2)" · drop the "a quote is a claim too" hint · wrap each RUN/FIX/KILL row in `class="oneof"` (the fillable
  copy then makes it one radio group) · ELL frame under the note lines: "Two things are wrong: ___ and ___.
  I would check ___. Your ending [still stands / does not stand] because ___."
- TG: "seven continents" → "(seven in the model US schools use)" in the safe-to-confirm line · Verdict Guidance
  for #3 adopts the key's framing ("KILL the ending, keep the true facts").
- Deck: slide 11 Exit #2 adds "— or one you expect to see" · slide 7 "he's" → "they're".
## L4 ai-taste-file (round 2)
- Lesson plan overflows in PRINT media (PDF was 3 pages for 2 .page divs) → trim so `npm run audit` is green and
  the Lesson Plan PDF + Preview exist again. Editor's-notes block: add "swap = 30 seconds, count it down".
- "tick" → "check" everywhere (worksheet S1/S2, slide 7, plan, TG key row).
- Worksheet Section 3: number the two lines "1. Editor, never ___" / "2. Editor, never ___". Intro panel → two
  sentences, one aside max. "Pet Peeves (things you hate)". Draft box 132 → 160px if p2 stays ≤ 45% blank.
- Cover art → ONE object: the feed card, ≥ 30% of frame width, gold heart, with the editor's mark drawn ON the
  card (one text bar struck through + a caret). Drop the separate note page. Sub stays "Generic in, generic out."
- Deck: slide 12 items lose the manual "1." numbers; slide 6 sub → one line ("An editor gives notes on YOUR
  writing. A ghostwriter writes it for you."), rest to notes.
- Listing: split the 60-word hook sentence; "works the same way" → "needs the same thing: you telling it";
  `npm run sheet -- ai-taste-file` after edits.
## L5 ai-boring-work (round 2)
- Cover sub → "AI takes tasks first, not whole jobs." (7 words, one line).
- Share-out (plan, worksheet p2, slide 10 + notes, TG): "Each Speaker says the frame once — 30 seconds each.
  Listener 1 marks Speaker 1's sheet, Listener 2 marks Speaker 2's." What-if: "Odd number of pairs → one trio of
  pairs rotates; sample that group." Split Pairs-of-pairs 5 min / Whole-class 2 min (block stays 8).
  Replace "every student is scored" with "each student's claim is scored" wherever it appears (TG, description).
- "tick" → "check" everywhere (worksheet, slide 10, TG ×10).
- Worksheet: `.blank` height 24px; "— and the trade is ___" stays, but "because ___" becomes its own full-width
  line; AUTOMATE panel adds "No decisions to make."
- Deck slide 12: "The people who win with AI tend to be the ones who decide what it does." (or drop the line).
- `npm run sheet -- ai-boring-work` after edits; confirm the Preview PDF exists after the audit.
## L6 ai-agent-intern (round 2)
- Step 3 paper logic (plan, worksheet, slide 8 + notes): papers never move mid-round. "At the 4-minute call the
  Critic reads the Planner's list over their shoulder." Planner's minutes 4–8: "add a time guess to every step
  and star the one step most likely to go wrong." Swap line: "Every player passes their OWN paper one seat left."
  Seat order Planner → Scout → Critic, so the Critic never reviews the Planner's list in Step 4 (say so in the TG).
- Critic role card: minutes 0–4 = "Write 2 things the audience on the card cares about." Then "at the 4-minute
  call, read the Planner's list and write 3 upgrades." Remove the contradiction with "from the card alone".
- Teacher guide exemplar: Planner step 3 becomes "Add a 40-word pitch (10 min)" (audience dropped) so the TASTE
  RUN IT BACK stands; KEEP → "Every step has a time guess and all four card parts are covered." (no "23 minutes").
  Mirror in slide 10 notes. Rotation note per seat order above.
- Definition identical everywhere: "— and where your card is vague, it guesses forward." (add "and" in the plan).
- "tick" → "check" (worksheet l.76/l.104, slide 11, TG, listing). Worksheet: "play an AI agent for your team's
  card"; exit "Which check would it fail first? Check one, then write what you'd look for:"; gloss "Card silent on
  something? (the card doesn't say)" and drop "ships with your name on it" for "your name is on it".
- Rubric evidence boxes ≥ 72px; KEEP / FIX three ruled lines each (rebalance p2; ≤ 45% blank). Wrap each SHIP IT /
  RUN IT BACK pair in `class="oneof"`.
- Slide 6 exemplar text = the plan's board card wording. `npm run sheet -- ai-agent-intern` after edits.
## Unit + bundle (round 2) — one builder, owns products/bundle-ai-line/** plus the listed cross-lesson lines only
- Bundle cover: badge → "COMPLETE UNIT"; sub → "Every AI job starts and ends with a human." (one line); chips stay
  `6 × 45-min lessons` · `Grades 6–8` · `No prep · No devices needed`; delete the unused .list/.row CSS.
- Bundle listing (product.yaml): add "Standards: ISTE 1.5.c, ISTE 1.3.b, CSTA 2-IC-20, CSTA 2-IC-21, CCSS ELA
  W.6.4 (plus RI.6.8, W.6.5, SL.6.1, SL.6.4 inside the lessons)."; "one a day for six class periods"; "less than the
  price of four paid lessons"; INCLUDES adds "Each lesson: Lesson Plan PDF · Worksheet PDF · Fillable Worksheet
  PDF · Teacher Guide PDF · Slides .pptx"; title slot 3 → "| No Student AI Accounts" (≤ 80). Overview: "discussion
  guide (three questions with answers)"; "reading level checked to the middle-school range"; sub-tomorrow example →
  Lesson 3 (read a paragraph, call a vote, hand out the desk). `npm run sheet -- bundle-ai-line`.
- scripts/preview.mjs: for a product with `bundle_of`, the preview = its cover + up to 3 sample pages taken from the
  children's dist/review (ai-prompting-101 lesson-plan-p1, ai-fact-check-lab worksheet-p1, ai-prompting-101
  teacher-guide-p2) + overview p1; band text ≤ 60 chars so it never clips ("PREVIEW · full download: 6 lessons, 31 files").
- scripts/upload_sheet.mjs: the "(single zip — use for free listings)" note only when price_usd == 0.
- Cross-lesson uniformity (the ONLY edits allowed outside the bundle folder):
  · products/ai-taste-file and products/ai-agent-intern: one sentence in TG "Why this lesson" AND in the closer
    slide `sub`: "Every AI job runs human → AI → human: you draft / write the card, the AI does the middle, you
    revise / check the loot." (adapt the verbs to the lesson).
  · products/ai-training-data-crate/src/slides.yaml kicker → "The Training Data Lesson" (no suffix).
  · every lesson's closer note: "(Lesson N — in the unit bundle, or sold separately)".
  · every product.cover.html: `.kicker { margin-top: 70px }`, `.sub { color:#FFFFFF; font-weight:600; font-size:40px }`
    (L1 values). Re-check the 12px clearance gate on all six.
  · products/ai-boring-work lesson plan No-device block adds "With devices: none needed; optionally project the task board."
  · Lesson-plan section naming: leave as is (lead: the layouts differ by design; not worth a six-file churn now).
- Verification: `npm run audit` (whole repo) GREEN; view the bundle cover-200, the bundle preview pages, and one
  cover per lesson at 200px in a contact sheet.
### Additions from the buyer critic (same unit + bundle builder)
- Bundle: title → "AI Literacy Unit Bundle: 6 No Prep Lessons | Middle School 6-8 | Save 30%"; cover badge →
  "SAVE 30%" (replaces "COMPLETE UNIT" above); price sentence → "$14 for all six — the five paid lessons alone are
  $20. Save 30%."; `standards:` adds CCSS ELA RI.6.8, W.6.5, SL.6.1, SL.6.4 (text verbatim from the registry) and the
  description's Standards line lists all of them.
- scripts/preview.mjs (all products): band text "FULL DOWNLOAD: PLAN · WORKSHEET + FILLABLE · GUIDE · SLIDES" (bundle:
  "FULL DOWNLOAD: 6 LESSONS · 31 FILES"), sized to fit inside 612pt with margin, ~35% opacity; sample order = cover,
  worksheet-p1, lesson-plan-p1, then the teacher guide's LAST page (never a key page).
- L4 description sentence two names the activity: "…you taught it, one like at a time — so in My Taste File + The
  Editor's Chair, students write a one-page style guide, draft an About Me, take exactly two notes, and revise it
  themselves."
- Every lesson description closing line adds: Search the store for "AI Literacy Unit Bundle".
- L2 short_name → "What's in the Playlist?" (filenames drop the "?" automatically); bundle references match.
- Cover art polish: L5 tiles → three tiles reading "AI" / "AI + YOU" / "YOU" (one per column, robot over the first
  two, hand over the third); L6 figures get a ground line/platform so they don't read as cropped; L4 strike in gold
  with a short inserted bar above the caret. Three renders each, 12px gate green, view the 200px thumbnails.
- `npm run sheet` for all seven at the end; `npm run audit` (whole repo) GREEN.
## Student-read fixes (round 2, one builder, all six lesson folders — student-facing text only: worksheet.html, slides.yaml, and any plan/TG line that quotes the same sentence)
Apply every item in docs/gauntlet/2026-09-03/r2-critic-student.md exactly as written there (the fixes are lead-approved
paste-ready wording). Lead rulings on the choices it leaves open: L6 uses "party" on student pages (rename "Squad Roles"
slide title to "Party Roles"; the product name "Lead Your AI Squad" stays); "Be honest with yourself" in L1 and L4;
L2 role renamed "the Caller" on worksheet, slides, plan and TG wherever "Request Line" appears; L2 ruled lines 26px
only if p2 stays ≤ 45% blank and the print gate stays green. The agent definition sentence on L6 stays identical
everywhere it appears — update all copies (worksheet panel, plan, slide 3, TG) to the new plain wording.
Verification: `npm run audit -- <slug>` GREEN per lesson; readability still ≤ 8.5; view only the changed pages.

# NEWS DESK BUILD (lead decisions, 2026-09-09) — products/news-desk-frames and products/news-desk-frame-free
Why: docs/research/2026-09-07-news-desk-scan.md and docs/STRATEGY.md "News desk". Undated reusable frames carry the
reviews in this category; dated editions are the commodity floor. Trending stories live inside as worked examples.
Same hard rules as the top of this file. Reference for structure and polish: products/ai-fact-check-lab (the Fact Desk
lesson — the frames are that method generalised) and products/ai-prompting-101.

## Product shape — news-desk-frames ($5, line: ai, status stays `draft` until FACTS.md is verified; catalog row exists)
- `src/frames.html` — TEN one-page student frames, identical skeleton on every page: frame title + one-line purpose ·
  a story slot (three `.blank` lines: Story · Where I saw it · Date) · the method as numbered steps · write-in space
  meeting the bar (lines ≥ 24px, boxes ≥ 72px, cells ≥ 34px) · a two-line "So what?" exit. Undated, number-free, no
  named products or people — the student supplies the story. Frames and their methods (do not rename):
  1 Fact Desk — underline claims · C/S · second source · verdict RUN / FIX / KILL (`class="oneof"` row)
  2 The Trade — who wins · who loses something · what could go wrong · my call
  3 Write the Rule — 4 rules × (helps / hurts / costs) grid → my 3-rule policy → defend one in 3 sentences
  4 Who Pays for Free? — donations · ads · membership · one sponsor · sell it: one gain + one loss each → pick
  5 Unit Rate Receipt — 3 options (price, amount) → cost per unit → best option for 3 short profiles
  6 Percent Change Card — old → new → difference → percent → "hours of work at $__/hr" → 8-week save-up plan
  7 Copy, Style, or Person? — 8 cards sorted into copying a work / a style / a person → where I draw the line
  8 Source Check — who made this · who paid · what do they gain · 5 statements: fact from the source / opinion it implies
  9 Permission Slip — 8 things an AI helper could do: allow / check first / deny + one-line reason → the risky combo
  10 Risk Grid — 5 things to protect: cost to replace × how bad if gone → spend a fixed budget on 2 protections
  Every page carries the L3 lens spot art (`#minimag`-style) as the pack's glyph; masthead "Future Skills · News Desk".
- `src/lesson-plan.html` — "News Desk Day", 2 pages: a 45-minute block (Open 5 · Read 10 · Frame 20 · Share-out 10)
  with the 25-minute bell-ringer variant stated (2 · 5 · 15 · 3); one what-if per block; quoted transitions; how to
  pick a frame for a story (a 10-row table: story type → frame); Support / Extension / ELL / No-device.
- `src/teacher-guide.html` — ≤ 4 pages: p1 why + "How to pick a safe story" (the rules from docs/STRATEGY.md News desk,
  in teacher words: two sources or it doesn't exist; "alleged" for any lawsuit; officeholders as officeholders; if
  students must pick a political side, skip it; never a story that shames a family); p2–3 one script paragraph per
  frame (three quotable lines + what a strong answer looks like); p4 ONE rubric that scores any frame (claim ·
  evidence · method followed · said plainly) + a "when it goes sideways" panel.
- `src/examples.html` — "Worked Examples · September 2026", teacher-facing, ONE page per example: an original 5–8
  sentence passage at grade 6 ("As reported by <outlet>, <date>") + a filled frame exemplar. Four examples, all
  number-free, from the scan: NYC's grade-8 AI rule → Frame 3 · the musicians' identity lawsuit → Frame 7 ("alleged"
  throughout, no lyrics, no artist art) · SteamDB sold by its solo owner → Frame 4 · an AI helper that can act on a
  photo library → Frame 9. NO example with a printed figure until FACTS.md says VERIFIED.
- `FACTS.md` — one row per factual claim in examples.html: claim · outlet · date · URL · verified-by (PENDING until a
  person or agent with direct access re-reads the primary; validate refuses status "rendered" while any PENDING).
- `src/slides.yaml` — 12 slides: title · the routine (minutes) · one slide per frame (its question + ≤ 4 step bullets),
  notes carry the script paragraph. `src/product.cover.html` — D1 template; kicker "THE NEWS DESK PACK"; h1 "News
  Desk" / "Frames" (or "Any Story,"/"Ten Frames" — builder picks what fits 2 lines); sub "Any story. Ten ways to
  think it through." (8 words); chips Grades 6–8 · 10 one-page frames · No prep · No devices needed; art = a
  clipboard holding a 2×2 grid of small frame glyphs (check, scale, percent, shield), one object, ≥ 30% frame width.
- `product.yaml` — title from catalog (≤ 80); description per docs/COPY.md (opener, hook, do line, how it runs,
  WHAT YOU GET one line per file, Standards, unit line pointing to Lesson 3 and the bundle); standards 3–5 codes that
  exist in the registry — decide from: ISTE 1.3.b, CCSS-ELA RI.6.8, CCSS-ELA W.6.1, CSTA 2-IC-20, CCSS-MATH 6.RP.A.3c
  (verify each exists; drop any that doesn't). `includes:` = the shipped filenames.
## news-desk-frame-free ($0) — Frame 1 alone
`src/frames.html` = Frame 1 page only (identical to the pack's), `src/teacher-guide.html` = 1 page (routine + safe-story
rules + the Fact Desk script + rubric row), cover with FREE badge (L1 pattern), sub "Any story. Check it before you
repeat it." Description ends with the funnel to the pack and to Lesson 3.
## Build order (two builders, sequential, each ≤ one product's files at a time)
Builder A: news-desk-frames — frames.html, lesson-plan.html, product.cover.html, product.yaml. Gates: `npm run audit --
news-desk-frames` will fail on missing TG/deck at first; get render + readability green for the pages you own, then hand
over. Builder B: teacher-guide.html, examples.html + FACTS.md, slides.yaml; then the free product; full audit GREEN for
both (status `draft`: validate allows PENDING facts only while not "rendered" — leave status `draft` in yaml AND catalog).
Verification per PLAN top + view every frame page once (10) and the cover-200.

# ROUND 3 FIXES (lead decisions, 2026-09-09) — reports: docs/gauntlet/2026-09-03/r3-critic-L1.md, r3-critic-L5.md

Hard rules as above: touch only the files named; never rename files or ids; never commit; never invent content; re-run
`npm run render -- <slug> && npm run validate -- <slug> && npm run readability -- <slug> && npm run judge -- <slug>` and report.

## L1 `products/ai-prompting-101` (files: src/lesson-plan.html, src/worksheet.html, src/teacher-guide.html, product.yaml; plus scripts/upload_sheet.mjs, then `npm run sheet -- ai-prompting-101`)
- LP Showcase (3 min): replace the with-devices clause with "With devices: run ONE live instead of the third reading." Keep the what-if; end it "…adds a rule. Run it again only if you have the minute."
- LP Objective 1: reword to "Show how a vague prompt lets the genie choose (and why that produces a worse answer)." Leave the exit item alone.
- LP Prep cell: "Print worksheets (and Teacher Guide p.3 if you use the Support/ELL sentence starters). That's it."
- LP At-a-Glance Tech cell: "None — runs fully unplugged. Optional: a projector for the slides; one AI tool (ChatGPT, Claude or Gemini) on your screen for the Showcase."
- WS p.1 P.R.O. box R bullet: add "(at least 2)" after "the rules". WS `:105` → "the genie's answer to a repaired wish about black holes:". WS `:107`, LP `:109`, TG `:80`: "a real place" → "a real source".
- TG `:105`: "So far it mostly replaces tasks inside jobs, not whole jobs" → "So far the clearest cases are tasks inside jobs, not whole jobs".
- product.yaml description: "the plan says exactly what ChatGPT, Claude or Gemini add" → "the plan marks the two moments a live AI tool (ChatGPT, Claude or Gemini) adds something". Keep the paragraph's length within ±10 chars; description must stay ≥400 and pass COPY.md.
- scripts/upload_sheet.mjs `:60`: replace the rule text with `the first three lines must be filter line → hook → do line (docs/COPY.md)`. Regenerate this product's sheet only.
- Title: unchanged (lead overruled).
Verification: gates green; report the three LP/WS/TG line diffs, the description sentence, `dist/review/lesson-plan-p1.png` and `worksheet-p1.png`.

## L5 `products/ai-boring-work` (files: src/lesson-plan.html, src/worksheet.html, src/teacher-guide.html, src/slides.yaml)
- Defend It procedure, written once and mirrored in all three surfaces (LP `:121–123`, WS `:141/:147`, slides.yaml slide 10 `:74–75`), teacher register in LP/notes, kid register on WS/slide:
  "Face the person across from you. Speaker 1 reads their claim out loud (30 seconds), then slides their sheet across. Listener 1 checks the three boxes and writes keep or fix (30 seconds), then slides it back. Switch: Speaker 2 reads, Listener 2 marks. Everyone ends with their own sheet."
  LP exit transition: replace "Swap sheets back — you need your own" with "You already have your own sheet — bottom of page 2." Trio fallback (`:122`): "Trio: 20 seconds each, listeners mark the boxes only."
- WS `:158`: move "The job: ______" to its own full-width ruled line (≥24px tall, full column width) above the rest of the exit ticket; the fillable field must be ≥4 in wide after render (check `dist/review/worksheet-p2.png` and the fillable widget rect).
- KEEP HUMAN tail: WS `:76` "Humans only." → "The person is the whole point." (verify identical string in LP `:92`, slide 4).
- TG `:92` "share-out material" → "Defend It material"; TG `:120` "in the Share-Out setup" → "in the Defend It setup"; slides.yaml `:64` "save it for the share-out" → "save it for Defend It".
- slides.yaml `:20`: make the slide-3 notes bridge sentence identical to the plan's bridge sentence (copy from LP; drop "the human parts become more of the job").
- slides.yaml `:87`: "Every AI job runs human → AI → human" → "A good AI job runs human → AI → human".
- Page counts must stay LP 2 / WS 2 / TG 3; deck 12 slides.
Verification: gates green incl. `npm run slides -- ai-boring-work` content gate; report `dist/review/lesson-plan-p2.png`, `worksheet-p2.png`, `slide-10.png`, `slide-12.png`, and the fillable job-field width.

## L2 `products/ai-training-data-crate` (files: src/lesson-plan.html, src/worksheet.html, src/teacher-guide.html, src/slides.yaml, product.yaml; then `npm run sheet -- ai-training-data-crate`) — report r3-critic-L2.md, all 16 accepted
- Exit Ticket #3, one wording everywhere (WS `:141`, LP `:128`, slides.yaml `:70`, TG `:90` exemplar + acceptance): "One gap your partner spotted, and the idea YOU added to it." TG exemplar: "…so Jordan got a stadium track. I'd add that nothing is in Spanish either, so Tomás loses too." Acceptance: a gap with no add is not accepted. Slide 11 item 2 = the worksheet's Exit #2 text verbatim.
- WS Exit lines: #2 two lines, #3 two lines (take one from #2 if it has three); page 2 stays one page.
- LP Frame block retimed: Setup 2 · Serve 8 · Gap Report 7 · Fix 3 (= 20); deck sub-step chips `slides.yaml:41–44` mirror it. Block total stays 20; plan total 45.
- LP `:111` → "App names the card; each checks their OWN Fit box (they may differ)."
- WS `.addcard` min-height 72 → 90px. Recover the page-2 room by trimming spacing/margins only — no ruled line below 24px, no box below 72px, no cell below 34px. After render, dump the fillable widget rects (pymupdf) and report the `.addcard` field heights in pt (must be ≥ 44).
- WS `:67` → "Your check marks are your evidence for the Gap Report." WS `:73` header → "The Playlist — All 12 Songs You Know (all in English)". WS `:129` card format → "Title · genre · speed · language · what it's for" (and the same on the `.boxlabel` at `:131` if that is where it prints).
- TG `:97` → "higher error rates on darker skin (documented in 2018 research), most likely because the example photos leaned lighter." Do not add a citation.
- slides.yaml `:58` → "Photo tools got darker skin wrong more — their example photos were mostly light-skinned, researchers found." `:52` delete bullet 4. `:5` subtitle → "An AI is a music app; its training data is the playlist. Today you'll BE the app."
- product.yaml `:29` → "…a slow last-dance song, or a song for grandma's birthday dinner." `:31` "tick a Fit box" → "check a Fit box". `:27` "serve six classmates' requests" → "serve six classmates' requests plus one live one". Description stays ≥ 400 chars and passes COPY.md. Regenerate UPLOAD_SHEET.
- Page counts stay LP 2 / WS 2 / TG 3; deck 12 slides.
Verification: `npm run audit -- ai-training-data-crate` GREEN; report `dist/review/worksheet-p2.png`, `lesson-plan-p2.png`, `slide-11.png`, `slide-02.png` (routine chips), and the `.addcard` field heights.

## L3 `products/ai-fact-check-lab` + two shared gates — report r3-critic-L3.md, all 20 accepted
Order matters: do the two script changes FIRST, re-render every product to prove nothing else moved, then the L3 content.

### A. scripts/fillable.mjs — printed examples are not write-ins (BLOCKER)
An underscore run inside an element that matches `.frame`, or inside any ancestor carrying `data-nofill`, is not a write-in and gets no field. Nothing else about field detection changes. Then `npm run render` for EVERY product and report the per-product field-count before/after: only L3 may change (it should lose 12), and any other product that loses a field is a bug in your selector — report it, do not "fix" that product.

### B. scripts/slides.mjs — two gate corrections
1. Support `verbatim: true` on a slide: it skips the CONTENT character cap for that slide only and keeps the geometric overflow gate. Document the flag in the schema comment at the top of the file as: allowed only on a slide that reproduces an assessed student item word for word.
2. Title slide: when the deck has a cover image, do not emit the left-hand chip row (the cover already carries those chips). Keep the kicker, title and sub.
Then re-render every deck and view `dist/review/slide-01.png` for at least three products; report that no deck lost a non-title slide and no deck newly overflows.
3. Back-apply to L2: `products/ai-training-data-crate/src/slides.yaml` slide 11 item 2 becomes the worksheet's Exit #2 sentence verbatim, with `verbatim: true` on that slide. Re-audit L2.

### C. products/ai-fact-check-lab (src/lesson-plan.html, src/worksheet.html, src/teacher-guide.html, src/slides.yaml, product.yaml, then `npm run sheet -- ai-fact-check-lab`)
- Round 1 (7 min): both partners work Draft #1 on their OWN sheets; log the TWO riskiest claims only. Worksheet's Draft #1 log table drops to two rows; the instruction says "your two riskiest claims".
- Round 2 (10 min), written exactly: "Partner A leads Draft #2, Partner B leads Draft #3 — each on your own sheet. (6 min) Then: 'Swap sheets with your partner. You are now holding their draft. Read their log, add one claim they missed, and hand it back.' (2 min) Owners check their own stamp and write the note. (2 min)" The old "Swap!" line and the "Sheets back to their owner" transition are replaced by this.
- Share-out (4 min): hands-up count; the teacher writes one tally row per draft on the board. No student walks to the board.
- `lesson-plan.html:83` Support: keep "Drafts #1–2 only"; the hint becomes the Support line's alone — reword the three printed "Need a start?" frames to "What's wrong: ______. I would check ______." (no error count on the student page).
- Worksheet p.2 Desk Helpers header → "use these on both drafts". `.helpers` gap 12px → 22px.
- Note lines 3 → 4 on all three drafts; exit ticket 2 → 3 lines per question. Nothing shrinks below 24px.
- One line under the method on p.1: "On the typeable PDF you can't underline. Copy each claim you'd CHECK into the table, and put your S-claims in the last row."
- Gloss "column" in the Desk words line: `column = one writer's regular story`.
- TG: stamp key for Draft #3 → "Correct stamp: KILL (the headline claim and its quote both fail). A defended FIX earns partial credit." Add a "Mark C" column to the p2 key table naming the 3–4 claims per draft that must be marked C. Column header "Planted error" → "What the desk should catch". Add a ≤130-character exemplar for Theo's and Marcus's notes and rewrite Priya's to ≤130 characters.
- Deck: slide 11 item 2 = the worksheet's Exit #2 sentence verbatim (`verbatim: true`); "FIX (correct it, then print)"; "Name a second, independent source that could confirm it."; "Marcus's invention feature" in plan and deck; closer ends "check it".
- product.yaml: "Lesson 3 of 6"; "three AI-helped drafts"; "the first six minutes"; "a four-step fact-desk method that works on feeds and group chats too" (drop "they will use for life"); hook trimmed to one sentence ≤16 words. Description stays ≥400 and passes COPY.md. Regenerate UPLOAD_SHEET.
- Page counts stay LP 2 / WS 3 / TG 3; deck 12 slides.
Verification: `npm run audit -- ai-fact-check-lab` and `npm run audit -- ai-training-data-crate` GREEN; report `dist/review/worksheet-p1.png`, `worksheet-p2.png`, `worksheet-p3.png`, `lesson-plan-p2.png`, `slide-01.png`, `slide-11.png`, the field-count table for all products, and the fillable rasters proving no field sits on a printed example.

## L4 `products/ai-taste-file` — report r3-critic-L4.md, all 26 accepted
Files: src/lesson-plan.html, src/worksheet.html, src/teacher-guide.html, src/slides.yaml, src/product.cover.html, product.yaml, then `npm run sheet -- ai-taste-file`. Nothing else — the shared scripts are another builder's.
- **Turn order**, verbatim on worksheet p.2, lesson plan and slide 10 (kid register on the sheet and slide, teacher register in the plan and notes): "Speaker 1 is the partner whose first name comes first in the alphabet. Speaker 1 is the editor for the first minute: read your two notes out loud. Writer: ask ONE question. Then switch — Speaker 2 runs the same minute. Then swap sheets back." On the worksheet this goes in page 2's dead band as a boxed protocol.
- **Timing**: blocks still sum to 45. Floors: Editor's Chair ≥ 7 min (0.5 swap · 4 read-and-write · 2 talk · 0.5 back), Revise ≥ 6 min, Last Check ≥ 5 min; take the minutes from Activity 1 and Direct Instruction. Deck chips mirror the new split exactly. Report the final split.
- Revise instruction → "rewrite only the sentences your notes point at, plus enough around them to make it read." Last Check #1 → "the one word or phrase you changed."
- Worksheet: Note 1 and Note 2 get three ruled lines each. `.pairgrid .writebox` min-height → 84px. Name `.blank` min-width → 200px (the fillable field must measure ≥ 150pt after render; report it). Section 2 heading → "Section 2 — How I Like It".
- **SVG z-order**: in `#feedcard` the gold heart path is drawn before the page rect and is clipped by it while the text bar crosses its left lobe. Move the heart after the page rect and shift it clear of both (roughly x 40–64). The same defect is in src/worksheet.html, src/lesson-plan.html and src/teacher-guide.html — fix all three, then look at a page PNG from each to confirm the heart reads whole.
- Teacher guide: note frame ends with a question — "Your taste file says ______ (section #), but ______ reads ______. Which part would you say your way?" Exemplar Note 2 → "…using two exclamation points is shouting" and retarget it to Section 3. Trio note → "trio: run the three talks in a round, 30 seconds each — they finish while the pairs finish their second minute."
- **Standards swap**: replace ISTE 1.6.b with ISTE 1.1.c in product.yaml, the teacher guide's full-text list, the lesson-plan chips and the listing's standards line. Text must be character-identical to curriculum/standards-registry.yaml. New taught/assessed line: "Taught: what to hand an AI so its feedback is about your writing, and how to read two notes without taking the pen. Assessed: the two notes in The Editor's Chair and the starred revision on Revise & Last Check. On the projected path the class watches this performed with a real tool."
- Through-line sentence in this product only (teacher guide and slides.yaml): "Every AI job runs human → AI → human" → "A good AI job runs human → AI → human."
- Deck: slide 5 gains the three-sentence draft as a card with sentence 2 marked, so the note has something to point at. Slide 7 quotes the sheet's stem: `Section 3 — Pet Peeves: "Editor, never ______." Write two.` Slide 10 carries the turn-order text and its title becomes "Talk it through — 2 minutes". Do NOT touch the title slide; another builder is fixing that at the script level.
- Cover: sub → "The AI gives notes. You stay the writer." Kicker ≥ 32px at full opacity. Art → one page, one struck line, the replacement written above it, caret touching the struck line; drop the heart and the second bar. Iterate at least three times against products/ai-prompting-101/dist/review/product.cover.png and check a 200px downscale each time.
- Listing: "revise their own draft on Revise & Last Check"; Do line → "…draft an About Me, get exactly two notes from a partner, and revise it themselves."; device path → "Each student hands the taste file to a partner playing the AI. With a projector you can also run one volunteer's file through a real AI on your own screen."; "Lesson 4 of 6"; "…is the classroom AI policy worth repeating all year." Description stays ≥ 400 and passes COPY.md.
- Page counts stay LP 2 / WS 3 / TG 3; deck 13 slides.
Verification: `npm run audit -- ai-taste-file` GREEN; report `dist/review/product.cover.png` + a 200px downscale, `worksheet-p2.png`, `lesson-plan-p2.png`, `slide-05.png`, `slide-10.png`, the name-field width in pt, and the new block split.
