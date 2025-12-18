import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with loading skeleton for instant page display
const DynamicsAdminContent = dynamic(
    () => import('./DynamicsAdminContent'),
    {
        loading: () => (
            <div style={{
                display: 'flex',
                height: '100vh',
                background: '#f3f2f1'
            }}>
                {/* Sidebar skeleton */}
                <div style={{
                    width: '220px',
                    background: '#1e1e1e',
                    padding: '16px'
                }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '20px' }} />
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{ height: '36px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '4px' }} />
                    ))}
                </div>
                {/* Main content skeleton */}
                <div style={{ flex: 1, padding: '20px' }}>
                    <div style={{ height: '40px', background: '#e1dfdd', borderRadius: '4px', marginBottom: '20px', width: '200px' }} />
                    <div style={{ height: '300px', background: '#e1dfdd', borderRadius: '4px', opacity: 0.5 }} />
                </div>
            </div>
        )
    }
);

export const metadata: Metadata = {
    title: 'Forex CRM Live Demo | Admin Portal Dynamics 365 | FxTrusts',
    description: 'Live interactive demo of FxTrusts Forex CRM Admin Portal. Experience the Dynamics 365-powered interface, account management, and reporting tools.',
    keywords: ['forex crm demo', 'dynamics 365 forex', 'admin portal demo', 'broker crm test'],
    openGraph: {
        title: 'Forex CRM Live Demo | Admin Portal Dynamics 365 | FxTrusts',
        description: 'Live interactive demo of FxTrusts Forex CRM Admin Portal. Experience the Dynamics 365-powered interface, account management, and reporting tools.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo/admin',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forex CRM Live Demo | Admin Portal Dynamics 365 | FxTrusts',
        description: 'Live interactive demo of FxTrusts Forex CRM Admin Portal. Experience the Dynamics 365-powered interface, account management, and reporting tools.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo/admin',
    },
};

export default function DynamicsAdminPage() {
    return (
        <Suspense fallback={
            <div style={{
                display: 'flex',
                height: '100vh',
                background: '#f3f2f1'
            }}>
                <div style={{
                    width: '220px',
                    background: '#1e1e1e',
                    padding: '16px'
                }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '20px' }} />
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{ height: '36px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '4px' }} />
                    ))}
                </div>
                <div style={{ flex: 1, padding: '20px' }}>
                    <div style={{ height: '40px', background: '#e1dfdd', borderRadius: '4px', marginBottom: '20px', width: '200px' }} />
                    <div style={{ height: '300px', background: '#e1dfdd', borderRadius: '4px', opacity: 0.5 }} />
                </div>
            </div>
        }>
            <DynamicsAdminContent />
        </Suspense>
    );
}


