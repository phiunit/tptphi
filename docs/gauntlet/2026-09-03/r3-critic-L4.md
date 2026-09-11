# Round 3 — Critic report: L4 `ai-taste-file` (2026-09-11)

Fresh critic, blind. Every surface was rejected in Round 2, so all six got the full treatment. Checked review PNGs + cover-200, PDFs (LP 2 / WS 3 / TG 3 = .page counts = listing), zip = INCLUDES (5), .pptx 13 slides + 13 notes, fillable 43 widgets filled with the guide's own exemplars and rasterized, FK 5.2, minutes (6+8+12+15+4 = 45), standards text vs registry, bundle math.

## cover — REJECT
1. MAJOR — `:51` sub "Generic in, generic out." names the problem, not the payoff; no keyword a browser scans for appears in readable type.
2. MAJOR — `:18,:49` kicker "The Revision Lesson" at 26px / 0.85 opacity is unreadable at 200px — the one keyword the title sells on vanishes.
3. MAJOR — art reads as "a document with a heart" at thumbnail; the caret sits ~22px below the inserted bar so it reads as a stray chevron.
## lesson-plan — REJECT
1. BLOCKER — `:116` the swap is mutual, so every student is simultaneously Editor and Writer; no turn order exists anywhere in the product. Half the class never hears their notes read aloud and the SL.6.1 evidence is unearned.
2. BLOCKER — timing follows: 0.5 + 3 + 2 = 5.5 min in a 5-minute block; the guide already implies two directions.
3. MAJOR — `:116` 3 min to read a peer's five-section taste file, read their draft, and hand-write two notes whose exemplars total ~35 words.
4. MAJOR — `:119` Revise (5 min) re-copies a 40–55-word draft by hand: 4–5.5 min of transcription, no time to decide what to change.
5. MAJOR — `:124–125` Last Check 4 min for three answers whose exemplars run ~47 words.
6. MINOR — `:55` two em-dashes in one sentence a teacher says aloud.
## worksheet (print + fillable) — REJECT
1. BLOCKER — page 2 is 48% blank including a contiguous 2-inch dead band, while the DOK-3 assessed notes get two 26px lines each.
2. BLOCKER — `:132` the talk protocol on the page a student actually reads has no turn order.
3. MAJOR — fillable Name field 109.5pt (~22 chars) truncates a real name; L1's is 124.5pt.
4. MAJOR — `:44,:46` the gold heart is drawn BEFORE the page rect, so the page covers a third of it and the text bar spears its left lobe. Same defect in lesson-plan `:37/:38` and teacher-guide `:32/:33` — all eight printed pages.
5. MINOR — So Me / Not Me boxes measure 71px, 1px under the floor.
6. MINOR — `:90` Section 2's decorative rule collapses to a 4px stub.
## teacher-guide — REJECT
1. MAJOR — `:133` the Support/ELL note frame ends "Try ____", which is the rewrite the lesson forbids; the scaffold hands the core violation to the students least able to spot it.
2. MAJOR — `:56` "Every AI job runs human → AI → human" stated as universal fact; repeated student-visible on slide 13.
3. MAJOR — `:124` ISTE 1.6.b claims students remix DIGITAL resources; the product's selling point is that it is paper-only.
4. MINOR — `:39` "two exclamation points is shouting" — subject-verb disagreement in the exemplar a teacher copies onto the board.
5. MINOR — same row points at Section 1 when Jaylen's Section 3 carries the exact rule.
6. MINOR — `:100` the trio note cannot fit its slot, and doubles with the turn-order fix.
## deck — REJECT
1. MAJOR — `slides.yaml:87` slide 13 projects the universal claim.
2. MAJOR — slide 5 is "watch one get fixed" but the draft is not on the slide; the note refers to "sentence 2" of a sentence students cannot see.
3. MAJOR — slide 10 projects the protocol with no turn order.
4. MINOR — `:44` slide 7 quotes a vague stem the key rejects instead of the sheet's stem.
5. MINOR — slide 1 says everything twice (live text + cover thumbnail).
## listing — REJECT
1. BLOCKER — `product.yaml:32` sells the revision as happening "in The Editor's Chair"; it happens on page 3, and the INCLUDES line contradicts it three lines later.
2. MAJOR — `:28` the Do line reads as if each student takes two notes on their own draft; a partner gives them.
3. MAJOR — `:32` "either a partner playing the AI or your projected AI tool" promises a whole-class device path the product does not ship (the projector path is one volunteer, teacher account).
4. MINOR — `:37` "Lesson 4 of six" mixes numeral and word and contradicts the cover chip.
5. MINOR — `:34` "will actually remember" — unhedged future claim.

Cross-cutting: the Editor's Chair was designed as a one-directional protocol and shipped as a mutual, simultaneous swap. Fixing the turn order closes both worksheet BLOCKERs, the plan BLOCKERs, the timing MAJORs and the listing's Do line in one edit. Two smaller independent causes: the `#feedcard` SVG z-order (one swap fixes eight pages), and the cover + ISTE pair both overstating.

---
## Lead adjudication (2026-09-11)
ACCEPT all 26. Rulings where the fix was open:

**Turn order (the root cause).** Same family as L5's Defend It; use the same shape of fix. Canonical, verbatim on worksheet, plan and slide 10: "Speaker 1 is the partner whose first name comes first in the alphabet. Speaker 1 is the editor for the first minute: read your two notes out loud. Writer: ask ONE question. Then switch — Speaker 2 runs the same minute. Then swap sheets back." The talk is a 2-minute sub-block, not 1.
**Timing.** Re-split so the blocks still sum to 45, with these floors: Editor's Chair ≥ 7 min (0.5 swap · 4 read-and-write · 2 talk · 0.5 back), Revise ≥ 6 min, Last Check ≥ 5 min. Take the minutes from Activity 1 and Direct Instruction. Revise instruction narrows to "rewrite only the sentences your notes point at, plus enough around them to make it read." Last Check #1 shortens to "the one word or phrase you changed."
**Page 2.** Notes get three lines each; the Speaker 1 / Speaker 2 script goes in the dead band as a boxed protocol.
**ISTE 1.6.b → ISTE 1.1.c** ("Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways"). That is what this lesson is actually about: what to hand an AI so its feedback is about your writing. Taught unplugged, performed on the projected path and the fillable. 1.6.d was considered and rejected — students publish nothing.
**Through-line sentence** normalizes to "A good AI job runs human → AI → human." matching the L5 ruling. Six products carry the universal version; L4 fixes its own two, the rest is a separate sweep (see STATUS).
**Cover.** Sub → "The AI gives notes. You stay the writer." Kicker ≥ 32px, full opacity. Art → one page, one struck line, the replacement written above it, caret touching the struck line; heart and second bar dropped.
**Slide 1 duplication** is already being fixed at the script level by the L3 builder (title slide drops the chip row when a cover image is present) — L4 does nothing.
**Listing.** "revise their own draft on Revise & Last Check"; "get exactly two notes from a partner"; "Each student hands the taste file to a partner playing the AI. With a projector you can also run one volunteer's file through a real AI on your own screen."; "Lesson 4 of 6"; "is the classroom AI policy worth repeating all year."
