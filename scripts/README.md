# Scripts

Utilities for local verification and dev cleanup. Run from the repo root after `npm run build` and `npx next start` unless noted.

| Script | Purpose |
|--------|---------|
| `clean-next-dev.mjs` | Clears the Next.js dev cache when the dev server misbehaves. |
| `verify-llms-urls.mjs` | Checks that URLs listed in `public/llms.txt` exist in the app. |
| `test-hero-form-status.mjs` | Exercises homepage hero quote success/error query handling. |
| `run-lighthouse-mobile.mjs` | Lab mobile Lighthouse on `/` and a service page. |
| `axe-playwright.mjs` | Accessibility scan on key pages via Playwright + axe. |
| `numbers-audit.mjs` | Scans copy for risky numeric or claim patterns (manual review). |

One-off migration scripts used during Phases 1–2 (`apply-phase1-commit.mjs`, `clean-service-content.mjs`, `fix-service-claims.mjs`, `trim-services-content.mjs`) are **not** kept in git. Their edits are already in `lib/` and `next.config.mjs`; re-running them can fail or damage content.