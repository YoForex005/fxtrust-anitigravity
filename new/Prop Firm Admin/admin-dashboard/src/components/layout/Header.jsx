import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, Menu, LogOut, UserCircle, Settings, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const userMenuRef = useRef(null);
    const supportRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
            if (supportRef.current && !supportRef.current.contains(event.target)) {
                setIsSupportOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        // For now, just redirect to home. Later this can clear auth tokens, etc.
        navigate('/');
        setIsUserMenuOpen(false);
    };

    const handleProfile = () => {
        navigate('/profile');
        setIsUserMenuOpen(false);
    };

    return (
        <header className="h-16 bg-surface/90 backdrop-blur-md border-b border-border flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="md:hidden text-text-muted hover:text-text-main">
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            <div className="flex items-center gap-6">
                <button
                    onClick={() => navigate('/notifications')}
                    className="relative text-text-muted hover:text-text-main transition-colors"
                >
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-2.5 -right-2.5 min-w-[18px] h-[18px] bg-[#5d6bb3] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-surface animate-pulse">
                        14
                    </span>
                </button>

                <button
                    onClick={() => navigate('/settings')}
                    className="text-text-muted hover:text-text-main transition-colors"
                    title="Dashboard Settings"
                >
                    <Settings className="w-5 h-5" />
                </button>

                {/* Support Dropdown */}
                <div className="relative" ref={supportRef}>
                    <button
                        onClick={() => setIsSupportOpen(!isSupportOpen)}
                        className="text-text-muted hover:text-text-main transition-colors"
                        title="Support"
                    >
                        <HelpCircle className="w-5 h-5" />
                    </button>

                    {isSupportOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-surface border border-border rounded-lg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-border">
                                <h3 className="text-lg font-semibold text-text-main">Funded Support</h3>
                                <button className="px-4 py-1.5 bg-[#5B7DBD] text-white text-sm font-medium rounded hover:bg-[#4A6BA8] transition-colors">
                                    Support
                                </button>
                            </div>

                            {/* Documentation */}
                            <div className="p-4 border-b border-border">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">DOCUMENTATION</p>
                                <a href="#" className="text-primary text-sm hover:underline">Documentation Portal</a>
                            </div>

                            {/* Helpdesk */}
                            <div className="p-4">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">HELPDESK</p>
                                <a href="#" className="text-primary text-sm hover:underline">HelpDesk Portal</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative" ref={userMenuRef}>
                    <div
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium text-text-main group-hover:text-primary transition-colors">Admin User</p>
                            <p className="text-xs text-text-muted">Super Admin</p>
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            <button
                                onClick={handleProfile}
                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                            >
                                <UserCircle className="w-4 h-4" />
                                Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
