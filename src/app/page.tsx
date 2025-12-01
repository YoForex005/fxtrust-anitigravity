import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Logos from '@/components/Logos';
import Problem from '@/components/Problem';
import Solutions from '@/components/Solutions';
import Operations from '@/components/Operations';
import LiveDemo from '@/components/LiveDemo';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Logos />
      <Problem />
      <Features />
      <Solutions />
      <Operations />
      <LiveDemo />
      <Footer />
    </main>
  );
}
