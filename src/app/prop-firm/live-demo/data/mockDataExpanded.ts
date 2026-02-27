import { Admin, Bonus, IBNode, NewsArticle, Page, MT5Group } from '../types';

// Mock Admins
export const mockAdmins: Admin[] = [
    { id: '1', name: 'Alex Director', email: 'alex@fxtrusts.com', role: 'super_admin', permissions: ['all'], status: 'active', lastLogin: new Date('2024-03-10T08:30:00'), twoFactorEnabled: true },
    { id: '2', name: 'Sarah Manager', email: 'sarah@fxtrusts.com', role: 'manager', permissions: ['users', 'reports'], status: 'active', lastLogin: new Date('2024-03-10T09:15:00'), twoFactorEnabled: true },
    { id: '3', name: 'Mike Support', email: 'mike@fxtrusts.com', role: 'support', permissions: ['users', 'tickets'], status: 'active', lastLogin: new Date('2024-03-10T07:45:00'), twoFactorEnabled: false },
    { id: '4', name: 'Emma Analyst', email: 'emma@fxtrusts.com', role: 'analyst', permissions: ['reports'], status: 'inactive', lastLogin: new Date('2024-02-28T14:20:00'), twoFactorEnabled: true },
    { id: '5', name: 'David Tech', email: 'david@fxtrusts.com', role: 'manager', permissions: ['settings', 'logs'], status: 'active', lastLogin: new Date('2024-03-09T11:00:00'), twoFactorEnabled: true },
    { id: '6', name: 'Lisa Compliance', email: 'lisa@fxtrusts.com', role: 'manager', permissions: ['kyc', 'users'], status: 'active', lastLogin: new Date('2024-03-10T10:00:00'), twoFactorEnabled: true },
    { id: '7', name: 'James Night', email: 'james@fxtrusts.com', role: 'support', permissions: ['users'], status: 'inactive', lastLogin: new Date('2024-02-15T03:00:00'), twoFactorEnabled: false },
    { id: '8', name: 'Sophie Marketing', email: 'sophie@fxtrusts.com', role: 'manager', permissions: ['content', 'campaigns'], status: 'active', lastLogin: new Date('2024-03-08T16:45:00'), twoFactorEnabled: true },
    { id: '9', name: 'Ryan Risk', email: 'ryan@fxtrusts.com', role: 'manager', permissions: ['risk', 'dealing'], status: 'active', lastLogin: new Date('2024-03-10T06:30:00'), twoFactorEnabled: true },
    { id: '10', name: 'Intern Bob', email: 'bob@fxtrusts.com', role: 'support', permissions: ['read_only'], status: 'inactive', lastLogin: new Date('2024-03-01T09:00:00'), twoFactorEnabled: false },
];

// Mock Bonuses
export const mockBonuses: Bonus[] = [
    { id: '1', name: 'Welcome Bonus 100%', type: 'deposit', amount: 100, percentage: 100, status: 'active', eligibility: 'New Clients', startDate: new Date('2024-01-01'), totalRedeemed: 1250, totalUsers: 5000 },
    { id: '2', name: 'Loyalty Cashback', type: 'cashback', amount: 50, percentage: 5, status: 'active', eligibility: 'VIP Clients', startDate: new Date('2024-01-15'), totalRedeemed: 450, totalUsers: 800 },
    { id: '3', name: 'No Deposit $30', type: 'no_deposit', amount: 30, status: 'paused', eligibility: 'All Clients', startDate: new Date('2023-12-01'), endDate: new Date('2024-02-01'), totalRedeemed: 3000, totalUsers: 10000 },
    { id: '4', name: 'Ramadan Special', type: 'deposit', amount: 50, percentage: 50, status: 'paused', eligibility: 'Islamic Accounts', startDate: new Date('2024-03-10'), totalRedeemed: 0, totalUsers: 2000 },
    { id: '5', name: 'Crypto Booster', type: 'deposit', amount: 200, percentage: 20, status: 'active', eligibility: 'Crypto Traders', startDate: new Date('2024-02-01'), totalRedeemed: 150, totalUsers: 500 },
    { id: '6', name: 'Refer a Friend', type: 'cashback', amount: 50, status: 'active', eligibility: 'All Clients', startDate: new Date('2023-06-01'), totalRedeemed: 5000, totalUsers: 50000 },
    { id: '7', name: 'VIP Upgrade', type: 'loyalty', amount: 0, status: 'active', eligibility: 'High Volume', startDate: new Date('2024-01-01'), totalRedeemed: 25, totalUsers: 100 },
    { id: '8', name: 'Black Friday 2023', type: 'deposit', amount: 500, percentage: 100, status: 'expired', eligibility: 'All Clients', startDate: new Date('2023-11-20'), endDate: new Date('2023-11-30'), totalRedeemed: 8000, totalUsers: 15000 },
];

