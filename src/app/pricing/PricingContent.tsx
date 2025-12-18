'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './pricing.module.css';

export default function PricingContent() {
    const [accountCount, setAccountCount] = useState(150);

    // Entry Plan pricing tiers (10-149 accounts) - $700 base fee
    // Each tier shows the average effective cost per account for that range (+20%)
    const entryPricingTiers: { [key: string]: number } = {
        '10': 57.85,   // 10-19 accounts (was 48.21)
        '20': 56.32,   // 20-29 accounts (was 46.93)
        '30': 54.82,   // 30-39 accounts (was 45.68)
        '40': 53.38,   // 40-49 accounts (was 44.48)
        '50': 51.98,   // 50-59 accounts (was 43.32)
        '60': 50.64,   // 60-69 accounts (was 42.20)
        '70': 49.33,   // 70-79 accounts (was 41.11)
        '80': 48.08,   // 80-89 accounts (was 40.07)
        '90': 46.88,   // 90-99 accounts (was 39.07)
        '100': 45.72,  // 100-109 accounts (was 38.10)
        '110': 44.62,  // 110-119 accounts (was 37.18)
        '120': 43.55,  // 120-129 accounts (was 36.29)
        '130': 42.54,  // 130-139 accounts (was 35.45)
        '140': 41.57,  // 140-149 accounts (was 34.64)
    };

    // Standard Plan pricing tiers (150-500 accounts) - $1,300 base fee
    // Each tier shows the average effective cost per account for that range (+20%)
    const standardPricingTiers: { [key: string]: number } = {
        '150': 29.76,  // 150-159 accounts (was 24.80)
        '160': 29.23,  // 160-169 accounts (was 24.36)
        '170': 28.70,  // 170-179 accounts (was 23.92)
        '180': 28.16,  // 180-189 accounts (was 23.47)
        '190': 27.64,  // 190-199 accounts (was 23.03)
        '200': 27.11,  // 200-209 accounts (was 22.59)
        '210': 26.57,  // 210-219 accounts (was 22.14)
        '220': 26.04,  // 220-229 accounts (was 21.70)
        '230': 25.51,  // 230-239 accounts (was 21.26)
        '240': 24.97,  // 240-249 accounts (was 20.81)
        '250': 24.44,  // 250-259 accounts (was 20.37)
        '260': 23.92,  // 260-269 accounts (was 19.93)
        '270': 23.39,  // 270-279 accounts (was 19.49)
        '280': 22.85,  // 280-289 accounts (was 19.04)
        '290': 22.32,  // 290-299 accounts (was 18.60)
        '300': 21.79,  // 300-309 accounts (was 18.16)
        '310': 21.26,  // 310-319 accounts (was 17.72)
        '320': 20.72,  // 320-329 accounts (was 17.27)
        '330': 20.20,  // 330-339 accounts (was 16.83)
        '340': 19.67,  // 340-349 accounts (was 16.39)
        '350': 19.13,  // 350-359 accounts (was 15.94)
        '360': 18.60,  // 360-369 accounts (was 15.50)
        '370': 18.07,  // 370-379 accounts (was 15.06)
        '380': 17.54,  // 380-389 accounts (was 14.62)
        '390': 17.00,  // 390-399 accounts (was 14.17)
        '400': 16.48,  // 400-409 accounts (was 13.73)
        '410': 15.95,  // 410-419 accounts (was 13.29)
        '420': 15.41,  // 420-429 accounts (was 12.84)
        '430': 14.88,  // 430-439 accounts (was 12.40)
        '440': 14.35,  // 440-449 accounts (was 11.96)
        '450': 13.82,  // 450-459 accounts (was 11.52)
        '460': 13.28,  // 460-469 accounts (was 11.07)
        '470': 12.76,  // 470-479 accounts (was 10.63)
        '480': 12.23,  // 480-489 accounts (was 10.19)
        '490': 11.69,  // 490-500 accounts (was 9.74)
    };

    // Get the tier key for a given account count
    const getTierKey = (accounts: number): string => {
        const tierStart = Math.floor(accounts / 10) * 10;
        return tierStart.toString();
    };

    // Get Entry plan effective rate per account for the given tier
    const getEntryEffectiveRate = (accounts: number): number => {
        const tierKey = getTierKey(accounts);
        return entryPricingTiers[tierKey] || entryPricingTiers['140']; // fallback to highest tier
    };

    // Get Standard plan effective rate per account for the given tier
    const getStandardEffectiveRate = (accounts: number): number => {
        const tierKey = getTierKey(accounts);
        return standardPricingTiers[tierKey] || standardPricingTiers['490']; // fallback to highest tier
    };

    // Calculate costs dynamically based on the effective rate (which includes base fee)
    const calculateCost = (plan: 'entry' | 'standard' | 'enterprise', accounts: number) => {
        if (plan === 'entry') {
            const baseMonthly = 700;
            const effectiveRate = getEntryEffectiveRate(accounts);
            // The effective rate already includes the base fee distributed across accounts
            // Monthly total = accounts × effective rate
            const monthlyTotal = accounts * effectiveRate;
            // Calculate what the per-account portion would be (excluding base fee)
            const accountsTotal = monthlyTotal - baseMonthly;
            const perAccount = accountsTotal / accounts;
            return {
                base: baseMonthly,
                perAccount: perAccount,
                accountsTotal: accountsTotal,
                monthly: monthlyTotal,
                yearly: monthlyTotal * 12,
                effectiveCostPerAccount: effectiveRate
            };
        } else if (plan === 'standard') {
            const validAccounts = Math.max(accounts, 150);
            const baseMonthly = 1300;
            const effectiveRate = getStandardEffectiveRate(validAccounts);
            // The effective rate already includes the base fee distributed across accounts
            // Monthly total = accounts × effective rate
            const monthlyTotal = validAccounts * effectiveRate;
            // Calculate what the per-account portion would be (excluding base fee)
            const accountsTotal = monthlyTotal - baseMonthly;
            const perAccount = accountsTotal / validAccounts;
            return {
                base: baseMonthly,
                perAccount: perAccount,
                accountsTotal: accountsTotal,
                monthly: monthlyTotal,
                yearly: monthlyTotal * 12,
                effectiveCostPerAccount: effectiveRate
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
                                            <span>Per Account Rate:</span>
                                            <span>${entryCost.effectiveCostPerAccount.toFixed(2)}/account</span>
                                        </div>
                                        <div className={styles.costLineDivider}></div>
                                        <div className={styles.costLine}>
                                            <span className={styles.costLineLabel}>Monthly Total ({accountCount} accounts):</span>
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
                                            <span>Per Account Rate:</span>
                                            <span>${standardCost.effectiveCostPerAccount.toFixed(2)}/account</span>
                                        </div>
                                        <div className={styles.costLineDivider}></div>
                                        <div className={styles.costLine}>
                                            <span className={styles.costLineLabel}>Monthly Total ({Math.max(accountCount, 150)} accounts):</span>
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
