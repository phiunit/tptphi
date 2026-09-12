# Copyedit gauntlet — all nine products, printed pages (2026-09-12)

Professional proofread of every `src/*.html` across the nine products, read as rendered text out of the
25 shipped PDFs (plus 9 covers) so the proofreading matched what a teacher actually holds. 38 errors,
16 judgment calls. Full report in the task record; the rulings below are the authority.

## The one that matters most
`ai-agent-intern/src/lesson-plan.html:106` — the page-2 header reads "Direct Instruction, cont. (9 min)"
and repeats minutes already claimed by the block header on page 1. As printed, the timed blocks total
**54 minutes against the 45 promised on the cover and in At a Glance**. This is the lead's error: the L6
fix brief specified that header text verbatim, including the minutes. L1 handles the same continuation as
"Direct Instruction (cont.)" with no minutes, which is the correct form.

## Also structural, not cosmetic
- `ai-fact-check-lab/src/lesson-plan.html:65` — the TECH NEEDED cell stops mid-sentence: "None — fully
  unplugged; devices only add". Words are missing.
- `bundle-ai-line/src/unit-overview.html:72` — lesson 4 is listed with **ISTE 1.6.b**, the standard that was
  replaced by 1.1.c in Round 3 because a paper lesson remixes no digital resources. A buyer comparing the
  bundle page with the lesson sees two different standards. The Round 3 sweep missed it because the brief
  named product.yaml files and teacher guides, not the bundle's unit overview.
- `ai-training-data-crate/src/worksheet.html:129` — students are told to write cards "like the cards on
  page 1", but the page-1 cards carry three fields and the instruction asks for five.
- `news-desk-frames/src/lesson-plan.html:112` vs `:126` — "Frames 3 and 6 carry the most writing" vs
  "Frames 3, 6 and 10 are the long ones". A teacher timing the block gets two different lists.
- `ai-taste-file/src/teacher-guide.html:72` vs `:91`/`:123` — the same worked example's Section 3 is
  paraphrased as "no look-up words" in one place and "no textbook voice" in two others.

## Grammar and punctuation errors accepted in full
L1 worksheet:59 tense shift ("what you SAY" → "SAID"); L1 lesson-plan:78 "the wish" → "the wish's";
L4 lesson-plan:131 and teacher-guide:139 "one pet peeve and one note **is** fine" → "are fine" (twice);
L4 worksheet:160 three-clause comma splice on a student page; L6 worksheet:82 missing "In" at the head of
a three-part parallel; news-desk lesson-plan:131 "if it fit two" → "fits"; news-desk lesson-plan:121
"Fifteen pairs … fits" → "15 pairs … fit"; worked-examples:188 "and deleted is gone" loses its subject
mid-sentence; en dash in numeric ranges in three teacher guides; L3 teacher-guide:107 capital C on the
third of three parallel stamps.

## Spelling, US house style
"grey" → "gray" twice in L2 (BRAND.md sets gray); "behaviours" → "behaviors" in L6; "set-up" → "setup";
eleven instances across both News Desk products put terminal punctuation OUTSIDE the closing quotation
mark, which is British style, and the paid pack prints both styles eleven words apart.

## Terminology: the house rule, decided
The same component is spelled up to three ways, sometimes on one page: quest card / Quest card / Quest Card;
taste file / Taste File / taste-file; role card / Role Cards; task board / Task Board; trade-offs / tradeoff;
worked example / Worked Example; p.1 / p. 1; curly quotes in one product and straight everywhere else.

**Rule (now in docs/COPY.md): a component is lowercase in prose and title case only where the words are
the printed name of a thing on the page** — a section heading, a frame title, a cover kicker. So "write
your quest card" in a sentence, "Quest Card" as the heading of the box the student writes in. One word for
tradeoff. Page references are "p.1" with no space. Straight quotes everywhere. Serial comma always.

## Terms of use: one canonical block
Six teacher guides carry four different wordings of the licence paragraph and four different closing lines.
One block, used verbatim everywhere:
"Your purchase (or free download) grants ONE teacher a license for their own classroom. Share the store
link, not the file. Questions or a problem with this resource? Ask on the listing before leaving a review —
most fixes take a day."

## Judgment calls declined
"Take 3–4 wishes" and similar narrative counts in teacher-facing prose stay as figures: these are quantities
a teacher acts on at a glance, which is what the numeral rule is for. "Copy, Style, or Person?" keeps its
name (renaming a frame is forbidden and the name is in the listing); instead its first method step will say
plainly that the student is deciding whether a work, a style, or a person is being copied.

---
## Applied and verified (2026-09-12)
All nine products green, page/slide/deck counts unchanged everywhere, no page reflowed past a footer.
The proofreader's own counts were low in two places: 17 instances of terminal punctuation outside a
closing quote, not 11, and four paraphrases of the ai-taste-file Section 3 line, not three.

**The 54-minute lesson plan is fixed.** ai-agent-intern's page-2 header is now "Direct Instruction (cont.)"
with no minutes, and the printed figures sum to 45 against the 45 on the cover.

**One finding declined, correctly, by the builder.** The hyphen in "standards 1-3" sits inside verbatim
CCSS W.6.4 and W.6.5 text, and the registry carries the hyphen. Changing it would break character-identity
with the registry and alter a quoted official standard. The proofreader was wrong to flag it; the rule
against editing standards text outranks the house dash style.

**One builder decision reversed by the lead.** The builder read "check their top C claims live" as a stray
letter and cut the C. But C is this lesson's own taught vocabulary — students mark each claim C for check
or S for safe, and the worksheet column is headed "CLAIM I MARKED C (CHECK)". "Top claims" is vaguer than
what the lesson teaches. Both instances now read "check the claims they marked C", which uses the
vocabulary the students were just given.

**Extension approved:** the builder went beyond the named scope into slides.yaml for 15 strings, because
corrected sentences are copied verbatim onto slides and ANTI_SLOP 18 forbids the surfaces diverging. One of
those still carried the Frames 3-and-6 contradiction that this pass exists to kill. Right call.
