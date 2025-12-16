import { NextResponse } from 'next/server';
import { updateSignup } from '@/lib/signupsStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, meetingDetails } = body || {};

        if (!id || !meetingDetails || !meetingDetails.eventUri) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        let enhancedDetails = { ...meetingDetails };

        // Fetch details from Calendly API if token exists
        const token = process.env.CALENDLY_API_TOKEN;
        if (token) {
            try {
                const response = await fetch(meetingDetails.eventUri, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    const event = data.resource;

                    enhancedDetails.startTime = event.start_time;
                    enhancedDetails.endTime = event.end_time;

                    // Location might be a string or an object depending on the meeting type (Teams, Zoom, etc.)
                    // Calendly API v2: "location" object
                    if (event.location) {
                        if (event.location.type === 'microsoft_teams_conference') {
                            enhancedDetails.joinUrl = event.location.join_url;
                            enhancedDetails.location = 'Microsoft Teams';
                        } else if (event.location.join_url) {
                            enhancedDetails.joinUrl = event.location.join_url;
                            enhancedDetails.location = event.location.type;
                        } else if (typeof event.location === 'string') {
                            enhancedDetails.location = event.location;
                        }
                    }
                } else {
                    console.error('Failed to fetch from Calendly API', response.status, await response.text());
                }
            } catch (apiError) {
                console.error('Error calling Calendly API', apiError);
            }
        } else {
            console.warn('CALENDLY_API_TOKEN not found, skipping API fetch');
        }

        const success = updateSignup(id, enhancedDetails);

        if (!success) {
            return NextResponse.json({ error: 'Signup not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, details: enhancedDetails });
    } catch (error) {
        console.error('Error updating signup', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
