import { Metadata } from 'next';
import EmailsContent from './EmailsContent';

export const metadata: Metadata = {
    title: 'Integrated Email System | CRM Communications | FxTrusts',
    description: 'Manage all client communications directly from the CRM. Track email history, open rates, and automated responses.',
    openGraph: {
        title: 'Integrated Email System | CRM Communications | FxTrusts',
        description: 'Manage all client communications directly from the CRM. Track email history, open rates, and automated responses.',
        type: 'website',
        url: 'https://fxtrusts.com/prop-firm/live-demo/admin/emails',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Integrated Email System | CRM Communications | FxTrusts',
        description: 'Manage all client communications directly from the CRM. Track email history, open rates, and automated responses.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/prop-firm/live-demo/admin/emails',
    },
};

export default function EmailsPage() {
    return (
        <>
            <h1 className="sr-only">Emails Page</h1>
            <EmailsContent />
        </>
    );
}
