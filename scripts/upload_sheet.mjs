// Generate a paste-ready TPT upload sheet from product.yaml.
// Usage: npm run sheet [-- <slug>]
import fs from 'node:fs';
import path from 'node:path';
import { listProducts } from './lib.mjs';

const SUBJECTS = {
  ai: 'Computer Science - Technology → Instructional Technology; Critical Thinking; English Language Arts → Writing',
  finance: 'Math → Applied Math; Social Studies - History → Economics; Life Skills',
  entrepreneur: 'Career and Technical Education → Business; English Language Arts → Writing; Life Skills',
  games: 'Computer Science - Technology → Computer Science; Arts & Music → Media Arts; Math',
};
for (const p of listProducts(process.argv[2])) {
  const m = p.meta;
  const dist = fs.existsSync(path.join(p.dir, 'dist')) ? fs.readdirSync(path.join(p.dir, 'dist')) : [];
  const files = dist.filter(f => f.endsWith('.pdf'));
  const zip = dist.find(f => f.endsWith('.zip'));
  const cover = dist.find(f => f.toLowerCase().includes('cover'));
  const ccss = (m.standards || []).filter(s => /CCSS/i.test(s.framework)).map(s => s.code);
  const other = (m.standards || []).filter(s => !/CCSS/i.test(s.framework)).map(s => `${s.framework} ${s.code}`);
  // ELA subject follows the strand actually aligned (RI ≠ Writing)
  const ELA = { RI: 'English Language Arts → Reading (Informational Text)', RL: 'English Language Arts → Reading (Literature)', W: 'English Language Arts → Writing', SL: 'English Language Arts → Oral Communication (Speaking & Listening)', L: 'English Language Arts → Vocabulary' };
  const strands = [...new Set(ccss.map(c => c.split('.')[0]))].map(k => ELA[k]).filter(Boolean);
  const subjects = strands.length ? (SUBJECTS[m.line] || '').replace('English Language Arts → Writing', strands.join('; ')) : (SUBJECTS[m.line] || '(set by line)');
  const zipNote = m.bundle_of ? 'carries the Unit Overview only — the lessons attach as TPT bundle children'
    : 'one zip with every file; TPT takes a single upload for free and paid listings alike';
  const out = `# Upload Sheet — ${m.short_name || m.title}
Generated from product.yaml. Fields in TPT "Add new product" order.

**Title** (${m.title.length} chars — TPT max ~80)
\`\`\`
${m.title}
\`\`\`

**Price:** ${m.price_usd === 0 ? 'FREE' : '$' + Number(m.price_usd).toFixed(2)}

**Grades:** ${String(m.grades).split('-').join(', ').replace('6, 8', '6, 7, 8')}

**File(s) to upload:**
${zip ? `- \`dist/${zip}\`  (${zipNote})` : files.map(f => `- \`dist/${f}\``).join('\n')}

**Custom cover (optional):** ${cover ? `\`dist/${cover}\`` : '— none rendered —'}

**Resource types:** ${(m.resource_types || []).join(', ')}

**Subjects (TPT picker):** ${subjects}

**Standards:** select in TPT's picker → ${ccss.length ? ccss.map(c => 'CCSS ' + c).join(', ') : '(none — CCSS only in picker)'}
${other.length ? `Not in TPT's picker (they live in the description + teacher guide, which is normal): ${other.join(', ')}` : ''}

**Tags / keywords:**
\`\`\`
${(m.tags || []).join(', ')}
\`\`\`

**Description** — paste the \`description:\` block from \`products/${p.slug}/product.yaml\`
(${String(m.description || '').length} chars; TPT shows only the first ~2 lines before "read more" — the second sentence must name THIS lesson's activity.)

${m.bundle_of ? `**Bundle contents** — add these products to the bundle in TPT:\n${m.bundle_of.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n> HUMAN GATE: TPT's bundle tool has historically refused FREE products as bundle children. If it refuses the free lesson, either add that lesson's PDFs + deck to the bundle zip before upload, or list a $4 twin of it for bundling and keep the freebie separate — otherwise "6 lessons" is false at checkout.\n` : ''}
## Before you hit Publish
- [ ] Title reads clean in the search-results preview
- [ ] Cover legible at thumbnail size
- [ ] Price and grade band correct
- [ ] Preview file shows student-facing pages (not just the cover)
- [ ] Description's first two lines carry the hook
`;
  fs.writeFileSync(path.join(p.dir, 'UPLOAD_SHEET.md'), out);
  console.log('sheet →', p.slug, `(title ${m.title.length} chars)`);
}
