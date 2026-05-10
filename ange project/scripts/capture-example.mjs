import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const cwd = path.resolve('.');
const server = spawn('python3', ['-m', 'http.server', '4173', '-d', 'portal'], { cwd, stdio: 'ignore' });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  await wait(1200);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://127.0.0.1:4173/example.html', { waitUntil: 'networkidle' });
  for (let i = 1; i <= 5; i++) {
    await page.locator(`#step${i}`).screenshot({ path: `portal/screenshots/step${i}.png` });
  }
  await browser.close();
  server.kill('SIGTERM');
})();
