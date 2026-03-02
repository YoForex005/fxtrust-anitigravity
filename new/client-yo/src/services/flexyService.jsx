// PropFirm API Service - Connects to PropFirm-Backend for MT5 account management
// Backend runs on port 3001, proxied through /api by Vite

const API_BASE = '/api';

// Helper for API calls with error handling
async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');

    // Add Authorization header if token exists
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            ...options,
            headers
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`API Error: ${response.status} - ${text}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`API call failed: ${endpoint}`, error);
        throw error;
    }
}

export const flexyService = {
    // =========== Health & Status ===========

    checkHealth: async () => {
        return apiCall('/health');
    },

    // =========== Account Operations ===========

    // Get account details (balance, equity, etc.)
    getAccountDetails: async (login) => {
        const data = await apiCall(`/mt5/account/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get account');
        return data.account;
    },

    // Get all created accounts
    getAccounts: async () => {
        // Use the unified profile endpoint which includes challenges
        const data = await apiCall('/client/profile');
        // data is { id, name, ..., challenges: [] }

        if (!data || !data.challenges) return [];

        // Map Prisma challenges to Dashboard account format
        return data.challenges.map(c => ({
            Login: c.serverLogin || `CH-${c.id}`, // Fallback if no server login yet
            login: c.serverLogin || `CH-${c.id}`,
            Balance: c.equity || c.initialBalance,
            balance: c.equity || c.initialBalance,
            Equity: c.equity || c.initialBalance,
            equity: c.equity || c.initialBalance,
            Created: c.createdAt,
            created: c.createdAt,
            AccountType: c.accountType?.toLowerCase() || 'evaluation',
            accountType: c.accountType?.toLowerCase() || 'evaluation',
            status: c.status
        }));
    },

    // Create a Demo MT5 Account
    createFreeTrial: async (userDetails) => {
        const data = await apiCall('/mt5/create-demo', {
            method: 'POST',
            body: JSON.stringify({
                name: userDetails.name,
                email: userDetails.email,
                leverage: userDetails.leverage || 100,
                balance: userDetails.balance || 100000,
                accountType: userDetails.accountType || 'free-trial'
            })
        });

        if (!data.success) throw new Error(data.message || 'Account creation failed');

        return {
            login: data.account.login,
            password: data.account.password,
            investorPassword: data.account.investorPassword,
            server: data.account.serverAddress,
            platform: 'MT5',
            leverage: data.account.leverage,
            balance: data.account.balance
        };
    },

    // =========== Trading Data ===========

    // Get trade history (closed trades)
    getTradeHistory: async (login, from = null, to = null) => {
        let endpoint = `/mt5/trades/${login}`;
        const params = new URLSearchParams();
        if (from) params.append('from', from);
        if (to) params.append('to', to);
        if (params.toString()) endpoint += `?${params.toString()}`;

        const data = await apiCall(endpoint);
        if (!data.success) throw new Error(data.message || 'Failed to get trades');
        return data.trades;
    },

    // Get currently open positions
    getOpenPositions: async (login) => {
        const data = await apiCall(`/mt5/open-trades/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get positions');
        return {
            positions: data.positions,
            totalProfit: data.total_profit,
            totalSwap: data.total_swap,
            count: data.count
        };
    },

    // Get trading statistics (win rate, profit factor, etc.)
    getTradeStats: async (login) => {
        const data = await apiCall(`/mt5/trade-stats/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get stats');
        return {
            balance: data.balance,
            equity: data.equity,
            ...data.statistics
        };
    },

    // =========== Analytics ===========

    // Get drawdown metrics (daily and total)
    getDrawdownMetrics: async (login) => {
        const data = await apiCall(`/analytics/drawdown/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get drawdown');
        return data.metrics;
    },

    // Get equity curve for charting
    getEquityCurve: async (login) => {
        const data = await apiCall(`/analytics/equity-curve/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get equity curve');
        return data.points;
    },

    // Get enhanced analytics (time, symbol, streaks)
    getEnhancedAnalytics: async (login) => {
        const data = await apiCall(`/analytics/enhanced/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get enhanced analytics');
        return data.analytics;
    },

    // =========== Account Management ===========

    // Deposit balance to account
    depositBalance: async (login, amount, comment = 'Deposit') => {
        const data = await apiCall('/mt5/deposit', {
            method: 'POST',
            body: JSON.stringify({ login, amount, comment })
        });
        if (!data.success) throw new Error(data.message || 'Deposit failed');
        return data.transaction;
    },

    // Disable trading on account
    disableTrading: async (login) => {
        const data = await apiCall('/mt5/disable-trading', {
            method: 'POST',
            body: JSON.stringify({ login })
        });
        if (!data.success) throw new Error(data.message || 'Failed to disable trading');
        return data;
    },

    // Enable trading on account
    enableTrading: async (login) => {
        const data = await apiCall('/mt5/enable-trading', {
            method: 'POST',
            body: JSON.stringify({ login })
        });
        if (!data.success) throw new Error(data.message || 'Failed to enable trading');
        return data;
    },

    // Reset account password
    resetPassword: async (login, password = null, type = 'main') => {
        const data = await apiCall('/mt5/reset-password', {
            method: 'POST',
            body: JSON.stringify({ login, password, type })
        });
        if (!data.success) throw new Error(data.message || 'Password reset failed');
        return data; // Returns { success, login, password, type }
    },

    // Change account group
    changeGroup: async (login, group) => {
        const data = await apiCall('/mt5/change-group', {
            method: 'POST',
            body: JSON.stringify({ login, group })
        });
        if (!data.success) throw new Error(data.message || 'Group change failed');
        return data;
    },

    // Journal APIs
    syncJournal: async (login) => {
        const data = await apiCall(`/journal/sync/${login}`, { method: 'GET' });
        if (!data.success) throw new Error(data.message || 'Failed to sync journal');
        return data;
    },

    updateJournalEntry: async (ticket, entryData) => {
        const data = await apiCall(`/journal/entry/${ticket}`, {
            method: 'POST',
            body: JSON.stringify(entryData)
        });
        if (!data.success) throw new Error(data.message || 'Failed to update journal entry');
        return data;
    },

    getJournalAnalytics: async (login) => {
        const data = await apiCall(`/journal/analytics/${login}`, { method: 'GET' });
        if (!data.success) throw new Error(data.message || 'Failed to fetch analytics');
        return data;
    },

    // =========== Wallet / Payout API ===========

    getWalletHistory: async (login) => {
        const data = await apiCall(`/wallet/history/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get wallet history');
        return data;
    },

    requestPayout: async (login, amount, method) => {
        const data = await apiCall('/wallet/payout-request', {
            method: 'POST',
            body: JSON.stringify({ login, amount, method })
        });
        if (!data.success) throw new Error(data.message || 'Payout request failed');
        return data;
    },

    // =========== Risk Management ===========

    getRiskSettings: async (login) => {
        const data = await apiCall(`/rules/settings/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get risk settings');
        return data.riskSettings;
    },

    updateRiskSettings: async (login, settings) => {
        const data = await apiCall('/rules/settings', {
            method: 'POST',
            body: JSON.stringify({ login, settings })
        });
        if (!data.success) throw new Error(data.message || 'Failed to update risk settings');
        return data.riskSettings;
    },

    // =========== Symbols & Live Market Data ===========

    // Get all available trading symbols
    getSymbols: async () => {
        try {
            const data = await apiCall('/symbols');
            if (!data.success) {
                console.warn('Symbols API returned unsuccessful');
                return [];
            }
            return data.symbols || [];
        } catch (error) {
            console.error('Failed to get symbols:', error);
            return []; // Return empty instead of throwing
        }
    },

    // Get detailed info for a specific symbol
    getSymbolInfo: async (symbol) => {
        const data = await apiCall(`/symbols/${encodeURIComponent(symbol)}`);
        if (!data.success) throw new Error(data.message || 'Failed to get symbol info');
        return data.info;
    },

    // Get real-time tick (bid/ask) for a symbol
    getSymbolTick: async (symbol) => {
        const data = await apiCall(`/symbols/${encodeURIComponent(symbol)}/tick`);
        if (!data.success) throw new Error(data.message || 'Failed to get tick');
        return data.tick;
    },

    // Get ticks for multiple symbols at once
    getBatchTicks: async (symbols) => {
        try {
            const data = await apiCall('/symbols/batch-ticks', {
                method: 'POST',
                body: JSON.stringify({ symbols })
            });
            if (!data.success) {
                console.warn('Batch ticks API returned unsuccessful');
                return [];
            }
            return data.ticks || [];
        } catch (error) {
            console.error('Failed to get batch ticks:', error);
            return []; // Return empty instead of throwing
        }
    },

    // Get live positions with real-time prices (Tickets)
    getLivePositions: async (login) => {
        const data = await apiCall(`/live-positions/${login}`);
        if (!data.success) throw new Error(data.message || 'Failed to get live positions');
        return {
            positions: data.positions,
            totalProfit: data.totalProfit,
            totalSwap: data.totalSwap,
            count: data.count,
            timestamp: data.timestamp
        };
    }
};

export default flexyService;
