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
    Zap,
} from 'lucide-react';
import styles from './prop.module.css';

const demoAccounts = [
    {
        id: 'admin',
        title: 'Admin Login',
        description: 'Full back-office & risk controls',
        username: 'admin@yoforex.com',
        password: 'Admin@123',
        href: 'https://user.yopips.com/login',
        cardClassName: styles.demoLoginCardAdmin,
        statusClassName: styles.demoStatusBlue,
        Icon: BriefcaseBusiness,
    },
    {
        id: 'client',
        title: 'User Login',
        description: 'Trader dashboard & payouts',
        username: 'client@yoforex.com',
        password: 'Client@123',
        href: 'https://user.yopips.com/login',
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

export default function DemoAccessSection() {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const resetTimerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
        };
    }, []);

    function handleFieldCopy(fieldKey: string, value: string) {
        copyText(value)
            .then(() => {
                setCopiedField(fieldKey);
                if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
                resetTimerRef.current = window.setTimeout(() => setCopiedField(null), 1800);
            })
            .catch(() => setCopiedField(null));
    }

    return (
        <section className={`${styles.section} ${styles.demoAccessSection}`}>
            <div className={styles.container} style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                <div className={`${styles.demoAccessIntro} ${styles.textCenter}`} style={{ margin: '0 auto', maxWidth: '800px' }}>
                    <div className={styles.demoAccessBadge}>
                        <Zap aria-hidden="true" />
                        <span>Try Live</span>
                    </div>
                    <h2 className={styles.demoAccessTitle}>Secure credentials for both sides of the platform.</h2>
                    <p className={styles.demoAccessDesc} style={{ margin: '0 auto', maxWidth: '650px' }}>
                        Explore the admin back-office and trader dashboard with live demo credentials. See challenge tracking, risk rules, and payout workflows in action.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                    {demoAccounts.map((account, index) => (
                        <div key={account.id} className={`${styles.demoAccessGrid} ${index === 1 ? styles.demoAccessGridReverse : ''}`}>
                            <div className={styles.demoAccessContent}>
                                <div className={styles.demoAccessCards}>
                                <article
                                    className={`${styles.demoLoginCard} ${account.cardClassName}`}
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
                                                label="Email"
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
                                        <Link href={account.href} className={styles.demoLaunchButton} target="_blank">
                                            <span>Launch Demo</span>
                                            <ArrowUpRight aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className={styles.demoVisualColumn}>
                            <div className={styles.demoVisualFrame}>
                                <Image priority={true}
                                    src={account.id === 'admin' ? '/admin2.png' : '/client2.png'}
                                    alt={`${account.title} preview`}
                                    width={1200}
                                    height={750}
                                    className={styles.demoVisualImage}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
