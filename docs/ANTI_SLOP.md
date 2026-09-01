# Anti-Slop Standards — what "done" means here

Slop is anything that makes a teacher think "an AI made this and nobody checked."
One slop moment kills trust in the whole store. These rules are enforced, not aspirational.

## Layout (enforced by `npm run render` — the build FAILS on violation)
1. **Every page fits US Letter exactly.** No content overflowing 11in — overflow splits
   pages mid-element in the PDF (the #1 slop tell).
2. **Nothing touches the footer zone.** Content keeps ≥8px clearance above the footer.
3. **Every document page has a footer** (doc name · series · page number).

## Layout (checked by eye — screenshot every page before marking a product rendered)
4. No orphaned headers (a section title at a page bottom with its content on the next page).
5. No text overlapping art; no art crowding chips, mastheads, or margins.
6. Write-in space is honest: boxes/lines big enough for a 12-year-old's handwriting.
7. Emoji are banned in documents — render environments may lack emoji fonts (tofu boxes).
   Use the inline-SVG spot art system instead. Plain glyphs (✗ ✓ →) are fine.

## Content
8. Never invent standards codes, citations, statistics, or "studies show."
9. No placeholder text ships — no lorem, no TODO, no "[insert X]", no unfilled ____ outside
   deliberate student blanks.
10. No AI-tell phrasing: "delve", "in today's fast-paced world", "it's important to note",
    "furthermore", stacked em-dash sentences, or triple-adjective pileups.
11. Analogies must be load-bearing and consistent — one central analogy per product,
    carried through lesson, worksheet, guide, and cover. No mixed metaphors.
12. Timing must sum: activity minutes add up to the advertised lesson length.
13. Read every page aloud once. If a sentence sounds like a press release, rewrite it.

## Process
14. `npm run render` and `npm run validate` both green before a product's status moves
    to `rendered` — no exceptions, including "tiny" copy edits (they reflow pages).
15. Visually inspect the cover PNG and every document page screenshot after ANY change.
