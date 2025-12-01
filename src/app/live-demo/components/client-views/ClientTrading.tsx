'use client';

import styles from '../../demo.module.css';

export default function ClientTrading() {
    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <div>
                    <h1 className={styles.viewTitle}>Trading Terminal</h1>
                    <p className={styles.viewSubtitle}>Execute trades and manage your positions.</p>
                </div>
            </div>

            <div className={styles.dashboardGrid} style={{ padding: 0, gridTemplateColumns: '1fr 350px' }}>
                {/* Chart Section */}
                <div className={styles.mainColumn}>
                    <div className={styles.card} style={{ height: '500px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#0f172a', color: 'white' }}>
                        <h3 style={{ opacity: 0.5 }}>EURUSD Chart Placeholder</h3>
                        <p style={{ opacity: 0.3, fontSize: '0.9rem' }}>Interactive TradingView Chart would load here</p>
                    </div>

                    {/* Active Orders */}
                    <div className={styles.tableCard} style={{ marginTop: '1.5rem' }}>
                        <div className={styles.clientsHeader}>
                            <h3 className={styles.sectionTitle}>Active Orders</h3>
                        </div>
                        <div className={styles.dataTableWrapper}>
                            <table className={styles.dataTable}>
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>Type</th>
                                        <th>Volume</th>
                                        <th>Open Price</th>
                                        <th>S/L</th>
                                        <th>T/P</th>
                                        <th>Profit</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-medium">EURUSD</td>
                                        <td style={{ color: 'var(--success-700)', fontWeight: 600 }}>BUY</td>
                                        <td>1.00</td>
                                        <td>1.08500</td>
                                        <td>1.08000</td>
                                        <td>1.09500</td>
                                        <td style={{ color: 'var(--success-700)', fontWeight: 700 }}>+$150.00</td>
                                        <td>
                                            <button className={styles.ghostButton} style={{ color: 'var(--danger-600)' }}>✕</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Order Entry Panel */}
                <div className={styles.rightColumn}>
                    <div className={styles.card} style={{ padding: '1.5rem' }}>
                        <h3 className={styles.cardTitle} style={{ marginBottom: '1.5rem' }}>New Order</h3>

                        <div className={styles.formGroup} style={{ marginBottom: '1rem' }}>
                            <label className={styles.label}>Symbol</label>
                            <select className={styles.select}>
                                <option>EURUSD</option>
                                <option>GBPUSD</option>
                                <option>XAUUSD</option>
                                <option>BTCUSD</option>
                            </select>
                        </div>

                        <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                            <label className={styles.label}>Volume (Lots)</label>
                            <input type="number" className={styles.input} defaultValue="1.00" step="0.01" />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Stop Loss</label>
                                <input type="number" className={styles.input} placeholder="1.08000" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Take Profit</label>
                                <input type="number" className={styles.input} placeholder="1.09500" />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <button className={styles.primaryButton} style={{ background: 'var(--danger-600)', borderColor: 'var(--danger-500)' }}>
                                SELL
                            </button>
                            <button className={styles.primaryButton} style={{ background: 'var(--success-600)', borderColor: 'var(--success-500)' }}>
                                BUY
                            </button>
                        </div>

                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--slate-500)' }}>
                            <span>Bid: 1.08650</span>
                            <span>Ask: 1.08652</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
