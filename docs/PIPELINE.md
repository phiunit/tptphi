# The Product Factory — How It Works

```
catalog.yaml (roadmap)
   │  pick next product (priority order)
   ▼
products/<slug>/product.yaml        ← metadata: title, price, tags, standards, TPT description
products/<slug>/src/*.html          ← lesson plan, worksheets, teacher guide, cover (brand CSS)
   │  npm run render -- <slug>
   ▼
products/<slug>/dist/               ← print-ready PDFs + cover PNG
                                      + "<Lesson> - Worksheet (Fillable).pdf"  (typeable form fields laid over every write-in box)
                                      + "<Lesson> - Slides.pptx"               (projectable deck, from src/slides.yaml)
                                      + "<Lesson> (Future Skills).zip"         (everything above, ready for the TPT upload)
   │  npm run validate -- <slug>    ← listing, standards (verbatim), status, retired terms
   │  npm run readability / judge / preview   ← FK ≤ 8.5 on student pages, page screenshots, watermarked TPT preview PDF
   │  npm run audit [-- <slug>]     ← all of the above in order; what CI runs
   ▼
npm run upload -- <slug>            ← ATTENDED, LOCAL ONLY: opens browser, pre-fills the
                                      TPT listing form; YOU review and click Publish
```

## Working on the go (the agent loop)
Open this repo in Claude Code (web or phone) and say things like:
- *"Build the next priority product from the catalog"* — Claude writes product.yaml + src pages, renders, validates, commits.
- *"Outline wave 2 of the finance line"* — Claude updates catalog.yaml with new product specs.
- *"Punch up the description for ai-prompting-101 for TPT SEO"*

CLAUDE.md tells the agent the rules (brand, structure, quality bar) so every session produces consistent output.

## Upload step (on your machine)
1. Clone the repo locally, `npm install`, copy `.env.example` → `.env`.
2. `npm run upload -- <slug>` opens a visible browser and pre-fills what it can.
3. You set categories/standards by hand and click Publish.
4. Mark the product `status: listed` in catalog.yaml and commit.

**Risk note (decided 2026-09-01):** TPT has no official API; automated interaction likely
violates their ToS. Phi chose browser automation with eyes open — the script is
attended-only and never auto-publishes to keep the risk as low as possible.

## Digital companion (decided 2026-09-03)
Paper stays the headline — the research cut against betting on a platform (teacher preference
splits ~50/50 between Boom and Google Slides; NYC capped grades 6–8 screen time and banned
student AI tools for 2026–27). Digital is the *optional second file* in every zip:
- **Fillable worksheet** — `scripts/fillable.mjs` runs inside render. It measures every write-in
  idiom in the HTML (`.writebox`, `.lines .l`, `.wline`, `.blank`, empty `td.slot / td.logslot /
  .worktable td`, `.write`, `td.tick` → checkbox) and lays transparent AcroForm fields at the same
  coordinates on the rendered PDF with pdf-lib. Works in any PDF viewer; no login, no platform.
  New write-in CSS idiom in a product? Add its selector to `WRITE_IN` or it won't be typeable.
- **Slide deck** — `scripts/slides.mjs` builds a 16:9 .pptx (opens in PowerPoint, Keynote, Google
  Slides) from `products/<slug>/src/slides.yaml`: one slide per lesson moment, minutes on each,
  teacher script in speaker notes, the cover PNG on the title slide. Schema is documented at the
  top of slides.mjs; `products/ai-prompting-101/src/slides.yaml` is the reference. Arial only
  (no Space Grotesk in .pptx — fonts are rendered by the buyer's machine).
- **TPT Easel** — zero-effort third layer: TPT can overlay its own interactivity on our PDFs at
  upload time. Enable it on the listing; nothing to build.
- Not doing: Boom Cards (per-platform authoring, subscription-gated) or a hosted web app (TPT
  products must be downloadable files).

## Audit as infrastructure (decided 2026-09-03)
`npm run audit` = render → validate → readability → judge → preview, stopping at the first red gate.
`.github/workflows/audit.yml` runs it on every push, every pull request, and every Monday
(11:00 UTC), on a clean Ubuntu runner with Chromium installed for playwright-core, and uploads
the review screenshots + preview PDFs as a build artifact. Red CI = a product is not shippable.
Two honesty gates came out of the independent audits and live in validate/render: retired terms
(`brand/RETIRED_TERMS.txt` + per-product `retired_terms`) fail the build if a dropped analogy or
the store name reappears in materials; cover art *and decorative dots* must clear every text line
by 12px.

## Renderer notes
- `scripts/render.mjs` uses Chromium via playwright-core. In Claude Code cloud sessions
  the browser is at `/opt/pw-browsers/chromium`; locally set `CHROMIUM_PATH` in `.env`
  or install Chrome.
- `*.cover.html` / `*.preview*.html` render to PNG (850×1100); everything else to
  US-Letter PDF with backgrounds on.
