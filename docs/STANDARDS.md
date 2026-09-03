# Standards — what to align each line to, and how to say it honestly

**The registry is the source of truth for codes and text: `curriculum/standards-registry.yaml`.**
This file tells you *which* framework to reach for and *how to phrase the claim*.
It deliberately contains no standard text — if you need wording, read it out of the registry.

Two hard rules sit above everything else here:

1. **Never type a standards code or its text from memory.** Copy both out of the registry.
   If it is not in the registry, it does not exist for us. `npm run validate` enforces this:
   an unknown framework, an unknown code, or text that does not match the registry verbatim
   is a build failure.
2. **A code you cannot defend as taught AND assessed is a defect, not a bonus.** See
   [Taught and assessed](#taught-and-assessed) and `docs/JUDGE.md` Gate 0 #4 / Gate 1.

---

## Crosswalk — frameworks per product line

| Line | Cite first (portable) | Cite second (subject depth) | Notes |
|---|---|---|---|
| **AI Literacy & Vibe Coding** | `ISTE` 1.3 Knowledge Constructor, 1.5 Computational Thinker, 1.6 Creative Communicator | `CSTA` 2-IC-20, 2-IC-21, 2-IC-23 (impacts, bias, privacy); `CCSS-ELA` RI and W | ISTE is the safest single cite for an AI lesson — voluntary, national, no state adoption fight. 2-IC-21 (bias and accessibility in design) is the closest *real* code to "AI bias." |
| **Personal Finance & Risk** | `CCSS-MATH` 6.RP, 7.RP, 6.SP, 7.SP | `NSPFE` topic — content area only, see below | Math carries the alignment weight, because NSPFE benchmark text is not verified. Expected value / probability lands in 7.SP.C.5–7.SP.C.8. |
| **21st-Century Entrepreneurship** | `CCSS-ELA` W.\*.1 (argument), W.\*.7 (research), SL.\*.4 (presentation) | `ISTE` 1.4 Innovative Designer; `NSPFE` Earning Income | State CTE codes are the trap — see [CTE](#state-cte-codes-the-portable-approach). |
| **Game Building & Creative Tech** | `CSTA` 2-AP-10 (flowcharts/pseudocode), 2-AP-13 (decompose), 2-AP-15 (feedback), 2-AP-17 (test cases) | `NCAS` Anchor Standards 1, 2, 3, 9; `CCSS-MATH` 6.RP / 7.RP for balance and economy lessons | Game balance genuinely *is* ratio and unit-rate reasoning, so the math cite is real, not decorative. NCAS anchors cover iteration and critique. |

Frameworks in the registry: `ISTE`, `CSTA`, `CSTA-2026`, `CCSS-ELA`, `CCSS-MATH`, `NSPFE`,
`NCAS` (plus `JUMPSTART` and `CEE` as alias records). 3–5 codes per product, no more.

---

## Which frameworks travel best across states

Most portable first. Portability is a sales property: a teacher in Ohio and a teacher in
Oregon both have to recognise the code, or the listing does not convert.

1. **CCSS ELA and CCSS Math.** The most portable thing we can cite. Even states that left
   Common Core by name kept the codes nearly verbatim in their own frameworks (Indiana,
   Oklahoma, South Carolina, Florida's B.E.S.T.; Texas TEKS is the real outlier). TPT's own
   standards picker is built around CCSS, so a CCSS code is the only one that gets us into a
   *filtered* search result. **Always include at least one.**
2. **ISTE Standards for Students.** Voluntary and national — nobody has to have "adopted"
   ISTE for a tech coordinator to recognise 1.5.c. Default for anything AI or digital-tool
   shaped. Weakness: no grade bands, so ISTE alone never proves grade fit. Pair it with a
   CCSS code that does.
3. **CSTA (2017).** The parent framework nearly every state CS standard set was derived
   from, so 2-AP-13 reads as familiar even where the local code differs. Level 2 *is*
   grades 6–8, which is itself a grade-fit signal.
4. **NCAS Anchor Standards.** The 11 anchors are shared by all five arts disciplines and
   are reproduced (sometimes lightly reworded) in most state arts frameworks — see the
   Maryland regulation cited in the registry. Portable **at the anchor level only**; the
   grade-specific `MA:` Media Arts codes are not portable and are not in the registry.
5. **NSPFE (Jump$tart/CEE, 2021).** Well known to finance teachers, but content area only —
   see the honesty constraints below.
6. **State CTE codes.** Not portable at all. Do not print them.

### Version watch: CSTA 2017 vs CSTA 2026

CSTA released the **2026 CSTA PK–12 Computer Science Standards** in July 2026 — the first
revision since 2017. Structure changed: five concepts are now Algorithms & Design,
Programming, Data & Analysis, Systems & Security, and Computing & Society (Algorithms split
out from Programming; Computing Systems and Networks merged into Systems & Security), and AI
content is distributed across all five concepts rather than sitting in one. The code scheme
is entirely new: `MS-ALG-PS-01`, not `2-AP-10`.

**Both sets are now verified and in the registry** (`CSTA` = 2017 Level 2, 23 codes;
`CSTA-2026` = MS band, 45 codes). Guidance:

- **Keep citing `CSTA` (2017) as primary.** That is the language state standards and teacher
  search queries still use, and nearly no state has adopted 2026 yet.
- Add a `CSTA-2026` code as a secondary "also aligns to" line where it genuinely fits. Most
  sellers will not update, so doing it accurately is a differentiator.
- The AI-relevant 2026 codes are worth knowing even before we cite them: `MS-ALG-PS-05`
  (using an AI tool on a computational problem), `MS-ALG-ML-06`–`MS-ALG-ML-08` (how ML
  models classify, bias in examples, model limits), `MS-PRO-RD-18` (analysing AI-generated
  code), `MS-SOC-ET-40` (when it is appropriate to use AI).
- Never guess a 2026 code string. Everything citable is already in the registry; anything
  missing must be verified and added there first.
- Revisit which set leads once state adoptions land (expect 2027–2028).

---

## Taught and assessed

This is the rule that separates us from the alignment-washing Fordham's *Supplemental
Curriculum Bazaar* study found in most top-downloaded online lessons.

For **every** code in `product.yaml`, you must be able to name both of these out loud:

- **TAUGHT:** the specific activity block, by name and minute marker, where students
  actually do the thing the standard describes.
- **ASSESSED:** the specific exit-ticket item, rubric row, or worksheet task that would
  catch a student who did not get it.

Cannot name both? **Cut the code.** Three codes that survive beat five that do not, and
`docs/JUDGE.md` Gate 0 #4 auto-fails the product for a code that cannot survive it.
Practical consequences:

- **Do not cite a standard the lesson merely brushes past.** One discussion question about
  AI bias does not earn 2-IC-21. A structured bias audit with a rubric does.
- **Match the verb.** If the standard says "evaluate" and the task says "list", the
  alignment is fake. Standards verbs are also the cheapest DOK check available: a standard
  built on *analyze / evaluate / design / justify* forces the DOK 2+ tasks Gate 1 wants.
- **Read the whole standard, not the headline.** ISTE 1.5.c is not "decomposition" — it also
  requires extracting key information *and* building descriptive models. If the lesson only
  decomposes, cite something else.
- **Codes go in three places** (unchanged): product description (top third), lesson plan
  chips, and the teacher guide with the full verbatim text pasted from the registry.

---

## How to phrase alignment claims in a TPT description

Honest phrasing is also better SEO, because it uses the words teachers search.

**Say this:**

- "Aligned to ISTE Standards for Students 1.5.c and CCSS.ELA-LITERACY.W.7.1."
- "Supports CCSS 6.RP.A.3 (ratio and rate reasoning) — the ratio work *is* the lesson, not a
  side note."
- "Addresses the National Standards for Personal Financial Education (2021) — Topic:
  Spending, grade 8 benchmarks."
- "CSTA Level 2 (grades 6–8): 2-AP-10, 2-AP-13. Full standard text is printed in the teacher
  guide."
- "Each standard is listed with the exact activity that teaches it and the exact item that
  assesses it — see page 1 of the teacher guide."

**Never say this:**

- ~~"Meets your state's financial literacy graduation requirement."~~ We do not know the
  buyer's state, the requirement is almost always a *high-school course* requirement, and a
  single 6–8 lesson cannot satisfy a course mandate. This is the most tempting false claim
  in the finance line, and an earlier version of this doc invited it. It is banned.
- ~~"Common Core aligned"~~ with no code. Empty, and the algorithm cannot use it.
- ~~"W.6-8.1"~~ or ~~"SL.6-8.4"~~. **There is no grade-banded CCSS ELA code.** Pick the grade
  (W.6.1) or list all three (W.6.1, W.7.1, W.8.1). This shorthand also appeared in an earlier
  version of this doc; it was wrong.
- ~~"Jump$tart standards AND CEE standards"~~ as two separate alignments. Since October 2021
  they are **one joint document**. Counting it twice is double-counting, and finance teachers
  know it.
- ~~"Aligned to 12 standards"~~. Long code lists read as padding and break the 3–5 rule.
- Any `MA:` Media Arts code, any NSPFE benchmark number, or any state CTE code — none are
  verified, so none may be printed. See the registry's `known_open_defects`.

---

## State CTE codes: the portable approach

CTE codes are set state by state, on independent revision cycles, with no national code
scheme. A business/entrepreneurship code that is real in Texas is invented in Georgia.
There is no version of "cite the CTE code" that is both accurate and portable, so we do not.

**For the entrepreneurship line instead:**

1. **Name the national Career Cluster in words, with no code.** The Advance CTE career
   clusters framework gives portable *language* — "Marketing", "Business Management &
   Administration", "Finance" — that a CTE teacher searches for and recognises. Naming a
   cluster is a true statement; citing a numbered CTE code is not.
2. **Carry the actual alignment weight on `CCSS-ELA`.** Entrepreneurship work in grades 6–8
   is argument writing, research, and presentation, which maps cleanly and verifiably:
   `W.*.1` (argument), `W.*.7` (short research projects), `SL.*.4` (present findings),
   `RI.*.7` / `RI.*.8` (evaluating claims and evidence in sources).
3. **Add `ISTE` 1.4 Innovative Designer** for the design-process and prototype-iteration
   parts of a venture lesson.
4. **Say the portability out loud in the listing** — it is a selling point, not a hedge:
   "Aligned to CCSS ELA and ISTE, so it drops into a CTE, business, or ELA elective in any
   state." Honest, reassuring to a CTE buyer, and it earns the search terms.
5. **If a buyer asks for their state's codes,** give them the CCSS and ISTE codes plus the
   cluster name and let them map it. Never guess a code on a buyer's behalf.

Same logic elsewhere: for state CS standards cite `CSTA` (which they were derived from);
for state arts standards cite `NCAS` anchors.

---

## Financial-literacy mandates as a demand signal

Why the finance line is worth building out — stated carefully, because this is where a true
market fact turns into a false product claim if you are sloppy.

- **The mandate wave is real and still moving.** Next Gen Personal Finance's Mission 2030
  tracks states that *guarantee* every public high schooler a standalone personal finance
  course. As of 2026 that is roughly **30 states**, with a larger group (around 39) requiring
  personal finance somewhere in graduation requirements, often folded into economics. NGPF's
  stated goal is universal coverage by 2030. Re-check before quoting any number:
  <https://www.ngpf.org/live-us-dashboard/>. **These figures move every legislative session —
  verify before printing one, and prefer not to print one at all.**
- **The signal for us is upstream, not the mandate itself.** Our band is 6–8; nearly every
  mandate is a high-school *course* requirement. The second-order effect is what matters and
  it is durable: districts adding a required HS course start building middle-school on-ramps,
  buy vocabulary- and habit-forming materials at 6–8, and push money-skills units into
  advisory, math, and social studies scope-and-sequence.
- **Use it as product strategy, not as copy.** Expect growing search volume for "middle
  school financial literacy", "personal finance 7th grade", "budgeting lesson middle school",
  "expected value middle school". Build for those. Then let the copy talk only about the
  standards we actually hit: "Aligned to CCSS 7.RP.A.3 and the National Standards for
  Personal Financial Education (2021), Topic: Spending."
- **Practical consequence:** the finance line leads with `CCSS-MATH` codes, because those are
  what a district can actually check off, and treats `NSPFE` as the framework that signals we
  know the field.

---

## Working with the registry

```
curriculum/standards-registry.yaml
  verification_policy   # what verified:true actually means — and what it does not
  frameworks            # ISTE, CSTA, CSTA-2026, CCSS-ELA, CCSS-MATH, NSPFE, NCAS, + aliases
  not_captured          # frameworks deliberately absent, with the reason
  counts                # per-framework totals, so drift is visible at a glance
  framework_aliases     # old key -> registry key (rename in product.yaml, not here)
  known_open_defects    # products currently shipping wrong standard text — fix these
```

**Adding a code.** Never add one because a lesson needs it. Retrieve the verbatim text from
two independent copies, confirm they match character for character, record both URLs under
that framework's `verification_copies`, then add the code with `verified: true`. With only
one copy, add it with `verified: false` and a `note` explaining why — and do not cite it in a
product until it is verified.

**`verified: true` in the registry means dual-source corroborated, not
publisher-PDF confirmed.** The session that built the registry could not reach `iste.org`,
`csteachers.org`, `corestandards.org`, `jumpstart.org`, `councilforeconed.org`,
`nationalartsstandards.org`, or any state DOE host. Every framework therefore carries
`primary_source_confirmed: false`. When those hosts are reachable, re-verify against the
primary PDFs and bump `registry_version`. Until then the text is trustworthy for printing,
but the provenance is one notch short of primary — so say "aligned to", never "verified
against the official publication".

**What is verified, and what is not** (full detail in the registry):

| Framework | Codes | Verbatim text verified | Gap |
|---|---|---|---|
| `ISTE` | 35 (7 strands + 28 indicators) | yes, all 35 | provenance is an ISTE Press reprint carrying the ISTE copyright notice, not iste.org |
| `CSTA` (2017) | 23 (complete Level 2) | yes, all 23 | — |
| `CSTA-2026` | 45 (complete MS band) | yes, all 45 | too new to lead with |
| `CCSS-ELA` | 144 (RI / W / SL, grades 6–8) | yes, all 144 | — |
| `CCSS-MATH` | 54 (6 & 7: RP, EE, SP) + 12 cluster headings | yes, all 54 | math typography normalised to ASCII (en-dash, curly quotes) |
| `NSPFE` | 6 topic names | topic names only | **no benchmark text or numbering** — content area only |
| `NCAS` | 11 anchor standards | yes, all 11 | **no Media Arts `MA:` grade-level codes** |
| CEE economics (20 standards) | 0 | — | not captured; verify before any use |
| State CTE | 0 | — | deliberately absent, see above |

## Grade band

Default grades 6–8; reading level ~6th grade on student-facing pages. CCSS ELA and Math are
grade-specific — pick the grade the product actually targets rather than defaulting to 6, and
if a product genuinely spans the band, list the code for each grade you claim. `CSTA` Level 2
is already the 6–8 band, and the `ISTE` and `NCAS` entries are grade-neutral by design.
