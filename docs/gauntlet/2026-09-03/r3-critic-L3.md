# Round 3 — Critic report: L3 `ai-fact-check-lab` (2026-09-11)

Fresh critic, blind. Checked review PNGs + cover-200, PDFs (LP 2 / WS 3 / TG 3 = .page counts = listing), zip = INCLUDES (5), .pptx 12 slides, fillable widgets + filled rasters, FK 5.2, minutes arithmetic (6+10+21+4+4 = 45; rounds 7+10+4 = 21), every planted and non-planted fact verified true, standards text byte-identical to registry.

## cover — SHIP IT (no regressions)
## lesson-plan — REJECT
1. MAJOR — `:125` Round 2 choreography unwritten: sheets never told to move, yet the next transition says "Sheets back to their owner"; "the verdict box is checked" names no subject.
2. MAJOR — `:128` "Every other desk adds a tally mark under its stamp on the board" — up to 45 trips to the board in a 4-minute block.
3. MAJOR — `:122` Round 1 (7 min) written output is 4 log rows + a 3-line note ≈ 70–80 words = 6–8 min of handwriting BEFORE reading, underlining and marking.
4. MAJOR — `:83` Support hint "two false facts per draft" is already printed on every student's page (the "Need a start?" frames), so it scaffolds nothing and gives the count to the whole class.
5. MINOR — `:125` splits Drafts #2/#3 across partners, but `worksheet.html:120` header assumes every student does #3.
## worksheet (print + fillable) — REJECT
1. BLOCKER — `:93,:118,:165` + `scripts/fillable.mjs:44`: the "Need a start?" printed model sentence's `______` runs become 28.7 × 7.5 pt text fields. Typed values clip to "the 19", "the Mo". Fails "a field on every write-in AND NOTHING ELSE".
2. MAJOR — `:92,:117,:164` the note gets 3 ruled lines (~135 chars) but the guide's own proficient exemplar is 232 chars / 39 words.
3. MAJOR — `:169,:171` the assessed exit ticket gets 2 lines (~90 chars) against key answers of 118 and ~130 chars.
4. MAJOR — `:121–140` Desk Helpers two-column panel has zero gutter; left bullet runs into the right column's bullet glyph.
5. MAJOR — fillable: method steps UNDERLINE and RANK (C/S on the passage) are impossible when typing, and objective 2 is assessed on them. Nothing tells a Chromebook student what to do instead.
6. MINOR — `:77` "Column" (newspaper section) unglossed while lighter words are glossed.
## teacher-guide — REJECT
1. MAJOR — `:104` "KILL the ending, keep the true facts" is not one of the three printed stamps, and the same sentence also credits FIX. On the RI.6.8 item the key does not say which box is right.
2. MAJOR — `:101,:113–119` no key for the C/S ranking, which the plan lists as assessed.
3. MINOR — `:93` column header "Planted error" holds rows that are true claims with false reasons.
4. MINOR — `:105` only Priya's note has an exemplar; Theo's and Marcus's have none.
## deck — REJECT
1. MAJOR — `slides.yaml:75` slide 11 drops "checkable (a name, date, number, place, or quote)" — the words the key scores on.
2. MINOR — `:34` "FIX (correct it, then run)" vs the worksheet's "then print".
3. MINOR — `:33` "Verify each CHECK claim" — on the unplugged default students NAME a source, they cannot verify it.
4. MINOR — `:50` "Marcus's invention story" vs the plan's "invention feature" vs the worksheet's "Marcus's Feature".
5. MINOR — `:79` closer "clear it" vs the worksheet keeper rule "check it".
6. MINOR — `slide-01.png` title, kicker, grade chip, minutes chip and "No prep" each appear TWICE (live text + cover thumbnail).
## listing — REJECT
1. MAJOR — `product.yaml:45` "Lesson 3 of six" mixes a numeral and a word for the same count.
2. MAJOR — `:26,:28` "check 3 AI-helped drafts", "the first 6 minutes", "a 4-step method" are narrative counts that COPY.md puts in words.
3. MINOR — `:28` "they will use for life" — unhedgeable future claim.
4. MINOR — `:24` hook is two sentences / 18 words against the one-sentence ≤16-word spec.

Cross-cutting: the product was designed for the pair but built for the single sheet, and never re-costed in handwriting minutes. Second, separable cause: the same sentence was retyped per surface instead of copied (KILL/FIX, then run/then print, clear it/check it, invention story/feature, Exit #2).

---
## Lead adjudication (2026-09-11)
ACCEPT all 20, with these rulings where the fix was open:

**Two gate changes first — the gates caused three paraphrases of assessed items across L2 and L3, so the gates are wrong, not the copy.**
1. `scripts/fillable.mjs`: an underscore run inside an element marked `.frame` (or any ancestor carrying `data-nofill`) is NOT a write-in. Printed model sentences never get fields.
2. `scripts/slides.mjs`: a slide may carry `verbatim: true`, which skips the CONTENT character cap for that slide and keeps the geometric overflow gate (the real guard). Allowed only on a slide that reproduces an assessed student item word for word. Apply it to L3 slide 11 and back-apply to L2 slide 11 item 2, which was condensed under protest.
3. `scripts/slides.mjs` title slide: when a cover image is present, drop the left-hand chip row. The cover carries those chips already.

**Choreography (the root cause).** Three drafts stay; each student works all three, but leads two.
- Round 1 (7 min): both partners work Draft #1 on their OWN sheets. Log the TWO riskiest claims only, not four.
- Round 2 (10 min): Partner A leads Draft #2, Partner B leads Draft #3, each on their own sheet (6 min). Then: "Swap sheets with your partner. You are now holding their draft. Read their log, add one claim they missed, and hand it back." (2 min) Owners check their own stamp and write the note (2 min).
- Share-out (4 min): hands-up count, teacher writes one tally row per draft on the board. No student walks to the board.
- Worksheet p.2 header → "use these on both drafts".

**Write-in sizes.** Note lines 3 → 4; exit ticket 2 → 3 lines each; TG exemplars rewritten to ≤130 characters so the model answer fits the space the student is given.
**Typing route.** One line once, under the method on p.1: "On the typeable PDF you can't underline. Copy each claim you'd CHECK into the table, and put your S-claims in the last row."
**TG:** stamp key → "Correct stamp: KILL (the headline claim and its quote both fail). A defended FIX earns partial credit." Add a "Mark C" column naming the claims to check per draft. Column header → "What the desk should catch". Exemplar for all three notes.
**Deck:** slide 11 verbatim from the worksheet; "then print"; "Name a second, independent source that could confirm it."; "Marcus's invention feature" everywhere; "check it".
**Listing:** "Lesson 3 of 6"; three/six/four-step in words; "a four-step fact-desk method that works on feeds and group chats too"; hook trimmed to one sentence ≤16 words.
