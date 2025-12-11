import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogLayout from '@/components/BlogLayout';
import ArticleSchema from '@/components/seo/ArticleSchema';
import styles from './content.module.css';

export const metadata: Metadata = {
    title: "OFFICIAL STATEMENT: Why FxTrusts Refuses to Charge You a $5,000 Setup Fee (We Are Sorry) | FxTrusts",
    description: "A formal apology to Forex Broker CEOs. We regret to inform you that our Forex CRM Provider pricing does not include hidden fees, setup costs, or the authentic overpriced experience you deserve.",
    keywords: [
        "forex crm provider",
        "forex crm pricing",
        "cheap forex crm",
        "forex crm alternative",
        "leverate alternative",
        "b2broker alternative"
    ],
    openGraph: {
        title: "OFFICIAL STATEMENT: Why FxTrusts Refuses to Charge You a $5,000 Setup Fee (We Are Sorry) | FxTrusts",
        description: "A formal apology to Forex Broker CEOs. We regret to inform you that our Forex CRM Provider pricing does not include hidden fees, setup costs, or the authentic overpriced experience you deserve.",
        type: "article",
        url: "https://fxtrusts.com/resources/blog/why-we-refuse-to-charge-setup-fees",
    },
    twitter: {
        card: "summary_large_image",
        title: "OFFICIAL STATEMENT: Why FxTrusts Refuses to Charge You a $5,000 Setup Fee (We Are Sorry) | FxTrusts",
        description: "A formal apology to Forex Broker CEOs. We regret to inform you that our Forex CRM Provider pricing does not include hidden fees, setup costs, or the authentic overpriced experience you deserve.",
    },
    alternates: {
        canonical: "https://fxtrusts.com/resources/blog/why-we-refuse-to-charge-setup-fees",
    },
};

// SVG Icons
const AlertIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const PuzzleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4353F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.42-.802-.9v-.826a1.5 1.5 0 0 0-1.5-1.5h-.5a1.5 1.5 0 0 0-1.5 1.5v.826c0 .48-.333.83-.802.9a.98.98 0 0 1-.837-.276l-1.611-1.611a2.407 2.407 0 0 1-.706-1.704c0-.617.236-1.234.706-1.704l1.568-1.568c.23-.23.338-.556.289-.878-.049-.322-.232-.585-.507-.763a2.5 2.5 0 0 1-1.05-2.037V6.5a1.5 1.5 0 0 0-1.5-1.5h-.826c-.48 0-.83-.333-.9-.802a.98.98 0 0 1 .276-.837L9.292 1.75a2.407 2.407 0 0 1 3.416 0l1.611 1.611a.98.98 0 0 1 .276.837c-.07.47-.42.802-.9.802h-.826a1.5 1.5 0 0 0-1.5 1.5v.5a2.5 2.5 0 0 0 1.05 2.037c.275.178.458.441.507.763z" />
    </svg>
);

const DollarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4353F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

const UsersIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4353F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const LockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4353F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

