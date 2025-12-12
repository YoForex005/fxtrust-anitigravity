# IndexNow Protocol - Complete Guide

This document explains the IndexNow implementation for FXTrusts and can be reused across all 16 projects.

---

## 📋 Table of Contents

1. [What is IndexNow?](#what-is-indexnow)
2. [Files Created](#files-created)
3. [Environment Setup](#environment-setup)
4. [Core Library Explanation](#core-library-explanation)
5. [API Endpoints](#api-endpoints)
6. [Usage Examples](#usage-examples)
7. [Cron Job Setup](#cron-job-setup)
8. [Reusing in Other Projects](#reusing-in-other-projects)

---

## 🔍 What is IndexNow?

IndexNow is a protocol that allows websites to notify search engines about content changes instantly.

### How It Works:

```
┌─────────────┐    GET/POST     ┌───────────────┐
│ Your Site   │ ──────────────► │ Bing IndexNow │
│ fxtrusts.com│                 │   Endpoint    │
└─────────────┘                 └───────┬───────┘
                                        │
                    Auto-shared with:   │
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
                    ▼                   ▼                   ▼
              ┌─────────┐        ┌──────────┐        ┌─────────┐
              │  Yandex │        │  Seznam  │        │  Naver  │
              └─────────┘        └──────────┘        └─────────┘
```

### Key Points:
- **No signup required** - Just host a key file
- **Submit once** - All IndexNow engines receive it
- **Instant indexing** - No waiting for crawlers
- **10,000 URLs/day** - High volume supported

---

## 📁 Files Created

| File | Purpose |
|------|---------|
| `public/f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2.txt` | Key verification file |
| `src/lib/indexnow.ts` | Core functions |
| `src/app/api/indexnow/submit/route.ts` | Manual submit API |
| `src/app/api/indexnow/sync/route.ts` | Cron sync API |

---

## ⚙️ Environment Setup

Create `.env.local` file in project root:

```env
# IndexNow Configuration
INDEXNOW_KEY=f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2
INDEXNOW_HOST=fxtrusts.com
INDEXNOW_ENDPOINT=www.bing.com

# API Protection
API_SECRET_KEY=sk_fxtrust_api_2024_secure_key_xyz
CRON_SECRET=cron_fxtrust_sync_2024_secret_abc
```

> ⚠️ **Important**: Add `.env.local` to `.gitignore` (already done)

---

## 🧠 Core Library Explanation

### File: `src/lib/indexnow.ts`

#### 1. `submitSingleUrl(url: string)`

Submits one URL using GET request:

```typescript
// Usage
import { submitSingleUrl } from '@/lib/indexnow';

const result = await submitSingleUrl('https://fxtrusts.com/pricing');
// Result: { success: true, message: 'URL submitted successfully' }
```

**How it works:**
```
GET https://www.bing.com/indexnow?url=https://fxtrusts.com/pricing&key=f7a8...
```

#### 2. `submitBulkUrls(urls: string[])`

Submits up to 10,000 URLs using POST request:

```typescript
// Usage
import { submitBulkUrls } from '@/lib/indexnow';

const result = await submitBulkUrls([
    'https://fxtrusts.com/blog/post-1',
    'https://fxtrusts.com/blog/post-2',
]);
```

**How it works:**
```http
POST https://www.bing.com/indexnow
Content-Type: application/json

{
    "host": "fxtrusts.com",
    "key": "f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2",
    "keyLocation": "https://fxtrusts.com/f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2.txt",
    "urlList": [
        "https://fxtrusts.com/blog/post-1",
        "https://fxtrusts.com/blog/post-2"
    ]
}
```

#### 3. `verifyKeyFile()`

Checks if key file is accessible and valid:

```typescript
const isValid = await verifyKeyFile();
// Returns: true/false
```

#### 4. `getSitemapUrls()`

Returns all URLs from sitemap for bulk sync:

```typescript
const urls = getSitemapUrls();
// Returns: ['https://fxtrusts.com/', 'https://fxtrusts.com/pricing', ...]
```

---

## 🔗 API Endpoints

### POST `/api/indexnow/submit`

Submit URLs manually.

**Headers:**
```
x-api-key: sk_fxtrust_api_2024_secure_key_xyz
```

**Single URL:**
```json
{
    "url": "https://fxtrusts.com/blog/new-post"
}
```

**Bulk URLs:**
```json
{
    "urls": [
        "https://fxtrusts.com/blog/post-1",
        "https://fxtrusts.com/blog/post-2"
    ]
}
```

**cURL Example:**
```bash
curl -X POST https://fxtrusts.com/api/indexnow/submit \
  -H "Content-Type: application/json" \
  -H "x-api-key: sk_fxtrust_api_2024_secure_key_xyz" \
  -d '{"url": "https://fxtrusts.com/pricing"}'
```

---

### POST `/api/indexnow/sync`

Sync all sitemap URLs (for cron jobs).

**Headers:**
```
x-cron-secret: cron_fxtrust_sync_2024_secret_abc
```

**cURL Example:**
```bash
curl -X POST https://fxtrusts.com/api/indexnow/sync \
  -H "x-cron-secret: cron_fxtrust_sync_2024_secret_abc"
```

---

## ⏰ Cron Job Setup

### Vercel Cron

Add to `vercel.json`:

```json
{
    "crons": [
        {
            "path": "/api/indexnow/sync",
            "schedule": "0 0 * * *"
        }
    ]
}
```

This runs daily at midnight UTC.

### Other Platforms

Use any cron service to call:
```
POST https://fxtrusts.com/api/indexnow/sync
Header: x-cron-secret: <your-cron-secret>
```

---

## 🔄 Reusing in Other Projects

### Step 1: Copy Files
```
src/lib/indexnow.ts       → Copy to new project
src/app/api/indexnow/     → Copy entire folder
```

### Step 2: Generate New Key
```bash
# Generate 32-char hex key
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### Step 3: Create Key File
Create `public/{new-key}.txt` with just the key value.

### Step 4: Update Environment
```env
INDEXNOW_KEY=<new-key>
INDEXNOW_HOST=<new-domain.com>
```

### Step 5: Update Sitemap URLs
Edit `getSitemapUrls()` in `indexnow.ts` to match new project's routes.

---

## 📊 Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success - URL accepted |
| 202 | Accepted - Key valid, URL queued |
| 400 | Bad request - Invalid format |
| 403 | Forbidden - Key file not found |
| 422 | Unprocessable - URL not from host |
| 429 | Rate limited - Too many requests |

---

## ❓ Troubleshooting

### Key file not found (403)

1. Check file exists: `public/{key}.txt`
2. Verify URL works: `https://your-domain.com/{key}.txt`
3. Ensure file contains ONLY the key (no newlines)

### URLs rejected (422)

1. URLs must start with `https://{INDEXNOW_HOST}`
2. Check INDEXNOW_HOST matches your domain

### Rate limited (429)

1. Max 10,000 URLs per day
2. Don't submit same URLs repeatedly
3. Space out bulk submissions

---

## ✅ Checklist for Deployment

- [ ] Key file deployed at `/{key}.txt`
- [ ] Environment variables set in hosting
- [ ] Test single URL submission
- [ ] Set up cron job for daily sync
- [ ] Monitor IndexNow logs
