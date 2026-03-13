'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Products.module.css';

const productsData = [
  {
    id: 'yoforexai',
    name: 'YoForex AI',
    tagline: 'AI Forex Signals Platform',
    url: 'https://yoforexai.com/',
    logoImage: '/images/yoforexai-logo.webp',
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
    url: 'https://tradecopier.org/',
    logoImage: '/images/trade copier logo white bg1.jpg',
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
    url: 'https://www.yopips.com/',
    logoImage: '/images/Yopips1.logo.png',
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
    url: 'https://flexymarkets.com/',
    logoImage: '/images/flexyhd_logo.avif',
    features: [
      'Trade CFDs on Forex, Crypto & Indices',
      'Access over 1,400+ premium assets',
      'Optimized for MQL5 & automated EAs',
      'Superior execution in a regulated environment',
    ],
  },
];

const CheckIcon = () => (
  <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function Products() {
  return (
    <section className={styles.section} id="ecosystem">
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Ecosystem</span>
          <h2 className={styles.title}>
            The Complete <span className={styles.titleHighlight}>Brokerage</span> Suite
          </h2>
          <p className={styles.subtitle}>
            Explore our curated selection of industry-leading platforms built to empower every aspect of your trading and brokerage business.
          </p>
        </div>

        <div className={styles.grid}>
          {productsData.map((product) => (
            <Link href={product.url} key={product.id} className={styles.card} target="_blank" rel="noopener noreferrer">
              <div className={styles.cardLogoWrapper}>
                <img 
                  src={product.logoImage} 
                  alt={`${product.name} Logo`} 
                  className={styles.cardLogoImage}
                />
              </div>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <span className={styles.cardTagline}>{product.tagline}</span>

              <ul className={styles.cardList}>
                {product.features.map((feature, index) => (
                  <li key={index} className={styles.cardListItem}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.linkWrapper}>
                <span className={styles.cardLink}>
                  Visit Website <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
