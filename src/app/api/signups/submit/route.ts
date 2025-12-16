import { NextResponse } from 'next/server';
import { appendSignup, updateSignup } from '@/lib/signupsStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, qualificationData, contactData } = body || {};

        if (id) {
            // Update existing record
            const success = updateSignup(id, {
                ...(qualificationData ? { qualification: qualificationData } : {}),
                ...(contactData ? { contact: contactData } : {})
            });

            if (!success) {
                return NextResponse.json({ error: 'Signup not found' }, { status: 404 });
            }
            return NextResponse.json({ success: true, id });
        } else {
            // Create new record
            if (!contactData || !contactData.email) {
                return NextResponse.json({ error: 'contactData.email is required' }, { status: 400 });
            }

            const signup = appendSignup({
                qualification: qualificationData, // Can be undefined now
                contact: {
                    firstName: contactData.firstName ?? '',
                    lastName: contactData.lastName ?? '',
                    email: contactData.email ?? '',
                    companyName: contactData.companyName ?? '',
                    phone: contactData.phone ?? '',
                    whatsapp: contactData.whatsapp ?? '',
                    telegram: contactData.telegram ?? '',
                },
            });
            return NextResponse.json({ success: true, signup });
        }
    } catch (error) {
        console.error('Error saving signup', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
