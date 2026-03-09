# SEO Changelog

All SEO maintenance runs and fixes are logged here for audit trail purposes.

---

## [2026-03-07] Maintenance Run
- **Structure:** Pass — All 98 `page.tsx` files have `metadata` + `openGraph` + `twitter`. All 7 `layout.tsx` files have `metadataBase` + `title.template`. Organization & Product JSON-LD schemas present.
- **Media:** Pass — Zero legacy `<img>` tags. All `<Image />` components have descriptive `alt` text. LCP images on landing pages have `priority` set. All external links use `target="_blank"` + `rel="noopener noreferrer"`.
- **Technical:** Fixed
  - `sitemap.ts` — Expanded from ~55 to 105 routes. Added all 28 solution pages, `/pricing`, `/docs`, `/blog`, `/live-demo`, `/prop-firm/live-demo`. Introduced priority tiering: `1.0` (homepage) → `0.9` (top landing pages) → `0.8` (standard pages).
  - `robots.ts` — Added `/live-demo/admin` to the disallow list (was only blocking `/prop-firm/live-demo/admin`).
  - `manifest.ts` — Already compliant. No changes needed.
- **Summary:** Sitemap expanded to cover all public routes with intelligent priority weighting. Robots.txt hardened to block both admin panels. All strict TypeScript types (`MetadataRoute`) verified. `tsc --noEmit` passed with exit code 0. System healthy.

## [2026-03-07] Maintenance Run
- **Structure:** Pass
- **Media:** Pass
- **Technical:** Pass
- **Summary:** System Healthy. No structural or technical configurations were missing.


## [2026-03-09] Maintenance Run
- **Structure:** ✅ Pass/Fixed
- **Media:** ✅ Pass/Fixed
- **Technical:** ✅ Pass/Fixed
- **Summary:** System Healthy. Minor false positives verified (e.g. generateMetadata vs const metadata). All technical files present, Image components configured correctly with priority.
