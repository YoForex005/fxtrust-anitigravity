'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './pricing.module.css';

export default function PricingPage() {
    const [accountCount, setAccountCount] = useState(150);

    // Exponential decay pricing for Entry Level
    // Range: 1-140 accounts, Price: $50 -> $35
    const getEntryLevelPrice = (accounts: number): number => {
        const A = 50.129;  // Scaling factor
        const k = -0.00257; // Decay constant

        let price = A * Math.exp(k * accounts);

        // Hard limits
        if (price > 50) return 50.00;
        if (price < 35) return 35.00;

        return parseFloat(price.toFixed(2));
    };

    // Exponential decay pricing for Standard Plan
    // Range: 150-500 accounts, Price: $25 -> $9.50
    // At 500 accounts: $1,300 + (500 × $9.50) = $6,050
    const getStandardPlanPrice = (accounts: number): number => {
        const A = 37.85;  // Scaling factor
        const k = -0.002765; // Decay constant

        let price = A * Math.exp(k * accounts);

        // Hard limits
        if (price > 25) return 25.00;
        if (price < 9.50) return 9.50;

        return parseFloat(price.toFixed(2));
    };

    // Calculate costs dynamically
    const calculateCost = (plan: 'entry' | 'standard' | 'enterprise', accounts: number) => {
        if (plan === 'entry') {
            const baseMonthly = 700;
            const perAccount = getEntryLevelPrice(accounts); // Dynamic pricing
            const accountsTotal = accounts * perAccount;
            const monthlyTotal = baseMonthly + accountsTotal;
            return {
                base: baseMonthly,
                perAccount: perAccount,
                accountsTotal: accountsTotal,
                monthly: monthlyTotal,
                yearly: monthlyTotal * 12,
                effectiveCostPerAccount: monthlyTotal / accounts
            };
        } else if (plan === 'standard') {
            const validAccounts = Math.max(accounts, 150);
            const baseMonthly = 1300;
            const perAccount = getStandardPlanPrice(validAccounts); // Dynamic pricing
            const accountsTotal = validAccounts * perAccount;
            const monthlyTotal = baseMonthly + accountsTotal;
            return {
                base: baseMonthly,
                perAccount: perAccount,
                accountsTotal: accountsTotal,
                monthly: monthlyTotal,
                yearly: monthlyTotal * 12,
                effectiveCostPerAccount: monthlyTotal / validAccounts
            };
        }
        return { base: 0, perAccount: 0, accountsTotal: 0, monthly: 0, yearly: 0, effectiveCostPerAccount: 0 };
    };

    const entryCost = calculateCost('entry', accountCount);
    const standardCost = calculateCost('standard', accountCount);
    const savings = entryCost.yearly - standardCost.yearly;
    const savingsPercent = ((savings / entryCost.yearly) * 100).toFixed(1);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section - Matching Homepage */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <div className={styles.badge}>
                                <span className={styles.badgeIcon}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </span>
                                <span>The pricing page where we actually list prices. Revolutionary.</span>
                            </div>
                            <h1 className={styles.headline}>
                                We Apologize in Advance<br />
                                For Showing You Actual Numbers.
                            </h1>
                            <p className={styles.subtext}>
                                We know this is unusual. Most vendors prefer the "contact sales to find out what car payment you'll be making" approach. But we're feeling reckless today, so here's exactly what you'll pay: $700/mo base + $50→$35 per account (Entry) or $1,300/mo + $25→$9.50 per account (Standard). One-time $1,500 setup. That's the whole list. We're sorry if this ruins your "mysterious enterprise software" fantasy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Live Cost Calculator */}
                <section className={styles.calculatorSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>The Calculator That Doesn't Require a Sales Call</h2>
                            <p>Move the slider. Watch the numbers update in real-time. Yes, we know—a pricing page that actually tells you prices. What a concept.</p>
                        </div>

                        <div className={styles.calculatorCard}>
                            <div className={styles.sliderSection}>
                                <label className={styles.sliderLabel}>
                                    Active MT5 Trading Accounts per Month
                                </label>
                                <div className={styles.sliderContainer}>
                                    <input
                                        type="range"
                                        min="10"
                                        max="500"
                                        step="10"
                                        value={accountCount}
                                        onChange={(e) => setAccountCount(Number(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <div className={styles.sliderValue}>
                                        <span className={styles.accountNumber}>{accountCount}</span>
                                        <span className={styles.accountLabel}>active trading accounts</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.costComparison}>
                                {/* Entry Plan */}
                                <div className={styles.costCard}>
                                    <div className={styles.planBadge}>Entry Plan</div>

                                    <div className={styles.costBreakdown}>
                                        <div className={styles.breakdownTitle}>Monthly Breakdown:</div>
                                        <div className={styles.costLine}>
                                            <span>Platform Base Fee:</span>
                                            <span>${entryCost.base.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.costLine}>
                                            <span>Active Accounts ({accountCount} × ${entryCost.perAccount.toFixed(2)}):</span>
                                            <span>${entryCost.accountsTotal.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.costLineDivider}></div>
                                        <div className={styles.costLine}>
                                            <span className={styles.costLineLabel}>Monthly Total:</span>
                                            <span className={styles.costLineValue}>${entryCost.monthly.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.costLine}>
                                            <span className={styles.costLineSmall}>Effective cost per account:</span>
                                            <span className={styles.costLineSmall}>${entryCost.effectiveCostPerAccount.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className={styles.annualCost}>
                                        <span>Annual Cost: ${entryCost.yearly.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className={styles.vsIndicator}>
                                    <span>vs</span>
                                </div>

                                {/* Standard Plan */}
                                <div className={`${styles.costCard} ${styles.highlighted}`}>
                                    {accountCount >= 150 && (
                                        <div className={styles.savingsBadge}>
                                            {savingsPercent}% Savings
                                        </div>
                                    )}
                                    <div className={`${styles.planBadge} ${styles.recommended}`}>Standard Plan (Recommended)</div>

                                    {accountCount < 150 && (
                                        <div className={styles.warningMessage}>
                                            <strong>Requires 150+ accounts</strong> - You currently have {accountCount} accounts selected
                                        </div>
                                    )}

                                    <div className={styles.costBreakdown}>
                                        <div className={styles.breakdownTitle}>Monthly Breakdown:</div>
                                        <div className={styles.costLine}>
                                            <span>Platform Base Fee:</span>
                                            <span>${standardCost.base.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.costLine}>
                                            <span>Active Accounts ({Math.max(accountCount, 150)} × ${standardCost.perAccount.toFixed(2)}):</span>
                                            <span>${standardCost.accountsTotal.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.costLineDivider}></div>
                                        <div className={styles.costLine}>
                                            <span className={styles.costLineLabel}>Monthly Total:</span>
                                            <span className={styles.costLineValue}>${standardCost.monthly.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.costLine}>
                                            <span className={styles.costLineSmall}>Effective cost per account:</span>
                                            <span className={styles.costLineSmall}>${standardCost.effectiveCostPerAccount.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className={styles.annualCost}>
                                        <span>Annual Cost: ${standardCost.yearly.toLocaleString()}</span>
                                        {accountCount >= 150 && (
                                            <span className={styles.annualSavings}>Save ${savings.toLocaleString()}/year vs Entry</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {accountCount >= 150 && (
                                <div className={styles.savingsHighlight}>
                                    <strong>You'd save ${(savings / 12).toLocaleString()}/month</strong> with Standard vs Entry at {accountCount} accounts. That's money you could spend on acquisition instead of infrastructure.
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Complete Pricing Breakdown */}
                <section className={styles.transparencySection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>The Part Where We Show Our Entire Hand</h2>
                            <p>Every fee explained. No asterisks leading to "contact sales." We're terrible at the mystery game.</p>
                        </div>

                        <div className={styles.pricingGrid}>
                            {/* Entry Plan */}
                            <div className={styles.planDetailCard}>
                                <div className={styles.planHeader}>
                                    <h3>Entry</h3>
                                    <p className={styles.planDescription}>For brokerages who want to test if we're actually as good as we claim (we are)</p>
                                </div>

                                <div className={styles.planPricing}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Base Platform:</span>
                                        <span className={styles.price}>$700<span className={styles.pricePeriod}>/month</span></span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Per Active Account:</span>
                                        <span className={styles.price}>upto $35<span className={styles.pricePeriod}>/month</span></span>
                                    </div>
                                    <div className={styles.priceExample}>
                                        Volume discount: Price drops from $50 to $35 as you scale (1-140 accounts)<br />
                                        Example: 100 accounts @ $38.53 = $700 + $3,853 = <strong>$4,553/month</strong>
                                    </div>
                                </div>

                                <div className={styles.whatsIncluded}>
                                    <h4>What's Included in $700 Base:</h4>
                                    <ul>
                                        <li>4vCPU, 8GB RAM dedicated server (AWS/Azure)</li>
                                        <li>Official MetaQuotes Centroid infrastructure</li>
                                        <li>Complete white-label CRM system</li>
                                        <li>24/7 technical support via Microsoft Teams</li>
                                        <li>Dedicated SMTP mail server (transactional + marketing)</li>
                                        <li>Marketing automation CRM with campaign tools</li>
                                        <li>Direct Tier-1 liquidity access (LMAX, Saxo, JPM, Mass Markets)</li>
                                        <li>Real-time market data feeds (forex, metals, indices, crypto, stocks)</li>
                                        <li>Unlimited liquidity gateway connections</li>
                                        <li>Anti-grey shield compliance (automated US blocking)</li>
                                        <li>SSL certificates & DDoS protection</li>
                                        <li>Sub-20ms execution infrastructure</li>
                                    </ul>
                                </div>

                                <div className={styles.whatsNotIncluded}>
                                    <h4>What Costs Extra:</h4>
                                    <ul>
                                        <li>Mobile apps (iOS + Android): $350/month</li>
                                        <li>MetaTrader Manager Terminal access: $450/month</li>
                                        <li>Prop firm challenge module: $250/month</li>
                                        <li>Advanced analytics platform: $200/month</li>
                                        <li>Custom feature development: quoted separately</li>
                                    </ul>
                                </div>

                                <Link href="/get-started" className={styles.planButton}>
                                    Get Started with Entry
                                </Link>
                            </div>

                            {/* Standard Plan */}
                            <div className={`${styles.planDetailCard} ${styles.popularPlan}`}>
                                <div className={styles.popularBadge}>Most Brokers Choose This</div>
                                <div className={styles.planHeader}>
                                    <h3>Standard</h3>
                                    <p className={styles.planDescription}>For brokerages who did the math and realized we're not joking about the savings</p>
                                </div>

                                <div className={styles.planPricing}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Base Platform:</span>
                                        <span className={styles.price}>$1,300<span className={styles.pricePeriod}>/month</span></span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Per Active Account:</span>
                                        <span className={styles.price}>upto $9.50<span className={styles.pricePeriod}>/month</span></span>
                                    </div>
                                    <div className={styles.minimumNotice}>
                                        <strong>Minimum 150 active accounts required</strong>
                                    </div>
                                    <div className={styles.priceExample}>
                                        Volume discount: Price drops from $25 to $9.50 as you scale (150-500 accounts)<br />
                                        Example: 500 accounts @ $9.50 = $1,300 + $4,750 = <strong>$6,050/month</strong>
                                    </div>
                                </div>

                                <div className={styles.whatsIncluded}>
                                    <h4>What's Included in $1,300 Base:</h4>
                                    <ul>
                                        <li>8vCPU, 16GB RAM dedicated server (AWS/Azure)</li>
                                        <li>Official MetaQuotes Centroid infrastructure</li>
                                        <li>Complete white-label CRM system</li>
                                        <li>Priority 24/7 support (15min-1hr response)</li>
                                        <li>Dedicated SMTP mail server (transactional + marketing)</li>
                                        <li>Advanced marketing automation CRM + A/B testing</li>
                                        <li>Direct Tier-1 liquidity access (LMAX, Saxo, JPM, Mass Markets)</li>
                                        <li>Real-time market data feeds (forex, metals, indices, crypto, stocks)</li>
                                        <li>Unlimited liquidity gateway connections</li>
                                        <li>Anti-grey shield compliance (automated US blocking)</li>
                                        <li>SSL certificates & DDoS protection</li>
                                        <li>Sub-10ms execution infrastructure</li>
                                        <li>Advanced analytics dashboard (included)</li>
                                        <li>Full read/write API access</li>
                                        <li>14-day post-launch support period</li>
                                    </ul>
                                </div>

                                <div className={styles.whatsIncluded}>
                                    <h4>Additional Premium Features:</h4>
                                    <ul>
                                        <li>Custom integration support</li>
                                        <li>Webhook support for real-time events</li>
                                        <li>Advanced reporting & export tools</li>
                                        <li>Multi-currency wallet support</li>
                                        <li>Automated KYC/AML workflows</li>
                                        <li>Client portal customization options</li>
                                    </ul>
                                </div>

                                <div className={styles.breakEvenCalculation}>
                                    <h4>Break-Even Point:</h4>
                                    <p>Standard becomes cheaper than Entry at <strong>150 accounts</strong>. At 200 accounts, you save <strong>$60,000/year</strong>. At 300 accounts, you save <strong>$132,000/year</strong>.</p>
                                </div>

                                <Link href="/get-started" className={`${styles.planButton} ${styles.primaryButton}`}>
                                    Get Started with Standard
                                </Link>
                            </div>

                            {/* Enterprise Plan */}
                            <div className={styles.planDetailCard}>
                                <div className={styles.planHeader}>
                                    <h3>Enterprise</h3>
                                    <p className={styles.planDescription}>For when you outgrow our pricing page and we have to—gasp—actually talk</p>
                                </div>

                                <div className={styles.planPricing}>
                                    <div className={styles.customPricing}>
                                        <div className={styles.customPriceLabel}>Custom Pricing</div>
                                        <p>Negotiated based on volume, requirements, and contract length</p>
                                    </div>
                                </div>

                                <div className={styles.whatsIncluded}>
                                    <h4>Enterprise Infrastructure:</h4>
                                    <ul>
                                        <li>16vCPU+ multi-server setup (custom specs)</li>
                                        <li>Multi-region deployment with failover</li>
                                        <li>Dedicated MetaQuotes infrastructure</li>
                                        <li>On-premise or private cloud options</li>
                                        <li>99.99% uptime SLA with penalties</li>
                                        <li>Sub-5ms execution infrastructure</li>
                                        <li>Dedicated database clusters</li>
                                        <li>Custom load balancing & CDN</li>
                                    </ul>
                                </div>

                                <div className={styles.whatsIncluded}>
                                    <h4>Dedicated Services:</h4>
                                    <ul>
                                        <li>Dedicated account manager (single point of contact)</li>
                                        <li>30-day post-launch support + ongoing dedicated team</li>
                                        <li>Custom feature development with dedicated devs</li>
                                        <li>White-glove migration from any platform</li>
                                        <li>Custom LP integration & negotiation support</li>
                                        <li>Advanced compliance & audit logging</li>
                                        <li>Custom reporting & BI integrations</li>
                                        <li>Volume-based pricing negotiations</li>
                                        <li>Quarterly business reviews</li>
                                        <li>Priority feature roadmap influence</li>
                                    </ul>
                                </div>

                                <div className={styles.enterpriseNote}>
                                    <h4>Typical Enterprise Clients:</h4>
                                    <p>500+ active accounts, multi-entity structures, regulatory requirements beyond standard (FCA, CySEC, ASIC), custom integrations with back-office systems, proprietary trading desks, institutional clients, white-label resellers.</p>
                                </div>

                                <Link href="/get-started" className={styles.planButton}>
                                    Contact for Enterprise Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Setup Fee Transparency */}
                <section className={styles.setupSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>The $1,500 Setup Fee (Yes, We're Telling You Where It Goes)</h2>
                            <p>Spoiler alert: it pays actual human engineers to do actual work. We know—scandalous.</p>
                        </div>

                        <div className={styles.setupBreakdown}>
                            <div className={styles.setupIntro}>
                                <p>Other vendors charge $5,000-$15,000 for "setup" and hope you never ask where it goes. We charge $1,500 because that's what 7 days of senior engineer time at $215/day actually costs. Here's the embarrassingly transparent breakdown:</p>
                            </div>

                            <div className={styles.setupTimeline}>
                                <div className={styles.timelineDay}>
                                    <div className={styles.dayNumber}>Day 1-2</div>
                                    <div className={styles.dayTitle}>Infrastructure Deployment</div>
                                    <ul className={styles.taskList}>
                                        <li>AWS/Azure account setup & security hardening</li>
                                        <li>4vCPU/8GB server provisioning in your chosen region</li>
                                        <li>Database installation & configuration (PostgreSQL/MySQL)</li>
                                        <li>MetaTrader 5 server installation & licensing</li>
                                        <li>Network configuration & firewall rules</li>
                                        <li>SSL certificate generation & installation</li>
                                        <li>DDoS protection setup via Cloudflare</li>
                                    </ul>
                                    <div className={styles.hourEstimate}>~16 hours</div>
                                </div>

                                <div className={styles.timelineDay}>
                                    <div className={styles.dayNumber}>Day 3-4</div>
                                    <div className={styles.dayTitle}>White-Label Branding</div>
                                    <ul className={styles.taskList}>
                                        <li>CRM customization with your logo & colors</li>
                                        <li>Client portal branding (login pages, dashboards)</li>
                                        <li>Email template customization (deposits, withdrawals, statements)</li>
                                        <li>Domain configuration & DNS setup</li>
                                        <li>Custom SMTP configuration with your domain</li>
                                        <li>Trading platform branding (MT5 server labels)</li>
                                    </ul>
                                    <div className={styles.hourEstimate}>~16 hours</div>
                                </div>

                                <div className={styles.timelineDay}>
                                    <div className={styles.dayNumber}>Day 5-6</div>
                                    <div className={styles.dayTitle}>Integration & Testing</div>
                                    <ul className={styles.taskList}>
                                        <li>Liquidity provider connection testing (LMAX, Saxo, etc.)</li>
                                        <li>Payment gateway integration (if applicable)</li>
                                        <li>Market data feed verification</li>
                                        <li>Email delivery testing (SMTP, marketing)</li>
                                        <li>Load testing (simulating 500+ concurrent users)</li>
                                        <li>Failover & backup testing</li>
                                        <li>Security penetration testing</li>
                                        <li>Staff training session (2-hour walkthrough)</li>
                                    </ul>
                                    <div className={styles.hourEstimate}>~16 hours</div>
                                </div>

                                <div className={styles.timelineDay}>
                                    <div className={styles.dayNumber}>Day 7</div>
                                    <div className={styles.dayTitle}>Go-Live & Handoff</div>
                                    <ul className={styles.taskList}>
                                        <li>Final pre-launch checklist verification</li>
                                        <li>Production switchover</li>
                                        <li>Monitoring dashboard setup</li>
                                        <li>Documentation handoff</li>
                                        <li>7-day post-launch support period begins</li>
                                    </ul>
                                    <div className={styles.hourEstimate}>~8 hours</div>
                                </div>
                            </div>

                            <div className={styles.setupFootnote}>
                                <strong>Total engineering time: ~56 hours.</strong> At $215/day (standard senior devops/platform engineer rate), that's $1,505. We charge $1,500. Your setup fee quite literally pays a person to set up your platform. No markup, no hidden profit margin.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hidden Costs Transparency */}
                <section className={styles.hiddenCostsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Fees We Will Never Surprise You With</h2>
                            <p>Because we've been on the receiving end of these "creative billing practices" and we're still in therapy.</p>
                        </div>

                        <div className={styles.neverChargeGrid}>
                            <div className={styles.neverChargeCard}>
                                <div className={styles.neverIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <h4>Migration Fees</h4>
                                <p>When you want to leave, we'll export all your data in standard formats. Free. Always. No "data extraction fee" bullshit.</p>
                            </div>

                            <div className={styles.neverChargeCard}>
                                <div className={styles.neverIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <h4>Support Tickets</h4>
                                <p>24/7 support is included. You don't pay per ticket, per hour, or per "emergency" fix. It's just included.</p>
                            </div>

                            <div className={styles.neverChargeCard}>
                                <div className={styles.neverIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <h4>API Access</h4>
                                <p>Standard plan gets full API access. No "integration tier" upsell. Connect your tools, build what you want.</p>
                            </div>

                            <div className={styles.neverChargeCard}>
                                <div className={styles.neverIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <h4>Platform Updates</h4>
                                <p>Security patches, feature updates, bug fixes—all free. You're not on "v2" while paying for "v1."</p>
                            </div>

                            <div className={styles.neverChargeCard}>
                                <div className={styles.neverIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <h4>Overage Penalties</h4>
                                <p>Hit 151 accounts on Entry plan? We'll suggest Standard. We won't charge you "overage fees" or lock your platform.</p>
                            </div>

                            <div className={styles.neverChargeCard}>
                                <div className={styles.neverIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <h4>Gateway Connection Fees</h4>
                                <p>Connect to any LP you want. LMAX, Saxo, JPM—doesn't matter. Each connection is free. Other providers charge $200-500/month per connection.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ - Honest Edition */}
                <section className={styles.faqSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Questions We Assume You Have (Because We Had Them Too)</h2>
                            <p>Real questions with real answers. No "let me circle back with the team" nonsense.</p>
                        </div>

                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>What counts as an "active" account?</h4>
                                <p>MT5 account that either (a) executed a trade OR (b) made a deposit that calendar month. An account sitting there with $0 and no activity? Doesn't count. You only pay for accounts generating activity.</p>
                                <div className={styles.faqExample}>
                                    <strong>Example:</strong> You have 200 MT5 accounts. Only 147 traded or deposited in March. You pay for 147 accounts that month. In April, 180 are active—you pay for 180. Simple.
                                </div>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>Can I switch from Entry to Standard mid-month?</h4>
                                <p>Yes. If you hit 150 accounts unexpectedly, we upgrade you to Standard on the spot and backdate the savings for that entire billing month. Because we're not monsters trying to extract maximum fees from timing loopholes.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>What if my account count swings wildly month-to-month?</h4>
                                <p>You pay for actual usage each month. 50 accounts in January? Pay for 50. 300 in February (promo campaign)? Pay for 300. Back to 120 in March? Pay for 120. No penalties, no commitments, no "you must stay above X accounts" contracts.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>Is the $1,500 setup fee refundable?</h4>
                                <p>No—our engineers legitimately worked for a week. HOWEVER: if you cancel within 30 days of launch, we refund your first month's subscription fees entirely. So your only loss is the $1,500 engineer time, which is fair.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>Do you require annual contracts?</h4>
                                <p>Nope. Month-to-month for Entry and Standard. Enterprise is typically 12-month contracts because of custom development, but negotiable. You can cancel anytime with 30 days notice (requested, not required).</p>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>What happens when I cancel?</h4>
                                <p>You give us notice (30 days appreciated). We export all your client data, trading history, and configurations in standard formats (SQL dumps, CSV, JSON—your choice). You own your data, always. No "data hostage" situations.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>Can I test this before committing?</h4>
                                <p>We don't do "free trials" because setup genuinely costs engineering time. What we DO: book a 30-min live demo where we show you our actual production system (not a sandbox). You'll see real dashboards, real MT5 integration, real CRM. Then decide.</p>
                            </div>

                            <div className={styles.faqItem}>
                                <h4>What if I need a custom feature?</h4>
                                <p>Standard plan gets request-based custom features (we quote time & cost). Enterprise gets a dedicated dev team. We're reasonable—small tweaks are often included, large features are quoted at $120/hour (our actual contractor rate). No 10x markup.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className={styles.finalCTA}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2>Still Reading? You Must Actually Be Interested.</h2>
                            <p>Book a demo. We'll show you the platform, walk through your specific math, and answer your questions without a single "let me check with my manager" or "this offer expires at midnight." We promise.</p>
                            <div className={styles.ctaButtons}>
                                <Link href="/get-started" className={styles.primaryCTAButton}>
                                    Fine, Show Me The Demo
                                    <span>→</span>
                                </Link>
                                <Link href="#calculator" className={styles.secondaryCTAButton}>
                                    I Need To Play With The Calculator More
                                </Link>
                            </div>
                            <p className={styles.ctaFootnote}>
                                Setup: 7 days | ROI: 6-9 months | Cancel anytime (we'll even help you migrate to the competitor, because we're that confident you won't)
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
