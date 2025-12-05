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
  title: "FXTrusts | Institutional Trading Infrastructure",
  description: "High-end B2B fintech trading platform for institutional clients. Experience the future of global liquidity.",
};

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
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}

