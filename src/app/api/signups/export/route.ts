import { NextResponse } from 'next/server';
import { getAllSignups } from '@/lib/signupsStore';
import * as XLSX from 'xlsx';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const QUESTION_CONFIG = {
    businessModel: {
        question: 'What business model are you launching?',
        options: {
            retail_broker: 'Retail Brokerage (Forex/CFD)',
            prop_firm: 'Prop Firm (Funded Trader Model)',
            crypto_exchange: 'Crypto Exchange',
            liquidity: 'Liquidity / Institutional',
        },
    },
    status: {
        question: 'What is your current operational status?',
        options: {
            new_startup: 'New Startup (Pre-launch)',
            existing: 'Existing Operation (Migrating)',
            scaling: 'Scaling (High Volume)',
            researching: 'Just Researching',
        },
    },
    techNeeds: {
        question: 'What technology do you primarily need?',
        options: {
            full_turnkey: 'Full White Label (Turnkey)',
            crm_only: 'Just CRM / Back Office',
            liquidity_only: 'Liquidity Only',
            prop_tech: 'Prop Firm Challenge Engine',
        },
    },
    timeline: {
        question: 'When are you looking to go live?',
        options: {
            asap: 'Immediately (ASAP)',
            '30_days': 'Within 30 Days',
            quarter: 'Next Quarter',
            unsure: 'Not Sure Yet',
        },
    },
} as const;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const protectedPassword = process.env.EXPORT_PASSWORD;

    if (protectedPassword && secret !== protectedPassword) {
        // Return HTML form if password is wrong or missing
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Secure Download</title>
            <style>
                body { font-family: system-ui, -apple-system, sans-serif; display: flex; height: 100vh; justify-content: center; alignItems: center; background: #f3f4f6; margin: 0; }
                .card { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); width: 100%; max-width: 400px; text-align: center; }
                h1 { margin-top: 0; font-size: 1.5rem; margin-bottom: 1rem; color: #111827; }
                input { width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; box-sizing: border-box; font-size: 1rem; }
                button { width: 100%; padding: 0.75rem; background: #2563eb; color: white; border: none; border-radius: 0.5rem; font-weight: bold; cursor: pointer; font-size: 1rem; transition: background 0.2s; }
                button:hover { background: #1d4ed8; }
                .error { color: #ef4444; margin-top: 1rem; font-size: 0.875rem; background: #fee2e2; padding: 0.5rem; border-radius: 0.375rem; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Admin Access</h1>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">Enter password to download confidential data.</p>
                <form method="GET">
                    <input type="password" name="secret" placeholder="Enter secure password" required autofocus>
                    <button type="submit">Unlock & Download</button>
                    ${secret ? '<div class="error">Incorrect password. Please try again.</div>' : ''}
                </form>
            </div>
        </body>
        </html>
        `;

        return new NextResponse(html, {
            headers: { 'Content-Type': 'text/html' },
        });
    }

    const signups = getAllSignups();

    const rows = signups.map((signup, index) => {
        const bmConfig = QUESTION_CONFIG.businessModel;
        const statusConfig = QUESTION_CONFIG.status;
        const techConfig = QUESTION_CONFIG.techNeeds;
        const timeConfig = QUESTION_CONFIG.timeline;

        const bmAnswer = bmConfig.options[signup.qualification?.businessModel as keyof typeof bmConfig.options] ?? signup.qualification?.businessModel ?? 'N/A';
        const statusAnswer = statusConfig.options[signup.qualification?.status as keyof typeof statusConfig.options] ?? signup.qualification?.status ?? 'N/A';
        const techAnswer = techConfig.options[signup.qualification?.techNeeds as keyof typeof techConfig.options] ?? signup.qualification?.techNeeds ?? 'N/A';
        const timeAnswer = timeConfig.options[signup.qualification?.timeline as keyof typeof timeConfig.options] ?? signup.qualification?.timeline ?? 'N/A';

        return {
            '#': index + 1,
            'Signup ID': signup.id,
            'Created At': signup.createdAt,
            [bmConfig.question]: bmAnswer,
            [statusConfig.question]: statusAnswer,
            [techConfig.question]: techAnswer,
            [timeConfig.question]: timeAnswer,
            'First Name': signup.contact.firstName,
            'Last Name': signup.contact.lastName,
            'Email': signup.contact.email,
            'Company Name': signup.contact.companyName,
            'Phone': signup.contact.phone,
            'Telegram': signup.contact.telegram ?? '',
            'Whatsapp': signup.contact.whatsapp ?? '',
            'Meeting Time': signup.meetingDetails?.startTime ? new Date(signup.meetingDetails.startTime).toLocaleString() : '',
            'Meeting End': signup.meetingDetails?.endTime ? new Date(signup.meetingDetails.endTime).toLocaleString() : '',
            'Meeting Link': signup.meetingDetails?.joinUrl ?? '',
            'Meeting Location': signup.meetingDetails?.location ?? '',
            'Calendly Event': signup.meetingDetails?.eventUri ?? '',
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Signups');

    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    return new NextResponse(buffer as any, {
        status: 200,
        headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': `attachment; filename="signups-${new Date().toISOString().slice(0, 10)}.xlsx"`,
        },
    });
}
