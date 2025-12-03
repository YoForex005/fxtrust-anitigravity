import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './liquidity.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Forex Liquidity Provider & Bridge | Tier 1 Liquidity | FxTrusts",
    description: "Connect to 50+ Liquidity Providers with our ultra-low latency bridge. Smart Order Routing, A-Book/B-Book management, and deep liquidity for Forex, Metals, and Crypto.",
    keywords: ["forex liquidity provider", "mt5 bridge", "forex liquidity bridge", "tier 1 liquidity", "forex market making"],
};

export default function LiquidityPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Smart Routing"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20" /><path d="M20 12l-4-4m4 4l-4 4" /><path d="M4 12l4-4m-4 4l4 4" /></svg>}
                title="Liquidity Bridge.<br/>Direct Market Access. Or Not. Your Call."
                subtitle="Connect to any LP in the world. Or run a B-book. Or do both. We don't judge. We just give you the technology to route orders where they make you the most money."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "Toxic Flow" Nightmare</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            You B-book a "newbie" trader. Turns out he's a sniper. He makes $50k in 10 minutes. You lose $50k. Ouch.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="22" y1="12" x2="18" y2="12" />
                                    <line x1="6" y1="12" x2="2" y2="12" />
                                    <line x1="12" y1="6" x2="12" y2="2" />
                                    <line x1="12" y1="22" x2="12" y2="18" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Sniper</h3>
                            <p className={styles.painText}>
                                They exploit latency. They hit prices that don't exist anymore. If you don't have a bridge that detects this, you're free money to them.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The LP Rejection</h3>
                            <p className={styles.painText}>
                                You send toxic flow to your LP. They get mad. They widen your spreads or cut you off. Now you have no liquidity.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                    <polyline points="17 6 23 6 23 12" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Bad Fill</h3>
                            <p className={styles.painText}>
                                Your bridge is slow. Clients get slipped 5 pips on every trade. They complain on Reddit. Your reputation dies.
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
                            <h2>A-Book the Sharps.<br />B-Book the Rest.</h2>
                            <p>
                                Our bridge lets you set rules based on account equity, leverage, or trading style. Scalpers go straight to the LP. Long-term holders stay in-house. It's risk management on autopilot.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Connect to 50+ Liquidity Providers</li>
                                <li><span className={styles.check}>✓</span> Smart Order Routing (A-Book / B-Book)</li>
                                <li><span className={styles.check}>✓</span> Aggregation for Tighter Spreads</li>
                                <li><span className={styles.check}>✓</span> Detailed Execution Reporting</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0891B2',
                                fontWeight: 'bold'
                            }}>
                                [Liquidity Bridge Routing Visual]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Order Execution Flow (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Life of an Order</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>What happens in the 5 milliseconds after a client clicks "Buy".</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', position: 'relative' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '2px', background: '#E2E8F0', zIndex: -1 }}></div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#0891B2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>1</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Client Click</h3>
                            <p style={{ color: '#64748B' }}>Trader sends "Buy 1 Lot EURUSD" from MT5 terminal.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#0891B2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>2</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Risk Check</h3>
                            <p style={{ color: '#64748B' }}>Bridge checks: Is client A-Book or B-Book? Is price stale? Is it toxic?</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#0891B2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>3</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Routing</h3>
                            <p style={{ color: '#64748B' }}>If A-Book: Send to Best Bid/Ask LP. If B-Book: Confirm internally.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#10B981', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>4</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Confirmation</h3>
                            <p style={{ color: '#64748B' }}>Trade confirmed. Client sees open position. Total time: 4ms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* A-Book vs B-Book Comparison (Existing Section - Enhanced) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Routing Strategy</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>When to hedge. When to hold. A simple guide.</p>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <thead>
                                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Trader Type</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Behavior</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Recommended Route</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Why?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>The Scalper</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Trades &lt; 1 min duration</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#10B981' }}>A-Book (STP)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>High risk of toxic flow. Let the LP handle it.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>The Swing Trader</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Holds for days/weeks</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#EF4444' }}>B-Book (Internal)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Low toxicity. Statistically likely to lose over time.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>The News Trader</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Trades only on NFP/CPI</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#10B981' }}>A-Book (STP)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Extreme volatility risk. Don't hold this bag.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>The Whale</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Deposit &gt; $50k</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#F59E0B' }}>Hybrid (Partial Hedge)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Too big to B-book fully. Hedge 50-80% to reduce exposure.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Supported LPs (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Plug & Play Integrations</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>We are pre-integrated with everyone who matters.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
                        {['LMAX', 'CFH', 'Saxo', 'Finalto', 'Match-Prime', 'B2Broker', 'IS Prime', 'Swissquote'].map((lp) => (
                            <div key={lp} style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', fontWeight: '700', color: '#334155' }}>
                                {lp}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about liquidity bridging.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I change routing rules on the fly?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. If you see a client winning too much, you can switch them from B-Book to A-Book instantly. The change happens on the next trade.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Does it support crypto?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. We support 24/7 crypto trading. We aggregate liquidity from Binance, Kraken, and LMAX Digital to give you tight spreads even on weekends.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>What is "Aggregation"?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                If LP A offers EURUSD at 1.1001 and LP B offers it at 1.1000, we show you 1.1000. By combining multiple feeds, you always get the best possible price.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
