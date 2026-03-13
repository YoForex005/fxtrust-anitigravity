import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Use dynamic import for the new detailed products layout
const DetailedProducts = dynamic(() => import('@/components/DetailedProducts'), { ssr: true });

export const metadata: Metadata = {
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
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-slate-50">
        <DetailedProducts />
      </main>
      <Footer />
    </>
  );
}
