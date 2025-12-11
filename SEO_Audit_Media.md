# SEO Media Audit Report

## 1. Image Technology
Scan of all `.tsx` files in `src/`.

- **Legacy `<img>` Tags**: 0 found. ✅
- **`next/image` Usage**: 13 files using optimized component. ✅

## 2. Accessibility (Alt Attributes)
- **Missing Alt Text**: 0 instances found. ✅
- All `Image` components have descriptive `alt` props.

## 3. Performance (LCP)
- **Header Logo**: Uses `priority` prop. ✅
- **Hero Background**: Uses `priority` prop. ✅

## 4. Recommendations
- **Maintain Standards**: Current implementation follows Next.js best practices perfectly.
- **Future**: Ensure any new marketing images added to `public/` are compressed (WebP/AVIF) before upload, although Next.js optimizes them on-the-fly.
