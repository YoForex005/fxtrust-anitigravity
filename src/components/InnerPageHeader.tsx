import styles from './InnerPageHeader.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';

interface InnerPageHeaderProps {
    badge: string;
    badgeIcon?: ReactNode;
    title: string;
    subtitle: string;
    children?: ReactNode;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export default function InnerPageHeader({
    badge,
    badgeIcon,
    title,
    subtitle,
    children,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref
}: InnerPageHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.glow}></div>
            <div className={styles.container}>
                <div className={styles.badge}>
                    {badgeIcon && <span className={styles.badgeIcon}>{badgeIcon}</span>}
                    <span className={styles.badgeText}>{badge}</span>
                </div>
                <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h1>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>

                {(children || primaryButtonText || secondaryButtonText) && (
                    <div className={styles.actions}>
                        {primaryButtonText && primaryButtonHref && (
                            <Link href={primaryButtonHref} className={styles.primaryBtn}>
                                {primaryButtonText}
                            </Link>
                        )}
                        {secondaryButtonText && secondaryButtonHref && (
                            <Link href={secondaryButtonHref} className={styles.secondaryBtn}>
                                {secondaryButtonText}
                            </Link>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </header>
    );
}
