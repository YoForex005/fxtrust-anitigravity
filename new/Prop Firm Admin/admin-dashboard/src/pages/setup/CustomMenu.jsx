import React, { useState } from 'react';
import {
    HelpCircle,
    LayoutDashboard,
    FileStack,
    Users,
    Plane,
    Briefcase,
    Target,
    Monitor,
    Trophy,
    Wallet,
    Settings,
    ListOrdered,
    BarChart2,
    Ribbon,
    CreditCard,
    History,
    Mail,
    Edit,
    Trash2,
    Eye,
    EyeOff,
    ChevronRight,
    ChevronDown,
    PlusSquare,
    MinusSquare,
    RefreshCw,
    Info,
    X,
    User,
    Award,
    BookOpen,
    LifeBuoy,
    IdCard,
    SquareTerminal
} from 'lucide-react';
import { cn } from '../../lib/utils';

const CustomMenu = () => {
    const [activeTab, setActiveTab] = useState('manager');
    const [expandedItems, setExpandedItems] = useState({
        'withdrawals': true,
        'setup': true,
        'leaderboard': true,
        'certificates': true,
        'payment': true,
        'affiliate': true,
        'emails': true,
    });

    const [managerMenuItems, setManagerMenuItems] = useState([
        { id: 1, label: 'Dashboard', icon: LayoutDashboard, visible: true },
        { id: 2, label: 'Challenges', icon: FileStack, visible: true },
        { id: 3, label: 'Users', icon: Users, visible: true },
        { id: 4, label: 'Plans', icon: Plane, visible: true },
        { id: 5, label: 'Accounts', icon: Briefcase, visible: true },
        { id: 6, label: 'Trading Objectives', icon: Target, visible: true },
        { id: 7, label: 'Authentication Log', icon: History, visible: true },
        { id: 8, label: 'Helpdesk', icon: Monitor, visible: true },
        { id: 9, label: 'Contest Programs', icon: Trophy, visible: true },
        {
            id: 10,
            label: 'Withdrawals',
            icon: Wallet,
            key: 'withdrawals',
            visible: true,
            children: [
                { id: 101, label: 'Overview', icon: ListOrdered, visible: true },
                { id: 102, label: 'Requests', icon: CreditCard, visible: true },
            ]
        },
        {
            id: 11,
            label: 'Setup',
            icon: Settings,
            key: 'setup',
            visible: true,
            children: [
                { id: 111, label: 'Email Settings', icon: Settings, visible: true },
                { id: 112, label: 'Email Templates', icon: Settings, visible: true },
                { id: 113, label: 'Email Departments', icon: Settings, visible: true },
                { id: 114, label: 'Translator', icon: Settings, visible: true },
                { id: 115, label: 'Tags', icon: Settings, visible: true },
                { id: 116, label: 'Videos', icon: Settings, visible: true },
                { id: 117, label: 'Access Tokens', icon: Settings, visible: true },
                { id: 118, label: 'Help System', icon: Settings, visible: true },
                { id: 119, label: 'Account Sizes', icon: Settings, visible: true },
                { id: 120, label: 'Broker Symbols', icon: Settings, visible: true },
                { id: 121, label: 'Signatures', icon: Settings, visible: true },
                { id: 122, label: 'User Dashboard Templates', icon: Settings, visible: true },
                { id: 123, label: 'SVG Icons', icon: Settings, visible: true },
                { id: 124, label: 'Custom Menu', icon: Settings, visible: true },
                { id: 125, label: 'Personal Notifications', icon: Settings, visible: true },
                { id: 126, label: 'System Notifications', icon: Settings, visible: true },
            ]
        },
        {
            id: 12,
            label: 'Leaderboard Setups',
            icon: Trophy,
            key: 'leaderboard',
            visible: true,
            children: [
                { id: 121, label: 'Leaderboard for Plans', icon: ListOrdered, visible: true },
                { id: 122, label: 'Leaderboard for Accounts', icon: ListOrdered, visible: true },
                { id: 123, label: 'Leaderboard for Contests', icon: ListOrdered, visible: true },
            ]
        },
        { id: 13, label: 'Visitor Statistics', icon: BarChart2, visible: true },
        { id: 14, label: 'Trading Instruments', icon: FileStack, visible: true },
        { id: 15, label: 'Issued Certificates', icon: Ribbon, visible: true },
        {
            id: 16,
            label: 'Certificate Templates',
            icon: CreditCard,
            key: 'certificates',
            visible: true,
            children: [
                { id: 161, label: 'General', icon: CreditCard, visible: true },
                { id: 162, label: 'Challenge Completion', icon: CreditCard, visible: true },
            ]
        },
    ]);

    const [userMenuItems, setUserMenuItems] = useState([
        { id: 1, label: 'Dashboard', icon: LayoutDashboard, visible: true },
        { id: 2, label: 'Challenges', icon: FileStack, visible: false },
        { id: 3, label: 'Accounts', icon: User, visible: false },
        { id: 4, label: 'Performances', icon: IdCard, visible: false },
        { id: 5, label: 'Trading Instruments', icon: SquareTerminal, visible: true },
        { id: 6, label: 'Support', icon: LifeBuoy, visible: false },
        { id: 7, label: 'Help/FAQ', icon: BookOpen, visible: true },
        { id: 8, label: 'Withdrawals', icon: Wallet, visible: false },
        { id: 9, label: 'Certificates', icon: Award, visible: false },
        { id: 10, label: 'Payments', icon: CreditCard, visible: false },
    ]);

    const currentItems = activeTab === 'manager' ? managerMenuItems : userMenuItems;
    const setCurrentItems = activeTab === 'manager' ? setManagerMenuItems : setUserMenuItems;

    const toggleExpand = (key) => {
        setExpandedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const expandAll = () => {
        const allKeys = currentItems.filter(i => i.children).reduce((acc, curr) => ({ ...acc, [curr.key]: true }), {});
        setExpandedItems(allKeys);
    };

    const collapseAll = () => {
        setExpandedItems({});
    };

    const handleRefresh = () => {
        // Reset local modifications or simulate a refresh
        if (window.confirm('Reload menu configuration? Any unsaved changes will be lost.')) {
            window.location.reload();
        }
    };

    const toggleVisibility = (id) => {
        setCurrentItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, visible: !item.visible };
            }
            if (item.children) {
                const updatedChildren = item.children.map(child =>
                    child.id === id ? { ...child, visible: !child.visible } : child
                );
                return { ...item, children: updatedChildren };
            }
            return item;
        }));
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold text-text-main">Menu</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Customize Menu</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Info Banner */}
            <div className="bg-secondary/20 border border-secondary/30 rounded flex items-center justify-between p-3 text-secondary text-sm">
                <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 fill-current" />
                    <span className="font-medium">Press F5 to refresh sidebar menu</span>
                </div>
                <button className="hover:text-text-main transition-colors"><X className="w-4 h-4" /></button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Main Content Area - Left Column */}
                <div className="w-full md:w-1/3 space-y-4">
                    {/* Tabs */}
                    <div className="flex border-b border-border">
                        <button
                            className={cn(
                                "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === 'manager'
                                    ? "border-primary text-primary"
                                    : "border-transparent text-text-muted hover:text-text-main"
                            )}
                            onClick={() => setActiveTab('manager')}
                        >
                            Manager Dashboard
                        </button>
                        <button
                            className={cn(
                                "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === 'user'
                                    ? "border-primary text-primary"
                                    : "border-transparent text-text-muted hover:text-text-main"
                            )}
                            onClick={() => setActiveTab('user')}
                        >
                            User Dashboard
                        </button>
                    </div>

                    {/* Actions Toolbar */}
                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <button onClick={expandAll} className="flex items-center gap-1.5 px-4 py-2 bg-[#5d6bb3] text-white rounded text-sm font-medium hover:bg-[#505c99] transition-colors shadow-sm">
                            <PlusSquare className="w-4 h-4" /> Expand
                        </button>
                        <button onClick={collapseAll} className="flex items-center gap-1.5 px-4 py-2 bg-[#5d6bb3] text-white rounded text-sm font-medium hover:bg-[#505c99] transition-colors shadow-sm">
                            <MinusSquare className="w-4 h-4" /> Collapse
                        </button>
                        <button onClick={handleRefresh} className="flex items-center gap-1.5 px-4 py-2 bg-surface border border-[#5d6bb3] text-[#5d6bb3] rounded text-sm font-medium hover:bg-surface-lighter transition-colors shadow-sm ml-auto md:ml-2">
                            <RefreshCw className="w-4 h-4" /> Refresh
                        </button>
                    </div>

                    {/* Tree View */}
                    <div className="bg-surface border border-border rounded-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <ul className="divide-y divide-border/50 text-sm">
                            {currentItems.map((item) => (
                                <React.Fragment key={item.id}>
                                    {/* Parent Item */}
                                    <li className="flex items-center justify-between p-2.5 hover:bg-surface-lighter/50 transition-colors group">
                                        <div className="flex items-center gap-3 pl-2">
                                            {item.children ? (
                                                <button onClick={() => toggleExpand(item.key)} className="text-text-muted hover:text-text-main">
                                                    {expandedItems[item.key] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                                </button>
                                            ) : (
                                                <span className="w-4" />
                                            )}
                                            <item.icon className="w-4.5 h-4.5 text-text-main" />
                                            <span className="font-bold text-text-main text-[13px]">{item.label}</span>
                                        </div>
                                        <div className="flex items-center gap-1 pr-2">
                                            <button className="p-1 text-primary hover:bg-surface-lighter rounded transition-colors" title="Edit">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => toggleVisibility(item.id)}
                                                className={cn(
                                                    "p-1 rounded transition-colors",
                                                    item.visible ? "text-primary hover:bg-surface-lighter" : "text-text-muted hover:bg-surface-lighter"
                                                )}
                                                title={item.visible ? "Visible" : "Hidden"}
                                            >
                                                {item.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </li>

                                    {/* Children Items */}
                                    {item.children && expandedItems[item.key] && (
                                        item.children.map(child => (
                                            <li key={child.id} className="flex items-center justify-between p-2.5 pl-12 hover:bg-surface-lighter/50 transition-colors group bg-surface-lighter/10 border-l-2 border-border ml-3">
                                                <div className="flex items-center gap-3">
                                                    <child.icon className="w-4 h-4 text-text-muted group-hover:text-text-main transition-colors" />
                                                    <span className="text-text-muted group-hover:text-text-main transition-colors text-xs font-medium">{child.label}</span>
                                                </div>
                                                <div className="flex items-center gap-1 pr-2">
                                                    <button className="p-1 text-primary hover:bg-surface-lighter rounded transition-colors" title="Edit">
                                                        <Edit className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button
                                                        onClick={() => toggleVisibility(child.id)}
                                                        className={cn(
                                                            "p-1 rounded transition-colors",
                                                            child.visible ? "text-primary hover:bg-surface-lighter" : "text-text-muted hover:bg-surface-lighter"
                                                        )}
                                                        title={child.visible ? "Visible" : "Hidden"}
                                                    >
                                                        {child.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                                    </button>
                                                </div>
                                            </li>
                                        ))
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column - Placeholder for details or editor (implied empty in screenshot) */}
                <div className="flex-1 bg-surface-lighter/10 rounded-lg p-10 flex items-center justify-center text-text-muted/20 border-2 border-dashed border-border/50">
                    <span className="text-lg font-medium">Select an item to edit</span>
                </div>
            </div>
        </div>
    );
};

export default CustomMenu;
