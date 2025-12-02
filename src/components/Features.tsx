import styles from './Features.module.css';

export default function Features() {
    return (
        <section className={styles.section} id="integration-hub">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span>MT5 ECOSYSTEM</span>
                    </div>
                    <h2 className={styles.headline}>
                        Full MetaTrader 5 Stack + Integrations That Actually Work.
                    </h2>
                    <p className={styles.subheadline}>
                        MetaTrader 5 infrastructure connected to everything you need. From deposits to trade execution, we automate the boring stuff so you can focus on the fun part (convincing people to trade with you).
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className={styles.flowDiagram}>
                    {/* Left Column - Inputs */}
                    <div className={styles.inputsColumn}>
                        <div className={styles.inputCard}>
                            <div className={styles.inputIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                </svg>
                            </div>
                            <span className={styles.inputLabel}>MT5 / MT4<br />Servers</span>
                        </div>

                        <div className={styles.inputCard}>
                            <div className={styles.inputIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.011l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6355-2.7175-2.7155 7.353-7.3288z" />
                                </svg>
                            </div>
                            <span className={styles.inputLabel}>Deep Liquidity<br />(LMAX, Binance)</span>
                        </div>

                        <div className={styles.inputCard}>
                            <div className={styles.inputIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                </svg>
                            </div>
                            <span className={styles.inputLabel}>Payment Gateways<br />(PSP)</span>
                        </div>

                        <div className={styles.inputCard}>
                            <div className={styles.inputIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                            </div>
                            <span className={styles.inputLabel}>Auto-KYC<br />Providers</span>
                        </div>

                        <div className={styles.inputCard}>
                            <div className={styles.inputIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <span className={styles.inputLabel}>Risk Management<br />Engine</span>
                        </div>

                        <div className={styles.inputCard}>
                            <div className={styles.inputIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <span className={styles.inputLabel}>Affiliate/IB<br />System</span>
                        </div>
                    </div>

                    {/* Connection Lines with Protocol Pills */}
                    <div className={styles.connections}>
                        <svg viewBox="0 0 200 600" preserveAspectRatio="none">
                            <path className={styles.connectionLine} d="M0 50 Q 100 50, 200 300" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                            <path className={styles.connectionLine} d="M0 133 Q 100 133, 200 300" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                            <path className={styles.connectionLine} d="M0 217 Q 100 217, 200 300" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                            <path className={styles.connectionLine} d="M0 300 Q 100 300, 200 300" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                            <path className={styles.connectionLine} d="M0 383 Q 100 383, 200 300" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                            <path className={styles.connectionLine} d="M0 467 Q 100 467, 200 300" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                        </svg>
                        <div className={styles.protocolPill} style={{ top: '8%', left: '40%', animationDelay: '0s' }}>TCP/IP</div>
                        <div className={styles.protocolPill} style={{ top: '20%', left: '45%', animationDelay: '0.5s' }}>FIX API 4.4</div>
                        <div className={styles.protocolPill} style={{ top: '35%', left: '48%', animationDelay: '1s' }}>REST API</div>
                        <div className={styles.protocolPill} style={{ top: '50%', left: '48%', animationDelay: '1.5s' }}>REST API</div>
                        <div className={styles.protocolPill} style={{ top: '65%', left: '45%', animationDelay: '2s' }}>gRPC</div>
                        <div className={styles.protocolPill} style={{ top: '78%', left: '40%', animationDelay: '2.5s' }}>GraphQL</div>
                    </div>

                    {/* Center - Core Engine with Metrics */}
                    <div className={styles.coreEngine}>
                        {/* Floating Code Snippet */}
                        <div className={styles.codeSnippet}>
                            <div className={styles.codeHeader}>
                                <div className={styles.codeDots}>
                                    <span></span><span></span><span></span>
                                </div>
                                <span className={styles.codeTitle}>trade_response.json</span>
                            </div>
                            <pre className={styles.codeContent}>{`{
  "status": "executed",
  "latency": "12ms",
  "liquidity_provider": "LMAX_Prime"
}`}</pre>
                        </div>

                        <div className={styles.hexagonWrapper}>
                            <div className={styles.hexagonRing}></div>
                            <div className={styles.hexagon}>
                                <div className={styles.hexagonInner}>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="url(#hexGradient)" stroke="#4353F2" strokeWidth="2" />
                                        <defs>
                                            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#4353F2" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#7B8BF6" stopOpacity="0.4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className={styles.hexagonLogo}>
                                        <div className={styles.logoShield}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className={styles.performanceMetrics}>
                            <div className={styles.metric}>
                                <span className={styles.pulseDot}></span>
                                <span className={styles.metricText}>⚡ Uptime: 99.99%</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.pulseDot}></span>
                                <span className={styles.metricText}>⏱️ Avg Latency: &lt; 23ms</span>
                            </div>
                        </div>

                        <div className={styles.engineLabel}>FXTrusts Core Engine</div>
                    </div>

                    {/* Connection Arrow to Output */}
                    <div className={styles.outputConnection}>
                        <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                            <path d="M0 50 L 180 50" fill="none" stroke="#E5E7EB" strokeWidth="2" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#E5E7EB" />
                                </marker>
                            </defs>
                        </svg>
                        <div className={styles.protocolPill} style={{ top: '40%', left: '45%' }}>WebSocket Secure (WSS)</div>
                    </div>

                    {/* Right Column - Output with Laptop + Phone */}
                    <div className={styles.outputColumn}>
                        <div className={styles.devicesStack}>
                            {/* Laptop Mockup (Backend) */}
                            <div className={styles.laptopMockup}>
                                <div className={styles.laptopScreen}>
                                    <div className={styles.dashboardHeader}>
                                        <span className={styles.dashboardTitle}>Manager Dashboard</span>
                                        <span className={styles.dashboardBadge}>BACKEND</span>
                                    </div>
                                    <div className={styles.dashboardGrid}>
                                        <div className={styles.dashboardCard}>
                                            <div className={styles.dashboardLabel}>Active Traders</div>
                                            <div className={styles.dashboardValue}>1,247</div>
                                        </div>
                                        <div className={styles.dashboardCard}>
                                            <div className={styles.dashboardLabel}>Volume (24h)</div>
                                            <div className={styles.dashboardValue}>$12.4M</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.laptopBase}></div>
                            </div>

                            {/* Phone Mockup (Frontend) */}
                            <div className={styles.phoneFrame}>
                                <div className={styles.phoneNotch}></div>
                                <div className={styles.phoneScreen}>
                                    <img
                                        src="/trading-quotes.jpg"
                                        alt="Trading Quotes Interface"
                                        className={styles.phoneImage}
                                    />
                                </div>
                                <div className={styles.clientBadge}>CLIENT VIEW</div>
                            </div>
                        </div>
                        <div className={styles.outputLabel}>Your Fully Branded Brokerage</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
