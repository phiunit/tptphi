// Scaffold a new product folder: npm run new -- <slug> "<Title>" <line>
// line ∈ ai | finance | entrepreneur | games
import fs from 'node:fs';
import path from 'node:path';
import { PRODUCTS_DIR } from './lib.mjs';

const [slug, title = 'Untitled', line = 'ai'] = process.argv.slice(2);
if (!slug) { console.error('Usage: npm run new -- <slug> "<Title>" <line>'); process.exit(1); }
const dir = path.join(PRODUCTS_DIR, slug);
if (fs.existsSync(dir)) { console.error('Already exists: ' + slug); process.exit(1); }
fs.mkdirSync(path.join(dir, 'src'), { recursive: true });
fs.mkdirSync(path.join(dir, 'dist'), { recursive: true });
fs.writeFileSync(path.join(dir, 'product.yaml'), `title: "${title}"
line: ${line}            # ai | finance | entrepreneur | games
grades: "6-8"
price_usd: 4.00          # 0 = freebie
status: draft            # draft | rendered | listed
resource_types: [Lesson, Worksheets, Activities]
tags: []
standards: []            # - { framework: ISTE, code: 1.5.c, text: "..." }
description: |
  (400+ chars. Hook line, what's included, teacher prep time, standards, grade fit.)
includes: []
`);
console.log('Scaffolded products/' + slug + ' — add src/*.html pages (see products/ai-prompting-101 as the reference).');
