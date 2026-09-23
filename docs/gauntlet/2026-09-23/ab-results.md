# Blind A/B results — Opus 5.5 writing pass

Method: every page whose render changed is paired with its baseline render from before the pass, shuffled
per pair, and judged by a fresh agent that cannot see which side is new. The map is kept outside the
judge's directory and decoded by the lead afterward. A product whose rewrite does not win reverts.

| Product | Pairs | New wins | Old wins | Tie | Kept? |
|---|---|---|---|---|---|
| ai-prompting-101 (L1) | 17 | 15 | 0 | 2 | Yes |

## L1 notes
The judge's own headline was "neither side wins across the board" — which is what a correctly blind judge
should say about shuffled letters A and B. Decoded, the rewrite won every page that changed except two ties
(a capitalization change on the title slide and bracket styling on slide 8).

The judge listed ten rendering errors. Nine were on the OLD side — orphaned words, doubled bullets,
a detached lamp spout, a mismatched possessive — which the rewrite had already fixed. One was on the new
side: Exit Ticket #1 left "R, and O." alone on its own line. Fixed by the lead on both surfaces that carry
the item ("Use all three parts: P, R, and O." → "Use P, R, and O."), and confirmed from the PDF's text lines
that the item now prints on one line.
