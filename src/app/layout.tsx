import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: '--font-inter-tight',
  weight: ['400', '600', '700']
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
      <body className={interTight.variable}>{children}</body>
    </html>
  );
}
