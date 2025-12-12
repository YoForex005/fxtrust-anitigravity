import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'System Status | FxTrusts',
    description: 'Real-time operational status of FxTrusts trading infrastructure, CRM, API, and payment systems.',
    openGraph: {
        title: 'FxTrusts System Status',
        description: 'Real-time operational status of FxTrusts trading infrastructure.',
        type: 'website',
        url: 'https://fxtrusts.com/status',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FxTrusts System Status',
        description: 'Real-time operational status of FxTrusts trading infrastructure.',
    },
};

export default function StatusRedirect() {
    redirect('/resources/status');
}
