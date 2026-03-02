import React, { useState, useEffect } from 'react';
import { Check, Info, Shield, CreditCard, User, Building2, Globe, Clock, Calendar, Target, Percent, DollarSign, BarChart, Copy, X, CheckCircle, XCircle, Key, Server, Sliders } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { flexyService } from '../../services/flexyService';
import { useAuth } from '../../context/AuthContext';
import { countries } from '../../data/countries';

const PRICES = {
    'evolution': {
        'USD': { 2000: 19, 5000: 29, 10000: 49, 15000: 69, 25000: 99, 50000: 169, 100000: 329, 200000: 599 },
        'EUR': { 2000: 19, 5000: 29, 10000: 49, 15000: 69, 25000: 99, 50000: 169, 100000: 329, 200000: 599 },
        'GBP': { 2000: 19, 5000: 29, 10000: 49, 15000: 69, 25000: 99, 50000: 169, 100000: 329, 200000: 599 },
        'DEFAULT': { 2000: 19, 5000: 29, 10000: 49, 15000: 69, 25000: 99, 50000: 169, 100000: 329, 200000: 599 }
    },
    'express': {
        'USD': { 2000: 22, 5000: 35, 10000: 59, 15000: 85, 25000: 135, 50000: 219, 100000: 419, 200000: 749 },
        'EUR': { 2000: 22, 5000: 35, 10000: 59, 15000: 85, 25000: 135, 50000: 219, 100000: 419, 200000: 749 },
        'GBP': { 2000: 22, 5000: 35, 10000: 59, 15000: 85, 25000: 135, 50000: 219, 100000: 419, 200000: 749 },
        'DEFAULT': { 2000: 22, 5000: 35, 10000: 59, 15000: 85, 25000: 135, 50000: 219, 100000: 419, 200000: 749 }
    },
    'instant': {
        'USD': { 2000: 59, 5000: 119, 10000: 199, 25000: 399, 50000: 699 },
        'EUR': { 2000: 59, 5000: 119, 10000: 199, 25000: 399, 50000: 699 },
        'GBP': { 2000: 59, 5000: 119, 10000: 199, 25000: 399, 50000: 699 },
        'DEFAULT': { 2000: 59, 5000: 119, 10000: 199, 25000: 399, 50000: 699 }
    }
};

