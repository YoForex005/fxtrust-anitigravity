import { Metadata } from 'next';
import NewAccountContent from './NewAccountContent';

export const metadata: Metadata = {
  alternates: {
    canonical: '/live-demo/admin/new',
  },
    title: 'New Client Registration | Account Creation | FxTrusts',
    description: 'Manually register a new client account directly into the CRM system.',
    openGraph: {
        title: 'New Client Registration | FxTrusts',
        description: 'Manually register a new client account directly into the CRM system.',
    },
    twitter: {
        card: 'summary',
        title: 'New Client Registration | FxTrusts',
        description: 'Manually register a new client account directly into the CRM system.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function NewAccountPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"New Client Registration | Account Creation | FxTrusts","description":"Manually register a new client account directly into the CRM system.","url":"https://fxtrusts.com"}) }}
      />
      <h1 className="sr-only">New Account Page</h1>
            <NewAccountContent />
        </>
    );
}
