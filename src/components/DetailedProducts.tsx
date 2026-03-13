import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DetailedProducts.module.css';

const detailedProductsData = [
  {
    id: 'yoforexai',
    name: 'YoForex AI',
    tagline: 'AI Forex Signals Platform',
    description: 'Experience the future of trading with YoForex AI. Our advanced algorithms process vast amounts of market data in real-time to deliver high-probability trading signals with institutional-grade precision. Designed to adapt to changing market conditions rapidly, YoForex AI minimizes risk while maximizing potential returns.',
    url: 'https://yoforexai.com/',
    logoImage: '/images/yoforexai-logo.webp',
    colorTheme: '#4353F2',
    features: [
      'AI-powered forex signals with institutional precision',
      'Multi-AI Consensus & Recovery Engine',
      'Replicates Dynamic Hedger EA flow',
      'AI Model Marketplace & Accuracy Library',
    ],
  },
  {
    id: 'tradecopier',
    name: 'Trade Copier',
    tagline: 'Ultra-Low Latency Copy Trading',
    description: 'Scale your trading business effortlessly. Fast, reliable, and completely platform agnostic, Trade Copier links your master account to an unlimited number of slave accounts. Maintain god-like control over risk parameters, trade execution styling, and synchronization across both MT4 and MT5 ecosystems.',
    url: 'https://tradecopier.org/',
    logoImage: '/images/trade copier logo white bg1.jpg',
    colorTheme: '#F59E0B',
    features: [
      'Instantly sync trades across MT4 & MT5',
      'Master to unlimited slave accounts',
      'God-like control over risk & execution',
      'Platform agnostic & built for scale',
    ],
  },
  {
    id: 'yopips',
    name: 'Yo Pips',
    tagline: 'Leading Prop Trading Firm',
    description: 'Unleash your trading potential with funded capital. Yo Pips is looking for talented, disciplined traders to manage up to $200k in company capital. Pass our streamlined, transparent 2-step evaluation process, and keep up to 90% of your profits trading with our direct MT5 integration.',
    url: 'https://www.yopips.com/',
    logoImage: '/images/Yopips1.logo.png',
    colorTheme: '#6B7280',
    features: [
      'Manage up to $200k in funded capital',
      'Keep up to 90% of your profits',
      'Streamlined 2-step evaluation process',
      'Direct MT5 platform support included',
    ],
  },
  {
    id: 'flexymarkets',
    name: 'Flexy Markets',
    tagline: 'Regulated Online Trading Broker',
    description: 'A broker built entirely around the trader. Flexy Markets offers an optimized, regulated environment accessing over 1,400 premium assets across Forex, Crypto, and Indices. Built natively for automated MQL5 EAs and high-frequency trading with superior, execution speeds.',
    url: 'https://flexymarkets.com/',
    logoImage: '/images/flexyhd_logo.avif',
    colorTheme: '#10B981',
    features: [
      'Trade CFDs on Forex, Crypto & Indices',
      'Access over 1,400+ premium assets',
      'Optimized for MQL5 & automated EAs',
      'Superior execution in a regulated environment',
    ],
  },
];

const CheckIcon = ({ color }: { color: string }) => (
  <svg className={styles.checkIcon} style={{ color }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ExternalLinkIcon = () => (
    <svg className={styles.externalIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export default function DetailedProducts() {
  return (
    <section className={styles.section} id="products-detailed">
      <div className={styles.blobs}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
            <span className={styles.heroBadge}>Our Ecosystem</span>
            <h1 className={styles.heroTitle}>
              The Complete <br/><span className={styles.titleHighlight}>Brokerage</span> Suite
            </h1>
            <p className={styles.heroSubtitle}>
              Explore our curated selection of industry-leading platforms built to empower every aspect of your trading and brokerage business.
            </p>
        </div>
      </div>

        <div className={styles.productRows}>
          {detailedProductsData.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={product.id} 
                className={`${styles.productRow} ${isEven ? styles.rowNormal : styles.rowReversed}`}
              >
                {/* Visual / Image Side */}
                <div className={styles.visualColumn}>
                  <div className={styles.imageCard}>
                    {/* Subtle brand color glow behind the image */}
                    <div 
                      className={styles.imageGlow} 
                      style={{ background: `radial-gradient(circle, ${product.colorTheme}40 0%, transparent 70%)` }}
                    />
                    <div className={styles.imageWrapper}>
                      <img
                        src={product.logoImage}
                        alt={`${product.name} Platform`}
                        className={styles.productImage}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={styles.contentColumn}>
                  <div className={styles.contentWrapper}>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <span 
                        className={styles.tagline}
                        style={{ color: product.colorTheme }}
                    >
                        {product.tagline}
                    </span>
                    
                    <p className={styles.description}>
                      {product.description}
                    </p>

                    <ul className={styles.featureList}>
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={styles.featureItem}>
                          <CheckIcon color={product.colorTheme} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.ctaWrapper}>
                      <Link 
                        href={product.url} 
                        className={styles.ctaButton}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ backgroundColor: product.colorTheme }}
                      >
                        Visit {product.name} <ExternalLinkIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
