import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './prop.module.css';
import { MacWindow, CodeTerminal } from '@/components/DeviceFrames';

export default function PropFirmPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="The Challenge Engine"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18v-6" /><path d="M8 15l4-4 4 4" /></svg>}
                title="Prop Firm Tech.<br/>Automate the 'Fail' Button."
                subtitle="Running a prop firm is 10% marketing and 90% risk management. If you're manually checking equity breaches, you're already dead. Our system automates the entire challenge lifecycle."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "Manual Review" Trap</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            You have 5,000 active challenges. 500 of them hit the daily drawdown limit at the same second during NFP. Can your support team ban them all instantly? No. But our bot can.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Delayed Breach</h3>
                            <p className={styles.painText}>
                                A trader hits -5% equity. You don't catch it for 10 minutes. In that time, he gambles, gets lucky, and goes back to positive. Now you have to pay him? Nightmare.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Arbitrageurs</h3>
                            <p className={styles.painText}>
                                They use HFT bots to exploit latency on your demo servers. They pass challenges in 30 seconds without taking real risk. You need a bridge that blocks this toxic flow.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Payout Headache</h3>
                            <p className={styles.painText}>
                                100 traders request payouts on Friday. You're manually checking crypto wallets and bank details. It's slow, prone to error, and your traders hate waiting.
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
                            <h2>Set the Rules.<br />We Enforce Them. Ruthlessly.</h2>
                            <p>
                                Define your challenge parameters: Max Daily Loss, Max Trailing Drawdown, Profit Target, Min Trading Days. Our system watches every tick. If a rule is broken, the account is disabled in &lt;100ms.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Real-Time Breach Detection (Equity & Balance)</li>
                                <li><span className={styles.check}>✓</span> Automated Certificate Generation</li>
                                <li><span className={styles.check}>✓</span> "Toxic Flow" Protection (HFT Blocking)</li>
                                <li><span className={styles.check}>✓</span> Crypto Payout Automation</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="Prop Firm Admin - Risk Dashboard">
                                <div style={{ padding: '20px', background: '#F8FAFC', minHeight: '300px' }}>
                                    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                        <div style={{ flex: 1, background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Active Challenges</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>1,248</div>
                                        </div>
                                        <div style={{ flex: 1, background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Breached Today</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#EF4444' }}>42</div>
                                        </div>
                                        <div style={{ flex: 1, background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Passed Phase 1</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10B981' }}>15</div>
                                        </div>
                                    </div>
                                    <div style={{ background: 'white', borderRadius: '8px', padding: '15px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>Recent Activity</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                                            <span>User #8821 (Gold)</span>
                                            <span style={{ color: '#EF4444' }}>Hit Max Daily Loss (-5.2%)</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                                            <span>User #9932 (EURUSD)</span>
                                            <span style={{ color: '#10B981' }}>Passed Challenge (+10.1%)</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                            <span>User #7741 (BTCUSD)</span>
                                            <span style={{ color: '#F59E0B' }}>High Risk (4.8% DD)</span>
                                        </div>
                                    </div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Engine Logic (Enhanced with CodeTerminal) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Rules Engine</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Complex logic made simple. If X happens, do Y.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: '#EF4444' }}>⛔</span> The Breach Logic
                            </h3>
                            <CodeTerminal
                                title="breach_detection.js"
                                language="javascript"
                                code={`// Daily Drawdown Check
if (currentEquity < (startingEquity - dailyLossLimit)) {
    closeAllPositions();
    disableTrading();
    sendEmail("Challenge Failed");
    logBreach("Daily Loss Limit Hit");
}`}
                            />
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: '#10B981' }}>✅</span> The Success Logic
                            </h3>
                            <CodeTerminal
                                title="phase_upgrade.js"
                                language="javascript"
                                code={`// Phase 1 Pass Check
if (equity >= profitTarget && tradingDays >= minDays) {
    upgradeToPhase2();
    resetEquity();
    sendEmail("Congrats, You Passed");
    generateCertificate();
}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Features (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The "God Mode" Dashboard</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>See everything. Control everything.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Risk Heatmap</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                See which traders are dangerously close to their drawdown limits. Sort by "Distance to Breach".
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Exposure Monitor</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                "We are net short 500 lots of Gold." Know your firm's total exposure in real-time so you can hedge if needed.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>IP & Device Tracking</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Catch traders who are account sharing or using VPS farms. Flag duplicate IPs instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payout Process (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>The Payout Flow</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Don't make them wait. Our system automates the boring parts so you just have to click "Approve".
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>1. Request</strong>
                                    <span style={{ color: '#64748B' }}>Trader clicks "Withdraw" in their dashboard. System checks if they are eligible (profit split, min trading days).</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>2. Verification</strong>
                                    <span style={{ color: '#64748B' }}>System checks for "Gambling" behavior (e.g. 50% profit from one trade). Flags for review if suspicious.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>3. Execution</strong>
                                    <span style={{ color: '#64748B' }}>You click "Approve". System sends crypto/wire via API. Trader gets email. Done.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/* Visual representation of payout flow */}
                            <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
                                    <span style={{ fontWeight: 'bold' }}>Payout Request #4921</span>
                                    <span style={{ background: '#FEF3C7', color: '#D97706', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 'bold' }}>Pending Review</span>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ color: '#64748B', fontSize: '0.9rem' }}>Amount</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$4,250.00</div>
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ color: '#64748B', fontSize: '0.9rem' }}>Method</div>
                                    <div style={{ fontWeight: 'bold' }}>USDT (TRC20)</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <button style={{ background: '#EF4444', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Reject</button>
                                    <button style={{ background: '#10B981', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about starting a prop firm.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I customize the challenge rules?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. You can set 1-step, 2-step, or 3-step challenges. You can change the drawdown limits, profit targets, and time limits instantly from the admin panel.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Do you provide the liquidity?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                For the demo phase, we provide the price feed. For the funded phase, we can connect you to our liquidity partners or you can use your own B-book execution.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Is it legal?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                We provide the technology. You are responsible for the legal structure. Most prop firms operate as "education companies" that offer "simulated trading", but you should consult a lawyer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
