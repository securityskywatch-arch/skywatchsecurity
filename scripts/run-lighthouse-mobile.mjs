import fs from "node:fs";
import path from "node:path";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const url = process.argv[2] || "http://127.0.0.1:3000/";
const runs = Number(process.argv[3] || 5);
const outDir = path.join(process.cwd(), ".lighthouse-runs");

fs.mkdirSync(outDir, { recursive: true });

function median(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

const clsValues = [];
const lcpValues = [];

for (let i = 1; i <= runs; i++) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"]
  });

  const options = {
    logLevel: "error",
    output: "json",
    onlyCategories: ["performance"],
    port: chrome.port,
    formFactor: "mobile",
    screenEmulation: {
      mobile: true,
      width: 412,
      height: 823,
      deviceScaleFactor: 2.625,
      disabled: false
    }
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  const lhr = runnerResult.lhr;
  const cls = lhr.audits["cumulative-layout-shift"]?.numericValue ?? null;
  const lcp = lhr.audits["largest-contentful-paint"]?.numericValue ?? null;
  const clsAudit = lhr.audits["cumulative-layout-shift"];
  const shiftElements =
    lhr.audits["layout-shift-elements"]?.details?.items ||
    lhr.audits["layout-shifts"]?.details?.items ||
    [];

  clsValues.push(cls);
  lcpValues.push(lcp);

  const payload = {
    run: i,
    cls,
    lcpMs: lcp,
    lcpSec: lcp != null ? lcp / 1000 : null,
    shiftElements: shiftElements.map((item) => ({
      node: item.node?.snippet || item.node?.selector || item.node?.path,
      score: item.score ?? item.value,
      subItems: item.subItems?.items
    }))
  };

  const file = path.join(outDir, `run-${i}.json`);
  fs.writeFileSync(file, JSON.stringify({ lhr: lhr.audits, summary: payload }, null, 2));

  console.log(
    JSON.stringify({
      run: i,
      cls,
      lcpMs: lcp,
      lcpSec: lcp != null ? +(lcp / 1000).toFixed(3) : null,
      layoutShiftAudits: Object.keys(lhr.audits).filter((k) => k.includes("layout"))
    })
  );
}

console.log(
  JSON.stringify({
    url,
    runs,
    cls: clsValues,
    clsMedian: median(clsValues),
    lcpMs: lcpValues,
    lcpMedianMs: median(lcpValues),
    lcpMedianSec: +(median(lcpValues) / 1000).toFixed(3)
  })
);