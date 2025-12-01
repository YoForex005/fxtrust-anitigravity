// View types for navigation
export type ViewType =
    | 'dashboard'
    | 'content-pages' | 'content-banners' | 'content-seo'
    | 'user-clients' | 'user-admins' | 'user-kyc'
    | 'bonus-active' | 'bonus-history'
    | 'ib-tree' | 'ib-commissions'
    | 'group-mt5-create' | 'group-mt5-change' | 'group-spreads-add' | 'group-spreads-decrease'
    | 'transaction-deposits' | 'transaction-withdrawals' | 'transaction-internal'
    | 'marketing-email' | 'marketing-campaigns' | 'marketing-affiliate'
    | 'copy-trading'
    | 'apis'
    | 'send-email'
    | 'news'
    | 'notification-alerts' | 'notification-push'
    | 'rewards-loyalty' | 'rewards-points'
    | 'risk-exposure' | 'risk-pnl'
    | 'tickets';

export type ClientViewType =
    | 'client-dashboard'
    | 'client-trading'
    | 'client-wallet'
    | 'client-accounts'
    | 'client-profile';

// Client types
export interface Client {
    id: string;
    name: string;
    email: string;
    country: string;
    registrationDate: Date;
    status: 'active' | 'suspended' | 'pending';
    kycStatus: 'verified' | 'pending' | 'rejected' | 'not_submitted';
    balance: number;
    totalDeposits: number;
    totalWithdrawals: number;
    lifetimeValue: number;
    riskLevel: 'low' | 'medium' | 'high';
    lastActivity: Date;
    segment: 'vip' | 'regular' | 'new' | 'inactive';
}

// Transaction types
export interface Transaction {
    id: string;
    clientId: string;
    clientName: string;
    type: 'Deposit' | 'Withdrawal' | 'IB Commission' | 'Internal Transfer';
    amount: number;
    currency: string;
    status: 'Completed' | 'Pending' | 'Rejected' | 'Processing';
    paymentMethod: string;
    date: Date;
    notes?: string;
}

// Bonus types
export interface Bonus {
    id: string;
    name: string;
    type: 'deposit' | 'no_deposit' | 'cashback' | 'loyalty';
    amount: number;
    percentage?: number;
    status: 'active' | 'paused' | 'expired';
    eligibility: string;
    startDate: Date;
    endDate?: Date;
    totalRedeemed: number;
    totalUsers: number;
}

// IB types
export interface IBNode {
    id: string;
    name: string;
    email: string;
    level: number;
    commissionRate: number;
    totalClients: number;
    monthlyVolume: number;
    totalEarned: number;
    children: IBNode[];
}

// Ticket types
export interface Ticket {
    id: string;
    clientId: string;
    clientName: string;
    subject: string;
    category: 'technical' | 'financial' | 'account' | 'general';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'open' | 'in_progress' | 'waiting_client' | 'resolved' | 'closed';
    assignedTo?: string;
    createdAt: Date;
    lastUpdated: Date;
    messages: TicketMessage[];
}

export interface TicketMessage {
    id: string;
    author: string;
    authorType: 'client' | 'admin';
    message: string;
    timestamp: Date;
    attachments?: string[];
}

// News types
export interface NewsArticle {
    id: string;
    title: string;
    content: string;
    category: string;
    author: string;
    status: 'published' | 'draft';
    publishedAt?: Date;
    featured: boolean;
}

// Page types
export interface Page {
    id: string;
    title: string;
    slug: string;
    content: string;
    status: 'published' | 'draft';
    lastModified: Date;
    seoTitle?: string;
    seoDescription?: string;
}

// Admin types
export interface Admin {
    id: string;
    name: string;
    email: string;
    role: 'super_admin' | 'manager' | 'support' | 'analyst';
    permissions: string[];
    status: 'active' | 'inactive';
    lastLogin: Date;
    twoFactorEnabled: boolean;
}

// MT5 Group types
export interface MT5Group {
    id: string;
    name: string;
    leverage: string;
    marginCall: number;
    stopOut: number;
    commission: number;
    swapLong: number;
    swapShort: number;
    totalAccounts: number;
}
