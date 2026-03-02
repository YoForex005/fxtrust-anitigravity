import React, { useState, useEffect } from 'react';
import { X, Save, Smile, Frown, Meh, Tag, Image as ImageIcon, Briefcase } from 'lucide-react';
import { flexyService } from '../../../services/flexyService';

const TradeDetailModal = ({ trade, onClose, onUpdate }) => {
    const [note, setNote] = useState(trade?.note || '');
    const [mood, setMood] = useState(trade?.mood || '');
    const [strategy, setStrategy] = useState(trade?.strategy || '');
    const [tags, setTags] = useState(trade?.tags ? trade.tags.join(', ') : '');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (trade) {
            setNote(trade.note || '');
            setMood(trade.mood || '');
            setStrategy(trade.strategy || '');
            setTags(trade.tags ? trade.tags.join(', ') : '');
        }
    }, [trade]);

    const handleSave = async () => {
        setLoading(true);
        try {
            const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);
            const updatedData = {
                login: trade.Login,
                note,
                mood,
                strategy,
                tags: tagsArray
            };

            await flexyService.updateJournalEntry(trade.Ticket, updatedData);
            onUpdate({ ...trade, ...updatedData }); // Optimistic update
            onClose();
        } catch (error) {
            console.error('Failed to save journal entry', error);
            // Handle error (toast)
        } finally {
            setLoading(false);
        }
    };

    if (!trade) return null;

    const profit = parseFloat(trade.Profit);
    const isWin = profit >= 0;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className={`px-6 py-4 flex items-center justify-between border-b border-gray-100 dark:border-white/5 ${isWin ? 'bg-green-50 dark:bg-green-500/10' : 'bg-red-50 dark:bg-red-500/10'}`}>
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold ${isWin ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400'}`}>
                            {isWin ? '+' : '-'}${Math.abs(profit).toFixed(2)}
                        </div>
                        <div>
                            <h3 className="text-gray-900 dark:text-white font-bold text-lg">{trade.Symbol}</h3>
                            <p className="text-sm text-gray-500 dark:text-[#9ca3af]">{trade.Type === '0' ? 'Buy' : 'Sell'} {trade.Volume} lots • {new Date(trade.Time).toLocaleString()}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400 dark:text-white/60 hover:text-gray-900 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Strategy & Emotion */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
                                <Smile size={14} /> Emotional State
                            </label>
                            <div className="flex gap-2">
                                {['confident', 'neutral', 'anxious', 'fearful', 'greedy'].map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => setMood(m)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all capitalize
                                            ${mood === m
                                                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                                                : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-[#9ca3af] hover:bg-gray-100 dark:hover:bg-white/10'
                                            }`}
                                    >
                                        {m === 'confident' && '😎'} {m === 'neutral' && '😐'} {m === 'anxious' && '😰'} {m === 'fearful' && '😨'} {m === 'greedy' && '🤑'} <span className="ml-1">{m}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
                                <Briefcase size={14} /> Strategy
                            </label>
                            <select
                                value={strategy}
                                onChange={(e) => setStrategy(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-[#1d1d1f] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                            >
                                <option value="">Select Strategy...</option>
                                <option value="Breakout">Breakout</option>
                                <option value="Reversal">Reversal</option>
                                <option value="Trend Following">Trend Following</option>
                                <option value="Scalping">Scalping</option>
                                <option value="News">News Trading</option>
                            </select>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
                            Note / Analysis
                        </label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="What happened? Why did you take this trade?"
                            className="w-full h-32 bg-gray-50 dark:bg-[#1d1d1f] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
                            <Tag size={14} /> Tags (Comma separated)
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="e.g. Asia Session, Impulse, FOMO"
                            className="w-full bg-gray-50 dark:bg-[#1d1d1f] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-white/10 flex justify-end gap-3 bg-gray-50/50 dark:bg-[#1d1d1f]/50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-xl text-sm font-medium text-gray-500 dark:text-[#9ca3af] hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="px-6 py-2 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Saving...' : <><Save size={16} /> Save Journal</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TradeDetailModal;
