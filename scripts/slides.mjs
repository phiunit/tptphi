// Digital companion #2 — a projectable slide deck per lesson (.pptx opens natively in
// PowerPoint, Keynote and Google Slides). Content lives in products/<slug>/src/slides.yaml;
// this file owns the look, so every deck in the store matches. Built by `npm run render`;
// standalone: npm run slides [-- <slug>]
//
// Every drawing call goes through a recorder that writes the pptx AND an HTML twin with the same
// geometry, which is screenshotted to dist/review/slide-NN.png — the judge reviews pixels, and
// LibreOffice is not available in every sandbox. (Liberation Sans is metric-compatible with Arial,
// so wrapping in the preview matches PowerPoint closely; treat it as a layout check, not a pixel proof.)
//
// slides.yaml shape:
//   kicker: "The Literal Genie Lesson"      subtitle: "one sentence"     notes: "title-slide script"
//   title: "What's in the Playlist?"        (optional display title; default short_name)
//   slides:
//     - { type: hook,     title, headline, lines: [..], minutes, notes }
//     - { type: question, title, question, sub, minutes, notes }
//     - { type: quote,    quote, sub, minutes, notes }
//     - { type: cards,    title, items: [{ label, name, text }], minutes, notes }   # 2–4 items
//     - { type: steps,    title, items: [{ minutes, name, text }], minutes, notes } # 2–4 items
//     - { type: compare,  title, left: { heading, text }, right: { heading, text }, minutes, notes }
//     - { type: list,     title, items: [..], minutes, notes }                      # ≤ 6 items
//     - { type: closer,   statement, sub, notes }
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import pptxgen from 'pptxgenjs';
import { launch, listProducts } from './lib.mjs';

const C = { bg: '14141F', card: '262648', cardHi: '2F2A5C', gold: 'FFB020', ink: 'E8E8F5', muted: 'A9A9C4' };
const F = 'Arial';
const W = 10, H = 5.625, M = 0.55;
const LINE = { ai: 'AI Literacy', finance: 'Personal Finance', entrepreneur: 'Entrepreneurship', games: 'Game Design' };

// Rough fit: shrink the font until the text plausibly fits its box (Arial ≈ 0.52em per char).
function fit(text, wIn, hIn, base, min = 11, bold = false) {
  const t = String(text), letters = t.replace(/[^A-Za-z]/g, '') || 'a';
  const upper = (letters.replace(/[^A-Z]/g, '').length) / letters.length;
  const em = (bold ? 0.57 : 0.54) + 0.2 * upper;   // avg glyph width, em units
  let size = base;
  for (; size > min; size -= 1) {
    const cpl = Math.max(6, Math.floor((wIn * 72) / (size * em)));
    const lines = String(text).split('\n').reduce((n, l) => n + Math.max(1, Math.ceil(l.length / cpl)), 0);
    if ((lines * size * 1.25) / 72 <= hIn) break;
  }
  return size;
}

