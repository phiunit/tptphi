# Standards Crosswalk — what to align each line to

| Line | Primary frameworks | Notes |
|---|---|---|
| AI Literacy & Vibe Coding | **ISTE Standards for Students** (1.1 Empowered Learner, 1.5 Computational Thinker, 1.6 Creative Communicator), **CSTA** (6-8: 2-AP, 2-IC Impacts of Computing) | ISTE is the safest cite for AI lessons; CSTA 2-IC-20/21 covers AI ethics & bias |
| Personal Finance & Risk | **Jump$tart National Standards in Personal Financial Education (2021)**, **CEE National Standards for Personal Financial Education**, CCSS Math (6.RP ratios, 7.SP probability) | Name the state requirement in descriptions ("meets financial literacy requirements") |
| Entrepreneurship | State **CTE Business/Marketing** clusters, CCSS ELA (W.6-8.1 argument, SL.6-8.4 presentation), ISTE 1.4 Innovative Designer | CTE codes vary by state — cite national cluster + CCSS ELA for portability |
| Game Building | **CSTA** (2-AP-10 flowcharts/decomposition, 2-AP-13 decompose problems), ISTE 1.4, **NCAS** Media Arts (Cr1, Cr2), CCSS Math for balance lessons | Game balance = ratios/expected value → double-dips into math standards |

## Rules for the agent
1. 3–5 standards per product. Real codes, real text, verified — never invent a code.
2. Put codes in: product description (top third), lesson plan chips, teacher guide (full text).
3. CCSS ELA/Math travel best across states; ISTE for anything tech; Jump$tart/CEE for money.
4. Grades 6–8: use grade-6 anchor for CCSS unless product targets 7/8 specifically.


## ⚠️ CSTA 2026 revision — action required before the next CS-heavy product
CSTA released the **2026 PK–12 Computer Science Standards** (first revision since 2017) at its 2026
annual conference. Structure changed: Algorithms & Design is now its own concept (split from
Programming), Computing Systems + Networks merged into **Systems & Security**, and Ethics & Social
Responsibility is elevated — which is directly relevant to our AI line.

Our products currently cite **2017** codes (2-IC-20, 2-IC-21, 2-AP-*). Those remain valid and are
what most states and every competitor still reference, so shipped products are not wrong. But:
- Do **NOT** guess 2026 code strings. Pull them from the official PDF:
  https://csteachers.org/wp-content/uploads/2026/07/2026-CSTA-PK%E2%80%9312-Computer-Science-Standards.pdf
- Add verified 2026 codes to `curriculum/standards-registry.yaml` alongside the 2017 set, then cite
  both in new products ("aligned to CSTA 2017 and 2026") — most sellers won't update, so this is a
  differentiator as well as hygiene.
