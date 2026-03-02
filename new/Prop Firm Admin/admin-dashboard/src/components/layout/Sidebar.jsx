import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Wallet,
    Trophy,
    Settings,
    LogOut,
    ChevronRight,
    ChevronDown,
    FileStack,
    Plane,
    Briefcase,
    Target,
    Monitor,
    ListOrdered,
    BarChart3,
    Award,
    FileBadge,
    CreditCard,
    Banknote,
    AlignJustify,
    Mail,
    AtSign,
    Box,
    BadgeDollarSign,
    Type,
    LayoutTemplate,
    Menu,
    Bell,
    CalendarCheck,
    List,
    ListChecks,
    FileText,
    GraduationCap,
    Bitcoin,
    Coins,
    Server,
    CircleDollarSign,
    Sun,
    Moon
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const [expandedMenu, setExpandedMenu] = useState({});
    const { theme, toggleTheme } = useTheme();

    const toggleSubmenu = (label) => {
        if (!isOpen) {
            // If sidebar is collapsed and user clicks a submenu item, you might want to auto-expand sidebar or handle differently.
            // For now, we'll assume the parent component handles sidebar expansion if needed, or we just toggle internal state.
        }
        setExpandedMenu(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const navItems = [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { label: 'Challenges', icon: FileStack, path: '/challenges' },
        { label: 'Users', icon: Users, path: '/users' },
        { label: 'Plans', icon: Plane, path: '/plans' },
        { label: 'Accounts', icon: Briefcase, path: '/accounts' },
        { label: 'Trading Objectives', icon: Target, path: '/trading-objectives' },
        { label: 'Helpdesk', icon: Monitor, path: '/helpdesk' },
        { label: 'Contest Programs', icon: Trophy, path: '/contests' },
        {
            label: 'Withdrawals',
            icon: Wallet,
            path: '/withdrawals',
            hasSubmenu: true,
            subItems: [
                { label: 'Overview', icon: AlignJustify, path: '/withdrawals/overview' },
                { label: 'Requests', icon: Banknote, path: '/withdrawals/requests' },
            ]
        },
        {
            label: 'Setup',
            icon: Settings,
            path: '/setup',
            hasSubmenu: true,
            subItems: [
                { label: 'Email Settings', icon: Mail, path: '/setup/email-settings' },
                { label: 'Email Templates', icon: AtSign, path: '/setup/email-templates' },
                { label: 'Email Departments', icon: Box, path: '/setup/email-departments' },
                { label: 'Account Sizes', icon: BadgeDollarSign, path: '/setup/account-sizes' },
                { label: 'Broker Symbols', icon: Type, path: '/setup/broker-symbols' },
                { label: 'User Dashboard Templates', icon: LayoutTemplate, path: '/setup/user-templates' },
                { label: 'Custom Menu', icon: Menu, path: '/setup/custom-menu' },
                { label: 'Personal Notifications', icon: Bell, path: '/setup/personal-notifications' },
                { label: 'System Notifications', icon: CalendarCheck, path: '/setup/system-notifications' },
            ]
        },
        {
            label: 'Leaderboard Setups',
            icon: ListOrdered,
            path: '/leaderboard-setups',
            hasSubmenu: true,
            subItems: [
                { label: 'Leaderboard For Accounts', icon: List, path: '/leaderboard-setups/accounts' },
                { label: 'Leaderboard For Contests', icon: ListChecks, path: '/leaderboard-setups/contests' },
            ]
        },
        { label: 'Visitor Statistics', icon: BarChart3, path: '/visitor-statistics' },
        { label: 'Issued Certificates', icon: Award, path: '/issued-certificates' },
        {
            label: 'Certificate Templates',
            icon: FileBadge,
            path: '/certificate-templates',
            hasSubmenu: true,
            subItems: [
                { label: 'General', icon: FileText, path: '/certificate-templates/general' },
                { label: 'Challenge Completion', icon: GraduationCap, path: '/certificate-templates/challenge-completion' },
            ]
        },
        {
            label: 'Payment Gateways',
            icon: CreditCard,
            path: '/payment-gateways',
            hasSubmenu: true,
            subItems: [
                { label: 'BtcPay', icon: Bitcoin, path: '/payment-gateways/btcpay' },
                { label: 'CoinPayments', icon: Coins, path: '/payment-gateways/coinpayments' },
                { label: 'Sqala', icon: CreditCard, path: '/payment-gateways/sqala' },
                { label: 'LetKnowPay', icon: Banknote, path: '/payment-gateways/letknowpay' },
                { label: 'CoinGate', icon: Server, path: '/payment-gateways/coingate' },
                { label: 'Fake', icon: CircleDollarSign, path: '/payment-gateways/fake' },
            ]
        },
        { label: 'Payment Transactions', icon: Banknote, path: '/payment-transactions' },
    ];

    return (
        <aside
            className={cn(
                "fixed md:static inset-y-0 left-0 z-50 bg-surface border-r border-border transition-all duration-300 ease-in-out flex flex-col h-screen",
                isOpen ? "w-64" : "w-16 md:w-20 -translate-x-full md:translate-x-0"
            )}
        >
            {/* Logo */}
            <div className="h-16 flex items-center justify-center border-b border-border flex-shrink-0 bg-surface z-10">
                {isOpen ? (
                    <h1 className="text-xl font-bold text-primary tracking-wider">PROP ADMIN</h1>
                ) : (
                    <h1 className="text-xl font-bold text-primary">P</h1>
                )}
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 space-y-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {navItems.map((item) => {
                    const isExpanded = expandedMenu[item.label];
                    const isActiveParent = item.subItems?.some(sub => location.pathname === sub.path) || location.pathname === item.path;

                    return (
                        <div key={item.label}>
                            <div
                                onClick={(e) => {
                                    if (item.hasSubmenu) {
                                        e.preventDefault();
                                        toggleSubmenu(item.label);
                                    }
                                }}
                            >
                                <NavLink
                                    to={item.path} // Note: For parent items with submenus, this might just be a trigger, or a valid path. 
                                    // Given the request, these seem to be categories. We'll treat click as toggle if it has submenu.
                                    className={({ isActive }) => cn(
                                        "flex items-center px-4 py-3 mx-2 rounded-lg transition-colors group relative cursor-pointer",
                                        (isActive || isActiveParent) && !item.hasSubmenu
                                            ? "bg-primary/10 text-primary"
                                            : "text-text-muted hover:bg-surface hover:text-text-main",
                                        (isActiveParent && item.hasSubmenu) ? "text-text-main" : ""
                                    )}
                                >
                                    <item.icon className={cn("w-5 h-5 flex-shrink-0", (isActiveParent && item.hasSubmenu) ? "text-primary" : "")} />
                                    <span className={cn(
                                        "ml-3 transition-opacity duration-200 whitespace-nowrap flex-1",
                                        isOpen ? "opacity-100" : "hidden md:hidden lg:hidden"
                                    )}>
                                        {item.label}
                                    </span>

                                    {/* Submenu Arrow */}
                                    {item.hasSubmenu && isOpen && (
                                        isExpanded ?
                                            <ChevronDown className="w-4 h-4 text-text-muted opacity-80" /> :
                                            <ChevronRight className="w-4 h-4 text-text-muted opacity-50 group-hover:opacity-100" />
                                    )}

                                    {/* Tooltip for collapsed state (desktop) */}
                                    {!isOpen && (
                                        <div className="hidden md:block absolute left-full top-0 ml-2 px-2 py-1 bg-surface border border-border rounded text-xs text-text-main opacity-0 group-hover:opacity-100 pointer-events-none z-50 whitespace-nowrap">
                                            {item.label}
                                        </div>
                                    )}
                                </NavLink>
                            </div>

                            {/* Submenu Items */}
                            {item.hasSubmenu && isOpen && isExpanded && (
                                <div className="ml-6 pl-3 border-l border-border space-y-1 mt-1 mb-2 animate-in slide-in-from-top-2 duration-200">
                                    {item.subItems.map((subItem) => (
                                        <NavLink
                                            key={subItem.path}
                                            to={subItem.path}
                                            className={({ isActive }) => cn(
                                                "flex items-center px-4 py-2 rounded-lg transition-colors text-sm",
                                                isActive
                                                    ? "text-primary bg-primary/5 font-medium"
                                                    : "text-text-muted hover:text-text-main hover:bg-surface/50"
                                            )}
                                        >
                                            <subItem.icon className="w-4 h-4 mr-3 opacity-70" />
                                            <span className="truncate">{subItem.label}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Theme Toggle & Logout */}
            <div className="p-4 border-t border-border flex-shrink-0 bg-surface flex flex-col gap-2">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className={cn(
                        "flex items-center w-full px-4 py-3 rounded-lg text-text-muted hover:bg-surface-lighter hover:text-text-main transition-colors",
                        !isOpen && "justify-center px-0"
                    )}
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    {isOpen && <span className="ml-3 font-medium">
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>}
                </button>

                {/* Logout */}
                <button className={cn(
                    "flex items-center w-full px-4 py-3 rounded-lg text-danger hover:bg-danger/10 transition-colors",
                    !isOpen && "justify-center px-0"
                )}>
                    <LogOut className="w-5 h-5" />
                    {isOpen && <span className="ml-3 font-medium">Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
