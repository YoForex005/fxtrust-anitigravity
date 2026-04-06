import { Metadata } from 'next';
import AccountDetailContent from './AccountDetailContent';

export const metadata: Metadata = {
  alternates: {
    canonical: '/live-demo/admin/[id]',
  },
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
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Client Account Profile | CRM Record View | FxTrusts","description":"Comprehensive view of client data, including personal info, financial history, and activity logs.","url":"https://fxtrusts.com"}) }}
      />
      <h1 className="sr-only">Client Account Profile</h1>
            <AccountDetailContent accountId={id} />
        </>
    );
}
