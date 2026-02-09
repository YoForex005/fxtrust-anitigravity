'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

// ========== DYNAMIC NAV LABEL VARIATIONS (10 each) ==========
const navLabels = {
    platform: [
        'Platform',
        'Products',
        'Technology',
        'Infrastructure',
        'Tools',
        'Systems',
        'Tech Stack',
        'Core Platform',
        'Our Technology',
        'Platform Suite',
    ],
    solutions: [
        'Solutions',
        'Services',
        'Offerings',
        'Capabilities',
        'Use Cases',
        'Applications',
        'Business Solutions',
        'Industry Solutions',
        'What We Offer',
        'Our Services',
    ],
    resources: [
        'Resources',
        'Learn',
        'Knowledge',
        'Insights',
        'Library',
        'Documentation',
        'Support Hub',
        'Help Center',
        'Learning Hub',
        'Resource Center',
    ],
    pricing: [
        'Pricing',
        'Plans',
        'Packages',
        'Investment',
        'Cost',
        'Rates',
        'Subscription',
        'Pricing Plans',
        'Our Pricing',
        'View Plans',
    ],
    company: [
        'Company',
        'About',
        'About Us',
        'Who We Are',
        'Our Story',
        'The Team',
        'Contact',
        'Get in Touch',
        'Connect',
        'Learn More',
    ],
};