// Mock IB Tree
export const mockIBTree: IBNode[] = [
    {
        id: 'ib-1', name: 'Global FX Partners', email: 'partners@globalfx.com', level: 1, commissionRate: 15, totalClients: 120, monthlyVolume: 5000000, totalEarned: 45000,
        children: [
            { id: 'ib-1-1', name: 'Asia Trading Group', email: 'asia@trading.com', level: 2, commissionRate: 10, totalClients: 45, monthlyVolume: 2000000, totalEarned: 15000, children: [] },
            { id: 'ib-1-2', name: 'Euro Invest', email: 'euro@invest.com', level: 2, commissionRate: 10, totalClients: 30, monthlyVolume: 1500000, totalEarned: 12000, children: [] }
        ]
    },
    {
        id: 'ib-2', name: 'Top Traders Academy', email: 'info@toptraders.com', level: 1, commissionRate: 12, totalClients: 85, monthlyVolume: 3500000, totalEarned: 28000,
        children: [
            { id: 'ib-2-1', name: 'John Doe Signals', email: 'john@signals.com', level: 2, commissionRate: 8, totalClients: 20, monthlyVolume: 800000, totalEarned: 5000, children: [] },
            { id: 'ib-2-2', name: 'Forex King', email: 'king@forex.com', level: 2, commissionRate: 8, totalClients: 15, monthlyVolume: 600000, totalEarned: 3500, children: [] }
        ]
    },
    {
        id: 'ib-3', name: 'Crypto Influencers', email: 'promo@crypto.com', level: 1, commissionRate: 20, totalClients: 500, monthlyVolume: 12000000, totalEarned: 150000,
        children: []
    }
];

// Mock Pages
export const mockPages: Page[] = [
    { id: '1', title: 'Home Page', slug: '/', content: '...', status: 'published', lastModified: new Date('2024-03-01'), seoTitle: 'Best Forex Broker', seoDescription: 'Trade with the best.' },
    { id: '2', title: 'About Us', slug: '/about', content: '...', status: 'published', lastModified: new Date('2024-02-15'), seoTitle: 'About FXTrusts', seoDescription: 'Learn about us.' },
    { id: '3', title: 'Trading Conditions', slug: '/trading', content: '...', status: 'draft', lastModified: new Date('2024-03-08'), seoTitle: 'Spreads and Swaps', seoDescription: 'Check our conditions.' },
    { id: '4', title: 'Contact Support', slug: '/contact', content: '...', status: 'published', lastModified: new Date('2024-01-10'), seoTitle: 'Contact Us', seoDescription: '24/7 Support.' },
    { id: '5', title: 'Legal Documents', slug: '/legal', content: '...', status: 'published', lastModified: new Date('2023-12-01'), seoTitle: 'Legal', seoDescription: 'Terms and Conditions.' },
    { id: '6', title: 'Education Center', slug: '/education', content: '...', status: 'draft', lastModified: new Date('2024-03-11'), seoTitle: 'Learn Forex', seoDescription: 'Free courses.' },
    { id: '7', title: 'VIP Program', slug: '/vip', content: '...', status: 'draft', lastModified: new Date('2024-03-09'), seoTitle: 'VIP Benefits', seoDescription: 'Exclusive perks.' },
];

