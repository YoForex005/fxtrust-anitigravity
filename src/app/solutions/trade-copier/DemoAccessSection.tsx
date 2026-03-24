'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowUpRight,
    Check,
    Copy,
    LockKeyhole,
    ShieldCheck,
    UserRound,
    Settings,
    Zap,
    BarChart3,
    RefreshCcw,
} from 'lucide-react';
import styles from './trade-copier.module.css';

const DEMO_LOGIN_URL = 'https://tradecopier.org/';

const demoAccounts = [
    // {
    //     id: 'admin',
    //     title: 'Admin Panel',
    //     description: 'Manage masters, subs & rules',
    //     username: 'admin@tradecopier.com',
    //     password: 'Admin@123',
    //     cardClassName: styles.demoLoginCardAdmin,
    //     statusClassName: styles.demoStatusBlue,
    //     Icon: Settings,
    // },
    {
        id: 'user',
        title: 'User Dashboard',
        description: 'Monitor live copy status',
        username: 'user@tradecopier.com',
        password: 'User@123',
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
    if (!copied) throw new Error('Clipboard copy failed.');
}

function InlineCopyField({
    label,
    value,
    icon: FieldIcon,
    copiedField,
    onCopy,
}: {
    label: string;
    value: string;
    icon: typeof UserRound;
    copiedField: string | null;
    onCopy: (field: string, value: string) => void;
}) {
    const isCopied = copiedField === `${label}-${value}`;

    return (
        <div className={styles.credentialRow}>
            <div className={styles.credentialIcon}>
                <FieldIcon aria-hidden="true" />
            </div>
            <div className={styles.credentialText}>
                <span className={styles.credentialLabel}>{label}</span>
                <span className={styles.credentialValue}>{value}</span>
            </div>
            <button
                type="button"
                className={styles.inlineCopyBtn}
                onClick={() => onCopy(`${label}-${value}`, value)}
                aria-label={`Copy ${label}`}
                title={isCopied ? 'Copied!' : `Copy ${label}`}
            >
                {isCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                <span className={styles.inlineCopyLabel}>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button>
        </div>
    );
}

export default function TradeCopierDemoAccessSection() {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const resetTimerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
        };
    }, []);

    function handleFieldCopy(fieldKey: string, value: string) {
        copyText(value).then(() => {
            setCopiedField(fieldKey);
            if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
            resetTimerRef.current = window.setTimeout(() => setCopiedField(null), 1800);
        }).catch(() => setCopiedField(null));
    }

    return (
        <section className={`${styles.section} ${styles.demoAccessSection}`}>
            <div className={`${styles.container} ${styles.demoAccessGrid}`}>
                <div className={styles.demoAccessContent}>
                    <div className={styles.demoAccessIntro}>
                        <div className={styles.demoAccessBadge}>
                            <Zap aria-hidden="true" />
                            <span>Try Live</span>
                        </div>
                        <h2 className={styles.demoAccessTitle}>Test drive the copier before you commit.</h2>
                        <p className={styles.demoAccessDesc}>
                            Explore the  user dashboard with credentials. See real-time replication, symbol mapping, and risk controls in action.
                        </p>
                    </div>

                    <div className={styles.demoAccessCards}>
                        {demoAccounts.map((account, index) => (
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
                                            <p>{account.description}</p>
                                        </div>
                                    </div>
                                    <span className={`${styles.demoLoginStatus} ${account.statusClassName}`}>
                                        <ShieldCheck aria-hidden="true" />
                                        <span>Live</span>
                                    </span>
                                </div>

                                <div className={styles.demoLoginPanel}>
                                    <div className={styles.demoLoginPanelHeader}>
                                        <span className={styles.demoLoginPanelTitle}>
                                            <LockKeyhole aria-hidden="true" />
                                            <span>Credentials</span>
                                        </span>
                                        <span className={styles.demoLoginDot} aria-hidden="true" />
                                    </div>

                                    <div className={styles.demoCredentialList}>
                                        <InlineCopyField
                                            label="Username"
                                            value={account.username}
                                            icon={UserRound}
                                            copiedField={copiedField}
                                            onCopy={handleFieldCopy}
                                        />
                                        <InlineCopyField
                                            label="Password"
                                            value={account.password}
                                            icon={LockKeyhole}
                                            copiedField={copiedField}
                                            onCopy={handleFieldCopy}
                                        />
                                    </div>
                                </div>

                                <div className={styles.demoLoginActions}>
                                    <Link href={DEMO_LOGIN_URL} className={styles.demoLaunchButton} target="_blank" rel="noopener noreferrer">
                                        <span>Launch Demo</span>
                                        <ArrowUpRight aria-hidden="true" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.demoVisualColumn}>
                    <div className={styles.demoVisualHalo} aria-hidden="true" />

                    <div className={styles.demoVisualPanel}>
                        <div className={styles.demoVisualHeader}>
                            <div className={styles.demoVisualHeaderBrand}>
                                <span className={styles.demoVisualSignal} aria-hidden="true" />
                                <span>Trade Copier</span>
                            </div>
                            {/* <div className={styles.demoVisualHeaderBadge}>
                                <ShieldCheck aria-hidden="true" />
                                <span>Sandbox Mode</span>
                            </div> */}
                        </div>

                        <div className={styles.demoVisualFrame}>
                            <div className={styles.demoVisualMainScreen}>
                                <Image
                                    src="/client2.png"
                                    alt="Trade Copier dashboard preview"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    className={styles.demoVisualImage}
                                />
                            </div>

                            <div className={styles.demoVisualOverlayCard}>
                                <div className={styles.demoVisualOverlayIcon}>
                                    <RefreshCcw aria-hidden="true" />
                                </div>
                                <div>
                                    <span className={styles.demoVisualOverlayLabel}>Replication</span>
                                    <strong className={styles.demoVisualOverlayValue}>Syncing 47 subs</strong>
                                </div>
                            </div>

                            <div className={styles.demoVisualInset}>
                                <div className={styles.demoVisualInsetHeader}>
                                    <span className={styles.demoVisualInsetTitle}>Master Feed</span>
                                    <span className={styles.demoVisualInsetPill}>Live</span>
                                </div>
                                <div className={styles.demoVisualInsetFrame}>
                                    <Image
                                        src="/admin2.png"
                                        alt="Master account feed preview"
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 20vw"
                                        className={styles.demoVisualImage}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.demoVisualInsights}>
                            <div className={styles.demoInsightCard}>
                                <BarChart3 aria-hidden="true" />
                                <span>Slippage analytics</span>
                            </div>
                            <div className={styles.demoInsightCard}>
                                <RefreshCcw aria-hidden="true" />
                                <span>Copy engine</span>
                            </div>
                            <div className={styles.demoInsightCard}>
                                <LockKeyhole aria-hidden="true" />
                                <span>AES-256 encrypted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
