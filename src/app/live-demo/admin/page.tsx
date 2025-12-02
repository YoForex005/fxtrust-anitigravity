'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../demo.module.css';
import { ViewType } from '../types';
import Sidebar from '../components/Sidebar';
import ViewManager from '../components/ViewManager';
import ClientsTable from '../components/ClientsTable';
import LoginHistory from '../components/LoginHistory';
import ActivityFeed from '../components/ActivityFeed';
import WorldMap from '../components/WorldMap';
import SystemHealth from '../components/SystemHealth';
import FinancialOverview from '../components/FinancialOverview';
import TradingAnalytics from '../components/TradingAnalytics';
import RiskPanel from '../components/RiskPanel';

// Import view components
import TicketsView from '../components/views/TicketsView';
import UserClientsView from '../components/views/UserClientsView';
import TransactionDepositsView from '../components/views/TransactionDepositsView';
import { PagesView, BannersView, SEOSettingsView } from '../components/views/ContentManagementViews';
import { AdminsView, KYCView } from '../components/views/UserManagementViews';
import { ActiveBonusesView, BonusHistoryView } from '../components/views/BonusViews';
import { IBTreeView, IBCommissionsView } from '../components/views/IBViews';
import { MT5GroupsView, CreateGroupView, SpreadsView } from '../components/views/GroupViews';
import { WithdrawalsView, InternalTransfersView } from '../components/views/TransactionViews';
import { CampaignsView, AffiliateSystemView } from '../components/views/MarketingViews';
import { NewsView, SendEmailView, SystemAlertsView } from '../components/views/CommunicationViews';
import { CopyTradingView, APIView, RewardsView, RiskView } from '../components/views/OtherViews';

