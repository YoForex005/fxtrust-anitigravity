'use client';

import { ClientViewType } from '../types';
import ClientOverview from './client-views/ClientOverview';
import ClientTrading from './client-views/ClientTrading';
import ClientWallet from './client-views/ClientWallet';
import ClientAccounts from './client-views/ClientAccounts';
import styles from '../demo.module.css';

interface ClientViewManagerProps {
    currentView: ClientViewType;
    onViewChange: (view: ClientViewType) => void;
    children?: React.ReactNode;
}

export default function ClientViewManager({ currentView, onViewChange, children }: ClientViewManagerProps) {
    const renderView = () => {
        switch (currentView) {
            case 'client-dashboard':
                return <ClientOverview />;
            case 'client-trading':
                return <ClientTrading />;
            case 'client-wallet':
                return <ClientWallet />;
            case 'client-accounts':
                return <ClientAccounts />;
            case 'client-profile':
                return (
                    <div className={styles.viewPlaceholder}>
                        <h2>Profile Settings</h2>
                        <p>Manage your personal information and security settings.</p>
                    </div>
                );
            default:
                return <ClientOverview />;
        }
    };

    return (
        <div className={styles.viewManager}>
            {children}
            {renderView()}
        </div>
    );
}