// One layout, two backends: pptxgenjs slide + HTML twin for review screenshots.
function recorder(sl) {
  const out = [];
  const px = v => (v * 96).toFixed(1) + 'px';
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return {
    bg(color) { sl.background = { color }; out.push(`<div style="position:absolute;inset:0;background:#${color}"></div>`); },
    text(text, o) {
      sl.addText(text, { fontFace: F, isTextBox: true, margin: 0, color: C.ink, valign: 'top', ...o });
      const jc = o.valign === 'middle' ? 'center' : o.valign === 'bottom' ? 'flex-end' : 'flex-start';
      const style = `left:${px(o.x)};top:${px(o.y)};width:${px(o.w)};height:${px(o.h)};font-size:${o.fontSize || 18}pt;color:#${o.color || C.ink};` +
        `font-weight:${o.bold ? 700 : 400};font-style:${o.italic ? 'italic' : 'normal'};text-align:${o.align || 'left'};letter-spacing:${(o.charSpacing || 0) * 0.75}pt;justify-content:${jc}`;
      const inner = Array.isArray(text)
        ? `<ul>${text.map(r => `<li style="margin-bottom:${(r.options && r.options.paraSpaceAfter) || 0}pt">${esc(r.text)}</li>`).join('')}</ul>`
        : esc(text).replace(/\n/g, '<br>');
      out.push(`<div class="t" style="${style}">${inner}</div>`);
    },
    shape(kind, o) {
      sl.addShape(kind, o);
      const r = kind === 'ellipse' ? '50%' : px(o.rectRadius || 0);
      const border = o.line && o.line.width ? `border:${o.line.width}px solid #${o.line.color};` : '';
      out.push(`<div style="position:absolute;left:${px(o.x)};top:${px(o.y)};width:${px(o.w)};height:${px(o.h)};border-radius:${r};background:#${o.fill.color};${border}box-sizing:border-box"></div>`);
    },
    image(o) { sl.addImage(o); out.push(`<img src="file://${o.path}" style="position:absolute;left:${px(o.x)};top:${px(o.y)};width:${px(o.w)};height:${px(o.h)};border-radius:${o.rounding ? '10px' : 0}">`); },
    notes(t) { sl.addNotes(String(t)); },
    html() { return out.join('\n'); },
  };
}
const pill = (S, text, x, y, w = 1.05) => {
  S.shape('roundRect', { x, y, w, h: 0.34, rectRadius: 0.17, line: { color: C.gold, width: 1.25 }, fill: { color: C.bg } });
  S.text(text, { x, y, w, h: 0.34, fontSize: 10, bold: true, color: C.gold, align: 'center', valign: 'middle' });
};
const circle = (S, label, x, y, d = 0.5) => {
  S.shape('ellipse', { x, y, w: d, h: d, fill: { color: C.gold }, line: { color: C.gold, width: 0 } });
  S.text(label, { x, y, w: d, h: d, fontSize: d > 0.45 ? 16 : 12, bold: true, color: C.bg, align: 'center', valign: 'middle' });
};

