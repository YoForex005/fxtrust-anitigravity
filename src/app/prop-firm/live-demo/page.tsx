import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/prop-firm/live-demo',
  },
    title: 'Prop Firm Live Demo | FxTrusts',
    description: 'Interactive demo of the FxTrusts Prop Firm platform.',
    openGraph: {
        title: 'Prop Firm Live Demo | FxTrusts',
        description: 'Interactive demo of the FxTrusts Prop Firm platform.',
    },
    twitter: {
        card: 'summary',
        title: 'Prop Firm Live Demo | FxTrusts',
        description: 'Interactive demo of the FxTrusts Prop Firm platform.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function PropFirmLiveDemoPage() {
    redirect('/prop-firm/live-demo/admin');
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Prop Firm Live Demo | FxTrusts", "description": "Interactive demo of the FxTrusts Prop Firm platform.", "url": "https://fxtrusts.com" }) }}
            />
            <h1 className="sr-only">Prop Firm Live Demo Redirect</h1>
        </>
    );
}
