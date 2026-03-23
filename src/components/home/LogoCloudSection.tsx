'use client';

export default function LogoCloudSection() {
  return (
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
        Trusted by brokerages worldwide
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', maxWidth: 800, margin: '0 auto' }}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            style={{ height: 36, objectFit: 'contain', opacity: 0.7, filter: 'grayscale(100%)', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0%)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.filter = 'grayscale(100%)'; }}
          />
        ))}
      </div>
    </section>
  );
}

const logos = [
  { src: "/images/yoforexai-logo.webp", alt: "YoForex AI" },
  { src: "/images/trade copier logo white bg1.jpg", alt: "Trade Copier" },
  { src: "/images/Yopips1.logo.png", alt: "Yo Pips" },
  { src: "/images/flexyhd_logo.avif", alt: "Flexy Markets" },
];
