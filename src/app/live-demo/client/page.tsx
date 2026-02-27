import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with loading skeleton for instant page display
const ClientDashboardContent = dynamic(
  () => import('./ClientContent'),
  {
    loading: () => (
      <div style={{
        display: 'flex',
        height: '100vh',
        background: '#f8f9fa'
      }}>
        {/* Sidebar skeleton */}
        <div style={{
          width: '250px',
          background: 'white',
          borderRight: '1px solid #e8e8e8',
          padding: '20px'
        }}>
          <div style={{ height: '40px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '24px' }} />
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ height: '44px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '8px' }} />
          ))}
        </div>
        {/* Main content skeleton */}
        <div style={{ flex: 1, padding: '24px' }}>
          <div style={{ height: '48px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '24px', width: '300px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ height: '120px', background: '#f5f5f5', borderRadius: '12px' }} />
            ))}
          </div>
        </div>
      </div>
    )
  }
);

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
  return (
        <>
            <h1 className="sr-only">Client Dashboard Page</h1>
            {/* Original Component */}
            
    <Suspense fallback={
      <div style={{
        display: 'flex',
        height: '100vh',
        background: '#f8f9fa'
      }}>
        <div style={{
          width: '250px',
          background: 'white',
          borderRight: '1px solid #e8e8e8',
          padding: '20px'
        }}>
          <div style={{ height: '40px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '24px' }} />
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ height: '44px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '8px' }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: '24px' }}>
          <div style={{ height: '48px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '24px', width: '300px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ height: '120px', background: '#f5f5f5', borderRadius: '12px' }} />
            ))}
          </div>
        </div>
      </div>
    }>
      <ClientDashboardContent />
    </Suspense>
  
        </>
    );
}

