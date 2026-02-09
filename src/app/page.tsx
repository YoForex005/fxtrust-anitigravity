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
import TurnkeySolutions from '@/components/TurnkeySolutions';
import Operations from '@/components/Operations';
import LiveDemo from '@/components/LiveDemo';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "B2B Broker Solutions | Liquidity, CRM & White Label | FxTrusts",
  description: "FxTrusts is the premier B2B Broker technology provider. The complete ecosystem: Liquidity, CRM, and MT5 White Label. Superior technology, better pricing.",
  keywords: [
    'B2B forex broker',
    'forex broker technology',
    'forex liquidity provider',
    'MT5 white label',
    'forex CRM',
    'broker technology provider',
    'white label forex',
    'forex brokerage solutions',
    'institutional trading',
    'forex broker startup',
    'B2Broker alternative',
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
    canonical: 'https://fxtrusts.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FxTrusts',
    url: 'https://fxtrusts.com',
    logo: 'https://fxtrusts.com/logo.png',
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
      <TurnkeySolutions />
      <Operations />
      <LiveDemo />
      <Footer />
    </>
  );
}
