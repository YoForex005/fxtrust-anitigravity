'use client';

import Link from 'next/link';
import styles from './PricingPreview.module.css';

export default function PricingPreview() {
    const plans = [
        {
            name: 'Entry',
            price: '700',
            payPerUser: '50',
            description: 'Perfect for brokers just getting started',
            features: [
                'Full CRM Suite',
                'Cloud Server (4vCPU, 8GB RAM)',
                'MetaQuotes Centroid Server',
                '24/7 Support (15min response)',
                'SMTP & Marketing CRM',
                'LP Access + Data Feeds'
            ],
            highlighted: false
        },
        {
            name: 'Standard',
            price: '1,300',
            payPerUser: '22',
            minAccounts: '150',
            description: 'Best value for growing brokerages',
            features: [
                'Everything in Entry',
                'Reduced cost per account',
                '150 accounts minimum',
                'Priority support queue',
                'Advanced analytics',
                'Custom integrations'
            ],
            highlighted: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For established institutional brokers',
            features: [
                'Custom infrastructure',
                'Dedicated account manager',
                'White-glove onboarding',
                'Custom LP integrations',
                'Volume discounts',
                'SLA guarantees'
            ],
            highlighted: false,
            isEnterprise: true
        }
    ];

    return (
        <section className={styles.section} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span>💰</span>
                        <span>PRICING (NO SURPRISES)</span>
                    </div>
                    <h2 className={styles.headline}>
                        Pay For What You Actually Use.<br />Not What You Might.
                    </h2>
                    <p className={styles.subtext}>
                        Stop paying for 500 accounts when you only have 50. Our pay-per-active-user model means you only pay for traders who are actually trading. Revolutionary concept, we know.
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
                        >
                            {plan.highlighted && (
                                <div className={styles.popularBadge}>Most Popular</div>
                            )}

                            <div className={styles.cardHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.priceContainer}>
                                    {!plan.isEnterprise ? (
                                        <>
                                            <span className={styles.currency}>$</span>
                                            <span className={styles.price}>{plan.price}</span>
                                            <span className={styles.period}>/month</span>
                                        </>
                                    ) : (
                                        <span className={styles.customPrice}>Let's Talk</span>
                                    )}
                                </div>
                                {!plan.isEnterprise && (
                                    <div className={styles.payPerUser}>
                                        + ${plan.payPerUser}/account
                                        {plan.minAccounts && <span className={styles.minAccounts}> (min {plan.minAccounts})</span>}
                                    </div>
                                )}
                                <p className={styles.description}>{plan.description}</p>
                            </div>

                            <ul className={styles.features}>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="10" fill="#4353F2" opacity="0.1" />
                                            <path d="M6 10l2.5 2.5L14 7" stroke="#4353F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/pricing" className={styles.ctaButton}>
                                {plan.isEnterprise ? 'Contact Sales' : 'View Full Details'}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.setupFee}>
                    <div className={styles.setupHeader}>
                        <div className={styles.setupIconBadge}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" fill="#4353F2" />
                                <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#7B8BF6" />
                            </svg>
                        </div>
                        <div className={styles.setupText}>
                            <h4>Implementation & Setup Fee</h4>
                            <div className={styles.setupPrice}>$1,500 <span>one-time</span></div>
                        </div>
                    </div>
                    <div className={styles.setupDetails}>
                        <p>Complete infrastructure deployment, white-label branding, and 7 days of dedicated engineering support. Approximately 56 hours of senior engineer time at cost.</p>
                    </div>
                </div>

                <div className={styles.addonsSection}>
                    <div className={styles.addonsHeader}>
                        <h3>Optional Add-Ons</h3>
                        <p>Extend your platform with additional capabilities</p>
                    </div>
                    <div className={styles.addonGrid}>
                        <div className={styles.addonCard}>
                            <div className={styles.addonIcon}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="8" fill="#EFF6FF" />
                                    <path d="M20 10H12C10.9 10 10 10.9 10 12V20C10 21.1 10.9 22 12 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10Z" fill="#4353F2" />
                                    <rect x="13" y="13" width="6" height="6" rx="1" fill="white" />
                                </svg>
                            </div>
                            <div className={styles.addonContent}>
                                <h4>Mobile App (iOS + Android)</h4>
                                <div className={styles.addonPriceTag}>
                                    <span className={styles.price}>$350</span>
                                    <span className={styles.period}>/month</span>
                                </div>
                                <p>Your brand on App Store & Play Store. Trading, deposits, withdrawals—everything.</p>
                            </div>
                        </div>
                        <div className={styles.addonCard}>
                            <div className={styles.addonIcon}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="8" fill="#EFF6FF" />
                                    <path d="M10 12C10 10.9 10.9 10 12 10H20C21.1 10 22 10.9 22 12V14H10V12Z" fill="#4353F2" />
                                    <path d="M10 14H22V20C22 21.1 21.1 22 20 22H12C10.9 22 10 21.1 10 20V14Z" fill="#7B8BF6" />
                                </svg>
                            </div>
                            <div className={styles.addonContent}>
                                <h4>MetaTrader Manager Access</h4>
                                <div className={styles.addonPriceTag}>
                                    <span className={styles.price}>$450</span>
                                    <span className={styles.period}>/month</span>
                                </div>
                                <p>Complete MetaQuotes Manager Terminal access. For those who like to tinker.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/pricing" className={styles.viewFullPricing}>
                    See Detailed Pricing & Comparison →
                </Link>
            </div>
        </section >
    );
}
