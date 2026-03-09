import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Live CRM Demo | FxTrusts',
    description: 'Try the FxTrusts CRM live demo. No login required. Explore the admin dashboard and client portal.',
    openGraph: {
        title: 'Live CRM Demo | FxTrusts',
        description: 'Try the FxTrusts CRM live demo. No login required.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Live CRM Demo | FxTrusts',
        description: 'Try the FxTrusts CRM live demo. No login required.',
    },
};

export default function LiveDemoPage() {
    redirect('/live-demo/admin');
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Live CRM Demo | FxTrusts", "description": "Try the FxTrusts CRM live demo. No login required. Explore the admin dashboard and client portal.", "url": "https://fxtrusts.com/live-demo" }) }}
            />
            <h1 className="sr-only">Live Demo Redirect</h1>
        </>
    );
}
