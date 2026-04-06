import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Use dynamic import for the new detailed products layout
const DetailedProducts = dynamic(() => import('@/components/DetailedProducts'), { ssr: true });

export const metadata: Metadata = {
  alternates: {
    canonical: '/products',
  },
  title: "Our Products | FxTrusts Ecosystem",
  description: "Explore the complete FxTrusts ecosystem of curated trading and brokerage platforms including YoForex AI, Trade Copier, Yo Pips, and Flexy Markets.",
  keywords: [
    'FxTrusts products',
    'YoForex AI',
    'Trade Copier',
    'Yo Pips',
    'Flexy Markets',
    'trading platforms',
    'brokerage suite'
  ],
  openGraph: {
    title: "Our Products | FxTrusts Ecosystem",
    description: "Explore the complete FxTrusts ecosystem of curated trading and brokerage platforms including YoForex AI, Trade Copier, Yo Pips, and Flexy Markets.",
    url: 'https://fxtrusts.com/products',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Products | FxTrusts Ecosystem",
    description: "Explore the complete FxTrusts ecosystem of curated trading and brokerage platforms.",
  }
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Products | FxTrusts Ecosystem",
    "description": "Explore the complete FxTrusts ecosystem of curated trading and brokerage platforms including YoForex AI, Trade Copier, Yo Pips, and Flexy Markets."
  };

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-slate-50">
        <h1 className="sr-only">Our Products | FxTrusts Ecosystem</h1>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DetailedProducts />
      </main>
      <Footer />
    </>
  );
}
