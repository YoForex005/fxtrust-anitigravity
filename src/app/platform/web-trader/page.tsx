import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './webtrader.module.css';
import { MacWindow } from '@/components/DeviceFrames';

export default function WebTraderPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Accessibility Matters"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}
                title="Web Trader.<br/>For When They Can't Install the .exe."
                subtitle="Mac users. Corporate firewalls. People who just hate installing things. Don't lose 30% of your deposits because your platform requires a Windows emulator."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "Download Required" Conversion Killer</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            Every click is a chance for a lead to drop off. Asking them to download, install, and configure software? That's asking them to leave.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z" />
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Mac User Problem</h3>
                            <p className={styles.painText}>
                                "How do I run this on my MacBook?" If your answer involves "Wine" or "Parallels", you've already lost them.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Office Trader</h3>
                            <p className={styles.painText}>
                                They want to trade while their boss isn't looking. They can't install an .exe on their work PC. They need a browser solution.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Generic" Look</h3>
                            <p className={styles.painText}>
                                Most web traders look like they were built in 2005. They hurt your brand credibility before the client even places a trade.
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
                            <h2>TradingView Charts.<br />Your Brand. Zero Install.</h2>
                            <p>
                                We give you a modern, React-based web trader that loads instantly in any browser. It uses the charts traders actually like (TradingView) and carries your logo, not ours.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Works on Chrome, Safari, Firefox, Edge</li>
                                <li><span className={styles.check}>✓</span> Native TradingView Charting Integration</li>
                                <li><span className={styles.check}>✓</span> One-Click Trading & Depth of Market</li>
                                <li><span className={styles.check}>✓</span> Fully White-Labeled (URL & Design)</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="Web Trader - XAUUSD [H1]">
                                <div style={{ background: '#131722', height: '400px', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                    {/* Toolbar */}
                                    <div style={{ display: 'flex', gap: '15px', borderBottom: '1px solid #2A2E39', paddingBottom: '10px', marginBottom: '10px' }}>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>1M</div>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>5M</div>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>15M</div>
                                        <div style={{ color: '#4353F2', fontSize: '0.9rem', fontWeight: 'bold' }}>1H</div>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>4H</div>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>D</div>
                                        <div style={{ flex: 1 }}></div>
                                        <div style={{ color: '#10B981', fontSize: '0.9rem' }}>Indicators</div>
                                    </div>

                                    {/* Chart Area */}
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="none">
                                            {/* Grid Lines */}
                                            <line x1="0" y1="50" x2="600" y2="50" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="0" y1="150" x2="600" y2="150" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="0" y1="250" x2="600" y2="250" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="100" y1="0" x2="100" y2="300" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="300" y1="0" x2="300" y2="300" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="500" y1="0" x2="500" y2="300" stroke="#2A2E39" strokeWidth="1" />

                                            {/* Candles (Green) */}
                                            <rect x="50" y="180" width="10" height="40" fill="#10B981" />
                                            <line x1="55" y1="170" x2="55" y2="230" stroke="#10B981" strokeWidth="1" />

                                            <rect x="80" y="160" width="10" height="30" fill="#10B981" />
                                            <line x1="85" y1="150" x2="85" y2="200" stroke="#10B981" strokeWidth="1" />

                                            {/* Candles (Red) */}
                                            <rect x="110" y="190" width="10" height="20" fill="#EF4444" />
                                            <line x1="115" y1="185" x2="115" y2="220" stroke="#EF4444" strokeWidth="1" />

                                            {/* Big Green Candle */}
                                            <rect x="140" y="100" width="10" height="100" fill="#10B981" />
                                            <line x1="145" y1="90" x2="145" y2="210" stroke="#10B981" strokeWidth="1" />

                                            {/* Moving Average */}
                                            <path d="M0,200 Q150,220 300,150 T600,100" fill="none" stroke="#2962FF" strokeWidth="2" />
                                        </svg>

                                        {/* Price Label */}
                                        <div style={{ position: 'absolute', right: '0', top: '100px', background: '#10B981', color: 'white', padding: '2px 5px', fontSize: '0.75rem', borderRadius: '2px' }}>
                                            2048.50
                                        </div>
                                    </div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chart Types & Tools (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Professional Grade Tools</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Just because it's in a browser doesn't mean it's "lite".</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>11 Chart Types</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                From standard Candlesticks and Bars to Heikin Ashi, Renko, Kagi, and Point & Figure. We support every weird charting style your traders might want.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>80+ Indicators</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Moving Averages, Bollinger Bands, MACD, RSI, Ichimoku... if it has a name, we have it. Fully customizable periods and colors.
                            </p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Drawing Tools</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Fibonacci retracements, Gann fans, Elliott Waves. Traders can draw all over their charts and we save their analysis for next time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile vs Web Comparison (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Web vs. Desktop</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Is it really as good as the installed version? Let's be honest.</p>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <thead>
                                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Feature</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'center', color: '#64748B', fontWeight: '600' }}>Desktop (.exe)</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'center', color: '#4353F2', fontWeight: '700' }}>Our Web Trader</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Installation Required</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#EF4444' }}>Yes</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#10B981', fontWeight: '700' }}>No</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Mac Compatible</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#EF4444' }}>Difficult (Wine)</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#10B981', fontWeight: '700' }}>Native</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Custom Indicators (MQL5)</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#10B981' }}>Yes</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#EF4444' }}>No</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>One-Click Trading</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#10B981' }}>Yes</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#10B981', fontWeight: '700' }}>Yes</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Corporate Firewall Friendly</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#EF4444' }}>No (Blocked Ports)</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'center', color: '#10B981', fontWeight: '700' }}>Yes (HTTPS)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Technical Architecture Section (New Content) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Under the Hood</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>For the technical due diligence team.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Stack & Performance</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#64748B' }}>Frontend Framework</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>React 18 + Next.js</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#64748B' }}>Data Transport</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>Binary WebSockets (WSS)</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#64748B' }}>Charting Engine</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>TradingView Lightweight Charts</span>
                                </li>
                                <li style={{ marginBottom: '0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#64748B' }}>Load Time</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>&lt; 800ms (Global CDN)</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Security Specs</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#64748B' }}>Authentication</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>OAuth 2.0 / JWT</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#64748B' }}>Encryption</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>TLS 1.3 (End-to-End)</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#64748B' }}>Session Management</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>Auto-Logout & IP Binding</span>
                                </li>
                                <li style={{ marginBottom: '0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#64748B' }}>Infrastructure</span>
                                    <span style={{ fontWeight: '600', color: '#0F172A' }}>AWS Auto-Scaling Groups</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about the web platform.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Does it support custom EAs (Expert Advisors)?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                No. Web browsers cannot execute compiled MQL5 code locally. For automated trading, clients should use the Desktop terminal or a VPS. The Web Trader is for manual trading and portfolio management.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I use my own domain?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. We host it, but it lives at `trade.yourbroker.com`. We handle the SSL certificates and DNS mapping.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Is it mobile responsive?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes, it is fully responsive. However, for the best mobile experience, we recommend our native iOS and Android apps. The Web Trader is optimized for tablets and desktops.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
