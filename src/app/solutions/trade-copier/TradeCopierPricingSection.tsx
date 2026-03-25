'use client';

import { Check, X, ShieldCheck, Info } from "lucide-react";
import Link from "next/link";
import styles from './trade-copier.module.css';

export default function PricingSection() {
    return (
        <section className={styles.pricingSection} id="pricing">
            <div className={styles.container}>

                <div className={styles.pricingGrid}>
                    {/* Card 1: Just Looking */}
                    <div className={styles.pricingCardBase}>
                        <h3 className={styles.pricingTierTitleGray}>The "Just Looking" Tier</h3>
                        <div className={styles.pricingPriceBlock}>
                            <span className={styles.pricingPriceLarge}>$0</span>
                            <span className={styles.pricingPricePeriod}>/mo</span>
                        </div>
                        <p className={styles.pricingTierDesc}>
                            For people who have commitment issues or are just generally suspicious of everything.
                        </p>
                        
                        <div className={styles.pricingFeatureList}>
                            <div className={styles.pricingFeatureItem}>
                                <Check size={16} color="#d1d5db" style={{ flexShrink: 0 }} /> 
                                <span className={styles.pricingFeatureTextGray}>7 Days Free Trial</span>
                            </div>
                            <div className={styles.pricingFeatureItem}>
                                <Check size={16} color="#d1d5db" style={{ flexShrink: 0 }} /> 
                                <span className={styles.pricingFeatureTextGray}>1 Master Account</span>
                            </div>
                            <div className={styles.pricingFeatureItem}>
                                <X size={16} color="#ef4444" style={{ flexShrink: 0 }} /> 
                                <span className={styles.pricingFeatureTextGray}>No Cloud Hosting (Self-Hosted)</span>
                            </div>
                        </div>

                        {/* <Link href="https://tradecopier.org/contact" className={styles.pricingBtnGray}>
                            Start Free Trial
                        </Link> */}
                    </div>

                    {/* Card 2: Pay As You Go */}
                    <div className={styles.pricingCardHighlight}>
                        <div className={styles.pricingHighlightBanner}>MOST PEOPLE CHOOSING THIS</div>
                        <div className={styles.pricingCardHighlightInner}>
                            <h3 className={styles.pricingTierTitleBlue}>Pay As You Go</h3>
                            <div className={styles.pricingPriceBlock}>
                                <span className={styles.pricingPriceLarge}>$10</span>
                                <span className={styles.pricingPricePeriod}>base + usage</span>
                            </div>
                            <p className={styles.pricingTierDesc}>
                                Fair pricing. If you copy 1,000 trades, you pay for 1,000 trades. If you copy nothing, you save money.
                            </p>

                            <div className={styles.pricingCalculationBox}>
                                <div className={styles.pricingCalcRow}>
                                    <span>Base Platform Fee</span>
                                    <span className={styles.pricingCalcBold}>$10 / mo</span>
                                </div>
                                <div className={styles.pricingCalcRow}>
                                    <span>Per Account Fee</span>
                                    <span className={styles.pricingCalcBold}>$1.50 / mo</span>
                                </div>
                                <div className={`${styles.pricingCalcRow} ${styles.pricingCalcResult}`}>
                                    <span className={styles.pricingCalcBlueText}>Example: 1 Master + 2 Slaves</span>
                                    <span className={styles.pricingCalcBlueText}>$14.50 / mo</span>
                                </div>
                            </div>

                            <div className={styles.pricingFeatureList}>
                                <div className={styles.pricingFeatureItem}>
                                    <Check size={16} color="#2563eb" style={{ flexShrink: 0 }} /> 
                                    <span className={styles.pricingFeatureTextDark}>Everything Unlimited</span>
                                </div>
                                <div className={styles.pricingFeatureItem}>
                                    <Check size={16} color="#2563eb" style={{ flexShrink: 0 }} /> 
                                    <span className={styles.pricingFeatureTextDark}>Cloud Hosting Included</span>
                                </div>
                                <div className={styles.pricingFeatureItem}>
                                    <Check size={16} color="#2563eb" style={{ flexShrink: 0 }} /> 
                                    <span className={styles.pricingFeatureTextDark}>Equity Protection</span>
                                </div>
                            </div>

                            {/* <Link href="https://tradecopier.org/login" className={styles.pricingBtnBlue}>
                                Get Started
                            </Link> */}
                        </div>
                    </div>

                    {/* Card 3: Luxury Add-ons */}
                    <div className={styles.pricingCardBase}>
                        <h3 className={styles.pricingTierTitleDark}>Luxury Add-ons</h3>
                        <div className={styles.pricingPriceBlock}>
                            <span className={styles.pricingPriceLarge}>+$5</span>
                            <span className={styles.pricingPricePeriod}>/mo</span>
                        </div>
                        <p className={styles.pricingTierDesc}>
                            For the divas who need their own dedicated IP addresses because "sharing is for peasants".
                        </p>
                        
                        <div className={styles.pricingFeatureList}>
                            <div className={styles.pricingFeatureItem}>
                                <ShieldCheck size={16} color="#3b82f6" style={{ flexShrink: 0 }} /> 
                                <span className={styles.pricingFeatureTextDark}>Shared UK IP (Clean) - $5</span>
                            </div>
                            <div className={styles.pricingFeatureItem}>
                                <ShieldCheck size={16} color="#a855f7" style={{ flexShrink: 0 }} /> 
                                <span className={styles.pricingFeatureTextDark}>Dedicated HFT Location - $15</span>
                            </div>
                            <p className={styles.pricingSubText}>
                                We deploy near your broker's datacenter (Not just UK/US). Milliseconds matter.
                            </p>
                            <div className={styles.pricingFeatureItem} style={{ marginTop: '0.25rem' }}>
                                <Info size={16} color="#9ca3af" style={{ flexShrink: 0 }} /> 
                                <span className={styles.pricingFeatureTextDark}>VIP Priority Support - $25</span>
                            </div>
                        </div>

                        {/* <Link href="https://tradecopier.org/contact" className={styles.pricingBtnBlack}>
                            View Add-ons
                        </Link> */}
                    </div>

                </div>
            </div>
        </section>
    );
}
