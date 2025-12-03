import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './mt5.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "MT5 White Label & CRM | MetaTrader 5 Manager & Administrator | FxTrusts",
    description: "Complete MetaTrader 5 (MT5) White Label solution. Includes full Manager and Administrator access, integrated CRM, and mobile apps. Launch in days.",
    keywords: ["mt5 crm", "metatrader 5 manager", "metatrader 5 administrator", "mt5 white label", "forex white label"],
};

export default function MT5Page() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="The Industry Standard"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>}
                title="MetaTrader 5 White Label.<br/>The 800lb Gorilla, Fully Tamed."
                subtitle="Yes, it's the platform 89% of traders demand. No, that doesn't mean the setup has to be a nightmare. We handle the license, the server, and the headaches. You just bring the traders."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Why "Standard" White Labels Suck</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            Most providers treat you like a number. They give you a shared server with 500 other brokers, charge you for every plugin, and take 3 days to answer an email.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Waiting Game</h3>
                            <p className={styles.painText}>
                                "It'll be ready in 2 weeks" usually means 2 months. Meanwhile, your marketing budget is burning and your traders are going to competitors.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Breathing Fee"</h3>
                            <p className={styles.painText}>
                                Want a liquidity bridge? Extra fee. Want a CRM? Extra fee. Want to change your logo? Believe it or not, extra fee.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    <line x1="2" y1="22" x2="22" y2="22" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Crash & Burn</h3>
                            <p className={styles.painText}>
                                Cheap providers put you on overloaded servers. When NFP hits, your platform freezes. Your traders scream. You lose money.
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
                            <h2>We Pre-Built Everything.<br />You Just Turn the Key.</h2>
                            <p>
                                We don't start building when you sign. We have pre-provisioned, enterprise-grade MT5 servers ready to go in LD4 and NY4. We just configure your groups, slap your logo on it, and hand you the keys.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Live in Days, Not Months</li>
                                <li><span className={styles.check}>✓</span> Full Manager Terminal Access</li>
                                <li><span className={styles.check}>✓</span> Mobile & Web Trader Included</li>
                                <li><span className={styles.check}>✓</span> No "Per-Plugin" Fees</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#4353F2',
                                fontWeight: 'bold'
                            }}>
                                [High-Res MT5 Dashboard Mockup]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Feature Breakdown (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>What You Actually Get</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>No hidden "premium" tiers. It's all included.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>The Basics</h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563', lineHeight: '1.8' }}>
                                <li>• Branded Desktop Terminal (Windows/Mac)</li>
                                <li>• Branded Mobile App (iOS/Android)</li>
                                <li>• Web Trader (No download required)</li>
                                <li>• 5 Admin/Manager Accounts</li>
                                <li>• Unlimited Client Accounts</li>
                            </ul>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>The Configuration</h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563', lineHeight: '1.8' }}>
                                <li>• 6 Asset Classes (Forex, Crypto, Indices...)</li>
                                <li>• Custom Leverage Settings (up to 1:1000)</li>
                                <li>• Swap-Free (Islamic) Accounts</li>
                                <li>• Commission & Markup Logic</li>
                                <li>• Multi-Currency Deposits</li>
                            </ul>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>The Plugins</h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563', lineHeight: '1.8' }}>
                                <li>• Virtual Dealer (Anti-Scalping)</li>
                                <li>• Dynamic Margin Call</li>
                                <li>• Negative Balance Protection</li>
                                <li>• Bonus Manager</li>
                                <li>• IB/Affiliate Multi-Level System</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Migration Process (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The "No-Downtime" Migration</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Moving from another provider? We do it while you sleep.</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '2px', background: '#E2E8F0', zIndex: 0 }}></div>

                        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '200px' }}>
                            <div style={{ width: '50px', height: '50px', background: '#4353F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', margin: '0 auto 1rem', border: '4px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>1</div>
                            <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Data Export</h4>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>We pull your user database and trade history from the old server.</p>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '200px' }}>
                            <div style={{ width: '50px', height: '50px', background: '#4353F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', margin: '0 auto 1rem', border: '4px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>2</div>
                            <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Shadow Setup</h4>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>We replicate your groups and symbols on our server. Zero impact on live trading.</p>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '200px' }}>
                            <div style={{ width: '50px', height: '50px', background: '#4353F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', margin: '0 auto 1rem', border: '4px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>3</div>
                            <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>The Switch</h4>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Over the weekend, we point the DNS to the new IP. Users login as normal.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>For the CTOs & Nerds</h2>
                        <p>We know you're reading this. Here's the specs.</p>
                    </div>

                    <div className={styles.specsGrid}>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>LD4</span>
                            <span className={styles.specLabel}>Equinix Data Center</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>&lt;5ms</span>
                            <span className={styles.specLabel}>Internal Latency</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>99.99%</span>
                            <span className={styles.specLabel}>Uptime SLA</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>24/7</span>
                            <span className={styles.specLabel}>NOC Monitoring</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Because you're going to ask them anyway.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I use my own Liquidity Provider?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Absolutely. We are bridge-agnostic. Whether you use PrimeXM, oneZero, or our own internal bridge, we can connect to any LP you want. We don't force you to use our B-book feed (unless you want to).
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Do you provide the license?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. This is a White Label solution, meaning you operate under our master license. This saves you the $100k+ fee and 6-month wait time of getting your own server license from MetaQuotes.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I upgrade to my own server later?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. When you grow big enough (usually &gt;5,000 active traders), we can help you migrate to your own dedicated server license. We'll even handle the migration for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
