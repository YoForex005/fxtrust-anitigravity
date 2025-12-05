'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function DashboardsPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Dashboards');

    return (
        <div className={styles.container}>
            {/* Header */}
            <DynamicsHeader />

            <div className={styles.mainLayout}>
                {/* Sidebar */}
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />

                {/* Main Content */}
                <main className={styles.contentArea}>
                    {/* Command Bar */}
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            Show Global Filter
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            New ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                            Set As Default
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            Refresh All
                        </button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            Accounts ⌄
                        </div>
                        <div style={{ flex: 1 }} />
                        <div style={{ fontSize: '12px', color: '#666' }}>
                            This Month 12/1/2025 To 12/31/2025 ⌄
                        </div>
                    </div>

                    {/* Dashboard Layout */}
                    <div style={{ display: 'flex', height: 'calc(100% - 100px)', gap: '10px', padding: '10px', background: '#f8f8f8' }}>
                        {/* Main Grid Area */}
                        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', gap: '10px', height: '200px' }}>
                                <div style={{ flex: 1, background: 'white', border: '1px solid #e1dfdd', padding: '10px' }}>
                                    {/* Placeholder for Chart 1 */}
                                </div>
                                <div style={{ flex: 1, background: 'white', border: '1px solid #e1dfdd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Loading..</div>
                                    <div style={{ flex: 1, borderTop: '1px solid #eee' }}></div>
                                </div>
                                <div style={{ flex: 1, background: 'white', border: '1px solid #e1dfdd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Loading..</div>
                                    <div style={{ flex: 1, borderTop: '1px solid #eee' }}></div>
                                </div>
                            </div>
                            <div style={{ height: '200px', background: 'white', border: '1px solid #e1dfdd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Loading..</div>
                                <div style={{ flex: 1, borderTop: '1px solid #eee' }}></div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', height: '200px' }}>
                                <div style={{ flex: 1, background: 'white', border: '1px solid #e1dfdd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Loading..</div>
                                    <div style={{ flex: 1, borderTop: '1px solid #eee' }}></div>
                                </div>
                                <div style={{ flex: 1, background: 'white', border: '1px solid #e1dfdd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Loading..</div>
                                    <div style={{ flex: 1, borderTop: '1px solid #eee' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Side Panel */}
                        <div style={{ flex: 1, background: 'white', border: '1px solid #e1dfdd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>Other Queues and Views</div>
                            <div style={{ flex: 1, borderTop: '1px solid #eee', paddingTop: '10px' }}>
                                <div style={{ background: '#3b79b7', color: 'white', padding: '10px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ alignSelf: 'flex-start', marginBottom: 'auto' }}>View</div>
                                    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>0</div>
                                    <div style={{ fontSize: '14px' }}>Active Accounts</div>
                                    <div style={{ fontSize: '10px' }}>Filtered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
