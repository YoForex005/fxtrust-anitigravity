'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Check,
    Copy,
    LockKeyhole,
    ShieldCheck,
    UserRound,
    WalletCards,
    Activity,
    CandlestickChart,
} from 'lucide-react';
import styles from './prop.module.css';

const demoAccounts = [
    {
        id: 'admin',
        title: 'Admin Demo',
        username: 'admin@yoforex.com',
        password: 'Admin@123',
        href: '/prop-firm/live-demo/admin',
        cardClassName: styles.demoLoginCardAdmin,
        statusClassName: styles.demoStatusBlue,
        Icon: BriefcaseBusiness,
    },
    {
        id: 'client',
        title: 'Client Demo',
        username: 'client@yoforex.com',
        password: 'Client@123',
        href: '/prop-firm/live-demo/client',
        cardClassName: styles.demoLoginCardClient,
        statusClassName: styles.demoStatusGreen,
        Icon: UserRound,
    },
] as const;

type DemoAccount = (typeof demoAccounts)[number];

async function copyText(value: string) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand('copy');
    document.body.removeChild(textarea);

    if (!copied) {
        throw new Error('Clipboard copy failed.');
    }
}

function CredentialRow({
    label,
    value,
    Icon,
}: {
    label: string;
    value: string;
    Icon: DemoAccount['Icon'];
}) {
    return (
        <div className={styles.credentialRow}>
            <div className={styles.credentialIcon}>
                <Icon aria-hidden="true" />
            </div>
            <div className={styles.credentialText}>
                <span className={styles.credentialLabel}>{label}</span>
                <span className={styles.credentialValue}>{value}</span>
            </div>
        </div>
    );
}

export default function DemoAccessSection() {
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const resetTimerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current !== null) {
                window.clearTimeout(resetTimerRef.current);
            }
        };
    }, []);

    async function handleCopy(account: DemoAccount) {
        const payload = `Username: ${account.username}\nPassword: ${account.password}`;

        try {
            await copyText(payload);
            setCopiedId(account.id);

            if (resetTimerRef.current !== null) {
                window.clearTimeout(resetTimerRef.current);
            }

            resetTimerRef.current = window.setTimeout(() => {
                setCopiedId(null);
            }, 1800);
        } catch {
            setCopiedId(null);
        }
    }

    return (
        <section className={`${styles.section} ${styles.demoAccessSection}`}>
            <div className={`${styles.container} ${styles.demoAccessGrid}`}>
                <div className={styles.demoAccessContent}>
                    <div className={styles.demoAccessIntro}>
                        <div className={styles.demoAccessBadge}>
                            <ShieldCheck aria-hidden="true" />
                            <span>Demo Access</span>
                        </div>
                        <h2 className={styles.demoAccessTitle}>Secure credentials for both sides of the platform.</h2>
                    </div>

                    <div className={styles.demoAccessCards}>
                        {demoAccounts.map((account, index) => {
                            const isCopied = copiedId === account.id;

                            return (
                                <article
                                    key={account.id}
                                    className={`${styles.demoLoginCard} ${account.cardClassName}`}
                                    style={{ animationDelay: `${index * 140}ms` }}
                                >
                                    <div className={styles.demoLoginHeader}>
                                        <div className={styles.demoLoginIdentity}>
                                            <div className={styles.demoLoginAvatar}>
                                                <account.Icon aria-hidden="true" />
                                            </div>
                                            <div className={styles.demoLoginMeta}>
                                                <h3>{account.title}</h3>
                                                <p>Protected live sandbox</p>
                                            </div>
                                        </div>
                                        <span className={`${styles.demoLoginStatus} ${account.statusClassName}`}>
                                            <ShieldCheck aria-hidden="true" />
                                            <span>Verified</span>
                                        </span>
                                    </div>

                                    <div className={styles.demoLoginPanel}>
                                        <div className={styles.demoLoginPanelHeader}>
                                            <span className={styles.demoLoginPanelTitle}>
                                                <LockKeyhole aria-hidden="true" />
                                                <span>Secure Login</span>
                                            </span>
                                            <span className={styles.demoLoginDot} aria-hidden="true" />
                                        </div>

                                        <div className={styles.demoCredentialList}>
                                            <CredentialRow label="Username" value={account.username} Icon={UserRound} />
                                            <CredentialRow label="Password" value={account.password} Icon={LockKeyhole} />
                                        </div>
                                    </div>

                                    <div className={styles.demoLoginActions}>
                                        <button
                                            type="button"
                                            className={styles.copyButton}
                                            onClick={() => handleCopy(account)}
                                            aria-label={`Copy ${account.title} credentials`}
                                        >
                                            {isCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                                            <span>{isCopied ? 'Copied' : 'Copy Access'}</span>
                                        </button>

                                        <Link href={account.href} className={styles.demoLaunchButton}>
                                            <span>Open Demo</span>
                                            <ArrowUpRight aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.demoVisualColumn}>
                    <div className={styles.demoVisualHalo} aria-hidden="true" />

                    <div className={styles.demoVisualPanel}>
                        <div className={styles.demoVisualHeader}>
                            <div className={styles.demoVisualHeaderBrand}>
                                <span className={styles.demoVisualSignal} aria-hidden="true" />
                                <span>FXTrusts Demo</span>
                            </div>

                            <div className={styles.demoVisualHeaderBadge}>
                                <ShieldCheck aria-hidden="true" />
                                <span>Trusted Session</span>
                            </div>
                        </div>

                        <div className={styles.demoVisualFrame}>
                            <div className={styles.demoVisualMainScreen}>
                                <Image
                                    src="/client2.png"
                                    alt="Client trading dashboard preview"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    className={styles.demoVisualImage}
                                />
                            </div>

                            <div className={styles.demoVisualOverlayCard}>
                                <div className={styles.demoVisualOverlayIcon}>
                                    <Activity aria-hidden="true" />
                                </div>
                                <div>
                                    <span className={styles.demoVisualOverlayLabel}>Live monitoring</span>
                                    <strong className={styles.demoVisualOverlayValue}>Risk rules active</strong>
                                </div>
                            </div>

                            <div className={styles.demoVisualInset}>
                                <div className={styles.demoVisualInsetHeader}>
                                    <span className={styles.demoVisualInsetTitle}>Admin View</span>
                                    <span className={styles.demoVisualInsetPill}>Realtime</span>
                                </div>
                                <div className={styles.demoVisualInsetFrame}>
                                    {/* <Image
                                        src="/admin2.png"
                                        alt="Admin dashboard preview"
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 20vw"
                                        className={styles.demoVisualImage}
                                    /> */}
                                </div>
                            </div>
                        </div>

                        <div className={styles.demoVisualInsights}>
                            <div className={styles.demoInsightCard}>
                                <CandlestickChart aria-hidden="true" />
                                <span>Trading analytics</span>
                            </div>
                            <div className={styles.demoInsightCard}>
                                <WalletCards aria-hidden="true" />
                                <span>Payout workflows</span>
                            </div>
                            <div className={styles.demoInsightCard}>
                                <LockKeyhole aria-hidden="true" />
                                <span>Secure access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
