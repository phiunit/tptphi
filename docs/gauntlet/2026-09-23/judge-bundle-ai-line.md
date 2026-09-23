# Judge — bundle-ai-line (AI Literacy Unit Bundle)

Scope: what the bundle adds and what only a bundle buyer notices: the unit overview, unit coherence across the six lessons, the cover, listing and preview as the case for $14 over $4, and the zip as opened. Lesson content was not re-judged page by page. Evidence: `dist/review/*.png`, text of every shipped PDF extracted with pymupdf, the zip manifest hash-compared against each child's current `dist/`, the six children's current lesson plans, worksheets and teacher guides, `product.yaml`, `UPLOAD_SHEET.md`, `curriculum/catalog.yaml`, `scripts/render.mjs`, `scripts/preview.mjs`, and `npm run validate -- bundle-ai-line` (read-only).

## Verdict

The unit underneath is real and better than the bundle layer says. The six lessons share one turn-order rule. Every teacher guide opens on the same line ("A good AI job runs human → AI → human") and then says which half that lesson trains. Four lessons call back to Lesson 1, each hedged for standalone buyers, and the seven covers read as one family at thumbnail size. The price math is honest too. The bundle layer on top is stale and thin, though. The zip ships the **12 September** copies of all 30 lesson files, and every child was re-rendered on 23 September, so `npm run validate` fails with 30 staleness errors and a buyer today downloads the lessons from before the rewrite. The preview is stale for the same reason. It also spends two of its four sample pages on the free lesson. The unit overview was last edited on 12 September. It describes Lessons 1, 4 and 6 the old way ("Lesson 1 trains the start", "Use AI for feedback", "Brief a team"). It also doesn't do its one job: a teacher can't plan six days from it in five minutes. It has no print counts, no grouping per day and no board framework per day. The listing's case for $14 rests on savings alone. It never says the one thing a single-lesson buyer can't get, which is that the lessons talk to each other. The zip is 31 files in one flat folder, and alphabetical sorting scrambles the lesson order. Re-render, rebuild overview page 1, add folders, and sell the connection. With those four moves this is a five-star unit. Today it would draw "great lessons, but the files didn't match the preview" reviews.

## Top 5 moves

