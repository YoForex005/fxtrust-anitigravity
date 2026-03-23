'use client';

import {
  Shield,
  Zap,
  Globe,
  Smartphone,
  RefreshCw,
  Headphones,
  Layers,
  Code,
} from "lucide-react";

const features = [
  {
    title: "Full Whitelabel Solutions",
    description: "Deploy any product under your own brand. Your logo, your colors, your domain.",
    icon: <Layers />,
  },
  {
    title: "Multi-Platform Support",
    description: "cTrader, MT5, MT4, RTX5, Trade Locker, Match Trader — all connected.",
    icon: <Globe />,
  },
  {
    title: "Risk Management Engine",
    description: "Built-in risk management plugin to protect your brokerage and traders.",
    icon: <Shield />,
  },
  {
    title: "Lightning Fast Execution",
    description: "Sub-millisecond trade execution with 99.99% uptime guarantee.",
    icon: <Zap />,
  },
  {
    title: "Mobile + Web + Desktop",
    description: "iOS, Android, and Web apps included with every product.",
    icon: <Smartphone />,
  },
  {
    title: "Cross-Platform Trade Copying",
    description: "Master to unlimited slaves across MT5, MT4, cTrader, and more.",
    icon: <RefreshCw />,
  },
  {
    title: "24/7 Technical Support",
    description: "Dedicated support team available around the clock for your business.",
    icon: <Headphones />,
  },
  {
    title: "Custom Development",
    description: "Need something specific? We build custom forex solutions from scratch.",
    icon: <Code />,
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{ padding: '4rem 1rem', background: '#f8fafc' }} id="features">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', border: '1px solid #e2e8f0', borderRadius: 9999, color: '#64748b', marginBottom: '1rem' }}>
            Why FxTrusts
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a' }}>
            Built for Performance. Designed for Scale.
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: 600, margin: '0.75rem auto 0' }}>
            Everything you need to launch and grow a forex brokerage.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0 }}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) {
  return (
    <div
      style={{
        padding: '2rem 1.5rem',
        borderRight: '1px solid #e2e8f0',
        borderBottom: index < 4 ? '1px solid #e2e8f0' : 'none',
        position: 'relative',
        cursor: 'default',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#f1f5f9'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
    >
      <div style={{ color: '#64748b', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, maxWidth: 280 }}>{description}</p>
    </div>
  );
}
