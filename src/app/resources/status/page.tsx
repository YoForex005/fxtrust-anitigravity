import { Metadata } from 'next';
import StatusContent from './StatusContent';

export const metadata: Metadata = {
    title: 'System Status | FxTrusts',
    description: 'Real-time operational status of FxTrusts trading infrastructure, CRM, API, and payment processing systems.',
    openGraph: {
        title: 'FxTrusts System Status',
        description: 'Real-time operational status of FxTrusts trading infrastructure.',
        type: 'website',
    },
};

export default function StatusPage() {
    return <StatusContent />;
}
