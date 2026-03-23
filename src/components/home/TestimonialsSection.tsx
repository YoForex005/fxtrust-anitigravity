'use client';

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "FxTrusts delivered our entire prop firm platform in under 3 weeks. The whitelabeling is flawless — our clients think we built it ourselves.",
    author: "Ahmed Al-Rashid",
    role: "CEO, Desert Capital FX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "The Trade Copier works across every platform we use. MT5 to cTrader, cTrader to RTX5 — zero latency, zero issues. Game changer.",
    author: "Marcus Weber",
    role: "Head of Trading, Alpine Brokers",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Their CRM integrated with all our platforms seamlessly. The mobile app alone saved us months of development time.",
    author: "Elena Petrova",
    role: "CTO, NovaTrade Solutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: '4rem 1rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', border: '1px solid #e2e8f0', borderRadius: 9999, color: '#64748b', marginBottom: '1rem' }}>
          Testimonials
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a', marginBottom: '2.5rem' }}>
          What Our Clients Say
        </h2>

        {/* Quote */}
        <div style={{ position: 'relative', padding: '0 1rem', minHeight: 120, marginBottom: '2rem' }}>
          <span style={{ position: 'absolute', left: -8, top: -20, fontSize: '4rem', fontFamily: 'serif', color: 'rgba(0,0,0,0.05)', pointerEvents: 'none' }}>&ldquo;</span>
          <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', fontWeight: 300, color: '#0f172a', lineHeight: 1.6, transition: 'opacity 0.3s' }}>
            {testimonials[active].quote}
          </p>
        </div>

        {/* Role */}
        <p style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          {testimonials[active].role}
        </p>

        {/* Avatar selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: active === i ? '0.4rem 1rem 0.4rem 0.4rem' : '0.2rem',
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
                background: active === i ? '#0f172a' : 'transparent',
                transition: 'all 0.3s',
              }}
            >
              <img
                src={t.avatar}
                alt={t.author}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: active === i ? '2px solid rgba(255,255,255,0.3)' : '2px solid transparent',
                }}
              />
              {active === i && (
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', whiteSpace: 'nowrap' }}>
                  {t.author}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