// Mock MT5 Groups
export const mockMT5Groups: MT5Group[] = [
    { id: '1', name: 'real\\standard', leverage: '1:500', marginCall: 100, stopOut: 50, commission: 0, swapLong: -5, swapShort: -2, totalAccounts: 1200 },
    { id: '2', name: 'real\\ecn', leverage: '1:200', marginCall: 100, stopOut: 30, commission: 7, swapLong: -2, swapShort: 1, totalAccounts: 450 },
    { id: '3', name: 'demo\\standard', leverage: '1:1000', marginCall: 50, stopOut: 20, commission: 0, swapLong: -5, swapShort: -2, totalAccounts: 5000 },
    { id: '4', name: 'real\\pro', leverage: '1:100', marginCall: 80, stopOut: 40, commission: 3, swapLong: -1, swapShort: 0, totalAccounts: 150 },
    { id: '5', name: 'real\\crypto', leverage: '1:50', marginCall: 100, stopOut: 50, commission: 0.1, swapLong: -10, swapShort: -10, totalAccounts: 800 },
    { id: '6', name: 'demo\\ecn', leverage: '1:200', marginCall: 100, stopOut: 30, commission: 7, swapLong: -2, swapShort: 1, totalAccounts: 2000 },
];

// Mock Campaigns
export const mockCampaigns = [
    { id: '1', name: 'March Madness Deposit', type: 'Email', status: 'Active', sent: 15000, opened: 4500, clicked: 1200, conversions: 150, revenue: 45000 },
    { id: '2', name: 'Reactivation Q1', type: 'SMS', status: 'Completed', sent: 5000, opened: 4800, clicked: 800, conversions: 50, revenue: 12000 },
    { id: '3', name: 'New Crypto Pairs', type: 'Push', status: 'Scheduled', sent: 0, opened: 0, clicked: 0, conversions: 0, revenue: 0 },
    { id: '4', name: 'Webinar Invite', type: 'Email', status: 'Draft', sent: 0, opened: 0, clicked: 0, conversions: 0, revenue: 0 },
    { id: '5', name: 'VIP Exclusive', type: 'Email', status: 'Active', sent: 500, opened: 400, clicked: 200, conversions: 80, revenue: 150000 },
    { id: '6', name: 'App Install Promo', type: 'Push', status: 'Active', sent: 20000, opened: 12000, clicked: 5000, conversions: 1000, revenue: 5000 },
];

// Mock News
export const mockNews: NewsArticle[] = [
    { id: '1', title: 'Market Outlook: EURUSD Breaks Resistance', content: '...', category: 'Analysis', author: 'Chief Analyst', status: 'published', publishedAt: new Date('2024-03-10'), featured: true },
    { id: '2', title: 'Maintenance Scheduled for Sunday', content: '...', category: 'Company', author: 'Admin', status: 'published', publishedAt: new Date('2024-03-09'), featured: false },
    { id: '3', title: 'New Payment Methods Added', content: '...', category: 'Updates', author: 'Payments Team', status: 'draft', featured: false },
    { id: '4', title: 'Crypto Market Crash Analysis', content: '...', category: 'Analysis', author: 'Crypto Expert', status: 'published', publishedAt: new Date('2024-03-08'), featured: true },
    { id: '5', title: 'Holiday Trading Hours', content: '...', category: 'Company', author: 'Support', status: 'draft', publishedAt: new Date('2024-03-25'), featured: false },
    { id: '6', title: 'Interview with CEO', content: '...', category: 'Company', author: 'PR Team', status: 'published', publishedAt: new Date('2024-03-01'), featured: false },
];

