import { Metadata } from 'next';
import ThankYouPageClient from '@/components/onboarding/ThankYouPageClient';

export const metadata: Metadata = {
    title: 'Thank You | FxTrusts',
    description: 'Your strategy session with FxTrusts has been scheduled.',
    openGraph: {
        title: 'Thank You | FxTrusts',
        description: 'Your strategy session has been confirmed. We\'ve sent a calendar invitation and architecture diagram to your email.',
        type: 'website',
        url: 'https://fxtrusts.com/thank-you',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Thank You | FxTrusts',
        description: 'Your strategy session has been confirmed.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/thank-you',
    },
};

export default function ThankYouPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Thank You | FxTrusts","description":"Your strategy session with FxTrusts has been scheduled.","url":"https://fxtrusts.com/thank-you"}) }}
      />
      <h1 className="sr-only">Thank You Page</h1>
            <ThankYouPageClient />
        </>
    );
}