export default function AdminDashboardPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showNotifications, setShowNotifications] = useState(false);
    const [currentView, setCurrentView] = useState<ViewType>('dashboard');

    const handleClose = () => {
        router.push('/#pricing');
    };

    const handleSwitchMode = () => {
        router.push('/live-demo/client');
    };

    return (
        <div className={styles.demoContainer}>
            <button className={styles.closeButton} onClick={handleClose}>×</button>

            {/* Dashboard Layout */}
            <div className={styles.dashboardLayout}>
                <Sidebar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onViewChange={setCurrentView}
                    onSwitchMode={handleSwitchMode}
                />

                <main className={styles.mainContent}>
                    <div className={styles.demoBanner}>
                        <div className={styles.demoBannerContent}>
                            <span className={styles.demoBannerIcon}>✨</span>
                            <span>
                                <span className={styles.demoBannerHighlight}>Demo Environment:</span> This interactive preview showcases approximately 1% of the full platform capabilities. To experience the complete suite of advanced features, risk management tools, and deep customization options, please schedule a personalized 1-on-1 walkthrough.
                            </span>
                        </div>
                        <button className={styles.demoBannerButton} onClick={() => window.open('https://calendly.com/fxtrusts/demo', '_blank')}>
                            <span>📅</span> Book Live Demo
                        </button>
                    </div>

                    <ViewManager currentView={currentView} onViewChange={setCurrentView}>
                        {currentView === 'dashboard' ? (
                            <>
                                <header className={styles.topBar}>
                                    <div className={styles.searchBar}>
                                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" placeholder="Search clients, transactions, or settings... (Ctrl+K)" className={styles.searchInput} />
                                        <span className={styles.shortcutHint}>⌘K</span>
                                    </div>

                                    <div className={styles.topBarActions}>
                                        <button className={styles.actionButton}>
                                            <span className={styles.plusIcon}>+</span> Quick Action
                                        </button>
                                        <div className={styles.divider}></div>

                                        <div className={styles.notificationWrapper}>
                                            <button
                                                className={`${styles.iconButton} ${showNotifications ? styles.active : ''}`}
                                                onClick={() => setShowNotifications(!showNotifications)}
                                                title="Notifications"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                                <span className={styles.notificationBadge}>3</span>
                                            </button>

                                            {showNotifications && (
                                                <div className={styles.notificationPanel}>
                                                    <div className={styles.notificationHeader}>
                                                        <h3>Notifications</h3>
                                                        <button className={styles.markRead}>Mark all read</button>
                                                    </div>
                                                    <div className={styles.notificationList}>
                                                        <div className={`${styles.notificationItem} ${styles.unread}`}>
                                                            <div className={styles.notificationIcon}>⚠️</div>
                                                            <div className={styles.notificationContent}>
                                                                <p>High latency detected on SG-1</p>
                                                                <span>2 mins ago</span>
                                                            </div>
                                                        </div>
                                                        <div className={`${styles.notificationItem} ${styles.unread}`}>
                                                            <div className={styles.notificationIcon}>💰</div>
                                                            <div className={styles.notificationContent}>
                                                                <p>Large withdrawal request ($50k)</p>
                                                                <span>15 mins ago</span>
                                                            </div>
                                                        </div>
                                                        <div className={`${styles.notificationItem} ${styles.unread}`}>
                                                            <div className={styles.notificationIcon}>👤</div>
                                                            <div className={styles.notificationContent}>
                                                                <p>New IB registration: GlobalFX</p>
                                                                <span>1 hour ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.divider}></div>

                                        <div className={styles.userInfo}>
                                            <div className={styles.avatarSmall}>AD</div>
                                            <div className={styles.userDetails}>
                                                <span className={styles.userName}>Admin User</span>
                                                <span className={styles.userRole}>Super Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </header>

                                <div className={styles.dashboardGrid}>
                                    <div className={styles.mainColumn}>
                                        <div className={styles.statsRow}>
                                            <div className={styles.statCard}>
                                                <span className={styles.statLabel}>Total Deposits</span>
                                                <div className={styles.statValueRow}>
                                                    <span className={styles.statValue}>$2.4M</span>
                                                    <span className={styles.statTrendPositive}>+12.5%</span>
                                                </div>
                                            </div>
                                            <div className={styles.statCard}>
                                                <span className={styles.statLabel}>Active Clients</span>
                                                <div className={styles.statValueRow}>
                                                    <span className={styles.statValue}>1,245</span>
                                                    <span className={styles.statTrendPositive}>+8.2%</span>
                                                </div>
                                            </div>
                                            <div className={styles.statCard}>
                                                <span className={styles.statLabel}>Trading Volume</span>
                                                <div className={styles.statValueRow}>
                                                    <span className={styles.statValue}>$850M</span>
                                                    <span className={styles.statTrendNegative}>-2.1%</span>
                                                </div>
                                            </div>
                                            <div className={styles.statCard}>
                                                <span className={styles.statLabel}>Active IBs</span>
                                                <div className={styles.statValueRow}>
                                                    <span className={styles.statValue}>128</span>
                                                    <span className={styles.statTrendPositive}>+4.5%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.visualsRow}>
                                            <div className={styles.card}>
                                                <div className={styles.cardHeader}>
                                                    <h3 className={styles.cardTitle}>User Distribution</h3>
                                                    <button className={styles.iconButtonSmall}>⋮</button>
                                                </div>
                                                <WorldMap />
                                            </div>
                                            <div className={styles.card}>
                                                <div className={styles.cardHeader}>
                                                    <h3 className={styles.cardTitle}>System Health</h3>
                                                    <button className={styles.iconButtonSmall}>⋮</button>
                                                </div>
                                                <SystemHealth />
                                            </div>
                                        </div>

                                        <div className={styles.clientsSection}>
                                            <div className={styles.clientsHeader}>
                                                <h3 className={styles.sectionTitle}>Recent Clients</h3>
                                                <div className={styles.headerActions}>
                                                    <button className={styles.filterButton}>Filter</button>
                                                    <button className={styles.exportButton}>Export</button>
                                                </div>
                                            </div>
                                            <ClientsTable />
                                        </div>
                                    </div>

                                    <div className={styles.rightColumn}>
                                        <FinancialOverview />
                                        <TradingAnalytics />
                                        <RiskPanel />
                                        <ActivityFeed />
                                        <LoginHistory />
                                    </div>
                                </div>
                            </>
                        ) : currentView === 'tickets' ? (
                            <TicketsView />
                        ) : currentView === 'user-clients' ? (
                            <UserClientsView />
                        ) : currentView === 'transaction-deposits' ? (
                            <TransactionDepositsView />
                        ) : currentView === 'content-pages' ? (
                            <PagesView />
                        ) : currentView === 'content-banners' ? (
                            <BannersView />
                        ) : currentView === 'content-seo' ? (
                            <SEOSettingsView />
                        ) : currentView === 'user-admins' ? (
                            <AdminsView />
                        ) : currentView === 'user-kyc' ? (
                            <KYCView />
                        ) : currentView === 'bonus-active' ? (
                            <ActiveBonusesView />
                        ) : currentView === 'bonus-history' ? (
                            <BonusHistoryView />
                        ) : currentView === 'ib-tree' ? (
                            <IBTreeView />
                        ) : currentView === 'ib-commissions' ? (
                            <IBCommissionsView />
                        ) : currentView === 'group-mt5-create' ? (
                            <CreateGroupView />
                        ) : currentView === 'group-mt5-change' ? (
                            <MT5GroupsView />
                        ) : currentView === 'group-spreads-add' || currentView === 'group-spreads-decrease' ? (
                            <SpreadsView />
                        ) : currentView === 'transaction-withdrawals' ? (
                            <WithdrawalsView />
                        ) : currentView === 'transaction-internal' ? (
                            <InternalTransfersView />
                        ) : currentView === 'marketing-email' || currentView === 'marketing-campaigns' ? (
                            <CampaignsView />
                        ) : currentView === 'marketing-affiliate' ? (
                            <AffiliateSystemView />
                        ) : currentView === 'copy-trading' ? (
                            <CopyTradingView />
                        ) : currentView === 'apis' ? (
                            <APIView />
                        ) : currentView === 'send-email' ? (
                            <SendEmailView />
                        ) : currentView === 'news' ? (
                            <NewsView />
                        ) : currentView === 'notification-alerts' || currentView === 'notification-push' ? (
                            <SystemAlertsView />
                        ) : currentView === 'rewards-loyalty' || currentView === 'rewards-points' ? (
                            <RewardsView />
                        ) : currentView === 'risk-exposure' || currentView === 'risk-pnl' ? (
                            <RiskView />
                        ) : (
                            <div className={styles.viewPlaceholder}>
                                <h2>View: {currentView}</h2>
                                <p>This view is under construction.</p>
                            </div>
                        )}
                    </ViewManager>
                </main>
            </div>
        </div>
    );
}
