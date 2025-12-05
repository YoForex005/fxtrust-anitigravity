'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.png" alt="FxTrusts Logo" className={styles.logoIcon} style={{ width: '160px', height: 'auto', objectFit: 'contain', padding: '15px' }} />

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
                    <button className={styles.mobileMenuBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <Link href="https://calendar.app.google/ZqiL1RdizHSc1ydy6" target='blank' className={styles.ctaButton}>
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