export async function buildSlides(p, distDir, outPath, page = null) {
  const yml = path.join(p.dir, 'src', 'slides.yaml');
  if (!fs.existsSync(yml)) return null;
  const deck = parse(fs.readFileSync(yml, 'utf8'));
  const meta = p.meta;
  const lineName = LINE[meta.line] || 'Future Skills';
  const caption = `FUTURE SKILLS · ${lineName.toUpperCase()}`;
  const short = deck.title || meta.short_name || String(meta.title).split(':')[0].trim(); // deck.title: display form (e.g. keeps a "?" the filename drops)
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Future Skills Series'; pres.company = 'Future Skills Series'; pres.title = `${short} — Slides`;
  const total = deck.slides.length + 1;
  const twins = [];
  let n = 0;
  const frame = ({ minutes, title, notes } = {}) => {
    const S = recorder(pres.addSlide()); twins.push(S); n++;
    S.bg(C.bg);
    S.text(caption, { x: M, y: 0.22, w: 5, h: 0.25, fontSize: 9, bold: true, color: C.muted, charSpacing: 2 });
    S.text(`${n} / ${total}`, { x: W - M - 1, y: H - 0.42, w: 1, h: 0.25, fontSize: 9, color: C.muted, align: 'right' });
    if (minutes) pill(S, `${minutes} MIN`, W - M - 1.05, 0.16);
    if (title) S.text(title, { x: M, y: 0.55, w: W - 2 * M - (minutes ? 1.2 : 0), h: 0.6, fontSize: fit(title, W - 2 * M - 1.2, 0.6, 26, 18, true), bold: true, color: C.gold, valign: 'middle' });
    if (notes) S.notes(notes);
    return S;
  };

  // 1 — Title slide: text left, the product cover as a card on the right
  {
    const S = frame({ notes: deck.notes || `Open on this slide. ${deck.subtitle || ''}` });
    const cover = fs.readdirSync(distDir).find(f => f.endsWith(' - Cover.png'));
    const coverW = 3.4, coverH = coverW * 1100 / 850;
    if (cover) S.image({ path: path.join(distDir, cover), x: W - M - coverW, y: (H - coverH) / 2 + 0.05, w: coverW, h: coverH, rounding: true });
    const tw = W - 2 * M - coverW - 0.45;
    if (deck.kicker) S.text(String(deck.kicker).toUpperCase(), { x: M, y: 1.15, w: tw, h: 0.3, fontSize: 11, bold: true, color: C.muted, charSpacing: 3 });
    S.text(short, { x: M, y: 1.5, w: tw, h: 1.5, fontSize: fit(short, tw, 1.5, 40, 28, true), bold: true, color: 'FFFFFF', valign: 'middle' });
    if (deck.subtitle) S.text(deck.subtitle, { x: M, y: 3.1, w: tw, h: 1.0, fontSize: fit(deck.subtitle, tw, 1.0, 15, 12), color: C.ink });
    const chips = [`Grades ${String(meta.grades || '6–8').replace('-', '–')}`, `${meta.minutes || 45}-min lesson`, 'No prep · No devices needed'];
    let cx = M; for (const c of chips) { const w = Math.max(1.05, c.length * 0.085 + 0.35); pill(S, c, cx, 4.35, w); cx += w + 0.15; }
  }

  // Content limits from docs/ANTI_SLOP.md — checked up front so the failure names the slide
  const tooLong = [];
  deck.slides.forEach((s, i) => {
    const n = i + 2, over = (label, t, max) => { if (t && String(t).length > max) tooLong.push(`slide ${n} ${label}: ${String(t).length} chars > ${max}`); };
    if (s.type === 'cards') { const max = (s.items || []).length >= 4 ? 90 : 140; (s.items || []).forEach((it, j) => { over(`card ${j + 1} text`, it.text, max); over(`card ${j + 1} name`, it.name, 24); }); }
    if (s.type === 'list') { if ((s.items || []).length > 6) tooLong.push(`slide ${n}: ${s.items.length} bullets > 6`); (s.items || []).forEach((t, j) => over(`item ${j + 1}`, t, 110)); }
    if (s.type === 'hook') { over('headline', s.headline, 90); (s.lines || []).forEach((t, j) => over(`line ${j + 1}`, t, 110)); }
    if (s.type === 'quote') over('quote', s.quote, 80);
    if (s.type === 'steps') (s.items || []).forEach((it, j) => over(`step ${j + 1} text`, it.text, 150));
    if (s.type === 'compare') { over('left text', s.left && s.left.text, 170); over('right text', s.right && s.right.text, 170); }
  });
  if (tooLong.length) throw new Error(`CONTENT FAIL ${p.slug}/src/slides.yaml:\n  - ` + tooLong.join('\n  - '));

  for (const s of deck.slides) {
    const S = frame(s);
    const top = s.title ? 1.3 : 0.75, bodyH = H - top - 0.6, bw = W - 2 * M;
    switch (s.type) {
      case 'hook': {
        const lines = s.lines || [];
        const headH = lines.length ? 0.9 : bodyH;
        if (s.headline) S.text(s.headline, { x: M, y: top, w: bw, h: headH, fontSize: fit(s.headline, bw, headH, 24, 16, true), bold: true, color: 'FFFFFF', valign: 'middle' });
        const cardH = Math.min(0.72, (bodyH - headH - 0.1 * lines.length) / Math.max(1, lines.length));
        lines.forEach((l, i) => {
          const y = top + headH + 0.1 + i * (cardH + 0.1);
          S.shape('roundRect', { x: M, y, w: bw, h: cardH, rectRadius: 0.12, fill: { color: C.card }, line: { color: C.card, width: 0 } });
          S.text(l, { x: M + 0.25, y, w: bw - 0.5, h: cardH, fontSize: fit(l, bw - 0.5, cardH - 0.1, 15, 11), color: C.ink, valign: 'middle' });
        });
        break;
      }
      case 'question': {
        S.text('?', { x: M, y: top - 0.1, w: 1.2, h: 1.9, fontSize: 96, bold: true, color: C.gold, valign: 'top' });
        const qx = M + 1.35, qw = bw - 1.35, qh = s.sub ? bodyH * 0.55 : bodyH;
        S.text(s.question, { x: qx, y: top, w: qw, h: qh, fontSize: fit(s.question, qw, qh, 30, 18, true), bold: true, color: 'FFFFFF', valign: 'middle' });
        if (s.sub) S.text(s.sub, { x: qx, y: top + qh + 0.15, w: qw, h: bodyH - qh - 0.15, fontSize: fit(s.sub, qw, bodyH - qh - 0.2, 16, 12), color: C.muted });
        break;
      }
      case 'quote': {
        S.text('“', { x: M, y: top - 0.25, w: 1.1, h: 2.2, fontSize: 110, bold: true, color: C.gold });
        const qx = M + 1.15, qw = bw - 1.15, qh = s.sub ? bodyH * 0.58 : bodyH;
        S.text(s.quote, { x: qx, y: top, w: qw, h: qh, fontSize: fit(s.quote, qw, qh, 28, 16), italic: true, color: 'FFFFFF', valign: 'middle' });
        if (s.sub) S.text(s.sub, { x: qx, y: top + qh + 0.15, w: qw, h: bodyH - qh - 0.15, fontSize: fit(s.sub, qw, bodyH - qh - 0.2, 15, 12), color: C.muted });
        break;
      }
      case 'cards': {
        const items = s.items || [], gap = 0.25, cw = (bw - gap * (items.length - 1)) / items.length;
        items.forEach((it, i) => {
          const x = M + i * (cw + gap);
          S.shape('roundRect', { x, y: top, w: cw, h: bodyH, rectRadius: 0.14, fill: { color: C.card }, line: { color: C.card, width: 0 } });
          if (it.label) circle(S, String(it.label), x + 0.25, top + 0.25, 0.55);
          S.text(it.name || '', { x: x + 0.25, y: top + 0.95, w: cw - 0.5, h: 0.5, fontSize: fit(it.name || '', cw - 0.5, 0.5, 17, 11, true), bold: true, color: C.gold, valign: 'middle' });
          S.text(it.text || '', { x: x + 0.25, y: top + 1.5, w: cw - 0.5, h: bodyH - 1.75, fontSize: fit(it.text || '', cw - 0.5, bodyH - 1.85, 14, 10), color: C.ink });
        });
        break;
      }
      case 'steps': {
        const items = s.items || [], rowH = Math.min(1.05, (bodyH - 0.1 * (items.length - 1)) / items.length);
        items.forEach((it, i) => {
          const y = top + i * (rowH + 0.1);
          circle(S, String(i + 1), M, y + 0.05, 0.5);
          const head = it.name + (it.minutes ? `   ·   ${it.minutes} min` : '');
          S.text(head, { x: M + 0.7, y, w: bw - 0.7, h: 0.35, fontSize: 15, bold: true, color: C.gold, valign: 'middle' });
          S.text(it.text || '', { x: M + 0.7, y: y + 0.36, w: bw - 0.7, h: rowH - 0.38, fontSize: fit(it.text || '', bw - 0.7, rowH - 0.42, 13, 10), color: C.ink });
        });
        break;
      }
      case 'compare': {
        const cw = (bw - 0.3) / 2;
        [[s.left, M, C.card, C.muted], [s.right, M + cw + 0.3, C.cardHi, C.gold]].forEach(([side, x, fillC, headC]) => {
          if (!side) return;
          const hi = headC === C.gold;
          S.shape('roundRect', { x, y: top, w: cw, h: bodyH, rectRadius: 0.14, fill: { color: fillC }, line: { color: hi ? C.gold : fillC, width: hi ? 1.5 : 0 } });
          S.text(side.heading || '', { x: x + 0.25, y: top + 0.2, w: cw - 0.5, h: 0.4, fontSize: 13, bold: true, color: headC, charSpacing: 1 });
          S.text(side.text || '', { x: x + 0.25, y: top + 0.7, w: cw - 0.5, h: bodyH - 0.9, fontSize: fit(side.text || '', cw - 0.5, bodyH - 1.0, 17, 11), color: 'FFFFFF' });
        });
        break;
      }
      case 'list': {
        const items = (s.items || []).map((t, i, a) => ({ text: String(t), options: { bullet: { code: '25A0' }, breakLine: i < a.length - 1, paraSpaceAfter: 8 } }));
        const size = fit((s.items || []).join('\n'), bw - 0.4, bodyH, 18, 12);
        S.text(items, { x: M + 0.1, y: top, w: bw - 0.2, h: bodyH, fontSize: size, color: C.ink });
        break;
      }
      case 'closer': {
        S.shape('ellipse', { x: W - 2.2, y: -1.2, w: 3.6, h: 3.6, fill: { color: C.card }, line: { color: C.card, width: 0 } });
        S.text(s.statement || '', { x: M, y: 1.2, w: bw - 1.6, h: 2.2, fontSize: fit(s.statement || '', bw - 1.6, 2.2, 34, 20, true), bold: true, color: C.gold, valign: 'middle' });
        if (s.sub) S.text(s.sub, { x: M, y: 3.5, w: bw - 0.5, h: 1.2, fontSize: fit(s.sub, bw - 0.5, 1.2, 16, 12), color: C.ink });
        break;
      }
      default:
        throw new Error(`${p.slug}/src/slides.yaml: unknown slide type "${s.type}"`);
    }
  }
  await pres.writeFile({ fileName: outPath });

  // HTML twin → review screenshots (dist/review/slide-NN.png)
  if (page) {
    const reviewDir = path.join(distDir, 'review'); fs.mkdirSync(reviewDir, { recursive: true });
    for (const old of fs.readdirSync(reviewDir).filter(f => /^slide-\d+\.png$/.test(f))) fs.rmSync(path.join(reviewDir, old));
    const html = `<!doctype html><meta charset="utf-8"><style>
      body{margin:0;background:#000} .slide{position:relative;width:960px;height:540px;overflow:hidden;font-family:Arial,"Liberation Sans",sans-serif}
      .t{position:absolute;display:flex;flex-direction:column;line-height:1.2;white-space:pre-wrap} .t ul{margin:0;padding-left:1.1em} .t li{list-style:square}
    </style>${twins.map(S => `<div class="slide">${S.html()}</div>`).join('\n')}`;
    const tmp = path.join(reviewDir, '.slides.html'); fs.writeFileSync(tmp, html);
    await page.setViewportSize({ width: 960, height: 540 });
    await page.goto('file://' + tmp, { waitUntil: 'networkidle' });
    const slides = await page.$$('.slide');
    for (let i = 0; i < slides.length; i++) await slides[i].screenshot({ path: path.join(reviewDir, `slide-${String(i + 1).padStart(2, '0')}.png`) });
    // Layout gate (ANTI_SLOP rule 5 for decks): no text box may overflow its frame or the slide.
    const overflow = await page.evaluate(() => [...document.querySelectorAll('.slide')].flatMap((sl, i) =>
      [...sl.querySelectorAll('.t')].filter(t => t.scrollHeight > t.clientHeight + 2 || t.scrollWidth > t.clientWidth + 2)
        .map(t => `slide ${i + 1}: text overflows its box by ${Math.max(t.scrollHeight - t.clientHeight, t.scrollWidth - t.clientWidth)}px — "${t.innerText.trim().slice(0, 60)}…"`)));
    fs.rmSync(tmp);
    if (overflow.length) throw new Error(`LAYOUT FAIL ${p.slug}/src/slides.yaml:\n  - ` + overflow.join('\n  - '));
  }
  return { file: outPath, count: total };
}

if (process.argv[1] && path.basename(process.argv[1]) === 'slides.mjs') {
  const slug = process.argv[2];
  const browser = await launch(); const page = await browser.newPage();
  for (const p of listProducts(slug)) {
    const distDir = path.join(p.dir, 'dist'); fs.mkdirSync(distDir, { recursive: true });
    const short = (p.meta.short_name || String(p.meta.title).split(':')[0]).trim().replace(/[\/:*?"<>|]/g, '');
    const r = await buildSlides(p, distDir, path.join(distDir, `${short} - Slides.pptx`), page);
    if (r) console.log(`DECK ${path.relative(process.cwd(), r.file)} (${r.count} slides + review PNGs)`);
  }
  await browser.close();
}
