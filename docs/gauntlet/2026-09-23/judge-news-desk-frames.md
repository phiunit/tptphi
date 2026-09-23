# Judge: news-desk-frames (+ news-desk-frame-free)

Fresh, blind judge, 2026-09-23. What I read: every PNG in both products' `dist/review/` (cover, frames p1–p10, lesson plan p1–2, teacher guide p1–4, worked examples p1–4, slide-01 to slide-12; the free product's cover, frame and guide). I also read the text of the shipped PDFs (pymupdf), the fillable PDF (I filled fields with test values and rasterised pp. 1, 6 and 9), the .pptx notes XML, both Preview PDFs, `src/*.html`, `src/slides.yaml`, both `product.yaml` files, and FACTS.md (only for scope). Gates I ran, read-only: `readability` (frames FK 2.7; free frame 4.3) and `validate` (both "upload-ready"). **UPLOAD_SHEET.md does not exist for either product** (see Lens 2 #6). Both products are `status: draft` because of FACTS.md. I propose no change to any claim tied to a FACTS.md line. Where I touch a worked-example sentence that carries such a claim, I change only the reasoning around it and say so.

## Verdict

Two or three stars as it stands, and it could reach five. The design really is good. The routine is solid ("Story down. Frame up."). The safe-story rules are the best teacher-facing page in the line ("how to pick a story nobody will call you about"). Every frame has three quotable lines and a strong-answer key, and $5 for ten frames plus a deck and a fillable copy is an easy yes. Three problems stand in the way.

First, the core promise is only half true. I ran all ten frames against three invented stories. Only Frames 1, 2 and 8 work on each story's own content. Frame 9 never uses the story at all. Frames 3, 4, 6 and 10 carry wording or fixed menus that break outside the story type they were built for. Frame 4 cannot even represent how a free-to-play game pays its bills, which is the most kid-native case of "who pays for free".

Second, there is visible slop on every student page. The method's step numbers are cut through by the panel border on all 11 frames.

Third, the worked examples, the write-in space and the listing don't agree. The model answers run 1.5 to 3 times longer than the boxes hold. Yet the listing says "every write-in space fits real handwriting". The preview shows no student frame at all, and there is no upload sheet.

Every one of these fixes is a text or CSS change. None needs a redesign.

## Top 5 moves

1. **Make every frame take the story, then say so honestly.** Edits: Frame 9 gets two blank rows "9. From my story, the AI could: ____" and "10. ____", and step 1 becomes "READ each thing an AI helper could do. Rows 9–10: add two things the AI in your story could do. No AI in your story? Imagine one doing a job in it." Frame 3 step 4: "a school" → "the people in charge". Frame 4 gains two rows, "Extras — the app or game is free, but you can pay for skins, upgrades, or bonus stuff." and "Taxes — the government pays, so everyone chips in." Its "Sell it" row becomes "Bigger owner — a bigger company buys it and pays the bills from its other money." Frame 6 adds a line after step 3: "Not a price (like jobs, views, or students)? Skip steps 4–5. Write what the percent means for one person instead." Frame 10's rating line becomes "Cost to replace: 1 = cheap or easy, 3 = expensive or impossible." Frame 1 adds "Story is a video? Write three things it shows or says, then underline those." Listing line 30 becomes: "Your students match any news story to the frame that fits it, then run it through, on paper, in one class period." (Evidence: the promise test below.)
2. **Fix the step numbers that collide with the panel border on all 11 student pages.** In both `frames.html` files, `ol.method { margin: 0 0 0 20px; padding: 0; }` → `ol.method { margin: 0; padding-left: 26px; }`. Re-render and look at frames-p1 again. The digits "1." to "5." are currently struck through by the rounded panel's left edge (crop of frames-p1 at 3×). It shows in both previews and on every page a teacher photocopies.
3. **Make the preview and the listing tell the truth, and sell.** Add `preview_pages: [frames-p1, frames-p7, worked-examples-p2]` to the pack's product.yaml and `preview_pages: [frames-p1, teacher-guide-p1]` to the free one's. Today's preview is cover + lesson plan p1 + teacher guide p4, with no frame at all, because `scripts/preview.mjs` only looks for `worksheet-p1`. The band reads "FULL DOWNLOAD: PLAN · GUIDE · SLIDES" because the band regex only knows `- Worksheet.pdf`. Add `if (has(/ - Frames\.pdf$/)) parts.push(has(/Fillable\)\.pdf$/) ? 'FRAMES + FILLABLE' : 'FRAMES')` in preview.mjs. Run `npm run sheet` for both products. In product.yaml, fix "number-free" (line 32), "never goes out of date" (line 36), "Every write-in space fits real handwriting" (line 39, make it true first) and "sorts what an AI copied" (line 34). Exact rewrites are in Lens 1.
4. **Size the write-in space to the worked examples, cut the examples to fit, and fix the "long frames" list.** Measured at about 45 characters per 690 px handwritten line: Frame 3's "Defend one rule" holds about 135 characters, but its model is 308. The "My 3-rule policy" lines hold about 135 against a 202-character model. A Frame 3 grid cell holds about 16 characters against 33–55. Frame 4's "Why I picked it" holds about 90 against 204. Frame 9's reason cell holds about 18 against 29–59. Every "So what?" holds about 90 against 103–134. Every story line holds about 26 against 67–88. Edits: widen `.blank.wide` to `min-width: 600px` (the slot panel has the room). Give Frame 3's defense five lines and drop its separate policy lines. Instead, step 4 becomes "…then number the grid's rules 1, 2, 3 in the order they'd happen", with one line left for "the fix I made". Raise Frame 3 and Frame 4 grid rows to 72 px (3 ruled lines), trimming the story-slot and method padding on those two pages to pay for it. Trim every worked-example answer to the space (the rewrites are in Lens 1). At 10–13 words a minute, Frame 3's model runs about 230 words (18–23 min) and Frame 4's about 180 (14–18 min). So the plan's line "Frames 3, 6, and 10 carry the most writing" (lesson-plan.html:112, slides.yaml:17) should read "Frames 3 and 4 carry the most writing and Frames 6 and 10 the most math". Frame 4 comes off the bell-ringer list (lesson-plan.html:126).
5. **Give Frame 1 a real second source when no devices are used, and put the funnel line and the terms block on the pages teachers actually print.** Right now a no-device class can only *name* where it would check, then is asked to stamp RUN/FIX/KILL and write "what I found". It found nothing. Add a safe-story rule, both guides: "**No devices? Print both outlets.** Rule 1 already has you find the story twice. Hand out outlet A as the story. Outlet B stays face down until step 3. It is the class's second source." Add the house terms-of-use block, verbatim, to both teacher guides; all six lesson guides carry it and these two don't. At the foot of the free guide, add: "This is Frame 1 of 10. The other nine run the same routine on any story: who wins and who loses, write the rule, who pays for free, the math of a price change, and more. Search "News Literacy Templates" for the pack."

## The promise test: does every frame work on a story nobody wrote it for?

Three stories I made up (invented for this test only; nothing here goes on a page):
- **S1 — School board.** A district's board votes 5–2 to lock phones in pouches from first bell to last, starting in January. The pouches cost the district money. Parents are split.
- **S2 — Game-studio layoff.** The studio behind a free-to-play battle game lays off 150 of its 600 staff. It says AI tools will take over some testing and art cleanup. The game stays free and keeps selling skins.
- **S3 — Viral video.** A video of a delivery robot "escaping" a warehouse gets tens of millions of views in two days. Commenters argue it's AI-made. The account that posted it sells robot toy kits. (Allowed under safe-story rule 5: no kids in it.)

Works = the method runs on the story's own content. Fallback = the frame's "use one you already know" line kicks in, so the page still works but the story is dropped. Breaks = a printed instruction or a fixed menu can't be applied, or gives nonsense.

| Frame | S1 school board | S2 studio layoff | S3 viral video | What breaks, exactly |
|---|---|---|---|---|
| 1 Fact Desk | Works | Works | **Breaks at step 1** | "UNDERLINE every claim" and "Claim (copy it here)" assume printed text. The guide says "Print the text, not the page", which a video can't be. Separately, with no devices, all three stories reach a verdict with no second source in hand (Top move 5). |
| 2 The Trade | Works | Works | Stretch | "NAME the change in the story." A viral video isn't a change. Kids write the claim ("a robot escaped"), which belongs in Frame 1. |
| 3 Write the Rule | Works | **Breaks at step 4** | **Breaks at step 4** | "Could a school run all three at once?" For S2 and S3 the people making the rule are a studio, lawmakers or a platform. Everything else on the page works. |
| 4 Who Pays for Free? | **Breaks** | **Breaks** | Stretch | Only five ways to pay. A public school runs on taxes: no row. A free-to-play game runs on skins and extras: no row, and that is the story type the frame exists for. "Sell it" says who owns the thing, not who pays for it. |
| 5 Unit Rate Receipt | Fallback | Fallback | Fallback | Works only when the story names tiered prices. The fallback, "the plans for one app you already use", needs three prices and amounts from memory. With no devices, most kids can't supply them. |
| 6 Percent Change Card | Fallback | **Breaks at steps 4–5** | Fallback | S2 has a great percent (150 of 600 = 25% cut). Then "HOURS OF WORK = new price ÷ pay per hour" and "split the new price over eight weeks" have no new price to use. |
| 7 Copy, Style, or Person? | Fallback | Stretch | Works | Rows 1–8 are fixed and run without the story. Row 9 is the only story hook, and S1 has nothing copied. That is fine: the story table routes S1 elsewhere. |
| 8 Source Check | Works | Works | Works (best fit) | Runs on everything. The gloss "Fact = the source measured or counted it" trips on S2: "the studio will use AI for testing" is a checkable fact that is neither measured nor counted. |
| 9 Permission Slip | **Breaks** | **Breaks** | **Breaks** | The method never uses the story. The eight rows are fixed, and no step or row asks what the AI *in the story* can do. It is also true of worked example 4: its rows about messages, cards and passwords don't come from the Photos story. The "Why this frame" note there ("The story supplies the helper") describes a step the frame doesn't have. |
| 10 Risk Grid | Works | **Breaks** | Fallback | S1: phones in pouches fit the menu well. S2: the thing at risk is a job, and "a tracker", "a lock" and "a backup copy" can't protect one. The menu only fits objects. "Cost to replace" can't be rated for a game save or a photo (costs nothing, can't be bought back). |

**What this shows.** The pack keeps its promise at the *pack* level: the lesson plan's 10-row table routes each story to a frame that fits. It doesn't keep it at the *frame* level, which is how the listing puts it: "pick one of 10 one-page frames and run any news story through it". Only Frames 1, 2 and 8 take all three stories. Frame 9 takes none. The game-studio layoff, the most kid-relevant of the three, has **no row in the story-to-frame table** (layoffs are neither "a new tool" nor "a theft, hack, outage, or loss"). Add table row: "People lose jobs, or a service shuts down → The Trade (who loses?) or Source Check (read the company's own statement)". Top move 1 closes every "Breaks" cell above. The "Fallback" cells are honest as long as the listing says "the frame that fits".

## Lens 1 — Writing

### products/news-desk-frames/src/frames.html (student pages)

1. `frames.html:103` · "a textbook, an encyclopedia, a museum, or government site, a different outlet that did not copy the first." · "a textbook, an encyclopedia, a museum or government site, or a different outlet that didn't copy the first." · grammar · **MUST**. The same broken list is at `slides.yaml:26` (notes) and `news-desk-frame-free/src/frames.html:103`; fix all three together.
2. `frames.html:88` · "**RANK** them." · Leave as is for now. It's a sort (C or S), not a ranking, and a kid will ask "rank how?". The word also sits in the slide, both guides and the standards map ("underline and rank claims"), so change all surfaces together or none. If changing: "**MARK** them." · clarity · COULD
3. `frames.html:109` · "My evidence — what I found, and does the story's point still stand?" · "My evidence — what I found (or what I'd need to find). Does the story's main point still stand?" · honesty (no-device kids found nothing) · **MUST**
4. `frames.html:187` · "Make each one different: strict, loose, in the middle, or creative." · "Make each one different. Pick three: strict, loose, in the middle, creative." · clarity (four shapes, three rules) · COULD
5. `frames.html:189` · "**MAKE IT A POLICY** — rules that go together. Could a school run all three at once? Fix the ones that collide, then number them 1, 2, 3." · "**MAKE IT A POLICY.** Could the people in charge use all three rules at once? Fix any two that clash. Then number them in the order they'd happen." · universality ("a school" breaks S2/S3), vocabulary ("collide"), vague ("number them" by what?) · **MUST**. Multi-surface: `slides.yaml:43` and teacher-guide.html:102 ("Could a school run all three of yours at once?") must change with it.
6. `frames.html:208` · "We know this works because ______." · "The story backs this up because ______." · logic. A rule the student just invented hasn't been shown to work, so the starter invites a made-up "proof". · **MUST**. Multi-surface: slides.yaml:46 notes carry the same starter.
7. `frames.html:236` · "No free thing in it? Use a free app or site you already use. Who uses it? What does it cost to keep running?" · "No free thing in it? Use a free app, game, or site you already use. Who uses it? What does it cost to keep running?" · culture (free-to-play games are the kid-world case) · COULD
8. `frames.html:252` · "**Sell it** — a bigger company buys the whole thing." · "**Bigger owner** — a bigger company buys it and pays the bills from its other money." · logic. Selling changes the owner, not the payer. As written, the row lets a student answer "who pays?" without naming a payer. · **MUST**. Add the two rows in Top move 1.
9. `frames.html:285` · "**THREE OPTIONS** from the story, or, if the story names fewer, the plans for one app you already use. Write the price and how much you get for each." · "**THREE OPTIONS** from the story. Story has fewer? Use three plans or bundles from an app or game you know. Write the price and how much you get for each." · readability (four commas in one clause) · **MUST**
10. `frames.html:286` · "one hour, one month, one gigabyte, one slice." · "one hour, one month, one gigabyte, one in-game coin." · culture. Coin bundles are where 12-year-olds meet unit rates, so the reference carries the concept. · COULD
11. `frames.html:336` · "Round it." · "Round to the nearest whole percent." · ambiguity (the guide's key wants it "rounded") · **MUST**. Slide at slides.yaml:71 says the same thing.
12. `frames.html:346` · (no line for the percent division) · Add under the card: "**Show it:** ____ ÷ ____ × 100 = ____ %". · assessment. The guide's standards map assesses 7.RP.A.3 on "Frame 6's percent cell, 'Show it' line", but the only "Show it" line is for hours of work. · **MUST**
13. `frames.html:394` · "**SORT** each card." · "**SORT** each row." · accuracy (no cards on the page) · **MUST**. Also slides.yaml:80 ("SORT each card") and teacher-guide.html:126 ("sort eight cards").
14. `frames.html:395` · "**DRAW YOUR LINE.** Which of these should be allowed? Where does it cross?" · "**DRAW YOUR LINE.** Which kinds of copying are OK? Where does copying cross the line?" · vague ("it") · **MUST**. Also slides.yaml:82.
15. `frames.html:402` · "Draws comics with the same big eyes and bold lines as a famous series." · "Draws comics in the same anime style as a famous series: big eyes, bold lines." · culture. Naming the style is allowed ("anime-style" is an archetype) and makes the row land. · COULD
16. `frames.html:453` · header "Opinion it implies" (method line 443 says "an OPINION it wants you to hold"; gloss line 460 says "wants you to think it") · header "Opinion it pushes" · consistency and vocabulary ("implies" is academic): three phrasings on one page · **MUST**
17. `frames.html:460` · "**Fact** = the source measured or counted it. **Opinion** = the source wants you to think it, without proof." · "**Fact** = you could check it and prove it true or false. **Opinion** = what the source wants you to believe. Nobody can prove it." · accuracy. The definition is too narrow: "the board voted to ban phones" is a fact nobody measured. · **MUST**. Multi-surface: TG:130 and slides.yaml:94 script "A fact is measured. An opinion is wanted." → "A fact can be checked. An opinion is wanted."
18. `frames.html:490` · "**READ** each thing an AI helper could do for you." · "**READ** each thing an AI helper could do for you. Rows 9 and 10: add two things the AI in your story could do." (add the rows) · universality · **MUST**
19. `frames.html:539` · "Cost to replace: 1 = cheap, 3 = expensive." · "Cost to replace: 1 = cheap or easy, 3 = expensive or impossible." · clarity (game saves and photos, which step 1 itself suggests) · **MUST**
20. `frames.html:541` · "**SPEND 10 COINS.** Buy two protections from the menu. Some pairs cost more than 10, so you can't have both. Say why those two." · "**SPEND 10 COINS.** Buy two protections for your top-scoring things. Some pairs cost more than 10. Say why those two." · clarity (protect *what*?) · **MUST**
21. `frames.html:554` · "you have 10 coins. Buy two. Not every pair fits." · "you have 10 coins. Buy two." · repetition (step 4 just said it) · COULD
22. `frames.html:562` · "Insurance: pay a little now, get paid back if it's lost." · "Insurance: pay now, get money back if it's lost or stolen." · logic ("a little" on the most expensive item, 9 of 10 coins) · COULD

### products/news-desk-frames/src/lesson-plan.html

23. `lesson-plan.html:59` · "A 45-minute routine that turns any news story into a thinking lesson. Pick a story, pick a frame, run the method. 10 frames, one skeleton, no prep, fully on paper. Bell-ringer version on page 2." · "One 45-minute routine for any news story. Pick the story, pick the frame, run the method. All ten frames share one layout, so students learn it once. On paper, no prep. Short version on p.2." · flat ("thinking lesson"), jargon ("skeleton"), house style (p.2) · COULD
24. `lesson-plan.html:95` · (no what-if for a mismatch) · Add to the what-if at line 96: "*If their questions point to a different frame:* 'Good. That's a Frame 1 question. Hold it for the Extension. Today we run Frame 2.'" · gap. The script "name the frame" fakes an emergent choice of a frame that is already printed. · **MUST**
25. `lesson-plan.html:106` · "Then pairs retell the story to each other in one sentence each." · "Then pairs retell it in one sentence each. The partner whose first name comes first in the alphabet goes first." · ANTI_SLOP 14 (no turn order) · **MUST**
26. `lesson-plan.html:112` · "Frames 3, 6, and 10 carry the most writing: on those three, run solo 16 and pair-check 4 instead of 12 and 8." · "Frames 3 and 4 carry the most writing, and Frames 6 and 10 the most math. On those four, run solo 16 and pair-check 4." · accuracy (measured against the exemplars at 10–13 wpm) · **MUST**. Also slides.yaml:17.
27. `lesson-plan.html:114` + `:115` · "Swap frames with your partner. Read their evidence, not their answer. Ask them one question they can't dodge." / "partners swap frames. Each reads the other's evidence and asks one question. Then frames go back and students fix one thing." · "Swap frames. Read their evidence, not their answer. Alphabet-first partner asks first; then switch. At my signal, frames go back and you fix one thing." · ANTI_SLOP 14 (who speaks first, when paper moves) · **MUST**. The transition line is on slides.yaml:17 too.
28. `lesson-plan.html:116` · "*If an odd number:* one group of three; the third reads both frames." · "*If an odd number:* one group of three passes frames one seat to the left, so each person reads one frame and asks one question." · broken rotation. Traced by hand: A and B swap, C reads both, and nobody reads C's frame. · **MUST**
29. `lesson-plan.html:126` · "For a bell-ringer, run Frames 1, 2, 4, 7, 8, or 9." · "For the short version, run Frames 1, 2, 7, 8, or 9." · timing (Frame 4's model is about 180 words, 14–18 min, against 15) · **MUST**. Also slides.yaml:17.
30. `lesson-plan.html:130` · "Start with Frames 1, 7, or 9 (fewest steps)." · "Start with Frames 7 or 9 (mostly check boxes)." · accuracy (Frame 1 has four steps and the most copying) · COULD
31. `lesson-plan.html:131` · "Run a second frame on the same story (if it fits two, this is the other one)." · "Run a second frame from the table that also fits the story." · unclear · **MUST**
32. `lesson-plan.html:132` · "Method words (claim, source, verdict, percent) are defined in the steps on each frame. Draft the 'So what?' in the strongest language first, then translate." · "Pre-teach four words before Read: claim, source, verdict, percent. Let students draft the 'So what?' in the language they think in best, then write it in English." · accuracy ("verdict" and "percent" are not defined on the frames) and unclear ("strongest language") · **MUST**
33. `lesson-plan.html:122` · "Who named a source, followed a step, AND said it plainly?" vs teacher-guide.html:162 "Who named a source, followed a step and said it plainly?" · Make both read "Who named a source, followed a step, and said it plainly?" · one teacher line printed two ways · **MUST**

### products/news-desk-frames/src/teacher-guide.html

34. `teacher-guide.html:67` · "10 frames give students ten ways to take one apart: check it, weigh it, write the rule for it, follow the money, do the math, sort what got copied, ask who paid for the study, decide what an AI helper may touch, rate what would hurt to lose." · "Ten frames give students ten ways to take one apart. Check it. Weigh it. Write the rule for it. Follow the money. Do the math. Then sort what got copied, ask who paid, decide what an AI may touch, and rate what would hurt to lose." · a 45-word run-on, and "10"/"ten" mixed in one sentence · **MUST**
35. `teacher-guide.html:79` · "One page or less." · "Keep the story to one page." · fragment · **MUST**
36. `teacher-guide.html:79` · "The frame comes first." · "Pick the frame before you print." · ambiguity (it reads as if the frame comes before the story) · COULD
37. `teacher-guide.html:80` · (no video case) · Add: "Story is a video? Write a three-sentence description of what it shows and says, and print that." · gap (story table row 1 invites "a post going viral") · **MUST**
38. `teacher-guide.html:94` · "a name, a date, a number, a place or a quote in it." · "a name, a date, a number, a place, or a quote in it." · house serial comma; the deck notes and the free guide already have the comma · **MUST**
39. `teacher-guide.html:122` · "Money is time you already spent." · "Every dollar is time somebody worked." · a twelve-year-old won't parse it · COULD (also slides.yaml:75)
40. `teacher-guide.html:126` · "sort eight cards plus the copying in their own story" · "sort eight rows plus the copying in their own story" · accuracy · **MUST**
41. `teacher-guide.html:126` · "The big-eyes comic is a style. The traced drawing is a work. Same pencil, different rule." · "Tracing a drawing copies a work. Drawing *like* someone copies a style. Same pencil, different rule." · Said while circulating, the original reads out the key to rows 1 and 2. · COULD
42. `teacher-guide.html:134` · "Allow is for things you can undo. Deny is for things you can't." · "Allow is for things you can undo. Can't undo it? Then it's Check first or Deny." · logic. The line contradicts its own key two lines later ("deleting, paying… land on Check first **or** Deny") and gives Check first no rule. · **MUST**. Also slides.yaml:103.
43. `teacher-guide.html:138` · "Cheap to replace but a disaster to lose still scores high. Rate both." · "Cheap to buy isn't the same as easy to replace. A game save costs nothing, and you can't buy it back. Rate both." · math error: 1 × 3 = 3 out of 9, the same score as expensive-but-annoying, so it does not "score high" · **MUST**. Also slides.yaml:112.
44. `teacher-guide.html:163` · "The stall is nearly always the unit, or dividing by the new price instead of the old." · "In Frame 5 the stall is nearly always the unit. In Frame 6 it's dividing by the new price instead of the old." · precision (Frame 5 has no old price) · COULD
45. `teacher-guide.html:164` · "Stop, name rule 4 from page 1, swap the story." · "Stop, name rule 4 from p.1, and swap in your backup story. Keep one in the folder." · gap and house style · COULD
46. `teacher-guide.html:172` · "Taught: Frame 2 (who wins, who loses, what could go wrong)" · "Taught: Frame 2 when the story is about a technology (story table row 2)" · accuracy (2-IC-20 is about computing technologies, and the Trade runs on any change) · COULD

### products/news-desk-frames/src/worked-examples.html (teacher-facing; FACTS-tied claims untouched)

47. `worked-examples.html:62`, `:97`, `:136`, `:172` · "Naming, in the story and in the filled frame alike: organizations as reported, no private individuals." (four times) · "Organizations named as reported; no private individuals." · clunky and repeated · COULD
48. `worked-examples.html:82` · policy, 202 characters · "1. Pass an AI lesson first. 2. Then use AI only on tasks a teacher picks, in class. 3. No other AI use through grade 8." · fit (the frame holds about 135) · **MUST**
49. `worked-examples.html:83` · "…We know this works because the story's own high school plan pairs the pilots with AI lessons every year: the tool and the training arrive together." · "…The story backs this up: its high school plan pairs the pilots with AI lessons every year." · logic ("we know this works" from an announced plan) and fit. The FACTS-tied claim (pilots plus yearly AI lessons) is kept word for word; only the lead-in changes, to match finding 6. · **MUST**
50. `worked-examples.html:84` · "I'm in this grade band. Whether I learn AI at school or only on my own depends on a rule like this one." · "I'm in middle school. This rule decides if I learn AI with a teacher or alone on my phone." · voice (no kid says "grade band") · **MUST**
51. `worked-examples.html:149` · "It costs servers, and the person or team who keeps it running." · "Running it takes servers and someone's time to keep it up." · grammar · **MUST**
52. `worked-examples.html:152` · "No ads. Nobody owns the site but the people who use it." · "No ads, and the site answers to the people who use it." · wrong (donors don't own a site) · **MUST**
53. `worked-examples.html:156` · "A whole team instead of one person. No burnout." · "A whole team instead of one tired person." · overclaim · COULD
54. `worked-examples.html:158` · "I'd pick Sell it because … players can hold the new owner to it." · Keep the sentence (FACTS-tied promise) and add: "Now the new owner pays, so the next question is how it makes its money." · logic. As written, the model answers "who pays?" without naming a payer. Pair it with finding 8. · **MUST**
55. `worked-examples.html:178` · "…and why this story fits a permission slip." · cut the clause · If the story is read aloud to students, the clause gives away the frame. · COULD
56. `worked-examples.html:189` + `:196` · Row 3 marked "Deny", then "Rows 1 and 3 are fine alone" · Row 3 → "Check first · say something in my name I'd never say, so I read it before it sends." · self-contradiction in the model answer · **MUST**
57. `worked-examples.html:123` · "I make beats and post covers. Knowing which kind of copying I'm doing is the difference between a style I learned and a person I took." · keep (DELIGHT: the best student line in the pack). If there's room, the Extension question is "A cover copies which one?" · COULD

### products/news-desk-frames/src/slides.yaml

58. `slides.yaml:15` · "…fix one thing. So what? last." · "…fix one thing. Write the So what? last." · fragment · COULD
59. `slides.yaml:43` · "MAKE IT A POLICY: could a school run all three at once? Number them 1, 2, 3." · Match the page's step 4 after finding 5, including the collision fix: the slide drops "Fix the ones that collide", which the rubric's "method followed" row scores. · **MUST**
60. `slides.yaml:50`–`52`, `:79`–`81` · Frames 4 and 7 split one page step into two bullets, so slide bullet 3 is not page step 3 · Merge back to the page's step count, and number the bullets (use the `steps` type or prefix "1." to "5."). · consistency (teachers say "step 3") · COULD
61. `slides.yaml:112` · "'10 coins, two protections…'" vs TG:138 "Ten coins, two protections…" · same spelling on both · consistency · COULD

### products/news-desk-frames/product.yaml (listing)

62. `product.yaml:30` · "Your students pick one of 10 one-page frames and run any news story through it, on paper, in one class period." · "Your students match any news story to the frame that fits it and run it through, on paper, in one class period." · truth (see the promise test) · **MUST**
63. `product.yaml:32` · "The frames are undated and number-free." · "The frames carry no dates and no statistics." · truth (two frames are all numbers) · **MUST**
64. `product.yaml:32` · "a 3-rule policy" · "a three-rule policy" · house numerals rule · COULD
65. `product.yaml:34` · "Copy, Style, or Person? sorts what an AI copied." · "Copy, Style, or Person? sorts what got copied: a work, a style, or a person." · accuracy (seven of eight rows involve no AI) · **MUST**
66. `product.yaml:34` · "…with a budget of 10 coins. Not every pair fits." · "…with a budget of 10 coins, and not every pair fits." · the fragment dangles · COULD
67. `product.yaml:36` · "They refresh with product updates, so the pack never goes out of date." · "We refresh them with product updates. The frames themselves never need one." · hedge the future (COPY rule) · **MUST**
68. `product.yaml:39` · "Every write-in space fits real handwriting" · Keep only after Top move 4 lands. Until then: "Every frame ends with a two-line 'So what?'" · truth · **MUST**
69. `product.yaml:46` · "Works with any story you bring and any AI tool or none." · "Works with the stories you bring." · the frames never use an AI tool · COULD
70. `product.yaml:50` · "It stands alone." · "The pack stands alone." · ambiguity (Frame 1 or the pack?) · COULD

### products/news-desk-frame-free (src and listing)

71. `news-desk-frame-free/src/frames.html:75` · kicker "Fact Desk · Is it true?" above h1 "Fact Desk" · "Frame 1 of 10 · Is it true?" · says the name twice, and misses the funnel on the one page every free user prints · **MUST**
72. `news-desk-frame-free/src/frames.html:103` · same broken second-source list as finding 1 · same fix · **MUST**
73. `news-desk-frame-free/product.yaml:32` · "the script with three quotable lines, a strong-answer example and the rubric." · "…a strong-answer example, and the rubric." · house serial comma · **MUST**
74. `news-desk-frame-free/product.yaml:42` · "unit rate, percent change and more" / "worked examples and a slide deck" · add the serial commas · **MUST**
75. `news-desk-frame-free/product.yaml:30` · "It is undated and number-free, so it works with any story you bring" · "It carries no dates and no statistics, so it works with any story you bring" · match the pack's fix · COULD
76. `news-desk-frame-free/src/teacher-guide.html:41` (rubric) · a one-row, 3-point rubric while the pack's is four rows and 12 points · Use the pack's four rows verbatim. The page has room once the routine panel is tightened. · consistency: a teacher who upgrades meets a new scale · COULD

## Lens 2 — Buyer, teacher, student

### (a) The 7th-grade teacher at 7:40

1. **MAJOR — "Zero prep" isn't true until she has a story.** At 7:40 she has to find a story, confirm it in two outlets (rule 1), run the two-minute fit check, and print 30 copies. That's 10–15 minutes before the frames are any use, and the pack ships no student-ready story. The worked examples say "Show one, then hand students a fresh story". Fix: put the lesson plan's At a Glance "Prep" cell right: "Pick a story (10 min; rules on Teacher Guide p.1) and print it with the frame." Better, for the next refresh: add a one-page student "Story card" per worked example. The four "The Story" panels are already written at student level and FACTS-bound, so no new claims. Then the first News Desk Day really is zero prep.
2. **MAJOR — No second source in a no-device room (Frame 1, and the free frame).** "Second source: where I'd check it", then "Verdict… Give your evidence" and "what I found". A careful teacher sees that the unplugged verdict is a guess. Fix: Top move 5, "Print both outlets."
3. **MAJOR — Terms-of-use block missing from both teacher guides.** COPY.md makes it verbatim house copy, and all six lesson guides carry it. It is also the line that turns a one-star review into a listing question ("Ask on the listing before leaving a review — most fixes take a day"). Add it at the foot of teacher-guide p.4 and the free guide.
4. **MAJOR — The rubric doesn't score every frame, though the listing says "One rubric scores any frame."** The "Claim" row wants "one clear verdict, call, or pick". Frame 6 has none, and Frames 5 and 7 have several. Fix: give Frame 6 a call under the card: "**My call:** ☐ BIG DEAL ☐ NOTICEABLE ☐ NO BIG DEAL — for someone my age." Then add a rubric footnote: "Frames 5 and 7: the claim is the match or the line; score the clearest one."
5. **MINOR — Share-out tally only fits some frames.** "Tally on the board (RUN / FIX / KILL, WORTH IT / NOT, whatever the frame decides)" does nothing for Frames 5, 7 and 8. Add: "Frames 5, 7, 8: tally the most-picked option, line, or trust call."
6. **MINOR — The deck lacks the two slides a teacher needs most:** a "Today's headline" slide (big, blank title to type into, for the Open block, "headline only"), and a closing "So what?" slide that carries the rubric's "Said plainly" row. Both are cheap `list` slides in slides.yaml. Slides 3–12 are also text-only, and the bottom 40% is empty. The cover's four frame glyphs (check, scale, percent, shield) would carry Frames 1, 2, 6 and 10 there.
7. **MINOR — "Bell-ringer" is 25 minutes.** Buyers searching the tag "bell ringers" expect 5–10 minutes, and that mismatch shows up in TPT reviews. Rename it "Short version — 25 min" and add a true 10-minute "Headline Warm-Up". Project a headline, and students answer only the frame's kicker question (e.g., Frame 2's win/lose boxes, or Frame 8's "who made it / who paid") plus the "So what?". That earns the tag.
8. **MINOR — The math frames have no worked model.** The no-figures rule (lead decision) means no dated example can show Frames 5 or 6. Add one clearly labeled made-up practice set to TG p.2–3: "Practice prices, made up: a music app, $0 with ads, $6 for 1 month, $60 for 12 months." It is not news, so no FACTS line is needed, and it lets a teacher model Frame 5 in two minutes.
9. **DELIGHT — Keep and amplify:** the safe-story rules ("a story nobody will call you about", "Officeholders as officeholders", "If nothing changed, it's gossip, not news"). Also the 10-row story-to-frame table, "Play the editor, not the answer key", "Frames don't care if it's boring. They care if it's true, fair, or expensive", "Story down. Frame up.", and "Score the evidence, not the answer: two students can disagree and both score 12." Frame 2's third box, "ONLY WITH A RULE — fix the risk first", is a natural handoff to Frame 3. Say so in the Extension: "Checked ONLY WITH A RULE? Your next frame is Frame 3."

### (b) The 12-year-old with the frame

10. **BLOCKER — The step numbers are cut through by the panel border on every frame** (frames-p1 to p10, the free frame-p1, and both previews). It is the first thing a kid's eye lands on in the method box. Fix: Top move 2.
11. **MAJOR — Write-in space is a third to half of what the model answers use** (numbers in Top move 4). A kid copying a claim into a Frame 3 cell or a Frame 9 reason cell runs out of room mid-word. The worked examples show teachers a "strong" answer that won't fit on the page.
12. **MAJOR — Frame 9 never asks about the story.** A kid who wrote "Google Photos AI" in the story slot then answers eight rows about messages, cards and passwords, and never touches the Photos agent. Fix: finding 18 plus two blank rows.
13. **MAJOR — Frame 4 misses the gaming case.** Free-to-play games paying through skins is the "who pays for free" every kid already knows, and there's no row for it. That's the brand's "culture carries the concept" rule left on the table. Fix: add the "Extras" row (Top move 1).
14. **MINOR — Confusing words and moments on first read:** "RANK" (it's a sort); "cards" (Frame 7 has rows); "Opinion it implies"; "collide" (Frame 3); "Cost to replace" for a game save (Frame 10); "Could a school run all three" when the story is about a game studio. Each has its fix in Lens 1.
15. **MINOR — Same magnifier on all ten frames.** It's photocopy-safe, but it isn't tied to any frame's idea, and kids flipping the pack can't tell frames apart by eye. The cover already has check, scale, percent and shield glyphs. Put them in the header of Frames 1, 2, 6 and 10, and add a receipt (5), a coin (4), a copy stamp (7), a speech bubble (8) and a key (9) in the same line-art style.
16. **MINOR — The news-desk analogy lives only in the teacher pages.** Kids never read that *they* are the editor. Add one line under each frame's title row (or once on slide 2): "You're on the news desk. Nothing runs until you check it." RUN/FIX/KILL then reads as the editor's call it is.
17. **DELIGHT — What kids will like:** Frame 7's sort (the beat that samples ten seconds of a hit, the big-eyes comic, the deepfake athlete), Frame 9's "risky combo" puzzle, and Frame 10's 10-coin budget where "not every pair fits". That last one is a real game-economy trade-off, and the math in the key is right (3 + 7 = 10; 7 + 9 = 16 can't be bought).

### (c) The buyer on the listing page

18. **BLOCKER — The preview shows no student frame.** The pack preview is cover + lesson plan p1 + teacher guide p4, and the free one is cover + teacher guide. A buyer paying for "10 one-page frames" sees none. The band says "FULL DOWNLOAD: PLAN · GUIDE · SLIDES", which leaves out the frames, the fillable copy and the worked examples. Fix: Top move 3 (`preview_pages`, plus the preview.mjs band regex).
19. **MAJOR — No UPLOAD_SHEET.md for either product.** The gauntlet's listing bar needs it identical to the yaml. Run `npm run sheet -- news-desk-frames` and `npm run sheet -- news-desk-frame-free`.
20. **MAJOR — Four listing sentences aren't true yet:** "run any news story through it", "number-free", "every write-in space fits real handwriting", and "sorts what an AI copied". Also "never goes out of date" makes a promise nobody can keep. Rewrites: findings 62, 63, 65, 67 and 68.
21. **MINOR — The cover says "any story" twice** (kicker "WORKS ON ANY STORY, ANY WEEK" and sub "Any story. Ten ways to think it through."), against the cover bar's "nothing said twice". It also lacks a minutes chip. Fix: kicker → "10 frames · 45 minutes · any week"; keep the sub; the chips can stay.
22. **MINOR — Slide masthead reads "FUTURE SKILLS · AI LITERACY"; every page reads "Future Skills · News Desk".** Pick one. Pages win, because the chip on the cover says "AI Literacy · Media Literacy".
23. **MINOR — Free files are named in the plural.** "Fact Desk - Frames.pdf" and the footer "Fact Desk — Frames" for a single page. Use "Fact Desk - Frame.pdf" / "Fact Desk — Frame", or accept it as the pack's family name and say so in the includes line.
24. **MAJOR — The free product doesn't point to the pack from anything the teacher prints.** The funnel lives only in the listing text, but the frame and the guide are what stay on her desk. Fix: finding 71 (kicker "Frame 1 of 10") plus the free-guide footer line in Top move 5.
25. **DELIGHT — Price and package.** At $5 you get ten frames, a two-page plan, a four-page guide with a script per frame, four worked examples, a 12-slide deck, and a fillable PDF with a field on every write-in and none on the printed sentence starters. I spot-filled pp. 1, 6 and 9 and the fields sit on the boxes. The worked examples are the moat: they are dated, sourced to the outlets, avoid naming people, and use "alleged" for the lawsuit. The listing should lead with "a script for every frame" and "four worked examples". A buyer weighing the free Canva-style organizers on TPT has no equivalent for either.

## Counts

- **MUST:** 48 (frames 15 · lesson plan 9 · teacher guide 7 · worked examples 7 · slides 1 · listing 5 · free product 4)
- **COULD:** 28
- **BLOCKER:** 2 (Lens 2 #10 step-number collision; #18 preview shows no frame)
- **MAJOR:** 10 (Lens 2 #1, 2, 3, 4, 11, 12, 13, 19, 20, 24; the promise-test breaks are carried in Top move 1 and Lens 1 findings 5, 8, 18 and 62)
- **MINOR:** 10 (Lens 2 #5, 6, 7, 8, 14, 15, 16, 21, 22, 23)
- **DELIGHT:** 3 (Lens 2 #9, 17, 25)

---
## Lead rulings (2026-09-23)
Accept the Top 5, both BLOCKERs and every MUST, with these decisions. Both products stay `status: draft`;
no claim tied to a FACTS.md line changes meaning, and the ledger must still match statement for statement.
- **Engineer the "any story" promise, frame by frame.** The judge tested three invented stories and found
  Frame 9 breaks on all three and Frames 3, 4, 6 and 10 break on at least one. Build each fix it proposes:
  story rows on Frame 9; "the people in charge" on Frame 3; Extras and Taxes rows on Frame 4; a "not a price?"
  path on Frame 6; a clearer cost-to-replace scale on Frame 10; a video line on Frame 1. Add a jobs/layoffs
  row to the story-to-frame table. Re-test your changed frames against the judge's three stories yourself.
- **Say what is true.** The pack handles any story; not every frame fits every story. The listing says so:
  "match any story to the frame that fits it", not "every frame works on any story".
- **Step numbers cut by the panel border:** already fixed by the lead (the print pass's new border ran
  through them). Do not re-fix; check that your edits keep the numbers clear.
- **"Every write-in space fits real handwriting"** is only allowed in the listing if it is true: size the
  write-in space to the worked examples and trim the examples to proficient length. If some frame still
  cannot hold its model answer, remove the claim rather than keep an untrue sentence.
- **The long-frames list** is whatever the actual writing load says after your changes (the judge measured 3
  and 4; an earlier pass said 3, 6 and 10). Measure it, then use one list on every surface. Frame 4 comes off
  the bell-ringer list.
- **Unplugged second source for Frame 1: no printing.** "No prep" is a promise on every cover in this store,
  and printing two articles is prep. Instead the teacher reads the story aloud, then reads the second outlet's
  opening lines aloud as the second source. Write that into the plan and guide.
- The canonical terms-of-use block from docs/COPY.md goes in both teacher guides; the free guide ends with one
  line pointing at the pack, using a phrase that is actually in the pack's title.
- **Preview:** set `preview_pages` in both product.yaml files to the frame and guide pages that sell each
  product. The lead is fixing the preview band text so it names Frames instead of a worksheet.
- Run `npm run sheet` for both products; neither has an UPLOAD_SHEET.md yet.

**Unit-wide rulings:** turn order by the alphabetical first-name rule where two students take turns; hedge any
claim about how AI works; Lens 2 BLOCKER/MAJOR accepted, MINOR at discretion, DELIGHT kept; nothing that
changes minutes, page counts, slide counts, standards or names; listing length is free.
