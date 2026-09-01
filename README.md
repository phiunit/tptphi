# Phi Unit Teaches the Future 🎛️📚

A product factory for a [TeachersPayTeachers](https://www.teacherspayteachers.com) store selling
**future-skills curriculum for grades 6–8** — AI literacy, personal finance & risk,
21st-century entrepreneurship, and game building — taught through hip-hop, anime, and
gaming culture, aligned to real standards (ISTE, CCSS, Jump$tart, CSTA).

**How it works:** lesson content lives as HTML + YAML in `products/`, gets rendered to
print-ready PDFs and cover art by Chromium, validated against a TPT-readiness checklist,
then uploaded via an attended browser-assist script. An AI agent (Claude Code + `CLAUDE.md`)
does the heavy lifting; a human clicks Publish.

## Quickstart
```bash
npm install
npm run render      # build all products → products/*/dist/
npm run validate    # TPT-readiness check
npm run new -- my-slug "My Title" finance   # scaffold a new product
npm run upload -- ai-prompting-101          # local machine only: pre-fills the TPT listing form
```

## Repo map
```
curriculum/catalog.yaml   product roadmap (3 waves, 4 lines)
products/<slug>/          product.yaml + src/*.html + dist/ (rendered)
brand/                    brand guide + shared print CSS
scripts/                  render / validate / upload / scaffold
docs/                     strategy, standards crosswalk, pipeline
CLAUDE.md                 the agent's operating manual
```

## First product (rendered, upload-ready)
**Wish Carefully: The Literal Genie AI Prompting Lesson (Grades 6–8)** — free launch lesson.
See `products/ai-prompting-101/dist/`.
