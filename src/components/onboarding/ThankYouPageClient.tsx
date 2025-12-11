'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SuccessStep from '@/components/onboarding/SuccessStep';

export default function ThankYouPageClient() {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const submitted = sessionStorage.getItem('fxtrusts_onboarding_submitted');
        if (!submitted) {
            router.replace('/get-started');
        } else {
            setAllowed(true);
        }
    }, [router]);

    if (!allowed) {
        return null;
    }

    return (
        <main
            style={{
                background: '#FFFFFF',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                color: '#111827',
                backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        >
            <Header />

            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '120px',
                    paddingBottom: '80px',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                }}
            >
                <SuccessStep />
            </div>

            <Footer />
        </main>
    );
}
