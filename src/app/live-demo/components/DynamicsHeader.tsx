import React from 'react';
import styles from '../dynamics.module.css';
import {
    Settings,
    Search,
    Plus,
    Filter,
    HelpCircle,
    Bot,
    Bell,
    User,
    ChevronDown,
    Grip
} from 'lucide-react';

export default function DynamicsHeader() {
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
    const [showSearch, setShowSearch] = React.useState(false);
    const [showAssistant, setShowAssistant] = React.useState(false);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
            setShowSearch(false); // Close search if opening a dropdown
        }
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setActiveDropdown(null);
    };

    const toggleAssistant = () => {
        setShowAssistant(!showAssistant);
        setActiveDropdown(null);
        setShowSearch(false);
    };

    // Close dropdowns when clicking outside (simple implementation)
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(`.${styles.headerRight}`) && !target.closest(`.${styles.assistantPanel}`)) {
                setActiveDropdown(null);
                setShowSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className={styles.header} >
            <div className={styles.headerLeft}>
                <div className={styles.waffleMenu}>
                    <Grip className={styles.waffleIcon} size={20} color="white" />
                </div>
                <div className={styles.appName}>
                    <img src="/logo.png" alt="FX Trust Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                    <span className={styles.appBeta}>Beta</span>
                    <ChevronDown size={14} color="white" style={{ marginLeft: '4px', cursor: 'pointer' }} />
                </div>
            </div>
            <div className={styles.headerRight}>
                <div
                    className={styles.headerIcon}
                    title="Settings"
                    onClick={() => toggleDropdown('settings')}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: activeDropdown === 'settings' ? 'var(--dynamics-primary)' : 'transparent',
                        opacity: activeDropdown === 'settings' ? 1 : 0.8
                    }}
                >
                    <Settings size={18} color="white" />
                    {activeDropdown === 'settings' && (
                        <div className={styles.dropdownMenu}>
                            <div className={styles.dropdownItem}>Personalization Settings</div>
                            <div className={styles.dropdownItem}>Advanced Settings</div>
                            <div className={styles.dropdownItem}>Toast Notification Display Time</div>
                            <div className={styles.dropdownItem}>About</div>
                            <div className={styles.dropdownItem}>Privacy & Cookies</div>
                            <div className={styles.dropdownItem}>Software license terms</div>
                        </div>
                    )}
                </div>
                <div
                    className={styles.headerIcon}
                    title="Search"
                    onClick={toggleSearch}
                    style={{
                        backgroundColor: showSearch ? 'var(--dynamics-primary)' : 'transparent',
                        opacity: showSearch ? 1 : 0.8
                    }}
                >
                    <Search size={18} color="white" />
                    {showSearch && (
                        <div className={styles.searchDropdown}>
                            <input type="text" placeholder="Search..." className={styles.searchInput} autoFocus onClick={(e) => e.stopPropagation()} />
                        </div>
                    )}
                </div>
                <div
                    className={styles.headerIcon}
                    title="Drill down"
                    onClick={() => toggleDropdown('drilldown')}
                    style={{
                        backgroundColor: activeDropdown === 'drilldown' ? 'var(--dynamics-primary)' : 'transparent',
                        opacity: activeDropdown === 'drilldown' ? 1 : 0.8
                    }}
                >
                    <div style={{ border: '1.5px solid white', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '2px', height: '8px', background: 'white', transform: 'rotate(45deg)' }}></div>
                    </div>
                    {activeDropdown === 'drilldown' && (
                        <div className={`${styles.dropdownMenu} ${styles.drilldownMenu}`}>
                            <div className={styles.dropdownHeader}>Task Flows</div>
                            <div className={styles.taskFlowCard}>
                                <div className={styles.taskFlowTitle}>Update Contact</div>
                                <div className={styles.taskFlowDesc}>Use this task flow to quickly update contact information, including business and personal</div>
                            </div>
                            <div className={styles.taskFlowCard}>
                                <div className={styles.taskFlowTitle}>Follow up with Opportunity</div>
                                <div className={styles.taskFlowDesc}>Use this task flow for quick communication with your customer. Access key information about your</div>
                            </div>
                            <div className={styles.taskFlowCard}>
                                <div className={styles.taskFlowTitle}>After Meeting</div>
                                <div className={styles.taskFlowDesc}>Use this task flow to update your appointment and related records after your meeting is over.</div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={styles.headerIcon}
                    title="New"
                    onClick={() => toggleDropdown('new')}
                    style={{
                        backgroundColor: activeDropdown === 'new' ? 'var(--dynamics-primary)' : 'transparent',
                        opacity: activeDropdown === 'new' ? 1 : 0.8
                    }}
                >
                    <Plus size={20} color="white" />
                    {activeDropdown === 'new' && (
                        <div className={styles.dropdownMenu}>
                            <div className={styles.dropdownItem} style={{ justifyContent: 'space-between' }}>
                                Activities <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
                            </div>
                            <div className={styles.dropdownItem}><span className={styles.itemIcon}>📄</span> Account</div>
                            <div className={styles.dropdownItem}><span className={styles.itemIcon}>👤</span> Case</div>
                            <div className={styles.dropdownItem}><span className={styles.itemIcon}>🔲</span> ClientZone Account Feature</div>
                            <div className={styles.dropdownItem}><span className={styles.itemIcon}>📄</span> Knowledge Article</div>
                            <div className={styles.dropdownItem}><span className={styles.itemIcon}>➡️</span> TP Account</div>
                        </div>
                    )}
                </div>
                <div className={styles.headerIcon} title="Filter">
                    <Filter size={18} color="white" />
                </div>
                <div className={styles.headerIcon} title="Help">
                    <HelpCircle size={18} color="white" />
                </div>
                <div
                    className={styles.headerIcon}
                    title="Assistant"
                    onClick={toggleAssistant}
                    style={{
                        backgroundColor: showAssistant ? 'var(--dynamics-primary)' : 'transparent',
                        opacity: showAssistant ? 1 : 0.8
                    }}
                >
                    <Bot size={18} color="white" />
                </div>
                <div className={styles.headerIcon} title="Notifications">
                    <Bell size={18} color="white" />
                </div>
                <div
                    className={styles.headerIcon}
                    title="User Profile"
                    onClick={() => toggleDropdown('profile')}
                    style={{
                        backgroundColor: activeDropdown === 'profile' ? 'var(--dynamics-primary)' : 'transparent',
                        opacity: activeDropdown === 'profile' ? 1 : 0.8
                    }}
                >
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>AD</div>
                    {activeDropdown === 'profile' && (
                        <div className={styles.dropdownMenu} style={{ right: 0, width: '240px' }}>
                            <div className={styles.dropdownItem} style={{ background: '#e1dfdd', fontWeight: 600 }}>Leverate Demo Manager</div>
                            <div className={styles.dropdownItem}>LeverateDemoV9</div>
                            <div className={styles.dropdownItem}>Sign out</div>
                        </div>
                    )}
                </div>
            </div>

            {showAssistant && (
                <div className={styles.assistantPanel}>
                    <div className={styles.assistantHeader}>
                        <span>AI Assistant</span>
                        <span style={{ cursor: 'pointer' }} onClick={() => setShowAssistant(false)}>✕</span>
                    </div>
                    <div className={styles.assistantContent}>
                        {/* Empty content as per screenshot */}
                    </div>
                </div>
            )}
        </header>
    );
}
