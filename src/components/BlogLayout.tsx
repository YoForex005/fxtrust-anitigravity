'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BlogLayout.module.css';

// Icons
const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
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

interface AuthorInfo {
    name: string;
    role: string;
    initials: string;
    bio: string;
}

interface BlogLayoutProps {
    children: ReactNode;
    tableOfContents?: TocItem[];
    author?: AuthorInfo;
    showPricing?: boolean;
}

const defaultAuthor: AuthorInfo = {
    name: 'FxTrusts Research',
    role: 'Editorial Team',
    initials: 'FT',
    bio: 'In-depth analysis and insights for forex brokerage professionals worldwide.',
};

// ========== DYNAMIC VARIATIONS ==========

// 1. Color Themes (5 variations) - Professional: dark, light, white, grey, blue only
const colorThemes = [
    { primary: '#1E40AF', gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', accent: '#E2E8F0', name: 'navy' },
    { primary: '#3B82F6', gradient: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)', accent: '#F1F5F9', name: 'blue' },
    { primary: '#1D4ED8', gradient: 'linear-gradient(135deg, #020617 0%, #0F172A 100%)', accent: '#CBD5E1', name: 'royal' },
    { primary: '#2563EB', gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', accent: '#F8FAFC', name: 'azure' },
    { primary: '#1E40AF', gradient: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)', accent: '#D1D5DB', name: 'charcoal' },
];

// 2. Badge Texts (5 variations) - Professional, no emojis
const badgeTexts = [
    { text: 'Most Popular' },
    { text: 'Recommended' },
    { text: 'Industry Choice' },
    { text: 'Enterprise Ready' },
    { text: 'Best Value' },
];

// 3. CTA Button Texts (5 variations)
const ctaTexts = [
    'Start Free Trial',
    'Get Started Now',
    'Try It Free',
    'Claim Your Demo',
    'Begin Free Trial',
];

// 4. Trust Stats Variations (5 sets)
const trustStatsVariations = [
    [
        { value: '48h', label: 'Setup Time' },
        { value: '$0', label: 'Setup Fee' },
        { value: '24/7', label: 'Support' },
        { value: '99.9%', label: 'Uptime' },
    ],
    [
        { value: '500+', label: 'Brokers' },
        { value: '67', label: 'Countries' },
        { value: '$2.8B', label: 'Daily Volume' },
        { value: '8.4ms', label: 'Avg Latency' },
    ],
    [
        { value: '4.9/5', label: 'User Rating' },
        { value: '100%', label: 'API Uptime' },
        { value: '<2h', label: 'Avg Response' },
        { value: '142', label: 'Integrations' },
    ],
    [
        { value: '0', label: 'Hidden Fees' },
        { value: '30 Day', label: 'Money Back' },
        { value: 'Monthly', label: 'Billing' },
        { value: 'Instant', label: 'Onboarding' },
    ],
    [
        { value: '10+', label: 'Years Live' },
        { value: '50M+', label: 'Trades/Day' },
        { value: 'SOC2', label: 'Certified' },
        { value: 'LD4/NY4', label: 'Colocated' },
    ],
];

// 5. Headline Variations (5 variations)
const headlineVariations = [
    'Why Choose FxTrusts?',
    'Platform Highlights',
    'Key Benefits',
    'What Sets Us Apart',
    'Why Brokers Trust Us',
];

// 6. Newsletter Headlines (5 variations)
const newsletterHeadlines = [
    { title: 'Industry Insights', text: 'Weekly analysis for forex brokerage professionals.' },
    { title: 'Broker Intel Report', text: 'Stay ahead with exclusive market intelligence.' },
    { title: 'The FX Insider', text: 'Trends, tips, and tactics delivered weekly.' },
    { title: 'Market Pulse', text: 'Critical updates for brokerage decision-makers.' },
    { title: 'Tech & Trading', text: 'Innovation insights for modern brokers.' },
];

// 7. Discount Display Variations (5 variations)
const discountVariations = [
    { original: '$2,500', discount: '72% off' },
    { original: '$2,000', discount: 'Save $1,300' },
    { original: '$1,999', discount: '65% savings' },
    { original: '$2,200', discount: 'Best deal' },
    { original: '$2,400', discount: '71% less' },
];

// 8. Guarantee Text Variations (5 variations)
const guaranteeTexts = [
    '30-day money-back guarantee',
    'Risk-free for 30 days',
    'Full refund within 30 days',
    'No questions asked, 30 days',
    'Try risk-free for a month',
];

// 9. CRM Features Order (randomized)
const allCrmFeatures = [
    'Lead Management & Pipeline',
    'MT4/MT5 Integration',
    'Automated KYC/AML',
    'IB & Affiliate Module',
    'Payment Gateway Integration',
    'Multi-Language Support',
    'Client Portal',
    'Risk Management Tools',
    'Reporting & Analytics',
    'White Label Ready',
];

// 10. Related Articles Pool
const allRelatedArticles = [
    { title: 'Top 10 Forex CRM Providers 2025', href: '/resources/blog/best-forex-crm-providers-2025', readTime: '12 min' },
    { title: 'How to Start a Forex Brokerage', href: '/resources/guides/how-to-start-forex-broker', readTime: '22 min' },
    { title: 'MT4 vs MT5 CRM Integration', href: '/resources/blog/mt4-vs-mt5-crm', readTime: '15 min' },
    { title: 'B2Broker Alternative Guide', href: '/resources/comparisons/b2broker-alternative', readTime: '10 min' },
    { title: 'Leverate Alternative Guide', href: '/resources/comparisons/leverate-alternative', readTime: '9 min' },
    { title: 'Forex CRM Complete Guide', href: '/resources/guides/forex-crm-complete-guide', readTime: '18 min' },
];

// Utility: Shuffle array
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Generate random variations
function getRandomVariations() {
    const themeIndex = Math.floor(Math.random() * colorThemes.length);
    const badgeIndex = Math.floor(Math.random() * badgeTexts.length);
    const ctaIndex = Math.floor(Math.random() * ctaTexts.length);
    const statsIndex = Math.floor(Math.random() * trustStatsVariations.length);
    const headlineIndex = Math.floor(Math.random() * headlineVariations.length);
    const newsletterIndex = Math.floor(Math.random() * newsletterHeadlines.length);
    const discountIndex = Math.floor(Math.random() * discountVariations.length);
    const guaranteeIndex = Math.floor(Math.random() * guaranteeTexts.length);

    return {
        theme: colorThemes[themeIndex],
        badge: badgeTexts[badgeIndex],
        cta: ctaTexts[ctaIndex],
        stats: trustStatsVariations[statsIndex],
        headline: headlineVariations[headlineIndex],
        newsletter: newsletterHeadlines[newsletterIndex],
        discount: discountVariations[discountIndex],
        guarantee: guaranteeTexts[guaranteeIndex],
        features: shuffleArray(allCrmFeatures).slice(0, 6),
        articles: shuffleArray(allRelatedArticles).slice(0, 3),
    };
}

export default function BlogLayout({
    children,
    tableOfContents = [],
    author = defaultAuthor,
    showPricing = true,
}: BlogLayoutProps) {
    // State for dynamic variations (client-side only)
    const [variations, setVariations] = useState<ReturnType<typeof getRandomVariations> | null>(null);

    useEffect(() => {
        // Generate random variations on mount (client-side)
        setVariations(getRandomVariations());
    }, []);

    // Default fallback before hydration
    const v = variations || {
        theme: colorThemes[0],
        badge: badgeTexts[0],
        cta: ctaTexts[0],
        stats: trustStatsVariations[0],
        headline: headlineVariations[0],
        newsletter: newsletterHeadlines[0],
        discount: discountVariations[0],
        guarantee: guaranteeTexts[0],
        features: allCrmFeatures.slice(0, 6),
        articles: allRelatedArticles.slice(0, 3),
    };

    return (
        <div className={styles.blogLayout}>
            {/* Left Sidebar */}
            <aside className={styles.leftSidebar}>
                {tableOfContents.length > 0 && (
                    <div className={styles.tocCard}>
                        <div className={styles.tocHeader}>
                            <div className={styles.tocIcon} style={{ background: `linear-gradient(135deg, ${v.theme.primary}20 0%, ${v.theme.primary}30 100%)`, color: v.theme.primary }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="15" y2="12" />
                                    <line x1="3" y1="18" x2="18" y2="18" />
                                </svg>
                            </div>
                            <h4 className={styles.tocTitle}>Contents</h4>
                        </div>
                        <nav className={styles.tocNav}>
                            {tableOfContents.map((item, index) => (
                                <a key={item.id} href={`#${item.id}`} className={styles.tocLink} style={{ '--hover-color': v.theme.primary } as React.CSSProperties}>
                                    <span className={styles.tocNumber}>{String(index + 1).padStart(2, '0')}</span>
                                    <span className={styles.tocText}>{item.title}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                )}

                <div className={styles.authorCard}>
                    <div className={styles.authorGlow} style={{ background: `radial-gradient(circle, ${v.theme.primary}15 0%, transparent 70%)` }}></div>
                    <div className={styles.authorAvatar} style={{ background: `linear-gradient(135deg, ${v.theme.primary} 0%, ${v.theme.accent} 100%)` }}>
                        <span>{author.initials}</span>
                    </div>
                    <div className={styles.authorName}>{author.name}</div>
                    <div className={styles.authorRole}>{author.role}</div>
                    <p className={styles.authorBio}>{author.bio}</p>
                    <div className={styles.authorSocial}>
                        <Link href="/company/about" className={styles.socialLink} style={{ background: `${v.theme.primary}15`, color: v.theme.primary }}>
                            About Us
                        </Link>
                    </div>
                </div>

                {/* Trust Signals */}
                <div className={styles.trustCard} style={{ background: v.theme.gradient }}>
                    <div className={styles.trustItem}>
                        <span className={styles.trustValue}>500+</span>
                        <span className={styles.trustLabel} style={{ color: v.theme.accent }}>Active Brokers</span>
                    </div>
                    <div className={styles.trustDivider}></div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustValue}>67</span>
                        <span className={styles.trustLabel} style={{ color: v.theme.accent }}>Countries</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) return child;

                    const element = child as React.ReactElement<any>;
                    // Transform h1, h3, h4 to h2 for consistency and SEO as per request
                    if (element.type === 'h1' || element.type === 'h3' || element.type === 'h4') {
                        return React.createElement('h2', element.props, element.props.children);
                    }
                    return child;
                })}
            </main>

            {/* Right Sidebar */}
            <aside className={styles.rightSidebar}>
                {showPricing && (
                    <div className={styles.pricingCard}>
                        <div className={styles.pricingGlow} style={{ background: `radial-gradient(circle, ${v.theme.primary}20 0%, transparent 60%)` }}></div>
                        <div className={styles.pricingBadge} style={{ background: `linear-gradient(135deg, ${v.theme.primary} 0%, ${v.theme.accent} 100%)` }}>
                            <span className={styles.badgeDot}></span>
                            {v.badge.text}
                        </div>
                        <div className={styles.pricingHeader} style={{ background: v.theme.gradient }}>
                            <span className={styles.pricingLabel} style={{ color: v.theme.accent }}>Forex CRM</span>
                            <div className={styles.pricingAmount}>
                                <span className={styles.pricingCurrency}>$</span>
                                <span className={styles.pricingValue}>700</span>
                                <span className={styles.pricingPeriod} style={{ color: v.theme.accent }}>/mo</span>
                            </div>
                            <div className={styles.pricingSubtext}>
                                <span className={styles.strikethrough}>{v.discount.original}</span>
                                <span className={styles.discount}>{v.discount.discount}</span>
                            </div>
                        </div>
                        <ul className={styles.pricingFeatures}>
                            {v.features.map((feature, i) => (
                                <li key={i}>
                                    <span className={styles.featureCheck}><CheckIcon /></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/company/contact" className={styles.pricingBtn} style={{ background: `linear-gradient(135deg, ${v.theme.primary} 0%, ${v.theme.accent} 100%)` }}>
                            {v.cta}
                            <ArrowIcon />
                        </Link>
                        <div className={styles.pricingGuarantee}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>{v.guarantee}</span>
                        </div>
                        <div className={styles.pricingTrust}>
                            <div className={styles.trustStars}>
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                            </div>
                            <span>Trusted by industry leaders</span>
                        </div>
                    </div>
                )}

                {/* Quick Stats */}
                <div className={styles.statsCard}>
                    <h4 className={styles.statsTitle}>{v.headline}</h4>
                    <div className={styles.statsGrid}>
                        {v.stats.map((stat, i) => (
                            <div key={i} className={styles.statItem}>
                                <span className={styles.statValue}>
                                    {stat.value}
                                </span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Articles */}
                <div className={styles.relatedCard}>
                    <h4 className={styles.relatedTitle}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={v.theme.primary} strokeWidth="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        Related Reading
                    </h4>
                    <div className={styles.relatedList}>
                        {v.articles.map((article, i) => (
                            <Link key={i} href={article.href} className={styles.relatedItem}>
                                <span className={styles.relatedItemTitle}>{article.title}</span>
                                <span className={styles.relatedItemMeta}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    {article.readTime}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className={styles.newsletterCard} style={{ background: v.theme.gradient }}>
                    <div className={styles.newsletterIcon} style={{ background: `${v.theme.accent}20` }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <h4 className={styles.newsletterTitle}>{v.newsletter.title}</h4>
                    <p className={styles.newsletterText} style={{ color: v.theme.accent }}>{v.newsletter.text}</p>
                    <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
                        <button type="submit" className={styles.newsletterBtn} style={{ color: v.theme.primary }}>
                            Subscribe
                        </button>
                    </form>
                    <span className={styles.newsletterNote} style={{ color: v.theme.accent }}>Join 3,400+ subscribers</span>
                </div>
            </aside>
        </div>
    );
}
