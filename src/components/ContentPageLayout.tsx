'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './ContentPageLayout.module.css';

// Professional SVG Icons
const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const BookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

interface TocItem {
    id: string;
    title: string;
}

interface RelatedLink {
    title: string;
    href: string;
    readTime?: string;
}

interface QuickFact {
    label: string;
    value: string;
}

interface ContentPageLayoutProps {
    children: ReactNode;
    tableOfContents?: TocItem[];
    relatedLinks?: RelatedLink[];
    quickFacts?: QuickFact[];
    ctaTitle?: string;
    ctaText?: string;
    ctaButtonText?: string;
    ctaButtonHref?: string;
}

export default function ContentPageLayout({
    children,
    tableOfContents = [],
    relatedLinks = [],
    quickFacts = [],
    ctaTitle = 'Ready to Get Started?',
    ctaText = 'Contact our team for more information.',
    ctaButtonText = 'Contact Us',
    ctaButtonHref = '/company/contact',
    features = [],
    contactTitle = 'Need Help?',
    contactText = 'Our team is available 24/7',
    contactEmail = 'business@fxtrusts.com',
}: ContentPageLayoutProps & {
    features?: string[];
    contactTitle?: string;
    contactText?: string;
    contactEmail?: string;
}) {
    return (
        <div className={styles.pageLayout}>
            {/* Left Sidebar */}
            <aside className={styles.leftSidebar}>
                {tableOfContents.length > 0 && (
                    <div className={styles.tocCard}>
                        <div className={styles.tocHeader}>
                            <div className={styles.tocIcon}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="15" y2="12" />
                                    <line x1="3" y1="18" x2="18" y2="18" />
                                </svg>
                            </div>
                            <h4 className={styles.tocTitle}>On This Page</h4>
                        </div>
                        <nav className={styles.tocNav}>
                            {tableOfContents.map((item, index) => (
                                <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                                    <span className={styles.tocNumber}>{String(index + 1).padStart(2, '0')}</span>
                                    <span className={styles.tocText}>{item.title}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                )}

                {/* Quick Facts */}
                {quickFacts.length > 0 && (
                    <div className={styles.factsCard}>
                        <h4 className={styles.factsTitle}>
                            <ShieldIcon />
                            Key Information
                        </h4>
                        <div className={styles.factsList}>
                            {quickFacts.map((fact, i) => (
                                <div key={i} className={styles.factItem}>
                                    <span className={styles.factLabel}>{fact.label}</span>
                                    <span className={styles.factValue}>{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Trust Badge */}
                <div className={styles.trustBadge}>
                    <div className={styles.trustStars}>
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <span className={styles.trustText}>Trusted by 500+ Brokers</span>
                    <span className={styles.trustSubtext}>Worldwide Since 2019</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <article className={styles.article}>
                    {(() => {
                        const groups: React.ReactNode[] = [];
                        let currentGroup: React.ReactNode[] = [];

                        const flushGroup = () => {
                            if (currentGroup.length > 0) {
                                groups.push(
                                    <div key={`group-${groups.length}`} className={styles.sectionCard}>
                                        {currentGroup}
                                    </div>
                                );
                                currentGroup = [];
                            }
                        };

                        React.Children.forEach(children, (child) => {
                            if (!React.isValidElement(child)) {
                                if (child !== null && child !== undefined) {
                                    currentGroup.push(child);
                                }
                                return;
                            }

                            const element = child as React.ReactElement<any>;
                            // A new section starts if:
                            // 1. It's an H1 or H2
                            // 2. It's a div or section with an ID (likely an anchor target)
                            const isNewSection =
                                element.type === 'h1' ||
                                element.type === 'h2' ||
                                (typeof element.type === 'string' &&
                                    (element.type === 'div' || element.type === 'section') &&
                                    element.props.id);

                            if (isNewSection && currentGroup.length > 0) {
                                flushGroup();
                            }

                            currentGroup.push(child);
                        });

                        flushGroup();

                        return groups;
                    })()}
                </article>
            </main>

            {/* Right Sidebar */}
            <aside className={styles.rightSidebar}>
                {/* CTA Card */}
                <div className={styles.ctaCard}>
                    <div className={styles.ctaGlow}></div>
                    <h4 className={styles.ctaTitle}>{ctaTitle}</h4>
                    <p className={styles.ctaText}>{ctaText}</p>
                    <Link href={ctaButtonHref} className={styles.ctaButton}>
                        {ctaButtonText}
                        <ArrowRightIcon />
                    </Link>
                    <div className={styles.ctaGuarantee}>
                        <ShieldIcon />
                        <span>30-day money-back guarantee</span>
                    </div>
                </div>

                {/* Features Card - NEW */}
                {features.length > 0 && (
                    <div className={styles.relatedCard}>
                        <h4 className={styles.relatedTitle}>
                            <CheckIcon />
                            Features Include
                        </h4>
                        <ul className={styles.featuresList} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.9rem', color: '#475569' }}>
                                    <span style={{ color: '#10B981', flexShrink: 0 }}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Related Links */}
                {relatedLinks.length > 0 && (
                    <div className={styles.relatedCard}>
                        <h4 className={styles.relatedTitle}>
                            <BookIcon />
                            Related Resources
                        </h4>
                        <div className={styles.relatedList}>
                            {relatedLinks.map((link, i) => (
                                <Link key={i} href={link.href} className={styles.relatedItem}>
                                    <span className={styles.relatedItemTitle}>{link.title}</span>
                                    {link.readTime && (
                                        <span className={styles.relatedItemMeta}>
                                            <ClockIcon />
                                            {link.readTime}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Card */}
                <div className={styles.contactCard}>
                    <div className={styles.contactIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </div>
                    <h4 className={styles.contactTitle}>{contactTitle}</h4>
                    <p className={styles.contactText}>{contactText}</p>
                    <a href={`mailto:${contactEmail}`} className={styles.contactEmail}>
                        {contactEmail}
                    </a>
                </div>
            </aside>
        </div>
    );
}

// Export icons for use in pages
export { CheckIcon, ArrowRightIcon, BookIcon, ClockIcon, ShieldIcon, StarIcon };
