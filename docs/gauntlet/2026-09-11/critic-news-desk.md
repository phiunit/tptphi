# Gauntlet — first critic pass: News Desk pack + free frame (2026-09-11)

Fresh critic, blind. 30 review PNGs, 8 PDFs, 2 zips, the .pptx, both fillables filled and rasterized. Judged on the pack's own promise (an undated engine that runs on any story), not on the six-lesson bar.

## frames (print + fillable) — REJECT
Per-frame: 1 Fact Desk pass · 2 The Trade pass · 3 Write the Rule pass with caveat (heaviest load) · 4 Who Pays for Free? dead without a free product · 5 Unit Rate Receipt FAILS without three priced options · 6 Percent Change Card FAILS without an old and a new price · 7 Copy/Style/Person? barely uses the story · 8 Source Check needs a payer · 9 Permission Slip pass · 10 Risk Grid pass (its fallback clause is the model the others lack).
1. BLOCKER — `:492` an underscore run inside the printed method panel becomes a typeable field (widget p9_217). Needs `data-nofill`.
2. MAJOR — `:412` Frame 7's "Where I draw the line" uses three inline blanks plus two ruled lines; ambiguous in print and clipped to "you ma" in the fillable. Every other frame makes this a `.frame` model sentence.
3. MAJOR — `:541,:554,:562` "SPEND 10 COINS. Buy two protections" over a menu priced 1·2·3·4·6: every possible pair costs ≤10, so the budget never forces a choice and the frame's stated point is never tested.
4. MAJOR — `:286,:335` Frames 5 and 6 silently require numbers the story may not contain. No fallback clause.
## lesson-plan — REJECT
1. MAJOR — `:130` Support sends students to a "Need a start?" on Frame 7 that does not exist.
2. MAJOR — `:130` "Start with Frames 1, 2 or 9 (fewest steps)" is false; Frame 2 has five steps, Frame 7 has three.
3. MAJOR — `:112` Solo 12 min vs Frame 3's ~185 handwritten words (14–18 min of pen time). Frame 6 comparable.
4. MINOR — `:126` bell-ringer list excludes Frame 7, the lightest frame in the pack.
## teacher-guide — REJECT
1. MAJOR — `:173` + yaml: CCSS Math 6.RP.A.3c is mapped to percent change. That indicator covers percent of a quantity, not increase/decrease. The registry carries 7.RP.A.3, whose verified text names "percent increase and decrease".
2. MINOR — `:83` "labelled" (British) vs "labeled" in product.yaml.
## worked-examples + FACTS ledger — REJECT
Ledger honest: 20 lines, all PENDING, every line matched to a statement, status draft holding the gate. Story rules obeyed throughout (two-plus outlets, "allege"/"proposed class action", officeholders only, no private individuals, no figures printed).
1. MAJOR — `:143` "fans asked the obvious question" is an assertion about public reaction with no ledger line and no outlet.
2. MINOR — `:104` "The company will have its turn to answer in court" — forward-looking procedural claim, no ledger line.
3. MINOR — anonymization applied inconsistently between the story panel and the filled frame.
## deck — SHIP IT
1. MINOR — Frame 6 notes repeat the 6.RP.A.3c misalignment.
2. MINOR — slide 1 says everything twice (left column + cover thumbnail).
## cover — REJECT
1. MAJOR — `:56–57` kicker "The News Desk Pack" repeats two of the title's three words and burns the differentiator slot.
2. MINOR — `:55` chip and `:58` sub both say "Any story" within 60 vertical pixels.
## listing — REJECT
1. MAJOR — `:38` sells a "fixed budget" tradeoff the worksheet does not create.
2. MAJOR — `:24` standards line carries the wrong math code.
3. MINOR — `:35` "8-week" should be "eight-week" per COPY.md.
4. MINOR — `:47` "It stands alone, and the 6-lesson bundle saves 30%" reads as if this pack is one of the six.
## the free product — REJECT
The free frame is the whole method, not a teaser: full Frame 1, 22 fillable widgets, a real one-page guide with both routines, all five safe-story rules, an exemplar and a full rubric row. Genuinely teachable alone.
1. MAJOR — `frames.html:75` the STUDENT page kicker reads "Frame 1 of 10", advertising nine pages the kid does not have. The crippled-demo tell, on the surface that goes in a kid's hands.
2. MAJOR — `product.yaml:43` a 50-word sentence doing the funnel work, against COPY.md's 25-word cap.
3. MINOR — `frames.html:117` footer "News Desk — Frames" vs the guide's "Fact Desk — Teacher Guide" inside one download.
4. MINOR — "Search the store for 'News Desk Frames'" is not a phrase in the pack's title or tags.
5. MINOR — cover chip "1 one-page frame" reads as a typo.
6. MINOR — `:40` 27-word sentence.

Cross-cutting: "works on any story" is asserted rather than engineered — four frames need the story to supply something it may not have, and only Frame 10 carries the one-clause fallback that shows how easy the fix is. Second pattern: one defect propagates through every surface unchecked (the math code appears in yaml, chip, map and deck notes; Frame 7's blank defect appears in print, in the fillable and in the plan's Support line; the coin budget is sold in the listing as a constraint it is not). Two notes for the lead: STRATEGY.md specifies six worked examples and the pack ships four; the free product's only structural risk is that its student page markets to the student instead of the buyer.

---
## Lead adjudication (2026-09-11)
ACCEPT all 22. Rulings where the fix was open:
**Frame 10 pricing.** Reprice the five protections 2 · 3 · 5 · 7 · 9 coins, budget stays 10, and put the two most valuable protections at 7 and 9 so buying both is impossible. Exactly half the pairs fit, so the budget binds. Recompute the teacher guide's worked rating to match.
**Fallback clauses.** Frames 4, 5, 6 and 8 each get one clause in their own voice, modeled on Frame 10's: the student may substitute something from their own life when the story does not supply it. A frame that only works on a lucky story is not an engine.
**Math standard.** CCSS Math 6.RP.A.3c → 7.RP.A.3, registry text verbatim, in yaml, chip, standards map, description and the deck's Frame 6 notes. The code is in band for 6–8 and its verified text names percent increase and decrease.
**Invented reaction.** "fans asked the obvious question" becomes the frame's own question, with no claim about what anyone asked. Nothing in the worked examples may assert a reaction, a motive or a future event without a ledger line.
**Frame 3 load.** Cut the grid from four rules to three, and name Frames 3 and 6 in the Frame block as the ones that take the longer solo split.
**Cover kicker** carries the differentiator, not the title again: "Works On Any Story, Any Week". Chip shortens to "AI Literacy · Media Literacy".
**Free product.** The student page stops selling: kicker becomes "Fact Desk · Is it true?" and the footer "Fact Desk — Frames". The cross-sell stays on the cover, the teacher guide and the listing, and points at a phrase that is actually in the pack's title.
**Worked examples count.** STRATEGY.md says six; the pack ships four and is internally consistent. Amend STRATEGY.md to four, with more added as the store grows. Four dated examples is enough to teach the method.
**Slide 1 duplication** is a title-slide layout question shared with every deck; handled at the script level, not here.
