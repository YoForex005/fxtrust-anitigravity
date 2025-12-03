import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './crm.module.css';
import { MacWindow } from '@/components/DeviceFrames';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Forex CRM Software & Developer | Better than Leverate | FxTrusts",
    description: "The ultimate Forex CRM software for brokers. Automate IBs, KYC, and Sales. A superior alternative to Leverate CRM with custom development options.",
    keywords: ["forex crm software", "forex crm developer", "leverate crm", "forex broker crm", "best forex crm"],
};

export default function CRMPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="The Brain of Operations"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 6v6l4 2" /></svg>}
                title="CRM & Back Office.<br/>Client Management That Doesn't Suck."
                subtitle="Stop using spreadsheets. Stop using 'CRMs' built for selling shoes. This is built for FX. It tracks IBs, automates deposits, and actually tells you where your money is."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Why Generic CRMs Fail in FX</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            Salesforce is great if you're selling software. But does it calculate multi-level IB rebates on gold swaps at 3 AM? Didn't think so.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Spreadsheet Hell</h3>
                            <p className={styles.painText}>
                                You have one sheet for deposits, one for leads, and one for IB payouts. None of them match. You're losing money and you don't even know where.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The IB Nightmare</h3>
                            <p className={styles.painText}>
                                Your top IB wants a custom rebate structure. Your current system can't do it. He leaves for your competitor. You cry.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The KYC Black Hole</h3>
                            <p className={styles.painText}>
                                Clients send passports via email. Compliance misses them. Clients get angry and chargeback. It's a mess.
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
                            <h2>Automate the Boring Stuff.<br />Focus on Sales.</h2>
                            <p>
                                Our CRM talks directly to MT5. When a client deposits, it's on their account instantly. When they trade, the IB gets paid instantly. No manual data entry. No human error.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Multi-Level IB Module (Infinite Tiers)</li>
                                <li><span className={styles.check}>✓</span> Automated KYC & AML Checks</li>
                                <li><span className={styles.check}>✓</span> Integrated VoIP & Sales Dialer</li>
                                <li><span className={styles.check}>✓</span> Real-Time P&L Dashboard</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="CRM - IB Portal Overview">
                                <div style={{ background: '#F8FAFC', padding: '20px', minHeight: '350px' }}>
                                    {/* Stats Row */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                                        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Total Commissions</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>$12,450.00</div>
                                        </div>
                                        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Active Clients</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>142</div>
                                        </div>
                                    </div>

                                    {/* Client List */}
                                    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                        <div style={{ padding: '12px 15px', borderBottom: '1px solid #E2E8F0', fontWeight: '600', fontSize: '0.9rem', color: '#475569' }}>Recent Activity</div>
                                        <div style={{ padding: '10px 15px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                            <span>Client #8821 (Gold)</span>
                                            <span style={{ color: '#166534' }}>+$42.50 Comm.</span>
                                        </div>
                                        <div style={{ padding: '10px 15px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                            <span>Client #9932 (EURUSD)</span>
                                            <span style={{ color: '#166534' }}>+$12.10 Comm.</span>
                                        </div>
                                        <div style={{ padding: '10px 15px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                            <span>Sub-IB #441 (Rebate)</span>
                                            <span style={{ color: '#166534' }}>+$150.00 Comm.</span>
                                        </div>
                                        <div style={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                            <span>Client #7712 (Deposit)</span>
                                            <span style={{ color: '#111827' }}>$5,000.00</span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                                        <span style={{ background: '#166534', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Withdraw Funds</span>
                                    </div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Module-by-Module Guide (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Full Stack</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>It's not just a database. It's an operating system for your brokerage.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>1. The Sales Module</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Stop losing leads. Our Sales Module automatically assigns new signups to your sales agents based on language or region. It tracks every call, every email, and every deposit.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Lead Scoring:</strong> Know who to call first.</li>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>VoIP Integration:</strong> Click-to-call directly from the browser.</li>
                                <li>• <strong>Performance Metrics:</strong> See which agents are actually closing.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>2. The Compliance Module</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Regulators are scary. Our Compliance Module makes them happy. It automates document collection, checks against sanctions lists (OFAC, EU), and flags suspicious activity.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Auto-KYC:</strong> Verify IDs in seconds using AI.</li>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Risk Categorization:</strong> High/Medium/Low risk tagging.</li>
                                <li>• <strong>Audit Trails:</strong> Every action is logged forever.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>3. The Finance Module</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Money in, money out. Fast. Connect to 50+ Payment Service Providers (PSPs) including crypto, cards, and wires. Set rules for auto-approving small withdrawals to save time.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Smart Routing:</strong> Route deposits to the cheapest PSP.</li>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Netting:</strong> Internal transfers don't cost you a dime.</li>
                                <li>• <strong>Reconciliation:</strong> Auto-match bank statements with CRM data.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>4. The Marketing Module</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Send the right email at the right time. Trigger automated campaigns when a client registers, deposits, or stops trading.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Drip Campaigns:</strong> Nurture leads automatically.</li>
                                <li style={{ marginBottom: '0.5rem' }}>• <strong>Segmentation:</strong> Target "Whales" differently than "Minnows".</li>
                                <li>• <strong>Push Notifications:</strong> Send alerts directly to their mobile app.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IB Portal Deep Dive (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ background: '#111827', padding: '2rem', borderRadius: '24px', color: 'white' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>The IB Portal</h3>
                                <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
                                    Your IBs (Introducing Brokers) are your lifeblood. Give them a portal they'll love.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                                        <span>Referral Links</span>
                                        <span style={{ color: '#10B981' }}>Auto-Generated</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                                        <span>Rebate Calculation</span>
                                        <span style={{ color: '#10B981' }}>Real-Time</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                                        <span>Sub-IB Levels</span>
                                        <span style={{ color: '#10B981' }}>Unlimited</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Payouts</span>
                                        <span style={{ color: '#10B981' }}>Instant to Wallet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Supercharge Your Partners</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Most brokers give IBs a CSV file once a month. We give them a dedicated dashboard where they can see their clients trading in real-time (anonymized, of course), track their commissions down to the cent, and withdraw their earnings instantly.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6' }}>
                                <strong>Result:</strong> Your IBs work harder because they see the money faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Everything you wanted to ask but were afraid to.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I customize the look and feel?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. The Client Area and IB Portal are fully white-labeled. We use your logo, your colors, and your domain. Your clients will never know FxTrusts exists.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Does it work with cTrader or Match-Trader?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. While we specialize in MT5, our CRM is platform-agnostic. We have APIs for cTrader, Match-Trader, and Vertex. You can even run multiple platforms simultaneously.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Is my data safe?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Safer than Fort Knox. We use bank-grade encryption, daily off-site backups, and strict role-based access control. Your data is YOUR data. We don't sell it, share it, or peek at it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
