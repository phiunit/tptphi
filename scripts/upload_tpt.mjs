// TPT listing upload assist — ATTENDED, LOCAL-ONLY.
// ---------------------------------------------------------------
// Run this on YOUR machine with YOUR login. It opens a visible
// browser, signs in (or reuses a saved session), navigates to the
// new-product form, and pre-fills everything from product.yaml.
// It NEVER clicks Publish — you review and submit by hand.
//
// Heads up: TPT has no official API and its Terms of Service likely
// prohibit automated interaction. Attended form-filling on your own
// account is the lowest-risk flavor of this, but the risk (up to
// store suspension) is yours. Selectors below WILL need adjusting
// against the live dashboard — TPT changes markup without notice.
//
// Usage:  node scripts/upload_tpt.mjs <product-slug>
// Env:    TPT_EMAIL, TPT_PASSWORD in .env (or log in manually when
//         the browser opens — the session is saved to .tpt-session/).
// ---------------------------------------------------------------
import fs from 'node:fs';
import path from 'node:path';
import { launch, listProducts, ROOT } from './lib.mjs';

// Load .env without a dependency
const envPath = path.join(ROOT, '.env');
if (fs.existsSync(envPath)) for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const slug = process.argv[2];
if (!slug) { console.error('Usage: node scripts/upload_tpt.mjs <product-slug>'); process.exit(1); }
const [product] = listProducts(slug);
if (!product) { console.error(`No product "${slug}"`); process.exit(1); }
const { meta, dir } = product;

// --- Selectors: update these against the live seller dashboard ---
const SEL = {
  loginEmail: 'input[name="email"], input[type="email"]',
  loginPassword: 'input[name="password"], input[type="password"]',
  loginSubmit: 'button[type="submit"]',
  title: 'input[name="name"], input[name="title"]',
  description: 'textarea[name="description"], [contenteditable="true"]',
  price: 'input[name="price"]',
  fileInput: 'input[type="file"]',
};
const URLS = {
  login: 'https://www.teacherspayteachers.com/Login',
  newProduct: 'https://www.teacherspayteachers.com/My-Products/New',
};

const sessionDir = path.join(ROOT, '.tpt-session');
fs.mkdirSync(sessionDir, { recursive: true });
const statePath = path.join(sessionDir, 'state.json');

const browser = await launch({ headless: false });
const context = await browser.newContext(fs.existsSync(statePath) ? { storageState: statePath } : {});
const page = await context.newPage();

// 1) Sign in (reuse saved session when possible)
await page.goto(URLS.newProduct);
if (page.url().includes('Login') || page.url().includes('login')) {
  if (process.env.TPT_EMAIL && process.env.TPT_PASSWORD) {
    await page.fill(SEL.loginEmail, process.env.TPT_EMAIL);
    await page.fill(SEL.loginPassword, process.env.TPT_PASSWORD);
    await page.click(SEL.loginSubmit);
  } else {
    console.log('No TPT_EMAIL/TPT_PASSWORD in .env — log in manually in the browser window.');
  }
  await page.waitForURL(u => !String(u).toLowerCase().includes('login'), { timeout: 180_000 });
  await context.storageState({ path: statePath });
  await page.goto(URLS.newProduct);
}

// 2) Pre-fill the listing form (best-effort; anything that misses, fill by hand)
async function tryFill(selector, value, label) {
  try { await page.fill(selector, String(value), { timeout: 5000 }); console.log(`  filled ${label}`); }
  catch { console.log(`  ! could not auto-fill ${label} — fill manually`); }
}
console.log(`\nPre-filling listing for: ${meta.title}`);
await tryFill(SEL.title, meta.title, 'title');
await tryFill(SEL.description, meta.description, 'description');
await tryFill(SEL.price, meta.price_usd, 'price');

// 3) Attach the main file if a single upload input is present
const mainPdf = fs.readdirSync(path.join(dir, 'dist')).find(f => f.endsWith('.pdf'));
if (mainPdf) {
  try {
    await page.setInputFiles(SEL.fileInput, path.join(dir, 'dist', mainPdf), { timeout: 5000 });
    console.log(`  attached ${mainPdf}`);
  } catch { console.log('  ! could not auto-attach file — drag it in manually'); }
}

// 4) Print the rest for copy/paste, then hand control to you
console.log('\n--- Copy/paste reference ---');
console.log('Grades:        ', meta.grades);
console.log('Resource types:', (meta.resource_types || []).join(', '));
console.log('Tags:          ', (meta.tags || []).join(', '));
console.log('Standards:     ', (meta.standards || []).map(s => s.code).join(', '));
console.log('\nBrowser stays open. Review everything, set categories/standards');
console.log('by hand, and click Publish yourself. Ctrl+C here when done.');
await new Promise(() => {}); // keep process (and browser) alive until Ctrl+C
