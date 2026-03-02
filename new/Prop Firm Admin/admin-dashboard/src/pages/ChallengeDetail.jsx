import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    HelpCircle,
    RefreshCw,
    List,
    Info,
    ChevronLeft,
    ChevronRight,
    Search
} from 'lucide-react';
import { cn } from '../lib/utils';

const ChallengeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data for the challenge detail
    const challengeData = {
        id: id || '2283',
        status: 'Error',
        initialBalance: '$',
        leverage: '1:',
        plan: '10K Cypher Evaluation',
        price: '89$',
        userName: 'Mahdi',
        userEmail: 'kljhgfdfghjd@gmail.com'
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-text-main">Challenges</h1>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Detail Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                <div className="border-b border-border bg-surface/50 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-text-main">Detail</h2>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors text-xs font-bold uppercase">
                            Finish Failed Challenge
                        </button>
                        <button className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors text-xs font-bold uppercase">
                            Finish Passed Challenge
                        </button>
                        <button
                            onClick={() => navigate('/challenges')}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-xs uppercase"
                        >
                            <List className="w-3.5 h-3.5" />
                            List
                        </button>
                    </div>
                </div>

                <div className="p-8 space-y-6">
                    {/* Status Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">Status</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 flex items-center">
                            <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                {challengeData.status}
                            </span>
                        </div>
                    </div>

                    {/* Initial Balance */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">Initial Balance</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text-main text-sm">
                            {challengeData.initialBalance}
                        </div>
                    </div>

                    {/* Leverage */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">Leverage</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text-main text-sm">
                            {challengeData.leverage}
                        </div>
                    </div>

                    {/* Plan */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">Plan</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text-main text-sm">
                            {challengeData.plan}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">Price</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text-main text-sm">
                            {challengeData.price}
                        </div>
                    </div>

                    <div className="py-4 border-t border-border/30"></div>

                    {/* User Name */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">User Name</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text-main text-sm">
                            {challengeData.userName}
                        </div>
                    </div>

                    {/* User Email */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-text-muted text-right">User Email</label>
                        <div className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text-main text-sm">
                            {challengeData.userEmail}
                        </div>
                    </div>

                    {/* Activation Message */}
                    <div className="pt-4 text-xs text-text-muted italic border-t border-border/30">
                        Waiting for MT4 account activation...
                    </div>
                </div>
            </div>

            {/* Current Phase Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                <div className="border-b border-border bg-surface/50 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-text-main">Current Phase</h2>
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted hover:text-text-main transition-colors text-xs font-medium rounded-lg"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Refresh
                    </button>
                </div>

                <div className="overflow-x-auto min-h-[150px]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-[10px] uppercase font-bold border-b border-border">
                                <th rowSpan="2" className="p-4 w-12 text-center border-r border-border/50">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        disabled
                                    />
                                </th>
                                <th rowSpan="2" className="p-3 border-r border-border/50">Account</th>
                                <th rowSpan="2" className="p-3 border-r border-border/50">Plan - Phase</th>
                                <th colSpan="3" className="p-2 text-center border-r border-border/50 bg-background/20 font-bold">Max Daily Loss</th>
                                <th colSpan="3" className="p-2 text-center border-r border-border/50 bg-background/20 font-bold">Max Loss</th>
                                <th colSpan="3" className="p-2 text-center border-r border-border/50 bg-background/20 font-bold">Profit</th>
                                <th colSpan="2" className="p-2 text-center border-r border-border/50 bg-background/20 font-bold">Trading Days</th>
                                <th rowSpan="2" className="p-3 border-r border-border/50">Started</th>
                                <th rowSpan="2" className="p-3 border-r border-border/50">Ended</th>
                                <th rowSpan="2" className="p-3 border-r border-border/50">Status</th>
                                <th rowSpan="2" className="p-3 text-center">Results</th>
                            </tr>
                            <tr className="bg-surface/30 text-text-muted text-[9px] uppercase font-bold border-b border-border">
                                <th className="p-2 border-r border-border/30">Result</th>
                                <th className="p-2 border-r border-border/30">Target</th>
                                <th className="p-2 border-r border-border/50 text-center">%</th>
                                <th className="p-2 border-r border-border/30">Result</th>
                                <th className="p-2 border-r border-border/30">Target</th>
                                <th className="p-2 border-r border-border/50 text-center">%</th>
                                <th className="p-2 border-r border-border/30">Result</th>
                                <th className="p-2 border-r border-border/30">Target</th>
                                <th className="p-2 border-r border-border/50 text-center">%</th>
                                <th className="p-2 border-r border-border/30 text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <HelpCircle className="w-2.5 h-2.5 opacity-50" />
                                        Result
                                        <HelpCircle className="w-2.5 h-2.5 opacity-50" />
                                    </div>
                                </th>
                                <th className="p-2 border-r border-border/50 text-center">Min/Max</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-xs">
                            <tr>
                                <td colSpan="18" className="p-8 text-center text-text-muted italic bg-background/5">
                                    <div className="flex items-center gap-2 justify-center opacity-70">
                                        <Info className="w-3.5 h-3.5" />
                                        No data.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-muted">
                    <div>
                        Showing to of <span className="font-medium text-text-main">0</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden opacity-50">
                            <button className="p-1.5 bg-surface cursor-not-allowed border-r border-border"><ChevronLeft className="w-3.5 h-3.5" /></button>
                            <button className="px-2.5 py-1.5 bg-primary text-background font-bold select-none cursor-default">1</button>
                            <button className="p-1.5 bg-surface cursor-not-allowed border-l border-border"><ChevronRight className="w-3.5 h-3.5" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeDetail;
