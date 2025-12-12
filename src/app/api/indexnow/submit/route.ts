/**
 * IndexNow Submit API Route
 * =========================
 * 
 * POST /api/indexnow/submit
 * 
 * Submit single or multiple URLs to IndexNow.
 * Protected by API_SECRET_KEY header.
 * 
 * Request Body:
 * - { url: string } - for single URL
 * - { urls: string[] } - for bulk URLs
 * 
 * Headers:
 * - x-api-key: Your API_SECRET_KEY
 */

import { NextRequest, NextResponse } from 'next/server';
import { submitSingleUrl, submitBulkUrls } from '@/lib/indexnow';

export async function POST(request: NextRequest) {
    try {
        // Verify API key
        const apiKey = request.headers.get('x-api-key');
        const expectedKey = process.env.API_SECRET_KEY;

        if (!expectedKey) {
            console.error('[IndexNow API] API_SECRET_KEY not configured');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (apiKey !== expectedKey) {
            return NextResponse.json(
                { error: 'Unauthorized - Invalid API key' },
                { status: 401 }
            );
        }

        // Parse request body
        const body = await request.json();

        // Handle single URL
        if (body.url && typeof body.url === 'string') {
            const result = await submitSingleUrl(body.url);
            return NextResponse.json(result, {
                status: result.success ? 200 : 400,
            });
        }

        // Handle bulk URLs
        if (body.urls && Array.isArray(body.urls)) {
            const result = await submitBulkUrls(body.urls);
            return NextResponse.json(result, {
                status: result.success ? 200 : 400,
            });
        }

        return NextResponse.json(
            { error: 'Invalid request body. Provide either "url" or "urls"' },
            { status: 400 }
        );
    } catch (error) {
        console.error('[IndexNow API] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Also support GET for simple single URL submissions
export async function GET(request: NextRequest) {
    try {
        const apiKey = request.headers.get('x-api-key');
        const expectedKey = process.env.API_SECRET_KEY;

        if (apiKey !== expectedKey) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const url = request.nextUrl.searchParams.get('url');

        if (!url) {
            return NextResponse.json(
                { error: 'Missing url parameter' },
                { status: 400 }
            );
        }

        const result = await submitSingleUrl(url);
        return NextResponse.json(result, {
            status: result.success ? 200 : 400,
        });
    } catch (error) {
        console.error('[IndexNow API] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
