import styles from './InnerPageHeader.module.css';
import { ReactNode } from 'react';

interface InnerPageHeaderProps {
    badge: string;
    badgeIcon?: ReactNode; // Changed from string to ReactNode for SVGs
    title: string;
    subtitle: string;
    children?: ReactNode;
}

export default function InnerPageHeader({ badge, badgeIcon, title, subtitle, children }: InnerPageHeaderProps) {
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
                {children && <div className={styles.actions}>{children}</div>}
            </div>
        </header>
    );
}
