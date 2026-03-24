'use client';

import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
    return (
        <section style={{ padding: '4rem 1rem', background: '#fff' }} id="pricing">
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                        Transparent Pricing, No Surprises
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: 550, margin: '0 auto' }}>
                        Start with essentials or go all-in. Every plan includes whitelabeling and support.
                    </p>
                </div>

                <div style={{ border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {/* Starter */}
                    <div style={{ flex: 1, minWidth: 280, padding: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>Starter</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0' }}>$700<span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#64748b' }}> / mo</span></p>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>Perfect for new brokerages getting started</p>
                        <Link href="/get-started" style={{ display: 'block', textAlign: 'center', padding: '0.7rem', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none', marginBottom: '1.5rem', transition: 'background 0.2s' }}>
                            Get Started
                        </Link>
                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                            {["Single platform whitelabel", "Basic CRM setup", "Mobile app (iOS or Android)", "Standard risk management", "Email support"].map((f) => (
                                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a', marginBottom: '0.6rem' }}>
                                    <Check size={14} color="#2563eb" /> {f}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div style={{ flex: 1, minWidth: 280, padding: '2rem', background: '#f1f5f9', borderLeft: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>Enterprise</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0' }}>Custom</p>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>For established brokerages scaling operations</p>
                        <Link href="/get-started" style={{ display: 'block', textAlign: 'center', padding: '0.7rem', background: '#0f172a', borderRadius: 8, fontSize: '0.875rem', fontWeight: 600, color: '#fff', textDecoration: 'none', marginBottom: '1.5rem', border: 'none' }}>
                            Contact Sales
                        </Link>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Everything in Starter, plus:</p>
                        {["Unlimited platform whitelabels", "Full CRM + Admin + Client + Mobile", "Trade Copier (all platforms)", "YoForex AI integration", "PropFirm Admin + Client suite", "RTX5 Trading Terminal access", "Custom website development", "24/7 priority support", "Dedicated account manager"].map((f) => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a', marginBottom: '0.6rem' }}>
                                <Check size={14} color="#2563eb" /> {f}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
