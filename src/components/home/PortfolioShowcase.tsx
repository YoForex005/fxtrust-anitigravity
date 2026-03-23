'use client';

import AnimatedCardStack from "@/components/ui/animate-card-animation";

export default function PortfolioShowcase() {
  return (
    <section style={{ padding: '4rem 1rem', background: '#fff' }} id="portfolio">
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', border: '1px solid #e2e8f0', borderRadius: 9999, color: '#64748b', marginBottom: '1rem' }}>
          FxTrusts Portfolio
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
          Everything Your Forex Business Needs
        </h2>
        <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: 600, margin: '0 auto 2rem' }}>
          From prop firm platforms to AI trading, CRM systems to cross-platform trade copiers — all fully whitelabeled under your brand.
        </p>
        <AnimatedCardStack />
      </div>
    </section>
  );
}
