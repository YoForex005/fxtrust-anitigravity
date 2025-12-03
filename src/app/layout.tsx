import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fxtrusts.com"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
