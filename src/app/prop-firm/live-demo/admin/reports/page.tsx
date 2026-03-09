import { Metadata } from 'next';
import ReportsContent from './ReportsContent';

export const metadata: Metadata = {
    title: 'Advanced CRM Reports | Business Intelligence | FxTrusts',
    description: 'Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.',
    openGraph: {
        title: 'Advanced CRM Reports | Business Intelligence | FxTrusts',
        description: 'Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.',
        type: 'website',
        url: 'https://fxtrusts.com/prop-firm/live-demo/admin/reports',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Advanced CRM Reports | Business Intelligence | FxTrusts',
        description: 'Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/prop-firm/live-demo/admin/reports',
    },
};

export default function ReportsPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Advanced CRM Reports | Business Intelligence | FxTrusts","description":"Generate detailed business reports on deposits, withdrawals, trading volumes, and IB performance.","url":"https://fxtrusts.com/prop-firm/live-demo/admin/reports"}) }}
      />
      <h1 className="sr-only">Reports Page</h1>
            <ReportsContent />
        </>
    );
}
