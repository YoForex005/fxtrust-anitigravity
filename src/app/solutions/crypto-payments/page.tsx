import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './crypto.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Crypto Payment Gateway for Forex Brokers | Accept USDT & Bitcoin | FxTrusts",
    description: "The best crypto payment gateway for Forex brokers. Accept USDT (TRC20), Bitcoin, and Ethereum deposits instantly. Auto-convert to Fiat for MT5.",
    keywords: ["crypto payment gateway", "forex broker crypto payments", "accept usdt", "bitcoin payment processor", "forex payment solution"],
};

export default function CryptoPaymentsPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Unstoppable Money"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>}
                title="Crypto Payments.<br/>Accept Bitcoin. Sleep Soundly."
                subtitle="Banks hate forex brokers. They freeze accounts. They ask questions. Crypto doesn't care. Accept USDT, BTC, and ETH instantly. Auto-convert to fiat or keep it in crypto."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "High Risk" Label</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            To a bank, you're a "high risk merchant." That means 5% fees, rolling reserves, and the constant threat of account closure.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Account Freeze</h3>
                            <p className={styles.painText}>
                                You wake up on Monday. Your bank account is locked. "Compliance review." You can't pay your staff. You can't pay withdrawals.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 14 4 9 9 4" />
                                    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Chargeback</h3>
                            <p className={styles.painText}>
                                A client loses $5,000 trading. He calls Visa and says "I didn't do it." Visa believes him. You lose the money AND pay a fee.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Wire Delay</h3>
                            <p className={styles.painText}>
                                SWIFT takes 3-5 days. In 2024. That's unacceptable. Clients want to trade NOW.
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
                            <h2>Irreversible. Instant.<br />Low Fee.</h2>
                            <p>
                                Crypto transactions cannot be reversed. Once the money is sent, it's yours. No chargebacks. No "compliance holds." Just pure liquidity.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Accept USDT (TRC20/ERC20), BTC, ETH</li>
                                <li><span className={styles.check}>✓</span> Auto-Convert to USD/EUR for MT5 Balance</li>
                                <li><span className={styles.check}>✓</span> 0% Chargeback Risk</li>
                                <li><span className={styles.check}>✓</span> Instant Automated Withdrawals</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#F97316',
                                fontWeight: 'bold'
                            }}>
                                [Crypto Payment Gateway Dashboard]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Coins (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>We Speak Every Chain</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Accept the coins your clients actually use.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>₮</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>USDT (TRC20)</h3>
                            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>The king of FX deposits. Fast, cheap ($1 fee), and stable.</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>₿</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Bitcoin</h3>
                            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>The gold standard. Slower, but essential for big deposits.</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ξ</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Ethereum</h3>
                            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>For the DeFi crowd. Supports USDT (ERC20) and USDC.</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💰</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Local Stablecoins</h3>
                            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>We can integrate local fiat-pegged tokens if needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fiat Conversion Flow (Existing Section - Enhanced) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The "Magic" Conversion</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Client sends Crypto. MT5 gets USD. You get peace of mind.</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center', flex: 1, minWidth: '200px' }}>
                            <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>1. Client Sends USDT</h3>
                            <p style={{ color: '#64748B' }}>Client scans QR code on your deposit page.</p>
                        </div>

                        <div style={{ color: '#CBD5E1' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                        </div>

                        <div style={{ textAlign: 'center', flex: 1, minWidth: '200px' }}>
                            <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4353F2" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 0 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>2. We Auto-Convert</h3>
                            <p style={{ color: '#64748B' }}>System converts USDT to USD at spot rate instantly.</p>
                        </div>

                        <div style={{ color: '#CBD5E1' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                        </div>

                        <div style={{ textAlign: 'center', flex: 1, minWidth: '200px' }}>
                            <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>3. MT5 Credited</h3>
                            <p style={{ color: '#64748B' }}>Client sees USD in their trading account. Ready to trade.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Cold Storage (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Fort Knox Security</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                We don't keep your money on a hot wallet where it can be hacked. We move it to cold storage instantly.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>Multi-Sig Wallets</strong>
                                    <span style={{ color: '#64748B' }}>Requires 3 out of 5 keys to authorize a withdrawal. Even if we get hacked, your funds are safe.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>Fireblocks Integration</strong>
                                    <span style={{ color: '#64748B' }}>We use enterprise-grade custody solutions trusted by banks.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>Auto-Sweep</strong>
                                    <span style={{ color: '#64748B' }}>Funds are automatically swept from deposit addresses to the cold vault every 10 minutes.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/* Visual representation of security */}
                            <div style={{ background: '#1E293B', padding: '2rem', borderRadius: '24px', color: 'white' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Vault Status: SECURE</h3>
                                    <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>Last Audit: 12 mins ago</p>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                        0x7a...4f9c <span style={{ color: '#10B981', float: 'right' }}>SAFE</span>
                                    </div>
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
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about crypto payments.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>What are the fees?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                We charge a flat 1% processing fee. Network fees (gas) are paid by the sender. There are no monthly fees or setup costs.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Is it reversible?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                No. Blockchain transactions are final. This is a feature, not a bug. It means you never have to worry about chargeback fraud again.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Do I need a wallet?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                No. We handle the wallets. You just give us a destination address (your cold wallet or exchange account) where you want us to send the funds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
