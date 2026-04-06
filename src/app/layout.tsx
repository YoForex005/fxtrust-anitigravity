import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import DynamicBreadcrumbs from "../components/seo/DynamicBreadcrumbs";
import OrganizationSchema from "../components/seo/OrganizationSchema";
import Image from "next/image";

import GoogleTranslate from "../components/GoogleTranslate";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://fxtrusts.com'),
  title: {
    default: "FxTrusts | B2B Forex Broker Technology",
    template: "%s | FxTrusts",
  },
  description: "FxTrusts is the #1 B2B Broker Technology Provider. Complete forex brokerage ecosystem: MT5 White Label, CRM, Liquidity, and Crypto Payments.",
  keywords: [
    'forex broker technology',
    'B2B forex solutions',
    'MT5 white label',
    'metatrader 5 white label',
    'forex white label',
    'white label brokerage solution',
    'white label trading platform',
    'turnkey brokerage solution',
    'start forex brokerage',
    'how to start a forex brokerage with mt5 white label',
    'mt5 white label cost',
    'best mt5 white label features for new brokers',
    'forex crm',
    'forex CRM provider',
    'best forex CRM',
    'forex CRM software',
    'forex broker crm',
    'broker crm',
    'trader’s room',
    'forex back office',
    'what is a forex crm and why brokers need one',
    'best forex crm features for broker growth',
    'how trader’s room improves client onboarding',
    'how to automate broker back office operations',
    'prop firm crm vs forex broker crm',
    'forex liquidity provider',
    'tier 1 liquidity provider',
    'liquidity bridge',
    'liquidity aggregation',
    'mt5 liquidity bridge',
    'how to choose a forex liquidity provider',
    'prime of prime liquidity explained',
    'a-book vs b-book vs hybrid execution explained',
    'best execution setup for new forex brokers',
    'key liquidity metrics every broker should monitor',
    'broker technology',
    'how to become a forex broker',
    'mt5 CRM',
    'metatrader 5 manager',
    'prop firm technology',
    'prop firm crm',
    'prop trading platform',
    'white label prop firm solution',
    'prop challenge platform',
    'how to start a prop firm in 2026',
    'best prop firm technology stack',
    'how prop challenge systems work',
    'how to automate funded account evaluation',
    'risk rules every prop trading firm needs',
    'copy trading platform',
    'social trading platform',
    'pamm solution',
    'mam solution',
    'trade copier',
    'pamm vs mam vs copy trading explained',
    'how brokers make money from copy trading',
    'how to launch a white label copy trading platform',
    'risks and compliance issues in copy trading',
    'copy trading as a growth channel for brokers',
    'forex payment gateway',
    'broker payment solution',
    'kyc aml for forex brokers',
    'brokerage compliance solutions',
    'forex licensing support',
    'best payment gateway options for forex brokers',
    'how forex brokers automate kyc and aml',
    'what licenses does a forex brokerage need',
    'how payout systems work for prop firms',
    'compliance checklist before launching a brokerage'
  ],
  authors: [{ name: 'FxTrusts', url: 'https://fxtrusts.com' }],
  creator: 'FxTrusts',
  publisher: 'FxTrusts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'FxTrusts',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'FxTrusts - B2B Forex Broker Technology',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FxTrusts',
    creator: '@FxTrusts',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3rk9m1phwv5ugJkBalpVy_6ls36_8_HgiAuGJ-g2B3o',
    other: {
      'msvalidate.01': '2BEDBB84C23CB5B198E00F849CC7804B',
      'yandex-verification': 'af55b38a06e31b13',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-JTKXHLHJY8" />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25605243959108639');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=25605243959108639&ev=PageView&noscript=1"
            alt="Facebook Pixel"
            unoptimized
          />
        </noscript>

        {/* Structured Data */}
        <DynamicBreadcrumbs />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FxTrusts",
              "url": "https://fxtrusts.com",
              "logo": "https://fxtrusts.com/logo.png",
              "sameAs": [
                "https://twitter.com/FxTrusts"
              ]
            })
          }}
        />
        <OrganizationSchema />
        <GoogleTranslate />
        {children}
        <Footer />
      </body>
    </html>
  );
}

