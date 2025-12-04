import Link from 'next/link';
import styles from './Footer.module.css';

const SocialIcon = ({ path }: { path: string }) => (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
    </svg>
);

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Column 1: Brand */}
                    <div className={styles.brand}>
                        <h3>FXTrusts</h3>
                        <p>
                            Building the platform we wish existed when we started. Less BS, more actual features.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="LinkedIn"><SocialIcon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></a>
                            <a href="#" aria-label="Twitter"><SocialIcon path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></a>
                        </div>
                        <div className={styles.newsletter}>
                            <h4>Join 2,847 Brokers Getting Our Brutally Honest Emails</h4>
                            <div className={styles.newsletterInputWrapper}>
                                <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
                                <button className={styles.newsletterButton}>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Markets */}
                    <div className={styles.column}>
                        <h4>Markets</h4>
                        <ul>
                            <li><Link href="/markets/forex">Forex</Link></li>
                            <li><Link href="/markets/crypto">Crypto</Link></li>
                            <li><Link href="/markets/indices">Indices</Link></li>
                            <li><Link href="/markets/commodities">Commodities</Link></li>
                            <li><Link href="/markets/stocks">Stocks</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div className={styles.column}>
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link href="/solutions/crm">Institutional CRM</Link></li>
                            <li><Link href="/solutions/liquidity">Liquidity Pools</Link></li>
                            <li><Link href="/solutions/mt5">MetaTrader 5</Link></li>
                            <li><Link href="/platform/mt5">White Label</Link></li>
                            <li><Link href="/platform/copy-trading">Copy Trading</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/company/about">About Us</Link></li>
                            <li><Link href="/company/contact">Contact</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/company/manifesto">Our Manifesto</Link></li>
                            <li><Link href="/get-started">Get Started</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Resources */}
                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="/resources/api-docs">API Documentation</Link></li>
                            <li><Link href="/resources/help-center">Help Center</Link></li>
                            <li><Link href="/resources/blog">Blog</Link></li>
                            <li><Link href="/resources/status">System Status</Link></li>
                            <li><Link href="/resources/guides/how-to-start-forex-broker">How to Start a Broker</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.legalLinks}>
                        <Link href="/legal/privacy-policy">Privacy Policy</Link>
                        <Link href="/legal/terms-conditions">Terms of Service</Link>
                        <Link href="/legal/refund-policy">Refund Policy</Link>
                        <Link href="/legal/risk-disclosure">Risk Disclosure</Link>
                    </div>
                    <div className={styles.disclaimer}>
                        <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: '#E2E8F0' }}>
                            Risk Warning: Trading leveraged products such as Forex and CFDs carries a high level of risk and may not be suitable for all investors.
                        </p>
                        <p>
                            The usual legal stuff: Trading is risky. Past performance isn't a crystal ball. We're a technology provider, not financial advisors—consult professionals smarter than us before doing anything crazy. You're an adult, make informed decisions.
                            <br /><br />
                            <strong>Middle East Office:</strong> B2007-127, 33rd floor, Latifa Tower, Trade Center first, Seikh Zayad Road, Dubai-UAE
                            <br />
                            <strong>Contact:</strong> <a href="mailto:business@fxtrusts.com" style={{ color: '#3B82F6' }}>business@fxtrusts.com</a> | <a href="tel:+971551461476" style={{ color: '#3B82F6' }}>+971 55 146 1476</a> (We actually reply!)
                        </p>
                    </div>
                    <div className={styles.copyright}>
                        © 2024 FXTrusts Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
