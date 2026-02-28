import { Metadata } from 'next';
import AccountDetailContent from './AccountDetailContent';

export const metadata: Metadata = {
    title: 'Client Account Profile | CRM Record View | FxTrusts',
    description: 'Comprehensive view of client data, including personal info, financial history, and activity logs.',
    openGraph: {
        title: 'Client Account Profile | FxTrusts',
        description: 'Comprehensive view of client data, including personal info, financial history, and activity logs.',
    },
    twitter: {
        card: 'summary',
        title: 'Client Account Profile | FxTrusts',
        description: 'Comprehensive view of client data, including personal info, financial history, and activity logs.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function AccountDetailPage({ params }: PageProps) {
    const { id } = await params;
    return (
        <>
            <h1 className="sr-only">Client Account Profile</h1>
            <AccountDetailContent accountId={id} />
        </>
    );
}
