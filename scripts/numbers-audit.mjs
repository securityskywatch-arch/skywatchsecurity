import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const text = fs.readFileSync(path.join(root, "lib/servicePageContent.js"), "utf8");

const slugs = [
  "manned-security-guards",
  "key-holding-alarm-response",
  "mobile-patrols",
  "construction-security",
  "concierge-security",
  "corporate-security",
  "cctv-monitoring",
  "event-security",
  "industrial-warehouse",
  "commercial-security",
  "retail-security",
  "door-supervision",
  "educational-campus",
  "dog-handling",
  "close-protection"
];

const numRe =
  /\b(\d{1,4}[\d,]*(?:\.\d+)?%?|£[\d,]+|24\/7(?:\/365)?|12-hour|8am-6pm)\b/g;

for (const slug of slugs) {
  const marker = `"${slug}":`;
  const i = text.indexOf(marker);
  if (i < 0) {
    console.log(`${slug}: (missing)`);
    continue;
  }
  let depth = 0;
  let start = -1;
  for (let k = i; k < text.length; k++) {
    if (text[k] === "{") {
      if (depth === 0) start = k;
      depth++;
    } else if (text[k] === "}") {
      depth--;
      if (depth === 0) {
        const block = text.slice(start, k + 1);
        const hits = [...block.matchAll(numRe)].map((m) => m[0]);
        const uniq = [...new Set(hits)];
        console.log(`${slug}: ${uniq.length ? uniq.join(", ") : "(none)"}`);
        break;
      }
    }
  }
}