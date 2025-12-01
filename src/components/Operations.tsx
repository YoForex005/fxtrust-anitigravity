import styles from './Operations.module.css';

export default function Operations() {
    return (
        <section className={styles.section} id="operations">
            <div className={styles.container}>
                <div className={styles.splitLayout}>
                    {/* Left Content */}
                    <div className={styles.leftContent}>
                        <div className={styles.badge}>
                            <span>⚙️ OPERATIONS ENGINE</span>
                        </div>
                        <h2 className={styles.headline}>
                            See how FXTrusts powers your brokerage.
                        </h2>
                        <p className={styles.subheadline}>
                            Automate deposits, spot risk instantly, and execute trades seamlessly—all in one place.
                        </p>

                        <div className={styles.bulletPoints}>
                            <div className={styles.bullet}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span>Consolidate all your data sources</span>
                            </div>
                            <div className={styles.bullet}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span>Get proactive reports on sales</span>
                            </div>
                            <div className={styles.bullet}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span>Integrate any system (MT5, CRM, PSPs)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Flow Chart */}
                    <div className={styles.flowChart}>
                        {/* Step 1: Client Deposits */}
                        <div className={styles.flowStep}>
                            <div className={styles.stepHeader}>
                                <div className={styles.checkIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <h3 className={styles.stepTitle}>1. Client Deposits</h3>
                            </div>
                            <div className={styles.stepLogos}>
                                {/* USDT */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="10" fill="#26A17B" />
                                        <text x="12" y="16" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">₮</text>
                                    </svg>
                                </div>
                                {/* BTC */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="10" fill="#F7931A" />
                                        <text x="12" y="16" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">₿</text>
                                    </svg>
                                </div>
                                {/* Visa/Card */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Auto-KYC */}
                        <div className={styles.flowStep}>
                            <div className={styles.stepHeader}>
                                <div className={styles.checkIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <h3 className={styles.stepTitle}>2. Auto-KYC Verification</h3>
                            </div>
                            <div className={styles.stepLogos}>
                                {/* ID Card */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zM8 10H6v2h2v-2zm0 3H6v2h2v-2zm6-3h-4v2h4v-2zm4 0h-2v5h2v-5zm-8 3h-4v2h4v-2z" />
                                    </svg>
                                </div>
                                {/* Shield Check */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Trade Execution */}
                        <div className={styles.flowStep}>
                            <div className={styles.stepHeader}>
                                <div className={styles.checkIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <h3 className={styles.stepTitle}>3. Trade Executed</h3>
                            </div>
                            <div className={styles.stepLogos}>
                                {/* Server */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                    </svg>
                                </div>
                                {/* Chart */}
                                <div className={styles.logoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Integration Icons */}
                        <div className={styles.integrations}>
                            <div className={styles.integrationsLabel}>Integrations</div>
                            <div className={styles.integrationIcons}>
                                {/* MT5 */}
                                <div className={styles.integrationIcon} title="MetaTrader 5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle">MT5</text>
                                    </svg>
                                </div>
                                {/* cTrader */}
                                <div className={styles.integrationIcon} title="cTrader">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <text x="12" y="16" fontSize="8" fontWeight="bold" textAnchor="middle">cT</text>
                                    </svg>
                                </div>
                                {/* MatchTrader */}
                                <div className={styles.integrationIcon} title="MatchTrader">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <text x="12" y="16" fontSize="8" fontWeight="bold" textAnchor="middle">MT</text>
                                    </svg>
                                </div>
                                {/* CRM */}
                                <div className={styles.integrationIcon} title="CRM Systems">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
