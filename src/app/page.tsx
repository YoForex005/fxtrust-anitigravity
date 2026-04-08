import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load below-the-fold homepage sections
const LogoCloudSection = dynamic(() => import('@/components/home/LogoCloudSection'), { ssr: true });
const PortfolioShowcase = dynamic(() => import('@/components/home/PortfolioShowcase'), { ssr: true });
const FeaturesGrid = dynamic(() => import('@/components/home/FeaturesGrid'), { ssr: true });
const ProductTabs = dynamic(() => import('@/components/home/ProductTabs'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), { ssr: true });
const PricingSection = dynamic(() => import('@/components/home/PricingSection'), { ssr: true });
const FxTrustsStickyFooter = dynamic(() => import('@/components/home/FxTrustsStickyFooter'), { ssr: true });

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FxTrusts | Forex White Label & Custom Technology Solutions",
  description: "FxTrusts delivers end-to-end forex tech: PropFirm systems, AI trading, CRM, Trade Copiers, RTX5 Terminals, and custom whitelabel websites.",
  keywords: [
    'forex technology provider',
    'prop firm platform',
    'forex CRM whitelabel',
    'trade copier all platforms',
    'RTX5 trading terminal',
    'YoForex AI',
    'forex whitelabel solutions',
    'custom forex website',
    'B2B forex broker',
    'forex brokerage solutions',
    'prop trading technology',
    'mt5 white label',
    'turnkey brokerage solution',
    'forex broker crm',
    'prop firm crm',
    'copy trading platform',
    'forex payment gateway',
    'kyc aml for forex brokers',
    'forex liquidity provider'
  ],
  openGraph: {
    title: 'B2B Broker Solutions | Liquidity, CRM & White Label',
    description: 'Complete forex brokerage ecosystem: MT5 White Label, CRM, Liquidity, and Crypto Payments. Launch your brokerage in weeks.',
    type: 'website',
    url: 'https://fxtrusts.com',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'FxTrusts - B2B Forex Broker Technology',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Broker Solutions | Liquidity, CRM & White Label',
    description: 'Complete forex brokerage ecosystem: MT5 White Label, CRM, Liquidity, and Crypto Payments. Launch your brokerage in weeks.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "B2B Broker Solutions | Liquidity, CRM & White Label | FxTrusts", "description": "FxTrusts is the premier B2B Broker technology provider. The complete ecosystem: Liquidity, CRM, and MT5 White Label. Superior technology, better pricing.", "url": "https://fxtrusts.com" }) }}
      />
      <h1 className="sr-only">Home</h1>
      <Header />
      <Hero />
      <div style={{ position: 'relative', zIndex: 1, background: '#fff' }}>
        <LogoCloudSection />
        <PortfolioShowcase />
        <FeaturesGrid />
        <ProductTabs />
        <TestimonialsSection />
        {/* <PricingSection /> */}
        {/* <FxTrustsStickyFooter /> */}
      </div>
    </>
  );
}
