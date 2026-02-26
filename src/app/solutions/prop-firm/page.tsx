import styles from './prop.module.css';
import { MacWindow } from '@/components/DeviceFrames';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prop Firm Technology & Backend System | FXTrusts',
    description: 'Launch or scale your proprietary trading firm with our complete backend system. Automated challenge management, real-time risk tracking, broker integration, and instant payouts.',
    keywords: [
        'prop firm technology',
        'start prop trading firm',
        'prop firm CRM',
        'prop firm backend',
        'challenge management system',
        'prop firm software',
        'trading challenge automation'
    ],
    openGraph: {
        title: 'Prop Firm Technology & Backend System | FXTrusts',
        description: 'Launch your prop trading firm with our complete backend system and automate everything from challenges to payouts.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/prop-firm',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/prop-firm',
    },
};

export default function PropFirmPage() {
    return (
        <main className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badge}>Institutional Infrastructure</div>
                    <h1 className={styles.headline}>
                        The Backbone of<br />Modern Prop Firms
                    </h1>
                    <p className={styles.subheadline}>
                        A complete proprietary trading backend system built to manage thousands of traders, automate compliance, and scale your firm with zero technical overhead.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/get-started" className={styles.primaryCta}>
                            Launch Your Prop Firm
                        </Link>
                        <Link href="/company/contact" className={styles.secondaryCta}>
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section - Admin */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Test Drive the Platform <br /><span style={{ fontSize: "2rem", color: "#6b7280" }}>(Because You Don't Trust Marketing Copy)</span></h2>
                        <p className={styles.sectionSubtext}>
                            Click around. Break stuff. See if we're lying about the speed. No login required. We promise not to immediately sell your email to our sales team.
                        </p>
                    </div>

                    <Link href="/live-demo/admin" prefetch={true} style={{ display: 'block', textDecoration: 'none' }}>
                        <div className={styles.demoMockupWrapper}>
                            <MacWindow title="Prop Firm Admin - Dashboard">
                                <div className={styles.mockupContent}>
                                    <div className={styles.dashboardInner}>
                                        <div className={styles.dashHeader}>
                                            <div className={styles.dashTitle}>Dashboard Overview</div>
                                        </div>
                                        <div className={styles.dashRow}>
                                            <div className={styles.dashBox}>
                                                <div className={styles.dashBoxLabel}>Total Clients</div>
                                                <div className={styles.dashBoxValue}>123,451</div>
                                            </div>
                                            <div className={styles.dashBox}>
                                                <div className={styles.dashBoxLabel}>Pending Account Breaches</div>
                                                <div className={styles.dashBoxValue}>0</div>
                                            </div>
                                            <div className={styles.dashBox}>
                                                <div className={styles.dashBoxLabel}>Pending Real-Time Breaches</div>
                                                <div className={styles.dashBoxValue}>1,241</div>
                                            </div>
                                        </div>
                                        <div className={styles.dashTable}>
                                            <div className={styles.dashBoxLabel} style={{ marginBottom: "1rem" }}>Recent Login History</div>
                                            {/* Mock Table Rows */}
                                            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.5rem", marginBottom: "0.5rem", color: "#64748b", fontSize: "0.875rem" }}>
                                                <span>Name</span><span>Email</span><span>IP Address</span><span>Status</span>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", fontSize: "0.875rem", color: "#0f172a" }}>
                                                <span>John Doe</span><span>john@example.com</span><span>192.168.1.1</span><span style={{ color: "#16a34a" }}>Success</span>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", fontSize: "0.875rem", color: "#0f172a" }}>
                                                <span>Jane Smith</span><span>jane@example.com</span><span>10.0.0.5</span><span style={{ color: "#16a34a" }}>Success</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MacWindow>
                            <div className={styles.playButtonOverlay}>
                                <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Interactive Demo Section - Trader */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgeGreen}`}>Trader Experience</div>
                        <h2 className={styles.sectionHeadline}>Now See It From the Trader's Side</h2>
                        <p className={styles.sectionSubtext}>
                            This is what your traders will actually see. Challenge tracking, real-time analytics, risk metrics... all the stuff they'll spam support about if it doesn't work perfectly.
                        </p>
                    </div>

                    <Link href="/live-demo/client" prefetch={true} style={{ display: 'block', textDecoration: 'none' }}>
                        <div className={styles.demoMockupWrapper}>
                            <MacWindow title="Trader Portal - Challenge Phase 1">
                                <div className={styles.mockupContent}>
                                    <Image
                                        src="/crm-dashboard.png"
                                        alt="FXTrusts Client Dashboard"
                                        width={800}
                                        height={500}
                                        className={styles.dashboardImage}
                                    />
                                    <div className={styles.playButtonOverlay}>
                                        <div className={styles.playButton} style={{ background: 'rgba(16, 185, 129, 0.95)', boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4)' }}>
                                            <div className={styles.playIcon}></div>
                                        </div>
                                    </div>
                                </div>
                            </MacWindow>
                            <div className={`${styles.playButtonOverlay} ${styles.green}`}>
                                <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Core Infrastructure Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Core Infrastructure Built to Scale</h2>
                        <p className={styles.sectionSubtext}>
                            We didn't just build a dashboard. We built an enterprise-grade execution and risk management ecosystem for the world's most demanding prop firms.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Challenge Engine</h3>
                            <p className={styles.featureDesc}>
                                Configure custom Phase 1, Phase 2, or 1-Step evaluations. Automatically transition traders who pass straight to funded accounts.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Automated Rule Enforcement</h3>
                            <p className={styles.featureDesc}>
                                Set maximum daily loss, total drawdown, minimum trading days, and permitted instruments—enforced programmatically with sub-second accuracy.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Real-Time Risk Tracking</h3>
                            <p className={styles.featureDesc}>
                                Equity is monitored tick-by-tick. When a breach occurs, active positions are closed and the account is disabled instantly, minimizing firm liability.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                                    <line x1="2" y1="10" x2="22" y2="10"></line>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Wallet &amp; Payouts</h3>
                            <p className={styles.featureDesc}>
                                Built-in multi-currency wallets and automated profit-split calculations. Streamline the withdrawal process with crypto or fiat PSP integrations.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Broker Integration</h3>
                            <p className={styles.featureDesc}>
                                Native connections via Manager API to MT4, MT5, cTrader, and modern liquidity bridges. Plug into your existing infrastructure seamlessly.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Admin Control Panel</h3>
                            <p className={styles.featureDesc}>
                                A comprehensive CRM "God Mode" giving you complete oversight of thousands of accounts, risk metrics, KYC states, and global PnL.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.splitContent}>
                            <h2 className={styles.sectionHeadline}>Enterprise Architecture You Can Trust</h2>
                            <p className={styles.subheadline} style={{ fontSize: "1.125rem", margin: "0 0 2rem 0" }}>
                                When your firm scales to 10,000+ active traders, you can't rely on amateur setups. You need guaranteed uptime, military-grade security, and absolute reliability.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ color: "#2563eb", flexShrink: 0, marginTop: "0.25rem" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "0.25rem", color: "#111827" }}>99.99% Guaranteed Server Uptime</h4>
                                        <p style={{ color: "#6b7280", margin: 0 }}>Hosted on institutional-grade infrastructure spanning multiple global data centers to eliminate single points of failure.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ color: "#2563eb", flexShrink: 0, marginTop: "0.25rem" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "0.25rem", color: "#111827" }}>Automated Flow Blocking</h4>
                                        <p style={{ color: "#6b7280", margin: 0 }}>Automatically filter out toxic HFT flow, latency arbitrage, and localized exploiting strategies before they reach your book.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ color: "#2563eb", flexShrink: 0, marginTop: "0.25rem" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "0.25rem", color: "#111827" }}>State-of-the-art Security</h4>
                                        <p style={{ color: "#6b7280", margin: 0 }}>Encrypted databases, API rate limiting, strict Cloudflare protection, and isolated multi-tenant architecture.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: "#111827", borderRadius: "16px", padding: "3rem", color: "white", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "2rem", color: "white" }}>Scaling by the Numbers</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.5rem" }}>
                                    <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#60a5fa" }}>&lt; 100ms</div>
                                    <div style={{ color: "#9ca3af", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600", marginTop: "0.5rem" }}>Average Breach Detection Engine Latency</div>
                                </div>
                                <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.5rem" }}>
                                    <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#10b981" }}>5.2M+</div>
                                    <div style={{ color: "#9ca3af", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600", marginTop: "0.5rem" }}>Daily Executions Processed</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f472b6" }}>Zero</div>
                                    <div style={{ color: "#9ca3af", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600", marginTop: "0.5rem" }}>Technical Bottlenecks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={styles.finalCtaSection}>
                <div className={styles.container}>
                    <h2 className={styles.finalCtaHeadline}>Ready to Launch Your Prop Firm?</h2>
                    <p style={{ fontSize: "1.25rem", color: "#9ca3af", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
                        Stop wrestling with patched-together plugins and unreliable bridges. Build on the infrastructure trusted by the fastest-growing firms in the industry.
                    </p>
                    <Link href="/get-started" className={styles.primaryCta}>
                        Start Your Free Trial
                        <svg style={{ marginLeft: "0.75rem", width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
