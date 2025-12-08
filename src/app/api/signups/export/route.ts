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

export async function GET() {
    const signups = getAllSignups();

    const rows = signups.map((signup, index) => {
        const bmConfig = QUESTION_CONFIG.businessModel;
        const statusConfig = QUESTION_CONFIG.status;
        const techConfig = QUESTION_CONFIG.techNeeds;
        const timeConfig = QUESTION_CONFIG.timeline;

        const bmAnswer = bmConfig.options[signup.qualification.businessModel as keyof typeof bmConfig.options] ?? signup.qualification.businessModel;
        const statusAnswer = statusConfig.options[signup.qualification.status as keyof typeof statusConfig.options] ?? signup.qualification.status;
        const techAnswer = techConfig.options[signup.qualification.techNeeds as keyof typeof techConfig.options] ?? signup.qualification.techNeeds;
        const timeAnswer = timeConfig.options[signup.qualification.timeline as keyof typeof timeConfig.options] ?? signup.qualification.timeline;

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
