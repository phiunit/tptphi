# The Product Factory — How It Works

```
catalog.yaml (roadmap)
   │  pick next product (priority order)
   ▼
products/<slug>/product.yaml        ← metadata: title, price, tags, standards, TPT description
products/<slug>/src/*.html          ← lesson plan, worksheets, teacher guide, cover (brand CSS)
   │  npm run render -- <slug>
   ▼
products/<slug>/dist/               ← print-ready PDFs + cover/preview PNGs
   │  npm run validate -- <slug>    ← completeness + TPT-readiness checklist
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

## Renderer notes
- `scripts/render.mjs` uses Chromium via playwright-core. In Claude Code cloud sessions
  the browser is at `/opt/pw-browsers/chromium`; locally set `CHROMIUM_PATH` in `.env`
  or install Chrome.
- `*.cover.html` / `*.preview*.html` render to PNG (850×1100); everything else to
  US-Letter PDF with backgrounds on.
