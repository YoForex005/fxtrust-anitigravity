import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                {badge && <span className={styles.badge}>{badge}</span>}
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    );
}
