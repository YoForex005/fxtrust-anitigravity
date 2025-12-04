import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fxtrusts.com'),
  title: {
    default: 'FxTrusts | The #1 B2B Broker Technology Provider',
    template: '%s | FxTrusts B2B Solutions'
  },
  description: 'The complete B2B Broker solution. Liquidity, CRM, White Label MT5, and Crypto Payments. The superior alternative to B2Broker for serious financial institutions.',
  keywords: [
    'b2b broker', 'b2b forex broker', 'b2broker alternative', 'b2b liquidity', 'b2b crypto payments',
    'forex crm', 'mt5 white label', 'crypto payment gateway', 'liquidity provider', 'prop firm tech',
    'start a forex broker', 'forex brokerage software', 'institutional forex'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fxtrusts.com',
    siteName: 'FxTrusts',
    images: [
      {
        url: '/fxtrusts_logo_v2.png',
        width: 1200,
        height: 630,
        alt: 'FxTrusts - Institutional Trading Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fxtrusts',
    creator: '@fxtrusts',
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
    },
  },

};

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import DynamicBreadcrumbs from "@/components/seo/DynamicBreadcrumbs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JTKXHLHJY8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JTKXHLHJY8');
          `}
        </Script>

        {/* Structured Data */}
        <DynamicBreadcrumbs />
      </head>
      <body className={inter.className}>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}

