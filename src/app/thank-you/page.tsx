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
    return <ThankYouPageClient />;
}
