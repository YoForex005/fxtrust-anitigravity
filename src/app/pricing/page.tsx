import { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
    title: 'Forex Broker CRM Pricing | Transparent Costs | FxTrusts',
    description: 'Transparent pricing for Forex Broker CRM and MT5 White Label. No hidden fees. Calculator included.',
    openGraph: {
        title: 'Transparent Pricing for Forex Brokers',
        description: 'See exactly what you pay. No "contact sales" for basic pricing.',
        type: 'website',
    },
};

export default function PricingPage() {
    return <PricingContent />;
}
