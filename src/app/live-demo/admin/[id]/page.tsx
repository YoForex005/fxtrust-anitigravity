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
    params: {
        id: string;
    };
}

export default function AccountDetailPage({ params }: PageProps) {
    return <AccountDetailContent accountId={params.id} />;
}