1. **Re-render the bundle last** (BLOCKER). Wait until the other agent's typographic fixes to `ai-prompting-101` and `ai-fact-check-lab` land. Then run `npm run render -- bundle-ai-line`, then `validate`, `judge` and `preview` for the bundle, in that order. That replaces the stale zip (all 30 packed lesson files differ from the children), the stale preview (it shows L1's pre-rewrite plan) and the overview PDF. Also move catalog status back until validate is green.
2. **Rebuild overview p.1 so it plans the week.** Replace the glance table with the "Six days at a glance" table below: board framework, human job, print count, grouping and setup per day. Add the copy total. Fix the three untrue rows and the through-line ("Lesson 1 trains both"). Page 1 has about 140px free and page 2 about 110px, so it fits in two pages if you cut the "What's in Every Lesson" panels to one line each.
3. **Give the zip folders.** Use `Lesson 1 - How to Talk to AI/` … `Lesson 6 - Lead Your AI Squad/`, with `START HERE - Unit Overview.pdf` at the root. Right now Finder and Explorer sort the flat files so that Hallucination Hunters (L3) sits above How to Talk to AI (L1) and What's in the Playlist (L2) comes last. That means `render.mjs:156` must stop using `zip -j` and zip from a staging directory. Check that `validate.mjs` checkBundleFresh still matches the files by basename.
4. **Rebuild the preview to sell the paid five.** Use this order: cover, overview p.1, a new "What's inside" page with the six lesson covers in a 3×2 grid, labeled Lesson 1–6, then the L5 worksheet p.1 (Studio Task Board) and the L6 worksheet p.1. Drop the L1 plan p.1 and L1 guide p.3, since anyone can download L1 free. Move the PREVIEW tag off the Grades chip.
5. **Sell the connection, not only the discount.** Add a "THE LESSONS TALK TO EACH OTHER" paragraph to the listing (text in Lens 1, product.yaml:58). Add a "Routines that repeat" box to overview p.2 (text in Lens 2 #1). Redraw the cover art as the six lesson icons on the six books, and de-duplicate the cover's chip and kicker (Lens 1, cover:46–47).

## Lens 1 — Writing

### products/bundle-ai-line/src/unit-overview.html

- `unit-overview.html:29` · COULD · current: "Six 45-minute lessons. No prep, no devices required. Teach them in order for the full arc, or pull any single lesson — each one stands alone." · rewrite: "Six 45-minute lessons that run on paper. No prep, and no student ever needs an AI account. Teach them in order, or pull any one. Each lesson stands alone." · reason: promise. The listing's lead line is the one a buyer paid for, and the overview never says it.
- `unit-overview.html:37` · COULD · current: "Write prompts a literal AI can't twist (P.R.O.)" · rewrite: "Write prompts a literal AI can't twist (P.R.O.: Purpose, Requirements, Output)" · reason: gloss. The planning teacher hasn't read L1 yet.
- `unit-overview.html:39` · COULD · current: "A newsroom fact desk" · rewrite: "The school paper's fact desk" · reason: accuracy. L3 is The Comet, a school paper, not a newsroom.
- `unit-overview.html:40` · MUST · current: "Use AI for feedback, then revise their own work" · rewrite: "Write a taste file, get two notes, revise their own draft" · reason: truth. On paper nobody uses AI (the L4 plan says "The partner IS the AI"), and the lesson's artifact, the taste file, goes unnamed.
- `unit-overview.html:41` · COULD · current: "Argue automation tradeoffs; think about future jobs" · rewrite: "Sort studio tasks (automate, augment, keep human); defend one out loud" · reason: vague. "Think about" names no task.
- `unit-overview.html:42` · MUST · current: "Brief a team, assign roles, check the work (capstone)" · rewrite: "Write a quest card, play the AI squad, check the loot (capstone)" · reason: naming. The lesson now says quest card, squad and loot, and "brief" is on the retired list for kids' pages.
- `unit-overview.html:46` · MUST · current: "Lesson 1 trains the start; Lesson 3 trains the check;" · rewrite: see the full callout below · reason: truth. The L1 plan says "Today you get good at both human parts," L1's exit ticket #2 is a check, and the L1 guide says "This lesson trains both."
- `unit-overview.html:46` · MUST · current: "they transfer to every AI tool your students will ever touch." · rewrite: "they carry over to whatever AI tool your students pick up next." · reason: hedge (ANTI_SLOP 17).
- `unit-overview.html:46` · MUST · current: "Lessons 2, 4, 5 and 6" · rewrite: "Lessons 2, 4, 5, and 6" · reason: serial comma (COPY). Page 2 of the same document has it: "Lessons 1, 2, 4, and 6".
  Full callout rewrite, `:46` (it also cuts a 38-word sentence built on a dash list): **Human → AI → Human.** A good AI job has two human parts. A person starts it (the prompt), and a person ends it (the check). Lesson 1 trains both. Lesson 3 goes deep on the check. The other four show a human stepping in: Lesson 2 spots the gap in the playlist, Lesson 4 hands over the taste file, Lesson 5 makes the call only a person should make, and Lesson 6 checks the loot. Those two jobs carry over to whatever AI tool your students pick up next.
- `unit-overview.html:53` · COULD · current: "Open each with a 2-minute recall: "what were the two human jobs?"" · rewrite: "Spend the first 2 minutes of each warm-up on one recall: "What were the two human jobs?"" · reason: timing. Every plan already sums to 45, so the 2 minutes have to come from somewhere. Also capitalize the quoted question.
- `unit-overview.html:55` · COULD · current: "Lesson 1 alone delivers the highest-value skill. Lesson 3 if your focus is media literacy." · rewrite: "Teach Lesson 1. It's the skill they'll use most. Media literacy focus? Teach Lesson 3." · reason: press-release ("delivers").
- `unit-overview.html:56` · COULD · current: "Lesson 3 — the sub reads a paragraph aloud, calls a vote, and hands out the fact desk. Zero devices, zero prep." · rewrite: "Lesson 3. Every line is scripted: the sub reads one paragraph aloud, calls a vote, then follows the plan block by block. No devices, no prep." · reason: accuracy. The current line describes only the 6-minute warm-up.
- `unit-overview.html:68` · MUST · current: "Anchor standards" · rewrite: "Standards" · reason: term. In CCSS, "anchor standards" means the College and Career Readiness anchors. These are grade-level codes, and an admin will notice.
- `unit-overview.html:80` · MUST · current: "Scripted plan with timed blocks that total 45 minutes · Teacher guide: a key for every student item, exemplars, what-ifs · Standards with taught/assessed evidence · Support, extension, and ELL variants" · rewrite: "2-page scripted plan, every block timed to 45 minutes · 3-page teacher guide: a key or exemplar for every student item · 11- to 13-slide deck, script and keys in the speaker notes · Standards with taught/assessed evidence · Support, Extension, ELL, and no-device variants" · reason: omission. The only bundle-made document leaves out the deck and the no-device variant, which the listing sells.
- `unit-overview.html:82` · COULD · current: "Reading level checked to the middle-school range" · rewrite: "Every student page checked at grade 8.5 reading level or below · A fillable twin of every worksheet for Chromebooks and tablets" · reason: checkable. Also adds the missing fillable.
- `unit-overview.html:86` · MUST · current: "which is often the better lesson, because a human being deliberately literal is funnier and more memorable than a chatbot." · rewrite: "That is often the better lesson: a classmate playing a twisty genie or a one-playlist app is funnier than a chatbot, and easier to catch." · reason: truth. Only L1 and L6 are "deliberately literal". L2's app is confident, and L4's partner is an editor.
- `unit-overview.html:91` · MUST · current: "If a student asks something you can't answer, the honest answer — "let's check that" — is the lesson." · rewrite: "If a student asks something you can't answer, say "Let's check that." That honest answer is the lesson." · reason: dashes. COPY allows never two in one sentence.
- `unit-overview.html:92` · COULD · current: "Students remember catching the machine being wrong." · rewrite: "Students remember the story they almost printed." · reason: specific. It ties to L3's warm-up, "The Story That Almost Ran", and the L3 drafts aren't a live machine.
- `unit-overview.html:95` · COULD · current: "A review helps other teachers find this unit, and following the store gets you new Future Skills drops the day they land — money and risk, entrepreneurship, and game design are on the way. Something off? Leave a question on the listing before a review; we fix fast." · rewrite: "A review helps other teachers find this unit. Follow the store to hear when new Future Skills lessons land; money, entrepreneurship, and game design lessons are in the works. Questions or a problem? Ask on the listing before leaving a review — most fixes take a day." · reason: hedge. The future is unhedged, and the house terms block (COPY) says "most fixes take a day", which every guide in the zip prints.

### products/bundle-ai-line/src/product.cover.html

- `product.cover.html:46–47` · MUST · current: chip "AI Literacy · Complete Unit", kicker "The Whole Course", h1 "AI Literacy Unit" · rewrite: chip "AI Literacy · Lessons 1–6", kicker "Six Lessons, One Skill" (title unchanged) · reason: repetition. "AI Literacy" appears twice and "unit" three ways, and "course" is the wrong word for a unit. It also mirrors the children's "AI Literacy · Lesson N of 6" chip.
- `product.cover.html:49` · keep · "A good AI job starts / and ends with a human." · This is the unit's sentence, at 10 words.

### products/bundle-ai-line/product.yaml (description)

- `product.yaml:31` · COULD · current: "Your students already use AI. This unit teaches them to use it well, question what comes back, and see how it works underneath." · rewrite: "Your students already use AI. This unit teaches the two jobs that stay human: a clear start and an honest check." · reason: hook. These are the two lines TPT shows before "read more". The triad is generic, and the through-line is what sets this unit apart.
- `product.yaml:36` · COULD · current: "Students write prompts that can't be twisted." · rewrite: "AI is a literal genie. Students write wishes it can't twist." · reason: analogy. Every arc line drops the lesson's hook, which is the product.
- `product.yaml:37` · COULD · current: "They discover how AI learns and where bias comes from." · rewrite: "Students play a music app with a one-vibe playlist, then find where bias comes from." · reason: analogy.
- `product.yaml:38` · COULD · current: "They fact-check AI output like a newsroom." · rewrite: "They run the fact desk at the school paper. Nothing prints until they clear it." · reason: accuracy.
- `product.yaml:39` · MUST · current: "They teach AI their own voice, then revise their own writing." · rewrite: "They write a taste file, get two notes from a partner playing the AI, then revise their own writing." · reason: doubled ("own … own"). It also contradicts "all six run on paper".
- `product.yaml:40` · COULD · current: "They argue the tradeoffs of automation and future jobs." · rewrite: "They run a recording studio, decide which tasks go to AI, and defend the trade out loud." · reason: concrete.
- `product.yaml:41` · MUST · current: "They run a team of AI helpers in a capstone that reuses every skill." · rewrite: "They write a quest card, play the AI squad in silence, and check the loot. The capstone reuses the prompt and the check." · reason: overclaim. L6 calls back to P.R.O. and to checking. Nothing in it reuses L2's playlist or L5's columns.
- `product.yaml:49` · MUST · current: "Support, Extension, ELL and fully unplugged variants" · rewrite: "Support, Extension, ELL, and fully unplugged variants" · reason: serial comma.
- `product.yaml:54` · MUST · current: "That transfers to every AI tool your students will ever touch." · rewrite: "The two jobs carry over to whatever AI tool your students pick up next." · reason: hedge. The universal claim needs one (ANTI_SLOP 17), and "That" has no clear antecedent.
- `product.yaml:56` · COULD · current: the standards line names 9 codes · rewrite: keep the line, then add: "Individual lessons also cite ISTE 1.1.c, 1.1.d, 1.3.d, and 1.7.c." · reason: consistency. Overview p.2 lists 13 codes, all taken from the children's yaml. The validator caps the array at 12, so the other four go in prose. No code is reworded.
- `product.yaml:58` (insert before the price paragraph) · COULD · new: "THE LESSONS TALK TO EACH OTHER / Lesson 3 names the genie from Lesson 1. Lesson 4's taste file is the R in P.R.O., written down once. Lesson 6 grows P.R.O. into a four-part quest card. Every lesson uses the same who-goes-first rule, so partners never argue about it." · reason: value. This is the only argument for $14 that a $4 buyer can't get, and every clause is checkable in the plans (L3 plan p.2, L4 plan p.1, L6 plan p.1, the ABC rule in all six).
- `product.yaml:60–64` · COULD · current: "(prompting - The Literal Genie)", "(how AI learns + bias)", "(feedback + revision)", "(AI + future jobs)" · rewrite: "(prompting: the literal genie)", "(how AI learns, and bias)", "(feedback and revision)", "(AI and future jobs)" · reason: style. The hyphen is standing in for a dash, and "+" reads as a spec sheet.

### products/bundle-ai-line/UPLOAD_SHEET.md (generated; fix in `scripts/upload_sheet.mjs`)

- `UPLOAD_SHEET.md:31` · COULD · current: "the second sentence must name THIS lesson's activity." · rewrite (bundles): "the first two lines must say six lessons and no student AI accounts." · reason: template. This is lesson copy that leaked into the bundle sheet.
- `UPLOAD_SHEET.md:34–39` · COULD · current: slugs ("ai-prompting-101" …) · rewrite: the six TPT titles from each child's yaml · reason: usable. TPT's bundle picker searches by title, and "ai-agent-intern" means nothing to it.
- `UPLOAD_SHEET.md:41` · COULD · current: "either add that lesson's PDFs + deck to the bundle zip before upload, or list a $4 twin" · rewrite: "The zip already carries Lesson 1's files, so the download is whole either way. If TPT refuses the free child, list a $4 twin for bundling and keep the freebie separate." · reason: stale. The first remedy is already built in (render.mjs:145–148).

## Lens 2 — Buyer, teacher, student

**BLOCKER**

1. **The zip, the preview and the overview PDF are all stale.** They are dated 12 Sep 07:09, and every child's `dist/` was rewritten 23 Sep 00:42–01:29. A hash comparison shows all 30 packed lesson files differ from the children's current files, and `npm run validate -- bundle-ai-line` fails with 30 "packed copy … is stale" errors. The preview's L1 plan page still prints lines the current L1 no longer has ("Lawyers figured this out a long time ago."). The catalog says `status: rendered` while validate is red, which breaks ANTI_SLOP 19 and 21. Fix: re-render the bundle after the last child edit lands, then run validate, judge and preview, and only then commit.

**MAJOR**

2. **The overview doesn't let a teacher plan the week.** At 7:40 she needs to know, per day, what to print, how to group, and what goes on the board. None of that is on either page, and "What's in Every Lesson" is generic. Replace the "Unit at a Glance" table with the table below. Every cell comes from the current plans.

   | Day | Lesson | On the board | Human job | Print per student | Groups | Set up |
   |---|---|---|---|---|---|---|
   | 1 | How to Talk to AI | P.R.O. (Purpose, Requirements, Output) | Both: the start, then the check | Worksheet, 2 pp | Solo, then partners swap | Nothing |
   | 2 | What's in the Playlist? | INPUT → PATTERNS → OUTPUT | The check: who got left out | Worksheet, 2 pp | Pairs (App + Caller); pair meets pair for request #7 | Nothing |
   | 3 | Hallucination Hunters | UNDERLINE → RANK → LATERAL-READ → VERDICT (RUN / FIX / KILL) | The check | Worksheet, 3 pp | Pairs (fact desks) | Board space for the RUN / FIX / KILL tally |
   | 4 | Teach AI Your Taste | YOU draft → notes → YOU revise | The start (taste file) and the finish (revise) | Worksheet, 3 pp | Solo, then partners swap all pages | Nothing |
   | 5 | Robots Do the Boring Work | AUTOMATE · AUGMENT · KEEP HUMAN | The start: deciding what AI takes on | Worksheet, 2 pp | Pairs, then pairs of pairs | Defense Rubric (Teacher Guide p.3) in hand |
   | 6 | Lead Your AI Squad | QUEST CARD → ROLES → CHECK THE LOOT → SHIP IT or RUN IT BACK | Both: lead it, then check it | Worksheet, 3 pp (don't staple p.1) + 1 scrap sheet | Teams of 3 | Plan the teams the day before |

   Under it: "Copy count for the whole unit: 15 worksheet pages per student (450 for a class of 30)." (2+2+3+3+2+3, checked against the PDF page counts.) Keep the Pacing Options table. It's good.

3. **The zip opens as 31 files in one folder, out of lesson order.** Sorted by name, the teacher sees the overview (by luck it sorts first), then five Hallucination Hunters files (L3), then How to Talk to AI (L1), Lead Your AI Squad (L6), Robots (L5), Teach AI (L4) and What's in the Playlist (L2). On day 1 she has to hunt. Fix: use per-lesson folders named `Lesson N - <Short Name>/` with each lesson's five files, and `START HERE - Unit Overview.pdf` at the root. Also tell her on the overview: "Each lesson folder holds five files: Lesson Plan, Worksheet, Worksheet (Fillable), Teacher Guide, Slides."
4. **The preview sells the free lesson.** It has four sample pages: L3 worksheet p.1, L1 plan p.1, L1 guide p.3 and overview p.1. Two of them come from the lesson anyone can get for $0. The only bundle-made page comes last, and the watermark band runs across its through-line callout. Fix (`preview.mjs` bundle branch): cover, then overview p.1 (with the new table), then a generated "What's inside" page with the six child covers labeled Lesson 1–6, then L5 worksheet p.1 and L6 worksheet p.1. Lower the band on the overview page so it misses the table.
5. **The cover art doesn't carry the unit.** The six rising gold slabs read as a bar chart, closer to the finance line than to six AI lessons, and a buyer can't see six lessons in it. Fix: keep the six-books shape and put each child's own icon on the books, in lesson order: lamp, playlist sheet, magnifier, taste file with the §3 flag, the three-bin task board, the squad. It's the one image that says "all six" at thumbnail size. Pair it with the chip and kicker fix in Lens 1.
6. **The case for $14 is only "save 30%."** The listing, the cover and the overview never say the lessons connect, yet they do (L2, L3, L4 and L6 each call back to Lesson 1, and all six share one turn-order rule). Fix: add the listing paragraph from Lens 1 (`product.yaml:58`) and a "Routines that repeat" box on overview p.2, in place of the two generic panels:
   - **Who goes first:** in every pair, the partner whose first name comes first in the alphabet. The plans call them Partner A or Speaker 1; it's the same rule. Same first letter? Use the second letter. Same name? Whoever sits nearer the door.
   - **Odd numbers:** one trio. Each plan says how it rotates.
   - **Every lesson ends solo:** an exit ticket you collect. Keys are in each teacher guide.
   - **Devices:** optional every day, and only on your projected screen. Students never log in.
   - **One class rule all week:** AI is your editor, not your ghostwriter.
7. **No unit-level student artifact.** The listing's resource types say "Unit Plans" and the cover says "Complete Unit", but the unit has no end-of-unit check. Bundle buyers expect one, and it's the one thing a single-lesson buyer can't get. Fix: add a one-page student sheet, "My AI Rules". It gets six rows, one per lesson, each a single Last-Check-style prompt ("Write one P.R.O. prompt for next week", "Name one person a playlist could leave out", "One claim you'd check this week, and where", "One line from your taste file", "One task you'd never hand a robot, and why", "The check an AI's work would most likely fail"). Put a short key and a 3-level scale on overview p.2. Run FK on it like any student page.

**MINOR**

8. **The turn-order label drifts.** The rule is identical in all six, but it's called Partner A (L1–L3), Speaker 1 (L4–L5) and "first name in ABC order" (L6). L2's Gap Report reverses it ("Partner B goes first"), and only L4 prints the tiebreak. A class running the unit daily hears three names for one rule. Fix: the Routines box in #6 names it once. Lessons unchanged.
9. **The exit ticket name drifts.** It's "Exit Ticket — Last Check" in L1 and L3, "Last Check" in L4, and plain "Exit Ticket" in L2, L5 and L6. Fix: add "— Last Check" to the L2, L5 and L6 worksheet headings, or say on the overview that they're the same routine.
10. **Recurring names change roles.** Priya is a basketball-hype requester in L2, the Moon columnist in L3 and the editor in the L4 key. Nia is a kid who studies in L2 and the studio owner in L5. Jaylen is a student writer in L4 and the studio's front desk in L5. Run six days in a row, a 12-year-old will say "wait, Jaylen again?" Names are preserved, so this is flagged only. Leave it, or turn it into an intentional cast line on the overview.
11. **The through-line is hub-and-spoke, not a chain.** Every callback points at Lesson 1. None points at L2, L3, L4 or L5, and L5 has no callback at all. Two cheap bridges would make the arc visible. In L5, after the bridge: "Did Lesson 4? You kept the pen. Today you decide which jobs a robot gets." In L6, at the reveal: "Did Lesson 3? That made-up fact is a hallucination. The fact desk would have caught it." Both are hedged "Did Lesson N?" lines, matching L3's pattern.
12. **The overview never states the device policy the listing leads with.** L1, L4 and L6 all limit AI use to the teacher's projected account. Covered by the Routines box in #6. If that box isn't added, put the line in "Running It With No Devices".
13. **The PREVIEW tag collides with the masthead's "Grades 6–8" chip** on every sample page (`preview.mjs` `.tag` at top/right .3in). Move it to top-left, or drop it to .55in.
14. **UPLOAD_SHEET omits the Preview PDF** from "File(s) to upload". TPT takes it in a separate field, and the checklist line "Preview file shows student-facing pages" has no path. Add "`dist/AI Literacy Unit - Preview.pdf` → TPT Preview field". Other Lens 1 fixes for this file are listed above.
15. **The catalog and yaml titles disagree.** `catalog.yaml` has "… | Middle School 6-8 | Future Skills" and `product.yaml` has "… | Middle School 6-8 | Save 30%". Make the catalog match the yaml.
16. **Wasted space.** Overview p.1 ends about 140px short of the footer and p.2 about 110px short. That's room for the #2 table and the #6 box without a third page.

**DELIGHT (keep or amplify)**

17. **The seven covers read as one line** at thumbnail size: the same navy field, gold title word, chips and bottom-right icon. The bundle cover belongs to the family.
18. **One who-goes-first rule across six lessons, with "pass left" for trios in L1, L3 and L6.** That's rare in a TPT unit. Put it on the listing (Lens 1, `product.yaml:58`).
19. **The through-line is real, not listing copy.** All six teacher guides print "A good AI job runs human → AI → human" and then say which half that lesson trains. The cover sub, "A good AI job starts and ends with a human.", is that sentence at 10 words.
20. **Honest price math.** "$14 buys all six … The five paid lessons cost $20 on their own … Lesson 1 is free on its own if you want to try the unit first." It's true, and it builds trust. Because the zip packs L1's files, "6 lessons" holds whatever TPT's bundle-child rule does.
21. **The block-period pairing line:** "1+2 (how to talk to it / how it thinks), 3+4 (check it / shape it), 5+6 (decide what it does / lead it)". It's the best sentence on the overview and could serve as the listing's one-line arc summary.
22. **Callbacks hedged for standalone buyers.** "If you did the genie lesson … If you didn't, no problem" (L2), "Did Lesson 1?" (L3), "If your class did Lesson 1" (L4), "If your class did the genie lesson" (L6). The bundle can promise connection without breaking any single lesson.

## Counts

- MUST: 14
- COULD: 21
- BLOCKER: 1
- MAJOR: 6
- MINOR: 9
- DELIGHT: 6

---
## Lead rulings (2026-09-23)
**Already done by the lead (dce1dc8):** the bundle is re-rendered, so all 30 stale lesson copies are gone and
validate is green; the zip now opens as `START HERE - AI Literacy Unit - Unit Overview.pdf` plus one folder per
lesson in teaching order; `preview_pages` accepts a child's page as `"<slug>/<page>"`. Do not redo these.

Accept the remaining Top 5, every MUST and the MAJORs, with these decisions. Scope is products/bundle-ai-line
only — never edit a lesson. If the overview must describe a lesson, read that lesson's current files and
describe what is actually there.
- **Overview p.1 becomes "Six days at a glance"**: per day, the board framework, the human job, the print count,
  the grouping, and the setup. Compute every print count from the lessons' actual shipped PDFs (pymupdf page
  counts), and state the per-student copy total from that arithmetic, not from the judge's figure.
- **Fix every row that is untrue about a lesson as it now reads**, starting with the three the judge named, and
  the through-line. Then add a "Routines that repeat" box: the turn-order rule, human → AI → human, the
  cover-first-five-words move, whatever the six lessons genuinely share. Only what is really in the lessons.
- **A page with all six covers** may be added to the overview; it is the page a bundle buyer screenshots.
  If it adds a page, update every count that names the overview's length.
- **Preview**: overview first, then the covers page, then one strong page each from Lessons 5 and 6 (the judge's
  point: the free Lesson 1 is the one lesson a buyer can already see for nothing). Set it with `preview_pages`.
- **Listing**: keep the savings, and add the argument a single-lesson buyer cannot get — the lessons talk to
  each other. One short paragraph, COPY.md rules, concrete (which lesson calls back to which).
- **Cover**: the six lesson icons as one piece of art, and no word repeated between chip, kicker and title
  ("Unit", "AI Literacy"). Iterate at least three times, checking a 200px downscale each time.

**Unit-wide rulings:** turn order by the alphabetical first-name rule; hedge any claim about how AI works;
Lens 2 BLOCKER/MAJOR accepted, MINOR at discretion, DELIGHT kept; nothing that changes a lesson's minutes,
pages, slides, standards or names; listing length is free.
