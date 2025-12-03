'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                    </svg>
                    <span>FxTRUSTS</span>
                </Link>

                <nav className={styles.nav}>
                    {/* Platform Dropdown */}
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Platform
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
                            Solutions
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
                            Resources
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

                    <Link href="/pricing" className={styles.navLink}>Pricing</Link>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Company
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
                    <Link href="https://calendar.app.google/ZqiL1RdizHSc1ydy6" target='blank'  className={styles.ctaButton}>
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
