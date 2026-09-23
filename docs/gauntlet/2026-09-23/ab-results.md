# Blind A/B results — Opus 5.5 writing pass

Method: every page whose render changed is paired with its baseline render from before the pass, shuffled
per pair, and judged by a fresh agent that cannot see which side is new. The map is kept outside the
judge's directory and decoded by the lead afterward. A product whose rewrite does not win reverts.

| Product | Pairs | New wins | Old wins | Tie | Kept? |
|---|---|---|---|---|---|
| ai-prompting-101 (L1) | 17 | 15 | 0 | 2 | Yes |
| ai-training-data-crate (L2) | 17 | 13 | 4 | 0 | Yes, with fixes |
| ai-fact-check-lab (L3) | 20 | 17 | 1 | 2 | Yes |
| ai-taste-file (L4) | 19 | 19 | 0 | 0 | Yes |
| ai-boring-work (L5) | 17 | 16 | 0 | 1 | Yes |
| ai-agent-intern (L6) | 18 | 17 | 1 | 0 | Yes |
| news-desk-frames | 33 | 29 | 2 | 2 | Yes, with fixes |
| news-desk-frame-free | 2 | 1 | 1 | 0 | Yes, with fixes |
| bundle-ai-line | 3 | 2 | 1 | 0 | Yes, with fixes |

## L1 notes
The judge's own headline was "neither side wins across the board" — which is what a correctly blind judge
should say about shuffled letters A and B. Decoded, the rewrite won every page that changed except two ties
(a capitalization change on the title slide and bracket styling on slide 8).

The judge listed ten rendering errors. Nine were on the OLD side — orphaned words, doubled bullets,
a detached lamp spout, a mismatched possessive — which the rewrite had already fixed. One was on the new
side: Exit Ticket #1 left "R, and O." alone on its own line. Fixed by the lead on both surfaces that carry
the item ("Use all three parts: P, R, and O." → "Use P, R, and O."), and confirmed from the PDF's text lines
that the item now prints on one line.

## L3 notes
The rewrite won 17 of 20 changed pages. The most important result is in the error list: the slides and the
Desk Helpers box saying "Everybody knows it? Mark S" were on the OLD side. That rule is how the planted
Sydney error got through, and the rewrite had already replaced it with "'Everybody knows it' is not a reason."
The old pages also said AI "never checks" its words while other pages said "doesn't always check them".

The one loss was slide 6, which the lead's ruling repurposed from a compare slide into the corrected warm-up
paragraph. The judge was comparing two different slides, but its reason was fair: the new one left "too."
alone on a line. Fixed by shortening that bullet. The lead's first attempt also changed the speaker-notes
reveal line, which is a word-for-word copy of the lesson plan's reveal; that was restored so the two still
match, and only the slide bullet changed.

## L2 notes
13 of 17 changed pages won. Two of the four losses were the lead's own rulings and stand: slide 11 lost
Exit #3 (it asked for what students had written two minutes earlier) and slide 2's AutoMix punchlines moved
to the speaker notes (a joke read off the screen before the teacher performs it is a joke spent). A judge
reading a static page cannot see either reason. The other two losses were real and are fixed: slide 5's pull
quote is whole again, and the teacher guide's Gap Report model answer names all four students the playlist
leaves out, as it did before the rewrite dropped Nia. Every orphaned word the judge found on the new side is
reworded, and the new widow check reads zero for this product.

## L4 notes
A clean sweep, 19 of 19. The judge preferred the redrawn cover without knowing which was which: the old one
(a struck line with a replacement written above it) pictured ghostwriting, the thing this lesson forbids; the
new one is a liked card beside the student's page with a note flag pointing at one line. The worked example
now leaves an un-noted sentence alone and says why ("Two notes means two fixes, not a makeover"), where the
old one rewrote every sentence and broke the lesson's own rule.

Two new-side errors, both fixed by the lead: slide 8 said "Copy your draft below" on a projected slide (now
"onto page 3"), and slide 4's first card heading printed smaller than the other two because the shared slide
builder fitted each heading on its own. The builder now sets one heading size per row of cards, for every deck.

The listing title changed to "AI Writing Feedback: Peer Editing & Revision | Middle School 6-8 | No Prep" —
peer editing is what the lesson is and a phrase ELA teachers search. Catalog synced.

## L6 notes
17 of 18 won, and every error the judge found sat on the old pages. It named the planted fact without
knowing which side was new: "A has the 'plant the cursed amulet' secret job and the reveal that leads into
the exit ticket, so the review has a planted fake fact to catch; B drops it." The one loss was slide 9, whose
steps had become vaguer than the worksheet ("a line and a box in every row"); rewritten by the lead to say
who writes the card and that each paper goes back to its owner with the FIX line read aloud.

## L5 notes
16 of 17 won, one tie (the cover's mic versus a raised hand), none lost. The judge's raw letters read 9 to 7,
which looked close; decoded, it was a sweep, and every stranded word it listed was on the old pages. It picked
the new Defend It for exactly the reasons the rulings named: a separate writing step, a rule for who speaks
first, a working plan for odd numbers, and "every word clear" instead of "voice to the back wall" for two kids
at one desk. The BPM story, told about DJs, was on the winning side of the lesson plan.

## A regression the print pass caused, found by the News Desk judge
The print fix gave every `.panel` a hairline border so it survives a photocopier. In the News Desk frames the
method list's numbers hang outside the text into the panel's padding, and the shared template's
`body.compact ol` rule zeroes the list's left margin, so the new border ran straight through "1." to "4." on
all eleven student frames. Before the border, the numbers sat on a tint and nobody could see the collision.
Fixed by indenting the list with padding, which nothing overrides. A marker-to-border measurement across the
other products found no other list inside a bordered box closer than 16px.

## News Desk and bundle notes
News Desk pack: 29 of 33 won. The shuffled letters read 16 to 15, a coin flip; decoded, every hanging step
number, every "AI Literacy" masthead and every content contradiction the judge found was on the old pages.
The two losses were slides 2 and 6, where the new text had turned into shorthand; sent back for plain steps.
The free frame's page won and its teacher guide lost (a pair-check written as one run-on line); sent back.

Bundle: only three of its pages existed before the pass to compare. The new cover and the new "Six Days at a
Glance" page both won — the judge checked the 480-page class copy count and it holds. The new page of six covers
lost: the mini covers were unreadable at print size and Lesson 1's FREE badge confused a paid buyer. Rebuilt with
each cover beside what students do and its standards, and a caption explaining the badge. The day-by-day board
cells were also printing "edItor gIves" — Space Grotesk Bold at 8.5pt drops the dot on a lowercase i — now set in
the body font.
