import InnerPageHeader from '@/components/InnerPageHeader';


import styles from './crypto.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Crypto Payment Gateway for Forex Brokers | Accept USDT Bitcoin | FXTrusts',
    description: 'Accept USDT, Bitcoin, and Ethereum deposits. Auto-convert to fiat for MT5 balance. Zero chargebacks, instant settlements, cold storage security.',
    keywords: [
        'crypto payment gateway',
        'forex broker crypto',
        'accept USDT deposits',
        'bitcoin payment processor',
        'forex payment solution',
        'crypto to fiat conversion',
        'TRC20 payments',
        'ERC20 USDT',
        'cryptocurrency deposits',
        'chargeback-free payments',
        'forex crypto integration',
        'MT5 crypto deposits',
        'stablecoin payments',
        'crypto gateway broker',
        'instant crypto settlements'
    ],
    openGraph: {
        title: 'Crypto Payment Gateway | Accept USDT & Bitcoin | FXTrusts',
        description: 'Accept crypto deposits, auto-convert to fiat. Zero chargebacks, instant settlements, enterprise custody.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/crypto-payments',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crypto Payments for Forex Brokers | FXTrusts',
        description: 'Accept USDT, BTC, ETH. Auto-convert to USD. Zero chargebacks.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/crypto-payments',
    },
};

