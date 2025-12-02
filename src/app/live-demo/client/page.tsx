'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../demo.module.css';
import { ClientViewType } from '../types';
import ClientSidebar from '../components/ClientSidebar';
import ClientViewManager from '../components/ClientViewManager';

export default function ClientDashboardPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('my-account');
    const [currentView, setCurrentView] = useState<ClientViewType>('client-dashboard');

    const handleClose = () => {
        router.push('/#pricing');
    };

    const handleSwitchMode = () => {
        router.push('/live-demo/admin');
    };

    return (
        <div className={styles.demoContainer}>
            <button className={styles.closeButton} onClick={handleClose}>×</button>

            {/* Dashboard Layout */}
            <div className={styles.dashboardLayout}>
                <ClientSidebar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onViewChange={setCurrentView}
                    onSwitchMode={handleSwitchMode}
                />

                <main className={styles.mainContent}>
                    <div className={styles.demoBanner} style={{ background: '#ECFDF5', borderBottom: '1px solid #D1FAE5' }}>
                        <div className={styles.demoBannerContent}>
                            <span className={styles.demoBannerIcon}>👨‍💻</span>
                            <span style={{ color: '#065F46' }}>
                                <span className={styles.demoBannerHighlight} style={{ color: '#047857' }}>Trader Experience:</span> You are viewing the client-side portal. This is what your traders will see.
                            </span>
                        </div>
                        <button className={styles.demoBannerButton} style={{ background: '#059669', borderColor: '#059669' }} onClick={() => window.open('https://calendly.com/fxtrusts/demo', '_blank')}>
                            <span>📅</span> Book Live Demo
                        </button>
                    </div>

                    <ClientViewManager currentView={currentView} onViewChange={setCurrentView} />
                </main>
            </div>
        </div>
    );
}
