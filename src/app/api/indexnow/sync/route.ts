/**
 * IndexNow Sync API Route (Cron Job)
 * ===================================
 * 
 * POST /api/indexnow/sync
 * 
 * Syncs all sitemap URLs to IndexNow. Designed to be called by a cron job.
 * Protected by CRON_SECRET header.
 * 
 * Headers:
 * - x-cron-secret: Your CRON_SECRET
 * 
 * Usage with Vercel Cron:
 * Add to vercel.json:
 * {
 *   "crons": [{
 *     "path": "/api/indexnow/sync",
 *     "schedule": "0 0 * * *"
 *   }]
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { submitBulkUrls, getSitemapUrls, verifyKeyFile } from '@/lib/indexnow';

export async function POST(request: NextRequest) {
    try {
        // Verify cron secret
        const cronSecret = request.headers.get('x-cron-secret');
        const expectedSecret = process.env.CRON_SECRET;

        // Also check for Vercel's cron authorization
        const vercelCronAuth = request.headers.get('authorization');
        const isVercelCron = vercelCronAuth === `Bearer ${process.env.CRON_SECRET}`;

        if (!expectedSecret) {
            console.error('[IndexNow Sync] CRON_SECRET not configured');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (cronSecret !== expectedSecret && !isVercelCron) {
            return NextResponse.json(
                { error: 'Unauthorized - Invalid cron secret' },
                { status: 401 }
            );
        }

        console.log('[IndexNow Sync] Starting sitemap sync...');

        // First verify key file is accessible
        const keyValid = await verifyKeyFile();
        if (!keyValid) {
            return NextResponse.json(
                {
                    error: 'Key file verification failed',
                    message: 'Ensure the key file is deployed and accessible'
                },
                { status: 500 }
            );
        }

        // Get all sitemap URLs
        const urls = getSitemapUrls();
        console.log(`[IndexNow Sync] Found ${urls.length} URLs to sync`);

        // Submit all URLs
        const result = await submitBulkUrls(urls);

        return NextResponse.json({
            ...result,
            syncedAt: new Date().toISOString(),
            totalUrls: urls.length,
        }, {
            status: result.success ? 200 : 400,
        });
    } catch (error) {
        console.error('[IndexNow Sync] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET method for manual testing (also protected)
export async function GET(request: NextRequest) {
    try {
        const cronSecret = request.headers.get('x-cron-secret');
        const expectedSecret = process.env.CRON_SECRET;

        if (cronSecret !== expectedSecret) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Just verify key file and return status
        const keyValid = await verifyKeyFile();
        const urls = getSitemapUrls();

        return NextResponse.json({
            status: 'ready',
            keyFileValid: keyValid,
            totalUrls: urls.length,
            endpoint: process.env.INDEXNOW_ENDPOINT || 'www.bing.com',
        });
    } catch (error) {
        console.error('[IndexNow Sync] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
