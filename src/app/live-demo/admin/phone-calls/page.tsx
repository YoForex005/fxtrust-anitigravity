import { Metadata } from 'next';
import PhoneCallsContent from './PhoneCallsContent';

export const metadata: Metadata = {
    title: 'Call Logs & Recording | VoIP Integration | FxTrusts',
    description: 'Track all sales and support calls. Integrated with major VoIP providers for automatic logging and recording.',
    openGraph: {
        title: 'Call Logs & Recording | VoIP Integration | FxTrusts',
        description: 'Track all sales and support calls. Integrated with major VoIP providers for automatic logging and recording.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo/admin/phone-calls',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Call Logs & Recording | VoIP Integration | FxTrusts',
        description: 'Track all sales and support calls. Integrated with major VoIP providers for automatic logging and recording.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo/admin/phone-calls',
    },
};

export default function PhoneCallsPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Call Logs & Recording | VoIP Integration | FxTrusts","description":"Track all sales and support calls. Integrated with major VoIP providers for automatic logging and recording.","url":"https://fxtrusts.com/live-demo/admin/phone-calls"}) }}
      />
      <h1 className="sr-only">Phone Calls Page</h1>
            <PhoneCallsContent />
        </>
    );
}
