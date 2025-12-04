import { NextResponse } from 'next/server';

const BING_API_ENDPOINT = 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch';

export async function submitUrlsToBing(urls: string[], apiKey: string | undefined = process.env.BING_API_KEY) {
    if (!apiKey) {
        console.warn('BING_API_KEY is not defined. Skipping submission.');
        return { success: false, message: 'BING_API_KEY is missing' };
    }

    if (urls.length === 0) {
        return { success: false, message: 'No URLs to submit' };
    }

    try {
        const response = await fetch(`${BING_API_ENDPOINT}?apikey=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Charset': 'utf-8',
            },
            body: JSON.stringify({
                siteUrl: 'https://www.fxtrusts.com', // Ensure this matches your site URL in Bing Webmaster Tools
                urlList: urls,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Bing API Error:', response.status, errorText);
            return { success: false, message: `Bing API Error: ${response.status} ${errorText}` };
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('Error submitting URLs to Bing:', error);
        return { success: false, message: 'Internal Server Error during Bing submission' };
    }
}
