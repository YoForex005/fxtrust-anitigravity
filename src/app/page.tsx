import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MT5Badge from '@/components/MT5Badge';
import Logos from '@/components/Logos';
import Problem from '@/components/Problem';

// Lazy load below-the-fold components
const ROICalculator = dynamic(() => import('@/components/ROICalculator'), { ssr: true });
const Features = dynamic(() => import('@/components/Features'), { ssr: true });
const TrustBadges = dynamic(() => import('@/components/TrustBadges'), { ssr: true });
const LiveStats = dynamic(() => import('@/components/LiveStats'), { ssr: true });
const PricingPreview = dynamic(() => import('@/components/PricingPreview'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const Solutions = dynamic(() => import('@/components/Solutions'), { ssr: true });
const TurnkeySolutions = dynamic(() => import('@/components/TurnkeySolutions'), { ssr: true });
const Operations = dynamic(() => import('@/components/Operations'), { ssr: true });
const LiveDemo = dynamic(() => import('@/components/LiveDemo'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

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
