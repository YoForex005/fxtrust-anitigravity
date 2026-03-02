# Account Metrix Design System

This document outlines the global design system for consistent styling across all pages.

## Quick Reference

### CSS Variables (Use in styles)

```css
/* Typography */
var(--text-2xs)    /* 10px - Breadcrumbs, disclaimers */
var(--text-xs)     /* 11px - Labels, badges */
var(--text-sm)     /* 13px - Body text, tables */
var(--text-base)   /* 15px - Card headers */
var(--text-xl)     /* 20px - Page titles */

/* Colors - Light Mode */
var(--bg-page)            /* #f3f4f6 page background */
var(--bg-card)            /* #ffffff card background */
var(--bg-card-secondary)  /* #f9fafb inputs, secondary */
var(--text-primary)       /* #111827 headings */
var(--text-muted)         /* #6b7280 labels */
var(--text-placeholder)   /* #9ca3af subtle text */
var(--text-link)          /* #0066ff links */
var(--color-success)      /* #10b981 green */
var(--color-error)        /* #ef4444 red */
var(--border-default)     /* #e5e7eb borders */
var(--border-light)       /* #f3f4f6 row dividers */
```

### Tailwind Classes (Exact Colors)

```jsx
// Page background
bg-[#f3f4f6] dark:bg-[#0d0d0d]

// Card background
bg-white dark:bg-[#141414]
shadow-[0_1px_3px_rgba(0,0,0,0.05)]
border border-transparent dark:border-[#333]

// Text colors
text-[#111827] dark:text-[#f3f4f6]    // Primary
text-[#6b7280] dark:text-[#9ca3af]    // Muted
text-[#9ca3af] dark:text-[#6b7280]    // Placeholder
text-[#0066ff] dark:text-[#60a5fa]    // Links

// Font sizes
text-[10px]   // Breadcrumbs, disclaimers
text-[11px]   // Labels, badges, uppercase
text-[13px]   // Body text, table content
text-[15px]   // Card headers
text-xl       // Page titles

// Borders
border-[#e5e7eb] dark:border-[#374151]
border-[#f3f4f6] dark:border-[#374151]  // Row dividers

// Status badges
bg-[#10b981] text-white                  // Active/Ongoing
bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981]  // Success bg
bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444]  // Error bg
```

## Component Classes

Use these `.am-*` classes for consistent styling:

### Page Layout
```jsx
<div className="am-page">           // Full page wrapper
<div className="am-breadcrumbs">    // Breadcrumb navigation
<h1 className="am-page-title">      // Page header
```

### Cards
```jsx
<div className="am-card">           // Standard card
<h3 className="am-card-title">      // Card heading
```

### List Rows (Key-Value)
```jsx
<div className="am-list-row">
  <span className="am-list-label">Label</span>
  <span className="am-list-value">Value</span>
</div>
```

### Tables
```jsx
<table className="am-table">
  <th>...</th>  // Auto-styled headers
  <td>...</td>  // Auto-styled cells
</table>
```

### Buttons
```jsx
<button className="am-action-btn">     // Action bar button
<button className="am-btn-primary">    // Primary CTA
<button className="am-btn-secondary">  // Secondary button
```

### Badges
```jsx
<span className="am-badge am-badge-success">Active</span>
<span className="am-badge am-badge-error">Failed</span>
<span className="am-badge am-badge-dark">Default</span>
```

### Inputs
```jsx
<label className="am-input-label">Label</label>
<input className="am-input" />
```

### Stats Box
```jsx
<div className="am-stat-box">
  <span className="am-stat-label">Label</span>
  <span className="am-stat-value">$100.00</span>
</div>
```

### Footer
```jsx
<div className="am-footer">
  <div className="am-footer-links">
    <a className="am-footer-link">Link</a>
  </div>
  <p className="am-footer-disclaimer">...</p>
  <p className="am-footer-copyright">© 2026</p>
</div>
```

## Standard Page Structure

```jsx
<div className="am-page">
  {/* Breadcrumbs */}
  <div className="am-breadcrumbs">
    <span>Dashboard</span>
    <span className="mx-1">/</span>
    <span className="am-breadcrumbs-current">Page Name</span>
  </div>

  {/* Header */}
  <div className="am-page-title">
    <Icon size={20} className="text-[#6b7280]" />
    <h1>Page Title</h1>
  </div>

  {/* Action Buttons */}
  <div className="flex flex-wrap gap-3 mb-6">
    <button className="am-action-btn">
      <Icon size={14} /> Action
    </button>
  </div>

  {/* Tabs */}
  <div className="am-tabs">
    <button className="am-tab am-tab-active">Tab 1</button>
    <button className="am-tab">Tab 2</button>
  </div>

  {/* Content */}
  <div className="am-card">
    <h3 className="am-card-title">Section Title</h3>
    {/* Content */}
  </div>

  {/* Footer */}
  <div className="am-footer">...</div>
</div>
```

## Pages to Update

1. ✅ Billing
2. ⬜ Profile
3. ⬜ YoPips Traders
4. ⬜ Leaderboard
5. ⬜ Certificates
6. ⬜ Downloads
