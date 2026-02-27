import { Metadata } from 'next';
import NewAccountContent from './NewAccountContent';

export const metadata: Metadata = {
    title: 'New Client Registration | Account Creation | FxTrusts',
    description: 'Manually register a new client account directly into the CRM system.',
    openGraph: {
        title: 'New Client Registration | FxTrusts',
        description: 'Comprehensive view of client data, including personal info, financial history, and activity logs.',
    },
    twitter: {
        card: 'summary',
        title: 'New Client Registration | FxTrusts',
        description: 'Comprehensive view of client data, including personal info, financial history, and activity logs.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function NewAccountPage() {
    return (
        <>
            <h1 className="sr-only">New Account Page</h1>
            <NewAccountContent />
        </>
    );
}
