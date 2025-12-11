import { Metadata } from 'next';
import ReportsContent from './ReportsContent';

export const metadata: Metadata = {
    title: 'Advanced CRM Reports | Business Intelligence | FxTrusts',
    description: 'Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.',
    openGraph: {
        title: 'Advanced CRM Reports | Business Intelligence | FxTrusts',
        description: 'Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo/admin/reports',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Advanced CRM Reports | Business Intelligence | FxTrusts',
        description: 'Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo/admin/reports',
    },
};

export default function ReportsPage() {
    return <ReportsContent />;
}
