'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './client.module.css';
import Sidebar from './components/Sidebar';
import ClientHeader from './components/ClientHeader';
import TradingViewWidget from './TradingViewWidget';

// Types for Paper Trading
interface Position {
    id: string;
    symbol: string;
    type: 'buy' | 'sell';
    openPrice: number;
    currentPrice: number;
    volume: number;
    openTime: Date;
    takeProfit: number | null;
    stopLoss: number | null;
    profit: number;
}

interface Trade {
    id: string;
    symbol: string;
    type: 'buy' | 'sell';
    openPrice: number;
    closePrice: number;
    volume: number;
    openTime: Date;
    closeTime: Date;
    profit: number;
}

// Symbol mapping for TradingView
const symbolMapping: { [key: string]: string } = {
    'XAUUSD': 'OANDA:XAUUSD',
    'XAUEUR': 'OANDA:XAUEUR',
    'EURUSD': 'OANDA:EURUSD',
    'GBPUSD': 'OANDA:GBPUSD',
    'USDJPY': 'OANDA:USDJPY',
    'XAGUSD': 'OANDA:XAGUSD',
};

// Pip values for different symbols
const pipValues: { [key: string]: number } = {
    'XAUUSD': 0.01,
    'XAUEUR': 0.01,
    'EURUSD': 0.0001,
    'GBPUSD': 0.0001,
    'USDJPY': 0.01,
    'XAGUSD': 0.001,
};

// Contract sizes
const contractSizes: { [key: string]: number } = {
    'XAUUSD': 100, // 1 lot = 100 oz gold
    'XAUEUR': 100,
    'EURUSD': 100000, // 1 lot = 100,000 units
    'GBPUSD': 100000,
    'USDJPY': 100000,
    'XAGUSD': 5000, // 1 lot = 5000 oz silver
};

// Mock Market Data with live prices
const initialMarketData = [
    { symbol: 'XAUUSD', desc: 'Gold vs US Dollar', sell: 2045.32, buy: 2045.87, change: 0.45, high: 2052.10, low: 2038.50, flag: '🇺🇸' },
    { symbol: 'XAUEUR', desc: 'Gold vs Euro', sell: 1892.15, buy: 1892.68, change: -0.22, high: 1898.40, low: 1885.20, flag: '🇪🇺' },
    { symbol: 'EURUSD', desc: 'Euro vs US Dollar', sell: 1.0842, buy: 1.0845, change: 0.12, high: 1.0862, low: 1.0821, flag: '🇪🇺' },
    { symbol: 'GBPUSD', desc: 'British Pound vs USD', sell: 1.2654, buy: 1.2658, change: -0.08, high: 1.2689, low: 1.2631, flag: '🇬🇧' },
    { symbol: 'USDJPY', desc: 'US Dollar vs Yen', sell: 148.92, buy: 148.96, change: 0.34, high: 149.45, low: 148.12, flag: '🇯🇵' },
    { symbol: 'XAGUSD', desc: 'Silver vs US Dollar', sell: 24.18, buy: 24.23, change: 0.67, high: 24.52, low: 23.95, flag: '🇺🇸' },
];

const socialData = [
    { name: 'Alex Thompson', return: 48.5, copiers: 1250, avatar: 'alex' },
    { name: 'Sarah Chen', return: 42.3, copiers: 980, avatar: 'sarah' },
    { name: 'Michael Brooks', return: 38.7, copiers: 856, avatar: 'michael' },
    { name: 'Emma Wilson', return: 35.2, copiers: 742, avatar: 'emma' },
    { name: 'James Rodriguez', return: 32.8, copiers: 698, avatar: 'james' },
];

