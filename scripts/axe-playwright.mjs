import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = process.argv[2] || "http://127.0.0.1:3000";
const paths = [
  "/",
  "/contact",
  "/quote",
  "/services/manned-security-guards",
  "/about",
  "/blog"
];

const results = [];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });

for (const path of paths) {
  for (const mode of ["light", "dark"]) {
    const page = await context.newPage();
    const url = `${base}${path}`;

    await page.goto(url, { waitUntil: "networkidle" });

    if (mode === "dark") {
      await page.evaluate(() => {
        document.documentElement.classList.add("dark");
      });
      await page.waitForTimeout(200);
    }

    const axe = await new AxeBuilder({ page }).analyze();
    const violations = axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      nodes: v.nodes.length,
      help: v.help
    }));

    results.push({ path, mode, violationCount: violations.length, violations });
    await page.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));