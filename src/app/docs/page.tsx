import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/docs',
  },
    title: 'API Documentation | FxTrusts',
    description: 'Complete API documentation for FxTrusts CRM and MT5 integration. REST API, webhooks, and SDK reference.',
    openGraph: {
        title: 'API Documentation | FxTrusts',
        description: 'Complete API documentation for FxTrusts CRM and MT5 integration.',
        type: 'website',
        url: 'https://fxtrusts.com/docs',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'API Documentation | FxTrusts',
        description: 'Complete API documentation for FxTrusts CRM and MT5 integration.',
    },
};

export default function DocsRedirect() {
    redirect('/resources/api-docs');
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "API Documentation | FxTrusts", "description": "Complete API documentation for FxTrusts CRM and MT5 integration. REST API, webhooks, and SDK reference.", "url": "https://fxtrusts.com/docs" }) }}
            />
            <h1 className="sr-only">API Documentation Redirect</h1>
        </>
    );
}
