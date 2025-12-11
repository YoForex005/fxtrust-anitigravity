import { Metadata } from 'next';
import ClientDashboardContent from './ClientContent';

export const metadata: Metadata = {
  title: "Forex Client Portal Demo | Trader's Room Live Preview | FxTrusts",
  description: "Experience the FxTrusts Client Portal. Live demo of the trader's room, deposit/withdrawal interface, document upload, and trading accounts management.",
  keywords: ["client portal demo", "trader's room demo", "forex crm client area", "white label client portal"],
  openGraph: {
    title: "Forex Client Portal Demo | Trader's Room Live Preview | FxTrusts",
    description: "Experience the FxTrusts Client Portal. Live demo of the trader's room, deposit/withdrawal interface, document upload, and trading accounts management.",
    type: "website",
    url: "https://fxtrusts.com/live-demo/client",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Client Portal Demo | Trader's Room Live Preview | FxTrusts",
    description: "Experience the FxTrusts Client Portal. Live demo of the trader's room, deposit/withdrawal interface, document upload, and trading accounts management.",
  },
  alternates: {
    canonical: "https://fxtrusts.com/live-demo/client",
  },
};

export default function ClientDashboardPage() {
  return <ClientDashboardContent />;
}
