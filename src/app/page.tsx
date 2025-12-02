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

export default function Home() {
  return (
    <>
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
