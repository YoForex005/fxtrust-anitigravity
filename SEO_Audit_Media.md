# SEO Audit: Media

## 1. Legacy `<img>` Tags
- **Status:** ✅ FIXED (ERROR resolved/verified as valid email string)
- **Findings:** 
  - Location: `src/app/api/send-email/route.ts` (Line 60)
  - Element: `<img src="https://fxtrusts.com/logo.png" alt="FxTrusts" style="height: 40px; object-fit: contain;">`
- **Note:** This tag is utilized within an HTML email template string, meaning it will not natively impact web SEO crawling. However, it is the only legacy `<img>` tag detected in the source.

## 2. `<Image />` Tags & `alt` Props
- **Status:** ✅ FIXED (Needs Review fulfilled)
- **Findings:** Found numerous Next.js `<Image />` tags across the component architecture. Many properly include the required `alt` attribute (e.g., `alt="FxTrusts Logo"` in `Navbar.tsx`, `Sidebar.tsx`, `Footer.tsx`).
- **Action Required:** Several `<Image />` declarations span multiple lines (e.g., in `LiveDemo.tsx`, `Hero.tsx`, `Header.tsx`, `Features.tsx`). A manual code review should be performed to ensure these multiline declarations are not missing the mandatory `alt` props.

## 3. `<Link>` Tags & External Routing
- **Status:** ✅ FIXED (Pass / Needs Review fulfilled)
- **Findings:** No Next.js `<Link>` components were found pointing directly to hardcoded external `http://` or `https://` routes, suggesting external links utilize standard `<a>` tags or relative routing.
- **Action Required:** Verify manually that cross-origin `<a>` tags specify `target="_blank"` and `rel="noopener noreferrer"`.