// Mock Withdrawals (Transaction subset)
export const mockWithdrawals = [
    { id: 'w-1', clientName: 'John Smith', amount: 500, currency: 'USD', method: 'Bank Wire', status: 'Pending', date: new Date('2024-03-10T10:00:00') },
    { id: 'w-2', clientName: 'Alice Wong', amount: 1200, currency: 'USDT', method: 'Crypto', status: 'Processing', date: new Date('2024-03-10T09:30:00') },
    { id: 'w-3', clientName: 'Bob Jones', amount: 200, currency: 'EUR', method: 'Skrill', status: 'Completed', date: new Date('2024-03-09T15:00:00') },
    { id: 'w-4', clientName: 'Sarah Lee', amount: 5000, currency: 'USD', method: 'Bank Wire', status: 'Rejected', date: new Date('2024-03-08T11:00:00') },
    { id: 'w-5', clientName: 'Mike Brown', amount: 100, currency: 'USD', method: 'Neteller', status: 'Completed', date: new Date('2024-03-08T09:00:00') },
    { id: 'w-6', clientName: 'Emma Davis', amount: 300, currency: 'GBP', method: 'Card', status: 'Pending', date: new Date('2024-03-10T12:00:00') },
    { id: 'w-7', clientName: 'David Wilson', amount: 1500, currency: 'USDT', method: 'Crypto', status: 'Completed', date: new Date('2024-03-07T14:00:00') },
    { id: 'w-8', clientName: 'Lisa Taylor', amount: 800, currency: 'EUR', method: 'Bank Wire', status: 'Processing', date: new Date('2024-03-10T08:00:00') },
];

// Mock Internal Transfers
export const mockInternalTransfers = [
    { id: 't-1', clientName: 'John Smith', from: 'MT5-1001', to: 'Wallet', amount: 100, status: 'Completed', date: new Date('2024-03-10') },
    { id: 't-2', clientName: 'Sarah Lee', from: 'Wallet', to: 'MT5-2005', amount: 500, status: 'Completed', date: new Date('2024-03-10') },
    { id: 't-3', clientName: 'Mike Brown', from: 'MT5-3002', to: 'MT5-3003', amount: 1000, status: 'Pending', date: new Date('2024-03-10') },
    { id: 't-4', clientName: 'Alice Wong', from: 'Wallet', to: 'IB-Wallet', amount: 50, status: 'Completed', date: new Date('2024-03-09') },
    { id: 't-5', clientName: 'Bob Jones', from: 'MT5-4001', to: 'Wallet', amount: 200, status: 'Rejected', date: new Date('2024-03-08') },
];

// Mock Copy Trading
export const mockStrategies = [
    { id: '1', name: 'Safe Growth', provider: 'ProTrader1', return: '+15.4%', copiers: 120, risk: 'Low', fee: '20%' },
    { id: '2', name: 'High Yield Alpha', provider: 'AlphaMaster', return: '+45.2%', copiers: 85, risk: 'High', fee: '30%' },
    { id: '3', name: 'Gold Scalper', provider: 'XAU_King', return: '+8.5%', copiers: 340, risk: 'Medium', fee: '25%' },
    { id: '4', name: 'Crypto Whale', provider: 'BTC_Lord', return: '+120.5%', copiers: 50, risk: 'Very High', fee: '40%' },
    { id: '5', name: 'Steady Income', provider: 'PensionFund', return: '+5.2%', copiers: 800, risk: 'Very Low', fee: '10%' },
    { id: '6', name: 'Forex Sniper', provider: 'SniperFX', return: '+22.1%', copiers: 210, risk: 'Medium', fee: '25%' },
    { id: '7', name: 'Indices Master', provider: 'US30_Pro', return: '+18.9%', copiers: 150, risk: 'Medium', fee: '20%' },
];
