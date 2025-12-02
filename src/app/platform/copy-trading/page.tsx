import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './copy.module.css';

export default function CopyTradingPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Volume Multiplier"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                title="Copy Trading Engine.<br/>Let Them Copy Winners. You Take the Fees."
                subtitle="Most traders lose. That's a fact. But some don't. Let your losing traders copy your winning traders. They stay happy, you get volume, and everyone feels like a genius."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "90/90/90" Problem</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            90% of retail traders lose 90% of their money in 90 days. Then they quit. And you have to pay for new leads. It's a hamster wheel.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                                    <polyline points="17 18 23 18 23 12" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Churn Rate</h3>
                            <p className={styles.painText}>
                                A blown account is a lost customer. If they could just follow someone who knows what they're doing, they'd stay for years.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Too Busy" Trader</h3>
                            <p className={styles.painText}>
                                "I don't have time to trade." Copy trading solves this. They deposit, click "Follow", and go back to their day job.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Missed Volume</h3>
                            <p className={styles.painText}>
                                Every trade a Master makes is replicated across 100 Followers. That's 100x the volume (and 100x the commissions) for you.
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
                            <h2>Turn Your Clients into a Community.<br />(A Profitable One).</h2>
                            <p>
                                Our Copy Trading engine is built directly into the CRM. Masters get a public profile. Followers get a "Copy" button. You get a dashboard to manage fees and risk.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Performance, Management, & Subscription Fees</li>
                                <li><span className={styles.check}>✓</span> Risk Management for Followers (Stop Loss)</li>
                                <li><span className={styles.check}>✓</span> Public Leaderboards & Master Profiles</li>
                                <li><span className={styles.check}>✓</span> Cross-Server Copying Supported</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #FDF4FF 0%, #FAE8FF 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#86198F',
                                fontWeight: 'bold'
                            }}>
                                [Leaderboard Dashboard Mockup]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Master vs Follower Mechanics (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Mechanics</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>How it actually works under the hood.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>For the Master (Provider)</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Masters trade as normal on their MT5 account. They don't need to install anything. They just set their fees in the portal.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Performance Fee:</strong> Take 20% (or 30%, or 50%) of follower profits.</li>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Subscription Fee:</strong> Charge $50/month just to follow.</li>
                                <li>• <strong>Privacy:</strong> Hide open trades, show only history.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>For the Follower (Subscriber)</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Followers browse the leaderboard, check stats (Drawdown, ROI, Sharpe Ratio), and click "Copy". They stay in control.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Equity Ratio:</strong> Copy based on balance (e.g. Master has $10k, I have $1k, I copy 10%).</li>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Rescue Level:</strong> "If I lose 20%, stop copying immediately."</li>
                                <li>• <strong>Manual Override:</strong> Close any copied trade manually if you panic.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profit Sharing Math (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Money Flow</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>High Water Mark logic explained simply.</p>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <thead>
                                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Event</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Follower Profit</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>High Water Mark</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#10B981', fontWeight: '700' }}>Fee Paid (20%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Month 1: Master makes +$1,000</td>
                                    <td style={{ padding: '1.5rem', color: '#10B981' }}>+$1,000</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>$1,000</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#10B981' }}>$200</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Month 2: Master loses -$500</td>
                                    <td style={{ padding: '1.5rem', color: '#EF4444' }}>-$500</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>$1,000 (Unchanged)</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#94A3B8' }}>$0</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Month 3: Master makes +$800</td>
                                    <td style={{ padding: '1.5rem', color: '#10B981' }}>+$800 (Net +$300 above HWM)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>$1,300</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#10B981' }}>$60 (20% of $300)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Risk Management Logic (Existing Section - Enhanced) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>How We Prevent "Master Blowups"</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Because if the Master dies, the Followers shouldn't die with him.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Equity Protection</h3>
                            <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                                Followers can set a "Hard Stop" at the equity level. If their equity drops 20%, the system instantly unlinks them and closes all trades.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Ratio Multipliers</h3>
                            <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                                If the Master has $100k and the Follower has $1k, we automatically scale the lot size down by 100x. No accidental 10-lot trades on small accounts.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Slippage Control</h3>
                            <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                                If the Master enters during high volatility and the price moves 5 pips before the Follower can enter, we skip the trade to protect them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about the copy engine.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Does it work across different brokers?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes, via our Cross-Broker Bridge. However, latency is lowest (and execution best) when both Master and Follower are on your server.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>How fast is the copying?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Internal copying takes less than 50ms. It's effectively instant. We use direct database injection, not slow API calls.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I ban toxic Masters?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. As the admin, you have full control. You can hide specific strategies from the leaderboard or ban users who engage in high-frequency scalping that hurts your B-book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
