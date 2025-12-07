import { Metadata } from 'next';
import PricingSchema from '@/components/seo/PricingSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Pricing | Transparent Broker Technology Pricing | FxTrusts',
    description: 'Transparent, usage-based pricing for forex broker infrastructure. CRM from $35/month per account. No setup fees, no hidden costs.',
    keywords: ['forex broker pricing', 'CRM pricing', 'white label cost', 'broker technology pricing', 'forex CRM cost'],
    openGraph: {
        title: 'Pricing | No Setup Fees, Ever',
        description: 'Usage-based pricing for broker technology. CRM from $35/month per account.',
        type: 'website',
        url: 'https://fxtrusts.com/pricing',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/pricing',
    },
};

const pricingProducts = [
    {
        name: 'FxTrusts Entry Plan',
        description: 'Perfect for startups and small brokerages. Includes CRM, Client Portal, and basic IB system.',
        price: '700',
        priceCurrency: 'USD',
        priceSpecification: {
            price: '35',
            priceCurrency: 'USD',
            unitText: 'per account/month',
        },
        features: [
            'Forex CRM System',
            'Client Portal',
            'Basic IB Module',
            'Payment Gateway Integration',
            'MT5 Integration',
            'Email Support',
        ],
    },
    {
        name: 'FxTrusts Standard Plan',
        description: 'For growing brokerages with 150+ accounts. Advanced features and priority support.',
        price: '1300',
        priceCurrency: 'USD',
        priceSpecification: {
            price: '9.50',
            priceCurrency: 'USD',
            unitText: 'per account/month',
        },
        features: [
            'Everything in Entry',
            'Advanced IB Multi-Tier',
            'Custom Branding',
            'API Access',
            'Priority Support',
            'Dedicated Account Manager',
        ],
    },
    {
        name: 'FxTrusts Enterprise Plan',
        description: 'Full white-label solution for established brokerages. Custom development and SLA.',
        price: '0',
        priceCurrency: 'USD',
        features: [
            'Everything in Standard',
            'MT5 White Label',
            'Custom Development',
            'Dedicated Infrastructure',
            '24/7 Phone Support',
            'SLA Guarantee',
        ],
    },
];

const pricingFaqs = [
    {
        question: 'What is included in the base monthly fee?',
        answer: 'Everything a normal CRM should include: the platform, Client Portal, IB Module, and integrations. We apologize in advance for not charging you separately for each button click. MT5 White Label fees are separate (that one is MetaQuotes\' fault, not ours).',
    },
    {
        question: 'Are there any setup or onboarding fees?',
        answer: 'No. We are aware this is suspicious. Our competitors charge $5,000-$15,000 for the privilege of clicking "install." We regrettably forgot to implement this industry tradition. You pay only the monthly subscription from day one.',
    },
    {
        question: 'How does the per-account pricing work?',
        answer: 'You pay only for active trading accounts. Demo accounts, dormant accounts, and IB accounts are free. Yes, free. We\'ve been told this is "bad for business." The rate also decreases as you scale, which our accountant describes as "professionally concerning."',
    },
    {
        question: 'Do you require annual contracts?',
        answer: 'No. Entry and Standard plans are month-to-month. You can leave whenever you want. We know this gives you "options" and "freedom," which industry veterans tell us is terrifying. Enterprise plans have 12-month terms, but honestly, that\'s negotiable too.',
    },
    {
        question: 'What happens if I want to cancel?',
        answer: 'You give us 30 days notice. We export all your data in whatever format you want (SQL, CSV, JSON—dealer\'s choice). You own your data. No hostage situations. We\'ve been told we\'re "bad at vendor lock-in." We\'re working on it.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'Bank wires, credit cards, and crypto (USDT, BTC). We invoice monthly in advance. If you\'d like to pay 12 months upfront for a discount, we\'re open to that too. Just trying to be reasonable. We know, it\'s weird.',
    },
];

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PricingSchema products={pricingProducts} />
            <FAQSchema faqs={pricingFaqs} />
            {children}
        </>
    );
}


