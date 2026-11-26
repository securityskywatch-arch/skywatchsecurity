import fs from "node:fs";
import path from "node:path";

const llmsPath = path.join(process.cwd(), "public", "llms.txt");
const text = fs.readFileSync(llmsPath, "utf8");
const urls = [...text.matchAll(/https:\/\/skywatchsecurity\.co\.uk[^\s\)]*/g)].map((m) => m[0]);

const forbidden = [
  /£5,000,000/,
  /certificate/i,
  /\bSIA\b/,
  /\bBS\s*\d/i,
  /company number/i
];

const textIssues = forbidden.filter((re) => re.test(text)).map((re) => String(re));

const base = process.argv[2] || "http://127.0.0.1:3000";
const checks = [];

for (const url of urls) {
  const local = url.replace("https://skywatchsecurity.co.uk", base);
  const res = await fetch(local, { redirect: "follow" });
  checks.push({ url, status: res.status, ok: res.status === 200 });
}

console.log(
  JSON.stringify(
    {
      urlCount: urls.length,
      allOk: checks.every((c) => c.ok),
      failed: checks.filter((c) => !c.ok),
      forbiddenMentions: textIssues
    },
    null,
    2
  )
);