export default function ApologyPage() {
    const tableOfContents = [
        { id: 'setup-fees', title: 'A Note on Setup Fees' },
        { id: 'features', title: 'Features We Failed to Include' },
        { id: 'fair-rates', title: 'On Fair Market Rates' },
        { id: 'warning', title: 'A Final Warning' },
    ];

    const author = {
        name: 'The Chief Apology Officer',
        role: 'FxTrusts',
        initials: '!',
        bio: 'Professionally sorry for our suspiciously affordable pricing since 2024.',
    };

    return (
        <main className={styles.main}>
            <ArticleSchema
                headline="OFFICIAL STATEMENT: Why FxTrusts Refuses to Charge You a $5,000 Setup Fee"
                image="https://fxtrusts.com/logo.png"
                datePublished="2024-12-04"
                description="A formal corporate apology for our suspiciously affordable CRM pricing."
                authorName="FxTrusts"
                url="https://fxtrusts.com/resources/blog/why-we-refuse-to-charge-setup-fees"
            />
            <Header />

            <BlogLayout tableOfContents={tableOfContents} author={author}>
                <article className={styles.article}>
                    {/* Header */}
                    <header className={styles.articleHeader}>
                        <div className={styles.breadcrumb}>
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/resources/blog">Resources</Link>
                            <span>/</span>
                            <span>Official Statement</span>
                        </div>
                        <div className={styles.articleMeta}>
                            <span className={styles.categoryBadge}>Official Statement</span>
                            <span className={styles.metaDivider}>•</span>
                            <span className={styles.metaInfo}>6 min read</span>
                            <span className={styles.metaDivider}>•</span>
                            <span className={styles.metaInfo}>For Immediate Release</span>
                        </div>
                        <h1 className={styles.articleTitle}>
                            Why FxTrusts Refuses to Charge You a $5,000 Setup Fee
                        </h1>
                        <p className={styles.articleLead}>
                            A formal apology to CEOs currently paying $3,000/month for their CRM. We regret to
                            inform you that our Forex CRM Provider pricing does not include hidden fees, setup
                            costs, or the authentic overpriced experience you deserve.
                        </p>
                    </header>

                    {/* Content */}
                    <div className={styles.articleBody}>
                        <p>
                            To the esteemed CEOs, COOs, and Finance Directors currently paying a respectable
                            $2,000 to $3,000 per month for their <strong>Forex CRM Provider</strong>—we owe you
                            a sincere and unreserved apology.
                        </p>
                        <p>
                            It has come to our attention that FxTrusts has been causing significant confusion
                            across the brokerage industry. Multiple reports have reached our office describing
                            CEOs staring at our invoice in disbelief. Some have called their accountants. Others
                            have refreshed the page repeatedly, convinced there must be an error.
                        </p>
                        <p>
                            There is no error. We genuinely charge <strong>$700 per month</strong>. We know this
                            is upsetting. We know this doesn't feel "enterprise." We know you were expecting a
                            figure you could complain about at industry conferences.
                        </p>
                        <p>For this, we apologize.</p>

                        <div className={styles.callout} id="setup-fees">
                            <h4 className={styles.calloutTitle}>A Note on Setup Fees</h4>
                            <p className={styles.calloutText}>
                                We are aware that most <strong>Forex CRM Provider</strong> companies charge between
                                $5,000 and $15,000 simply to say "hello" and configure your login credentials. By
                                failing to implement this fee, FxTrusts has denied countless CEOs the authentic
                                thrill of burning venture capital before the platform is even switched on. We
                                understand if you feel cheated out of this experience.
                            </p>
                        </div>

                        <h2 id="features">Features We Failed to Include</h2>
                        <p>
                            In an effort to be transparent about our shortcomings, we have compiled a comprehensive
                            list of industry-standard features that FxTrusts has neglected to implement:
                        </p>

                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <PuzzleIcon /> The Labyrinth Protocol™
                        </h3>
                        <p>
                            Our competitors have invested heavily in user interfaces that require extensive
                            training, flowcharts, and occasionally a PhD in Systems Navigation. FxTrusts
                            regrettably built an interface that is—and we are embarrassed to admit this—<em>intuitive</em>.
                            New users have been observed completing tasks on their first attempt. We are looking
                            into adding unnecessary complexity in a future update.
                        </p>

                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <DollarIcon /> The Wallet Drainer v2.0™
                        </h3>
                        <p>
                            Industry-leading platforms include a sophisticated "hidden monthly surcharge"
                            module that activates after the honeymoon period. These charges are typically
                            labeled "platform maintenance," "ecosystem access," or simply "miscellaneous."
                            FxTrusts failed to install this feature. We are stuck at a flat <strong>$700/month</strong>.
                            We have hired a consultant to help us understand why we did this.
                        </p>

                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <UsersIcon /> The Ghost Support Protocol™
                        </h3>
                        <p>
                            Premium CRM providers understand that a 48-hour ticket response time builds
                            character. It teaches resilience. It forces CEOs to troubleshoot problems
                            themselves, creating valuable "learning opportunities." At FxTrusts, our
                            support team has a disturbing habit of replying within minutes. Some clients
                            have described this as "unsettling" and "overly attentive." We are considering
                            mandatory response delays to restore industry norms.
                        </p>

                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <LockIcon /> The Ecosystem Lock-In Suite™
                        </h3>
                        <p>
                            Respected providers bundle their CRM with proprietary liquidity, proprietary
                            bridges, and proprietary payment gateways—ensuring you cannot leave without
                            rebuilding your entire infrastructure. FxTrusts allows integration with
                            third-party providers of your choosing. We realize this gives you "options"
                            and "freedom," which we understand can be overwhelming.
                        </p>

                        <h2 id="fair-rates">On the Matter of "Fair Market Rates"</h2>
                        <p>
                            Our legal team has advised us to address the pricing discrepancy directly.
                        </p>

                        <div className={styles.tableWrapper}>
                            <table className={styles.comparisonTable}>
                                <thead>
                                    <tr>
                                        <th>Provider</th>
                                        <th>Monthly Fee</th>
                                        <th>Setup Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>UpTrader</strong></td>
                                        <td>$1,999/mo</td>
                                        <td>Custom dev extra</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Leverate (LXCRM)</strong></td>
                                        <td>$1,000–$3,000/mo</td>
                                        <td className={styles.negative}>$5k–$15k</td>
                                    </tr>
                                    <tr>
                                        <td><strong>B2Broker (B2Core)</strong></td>
                                        <td>$2,000–$5,000+/mo</td>
                                        <td className={styles.negative}>"Enterprise"</td>
                                    </tr>
                                    <tr className={styles.highlightRow}>
                                        <td><strong>FxTrusts</strong></td>
                                        <td className={styles.positive}>$700/mo</td>
                                        <td className={styles.positive}>$0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748B' }}>
                            As you can see, FxTrusts is demonstrably bad at capitalism.
                        </p>

                        <p>
                            We have received feedback suggesting that our pricing makes executives "uncomfortable"
                            during board meetings. When asked "How much are we paying for the CRM?" they are forced
                            to answer "$700" instead of a more impressive "around three thousand." We understand
                            this can be professionally embarrassing.
                        </p>
                        <p>
                            If it would help, we are open to issuing invoices that <em>say</em> $1,999 while
                            charging $700. Please contact our billing department to discuss this arrangement.
                        </p>

                        <h2 id="warning">A Final Warning</h2>

                        <div className={styles.warningBox}>
                            <h4 className={styles.warningTitle}>
                                <AlertIcon /> CAUTION: SIDE EFFECTS MAY INCLUDE
                            </h4>
                            <ul>
                                <li>Higher profit margins due to reduced CRM overhead</li>
                                <li>Confusion when your accountant asks "is this the full invoice?"</li>
                                <li>Unexpected free time previously spent on support ticket follow-ups</li>
                                <li>Mild anxiety from having a CRM that works as expected</li>
                                <li>Difficulty complaining about vendors at industry events</li>
                            </ul>
                        </div>

                        <p>
                            If you are prepared to accept these risks, you may proceed to schedule a demo.
                            If you prefer the authentic enterprise experience of paying $3,000/month plus setup
                            fees for the privilege of waiting 48 hours for support, we respect your decision
                            and wish you well.
                        </p>

                        <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
                            <p style={{ fontStyle: 'italic', color: '#64748B', marginBottom: '0.5rem' }}>Issued with sincere regret,</p>
                            <p style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.25rem' }}>The FxTrusts Finance Team</p>
                            <p style={{ fontSize: '0.85rem', color: '#94A3B8', fontStyle: 'italic' }}>(Who really, really wish we charged more)</p>
                        </div>

                        {/* CTA */}
                        <div className={styles.inlineCta}>
                            <div className={styles.inlineCtaContent}>
                                <h3>Accept the Risk</h3>
                                <p>Schedule a demo. See the $700/month for yourself.</p>
                            </div>
                            <Link href="/company/contact" className={styles.inlineCtaBtn}>
                                Proceed (At Your Own Risk) →
                            </Link>
                        </div>
                    </div>
                </article>
            </BlogLayout>

            <Footer />
        </main>
    );
}
