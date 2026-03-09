import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './webtrader.module.css';
import { MacWindow } from '@/components/DeviceFrames';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MetaTrader 5 Web Trader | Browser-Based Trading Platform | FXTrusts',
    description: 'Access MT5 trading from any browser. No download required. TradingView charts, one-click trading, Mac compatible. White-label web trading platform for forex brokers.',
    keywords: [
        'MT5 web trader',
        'MetaTrader 5 web platform',
        'browser based trading',
        'web trading platform',
        'forex web terminal',
        'MT5 browser',
        'online trading platform',
        'white label web trader',
        'TradingView charts MT5',
        'Mac forex trading',
        'no download trading',
        'cloud trading platform',
        'HTML5 trading terminal',
        'web based MT5',
        'forex broker web platform'
    ],
    openGraph: {
        title: 'MT5 Web Trader | Trade Forex From Any Browser',
        description: 'No downloads. No installations. Just trading. Access MetaTrader 5 from Chrome, Safari, Firefox with TradingView charts.',
        type: 'website',
        url: 'https://fxtrusts.com/platform/web-trader',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MT5 Web Trader | Browser-Based Trading',
        description: 'Trade forex, metals, indices from any browser. No .exe required. Mac, Windows, Linux compatible.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/platform/web-trader',
    },
};