const signalsData = [
    { pair: 'GBPUSD', type: 'Buy', target: 1.2720, timeAgo: '2h ago', duration: 'Intraday', description: 'Bullish breakout above resistance at 1.2650.' },
    { pair: 'EURUSD', type: 'Sell', target: 1.0780, timeAgo: '4h ago', duration: 'Swing', description: 'Double top formation confirmed.' },
    { pair: 'XAUUSD', type: 'Buy', target: 2065.00, timeAgo: '6h ago', duration: 'Intraday', description: 'Gold testing support zone.' },
];

export default function ClientDashboardContent() {
    // UI State
    const [activeTab, setActiveTab] = useState<'social' | 'signals'>('social');
    const [bottomTab, setBottomTab] = useState<'positions' | 'history'>('positions');
    const [oneClickTrading, setOneClickTrading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [marketTab, setMarketTab] = useState<'market' | 'sell' | 'buy'>('market');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeSidebarItem, setActiveSidebarItem] = useState('Home');
    const [selectedSymbol, setSelectedSymbol] = useState('XAUUSD');
    const [selectedTimeframe, setSelectedTimeframe] = useState('D');

    // Trading State
    const [marketData, setMarketData] = useState(initialMarketData);
    const [volume, setVolume] = useState(0.01);
    const [takeProfit, setTakeProfit] = useState<string>('');
    const [stopLoss, setStopLoss] = useState<string>('');

    // Paper Trading State
    const [balance, setBalance] = useState(10000);
    const [positions, setPositions] = useState<Position[]>([]);
    const [tradeHistory, setTradeHistory] = useState<Trade[]>([]);

    // Get current symbol data
    const currentSymbolData = marketData.find(m => m.symbol === selectedSymbol) || marketData[0];

    // Calculate total profit from open positions
    const totalProfit = positions.reduce((sum, pos) => sum + pos.profit, 0);
    const equity = balance + totalProfit;

    // Simulate price movements
    useEffect(() => {
        const interval = setInterval(() => {
            setMarketData(prev => prev.map(item => {
                const pipValue = pipValues[item.symbol] || 0.0001;
                const randomChange = (Math.random() - 0.5) * pipValue * 10;
                const newSell = +(item.sell + randomChange).toFixed(item.sell < 100 ? 4 : 2);
                const spread = item.buy - item.sell;
                const newBuy = +(newSell + spread).toFixed(item.buy < 100 ? 4 : 2);

                return {
                    ...item,
                    sell: newSell,
                    buy: newBuy,
                    change: +((newSell - item.sell) / item.sell * 100 + item.change).toFixed(2)
                };
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Update position profits when prices change
    useEffect(() => {
        setPositions(prev => prev.map(pos => {
            const symbolData = marketData.find(m => m.symbol === pos.symbol);
            if (!symbolData) return pos;

            const currentPrice = pos.type === 'buy' ? symbolData.sell : symbolData.buy;
            const priceDiff = pos.type === 'buy'
                ? currentPrice - pos.openPrice
                : pos.openPrice - currentPrice;

            const contractSize = contractSizes[pos.symbol] || 100000;
            const profit = priceDiff * pos.volume * contractSize;

            // Check TP/SL
            if (pos.takeProfit && pos.type === 'buy' && currentPrice >= pos.takeProfit) {
                closePosition(pos.id, 'TP Hit');
            } else if (pos.takeProfit && pos.type === 'sell' && currentPrice <= pos.takeProfit) {
                closePosition(pos.id, 'TP Hit');
            } else if (pos.stopLoss && pos.type === 'buy' && currentPrice <= pos.stopLoss) {
                closePosition(pos.id, 'SL Hit');
            } else if (pos.stopLoss && pos.type === 'sell' && currentPrice >= pos.stopLoss) {
                closePosition(pos.id, 'SL Hit');
            }

            return { ...pos, currentPrice, profit };
        }));
    }, [marketData]);

    const filteredMarketData = marketData.filter(item =>
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle symbol click
    const handleSymbolClick = (symbol: string) => {
        setSelectedSymbol(symbol);
    };

    // Handle timeframe click
    const handleTimeframeClick = (timeframe: string) => {
        setSelectedTimeframe(timeframe);
    };

    // Open a new position
    const openPosition = (type: 'buy' | 'sell') => {
        const symbolData = marketData.find(m => m.symbol === selectedSymbol);
        if (!symbolData) return;

        const openPrice = type === 'buy' ? symbolData.buy : symbolData.sell;
        const tp = takeProfit ? parseFloat(takeProfit) : null;
        const sl = stopLoss ? parseFloat(stopLoss) : null;

        const newPosition: Position = {
            id: `pos_${Date.now()}`,
            symbol: selectedSymbol,
            type,
            openPrice,
            currentPrice: openPrice,
            volume,
            openTime: new Date(),
            takeProfit: tp,
            stopLoss: sl,
            profit: 0
        };

        setPositions(prev => [...prev, newPosition]);
        setTakeProfit('');
        setStopLoss('');
    };

    // Close a position
    const closePosition = (positionId: string, reason?: string) => {
        const position = positions.find(p => p.id === positionId);
        if (!position) return;

        const symbolData = marketData.find(m => m.symbol === position.symbol);
        if (!symbolData) return;

        const closePrice = position.type === 'buy' ? symbolData.sell : symbolData.buy;
        const priceDiff = position.type === 'buy'
            ? closePrice - position.openPrice
            : position.openPrice - closePrice;

        const contractSize = contractSizes[position.symbol] || 100000;
        const profit = priceDiff * position.volume * contractSize;

        // Add to history
        const trade: Trade = {
            id: `trade_${Date.now()}`,
            symbol: position.symbol,
            type: position.type,
            openPrice: position.openPrice,
            closePrice,
            volume: position.volume,
            openTime: position.openTime,
            closeTime: new Date(),
            profit
        };

        setTradeHistory(prev => [trade, ...prev]);
        setBalance(prev => prev + profit);
        setPositions(prev => prev.filter(p => p.id !== positionId));
    };

    // Close all positions
    const closeAllPositions = () => {
        positions.forEach(pos => closePosition(pos.id));
    };

    return (
        <div className={styles.dashboard}>
            {/* Header - Full Width at Top */}
            {/* Header - Full Width at Top */}
            <ClientHeader
                sidebarCollapsed={sidebarCollapsed}
                setSidebarCollapsed={setSidebarCollapsed}
                balance={balance}
                equity={equity}
                totalProfit={totalProfit}
            />

            {/* Body - Sidebar + Main Content */}
            <div className={styles.body}>
                {/* Left Sidebar */}
                <Sidebar
                    collapsed={sidebarCollapsed}
                    activeItem={activeSidebarItem}
                    onItemClick={setActiveSidebarItem}
                    onLogout={() => console.log('Logout clicked')}
                />

                {/* Main Content Area */}
                <main className={styles.mainContent}>
                    {/* Workspace */}
                    <div className={styles.workspace}>
                        {/* Market Watch Panel */}
                        <div className={styles.marketWatch}>
                            <div className={styles.panelHeader}>
                                <div className={styles.searchBox}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search symbols..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={styles.searchInput}
                                    />
                                </div>
                            </div>

                            <div className={styles.marketTabs}>
                                <button
                                    className={`${styles.marketTab} ${marketTab === 'market' ? styles.activeTab : ''}`}
                                    onClick={() => setMarketTab('market')}
                                >
                                    Market
                                </button>
                                <button
                                    className={`${styles.marketTab} ${marketTab === 'sell' ? styles.activeTab : ''}`}
                                    onClick={() => setMarketTab('sell')}
                                >
                                    Sell
                                </button>
                                <button
                                    className={`${styles.marketTab} ${marketTab === 'buy' ? styles.activeTab : ''}`}
                                    onClick={() => setMarketTab('buy')}
                                >
                                    Buy
                                </button>
                            </div>

                            <div className={styles.marketList}>
                                {filteredMarketData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.marketItem} ${selectedSymbol === item.symbol ? styles.marketItemActive : ''}`}
                                        onClick={() => handleSymbolClick(item.symbol)}
                                    >
                                        <div className={styles.marketItemLeft}>
                                            <span className={styles.marketFlag}>{item.flag}</span>
                                            <div className={styles.marketInfo}>
                                                <span className={styles.marketSymbol}>{item.symbol}</span>
                                                <span className={styles.marketDesc}>{item.desc}</span>
                                            </div>
                                        </div>
                                        <div className={styles.marketItemRight}>
                                            <div className={styles.marketPrices}>
                                                <span className={styles.sellPrice}>{item.sell.toFixed(item.sell < 100 ? 4 : 2)}</span>
                                                <span className={styles.buyPrice}>{item.buy.toFixed(item.buy < 100 ? 4 : 2)}</span>
                                            </div>
                                            <div className={styles.marketChange}>
                                                <span className={item.change >= 0 ? styles.changeUp : styles.changeDown}>
                                                    {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(2)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chart + Trading Area */}
                        <div className={styles.chartArea}>
                            {/* Trading Controls Bar */}
                            <div className={styles.tradingBar}>
                                <div className={styles.tradingBarLeft}>
                                    <label className={styles.toggleSwitch}>
                                        <input
                                            type="checkbox"
                                            checked={oneClickTrading}
                                            onChange={() => setOneClickTrading(!oneClickTrading)}
                                        />
                                        <span className={styles.toggleSlider}></span>
                                    </label>
                                    <span className={styles.toggleLabel}>1-Click Trading</span>
                                </div>

                                <div className={styles.tradingBoxes}>
                                    {/* Sell Box */}
                                    <div className={styles.sellBox} onClick={() => openPosition('sell')}>
                                        <div className={styles.tradeBoxHeader}>
                                            <span className={styles.tradeBoxLabel}>Sell</span>
                                        </div>
                                        <div className={styles.tradeBoxPrice}>
                                            {currentSymbolData.sell.toFixed(currentSymbolData.sell < 100 ? 4 : 2)}
                                        </div>
                                    </div>

                                    {/* Buy Box */}
                                    <div className={styles.buyBox} onClick={() => openPosition('buy')}>
                                        <div className={styles.tradeBoxHeader}>
                                            <span className={styles.tradeBoxLabel}>Buy</span>
                                        </div>
                                        <div className={styles.tradeBoxPrice}>
                                            {currentSymbolData.buy.toFixed(currentSymbolData.buy < 100 ? 4 : 2)}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.tradingBarRight}>
                                    <div className={styles.volumeInput}>
                                        <input
                                            type="number"
                                            value={volume}
                                            onChange={(e) => setVolume(parseFloat(e.target.value) || 0.01)}
                                            step="0.01"
                                            min="0.01"
                                        />
                                    </div>

                                    <div className={styles.tpslCompact}>
                                        <div className={styles.tpslField}>
                                            <span>TP:</span>
                                            <input
                                                type="number"
                                                placeholder="—"
                                                value={takeProfit}
                                                onChange={(e) => setTakeProfit(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.tpslField}>
                                            <span>SL:</span>
                                            <input
                                                type="number"
                                                placeholder="—"
                                                value={stopLoss}
                                                onChange={(e) => setStopLoss(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.chartTimeframes}>
                                        <button
                                            className={`${styles.tfBtn} ${selectedTimeframe === '1' ? styles.tfBtnActive : ''}`}
                                            onClick={() => handleTimeframeClick('1')}
                                        >1m</button>
                                        <button
                                            className={`${styles.tfBtn} ${selectedTimeframe === '5' ? styles.tfBtnActive : ''}`}
                                            onClick={() => handleTimeframeClick('5')}
                                        >5m</button>
                                        <button
                                            className={`${styles.tfBtn} ${selectedTimeframe === '60' ? styles.tfBtnActive : ''}`}
                                            onClick={() => handleTimeframeClick('60')}
                                        >1H</button>
                                        <button
                                            className={`${styles.tfBtn} ${selectedTimeframe === 'D' ? styles.tfBtnActive : ''}`}
                                            onClick={() => handleTimeframeClick('D')}
                                        >1D</button>
                                    </div>

                                    <label className={styles.tvToggle}>
                                        <span className={styles.tvLabel}>TV</span>
                                        <span className={styles.tvIcon}>📊</span>
                                    </label>
                                </div>
                            </div>

                            {/* TradingView Widget Container */}
                            <div className={styles.chartContainer}>
                                <TradingViewWidget
                                    symbol={symbolMapping[selectedSymbol] || `OANDA:${selectedSymbol}`}
                                    interval={selectedTimeframe}
                                />
                            </div>

                            {/* Positions Panel */}
                            <div className={styles.positionsPanel}>
                                <div className={styles.positionsTabs}>
                                    <button
                                        className={`${styles.positionsTab} ${bottomTab === 'positions' ? styles.activeTab : ''}`}
                                        onClick={() => setBottomTab('positions')}
                                    >
                                        Positions ({positions.length})
                                    </button>
                                    <button
                                        className={`${styles.positionsTab} ${bottomTab === 'history' ? styles.activeTab : ''}`}
                                        onClick={() => setBottomTab('history')}
                                    >
                                        History ({tradeHistory.length})
                                    </button>
                                    {positions.length > 0 && (
                                        <button className={styles.closeAllBtn} onClick={closeAllPositions}>
                                            Close All
                                        </button>
                                    )}
                                </div>

                                <div className={styles.positionsContent}>
                                    {bottomTab === 'positions' ? (
                                        positions.length === 0 ? (
                                            <div className={styles.emptyPositions}>
                                                <span>No open positions</span>
                                                <span className={styles.emptyHint}>Click BUY or SELL to open a trade</span>
                                            </div>
                                        ) : (
                                            <table className={styles.positionsTable}>
                                                <thead>
                                                    <tr>
                                                        <th>Symbol</th>
                                                        <th>Type</th>
                                                        <th>Volume</th>
                                                        <th>Open Price</th>
                                                        <th>Current</th>
                                                        <th>TP</th>
                                                        <th>SL</th>
                                                        <th>Profit</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {positions.map(pos => (
                                                        <tr key={pos.id}>
                                                            <td>{pos.symbol}</td>
                                                            <td className={pos.type === 'buy' ? styles.buyType : styles.sellType}>
                                                                {pos.type.toUpperCase()}
                                                            </td>
                                                            <td>{pos.volume.toFixed(2)}</td>
                                                            <td>{pos.openPrice.toFixed(pos.openPrice < 100 ? 4 : 2)}</td>
                                                            <td>{pos.currentPrice.toFixed(pos.currentPrice < 100 ? 4 : 2)}</td>
                                                            <td>{pos.takeProfit?.toFixed(2) || '-'}</td>
                                                            <td>{pos.stopLoss?.toFixed(2) || '-'}</td>
                                                            <td className={pos.profit >= 0 ? styles.profitPositive : styles.profitNegative}>
                                                                {pos.profit >= 0 ? '+' : ''}${pos.profit.toFixed(2)}
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className={styles.closeBtn}
                                                                    onClick={() => closePosition(pos.id)}
                                                                >
                                                                    ✕
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )
                                    ) : (
                                        tradeHistory.length === 0 ? (
                                            <div className={styles.emptyPositions}>
                                                <span>No trade history</span>
                                            </div>
                                        ) : (
                                            <table className={styles.positionsTable}>
                                                <thead>
                                                    <tr>
                                                        <th>Symbol</th>
                                                        <th>Type</th>
                                                        <th>Volume</th>
                                                        <th>Open</th>
                                                        <th>Close</th>
                                                        <th>Profit</th>
                                                        <th>Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tradeHistory.map(trade => (
                                                        <tr key={trade.id}>
                                                            <td>{trade.symbol}</td>
                                                            <td className={trade.type === 'buy' ? styles.buyType : styles.sellType}>
                                                                {trade.type.toUpperCase()}
                                                            </td>
                                                            <td>{trade.volume.toFixed(2)}</td>
                                                            <td>{trade.openPrice.toFixed(trade.openPrice < 100 ? 4 : 2)}</td>
                                                            <td>{trade.closePrice.toFixed(trade.closePrice < 100 ? 4 : 2)}</td>
                                                            <td className={trade.profit >= 0 ? styles.profitPositive : styles.profitNegative}>
                                                                {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                                                            </td>
                                                            <td>{new Date(trade.closeTime).toLocaleTimeString()}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Social/Signals Panel */}
                        <div className={styles.socialPanel}>
                            <div className={styles.socialTabs}>
                                <button
                                    className={`${styles.socialTab} ${activeTab === 'social' ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab('social')}
                                >
                                    Social
                                </button>
                                <button
                                    className={`${styles.socialTab} ${activeTab === 'signals' ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab('signals')}
                                >
                                    Signals
                                </button>
                            </div>

                            <div className={styles.socialContent}>
                                {activeTab === 'social' ? (
                                    <div className={styles.tradersList}>
                                        {socialData.map((trader, index) => (
                                            <div key={index} className={styles.traderCard}>
                                                <Image
                                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${trader.avatar}`}
                                                    alt={trader.name}
                                                    width={48}
                                                    height={48}
                                                    className={styles.traderAvatar}
                                                />
                                                <div className={styles.traderInfo}>
                                                    <span className={styles.traderName}>{trader.name}</span>
                                                    <span className={styles.traderCopiers}>{trader.copiers} copiers</span>
                                                </div>
                                                <div className={styles.traderReturn}>
                                                    <span className={styles.returnValue}>+{trader.return}%</span>
                                                    <button className={styles.copyBtn}>Copy</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className={styles.signalsList}>
                                        {signalsData.map((signal, index) => (
                                            <div key={index} className={styles.signalCard}>
                                                <div className={styles.signalHeader}>
                                                    <span className={`${styles.signalType} ${signal.type === 'Buy' ? styles.signalBuy : styles.signalSell}`}>
                                                        {signal.type === 'Buy' ? '▲' : '▼'} {signal.type}
                                                    </span>
                                                    <span className={styles.signalPair}>{signal.pair}</span>
                                                    <span className={styles.signalDuration}>{signal.duration}</span>
                                                </div>
                                                <div className={styles.signalBody}>
                                                    <div className={styles.signalTarget}>
                                                        <span className={styles.targetLabel}>Target:</span>
                                                        <span className={styles.targetValue}>{signal.target}</span>
                                                    </div>
                                                    <span className={styles.signalTime}>{signal.timeAgo}</span>
                                                </div>
                                                <p className={styles.signalDesc}>{signal.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Account Stats Footer */}
                    <div className={styles.accountFooter}>
                        <div className={styles.footerStat}>
                            <span className={styles.footerStatLabel}>Balance</span>
                            <span className={styles.footerStatValue}>${balance.toFixed(2)}</span>
                        </div>
                        <div className={styles.footerStat}>
                            <span className={styles.footerStatLabel}>Credit</span>
                            <span className={styles.footerStatValue}>$0.00</span>
                        </div>
                        <div className={styles.footerStat}>
                            <span className={styles.footerStatLabel}>Open P/L</span>
                            <span className={`${styles.footerStatValue} ${totalProfit >= 0 ? styles.profitPositive : styles.profitNegative}`}>
                                ${totalProfit.toFixed(2)}
                            </span>
                        </div>
                        <div className={styles.footerStat}>
                            <span className={styles.footerStatLabel}>Equity</span>
                            <span className={styles.footerStatValue}>${equity.toFixed(2)}</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
