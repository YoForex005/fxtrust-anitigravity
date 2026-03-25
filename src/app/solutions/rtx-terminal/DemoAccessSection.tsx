'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowUpRight,
    Check,
    Copy,
    LockKeyhole,
    Monitor,
    ShieldCheck,
    UserRound,
    Activity,
} from 'lucide-react';
import styles from './rtx-terminal.module.css';

const DEMO_LOGIN_URL = 'https://rtx5.orrnn.com/';

const demoAccount = {
    title: 'RTX5 Terminal Demo',
    description: 'Full trading terminal experience',
    username: 'demo@rtxterminal.com',
    password: 'Demo@RTX2025',
};

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

export default function RtxTerminalDemoAccessSection() {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const resetTimerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current !== null) {
                window.clearTimeout(resetTimerRef.current);
            }
        };
    }, []);

    function handleFieldCopy(fieldKey: string, value: string) {
        copyText(value)
            .then(() => {
                setCopiedField(fieldKey);
                if (resetTimerRef.current !== null) {
                    window.clearTimeout(resetTimerRef.current);
                }
                resetTimerRef.current = window.setTimeout(() => {
                    setCopiedField(null);
                }, 1800);
            })
            .catch(() => setCopiedField(null));
    }

    return (
        <section className={`${styles.section} ${styles.demoAccessSection}`}>
            {/* Headline above the grid — keeps left column shorter */}
            <div className={styles.container}>
                <div className={styles.demoAccessIntro}>
                    <div className={styles.demoAccessBadge}>
                        <Monitor aria-hidden="true" />
                        <span>Live Terminal Demo</span>
                    </div>
                    <h2 className={styles.demoAccessTitle}>
                        Experience the RTX5 Terminal before committing.
                    </h2>
                    <p className={styles.demoAccessDesc}>
                        Explore the full trading terminal with live market data, charting tools,
                        and enterprise-grade execution — exactly like a live account.
                    </p>
                </div>
            </div>

            {/* Two-column grid: credentials left, image right */}
            <div className={`${styles.container} ${styles.demoAccessGrid}`}>
                <div className={styles.demoAccessContent}>
                    <div className={styles.demoAccessCards}>
                        <article className={styles.demoLoginCard}>
                            <div className={styles.demoLoginHeader}>
                                <div className={styles.demoLoginIdentity}>
                                    <div className={styles.demoLoginAvatar}>
                                        <Monitor aria-hidden="true" />
                                    </div>
                                    <div className={styles.demoLoginMeta}>
                                        <h3>{demoAccount.title}</h3>
                                        <p>{demoAccount.description}</p>
                                    </div>
                                </div>

                                <span className={`${styles.demoLoginStatus} ${styles.demoStatusBlue}`}>
                                    <ShieldCheck aria-hidden="true" />
                                    <span>Active</span>
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
                                    <InlineCopyField
                                        label="Email"
                                        value={demoAccount.username}
                                        icon={UserRound}
                                        copiedField={copiedField}
                                        onCopy={handleFieldCopy}
                                    />
                                    <InlineCopyField
                                        label="Password"
                                        value={demoAccount.password}
                                        icon={LockKeyhole}
                                        copiedField={copiedField}
                                        onCopy={handleFieldCopy}
                                    />
                                </div>
                            </div>

                            <div className={styles.demoLoginActions}>
                                <Link
                                    href={DEMO_LOGIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.demoLaunchButton}
                                >
                                    <span>Access RTX5 Demo</span>
                                    <ArrowUpRight aria-hidden="true" />
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className={styles.demoVisualColumn}>
                    <div className={styles.demoVisualPanel}>
                        <div className={styles.demoVisualHeader}>
                            <span>RTX5 Trading Terminal</span>
                            <span className={styles.demoVisualLive}>
                                <Activity aria-hidden="true" /> Live
                            </span>
                        </div>

                        <div className={styles.demoVisualFrame}>
                            <Image
                                src="/New Folder/RTX.jpg"
                                alt="RTX5 Trading Terminal Dashboard"
                                width={800}
                                height={500}
                                className={styles.demoVisualImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
