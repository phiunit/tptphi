// Digital companion #1 — typeable worksheets.
// Lays real PDF form fields over every write-in box the print layout already draws, so the
// SAME worksheet works on paper and typed in any PDF viewer (Chromebook, iPad, Preview,
// Acrobat). No platform, no login, no student AI account — fits districts with screen caps.
// Runs inside `npm run render` after each worksheet PDF; standalone: npm run fillable [-- <slug>]
import fs from 'node:fs';
import path from 'node:path';
import { PDFDocument, PDFName, StandardFonts, rgb } from 'pdf-lib';
import { launch, listProducts } from './lib.mjs';

// Every write-in idiom used across products (see brand/templates/print.css + per-product CSS).
export const WRITE_IN = ['.writebox', '.lines .l', '.wline', '.blank', 'td.slot', 'td.logslot', '.worktable td', '.write', 'td.tick'];
const PX_TO_PT = 0.75; // 96dpi CSS px → 72pt

// Measure write-in boxes in the rendered HTML, relative to their .page (one .page = one PDF page;
// the render layout gate guarantees each .page is exactly US Letter).
async function measureFields(page) {
  return page.evaluate((sels) => {
    const pages = [...document.querySelectorAll('.page')];
    const seen = new Set(); const out = [];
    const push = (pg, r, top, extra) => {
      const pr = pg.getBoundingClientRect();
      out.push({ page: pages.indexOf(pg), x: r.left - pr.left, y: top - pr.top, w: r.width, h: r.bottom - top,
                 cx: r.left - pr.left + r.width / 2, cy: r.top - pr.top + r.height / 2, check: false, multi: (r.bottom - top) > 34, ...extra });
    };
    for (const sel of sels) for (const el of document.querySelectorAll(sel)) {
      if (seen.has(el)) continue;
      const pg = el.closest('.page'); if (!pg) continue;
      const check = el.matches('td.tick');
      // Table cells double as labels; only EMPTY cells are write-in targets.
      if (!check && el.tagName === 'TD' && el.textContent.trim() !== '') continue;
      seen.add(el);
      const r = el.getBoundingClientRect();
      let top = r.top;
      // A box may carry a printed label (e.g. .boxlabel) — start the field below it.
      for (const kid of el.children) { const kr = kid.getBoundingClientRect(); if (kid.textContent.trim() && kr.bottom > top && kr.bottom < r.bottom - 12) top = kr.bottom; }
      // Empty inline blanks (.blank) have no height — the field sits on the underline.
      if (r.bottom - top < 8) top = r.bottom - 18;
      push(pg, r, top, { check });
    }
    // Underscore runs in prose ("Name: ________") are write-ins too.
    for (const pg of pages) {
      const walker = document.createTreeWalker(pg, NodeFilter.SHOW_TEXT);
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (n.parentElement.closest('svg, .footer, .masthead')) continue;
        const re = /_{3,}/g; let m;
        while ((m = re.exec(n.nodeValue))) {
          const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length);
          const rr = rg.getBoundingClientRect(); if (rr.width > 20) push(pg, rr, rr.top, {});
        }
      }
    }
    return out.sort((a, b) => a.page - b.page || a.y - b.y || a.x - b.x);
  }, WRITE_IN);
}

export async function makeFillable(page, htmlPath, pdfIn, pdfOut) {
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  const fields = await measureFields(page);
  if (!fields.length) return 0;
  const pdf = await PDFDocument.load(fs.readFileSync(pdfIn));
  const form = pdf.getForm();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  let n = 0;
  for (const f of fields) {
    const pg = pdf.getPage(f.page); const H = pg.getSize().height; const S = PX_TO_PT;
    const name = `p${f.page + 1}_${String(n + 1).padStart(2, '0')}`;
    if (f.check) {
      const cb = form.createCheckBox(name);
      cb.addToPage(pg, { x: f.cx * S - 6, y: H - f.cy * S - 6, width: 12, height: 12, borderWidth: 0 });
      cb.acroField.getWidgets().at(-1).dict.delete(PDFName.of('MK'));
      cb.defaultUpdateAppearances();
    } else {
      const pad = 1.5;
      const x = f.x * S + pad, w = f.w * S - 2 * pad, h = f.h * S - 2 * pad, y = H - (f.y + f.h) * S + pad;
      if (w < 10 || h < 7) continue;
      const tf = form.createTextField(name);
      if (f.multi) tf.enableMultiline();
      // No borderColor / backgroundColor → transparent widget: the printed box stays the visual.
      tf.addToPage(pg, { x, y, width: w, height: h, borderWidth: 0, textColor: rgb(0.08, 0.08, 0.12), font });
      // pdf-lib still writes a white background + black border into /MK; drop it so the widget is
      // truly transparent and the printed box (grey panels included) stays the only visual.
      tf.acroField.getWidgets().at(-1).dict.delete(PDFName.of('MK'));
      tf.defaultUpdateAppearances(font);      // writes the /DA entry setFontSize needs
      tf.setFontSize(f.multi ? 10 : 9.5);
    }
    n++;
  }
  form.updateFieldAppearances(font);
  pdf.setTitle(path.basename(pdfOut, '.pdf'));
  fs.writeFileSync(pdfOut, await pdf.save());
  return n;
}

// Standalone entry point
if (process.argv[1] && path.basename(process.argv[1]) === 'fillable.mjs') {
  const slug = process.argv[2];
  const browser = await launch(); const page = await browser.newPage();
  for (const p of listProducts(slug)) {
    const srcDir = path.join(p.dir, 'src'), distDir = path.join(p.dir, 'dist');
    for (const f of fs.readdirSync(srcDir).filter(f => /^worksheet.*\.html$/.test(f))) {
      const pdfIn = fs.readdirSync(distDir).find(d => d.endsWith(' - Worksheet.pdf'));
      if (!pdfIn) { console.warn(`skip ${p.slug}: render the worksheet first`); continue; }
      const out = path.join(distDir, pdfIn.replace(/\.pdf$/, ' (Fillable).pdf'));
      const n = await makeFillable(page, path.join(srcDir, f), path.join(distDir, pdfIn), out);
      console.log(`FORM ${path.relative(process.cwd(), out)} (${n} fields)`);
    }
  }
  await browser.close();
}
