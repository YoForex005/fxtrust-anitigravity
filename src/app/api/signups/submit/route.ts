import { NextResponse } from 'next/server';
import { appendSignup } from '@/lib/signupsStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { qualificationData, contactData } = body || {};

        if (!contactData || !contactData.email) {
            return NextResponse.json({ error: 'contactData.email is required' }, { status: 400 });
        }

        const signup = appendSignup({
            qualification: {
                businessModel: qualificationData?.businessModel ?? '',
                status: qualificationData?.status ?? '',
                techNeeds: qualificationData?.techNeeds ?? '',
                timeline: qualificationData?.timeline ?? '',
            },
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
    } catch (error) {
        console.error('Error saving signup', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
