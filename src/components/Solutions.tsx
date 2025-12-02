import styles from './Solutions.module.css';

export default function Solutions() {
    return (
        <section className={styles.section} id="solutions">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>
                        Built to Handle Every Scenario<br />(Yes, Even That One You're Thinking About)
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Hero (Tall, Orange) */}
                    <div className={`${styles.card} ${styles.cardTall} ${styles.cardOrange}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>The Anti-Grey Shield</h3>
                        </div>
                        <p className={styles.cardText}>
                            The "MetaQuotes Won't Ruin Your Week" Insurance. Automatically blocks US traffic at DNS level so you can sleep at night knowing your Main Label license is safe from grey-label audits. Because apparently that's something you have to worry about.
                        </p>
                        <div className={styles.actionButton}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 2: Instant Liquidity Bridge (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Instant Liquidity Bridge</h3>
                        </div>
                        <p className={styles.cardText}>
                            Plug into Tier-1 banks (Saxo, LMAX) and crypto exchanges without reading 300 pages of documentation. Raw institutional spreads. Zero markup. B-Book or A-Book? You decide. We won't judge.
                        </p>
                    </div>

                    {/* Card 3: CRM (Tall, Blue) - User asked for Wide/Tall, using Tall to fit grid nicely */}
                    <div className={`${styles.card} ${styles.cardTall} ${styles.cardBlue}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h2v5zm4 0h-2V7h2v5zm-8 0H6V7h2v5z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>CRM That Actually Converts</h3>
                        </div>
                        <p className={styles.cardText}>
                            Turns dormant email addresses into actual paying traders. Automated drip campaigns with behavioral triggers that actually work. Includes IB/Affiliate tracking because apparently everyone's cousin wants in on this.
                        </p>
                    </div>

                    {/* Card 4: Risk Management (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.22-7.52-1.72 1.72 7.52-1.71-2.58zM12 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Risk Management 2.0</h3>
                        </div>
                        <p className={styles.cardText}>
                            For When Your Traders Think They're Warren Buffett. Real-time exposure monitoring catches risky positions before someone YOLOs their account into oblivion. Auto-hedge the positions that make you nervous.
                        </p>
                    </div>

                    {/* Card 5: Prop Firm Mode (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.2 2H3.8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16.4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9.2 14H9v-2h2v2zm0-4H9V8h2v4z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Prop Firm Mode</h3>
                        </div>
                        <p className={styles.cardText}>
                            Launch challenges faster than your competitors can spell "drawdown." Automated tracking for Daily Drawdown, Max Loss, and Profit Targets. No spreadsheets, no manual calculations, no crying.
                        </p>
                    </div>

                    {/* Card 6: Mobile Native (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Mobile Native</h3>
                        </div>
                        <p className={styles.cardText}>
                            Your brand on iOS and Google Play. Not a generic MetaTrader login that screams "we're not really a real broker." Your logo. Your colors. Your app. Finally.
                        </p>
                    </div>

                    {/* Card 7: Crypto Deposits (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.15-1.46-3.27-3.4h1.97c.1 1.05.95 1.77 2.59 1.77 1.73 0 2.55-1.05 2.55-2.02 0-1.26-1.18-1.89-3.2-2.37-2.55-.6-4.15-1.65-4.15-3.65 0-1.8 1.4-3.08 3.48-3.44V3h2.67v1.93c1.61.32 2.89 1.3 3.03 3.06h-1.97c-.12-.84-.81-1.5-2.25-1.5-1.5 0-2.26.93-2.26 1.78 0 1.11 1.02 1.64 2.96 2.12 2.78.69 4.39 1.75 4.39 3.78 0 1.93-1.55 3.26-3.87 3.62z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Crypto Deposits</h3>
                        </div>
                        <p className={styles.cardText}>
                            Accept USDT (TRC20/ERC20), BTC, ETH instantly. Auto-converts to USD so traders can start losing money— err, trading immediately. Zero chargebacks because blockchain doesn't do refunds.
                        </p>
                    </div>

                    {/* Card 8: Copy Trading Engine (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Copy Trading Engine</h3>
                        </div>
                        <p className={styles.cardText}>
                            Let your beginners copy your pros. Built-in PAMM/MAM system for fund managers. Set performance fees and profit sharing automatically.
                        </p>
                    </div>

                    {/* Card 9: Server Infrastructure (Tall, Beige) */}
                    <div className={`${styles.card} ${styles.cardTall} ${styles.cardBeige}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Server Infrastructure</h3>
                        </div>
                        <p className={styles.cardText}>
                            Hosted on AWS & Azure with 99.99% Uptime SLA. Low latency execution (&lt;12ms) via LD4/NY4 data centers. DDoS protection included standard.
                        </p>
                        <div className={styles.actionButton}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 10: KYC Automation (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>KYC Automation</h3>
                        </div>
                        <p className={styles.cardText}>
                            Integrated with SumSub/ShuftiPro. Verify documents in 60 seconds. Reduce manual back-office work by 90%.
                        </p>
                    </div>

                    {/* Card 11: Bonus Engine (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Bonus Engine</h3>
                        </div>
                        <p className={styles.cardText}>
                            Create deposit bonuses, credit rewards, and trading contests. Drive retention with gamification tools built into the client portal.
                        </p>
                    </div>

                    {/* Card 12: VoIP Integration (Square, White) */}
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>VoIP Integration</h3>
                        </div>
                        <p className={styles.cardText}>
                            Click-to-call directly from the CRM. Record sales calls automatically. Monitor your sales team performance in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
