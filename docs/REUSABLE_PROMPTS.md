# 🚀 IndexNow + AEO + GEO Implementation Prompt

Use this prompt in any project to implement the same features.

---

## How to Use

1. Open your project in Antigravity/Cursor
2. Copy the relevant prompt section below
3. Paste and send to AI

---

## 📋 PROMPT 1: IndexNow Implementation

```
Implement IndexNow protocol for my website:

1. Generate a 32-character hex key
2. Create key file in public folder: public/{key}.txt
3. Create core library: src/lib/indexnow.ts with functions:
   - submitSingleUrl(url)
   - submitBulkUrls(urls[])
   - verifyKeyFile()
   - getSitemapUrls()
4. Create API routes:
   - POST /api/indexnow/submit (protected by x-api-key header)
   - POST /api/indexnow/sync (protected by x-cron-secret header, for cron jobs)
5. Create .env.example with:
   - INDEXNOW_KEY
   - INDEXNOW_HOST (my domain)
   - INDEXNOW_ENDPOINT (www.bing.com)
   - API_SECRET_KEY
   - CRON_SECRET

My domain is: [YOUR_DOMAIN_HERE]
My sitemap routes are in: [PATH_TO_SITEMAP_FILE]

Create documentation explaining everything.
```

---

## 📋 PROMPT 2: AI Crawler Files (GEO)

```
Create AI crawler optimization files:

1. Create public/llms.txt with:
   - Company info
   - Products/services list
   - Key differentiators
   - FAQs
   - Cite-worthy statistics
   - Contact info

2. Create public/ai.txt with:
   - Site information
   - Preferred content sections
   - Citation format preferences
   - Key facts

My company details:
- Name: [COMPANY_NAME]
- Website: [WEBSITE]
- Industry: [INDUSTRY]
- Products: [LIST_PRODUCTS]
- Key stats: [ANY_STATS]
```

---

## 📋 PROMPT 3: Schema Components (AEO)

```
Create SEO schema components for voice search and guides:

1. Create SpeakableSchema.tsx component:
   - For voice search optimization (Alexa, Siri, Google Assistant)
   - Takes url, headline, cssSelectors props
   - Uses JSON-LD format

2. Create HowToSchema.tsx component:
   - For step-by-step guides
   - Takes name, description, steps[] props
   - Supports totalTime, estimatedCost, tools

Make sure to import the existing JsonLd component if available.
```

---

## 📋 PROMPT 4: Update Robots.ts

```
Update my robots.ts to allow all AI crawlers:

Add these user-agents with allow: '/':
- GPTBot
- ChatGPT-User
- Google-Extended
- ClaudeBot
- anthropic-ai
- CCBot
- PerplexityBot
- Bytespider
- Googlebot
- Bingbot

Keep existing disallow rules for private paths.
```

---

## 📋 PROMPT 5: Complete All-in-One

```
Implement complete IndexNow + AEO + GEO optimization:

## IndexNow:
- Key file in public folder
- Core library with submit functions
- API routes for manual and cron submission

## GEO (AI Optimization):
- public/llms.txt for LLM context
- public/ai.txt for AI crawlers
- Update robots.ts with all AI crawlers

## AEO (Voice Search):
- SpeakableSchema component
- HowToSchema component

## Environment:
- Create .env.example template

My details:
- Domain: [YOUR_DOMAIN]
- Company: [YOUR_COMPANY]
- Products: [YOUR_PRODUCTS]

Create full documentation in docs folder.
```

---

## ✅ After Implementation Checklist

- [ ] Create `.env.local` from template
- [ ] Restart dev server
- [ ] Test locally
- [ ] Deploy to production
- [ ] Verify key file: `https://yourdomain.com/{key}.txt`
- [ ] Verify LLMs file: `https://yourdomain.com/llms.txt`
- [ ] Verify AI file: `https://yourdomain.com/ai.txt`
- [ ] Set up cron job (optional)

---

## 🔑 Generate New Key

Run this command for each project:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

---

## 📂 Expected Files After Implementation

```
project/
├── public/
│   ├── {32-char-key}.txt
│   ├── llms.txt
│   └── ai.txt
├── src/
│   ├── lib/
│   │   └── indexnow.ts
│   ├── app/
│   │   ├── api/
│   │   │   └── indexnow/
│   │   │       ├── submit/route.ts
│   │   │       └── sync/route.ts
│   │   └── robots.ts (updated)
│   └── components/
│       └── seo/
│           ├── SpeakableSchema.tsx
│           └── HowToSchema.tsx
├── docs/
│   └── INDEXNOW.md
└── .env.example
```
