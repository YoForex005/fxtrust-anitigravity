import { NextResponse } from 'next/server';

// Mock slots for development
const MOCK_SLOTS = [
    { id: '1', startTime: new Date(Date.now() + 86400000).toISOString(), endTime: new Date(Date.now() + 86400000 + 1800000).toISOString() }, // Tomorrow
    { id: '2', startTime: new Date(Date.now() + 172800000).toISOString(), endTime: new Date(Date.now() + 172800000 + 1800000).toISOString() }, // Day after
    { id: '3', startTime: new Date(Date.now() + 259200000).toISOString(), endTime: new Date(Date.now() + 259200000 + 1800000).toISOString() }, // 3 days later
    { id: '4', startTime: new Date(Date.now() + 345600000).toISOString(), endTime: new Date(Date.now() + 345600000 + 1800000).toISOString() }, // 4 days later
];

export async function GET() {
    // In a real implementation, we would use the Google Calendar API here.
    // const auth = new google.auth.GoogleAuth({ ... });
    // const calendar = google.calendar({ version: 'v3', auth });
    // const events = await calendar.events.list({ ... });

    // For now, return mock slots to unblock UI development
    return NextResponse.json({ slots: MOCK_SLOTS });
}
