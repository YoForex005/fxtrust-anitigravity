import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './mobile.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'White Label Forex Mobile App | iOS & Android Trading App | FXTrusts',
    description: 'Custom-branded forex trading app for iOS & Android. Your logo, your colors, published under your name. Push notifications, biometric login, integrated deposits.',
    keywords: [
        'white label forex app',
        'forex trading app',
        'branded trading app',
        'MT5 mobile app white label',
        'iOS forex app',
        'Android trading app',
        'custom broker app',
        'forex app development',
        'trading app push notifications',
        'biometric trading login',
        'mobile broker platform',
        'forex app with deposits',
        'MetaTrader mobile white label',
        'broker mobile application',
        'trading app for brokers'
    ],
    openGraph: {
        title: 'White Label Forex Mobile App | Your Brand, Their Pocket',
        description: 'Custom iOS & Android trading app. Published under your name with push notifications and biometric login.',
        type: 'website',
        url: 'https://fxtrusts.com/platform/mobile-app',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'White Label Forex Mobile App | FXTrusts',
        description: 'Your branded trading app on the App Store in 14 days. Push notifications, FaceID, deposits.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/platform/mobile-app',
    },
};

export default function MobileAppPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"White Label Forex Mobile App | iOS & Android Trading App | FXTrusts","description":"Custom-branded forex trading app for iOS & Android. Your logo, your colors, published under your name. Push notifications, biometric login, integrated deposits.","url":"https://fxtrusts.com/platform/mobile-app"}) }}
      />
      <h1 className="sr-only">Mobile App Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="Retention Machine"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>}
                title="Native Mobile App.<br/>Your Logo. Their Home Screen."
                subtitle="Your clients can use the standard MetaTrader 5 app—or get the premium experience with YOUR branded app. Your icon, your colors, your push notifications. Both options work seamlessly with your brokerage."
            />

            {/* The Generic App Trap */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                            <span>TWO WAYS TO TRADE</span>
                        </div>
                        <h2>Standard MT5 App + Your Premium Branded App</h2>
                        <p>
                            Your clients can always use the official MetaTrader 5 app from the App Store—it works
                            perfectly with your server. But for brokers who want the premium experience, we also offer
                            a fully custom-branded app with your logo, colors, and exclusive features like push notifications.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>Standard MT5 App</h3>
                            <p className={styles.painText}>
                                The official MetaTrader 5 app is available on both iOS and Android. Your clients can
                                download it for free, connect to your server, and start trading immediately. It's a
                                tried-and-tested solution used by millions of traders worldwide.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>Push Notifications (Branded)</h3>
                            <p className={styles.painText}>
                                With your own branded app, you unlock powerful push notifications. Alert clients about
                                market volatility, margin warnings, promotions, and trading opportunities. Drive engagement
                                with 90% open rates compared to email's 20%.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>Premium Brand Experience</h3>
                            <p className={styles.painText}>
                                A custom branded app with biometric login, your logo on the splash screen, and seamless
                                in-app deposits creates a premium feel. It builds trust with serious traders and positions
                                your brokerage as a professional financial institution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.featureBadge}>THE SOLUTION</div>
                            <h2>We Build It. We Publish It.<br />Apple Approves It.</h2>
                            <p>
                                We handle the entire submission process—dealing with Apple's Byzantine review guidelines,
                                Google's ever-changing Play Store policies, and all the ridiculous back-and-forth. You just
                                provide your logo, colors, and developer account credentials. Two weeks later, you're live
                                on both stores.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Published Under YOUR Developer Account
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Biometric Login (FaceID &amp; TouchID)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Custom Push Notification Engine
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    In-App Deposits &amp; Withdrawals
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Full Charting &amp; Technical Analysis
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <div className={styles.phoneMockup}>
                                <div className={styles.phoneNotch}></div>
                                <div className={styles.phoneScreen}>
                                    <div className={styles.phoneHeader}>
                                        <span className={styles.phoneTime}>9:41</span>
                                        <div className={styles.phoneStatus}>
                                            <span>📶</span>
                                            <span>🔋</span>
                                        </div>
                                    </div>
                                    <div className={styles.phoneApp}>
                                        <div className={styles.appLogo}>YOUR<br />LOGO</div>
                                        <div className={styles.appBalance}>
                                            <span className={styles.balanceLabel}>Account Balance</span>
                                            <span className={styles.balanceValue}>$24,582.00</span>
                                        </div>
                                        <div className={styles.appStats}>
                                            <div className={styles.appStat}>
                                                <span>Equity</span>
                                                <span>$26,450</span>
                                            </div>
                                            <div className={styles.appStat}>
                                                <span>Margin</span>
                                                <span>$4,200</span>
                                            </div>
                                        </div>
                                        <div className={styles.appButton}>Trade Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                            <span>EVERYTHING INCLUDED</span>
                        </div>
                        <h2>A Complete Trading Experience in Their Pocket</h2>
                        <p>
                            This isn't a stripped-down web view wrapped in an app icon. It's a fully native iOS and
                            Android application with every feature your traders expect—and a few they didn't know they needed.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureNumber}>01</div>
                            <h3>Full Trading Functionality</h3>
                            <p>
                                Market orders, limit orders, stop orders, take profit, stop loss—everything works exactly
                                like the desktop terminal. Traders can manage all positions without touching a computer.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureNumber}>02</div>
                            <h3>Advanced Charting</h3>
                            <p>
                                TradingView-powered charts with 80+ technical indicators, multiple timeframes, and drawing
                                tools. Because serious traders don't want a price line and a dream.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureNumber}>03</div>
                            <h3>In-App Deposits</h3>
                            <p>
                                Connect to your payment gateways directly. Credit card, crypto, bank wire—all accessible
                                within the app. No redirecting to a mobile web page that breaks half the time.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureNumber}>04</div>
                            <h3>Biometric Security</h3>
                            <p>
                                FaceID on iPhone, fingerprint on Android. One look or one touch to log in. No more typing
                                passwords on a tiny keyboard while walking to a meeting.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureNumber}>05</div>
                            <h3>Push Notifications</h3>
                            <p>
                                Margin calls, price alerts, market news, promotional campaigns—you control what gets
                                pushed. 90% open rate vs. email's pathetic 20%.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureNumber}>06</div>
                            <h3>Multi-Account Support</h3>
                            <p>
                                Your traders can switch between demo and live accounts, or manage multiple live accounts,
                                without logging out and back in like it's 2005.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Push Notification Strategy */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.pushContent}>
                            <h2>The "Wake Up" Weapon</h2>
                            <p className={styles.pushIntro}>
                                Email open rates are 20% on a good day. Push notification open rates hit 90%.
                                Use our notification engine to send targeted alerts that drive volume and deposits.
                            </p>
                            <div className={styles.pushExamples}>
                                <div className={styles.pushExample}>
                                    <span className={styles.pushTag + ' ' + styles.tagBlue}>Margin Call</span>
                                    <span className={styles.pushText}>"Your equity is low. Deposit now to save your positions."</span>
                                </div>
                                <div className={styles.pushExample}>
                                    <span className={styles.pushTag + ' ' + styles.tagGreen}>Market Volatility</span>
                                    <span className={styles.pushText}>"Gold is moving fast! +2% in 10 mins. Trade now."</span>
                                </div>
                                <div className={styles.pushExample}>
                                    <span className={styles.pushTag + ' ' + styles.tagGold}>Inactive User</span>
                                    <span className={styles.pushText}>"We miss you. Here's a 50% bonus on your next deposit."</span>
                                </div>
                                <div className={styles.pushExample}>
                                    <span className={styles.pushTag + ' ' + styles.tagRed}>Price Alert</span>
                                    <span className={styles.pushText}>"EURUSD just hit your target: 1.0850. Tap to trade."</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pushMockup}>
                            <div className={styles.notificationCard}>
                                <div className={styles.notificationHeader}>
                                    <div className={styles.notificationIcon}></div>
                                    <div className={styles.notificationMeta}>
                                        <span className={styles.notificationApp}>YOUR BROKER</span>
                                        <span className={styles.notificationTime}>now</span>
                                    </div>
                                </div>
                                <div className={styles.notificationTitle}>🔥 Gold is breaking out!</div>
                                <div className={styles.notificationBody}>XAUUSD just hit 2050. Volatility is high. Tap to trade.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publishing Timeline */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>THE TIMELINE</span>
                        </div>
                        <h2>The "No-Headache" Publishing Process</h2>
                        <p>
                            We know Apple is annoying. We know Google randomly changes their policies. That's why we
                            deal with them so you don't have to. Here's how it works:
                        </p>
                    </div>

                    <div className={styles.timeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h4>Day 1-2</h4>
                            <p>You send us your logo, color scheme, and developer account credentials. We do an intake call to understand your specific requirements.</p>
                        </div>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h4>Day 3-5</h4>
                            <p>We build the app binaries and push to TestFlight (iOS) and internal testing (Android). You can see it on your phone before anyone else.</p>
                        </div>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h4>Day 6-10</h4>
                            <p>We submit to App Store Review and Google Play Review. We handle any rejections, respond to queries, and make required adjustments.</p>
                        </div>
                        <div className={styles.timelineStep + ' ' + styles.finalStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h4>Day 14</h4>
                            <p>Your app goes live on both stores. You send download links to your clients. They see YOUR name as the publisher. You celebrate.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>TECHNICAL SPECIFICATIONS</span>
                        </div>
                        <h2>For the Technical Teams</h2>
                        <p>
                            We know your CTO is going to ask. Here's the spec sheet for the security and compliance review.
                        </p>
                    </div>

                    <div className={styles.specsGrid}>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>iOS 14+</span>
                            <span className={styles.specLabel}>Minimum iOS Version</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>Android 8+</span>
                            <span className={styles.specLabel}>Minimum Android</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>Swift/Kotlin</span>
                            <span className={styles.specLabel}>Native Languages</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>TLS 1.3</span>
                            <span className={styles.specLabel}>Encryption</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>FaceID</span>
                            <span className={styles.specLabel}>Biometric Auth</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>Firebase</span>
                            <span className={styles.specLabel}>Push Infrastructure</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>60 FPS</span>
                            <span className={styles.specLabel}>Chart Rendering</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>Monthly</span>
                            <span className={styles.specLabel}>OS Compatibility Updates</span>
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
                            <span>FREQUENTLY ASKED QUESTIONS</span>
                        </div>
                        <h2>Questions About the Mobile App</h2>
                        <p>
                            Everything you wanted to know but were afraid to ask your last provider.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Do I need my own Apple Developer Account?</h3>
                            <p>
                                Yes. To have your company name appear as the "Seller" on the App Store, you need your own
                                account ($99/year for App Store, $25 one-time for Google Play). We guide you through the
                                enrollment process—it takes about 2-3 days for Apple's approval.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What if Apple rejects the app?</h3>
                            <p>
                                It happens. Usually it's for something minor like a missing privacy policy link or unclear
                                financial disclaimers. We handle all the back-and-forth with Apple's review team. We have
                                a 100% eventual approval rate—sometimes it just takes a few attempts.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I update the app later?</h3>
                            <p>
                                Absolutely. We provide quarterly updates to ensure compatibility with new iOS/Android
                                versions. If you want to change your branding, add new payment methods, or introduce new
                                features, we can push updates to the stores.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What about ongoing maintenance?</h3>
                            <p>
                                Apple and Google release new OS versions yearly (and sometimes break things). We monitor
                                these releases, test compatibility, and push updates before your traders start complaining.
                                Maintenance is included in your subscription.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Does the app work with cTrader?</h3>
                            <p>
                                Yes. While we primarily support MT5, we also offer white-labeled apps for cTrader and
                                Match-Trader. The feature set varies slightly depending on the platform's capabilities,
                                but the branding and publishing process is the same.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can clients fund accounts through the app?</h3>
                            <p>
                                Yes—that's one of the biggest advantages. We integrate with your payment processors so
                                traders can deposit via card, bank transfer, or crypto without leaving the app. Seamless
                                funding means more deposits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Get Your App on the App Store</h2>
                        <p>
                            Every day without your own app is a day your competitors are building brand loyalty
                            on your clients' home screens. Let's fix that.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Start Building
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/company/contact" className={styles.secondaryCta}>
                                View Pricing
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
