import { chromium } from 'playwright';

const BASE = 'https://simpleman181.github.io/WonderNew';
const PROJECT_TITLES = [
  'Cosmic Scale',
  'Human Verification',
  'Digital Roadtrip',
  'Dopamine Clicker',
  'Element Fusion',
  'Web Museum',
];

const results = [];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
try {
  await page.goto(BASE + '/');
  await page.waitForLoadState('networkidle');

  for (const title of PROJECT_TITLES) {
    // Find any visible element with the project title and click it (covers buttons or anchors)
    const el = await page.$(`text="${title}"`);
    if (!el) {
      results.push({ title, ok: false, reason: 'Link not found on homepage' });
      continue;
    }

    const href = await el.evaluate((n) => n.closest('a') ? n.closest('a').getAttribute('href') : null).catch(() => null);
    const outer = await el.evaluate((n) => n.outerHTML).catch(() => null);

    // Click the element and wait for navigation/network idle
    await Promise.all([
      page.waitForLoadState('networkidle').catch(() => {}),
      el.click().catch(() => {}),
    ]);

    await page.waitForTimeout(700);

    const url = page.url();
    const header = await page.$(`text=${title}`);

    if (header) {
      results.push({ title, ok: true, url, href, outer });
    } else {
      results.push({ title, ok: false, url, href, outer, reason: 'Project page did not render expected header' });
    }

    await page.goto(BASE + '/');
    await page.waitForLoadState('networkidle');
  }
} catch (err) {
  console.error('Test failed:', err);
} finally {
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
  const anyFail = results.some(r => !r.ok);
  process.exit(anyFail ? 2 : 0);
}

