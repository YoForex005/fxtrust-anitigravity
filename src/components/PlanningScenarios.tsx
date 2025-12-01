import styles from './PlanningScenarios.module.css';

export default function PlanningScenarios() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>✨</span>
                        <span>Planning Scenario</span>
                    </div>
                    <h2 className={styles.title}>
                        Built to handle every planning scenario (yes, that one too)
                    </h2>
                    <p className={styles.subtitle}>
                        From seasonality to safety stock, customize the planning variables that matter to your business- across sales channels, warehouses and suppliers.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Row 1, Col 1: Demand Planning (Spans 2 rows) */}
                    <div className={styles.demandCard}>
                        <div>
                            <h3>Demand Planning</h3>
                            <p>Lorem ipsum something about it lorem add some text here</p>
                        </div>
                        <div className={styles.plusButton}>+</div>
                    </div>

                    {/* Row 1, Col 2: Seasonality */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2" /><path d="M12 21v2" /><path d="M4.22 4.22l1.42 1.42" /><path d="M18.36 18.36l1.42 1.42" /><path d="M1 12h2" /><path d="M21 12h2" /><path d="M4.22 19.78l1.42-1.42" /><path d="M18.36 5.64l1.42-1.42" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Seasonality</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 1, Col 3: Blue Card */}
                    <div className={`${styles.card} ${styles.blueCard}`}>
                        <p>Plan for seasonal peaks and holiday surges. Stay prepared for seasonal and holiday peaks and troughs across your entire product catalog.</p>
                    </div>

                    {/* Row 1, Col 4: New Products */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.813 1.912a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.813-1.912a2 2 0 001.272-1.272L12 3z" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>New Products</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 2, Col 2: Sales Channels */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Sales Channels</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 2, Col 3: Lost Sales */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Lost Sales</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 2, Col 4: New Markets */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>New Markets</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 3, Col 1: Returns */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Returns</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 3, Col 2: Cannibalization */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Cannibalization</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 3, Col 3: Inventory & Supply Chain (Spans 2 rows) */}
                    <div className={styles.inventoryCard}>
                        <div>
                            <h3>Inventory & Supply Chain</h3>
                            <p>Lorem ipsum something about it lorem add some text here</p>
                        </div>
                        <div className={styles.blackButton}>+</div>
                    </div>

                    {/* Row 3, Col 4: Minimum Orders */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Minimum Orders</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 4, Col 1: Lead Times */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Lead Times</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 4, Col 2: Safety Stock */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Safety Stock</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 4, Col 4: Multi-location */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 21 12.7 21 10c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 2.7 3.7 7 9 11.7z" opacity="0.5" transform="translate(4 -4) scale(0.5)" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Multi-location</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 5, Col 1: Multi-supplier */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 19v-4" /><path d="M12 5V9" /><path d="M5 12h4" /><path d="M19 12h-4" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="5" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Multi-supplier</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 5, Col 2: Channel Rules */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Channel Rules</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 5, Col 3: Supplier Holidays */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="9" y1="16" x2="15" y2="16" /><line x1="12" y1="13" x2="12" y2="19" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Supplier Holidays</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                    {/* Row 5, Col 4: Inventory Allocation */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><path d="M5 10h14" /><path d="M5 10l4-4" /><path d="M19 10l-4-4" /><path d="M5 14h14" /><path d="M5 14l4 4" /><path d="M19 14l-4 4" /></svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Inventory Allocation</h3>
                            <p>Plan for seasonal peaks and holiday surges.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
