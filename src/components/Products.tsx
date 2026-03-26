'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Products.module.css';
import Image from "next/image";

const productsData = [
  {
    id: 'propfirm',
    name: 'PropFirm Admin + Client',
    tagline: 'Fully Whitelabeled Prop Trading Platform',
    url: '/get-started',
    logoImage: '/images/yoforexai-logo.webp',
    features: [
      'Complete Admin & Client dashboards',
      'Mobile App (iOS + Android) included',
      'Built-in Risk Management Plugin',
      'Full whitelabel — your brand, your platform',
    ],
  },
  {
    id: 'rtx5',
    name: 'Orrnn RTX5 Trading Terminal',
    tagline: 'Next-Gen Trading Terminal',
    url: '/get-started',
    logoImage: '/images/trade copier logo white bg1.jpg',
    features: [
      'Manager Terminal + Client Apps',
      'Mobile App (iOS + APK) ready',
      'Web Trading interface included',
      'Lightning-fast execution engine',
    ],
  },
  {
    id: 'forexcrm',
    name: 'Forex CRM',
    tagline: 'Fully Whitelabeled Brokerage CRM',
    url: '/get-started',
    logoImage: '/images/Yopips1.logo.png',
    features: [
      'Admin + Client Portal + Mobile App',
      'Supports cTrader, MT5, MT4, RTX5',
      'Fully whitelabel — deploy under your brand',
      'More platforms can be added upon request',
    ],
  },
  {
    id: 'tradecopier',
    name: 'Trade Copier',
    tagline: 'Universal Cross-Platform Copy Trading',
    url: '/get-started',
    logoImage: '/images/trade copier logo white bg1.jpg',
    features: [
      'MT5, MT4, cTrader, Trade Locker supported',
      'Match Trader, RTX5 & more platforms',
      'Master to unlimited Slave accounts',
      'Any platform to any platform — seamless',
    ],
  },
  {
    id: 'yoforexai',
    name: 'YoForex AI',
    tagline: 'AI-Powered Trading Intelligence',
    url: '/get-started',
    logoImage: '/images/yoforexai-logo.webp',
    features: [
      'Mobile App + Web App included',
      'AI takes trades with institutional precision',
      'Multi-AI Consensus & Recovery Engine',
      'Smart signals powered by machine learning',
    ],
  },
  {
    id: 'whitelabel',
    name: 'Whitelabel & Custom Websites',
    tagline: 'Forex-Focused Web Development',
    url: '/get-started',
    logoImage: '/images/flexyhd_logo.avif',
    features: [
      'Fully custom forex brokerage websites',
      'Whitelabel any FxTrusts product',
      'Responsive design — mobile-first approach',
      'SEO-optimized & conversion-focused',
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
          <span className={styles.badge}>FxTrusts Portfolio</span>
          <h2 className={styles.title}>
            Our Complete <span className={styles.titleHighlight}>Technology</span> Portfolio
          </h2>
          <p className={styles.subtitle}>
            Everything we build — whitelabeled and custom-tailored for your forex business. From prop firm platforms to AI trading, CRM systems to cross-platform trade copiers.
          </p>
        </div>

        <div className={styles.grid}>
          {productsData.map((product) => (
            <Link href={product.url} key={product.id} className={styles.card} target="_blank" rel="noopener noreferrer">
              <div className={styles.cardLogoWrapper}>
                <Image 
                  src={product.logoImage} 
                  alt={`${product.name} Logo`} 
                  className={styles.cardLogoImage}
                width={500} height={500} style={{ width: '100%', height: 'auto' }} />
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
                  Learn More <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
