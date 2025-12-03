import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MT5Badge from '@/components/MT5Badge';
import Logos from '@/components/Logos';
import Problem from '@/components/Problem';
import ROICalculator from '@/components/ROICalculator';
import Features from '@/components/Features';
import TrustBadges from '@/components/TrustBadges';
import LiveStats from '@/components/LiveStats';
import PricingPreview from '@/components/PricingPreview';
import Testimonials from '@/components/Testimonials';
import Solutions from '@/components/Solutions';
import Operations from '@/components/Operations';
import LiveDemo from '@/components/LiveDemo';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "B2B Broker Solutions | Liquidity, CRM & White Label | FxTrusts",
  description: "FxTrusts is the premier B2B Broker technology provider. We offer a complete ecosystem: Liquidity, CRM, and MT5 White Label. Better technology than B2Broker, better pricing.",
  alternates: {
    canonical: 'https://www.fxtrusts.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FxTrusts',
    url: 'https://www.fxtrusts.com',
    logo: 'https://www.fxtrusts.com/fxtrusts_logo_v2.png',
    sameAs: [
      'https://twitter.com/fxtrusts',
      'https://www.linkedin.com/company/fxtrusts',
      'https://www.facebook.com/fxtrusts'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123-456',
      contactType: 'sales',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Spanish', 'Chinese']
    },
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'FxTrusts CRM',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Comprehensive Forex CRM for Brokers with MT5 integration.'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <MT5Badge />
      <Logos />
      <Problem />
      <ROICalculator />
      <Features />
      <TrustBadges />
      <LiveStats />
      <PricingPreview />
      <Testimonials />
      <Solutions />
      <Operations />
      <LiveDemo />
      <Footer />
    </>
  );
}