export default function CryptoPaymentsPage() {
    const faqs = [
        {
            question: 'What are the processing fees?',
            answer: 'We charge a flat 1% processing fee. Network fees (gas) are paid by the sender. No monthly fees, no setup costs, no hidden charges.'
        },
        {
            question: 'Is it truly irreversible?',
            answer: 'Yes. Blockchain transactions are final once confirmed. This is a feature, not a bug—it means you never have to worry about chargeback fraud again.'
        },
        {
            question: 'What about AML/KYC compliance?',
            answer: 'We integrate with Chainalysis for transaction screening. Flagged deposits are held for review. You maintain full compliance with your jurisdiction\'s requirements.'
        },
        {
            question: 'How fast are withdrawals?',
            answer: 'Automated withdrawals process within 5 minutes of approval. Large withdrawals may require additional verification depending on your configured limits.'
        },
        {
            question: 'Do I need my own crypto wallet?',
            answer: 'No. We handle the wallets and custody. You just provide a destination address (your cold wallet or exchange) where you want funds swept.'
        },
        {
            question: 'What if crypto price drops during conversion?',
            answer: 'We use real-time spot rates with no slippage window. The rate is locked the moment the deposit is confirmed—no surprises.'
        }
    ];

    return (
        <>
            <h1 className="sr-only">Crypto Payments Page</h1>
            {/* Original Component */}
            
        <main>
            <FAQSchema faqs={faqs} />

            <InnerPageHeader
                badge="Unstoppable Money"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>}
                title="Crypto Payments.<br/>Accept Bitcoin. Sleep Soundly."
                subtitle="Banks hate forex brokers. They freeze accounts. They ask questions. Crypto doesn't care. Accept USDT, BTC, and ETH instantly. Auto-convert to fiat or keep it in crypto. No chargebacks. No holds. No questions."
            />

            {/* The Banking Problem */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <span>THE "HIGH RISK" NIGHTMARE</span>
                            </div>
                            <h2>To Banks, You're a Criminal Until Proven Otherwise</h2>
                            <p>
                                You're a "high risk merchant." That means 5% processing fees, 10% rolling reserves,
                                and the constant threat of account termination. One compliance complaint and your
                                business is frozen. There's a better way.
                            </p>
                        </div>

                        <div className={styles.painGrid}>
                            <div className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <h3 className={styles.painTitle}>The Account Freeze</h3>
                                <p className={styles.painText}>
                                    You wake up Monday morning. Your bank account is locked. "Compliance review."
                                    No timeline. No explanation. You can't pay staff. You can't process withdrawals.
                                    Trustpilot reviews pile up.
                                </p>
                            </div>
                            <div className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <polyline points="9 14 4 9 9 4" />
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                    </svg>
                                </div>
                                <h3 className={styles.painTitle}>The Chargeback Scam</h3>
                                <p className={styles.painText}>
                                    A client loses $5,000 trading. He calls Visa: "I didn't authorize this." Visa
                                    believes him. You lose the money AND pay a $25 fee. Do this 50 times and you're
                                    on the MATCH list—blacklisted from card processing.
                                </p>
                            </div>
                            <div className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h3 className={styles.painTitle}>The SWIFT Delay</h3>
                                <p className={styles.painText}>
                                    International wire transfers take 3-5 business days. In 2024. Your client in
                                    Dubai wants to trade NOW, not next week. Every day of delay is a client you lose
                                    to a competitor who accepts crypto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.splitFeature}>
                            <div className={styles.featureContent}>
                                <div className={styles.featureBadge}>THE SOLUTION</div>
                                <h2>Irreversible. Instant.<br />Chargeback-Free.</h2>
                                <p>
                                    Crypto transactions cannot be reversed. Once the money hits your wallet, it's yours.
                                    No chargebacks. No "compliance holds." No waiting for correspondent banks. Just pure,
                                    instant liquidity—credited to MT5 in minutes.
                                </p>
                                <ul className={styles.featureList}>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Accept USDT (TRC20/ERC20), BTC, ETH
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Auto-Convert to USD/EUR for MT5 Balance
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        0% Chargeback Risk—Guaranteed
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Instant Automated Withdrawals
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Multi-Sig Cold Storage Security
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.featureImage}>
                                <div className={styles.cryptoMockup}>
                                    <div className={styles.mockupHeader}>Crypto Payment Gateway</div>
                                    <div className={styles.qrSection}>
                                        <div className={styles.qrPlaceholder}>
                                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                                                <rect x="3" y="3" width="7" height="7" />
                                                <rect x="14" y="3" width="7" height="7" />
                                                <rect x="14" y="14" width="7" height="7" />
                                                <rect x="3" y="14" width="7" height="7" />
                                            </svg>
                                        </div>
                                        <div className={styles.depositInfo}>
                                            <span className={styles.depositLabel}>Deposit Amount</span>
                                            <span className={styles.depositValue}>500 USDT (TRC20)</span>
                                        </div>
                                    </div>
                                    <div className={styles.statusBar}>
                                        <span className={styles.statusDot}></span>
                                        <span>Waiting for deposit...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Coins */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span>SUPPORTED CRYPTOCURRENCIES</span>
                            </div>
                            <h2>We Speak Every Chain That Matters</h2>
                            <p>
                                Accept the coins your clients actually use—not obscure altcoins nobody cares about.
                            </p>
                        </div>

                        <div className={styles.coinGrid}>
                            <div className={styles.coinCard}>
                                <div className={styles.coinIcon}>₮</div>
                                <h3>USDT (TRC20)</h3>
                                <p>The king of forex deposits. Fast ($1 fee), stable, and what 80% of your clients will use.</p>
                                <div className={styles.coinTag}>Most Popular</div>
                            </div>
                            <div className={styles.coinCard}>
                                <div className={styles.coinIcon}>₿</div>
                                <h3>Bitcoin</h3>
                                <p>The gold standard. Slower confirmations, but essential for high-value deposits.</p>
                                <div className={styles.coinTagAlt}>High Value</div>
                            </div>
                            <div className={styles.coinCard}>
                                <div className={styles.coinIcon}>Ξ</div>
                                <h3>Ethereum</h3>
                                <p>For the DeFi crowd. Supports USDT (ERC20), USDC, and native ETH deposits.</p>
                                <div className={styles.coinTagAlt}>Multi-Token</div>
                            </div>
                            <div className={styles.coinCard}>
                                <div className={styles.coinIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v12" />
                                        <path d="M6 12h12" />
                                    </svg>
                                </div>
                                <h3>Custom Tokens</h3>
                                <p>Need local stablecoins or specific tokens? We can integrate any EVM-compatible asset.</p>
                                <div className={styles.coinTagAlt}>On Request</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion Flow */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <span>THE CONVERSION FLOW</span>
                            </div>
                            <h2>Client Sends Crypto. MT5 Gets USD.</h2>
                            <p>
                                The entire process is automated—no manual intervention required.
                            </p>
                        </div>

                        <div className={styles.flowSection}>
                            <div className={styles.flowStep}>
                                <div className={styles.flowIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                                        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                                    </svg>
                                </div>
                                <h3>1. Client Sends USDT</h3>
                                <p>Client scans QR code on your deposit page. Sends crypto from any wallet.</p>
                            </div>
                            <div className={styles.flowArrow}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className={styles.flowStep}>
                                <div className={styles.flowIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </div>
                                <h3>2. Instant Conversion</h3>
                                <p>System converts USDT to USD at spot rate. No slippage, no hidden fees.</p>
                            </div>
                            <div className={styles.flowArrow}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className={styles.flowStep}>
                                <div className={styles.flowIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3>3. MT5 Credited</h3>
                                <p>Client sees USD in their trading account. Ready to trade in minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.splitFeature}>
                            <div className={styles.featureContent}>
                                <h2>Fort Knox Security.<br />Without the Paperwork.</h2>
                                <p className={styles.securityIntro}>
                                    We don't keep your funds on a hot wallet where they can be hacked. Every deposit
                                    is swept to cold storage automatically.
                                </p>
                                <div className={styles.securityList}>
                                    <div className={styles.securityItem}>
                                        <span className={styles.securityNum}>1</span>
                                        <div>
                                            <strong>Multi-Sig Wallets</strong>
                                            <p>Requires 3-of-5 keys to authorize any withdrawal. Even if we get hacked, your funds are safe.</p>
                                        </div>
                                    </div>
                                    <div className={styles.securityItem}>
                                        <span className={styles.securityNum}>2</span>
                                        <div>
                                            <strong>Fireblocks Integration</strong>
                                            <p>Enterprise-grade custody solution trusted by Goldman Sachs, BNY Mellon, and major banks.</p>
                                        </div>
                                    </div>
                                    <div className={styles.securityItem}>
                                        <span className={styles.securityNum}>3</span>
                                        <div>
                                            <strong>Auto-Sweep</strong>
                                            <p>Funds are automatically moved from deposit addresses to cold vault every 10 minutes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.vaultMockup}>
                                <div className={styles.vaultCard}>
                                    <div className={styles.vaultIcon}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.vaultStatus}>Vault Status: SECURE</h3>
                                    <p className={styles.vaultAudit}>Last Audit: 12 mins ago</p>
                                    <div className={styles.walletAddress}>
                                        <span>0x7a...4f9c</span>
                                        <span className={styles.safeLabel}>SAFE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                                <span>FREQUENTLY ASKED QUESTIONS</span>
                            </div>
                            <h2>Crypto Payment Questions</h2>
                            <p>
                                What your compliance team is going to ask.
                            </p>
                        </div>

                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Stop Fighting Banks. Start Accepting Crypto.</h2>
                        <p>
                            Your competitors are already accepting USDT. Your clients are already using it.
                            Don't be the broker who makes them wait for SWIFT.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Enable Crypto Payments
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/company/contact" className={styles.secondaryCta}>
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    
        </>
    );
}
