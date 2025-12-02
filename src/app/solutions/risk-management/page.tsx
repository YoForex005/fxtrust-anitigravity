import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './risk.module.css';

export default function RiskManagementPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Sleep at Night"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Risk Management.<br/>The Anti-Blowup Shield."
                subtitle="Brokers don't go bust because of bad marketing. They go bust because one whale got lucky on Gold and wiped out the B-book. Our tools stop that from happening."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "Naked B-Book" Suicide Mission</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            Running 100% B-book without hedging is like driving a Ferrari blindfolded. It's fun until you hit a wall.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                                    <path d="M15 7h6v6" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Lucky Whale</h3>
                            <p className={styles.painText}>
                                A client deposits $50k, leverages it 1:500, and buys Gold. Gold spikes $20. He makes $1M. Do you have $1M to pay him?
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 3v12h-5c-.006 1.055.238 4.1.238 4.1L12 22l-2.238-2.9s.244-3.045.238-4.1H5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The News Spike</h3>
                            <p className={styles.painText}>
                                NFP comes out. The market gaps 100 pips. Your entire book is underwater. You're margin called by your own LP.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21h18" />
                                    <path d="M5 21v-7" />
                                    <path d="M19 21v-7" />
                                    <path d="M12 21v-9" />
                                    <path d="M12 8V3" />
                                    <path d="M8 8h8" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Imbalance</h3>
                            <p className={styles.painText}>
                                Everyone is long EURUSD. No one is short. If it goes up, you lose everything. You need to hedge that net exposure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <h2>Auto-Hedge the Danger.<br />Keep the Profit.</h2>
                            <p>
                                Set rules like "If net exposure on XAUUSD &gt; 50 lots, hedge 50% to LP." Our system watches your book 24/7 and executes hedges automatically. You cap your downside while keeping the B-book profit.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Automated Net Exposure Hedging</li>
                                <li><span className={styles.check}>✓</span> Real-Time P&L Alerts (SMS/Email)</li>
                                <li><span className={styles.check}>✓</span> "Toxic Flow" Radar</li>
                                <li><span className={styles.check}>✓</span> Dealer Dashboard for Manual Intervention</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#991B1B',
                                fontWeight: 'bold'
                            }}>
                                [Risk Management Dashboard]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto-Hedging Scenarios (Existing Section - Enhanced) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The "Auto-Pilot" Scenarios</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Set it once. Let it run. Sleep better.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #EF4444' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Scenario A: The Spike</h3>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                <strong>Trigger:</strong> Gold moves 1% in 5 minutes.
                            </p>
                            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                                <strong>Action:</strong> System instantly hedges 100% of Gold exposure to LP to neutralize risk until volatility settles.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #F59E0B' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Scenario B: The Whale</h3>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                <strong>Trigger:</strong> Single client opens &gt; 10 lots.
                            </p>
                            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                                <strong>Action:</strong> System automatically bridges that specific trade to LP (STP) while keeping smaller trades in-house.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10B981' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Scenario C: The Weekend</h3>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                <strong>Trigger:</strong> Friday 21:55 GMT.
                            </p>
                            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                                <strong>Action:</strong> System reduces leverage on all open positions to 1:100 to protect against Monday morning gaps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alert Configuration Guide (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Don't Wait for the Margin Call</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Configure custom alerts so you know about problems before they become disasters. Sent via Telegram, Email, or Slack.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>1. P&L Threshold</strong>
                                    <span style={{ color: '#64748B' }}>"Alert me if daily P&L drops below -$10,000."</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>2. Exposure Limit</strong>
                                    <span style={{ color: '#64748B' }}>"Alert me if net exposure on BTCUSD exceeds 20 lots."</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>3. Toxic Activity</strong>
                                    <span style={{ color: '#64748B' }}>"Alert me if a client opens/closes 5 trades in under 1 second."</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/* Visual representation of alerts */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#EF4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>⚠️</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>Risk Alert: High Exposure</div>
                                        <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>Today, 14:32 GMT</div>
                                    </div>
                                </div>
                                <div style={{ background: '#FEF2F2', padding: '1rem', borderRadius: '8px', color: '#991B1B', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    <strong>Warning:</strong> Net exposure on XAUUSD has reached <strong>55.2 Lots</strong>. Threshold is 50.0 Lots.
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button style={{ flex: 1, padding: '0.75rem', background: '#111827', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Hedge Now</button>
                                    <button style={{ flex: 1, padding: '0.75rem', background: 'white', color: '#111827', border: '1px solid #D1D5DB', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Ignore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about risk management.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I set different leverage for different groups?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. You can give "Pro" traders 1:500 leverage and "Retail" traders 1:30. You can also dynamically lower leverage on weekends or during news events.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Does it work with A-Book?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. Even if you A-Book everything, you still have "Credit Risk" with your LP. Our system monitors your margin level at the LP to ensure you don't get stopped out.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I reverse a trade?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Technically, yes. If a trade was executed at an "off-market" price due to a technical glitch, you can void or adjust it. But be careful—traders hate this.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
