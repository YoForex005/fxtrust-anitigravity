import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import DynamicBreadcrumbs from "../components/seo/DynamicBreadcrumbs";
import OrganizationSchema from "../components/seo/OrganizationSchema";

import GoogleTranslate from "../components/GoogleTranslate";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

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
    'forex CRM',
    'forex CRM provider',
    'best forex CRM',
    'forex CRM software',
    'forex liquidity provider',
    'broker technology',
    'start forex brokerage',
    'how to become a forex broker',
    'forex broker CRM',
    'mt5 CRM',
    'metatrader 5 manager',
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JTKXHLHJY8"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JTKXHLHJY8');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="lazyOnload">
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
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=25605243959108639&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Structured Data */}
        <DynamicBreadcrumbs />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <OrganizationSchema />
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}

