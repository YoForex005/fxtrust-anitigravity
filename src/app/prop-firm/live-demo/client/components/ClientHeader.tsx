import React from 'react';
import Image from 'next/image';
import styles from './ClientHeader.module.css';

interface ClientHeaderProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  balance: number;
  equity: number;
  totalProfit: number;
}

export default function ClientHeader({
  sidebarCollapsed,
  setSidebarCollapsed,
  balance,
  equity,
  totalProfit
}: ClientHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.menuBtn} onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className={styles.headerLogo}>
          <Image src="/logo.png" alt="FxTrusts Logo" width={100} height={30} className={styles.headerLogoImg} />
        </div>
      </div>

      <div className={styles.headerCenter}>
        <div className={styles.accountStats}>
          <div className={styles.statBox}>
            <span className={styles.statBoxLabel}>Balance</span>
            <span className={styles.statBoxValue}>${balance.toFixed(2)}</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statBoxLabel}>Equity</span>
            <span className={styles.statBoxValue}>${equity.toFixed(2)}</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statBoxLabel}>Open P/L</span>
            <span className={`${styles.statBoxValue} ${totalProfit >= 0 ? styles.profitPositive : styles.profitNegative}`}>
              {totalProfit >= 0 ? '+' : ''}${totalProfit.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.headerRight}>
        <span className={styles.paperBadge}>📊 Paper Trading</span>
        <button className={styles.headerBtn}>
          <span className={styles.flag}>🇺🇸</span>
          EN
        </button>
        <button className={styles.headerBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