function NewChallenge() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    // State
    const [step, setStep] = useState('evolution'); // Default to evolution
    const [currency, setCurrency] = useState('USD');
    const [size, setSize] = useState(50000);
    const [platform, setPlatform] = useState('mt5');
    const [model, setModel] = useState('funding-pips');
    const [billingInfo, setBillingInfo] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        street: '', city: '', zip: '', country: 'US',
    });
    const [loading, setLoading] = useState(false);
    const [createdAccount, setCreatedAccount] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Initial load from navigation state if any
    useEffect(() => {
        if (location.state?.mode === 'free-trial') setStep('free-trial');
    }, [location.state]);

    // Pre-fill billing info from user context
    useEffect(() => {
        if (user) {
            const names = (user.name || '').split(' ');
            const firstName = names[0] || '';
            const lastName = names.slice(1).join(' ') || '';
            
            setBillingInfo(prev => ({
                ...prev,
                firstName,
                lastName,
                email: user.email || prev.email
            }));
        }
    }, [user]);

    // Derived Price
    const currentPrice = PRICES[step === 'free-trial' ? 'express' : step]?.[currency]?.[size] || 0;

    // Handlers
    const handlePurchase = async () => {
        setLoading(true);
        try {
             const account = await flexyService.createFreeTrial({
                name: `${billingInfo.firstName || 'Trader'} ${billingInfo.lastName || ''}`.trim(),
                email: billingInfo.email || 'user@example.com', // Fallback for dev
                balance: size,
                leverage: 100,
                accountType: step
            });
            setCreatedAccount(account);
            setShowSuccessModal(true);
        } catch (error) {
            let msg = error.message;
            // Attempt to parse clean message from "API Error: 400 - {json}"
            if (msg.includes('API Error:')) {
                const parts = msg.split(' - ');
                if (parts.length > 1) {
                    try {
                        // Try parsing the JSON part
                        const jsonPart = parts.slice(1).join(' - ');
                        const parsed = JSON.parse(jsonPart);
                        if (parsed.message) msg = parsed.message;
                    } catch (e) {
                        // Keep original message if parsing fails
                    }
                }
            }
            setErrorMessage(msg);
            setShowErrorModal(true);
        } finally {
            setLoading(false);
        }
    };

    // Helper for card styles (Monochrome)
    const getCardStyle = (isActive) =>
        `relative p-5 rounded-lg border cursor-pointer transition-all duration-200 ${
            isActive
                ? 'bg-[#1d1d1f] border-[#1d1d1f] text-white shadow-md'
                : 'bg-white dark:bg-[#141414] border-transparent dark:border-[#333] hover:border-gray-300 dark:hover:border-[#444] text-[#1a1a1a] dark:text-[#f3f4f6]'
        }`;

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            

            {/* Error Modal */}
            {showErrorModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-[#141414] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-[#333]">
                        {/* Header - Error Red */}
                        <div className="bg-red-600 p-6 text-white text-center relative">
                            <button onClick={() => setShowErrorModal(false)} className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                                <XCircle size={32} />
                            </div>
                            <h2 className="text-xl font-bold">Request Failed</h2>
                            <p className="text-sm opacity-90 mt-1">Please correct the issues below</p>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-4 mb-6">
                                <p className="text-center text-red-600 dark:text-red-400 font-medium">
                                    {errorMessage}
                                </p>
                            </div>

                            <button
                                onClick={() => setShowErrorModal(false)}
                                className="w-full bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] font-bold py-3 rounded-xl hover:opacity-90 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && createdAccount && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-[#141414] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-[#333]">
                        {/* Header - Monochrome */}
                        <div className="bg-[#1d1d1f] p-6 text-white text-center relative">
                            <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                                <CheckCircle size={32} />
                            </div>
                            <h2 className="text-xl font-bold">Account Created</h2>
                            <p className="text-sm opacity-70 mt-1">Your trading account is ready</p>
                        </div>

                        {/* Credentials */}
                        <div className="p-6 space-y-3">
                            <CredentialRow icon={User} label="Login ID" value={createdAccount.login} />
                            <CredentialRow icon={Key} label="Password" value={createdAccount.password} />
                            <CredentialRow icon={Server} label="Server" value={createdAccount.server} />
                            
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <div className="p-3 bg-[#f3f4f6] dark:bg-[#1f2937] rounded-xl text-center">
                                    <div className="text-xs text-[#6b7280]">Balance</div>
                                    <div className="font-bold text-[#1a1a1a] dark:text-white">${createdAccount.balance?.toLocaleString()}</div>
                                </div>
                                <div className="p-3 bg-[#f3f4f6] dark:bg-[#1f2937] rounded-xl text-center">
                                    <div className="text-xs text-[#6b7280]">Leverage</div>
                                    <div className="font-bold text-[#1a1a1a] dark:text-white">1:{createdAccount.leverage}</div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 pt-0 space-y-3">
                            <button
                                onClick={() => navigate(`/account-metrix/${createdAccount.login}`)}
                                className="w-full bg-[#1d1d1f] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-colors"
                            >
                                Go to Account Overview
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                <span>Trader</span>
                <span className="mx-1">/</span>
                <span className="text-[#4b5563] dark:text-[#9ca3af]">New Challenge</span>
            </div>

            <div className="mb-8">
                <h1 className="text-xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6] mb-2">Configure Your Challenge</h1>
                <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af]">Select the plan that fits your trading style.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8">
                {/* Left Column: Configuration */}
                <div className="flex flex-col gap-8">

                    {/* 1. Challenge Type (Monochrome Cards) */}
                    <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-4">1. Choose Your Plan</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'evolution', title: 'Plan 1: Evolution (2-Step)', sub: '90% Profit Split, 2-Step Evaluation', badge: 'Best Sellers' },
                                { id: 'express', title: 'Plan 2: Express (1-Step)', sub: 'Fastest Path, No Time Limit', badge: 'Fastest' },
                                { id: 'instant', title: 'Plan 3: Instant Funding', sub: 'No Evaluation, Trade Immediately', badge: 'Pro Only' },
                                { id: 'free-trial', title: 'Free Trial', sub: 'Practice with a demo account', badge: 'Free' }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setStep(item.id)}
                                    className={`${getCardStyle(step === item.id)} flex flex-col justify-between min-h-[120px]`}
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[15px] font-bold">
                                                {item.title}
                                            </span>
                                            {item.badge && (
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                                    step === item.id 
                                                        ? 'bg-white text-black' 
                                                        : 'bg-[#f3f4f6] dark:bg-[#333] text-[#6b7280] dark:text-[#9ca3af]'
                                                }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-[11px] leading-relaxed max-w-[90%] ${step === item.id ? 'opacity-80' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>
                                            {item.sub}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                            step === item.id ? 'border-white bg-white' : 'border-gray-300 dark:border-[#555]'
                                        }`}>
                                            {step === item.id && <Check size={10} className="text-black" />}
                                        </div>
                                        <span className={`text-[11px] font-medium ${step === item.id ? 'opacity-100' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>
                                            {step === item.id ? 'Selected' : 'Select Plan'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Model */}
                     <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-4">2. Model</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {[
                                { id: 'funding-pips', title: 'YoPips', sub: 'Standard trading conditions' },
                                { id: 'funding-pips-pro', title: 'YoPips Pro', sub: 'Raw spreads + lower commissions' }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setModel(item.id)}
                                    className={`${getCardStyle(model === item.id)} flex items-center justify-between`}
                                >
                                    <div>
                                        <div className="text-[13px] font-semibold">
                                            {item.title}
                                        </div>
                                        <div className={`text-[11px] ${model === item.id ? 'opacity-80' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>{item.sub}</div>
                                    </div>
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                        model === item.id ? 'border-white bg-white' : 'border-gray-300 dark:border-[#555]'
                                    }`}>
                                        {model === item.id && <Check size={10} className="text-black" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>

                    {/* 3. Account Size */}
                    <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-4">3. Account Size & Currency</h3>
                        <div className="flex gap-2 mb-4">
                            {['USD', 'EUR', 'GBP'].map(curr => (
                                <button key={curr} 
                                    onClick={() => setCurrency(curr)}
                                    className={`px-4 py-1.5 rounded text-[11px] font-bold border ${
                                    currency === curr 
                                        ? 'bg-[#1d1d1f] border-[#1d1d1f] text-white' 
                                        : 'bg-white dark:bg-[#141414] border-transparent dark:border-[#333] text-[#6b7280] dark:text-[#9ca3af]'
                                }`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                             {[2000, 5000, 10000, 25000, 50000, 100000, 200000].map(val => (
                                <div
                                    key={val}
                                    onClick={() => setSize(val)}
                                    className={`${getCardStyle(size === val)} text-center !p-4`}
                                >
                                    <div className="text-[15px] font-bold mb-1">
                                        ${val.toLocaleString()}
                                    </div>
                                    <div className={`text-[11px] ${size === val ? 'opacity-80' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>
                                        ${PRICES[step === 'free-trial' ? 'express' : step]?.[currency]?.[val]}
                                    </div>
                                </div>
                             ))}
                        </div>
                    </div>

                    {/* 4. Trading Platform */}
                    <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-4">4. Trading Platform</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {['MetaTrader 5', 'MatchTrader', 'CTrader'].map(p => {
                                const val = p.split(' ')[0].toLowerCase();
                                return (
                                    <div
                                        key={p}
                                        onClick={() => setPlatform(val)}
                                        className={`${getCardStyle(platform === val)} flex items-center justify-between`}
                                    >
                                        <span className="text-[13px] font-semibold">
                                            {p}
                                        </span>
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                            platform === val ? 'border-white bg-white' : 'border-gray-300 dark:border-[#555]'
                                        }`}>
                                            {platform === val && <Check size={10} className="text-black" />}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: Order Summary (Monochrome) */}
                <div className="xl:sticky xl:top-6 h-fit">
                    <div className="bg-[#1d1d1f] rounded-t-xl p-6 text-center text-white">
                         <h3 className="text-[15px] font-bold mb-1">Order Summary</h3>
                         <div className="text-3xl font-extrabold mb-1">${step === 'free-trial' ? '0' : currentPrice}</div>
                         <div className="text-[11px] opacity-80">One-time payment</div>
                    </div>
                    <div className="bg-white dark:bg-[#141414] rounded-b-xl p-6 border-x border-b border-transparent dark:border-[#333] shadow-sm">
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Plan</span>
                                <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] text-right max-w-[50%]">
                                    {step === 'free-trial' ? 'Free Trial' : (step === 'evolution' ? 'Evolution' : (step === 'instant' ? 'Instant' : 'Express'))}
                                </span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Balance</span>
                                <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">${size.toLocaleString()}</span>
                            </div>
                        </div>

                         <button 
                            onClick={handlePurchase}
                            disabled={loading}
                            className="w-full py-3 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] rounded-lg font-bold text-[13px] transition-opacity hover:opacity-90 shadow-sm"
                        >
                            {loading ? 'Processing...' : (step === 'free-trial' ? 'Start Free Trial' : 'Complete Order')}
                        </button>

                         <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#6b7280] dark:text-[#9ca3af]">
                            <Shield size={12} />
                            <span>Secure SSL Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Components
// Helper Components
const CredentialRow = ({ icon: Icon, label, value }) => {
    const copyToClipboard = async (text) => {
        if (!text) return;
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                // Ideally show toast/feedback here, but keeping it simple for now as per original design
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                } catch (err) {
                    console.error('Fallback copy failed', err);
                }
                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error('Copy failed', err);
        }
    };

    return (
        <div className="flex items-center justify-between p-3 bg-[#f3f4f6] dark:bg-[#1f2937] rounded-xl border border-transparent dark:border-[#333]">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#141414] flex items-center justify-center">
                    <Icon size={16} className="text-[#1d1d1f] dark:text-white" />
                </div>
                <div>
                    <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">{label}</div>
                    <div className="font-bold text-[#1a1a1a] dark:text-white font-mono text-sm">{value}</div>
                </div>
            </div>
            <button
                onClick={() => copyToClipboard(value)}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
                <Copy size={14} className="text-[#9ca3af]" />
            </button>
        </div>
    );
};

export default NewChallenge;