// Get random label for each nav item
function getRandomLabels() {
    return {
        platform: navLabels.platform[Math.floor(Math.random() * navLabels.platform.length)],
        solutions: navLabels.solutions[Math.floor(Math.random() * navLabels.solutions.length)],
        resources: navLabels.resources[Math.floor(Math.random() * navLabels.resources.length)],
        pricing: navLabels.pricing[Math.floor(Math.random() * navLabels.pricing.length)],
        company: navLabels.company[Math.floor(Math.random() * navLabels.company.length)],
    };
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [labels, setLabels] = useState<ReturnType<typeof getRandomLabels> | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
    const pathname = usePathname();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Set random labels on mount (client-side)
        setLabels(getRandomLabels());

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fallback labels before hydration
    const nav = labels || {
        platform: 'Platform',
        solutions: 'Solutions',
        resources: 'Resources',
        pricing: 'Pricing',
        company: 'Company',
    };

    const isTransparentPage = (
        pathname === '/' ||
        pathname === '/pricing'
    ) && !scrolled;

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isTransparentPage ? styles.transparentHome : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={isTransparentPage ? "/fxtrustwhite.png" : "/logo.png"}
                        alt="FxTrusts Logo"
                        width={160}
                        height={50}
                        priority
                        className={styles.logoIcon}
                        style={{ objectFit: 'contain' }}
                    />

                </Link>

                <nav className={styles.nav}>
                    {/* Platform Dropdown */}
                    <div className={styles.navItem}>
                        <Link href="/platform/mt5" className={styles.navLink}>
                            {nav.platform}
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </Link>
                        <div className={styles.dropdown}>
                            <Link href="/platform/mt5" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>MetaTrader 5 White Label</span>
                                    <span className={styles.itemDesc}>The 800lb gorilla. Fully tamed.</span>
                                </div>
                            </Link>
                            <Link href="/platform/mobile-app" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Native Mobile App</span>
                                    <span className={styles.itemDesc}>Your logo. Their pocket. No generic apps.</span>
                                </div>
                            </Link>
                            <Link href="/platform/crm" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>CRM & Back Office</span>
                                    <span className={styles.itemDesc}>Client management that doesn't suck.</span>
                                </div>
                            </Link>
                            <Link href="/platform/copy-trading" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Copy Trading Engine</span>
                                    <span className={styles.itemDesc}>Let them copy winners. You take the fees.</span>
                                </div>
                            </Link>
                            <Link href="/platform/web-trader" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Web Trader</span>
                                    <span className={styles.itemDesc}>For when they can't install the .exe.</span>
                                </div>
                            </Link>
                            <Link href="/platform/hosting" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Low-Latency Hosting</span>
                                    <span className={styles.itemDesc}>LD4/NY4. Faster than their blink reflex.</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Solutions Dropdown */}
                    <div className={`${styles.navItem} ${styles.megaMenuParent}`}>
                        <div className={styles.navLink}>
                            {nav.solutions}
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={`${styles.dropdown} ${styles.megaMenu}`}>
                            <div className={styles.menuGrid}>
                                <div className={styles.menuColumn}>
                                    <div className={styles.sectionHeading}>Core Turnkey White Label Services</div>
                                    <Link href="/solutions/mt5" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>MetaTrader 5 (MT5) White Label License</span>
                                            <span className={styles.itemDesc}>Branded platform</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/traders-room" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Trader’s Room / Client Portal</span>
                                            <span className={styles.itemDesc}>User dashboard for deposits & profile</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/crm" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Forex CRM</span>
                                            <span className={styles.itemDesc}>Back-office management, lead tracking, & KYC</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/liquidity" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Liquidity Bridge & Aggregation</span>
                                            <span className={styles.itemDesc}>Connectivity to LPs/A-Book</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/liquidity-access" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Tier-1 Liquidity Access</span>
                                            <span className={styles.itemDesc}>Forex, Metals, Indices, Oil, Crypto CFDs</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.menuColumn}>
                                    <div className={styles.sectionHeading}>Prop Firm Tech & Challenge Infrastructure</div>
                                    <Link href="/solutions/prop-challenge-manager" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Prop Challenge Manager</span>
                                            <span className={styles.itemDesc}>Evaluation rules, profit targets, drawdowns</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/evaluation-engine" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Automated Evaluation Engine</span>
                                            <span className={styles.itemDesc}>Auto-transition from demo to funded</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/prop-risk-dashboard" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Prop Risk Dashboard</span>
                                            <span className={styles.itemDesc}>Monitoring for HFT, news trading, & fraud</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/leaderboards" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Trader Leaderboards & Competitions</span>
                                            <span className={styles.itemDesc}>Gamification tools</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/prop-trader-dashboard" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Prop Dashboard for Traders</span>
                                            <span className={styles.itemDesc}>Progress trackers & analytics</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.menuColumn}>
                                    <div className={styles.sectionHeading}>Investment & Social Trading Solutions</div>
                                    <Link href="/solutions/pamm" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>PAMM</span>
                                            <span className={styles.itemDesc}>Percentage Allocation Management Module</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/mam" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>MAM</span>
                                            <span className={styles.itemDesc}>Multi-Account Manager</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/copy-trading" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Copy Trading / Social Trading Platform</span>
                                            <span className={styles.itemDesc}>Connect master traders with followers</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/trade-copier" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Trade Copier Services</span>
                                            <span className={styles.itemDesc}>Master-to-sub account replication</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.menuColumn}>
                                    <div className={styles.sectionHeading}>Payment & Financial Infrastructure</div>
                                    <Link href="/solutions/crypto-gateway" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Crypto Payment Gateway</span>
                                            <span className={styles.itemDesc}>Instant BTC, USDT, ETH deposits/payouts</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/fiat-psp" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Fiat PSP Integration</span>
                                            <span className={styles.itemDesc}>Visa, Mastercard, Bank Wire</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/automated-payouts" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Automated Payout Systems</span>
                                            <span className={styles.itemDesc}>Mass payouts for prop firm traders</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/wallet-system" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Multi-Currency Wallet System</span>
                                            <span className={styles.itemDesc}>Internal transfers & storage</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.menuColumn}>
                                    <div className={styles.sectionHeading}>Technical & Operational Add-ons</div>
                                    <Link href="/solutions/vps-hosting" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Ultra-Low Latency VPS Hosting</span>
                                            <span className={styles.itemDesc}>For Expert Advisors/Bots</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/mobile-app-wl" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>White Label Mobile App</span>
                                            <span className={styles.itemDesc}>Custom iOS & Android apps</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/report-server" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>MT5 Report Server</span>
                                            <span className={styles.itemDesc}>Advanced data extraction & analytics</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/branded-website" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Branded Website & Landing Pages</span>
                                            <span className={styles.itemDesc}>With integrated registration</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/economic-calendar" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Economic Calendar & News Feeds</span>
                                            <span className={styles.itemDesc}>Real-time market insights</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/market-data-api" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Market Data APIs</span>
                                            <span className={styles.itemDesc}>REST & WebSocket feeds</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.menuColumn}>
                                    <div className={styles.sectionHeading}>Compliance & Administrative Services</div>
                                    <Link href="/solutions/offshore-formation" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Offshore Company Formation</span>
                                            <span className={styles.itemDesc}>SVG, Mauritius, Labuan</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/forex-licensing" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Forex/Prop Firm Licensing</span>
                                            <span className={styles.itemDesc}>FSA, ASIC, CySEC consulting</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/kyc-aml-verification" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>Automated KYC/AML Verification</span>
                                            <span className={styles.itemDesc}>Sumsub, Onfido integrations</span>
                                        </div>
                                    </Link>
                                    <Link href="/solutions/technical-support" className={styles.dropdownItem}>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>24/7 Outsourced Technical Support</span>
                                            <span className={styles.itemDesc}>L1/L2 helpdesk</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resources Dropdown (New) */}
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            {nav.resources}
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={styles.dropdown}>
                            <Link href="/docs" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>API Documentation</span>
                                    <span className={styles.itemDesc}>For the "I can build it better" devs.</span>
                                </div>
                            </Link>
                            <Link href="/status" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Server Status</span>
                                    <span className={styles.itemDesc}>99.99% Uptime. We checked.</span>
                                </div>
                            </Link>
                            <Link href="/blog" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>The Blog</span>
                                    <span className={styles.itemDesc}>Rants, updates, and occasional wisdom.</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Link href="/resources/blog" className={styles.navLink}>Blog</Link>

                    <Link href="/pricing" className={styles.navLink}>{nav.pricing}</Link>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            {nav.company}
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={styles.dropdown}>
                            <Link href="/company/manifesto" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Manifesto</span>
                                    <span className={styles.itemDesc}>Why we built this thing.</span>
                                </div>
                            </Link>
                            <Link href="/company/contact" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Contact</span>
                                    <span className={styles.itemDesc}>Sales, Support, & Therapy.</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.langWrapper}>
                        <button
                            className={styles.langBtn}
                            onClick={() => {
                                const dropdown = document.getElementById('langDropdown');
                                if (dropdown) {
                                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                                }
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </button>
                        <div id="langDropdown" className={`${styles.langDropdown} notranslate`}>
                            {[
                                { code: 'en', label: 'English', flag: 'us' },
                                { code: 'es', label: 'Español', flag: 'es' },
                                { code: 'fr', label: 'Français', flag: 'fr' },
                                { code: 'de', label: 'Deutsch', flag: 'de' },
                                { code: 'it', label: 'Italiano', flag: 'it' },
                                { code: 'pt', label: 'Português', flag: 'pt' },
                                { code: 'ru', label: 'Русский', flag: 'ru' },
                                { code: 'zh-CN', label: '中文', flag: 'cn' },
                                { code: 'ja', label: '日本語', flag: 'jp' },
                                { code: 'ko', label: '한국어', flag: 'kr' },
                                { code: 'ar', label: 'العربية', flag: 'sa' },
                                { code: 'hi', label: 'हिन्दी', flag: 'in' },
                                { code: 'bn', label: 'বাংলা', flag: 'bd' },
                                { code: 'ur', label: 'اردو', flag: 'pk' },
                            ].map((lang) => (
                                <button
                                    key={lang.code}
                                    className={styles.langOption}
                                    onClick={() => {
                                        const langCode = lang.code;
                                        // Set cookie for persistence
                                        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
                                        document.cookie = `googtrans=/en/${langCode}; path=/;`;

                                        // Trigger Google Translate dropdown
                                        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
                                        if (select) {
                                            select.value = langCode;
                                            select.dispatchEvent(new Event('change'));
                                        } else {
                                            window.location.reload();
                                        }
                                    }}
                                >
                                    <Image
                                        src={`https://flagcdn.com/24x18/${lang.flag}.png`}
                                        alt={lang.label}
                                        width={20}
                                        height={15}
                                        style={{ marginRight: '10px', objectFit: 'cover', borderRadius: '2px' }}
                                    />
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    <Link href="/get-started" className={styles.ctaButton}>
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    {/* Platform */}
                    <div className={styles.mobileMenuItem}>
                        <div
                            className={styles.mobileMenuHeader}
                            onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'platform' ? null : 'platform')}
                        >
                            {nav.platform}
                            <svg
                                className={`${styles.chevron} ${expandedMobileMenu === 'platform' ? styles.chevronRotate : ''}`}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={`${styles.mobileSubmenu} ${expandedMobileMenu === 'platform' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/platform/mt5" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>MetaTrader 5 White Label</Link>
                            <Link href="/platform/mobile-app" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Native Mobile App</Link>
                            <Link href="/platform/crm" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>CRM & Back Office</Link>
                            <Link href="/platform/copy-trading" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Copy Trading Engine</Link>
                            <Link href="/platform/web-trader" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Web Trader</Link>
                            <Link href="/platform/hosting" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Low-Latency Hosting</Link>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className={styles.mobileMenuItem}>
                        <div
                            className={styles.mobileMenuHeader}
                            onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'solutions' ? null : 'solutions')}
                        >
                            {nav.solutions}
                            <svg
                                className={`${styles.chevron} ${expandedMobileMenu === 'solutions' ? styles.chevronRotate : ''}`}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={`${styles.mobileSubmenu} ${expandedMobileMenu === 'solutions' ? styles.mobileSubmenuOpen : ''}`}>
                            <div className={styles.sectionHeading} style={{ fontSize: '0.7rem', color: '#666' }}>Core Turnkey White Label Services</div>
                            <Link href="/solutions/mt5" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>MetaTrader 5 (MT5) White Label License</Link>
                            <Link href="/solutions/traders-room" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Trader’s Room / Client Portal</Link>
                            <Link href="/solutions/crm" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Forex CRM</Link>
                            <Link href="/solutions/liquidity" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Liquidity Bridge & Aggregation</Link>
                            <Link href="/solutions/liquidity-access" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Tier-1 Liquidity Access</Link>

                            <div className={styles.sectionHeading} style={{ fontSize: '0.7rem', color: '#666', marginTop: '1.5rem' }}>Prop Firm Tech & Challenge Infrastructure</div>
                            <Link href="/solutions/prop-challenge-manager" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Prop Challenge Manager</Link>
                            <Link href="/solutions/evaluation-engine" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Automated Evaluation Engine</Link>
                            <Link href="/solutions/prop-risk-dashboard" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Prop Risk Dashboard</Link>
                            <Link href="/solutions/leaderboards" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Trader Leaderboards & Competitions</Link>
                            <Link href="/solutions/prop-trader-dashboard" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Prop Dashboard for Traders</Link>

                            <div className={styles.sectionHeading} style={{ fontSize: '0.7rem', color: '#666', marginTop: '1.5rem' }}>Investment & Social Trading Solutions</div>
                            <Link href="/solutions/pamm" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>PAMM (Percentage Allocation Management Module)</Link>
                            <Link href="/solutions/mam" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>MAM (Multi-Account Manager)</Link>
                            <Link href="/solutions/copy-trading" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Copy Trading / Social Trading Platform</Link>
                            <Link href="/solutions/trade-copier" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Trade Copier Services</Link>

                            <div className={styles.sectionHeading} style={{ fontSize: '0.7rem', color: '#666', marginTop: '1.5rem' }}>Payment & Financial Infrastructure</div>
                            <Link href="/solutions/crypto-gateway" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Crypto Payment Gateway</Link>
                            <Link href="/solutions/fiat-psp" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Fiat PSP Integration</Link>
                            <Link href="/solutions/automated-payouts" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Automated Payout Systems</Link>
                            <Link href="/solutions/wallet-system" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Multi-Currency Wallet System</Link>

                            <div className={styles.sectionHeading} style={{ fontSize: '0.7rem', color: '#666', marginTop: '1.5rem' }}>Technical & Operational Add-ons</div>
                            <Link href="/solutions/vps-hosting" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Ultra-Low Latency VPS Hosting</Link>
                            <Link href="/solutions/mobile-app-wl" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>White Label Mobile App</Link>
                            <Link href="/solutions/report-server" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>MT5 Report Server</Link>
                            <Link href="/solutions/branded-website" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Branded Website & Landing Pages</Link>
                            <Link href="/solutions/economic-calendar" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Economic Calendar & News Feeds</Link>
                            <Link href="/solutions/market-data-api" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Market Data APIs</Link>

                            <div className={styles.sectionHeading} style={{ fontSize: '0.7rem', color: '#666', marginTop: '1.5rem' }}>Compliance & Administrative Services</div>
                            <Link href="/solutions/offshore-formation" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Offshore Company Formation</Link>
                            <Link href="/solutions/forex-licensing" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Forex/Prop Firm Licensing</Link>
                            <Link href="/solutions/kyc-aml-verification" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Automated KYC/AML Verification</Link>
                            <Link href="/solutions/technical-support" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>24/7 Outsourced Technical Support</Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className={styles.mobileMenuItem}>
                        <div
                            className={styles.mobileMenuHeader}
                            onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'resources' ? null : 'resources')}
                        >
                            {nav.resources}
                            <svg
                                className={`${styles.chevron} ${expandedMobileMenu === 'resources' ? styles.chevronRotate : ''}`}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={`${styles.mobileSubmenu} ${expandedMobileMenu === 'resources' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/docs" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>API Documentation</Link>
                            <Link href="/status" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Server Status</Link>
                            <Link href="/resources/blog" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>The Blog</Link>
                        </div>
                    </div>

                    <Link href="/resources/blog" className={styles.mobileMenuDirectLink} onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </Link>

                    <Link href="/pricing" className={styles.mobileMenuDirectLink} onClick={() => setIsMenuOpen(false)}>
                        {nav.pricing}
                    </Link>

                    {/* Company */}
                    <div className={styles.mobileMenuItem}>
                        <div
                            className={styles.mobileMenuHeader}
                            onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'company' ? null : 'company')}
                        >
                            {nav.company}
                            <svg
                                className={`${styles.chevron} ${expandedMobileMenu === 'company' ? styles.chevronRotate : ''}`}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={`${styles.mobileSubmenu} ${expandedMobileMenu === 'company' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/company/manifesto" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Manifesto</Link>
                            <Link href="/company/contact" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>

                    <div className={styles.mobileCtaWrapper}>
                        <Link href="/get-started" className={styles.mobileCtaButton} onClick={() => setIsMenuOpen(false)}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
