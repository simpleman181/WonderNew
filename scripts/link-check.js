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
    const link = await page.$(`a:has-text("${title}")`);
    if (!link) {
      results.push({ title, ok: false, reason: 'Link not found on homepage' });
      continue;
    }

    await Promise.all([
      page.waitForLoadState('networkidle').catch(() => {}),
      link.click().catch(() => {}),
    ]);

    await page.waitForTimeout(700);

    const url = page.url();
    const header = await page.$(`text=${title}`);
    if (header) {
      results.push({ title, ok: true, url });
    } else {
      results.push({ title, ok: false, url, reason: 'Project page did not render expected header' });
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

