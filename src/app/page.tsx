import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MT5Badge from '@/components/MT5Badge';
import Logos from '@/components/Logos';
import Problem from '@/components/Problem';

// Lazy load below-the-fold components
const Products = dynamic(() => import('@/components/Products'), { ssr: true });

const Features = dynamic(() => import('@/components/Features'), { ssr: true });
const TrustBadges = dynamic(() => import('@/components/TrustBadges'), { ssr: true });
const LiveStats = dynamic(() => import('@/components/LiveStats'), { ssr: true });

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
    'metatrader 5 white label',
    'white label brokerage solution',
    'white label trading platform',
    'turnkey brokerage solution',
    'start forex brokerage',
    'how to start a forex brokerage with mt5 white label',
    'mt5 white label cost',
    'best mt5 white label features for new brokers',
    'forex broker crm',
    'broker crm',
    'trader’s room',
    'forex back office',
    'what is a forex crm and why brokers need one',
    'best forex crm features for broker growth',
    'how trader’s room improves client onboarding',
    'how to automate broker back office operations',
    'prop firm crm vs forex broker crm',
    'tier 1 liquidity provider',
    'liquidity bridge',
    'liquidity aggregation',
    'mt5 liquidity bridge',
    'how to choose a forex liquidity provider',
    'prime of prime liquidity explained',
    'a-book vs b-book vs hybrid execution explained',
    'best execution setup for new forex brokers',
    'key liquidity metrics every broker should monitor',
    'prop firm technology',
    'prop firm crm',
    'prop trading platform',
    'white label prop firm solution',
    'prop challenge platform',
    'how to start a prop firm in 2026',
    'best prop firm technology stack',
    'how prop challenge systems work',
    'how to automate funded account evaluation',
    'risk rules every prop trading firm needs',
    'copy trading platform',
    'social trading platform',
    'pamm solution',
    'mam solution',
    'trade copier',
    'pamm vs mam vs copy trading explained',
    'how brokers make money from copy trading',
    'how to launch a white label copy trading platform',
    'risks and compliance issues in copy trading',
    'copy trading as a growth channel for brokers',
    'forex payment gateway',
    'broker payment solution',
    'kyc aml for forex brokers',
    'brokerage compliance solutions',
    'forex licensing support',
    'best payment gateway options for forex brokers',
    'how forex brokers automate kyc and aml',
    'what licenses does a forex brokerage need',
    'how payout systems work for prop firms',
    'compliance checklist before launching a brokerage'
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
  return (
    <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"B2B Broker Solutions | Liquidity, CRM & White Label | FxTrusts","description":"FxTrusts is the premier B2B Broker technology provider. The complete ecosystem: Liquidity, CRM, and MT5 White Label. Superior technology, better pricing.","url":"https://fxtrusts.com"}) }}
      />
      <h1 className="sr-only">Home</h1>
      <Header />
      <Hero />
      <MT5Badge />
      <Logos />
      <Products />
      <Problem />

      <Features />
      <TrustBadges />
      <LiveStats />

      <Testimonials />
      <Solutions />
      <TurnkeySolutions />
      <Operations />
      <LiveDemo />
      <Footer />
    </>
  );
}
