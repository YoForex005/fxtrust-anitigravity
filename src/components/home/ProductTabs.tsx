'use client';

import { useState } from 'react';
import { MonitorSmartphone, BarChart3, Copy, Brain, Globe, Users } from "lucide-react";
import Link from "next/link";

const tabs = [
  {
    id: "propfirm",
    icon: <BarChart3 size={20} />,
    bigIcon: <BarChart3 size={56} />,
    label: "PropFirm",
    color: "#2563eb",
    badge: "Whitelabel Ready",
    title: "PropFirm Admin + Client Platform",
    description: "Complete prop trading infrastructure with Admin and Client dashboards. Mobile apps for iOS & Android included. Built-in risk management plugin.",
    features: ["Admin & Client Dashboards", "iOS + Android Apps", "Risk Management Plugin", "Full Whitelabel"],
    url:"solutions/prop-firm"  
  },
  {
    id: "rtx5",
    icon: <MonitorSmartphone size={20} />,
    bigIcon: <MonitorSmartphone size={56} />,
    label: "RTX5 Terminal",
    color: "#7c3aed",
    badge: "Next Generation",
    title: "Orrnn RTX5 Trading Terminal",
    description: "Next-generation trading terminal with Manager Terminal, Mobile Apps (iOS + APK), and Web Trading interface. Lightning-fast execution.",
    features: ["Manager Terminal", "Mobile Apps (iOS + APK)", "Web Trading", "Ultra-Fast Execution"],
    url:"solutions/rtx5"  
  },
  {
    id: "crm",
    icon: <Users size={20} />,
    bigIcon: <Users size={56} />,
    label: "Forex CRM",
    color: "#059669",
    badge: "Fully Whitelabel",
    title: "Forex CRM — Admin + Client + Mobile",
    description: "Complete CRM supporting cTrader, MT5, MT4, RTX5 and more. Deploy fully whitelabeled under your brand.",
    features: ["Multi-Platform Support", "Admin + Client Portal", "Mobile App Included", "Whitelabel Ready"],
    url:"solutions/crm"  
  },
  {
    id: "copier",
    icon: <Copy size={20} />,
    bigIcon: <Copy size={56} />,
    label: "Trade Copier",
    color: "#d97706",
    badge: "Universal",
    title: "Cross-Platform Trade Copier",
    description: "Copy trades across MT5, MT4, cTrader, Trade Locker, Match Trader, RTX5. Master to unlimited slave accounts.",
    features: ["All Platforms Supported", "Master → Unlimited Slaves", "Risk Controls", "Any-to-Any Copying"],
    url:"solutions/trade-copier"  
  },
  {
    id: "ai",
    icon: <Brain size={20} />,
    bigIcon: <Brain size={56} />,
    label: "YoForex AI",
    color: "#dc2626",
    badge: "AI Powered",
    title: "YoForex AI — Smart Trading",
    description: "AI-powered trading with Mobile and Web apps. Multi-AI Consensus Engine for institutional precision.",
    features: ["Mobile + Web App", "AI Consensus Engine", "ML-Powered Signals", "Institutional Precision"],
    url:"solutions/yoforex-ai"  
  },
  {
    id: "websites",
    icon: <Globe size={20} />,
    bigIcon: <Globe size={56} />,
    label: "Custom Websites",
    color: "#0891b2",
    badge: "Bespoke",
    title: "Whitelabel & Custom Forex Websites",
    description: "Fully custom forex brokerage websites. Responsive, SEO-optimized, conversion-focused.",
    features: ["Custom Design", "Mobile-First", "SEO Optimized", "Conversion Focused"],
  },
];

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section style={{ padding: '4rem 1rem', background: '#fff' }} id="products">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', border: '1px solid #e2e8f0', borderRadius: 9999, color: '#64748b', marginBottom: '1rem' }}>
            Our Products
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a' }}>
            The Complete Forex Technology Suite
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: 550, margin: '0.75rem auto 0' }}>
            Six powerful products — all whitelabeled, all customizable.
          </p>
        </div>

        {/* Tab buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1rem',
                borderRadius: 12,
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: active === i ? '#f1f5f9' : 'transparent',
                color: active === i ? '#0f172a' : '#64748b',
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#f8fafc', borderRadius: 16, padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', border: '1px solid #e2e8f0', borderRadius: 9999, color: '#64748b', marginBottom: '1rem', background: '#fff' }}>
              {tab.badge}
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>
              {tab.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {tab.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {tab.features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb', flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
            <Link
             href={`/${tab.url}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#0f172a',
                color: '#fff',
                borderRadius: 8,
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Get Started →
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0', padding: '3rem', minHeight: 250 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem', color: tab.color }}>
                {tab.bigIcon}
              </div>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>{tab.label}</p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>FxTrusts Product</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
