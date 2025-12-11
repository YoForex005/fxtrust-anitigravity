import { Metadata } from 'next';
import DynamicsAdminContent from './DynamicsAdminContent';

export const metadata: Metadata = {
    title: 'Forex CRM Live Demo | Admin Portal Dynamics 365 | FxTrusts',
    description: 'Live interactive demo of FxTrusts Forex CRM Admin Portal. Experience the Dynamics 365-powered interface, account management, and reporting tools.',
    keywords: ['forex crm demo', 'dynamics 365 forex', 'admin portal demo', 'broker crm test'],
    openGraph: {
        title: 'Forex CRM Live Demo | Admin Portal Dynamics 365 | FxTrusts',
        description: 'Live interactive demo of FxTrusts Forex CRM Admin Portal. Experience the Dynamics 365-powered interface, account management, and reporting tools.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo/admin',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forex CRM Live Demo | Admin Portal Dynamics 365 | FxTrusts',
        description: 'Live interactive demo of FxTrusts Forex CRM Admin Portal. Experience the Dynamics 365-powered interface, account management, and reporting tools.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo/admin',
    },
};

export default function DynamicsAdminPage() {
    return <DynamicsAdminContent />;
}
