import { Metadata } from 'next';
import AccountDetailContent from './AccountDetailContent';

export const metadata: Metadata = {
    title: 'Client Account Profile | CRM Record View | FxTrusts',
    description: 'Comprehensive view of client data, including personal info, financial history, and activity logs.',
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
    return <AccountDetailContent accountId={id} />;
}
