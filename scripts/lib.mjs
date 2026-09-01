import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { chromium } from 'playwright-core';

export const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
export const PRODUCTS_DIR = path.join(ROOT, 'products');

export function findChromium() {
  const candidates = [
    process.env.CHROMIUM_PATH,
    '/opt/pw-browsers/chromium',
    '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);
  for (const c of candidates) if (fs.existsSync(c)) return c;
  throw new Error('No Chromium found. Set CHROMIUM_PATH in .env or install Chrome.');
}

export async function launch({ headless = true } = {}) {
  return chromium.launch({ headless, executablePath: findChromium() });
}

export function listProducts(slugFilter) {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  return fs.readdirSync(PRODUCTS_DIR)
    .filter(d => fs.existsSync(path.join(PRODUCTS_DIR, d, 'product.yaml')))
    .filter(d => !slugFilter || d === slugFilter)
    .map(d => ({
      slug: d,
      dir: path.join(PRODUCTS_DIR, d),
      meta: parse(fs.readFileSync(path.join(PRODUCTS_DIR, d, 'product.yaml'), 'utf8')),
    }));
}
