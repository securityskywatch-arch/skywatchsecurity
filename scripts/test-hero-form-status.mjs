import { chromium } from "playwright";

const base = process.argv[2] || "http://127.0.0.1:3000";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const success = await page.goto(`${base}/?hero_sent=1`, { waitUntil: "networkidle" });
const successBanner = page.locator('[role="status"]').first();
const successMeta = {
  httpStatus: success?.status(),
  role: await successBanner.getAttribute("role"),
  ariaLive: await successBanner.getAttribute("aria-live"),
  text: (await successBanner.textContent())?.trim(),
  isFocused: await successBanner.evaluate((el) => document.activeElement === el)
};

await page.goto(`${base}/?hero_sent=0`, { waitUntil: "networkidle" });
const errorBanner = page.locator('[role="alert"]').first();
const errorMeta = {
  role: await errorBanner.getAttribute("role"),
  ariaLive: await errorBanner.getAttribute("aria-live"),
  text: (await errorBanner.textContent())?.trim(),
  isFocused: await errorBanner.evaluate((el) => document.activeElement === el)
};

await page.goto(`${base}/`, { waitUntil: "networkidle" });
await page.route("**/api/forms/quote", async (route) => {
  await route.fulfill({
    status: 500,
    contentType: "application/json",
    body: JSON.stringify({ ok: false, error: "Simulated failure" })
  });
});
await page.fill("#hero-quote-name", "Jane Doe");
await page.fill("#hero-quote-email", "jane@example.co.uk");
await page.fill("#hero-quote-phone", "07365128680");
await page.fill("#hero-quote-msg", "Need guarding at warehouse site for night shifts.");
await page.click('button[type="submit"]');
const clientErrorBanner = page.locator('[role="alert"]').first();
await clientErrorBanner.waitFor({ state: "visible" });
const clientErrorMeta = {
  role: await clientErrorBanner.getAttribute("role"),
  ariaLive: await clientErrorBanner.getAttribute("aria-live"),
  isFocused: await clientErrorBanner.evaluate((el) => document.activeElement === el)
};

await browser.close();
console.log(JSON.stringify({ successMeta, errorMeta, clientErrorMeta }, null, 2));