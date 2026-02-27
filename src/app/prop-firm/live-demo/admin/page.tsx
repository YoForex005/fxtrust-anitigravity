import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with loading skeleton for instant page display
const YoPipsAdminContent = dynamic(
    () => import('./YoPipsAdminContent'),
    {
        loading: () => (
            <div style={{
                display: 'flex',
                height: '100vh',
                background: '#0f0f11'
            }}>
                {/* Sidebar skeleton */}
                <div style={{
                    width: '260px',
                    background: '#1a1a1e',
                    padding: '16px'
                }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '20px' }} />
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{ height: '36px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '4px' }} />
                    ))}
                </div>
                {/* Main content skeleton */}
                <div style={{ flex: 1, padding: '20px' }}>
                    <div style={{ height: '40px', background: '#1a1a1e', borderRadius: '4px', marginBottom: '20px', width: '200px' }} />
                    <div style={{ height: '300px', background: '#1a1a1e', borderRadius: '4px', opacity: 0.5 }} />
                </div>
            </div>
        )
    }
);

export const metadata: Metadata = {
    title: 'Prop Firm Admin Dashboard | Live Demo | FxTrusts',
    description: 'Live interactive demo of FxTrusts modern Prop Firm Admin Dashboard. Experience the sleek interface, seamless account management, and real-time reporting tools.',
    keywords: ['prop firm demo', 'prop trading dashboard', 'admin portal demo', 'FxTrusts admin'],
    openGraph: {
        title: 'Prop Firm Admin Dashboard | Live Demo | FxTrusts',
        description: 'Live interactive demo of FxTrusts modern Prop Firm Admin Dashboard. Experience the sleek interface, seamless account management, and real-time reporting tools.',
        type: 'website',
        url: 'https://fxtrusts.com/prop-firm/live-demo/admin',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prop Firm Admin Dashboard | Live Demo | FxTrusts',
        description: 'Live interactive demo of FxTrusts modern Prop Firm Admin Dashboard. Experience the sleek interface, seamless account management, and real-time reporting tools.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/prop-firm/live-demo/admin',
    },
};

export default function YoPipsAdminPage() {
    return (
        <>
            <h1 className="sr-only">Yo Pips Admin Page</h1>
            {/* Original Component */}
            
        <Suspense fallback={
            <div style={{
                display: 'flex',
                height: '100vh',
                background: '#0f0f11'
            }}>
                <div style={{
                    width: '260px',
                    background: '#1a1a1e',
                    padding: '16px'
                }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '20px' }} />
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{ height: '36px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '4px' }} />
                    ))}
                </div>
                <div style={{ flex: 1, padding: '20px' }}>
                    <div style={{ height: '40px', background: '#1a1a1e', borderRadius: '4px', marginBottom: '20px', width: '200px' }} />
                    <div style={{ height: '300px', background: '#1a1a1e', borderRadius: '4px', opacity: 0.5 }} />
                </div>
            </div>
        }>
            <YoPipsAdminContent />
        </Suspense>
    
        </>
    );
}
