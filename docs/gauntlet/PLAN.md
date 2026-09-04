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
