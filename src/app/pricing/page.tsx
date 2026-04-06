import { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  alternates: {
    canonical: '/pricing',
  },
    title: 'Forex Broker CRM Pricing | Transparent Costs | FxTrusts',
    description: 'Transparent pricing for Forex Broker CRM and MT5 White Label. No hidden fees. Calculator included.',
    openGraph: {
        title: 'Transparent Pricing for Forex Brokers',
        description: 'See exactly what you pay. No \"contact sales\" for basic pricing.',
        type: 'website',
        url: 'https://fxtrusts.com/pricing',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Transparent Pricing for Forex Brokers',
        description: 'See exactly what you pay. No hidden fees.',
    },
};

export default function PricingPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Forex Broker CRM Pricing | Transparent Costs | FxTrusts","description":"Transparent pricing for Forex Broker CRM and MT5 White Label. No hidden fees. Calculator included.","url":"https://fxtrusts.com/pricing"}) }}
      />
      <h1 className="sr-only">Pricing Page</h1>
            <PricingContent />
        </>
    );
}