export default function WebTraderPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"MetaTrader 5 Web Trader | Browser-Based Trading Platform | FXTrusts","description":"Access MT5 trading from any browser. No download required. TradingView charts, one-click trading, Mac compatible. White-label web trading platform for forex brokers.","url":"https://fxtrusts.com/platform/web-trader"}) }}
      />
      <h1 className="sr-only">Web Trader Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="Zero Downloads Required"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}
                title="Web Trader.<br/>For When They Can't (or Won't) Install the .exe."
                subtitle="Mac users. Corporate firewalls. People who believe 'downloading things' is a 2009 concept. Don't lose 30% of potential deposits because your trading platform thinks it's still the Windows XP era."
            />

            {/* The Problem Statement - Satirical */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>THE UNCOMFORTABLE TRUTH</span>
                        </div>
                        <h2>The "Download Required" Conversion Massacre</h2>
                        <p>
                            Every click is a chance for your hard-earned lead to evaporate into the digital ether.
                            Asking them to download, install, configure, and pray to the Windows gods?
                            That's not onboarding—that's an exit interview.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Mac User Exodus</h3>
                            <p className={styles.painText}>
                                "How do I run this on my MacBook Pro?" If your support team's best answer involves "Wine," "Parallels,"
                                or "have you considered just buying a Windows laptop," congratulations—you've just lost a high-net-worth
                                creative professional who was ready to deposit $50K. They're now trading with your competitor who figured
                                out browsers exist.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Secret Office Trader</h3>
                            <p className={styles.painText}>
                                They want to check their positions during their "lunch break" (we're not judging). They cannot install
                                executable files on their corporate machine without triggering seventeen IT security alerts and a
                                visit from compliance. They need something that looks like a "financial research tool" in the browser
                                history. We understand.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <line x1="9" y1="12" x2="15" y2="12" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Firewall Fortress</h3>
                            <p className={styles.painText}>
                                Corporate networks block more ports than a medieval castle. MetaTrader desktop uses proprietary
                                protocols that IT departments have never heard of and therefore fear. HTTPS port 443? That's
                                the only thing getting through. Good thing browsers use exactly that.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution - With Mockup */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.featureBadge}>THE SOLUTION</div>
                            <h2>TradingView Charts.<br />Your Brand. Zero Friction.</h2>
                            <p>
                                We give you a modern, React-based web trader that loads faster than your traders can say
                                "what's my password again?" It uses the charting library traders actually respect (TradingView),
                                carries your logo everywhere, and works on literally any device manufactured after 2015.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Works on Chrome, Safari, Firefox, Edge, Opera, Brave
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Native TradingView Lightweight Charts Integration
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    One-Click Trading &amp; Full Depth of Market
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Fully White-Labeled (trade.yourbroker.com)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Sub-800ms Load Time via Global CDN
                                </li>
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
                                        <div style={{ color: '#D4AF37', fontSize: '0.9rem', fontWeight: 'bold' }}>1H</div>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>4H</div>
                                        <div style={{ color: '#D1D4DC', fontSize: '0.9rem' }}>D</div>
                                        <div style={{ flex: 1 }}></div>
                                        <div style={{ color: '#10B981', fontSize: '0.9rem' }}>Indicators</div>
                                    </div>
                                    {/* Chart Area */}
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="none">
                                            <line x1="0" y1="50" x2="600" y2="50" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="0" y1="150" x2="600" y2="150" stroke="#2A2E39" strokeWidth="1" />
                                            <line x1="0" y1="250" x2="600" y2="250" stroke="#2A2E39" strokeWidth="1" />
                                            <rect x="50" y="180" width="10" height="40" fill="#10B981" />
                                            <rect x="80" y="160" width="10" height="30" fill="#10B981" />
                                            <rect x="110" y="190" width="10" height="20" fill="#EF4444" />
                                            <rect x="140" y="100" width="10" height="100" fill="#10B981" />
                                            <path d="M0,200 Q150,220 300,150 T600,100" fill="none" stroke="#D4AF37" strokeWidth="2" />
                                        </svg>
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

            {/* Professional Grade Tools */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>PROFESSIONAL GRADE</span>
                        </div>
                        <h2>Just Because It's Browser-Based Doesn't Mean It's "Lite"</h2>
                        <p>
                            We've heard that dismissive snort from "serious traders." We've seen the eye-roll when someone mentions
                            "web platform." Allow us to thoroughly destroy that prejudice with an embarrassing amount of features.
                        </p>
                    </div>

                    <div className={styles.toolsGrid}>
                        <div className={styles.toolCard}>
                            <div className={styles.toolNumber}>11</div>
                            <h3>Chart Types</h3>
                            <p>
                                Candlesticks, Bars, Line, Area, Heikin Ashi, Renko, Kagi, Point &amp; Figure, Range,
                                Line Break, Baseline. Yes, we support that obscure Japanese charting style your
                                one weird trader insists is "the only real way to read the market."
                            </p>
                        </div>
                        <div className={styles.toolCard}>
                            <div className={styles.toolNumber}>80+</div>
                            <h3>Technical Indicators</h3>
                            <p>
                                Moving Averages (SMA, EMA, WMA, DEMA, TEMA), Bollinger Bands, MACD, RSI, Stochastic,
                                Ichimoku Cloud, Parabolic SAR, ATR, ADX, and roughly 70 more that we stopped counting.
                                Fully customizable periods, colors, and settings.
                            </p>
                        </div>
                        <div className={styles.toolCard}>
                            <div className={styles.toolNumber}>50+</div>
                            <h3>Drawing Tools</h3>
                            <p>
                                Trend lines, channels, Fibonacci retracements and extensions, Gann fans, Elliott Wave
                                annotations, geometric shapes, text notes. Traders can draw all over their charts like
                                it's their personal coloring book. We save everything for next session.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 3 21 3 21 8"></polyline>
                                <line x1="4" y1="20" x2="21" y2="3"></line>
                                <polyline points="21 16 21 21 16 21"></polyline>
                                <line x1="15" y1="15" x2="21" y2="21"></line>
                                <line x1="4" y1="4" x2="9" y2="9"></line>
                            </svg>
                            <span>HONEST COMPARISON</span>
                        </div>
                        <h2>Web vs. Desktop: The Uncomfortable Truth</h2>
                        <p>
                            We could pretend everything is perfect about web trading, but we'd rather be honest.
                            Here's exactly what you get (and don't get) compared to the installed terminal.
                        </p>
                    </div>

                    <div className={styles.comparisonTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th className={styles.desktop}>Desktop (.exe)</th>
                                    <th className={styles.webTrader}>Our Web Trader</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Installation Required</td>
                                    <td className={styles.negative}>Yes (20-50MB)</td>
                                    <td className={styles.positive}>No</td>
                                </tr>
                                <tr>
                                    <td>Mac Compatible</td>
                                    <td className={styles.negative}>Requires Wine/Parallels</td>
                                    <td className={styles.positive}>Native Browser</td>
                                </tr>
                                <tr>
                                    <td>Corporate Firewall Friendly</td>
                                    <td className={styles.negative}>Blocked Ports (443, 445)</td>
                                    <td className={styles.positive}>HTTPS Only</td>
                                </tr>
                                <tr>
                                    <td>One-Click Trading</td>
                                    <td className={styles.neutral}>Yes</td>
                                    <td className={styles.positive}>Yes</td>
                                </tr>
                                <tr>
                                    <td>Depth of Market</td>
                                    <td className={styles.neutral}>Yes</td>
                                    <td className={styles.positive}>Yes</td>
                                </tr>
                                <tr>
                                    <td>Custom EAs (MQL5)</td>
                                    <td className={styles.positive}>Yes</td>
                                    <td className={styles.negative}>No*</td>
                                </tr>
                                <tr>
                                    <td>Custom Indicators (MQL5)</td>
                                    <td className={styles.positive}>Yes</td>
                                    <td className={styles.negative}>No*</td>
                                </tr>
                                <tr>
                                    <td>Strategy Backtesting</td>
                                    <td className={styles.positive}>Yes</td>
                                    <td className={styles.negative}>No*</td>
                                </tr>
                                <tr>
                                    <td>Multi-Monitor Support</td>
                                    <td className={styles.positive}>Native</td>
                                    <td className={styles.neutral}>Browser Windows</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.tableNote}>
                            * For automated trading, custom indicators, and backtesting, traders should use the desktop terminal or a VPS.
                            The web trader is optimized for manual trading and portfolio management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>UNDER THE HOOD</span>
                        </div>
                        <h2>For the Technical Due Diligence Team</h2>
                        <p>
                            We know your CTO is going to ask. Here's the spec sheet so your compliance team can check
                            boxes and your developers can nod approvingly.
                        </p>
                    </div>

                    <div className={styles.specsGrid}>
                        <div className={styles.specCard}>
                            <h3>Stack &amp; Performance</h3>
                            <ul className={styles.specList}>
                                <li>
                                    <span>Frontend Framework</span>
                                    <strong>React 18 + Next.js 14</strong>
                                </li>
                                <li>
                                    <span>Data Transport</span>
                                    <strong>Binary WebSockets (WSS)</strong>
                                </li>
                                <li>
                                    <span>Charting Engine</span>
                                    <strong>TradingView Lightweight Charts</strong>
                                </li>
                                <li>
                                    <span>Initial Load Time</span>
                                    <strong>&lt; 800ms (Global CDN)</strong>
                                </li>
                                <li>
                                    <span>Price Update Latency</span>
                                    <strong>&lt; 50ms from MT5 server</strong>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.specCard}>
                            <h3>Security Architecture</h3>
                            <ul className={styles.specList}>
                                <li>
                                    <span>Authentication</span>
                                    <strong>OAuth 2.0 / JWT Tokens</strong>
                                </li>
                                <li>
                                    <span>Transport Encryption</span>
                                    <strong>TLS 1.3 End-to-End</strong>
                                </li>
                                <li>
                                    <span>Session Management</span>
                                    <strong>Auto-Logout &amp; IP Binding</strong>
                                </li>
                                <li>
                                    <span>2FA Support</span>
                                    <strong>TOTP / SMS / Email</strong>
                                </li>
                                <li>
                                    <span>Infrastructure</span>
                                    <strong>AWS Auto-Scaling Groups</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Label Features */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                            <span>YOUR BRAND, NOT OURS</span>
                        </div>
                        <h2>Complete White-Label Customization</h2>
                        <p>
                            Your traders will never know we exist. As far as they're concerned, you built this
                            magnificent piece of software yourself. We're okay with that—it's literally what you're paying for.
                        </p>
                    </div>

                    <div className={styles.brandingGrid}>
                        <div className={styles.brandingCard}>
                            <h3>Custom Domain</h3>
                            <p>
                                <code>trade.yourbroker.com</code> — We handle the SSL certificates, DNS mapping, and all the
                                boring infrastructure stuff. Your traders see your URL, your brand, your world.
                            </p>
                        </div>
                        <div className={styles.brandingCard}>
                            <h3>Logo &amp; Colors</h3>
                            <p>
                                Complete theme customization. Primary colors, accent colors, logo placement, favicon.
                                We can even match that specific shade of blue your designer insists is "totally different
                                from normal blue."
                            </p>
                        </div>
                        <div className={styles.brandingCard}>
                            <h3>Instrument Naming</h3>
                            <p>
                                Want to call XAUUSD "Gold Standard" instead? Want to add your broker suffix to symbols?
                                Done. Complete control over how instruments appear to your traders.
                            </p>
                        </div>
                        <div className={styles.brandingCard}>
                            <h3>Language Support</h3>
                            <p>
                                English, Spanish, Portuguese, Arabic (RTL), Chinese (Simplified &amp; Traditional), Russian,
                                and 15 more languages. We'll add yours if it's not on the list—just ask.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span>QUESTIONS YOU ACTUALLY HAVE</span>
                        </div>
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            The questions you're really wondering about, with answers that don't dance around the point.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Does it support Expert Advisors (EAs)?</h3>
                            <p>
                                No. Web browsers cannot execute compiled MQL5 code locally—that's a security feature, not a bug.
                                For automated trading, your clients should use the desktop terminal or run their EA on a VPS.
                                The web trader is for humans who like clicking buttons themselves.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I use my own domain?</h3>
                            <p>
                                Absolutely. We host it, but it lives at <code>trade.yourbroker.com</code> or whatever
                                subdomain you prefer. We handle SSL certificates, DNS mapping, and make sure everything
                                looks like it belongs to you.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Is it mobile responsive?</h3>
                            <p>
                                Yes, it's fully responsive. However, for the best mobile experience, we recommend our
                                native iOS and Android apps. The web trader is optimized for tablets and desktops
                                where you have screen real estate to actually see your charts.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>How fast does it load?</h3>
                            <p>
                                Under 800 milliseconds on a decent connection, thanks to our global CDN (Cloudflare).
                                Price updates stream via WebSocket with sub-50ms latency from the MT5 server.
                                Your traders won't be waiting around.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What browsers are supported?</h3>
                            <p>
                                Chrome, Safari, Firefox, Edge, Opera, Brave, and basically anything released after 2018
                                that isn't Internet Explorer. If someone is still using IE, they have bigger problems
                                than forex trading.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Is there an extra cost for the web trader?</h3>
                            <p>
                                It's included in your Standard and Enterprise plans at no additional charge. Entry plan
                                brokers can add it for a modest monthly fee. See our <Link href="/company/contact">contact page</Link> for
                                the embarrassingly transparent breakdown.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Stop Losing Traders to Download Friction</h2>
                        <p>
                            Every Mac user, every corporate trader, every "I don't download random .exe files" skeptic—they're
                            all potential deposits you're losing to competitors who figured out the browser thing.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                See It In Action
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/platform" className={styles.secondaryCta}>
                                Explore Full Platform
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    
        </>
    );
}
