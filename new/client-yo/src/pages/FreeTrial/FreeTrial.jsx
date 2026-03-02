import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Home, Loader2, Check, Shield, AlertCircle } from 'lucide-react';
import { flexyService } from '../../services/flexyService';

const BALANCES = [
    { value: 2000, label: '$2,000' },
    { value: 5000, label: '$5,000' },
    { value: 10000, label: '$10,000' },
    { value: 25000, label: '$25,000' },
    { value: 50000, label: '$50,000' },
    { value: 100000, label: '$100,000' },
    { value: 200000, label: '$200,000' },
    { value: 400000, label: '$400,000' },
];

const ACCOUNT_TYPES = [
    {
        id: 'normal',
        name: 'Yo Pips',
        leverage: '1:100',
        description: 'Intraday trading, no weekend holding'
    },
    {
        id: 'swing',
        name: 'Yo Pips Swing',
        leverage: '1:30',
        description: 'Weekend holding allowed, lower leverage'
    },
];

function FreeTrial() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [activeAccount, setActiveAccount] = useState(null);
    const [error, setError] = useState(null);

    // Configuration State
    const [selectedBalance, setSelectedBalance] = useState(100000);
    const [selectedType, setSelectedType] = useState('normal');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    // Check for active trials on mount
    useEffect(() => {
        const checkActiveTrial = async () => {
            try {
                const storedLogins = JSON.parse(localStorage.getItem('accountLogins') || '[]');
                if (storedLogins.length > 0) {
                    const login = storedLogins[0];
                    try {
                        const account = await flexyService.getAccountDetails(login);
                        setActiveAccount({
                            login: account.Login,
                            balance: account.Balance,
                            equity: account.Equity
                        });
                    } catch (e) {
                        console.log('Account validation failed', e);
                    }
                }
            } catch (err) {
                console.error('Failed to check active trial', err);
            } finally {
                setLoading(false);
            }
        };

        checkActiveTrial();
    }, []);

    const handleCreateTrial = async () => {
        if (!termsAccepted) {
            setError('Please accept the terms and conditions to proceed.');
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            // Mock user details (simulating KYC'd user)
            const mockUser = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com'
            };

            const account = await flexyService.createFreeTrial({
                name: `${mockUser.firstName} ${mockUser.lastName}`,
                email: mockUser.email,
                balance: selectedBalance,
                leverage: selectedType === 'swing' ? 30 : 100,
                accountType: 'free-trial'
            });

            const logins = JSON.parse(localStorage.getItem('accountLogins') || '[]');
            if (!logins.includes(account.login)) {
                logins.unshift(account.login);
                localStorage.setItem('accountLogins', JSON.stringify(logins));
            }

            alert(`Free Trial Created Successfully!\nLogin: ${account.login}\nPassword: ${account.password}`);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Failed to create free trial. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#f8f9fa] dark:bg-[#0d0d0d]">
                <Loader2 size={32} className="animate-spin text-[#007bff]" />
            </div>
        );
    }

    const currentType = ACCOUNT_TYPES.find(t => t.id === selectedType);

    return (
        <div className="p-5 px-10 bg-[#f8f9fa] dark:bg-[#0d0d0d] min-h-[calc(100vh-64px)] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-[#6c757d] mb-[30px]">
                <Home size={14} className="mr-2 mb-0.5" />
                <span className="mx-2 text-[#ced4da] dark:text-[#495057]">/</span>
                <span>Trader</span>
                <span className="mx-2 text-[#ced4da] dark:text-[#495057]">/</span>
                <span className="text-[#212529] dark:text-[#e9ecef] font-medium">Free Trial</span>
            </div>

            <div className="relative bg-white dark:bg-[#141414] rounded-lg shadow-sm p-8 lg:p-10 mb-[60px] border border-transparent dark:border-[#333]">

                {activeAccount ? (
                    /* Active Trial Overlay */
                    <div className="text-center w-full max-w-[600px] mx-auto py-10">
                        <div className="mb-5 flex justify-center">
                            <Lock size={40} color="#6c757d" />
                        </div>
                        <h2 className="text-lg font-bold text-[#212529] dark:text-[#f3f4f6] mb-2.5 w-full">Active Free Trial Detected</h2>
                        <p className="text-sm text-[#495057] dark:text-[#adb5bd] mb-2.5 leading-normal">
                            You currently have an active Free Trial (Login: {activeAccount.login}). To start a new one, please end your current trial first.
                        </p>
                        <button
                            className="bg-[#007bff] hover:bg-[#0056b3] text-white border-none px-6 py-2.5 rounded-md font-semibold text-sm cursor-pointer transition-colors duration-200 mt-4"
                            onClick={() => navigate('/')}
                        >
                            Back to Dashboard
                        </button>

                        {showResetConfirm ? (
                            <div className="inline-flex items-center gap-2 mt-4 ml-3 bg-red-50 dark:bg-red-900/10 p-1.5 rounded-lg border border-red-100 dark:border-red-900/30">
                                <span className="text-xs text-red-600 dark:text-red-400 font-medium ml-2">Confirm reset?</span>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white border-none px-3 py-1.5 rounded-md font-semibold text-xs cursor-pointer transition-colors duration-200"
                                    onClick={() => {
                                        localStorage.removeItem('accountLogins');
                                        setActiveAccount(null);
                                        window.location.reload();
                                    }}
                                >
                                    Yes
                                </button>
                                <button
                                    className="bg-white hover:bg-gray-50 dark:bg-[#333] dark:hover:bg-[#444] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 px-3 py-1.5 rounded-md font-semibold text-xs cursor-pointer transition-colors duration-200"
                                    onClick={() => setShowResetConfirm(false)}
                                >
                                    No
                                </button>
                            </div>
                        ) : (
                            <button
                                className="bg-transparent hover:bg-gray-100 dark:hover:bg-[#262626] text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 px-6 py-2.5 rounded-md font-semibold text-sm cursor-pointer transition-colors duration-200 mt-4 ml-3"
                                onClick={() => setShowResetConfirm(true)}
                            >
                                Start New Trial
                            </button>
                        )}
                    </div>
                ) : (
                    /* Free Trial Configuration */
                    <div className="max-w-[1000px] mx-auto">
                        <div className="mb-10 text-center">
                            <h1 className="text-3xl text-[#343a40] dark:text-[#f3f4f6] mb-3 font-bold">Start Free Trial</h1>
                            <p className="text-[#6c757d] dark:text-[#9ca3af] text-sm max-w-[700px] mx-auto">
                                Configure your trial account parameters below. Use this opportunity to practice with the same conditions as our paid challenges.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">

                            {/* Left Column: Configuration */}
                            <div className="space-y-8">

                                {/* 1. Account Balance */}
                                <section>
                                    <h3 className="text-sm font-bold text-[#343a40] dark:text-[#f3f4f6] mb-4 uppercase tracking-wide">1. Select Balance</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {BALANCES.map((bal) => (
                                            <button
                                                key={bal.value}
                                                onClick={() => setSelectedBalance(bal.value)}
                                                className={`
                                                    py-3 px-2 rounded-xl text-sm font-bold border transition-all duration-200
                                                    ${selectedBalance === bal.value
                                                        ? 'bg-[#007bff] text-white border-[#007bff] shadow-md shadow-blue-500/20 scale-[1.02]'
                                                        : 'bg-white dark:bg-[#1a1a1a] text-[#495057] dark:text-[#ced4da] border-[#e9ecef] dark:border-[#333] hover:border-[#ced4da] dark:hover:border-[#555]'
                                                    }
                                                `}
                                            >
                                                {bal.label}
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* 2. Account Type */}
                                <section>
                                    <h3 className="text-sm font-bold text-[#343a40] dark:text-[#f3f4f6] mb-4 uppercase tracking-wide">2. Account Type</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {ACCOUNT_TYPES.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setSelectedType(type.id)}
                                                className={`
                                                    p-4 rounded-xl border text-left flex flex-col gap-1 transition-all duration-200 relative overflow-hidden
                                                    ${selectedType === type.id
                                                        ? 'bg-[#f0f7ff] dark:bg-blue-900/20 border-[#007bff] shadow-sm'
                                                        : 'bg-white dark:bg-[#1a1a1a] border-[#e9ecef] dark:border-[#333] hover:bg-[#f8f9fa] dark:hover:bg-[#262626]'
                                                    }
                                                `}
                                            >
                                                <div className="flex justify-between items-center w-full">
                                                    <span className={`font-bold ${selectedType === type.id ? 'text-[#007bff] dark:text-blue-400' : 'text-[#343a40] dark:text-[#f3f4f6]'}`}>
                                                        {type.name}
                                                    </span>
                                                    {selectedType === type.id && <Check size={18} className="text-[#007bff]" />}
                                                </div>
                                                <span className="text-xs text-[#6c757d] dark:text-[#9ca3af]">{type.description}</span>
                                                <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-[#e9ecef] dark:bg-[#333] text-[10px] font-bold text-[#495057] dark:text-[#ced4da] w-fit">
                                                    Lev. {type.leverage}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* 3. Confirmation */}
                                <section className="pt-4 border-t border-[#e9ecef] dark:border-[#333]">
                                    <label className="flex items-start gap-3 cursor-pointer p-4 rounded-lg hover:bg-[#f8f9fa] dark:hover:bg-[#1a1a1a] transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={termsAccepted}
                                            onChange={(e) => setTermsAccepted(e.target.checked)}
                                            className="mt-1 w-5 h-5 rounded border-gray-300 text-[#007bff] focus:ring-[#007bff]"
                                        />
                                        <div className="text-sm">
                                            <span className="font-medium text-[#343a40] dark:text-[#f3f4f6] block mb-1">I accept the Terms & Conditions</span>
                                            <span className="text-[#6c757d] dark:text-[#9ca3af] text-xs">I understand this is a simulated demo account. I have read and agree to the rules and objectives.</span>
                                        </div>
                                    </label>
                                </section>

                                <button
                                    onClick={handleCreateTrial}
                                    disabled={submitting}
                                    className="w-full py-4 bg-[#007bff] hover:bg-[#0056b3] text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Setting up Account...
                                        </>
                                    ) : (
                                        'Start Free Trial'
                                    )}
                                </button>

                                {error && (
                                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center gap-2">
                                        <AlertCircle size={16} />
                                        {error}
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Objectives Summary */}
                            <div className="bg-[#f8f9fa] dark:bg-[#1a1a1a] rounded-xl p-6 h-fit border border-[#e9ecef] dark:border-[#333]">
                                <h3 className="text-lg font-bold text-[#343a40] dark:text-[#f3f4f6] mb-6 flex items-center gap-2">
                                    <Shield size={20} className="text-[#007bff]" />
                                    Trading Objectives
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-baseline pb-3 border-b border-[#e9ecef] dark:border-[#333]">
                                        <span className="text-sm text-[#6c757d] dark:text-[#9ca3af]">Account Balance</span>
                                        <span className="font-bold text-[#343a40] dark:text-[#f3f4f6]">${selectedBalance.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline pb-3 border-b border-[#e9ecef] dark:border-[#333]">
                                        <span className="text-sm text-[#6c757d] dark:text-[#9ca3af]">Maximum Loss (10%)</span>
                                        <span className="font-bold text-[#343a40] dark:text-[#f3f4f6]">${(selectedBalance * 0.1).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline pb-3 border-b border-[#e9ecef] dark:border-[#333]">
                                        <span className="text-sm text-[#6c757d] dark:text-[#9ca3af]">Daily Loss (5%)</span>
                                        <span className="font-bold text-[#343a40] dark:text-[#f3f4f6]">${(selectedBalance * 0.05).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline pb-3 border-b border-[#e9ecef] dark:border-[#333]">
                                        <span className="text-sm text-[#6c757d] dark:text-[#9ca3af]">Profit Target (10%)</span>
                                        <span className="font-bold text-[#28a745]">${(selectedBalance * 0.1).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline pb-3 border-b border-[#e9ecef] dark:border-[#333]">
                                        <span className="text-sm text-[#6c757d] dark:text-[#9ca3af]">Time Limit</span>
                                        <span className="font-bold text-[#343a40] dark:text-[#f3f4f6]">14 Days</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-white dark:bg-[#262626] rounded-lg border border-[#e9ecef] dark:border-[#333]">
                                    <h4 className="font-bold text-sm text-[#343a40] dark:text-[#f3f4f6] mb-2">{currentType.name} Rules</h4>
                                    <ul className="text-xs text-[#6c757d] dark:text-[#9ca3af] space-y-1.5 list-disc pl-4">
                                        <li>Leverage up to <strong>{currentType.leverage}</strong></li>
                                        <li>{selectedType === 'swing' ? 'Weekend holding IS allowed' : 'Weekend holding is NOT allowed'}</li>
                                        <li>News trading is allowed</li>
                                        <li>EA/Bot trading is allowed</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>

            <div className="text-left text-[#6c757d] text-xs pt-5 border-t border-transparent dark:border-[#333]">
                <div className="mb-2.5">
                    <a href="#" className="decoration-none text-[#495057] dark:text-[#9ca3af] mr-4 font-medium hover:underline">Cookie settings</a>
                    <a href="#" className="decoration-none text-[#495057] dark:text-[#9ca3af] mr-4 font-medium hover:underline">Privacy policy</a>
                    <a href="#" className="decoration-none text-[#495057] dark:text-[#9ca3af] mr-4 font-medium hover:underline">Terms & Conditions</a>
                </div>
                <p className="mb-4 leading-normal text-[11px] text-[#6c757d] dark:text-[#6b7280]">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <p className="mb-1.5 copyright">2026 © Copyright - YoPips.com Made with ❤️ for trading.</p>
                <p className="text-[#adb5bd]">Version: 673b1000</p>
            </div>
        </div>
    );
}

export default FreeTrial;
