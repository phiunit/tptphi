# Print and accessibility audit — 30 student-facing pages (2026-09-12)

Every student page rendered at 150 dpi, converted to luminance greyscale, hard-thresholded at 40%, 50%
and 60% to simulate a school copier, plus a toner-low pass (brightness x1.25 before thresholding). Vector
elements enumerated so every rule and border is named by its exact CSS colour; type measured from spans.

## The headline: the "photocopy-safe" claim is false
**1,663 vector elements across all 30 pages sit above every threshold tested and disappear on any copy.**
Every write-in line, every table grid, every callout bar, on 30 pages out of 30. Nothing fills in solid
black — no tint is darker than luminance 232 — so the failure mode is total dropout, never mud.

| Token | CSS | Luminance | 60% | 50% | 40% | 40% + toner-low |
|---|---|---|---|---|---|---|
| body ink | `#14141F` | 21 | survives | survives | survives | survives |
| violet `--line` (h2) | `#5B4DFF` | 101.5 | survives | survives | marginal | **GONE** |
| footer text | `#8A8AA0` | 140.5 | faint | GONE | GONE | GONE |
| card cut lines | `#9A9AB2` | 157 | GONE | GONE | GONE | GONE |
| gold as text | `#FFB020` | 183 | GONE | GONE | GONE | GONE |
| **write-in rules** | `#B9B9C9` | 187 | **GONE** | **GONE** | **GONE** | **GONE** |
| table cell borders | `#C9C9D6` | 202 | GONE | GONE | GONE | GONE |
| panel / callout tints | `#F2F2F7` / `#FFF8EA` | 243 / 248 | GONE | GONE | GONE | GONE |

Long-rule survival, worst cases: ai-boring-work worksheet p2 loses 99.6% of its rules (926 → 4);
ai-prompting-101 worksheet p1 98.6%; news-desk-frames frames p2 98.9%; ai-taste-file worksheet p1 98%.
The survivors are only the black table header bars and dark SVG strokes.

## The three that make a page unusable
1. **Every ruled write-in line disappears.** Students have no line to write on and no cue where an answer
   ends. Worst case is the ai-boring-work exit ticket, which becomes bare labels on white.
2. **Fill-in-the-blank sentences become ungrammatical.** "Task ____ belongs in ____ because ____" prints
   as "Task belongs in because". A student cannot tell a blank from a typo.
3. **The Fact Desk answer grid vanishes under a surviving black header bar.** All five rows and the column
   divider go; the bar stays. The page looks fine at a glance and is unusable. This is the most damaging
   case precisely because it is invisible to anyone checking quickly.

## Accessibility failures independent of the copier
- The gold kicker is **1.83:1** against white, on all 30 pages, and it carries "Frame 1 of 10".
  Gold must never be type on white; it works only as a fill inside a dark outline, which is how the spot
  art already uses it.
- The footer is 8pt at **3.37:1**, failing WCAG AA before anything is copied, and it holds the page number.
- `.callout`, `.panel` and body text are distinguished by tint alone, which is colour-alone meaning.

## Ink cost: not a problem
Raw non-white runs up to 39.6%, but 16 points of that on average is 95%-luminance panel tint that costs
almost no toner. True weighted coverage averages **5.54%** and peaks at 8.61% — a normal text page. No
student page is expensive to print.

## What already works, and is the model for the fix
Every checkbox and tick outline is `1.5px solid #14141F` and survives every threshold including toner-low.
Spot art survives because every gold fill is wrapped in a dark stroke.

---
## Lead rulings (2026-09-12)
Accepted: a single `--rule: #4B4B60` token for every line a student writes on, `#6E6E86` for table
structure, `#4B4B60` dashed for cut lines, `#7A5200` for gold used as text or as a bare stroke, `#2E2A7A`
for h2 so a heading never depends on a mid-tone hue, a larger and darker footer with a bold dark page
number, a surviving left rule on `.callout` and a hairline on `.panel`, and 9pt for the song-card metadata
students must read to sort.

**Declined: recolouring the dark table header bars.** Once the cell borders survive, the "header survives,
body vanishes" trap is gone, the reversed type reads at 14.99:1, and the bars are a deliberate design
signal. The toner argument is a large share of a small number.

This is the change I would most want made across the line. Everything else we fixed this week affects how
well a lesson teaches; this one decides whether the paper a student is handed has lines on it.

---
## Fix applied and verified (2026-09-12)
One `--rule` token plus three siblings replaced 34 hardcoded light values across 19 product files and the
shared template. Verified by re-running the copier simulation, not by eye on a screen:

| page | surviving rules at 40% + toner-low, before → after |
|---|---|
| ai-boring-work worksheet p2 | 0 → 20 |
| ai-fact-check-lab worksheet p1 | 1 → 47 |
| ai-prompting-101 worksheet p1 | 0 → 5 |
| ai-taste-file worksheet p1 | 0 → 4 |
| news-desk-frames frames p2 | 0 → 8 |

**A correction to my own ruling.** I specified `--struct: #6E6E86` for table structure. It measures
luminance 112.7 and a 40% threshold cuts at 102, so it failed the rule I had just written. The builder
applied the value as decided and flagged the measurement rather than silently changing it, which is the
behaviour I want. `--struct` is now `#4B4B60` (luminance 77, clears the cut by 5.3 even under low toner).
Visual hierarchy between a write-in line and a table border now comes from **weight** — 1.25pt against
0.75pt — because weight survives thresholding and lightness does not.

Residual, accepted: the gold kicker (`#7A5200`) and the violet masthead rule still drop under low toner.
Both are decorative; page identity now rides on the footer page number, which is bold `#14141F`.
