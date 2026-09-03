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
13b. **Kid-world vocabulary on student pages.** Business/office jargon is an adult's mental
    model — most 12-year-olds have never met an intern. Banned on student-facing pages:
    intern, boss, manager, deliverable, stakeholder, workflow, efficiency, brief (noun),
    career options, negotiate. Translate to their world: party leader / captain, squad,
    quest card, what done looks like, who it affects, agreeing on a price. Teacher pages
    may use professional terms (and translating for the adult is a selling point).

## Process
14. `npm run render` and `npm run validate` both green before a product's status moves
    to `rendered` — no exceptions, including "tiny" copy edits (they reflow pages).
15. Visually inspect the cover PNG and every document page screenshot after ANY change.

## Why this matters commercially (researched Sep 2026)
TPT has **no AI detector and no disclosure requirement at upload** — but enforcement is
real and store-level: IXL's CEO confirmed TPT runs "algorithmic tools to identify and
demote STORES associated with low-quality, AI-generated content." Demotion hits the whole
store's search rank, not just one listing. After Chalkbeat's Aug 2026 "AI slop" expose
(alphabet posters missing letters, nonsense graphics), scrutiny is rising and policies may
tighten further.

Operating posture:
- One sloppy product can bury every product in search. The gates in this file are the moat.
- TPT's Content Guidelines require original authorship and truthful, accurate content.
  Phi directs, curates, and approves everything; facts and standards are verified; nothing
  ships unreviewed. Wholesale unedited AI dumps are what gets stores demoted.
- Never market products as AI-generated in listings; the value proposition is the
  pedagogy, the standards alignment, and the no-prep design.
- Quality over cadence: a slower drumbeat of excellent products beats daily slop, both
  with the algorithm and with reviews.

## File naming (teachers live in their Downloads folder)
Rendered files carry the lesson name: `<Lesson Name> - <Doc>.pdf`
(e.g. "How to Talk to AI - Lesson Plan.pdf"). Never generic `lesson-plan.pdf` —
a teacher downloading five stores' resources in one sitting must be able to tell
ours apart without opening them. `short_name` in product.yaml controls the prefix.


## What "verified" means in our standards registry (read before citing a standard)
`curriculum/standards-registry.yaml` marks 318 codes `verified: true`. That flag means
**dual-source corroborated** — retrieved from two independent copies of different provenance and
diffed character-for-character — **not publisher-PDF confirmed.** Every official host (iste.org,
csteachers.org, thecorestandards.org, jumpstart.org, councilforeconed.org, nationalartsstandards.org,
and every state DOE tried) is blocked by this environment's egress proxy, so no code in the registry
has been checked against its publisher's own PDF from here.

Practical rules that follow:
1. The registry is good enough to ship against and far safer than memory — but if a buyer or admin
   ever disputes a code, re-check it against the publisher PDF from an unblocked machine first.
2. **Never write an NCAS `MA:` grade code.** No verbatim copy was reachable; only the 11 anchor
   standards are captured. Cite the anchor in words instead.
3. **Never write a Jump$tart/CEE/NSPFE benchmark number.** Only the six topic names are captured;
   the benchmark text lives solely in a blocked PDF. Cite the content area with no number.
4. **Jump$tart and CEE are ONE framework** (National Standards for Personal Financial Education,
   2021). Citing both for the same product is double-counting one document.
5. **There is no grade-banded CCSS ELA code.** `W.6-8.1` and `SL.6-8.4` do not exist — pick the
   specific grade (W.6.1, W.7.1...).
6. **Never claim a product "meets financial literacy requirements."** Those mandates are almost
   entirely high-school course requirements; saying it about a 6-8 resource is a false claim.
7. CSTA **2017** codes stay primary (that's what states adopted). The 2026 codes
   (new scheme, e.g. MS-ALG-PS-01) are in the registry as **secondary** until adoptions land.

## Slide decks and fillable PDFs (added Sep 2026)
- **Decks are slides, not documents.** One moment per slide; a list slide holds ≤ 6 items; card text ≤ 140
  chars (≤ 90 with four cards). Teacher script lives in speaker notes — students see only what's on the slide.
- **No text box may overflow its frame.** `scripts/slides.mjs` renders an HTML twin and fails the build if any
  box overflows; review `dist/review/slide-NN.png` for the things a gate can't see (orphan words, ragged
  wraps, a quote that reads worse big).
- **Facts on slides are held to Gate 0.** A lesson that plants errors in passages never repeats one on a
  student-visible slide; answer keys go in notes only.
- **Fillable = same page, typeable.** Fields sit exactly on the printed boxes with no border or fill of their own.
  New write-in CSS idiom → add its selector to `WRITE_IN` in `scripts/fillable.mjs`, then rasterise the PDF
  with test values before shipping.
