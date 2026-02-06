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

    const isTransparentHome = pathname === '/' && !scrolled;
    const isPricingPage = pathname === '/pricing' && !scrolled;

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isTransparentHome ? styles.transparentHome : ''} ${isPricingPage ? styles.transparentHome : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={(isTransparentHome || isPricingPage) ? "/fxtrustwhite.png" : "/logo.png"}
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
                        <div className={styles.navLink}>
                            {nav.platform}
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={`${styles.dropdown} ${styles.megaMenu}`}>
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
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            {nav.solutions}
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className={styles.dropdown}>
                            <Link href="/solutions/prop-firm" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Prop Firm Tech</span>
                                    <span className={styles.itemDesc}>The "Challenge" infrastructure.</span>
                                </div>
                            </Link>
                            <Link href="/solutions/liquidity" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Liquidity Bridge</span>
                                    <span className={styles.itemDesc}>Direct market access. Or not. Your call.</span>
                                </div>
                            </Link>
                            <Link href="/solutions/risk-management" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Risk Management</span>
                                    <span className={styles.itemDesc}>The anti-blowup shield.</span>
                                </div>
                            </Link>
                            <Link href="/solutions/crypto-payments" className={styles.dropdownItem}>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>Crypto Payments</span>
                                    <span className={styles.itemDesc}>Accept Bitcoin. Sleep soundly.</span>
                                </div>
                            </Link>
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
                            <Link href="/solutions/prop-firm" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Prop Firm Tech</Link>
                            <Link href="/solutions/liquidity" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Liquidity Bridge</Link>
                            <Link href="/solutions/risk-management" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Risk Management</Link>
                            <Link href="/solutions/crypto-payments" className={styles.mobileSublink} onClick={() => setIsMenuOpen(false)}>Crypto Payments</Link>
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

                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/get-started" className={styles.mobileCtaButton} onClick={() => setIsMenuOpen(false)}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
