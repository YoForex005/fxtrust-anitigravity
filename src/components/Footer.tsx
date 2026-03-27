import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaQuora,
    FaXTwitter,
    FaYoutube,
    FaRedditAlien,
    FaMedium,
    FaPinterestP,
    FaTumblr,
    FaFlickr
} from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Column 1: Brand */}
                    <div className={styles.brand}>
                        <Image src="/logo.png" alt="FxTrusts Logo" width={160} height={40} />
                        <p>
                            Building the platform we wish existed when we started. Less BS, more actual features.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/fxtrusts" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className={styles.socialIcon} /></a>
                            <a href="https://www.linkedin.com/company/fxtrusts/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className={styles.socialIcon} /></a>
                            <a href="https://www.quora.com/profile/FxTrust-Premium" target="_blank" rel="noopener noreferrer" aria-label="Quora"><FaQuora className={styles.socialIcon} /></a>
                            <a href="https://x.com/FxTrusts" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter className={styles.socialIcon} /></a>
                            <a href="https://www.youtube.com/@FxTrusts" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube className={styles.socialIcon} /></a>
                            <a href="https://www.reddit.com/user/fxtrusts/" target="_blank" rel="noopener noreferrer" aria-label="Reddit"><FaRedditAlien className={styles.socialIcon} /></a>
                            <a href="https://medium.com/@fxtrustspremium" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium className={styles.socialIcon} /></a>
                            <a href="https://in.pinterest.com/fxtrusts/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterestP className={styles.socialIcon} /></a>
                            <a href="https://www.tumblr.com/blog/fxtrusts" target="_blank" rel="noopener noreferrer" aria-label="Tumblr"><FaTumblr className={styles.socialIcon} /></a>
                            <a href="https://www.flickr.com/photos/fxtrustspremium/" target="_blank" rel="noopener noreferrer" aria-label="Flickr"><FaFlickr className={styles.socialIcon} /></a>
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
                            <strong>Contact:</strong> <a href="mailto:business@fxtrusts.com" style={{ color: '#3B82F6' }}>business@fxtrusts.com</a> | <a href="https://wa.me/447897015780" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6' }}>+44 7897 015780</a> (Call + Whatsapp)
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
