import { Metadata } from 'next';
import DashboardsContent from './DashboardsContent';

export const metadata: Metadata = {
    title: 'CRM Dashboards | Analytics & Reporting | FxTrusts',
    description: 'Real-time Forex CRM dashboards. Visualize sales performance, lead conversion rates, and deposit trends.',
    openGraph: {
        title: 'CRM Dashboards | Analytics & Reporting | FxTrusts',
        description: 'Real-time Forex CRM dashboards. Visualize sales performance, lead conversion rates, and deposit trends.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo/admin/dashboards',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CRM Dashboards | Analytics & Reporting | FxTrusts',
        description: 'Real-time Forex CRM dashboards. Visualize sales performance, lead conversion rates, and deposit trends.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo/admin/dashboards',
    },
};

export default function DashboardsPage() {
    return (
        <>
            <h1 className="sr-only">Dashboards Page</h1>
            <DashboardsContent />
        </>
    );
}
