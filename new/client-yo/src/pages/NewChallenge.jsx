import React, { useState, useEffect } from 'react';
import { Sliders, Check, ChevronDown, Info, ShieldCheck, CreditCard } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function NewChallenge() {
    const location = useLocation();
    const [step, setStep] = useState('two-step');
    const [model, setModel] = useState('funding-pips');
    const [size, setSize] = useState('100000');
    const [platform, setPlatform] = useState('mt5');
    const [profitTarget, setProfitTarget] = useState('default');

    useEffect(() => {
        if (location.state?.mode === 'free-trial') {
            setStep('free-trial');
        }
    }, [location.state]);

    const prices = {
        '5000': 32,
        '10000': 60,
        '25000': 139,
        '50000': 239,
        '100000': 529
    };

    const currentPrice = prices[size] || 0;

    // Helper for selected state styles
    const getCardStyle = (isActive) =>
        `relative p-5 rounded-lg border cursor-pointer transition-all duration-200 ${
            isActive
                ? 'bg-[#0066ff]/5 border-[#0066ff] shadow-[0_0_0_1px_#0066ff]'
                : 'bg-white dark:bg-[#141414] border-transparent dark:border-[#333] hover:border-gray-300 dark:hover:border-[#444]'
        }`;

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            {/* Header */}
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                <span>Trader</span>
                <span className="mx-1">/</span>
                <span className="text-[#4b5563] dark:text-[#9ca3af]">New Challenge</span>
            </div>

            <div className="mb-8">
                <h1 className="text-xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6] mb-2">Configure Your Challenge</h1>
                <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af]">Select the plan that fits your trading style and start your journey to being funded.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8">
                {/* Left Column: Configuration */}
                <div className="flex flex-col gap-8">

                    {/* 1. Challenge Type */}
                    <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-4">1. Choose Your Plan</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'two-step', title: 'Plan 1: Evolution (2-Step)', sub: '90% Profit Split, 2-Step Evaluation, Best Value', badge: 'Best Sellers' },
                                { id: 'one-step', title: 'Plan 2: Express (1-Step)', sub: 'Fastest Path, No Time Limit, 85% Split', badge: 'Fastest' },
                                { id: 'instant', title: 'Plan 3: Instant Funding', sub: 'No Evaluation, Trade Immediately, Weekly Payouts', badge: 'Pro Only' },
                                { id: 'free-trial', title: 'Free Trial', sub: 'Practice with a demo account before you start', badge: 'Free' }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setStep(item.id)}
                                    className={`${getCardStyle(step === item.id)} flex flex-col justify-between min-h-[140px]`}
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`text-[15px] font-bold ${step === item.id ? 'text-[#0066ff]' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                                {item.title}
                                            </span>
                                            {item.badge && (
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                                    step === item.id 
                                                        ? 'bg-[#0066ff] text-white' 
                                                        : 'bg-[#f3f4f6] dark:bg-[#333] text-[#6b7280] dark:text-[#9ca3af]'
                                                }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed max-w-[90%]">
                                            {item.sub}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                            step === item.id ? 'border-[#0066ff] bg-[#0066ff]' : 'border-gray-300 dark:border-[#555]'
                                        }`}>
                                            {step === item.id && <Check size={10} className="text-white" />}
                                        </div>
                                        <span className={`text-[11px] font-medium ${step === item.id ? 'text-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>
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
                                        <div className={`text-[13px] font-semibold ${model === item.id ? 'text-[#0066ff]' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                            {item.title}
                                        </div>
                                        <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">{item.sub}</div>
                                    </div>
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                        model === item.id ? 'border-[#0066ff] bg-[#0066ff]' : 'border-gray-300 dark:border-[#555]'
                                    }`}>
                                        {model === item.id && <Check size={10} className="text-white" />}
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
                                <button key={curr} className={`px-4 py-1.5 rounded text-[11px] font-bold border ${
                                    curr === 'USD' 
                                        ? 'bg-[#0066ff] border-[#0066ff] text-white' 
                                        : 'bg-white dark:bg-[#141414] border-transparent dark:border-[#333] text-[#6b7280] dark:text-[#9ca3af]'
                                }`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                             {['5000', '10000', '25000', '50000', '100000'].map(val => (
                                <div
                                    key={val}
                                    onClick={() => setSize(val)}
                                    className={`${getCardStyle(size === val)} text-center !p-4`}
                                >
                                    <div className={`text-[15px] font-bold mb-1 ${size === val ? 'text-[#0066ff]' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                        ${parseInt(val).toLocaleString()}
                                    </div>
                                    <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">
                                        Price: ${prices[val]}
                                    </div>
                                </div>
                             ))}
                        </div>
                    </div>

                    {/* 4. Trading Platform */}
                    <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-4">4. Trading Platform</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {['MetaTrader 5', 'MatchTrader', 'CTrader +$20.00'].map(p => {
                                const val = p.split(' ')[0].toLowerCase();
                                return (
                                    <div
                                        key={p}
                                        onClick={() => setPlatform(val)}
                                        className={`${getCardStyle(platform === val)} flex items-center justify-between`}
                                    >
                                        <span className={`text-[13px] font-semibold ${platform === val ? 'text-[#0066ff]' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                            {p}
                                        </span>
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                            platform === val ? 'border-[#0066ff] bg-[#0066ff]' : 'border-gray-300 dark:border-[#555]'
                                        }`}>
                                            {platform === val && <Check size={10} className="text-white" />}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                     {/* 5. Customise Trading Rules */}
                    <div className="bg-white dark:bg-[#141414] rounded-lg p-5 border border-transparent dark:border-[#333]"> 
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded bg-[#f3f4f6] dark:bg-[#1f2937] flex items-center justify-center text-[#6b7280] dark:text-[#9ca3af]">
                                <Sliders size={16} />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Customise Trading Rules</h4>
                                <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">Adjust challenge parameters</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3 border-t border-[#f3f4f6] dark:border-[#333]">
                             <div>
                                <h5 className="text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Profit Target</h5>
                                <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">Choose your target</p>
                             </div>
                             <div className="flex bg-[#f3f4f6] dark:bg-[#1f2937] p-1 rounded">
                                <button 
                                    onClick={() => setProfitTarget('default')}
                                    className={`px-3 py-1 text-[11px] font-semibold rounded transition-all ${profitTarget === 'default' ? 'bg-white dark:bg-[#333] shadow-sm text-[#1a1a1a] dark:text-white' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}
                                >
                                    8% Default
                                </button>
                                <button 
                                    onClick={() => setProfitTarget('10')}
                                    className={`px-3 py-1 text-[11px] font-semibold rounded transition-all flex items-center gap-1 ${profitTarget === '10' ? 'bg-white dark:bg-[#333] shadow-sm text-[#1a1a1a] dark:text-white' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}
                                >
                                    10% <span className="text-[#10b981]">-$40</span>
                                </button>
                             </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Order Summary */}
                <div className="xl:sticky xl:top-6 h-fit">
                    <div className="bg-[#0066ff] rounded-t-xl p-6 text-center text-white">
                         <h3 className="text-[15px] font-bold mb-1">Order Summary</h3>
                         <div className="text-3xl font-extrabold mb-1">${step === 'free-trial' ? '0' : currentPrice}</div>
                         <div className="text-[11px] opacity-80">One-time payment</div>
                    </div>
                    <div className="bg-white dark:bg-[#141414] rounded-b-xl p-6 border-x border-b border-transparent dark:border-[#333] shadow-sm">
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Plan</span>
                                <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] text-right max-w-[50%]">
                                    {step === 'free-trial' ? 'Free Trial' : (step === 'two-step' ? 'Evolution (2-Step)' : (step === 'zero' ? 'Zero' : 'Express (1-Step)'))}
                                </span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Balance</span>
                                <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">${parseInt(size).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Platform</span>
                                <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    {platform === 'metatrader' ? 'MetaTrader 5' : (platform === 'matchtrader' ? 'MatchTrader' : 'cTrader')}
                                </span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Profit Split</span>
                                <span className="font-bold text-[#0066ff]">90%</span>
                            </div>
                        </div>

                        <div className="border-t border-[#f3f4f6] dark:border-[#333] py-5">
                             <div className="flex gap-2 mb-3">
                                <input type="checkbox" className="mt-0.5" defaultChecked />
                                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">I agree to <a href="#" className="underline text-[#1a1a1a] dark:text-[#f3f4f6]">Terms & Conditions</a></span>
                             </div>
                             <div className="flex gap-2">
                                <input type="checkbox" className="mt-0.5" defaultChecked />
                                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">I agree to <a href="#" className="underline text-[#1a1a1a] dark:text-[#f3f4f6]">Refund Policy</a></span>
                             </div>
                        </div>

                         <button className="w-full py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white rounded-lg font-bold text-[13px] transition-colors shadow-lg shadow-blue-500/20">
                            {step === 'free-trial' ? 'Start Free Trial' : 'Complete Order'}
                        </button>

                         <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#6b7280] dark:text-[#9ca3af]">
                            <ShieldCheck size={12} />
                            <span>Secure SSL Payment</span>
                        </div>
                    </div>

                    {/* Coupons */}
                    <div className="mt-4 bg-white dark:bg-[#141414] rounded-lg p-5 border border-transparent dark:border-[#333]">
                         <h4 className="text-[12px] font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] mb-3">Coupon Code</h4>
                         <div className="flex gap-2">
                             <input 
                                type="text" 
                                placeholder="Enter code" 
                                className="flex-1 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded px-3 py-2 text-[12px] text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-1 focus:ring-[#0066ff]"
                            />
                             <button className="px-4 py-2 bg-[#1a1a1a] dark:bg-[#333] text-white rounded text-[11px] font-semibold hover:opacity-90">
                                Apply
                             </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewChallenge;
