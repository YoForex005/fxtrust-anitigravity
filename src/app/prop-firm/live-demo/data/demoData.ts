export interface Client {
    id: string;
    name: string;
    email: string;
    status: 'Active' | 'Pending' | 'Rejected';
    kycStatus: 'Approved' | 'Pending' | 'Required';
    registeredDate: string;
    balance: number;
    documentsCount: number;
}

export interface Transaction {
    id: string;
    type: 'Deposit' | 'Withdrawal' | 'IB Commission';
    amount: number;
    date: string;
    status: 'Completed' | 'Pending' | 'Failed';
    method?: string;
}

export interface LoginEvent {
    id: string;
    clientName: string;
    email: string;
    ipAddress: string;
    device: string;
    loginAt: string;
}

export const demoClients: Client[] = [
    { id: '1', name: 'John Anderson', email: 'john@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-01-15', balance: 25000, documentsCount: 0 },
    { id: '2', name: 'Sarah Martinez', email: 'sarah.m@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-02-20', balance: 18500, documentsCount: 0 },
    { id: '3', name: 'Michael Chen', email: 'mchen@example.com', status: 'Pending', kycStatus: 'Pending', registeredDate: '2024-11-28', balance: 0, documentsCount: 2 },
    { id: '4', name: 'Emma Thompson', email: 'emma.t@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-03-10', balance: 42000, documentsCount: 0 },
    { id: '5', name: 'David Kim', email: 'dkim@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-01-22', balance: 31200, documentsCount: 0 },
    { id: '6', name: 'Lisa Wang', email: 'lwang@example.com', status: 'Pending', kycStatus: 'Pending', registeredDate: '2024-11-30', balance: 0, documentsCount: 1 },
    { id: '7', name: 'James Wilson', email: 'jwilson@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-04-05', balance: 15800, documentsCount: 0 },
    { id: '8', name: 'Maria Garcia', email: 'mgarcia@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-02-14', balance: 28900, documentsCount: 0 },
    { id: '9', name: 'Robert Taylor', email: 'rtaylor@example.com', status: 'Rejected', kycStatus: 'Required', registeredDate: '2024-11-25', balance: 0, documentsCount: 0 },
    { id: '10', name: 'Sophie Brown', email: 'sbrown@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-05-18', balance: 22400, documentsCount: 0 },
    { id: '11', name: 'Ahmed Hassan', email: 'ahassan@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-06-22', balance: 19700, documentsCount: 0 },
    { id: '12', name: 'Nina Patel', email: 'npatel@example.com', status: 'Pending', kycStatus: 'Pending', registeredDate: '2024-11-29', balance: 0, documentsCount: 3 },
    { id: '13', name: 'Carlos Rodriguez', email: 'crodriguez@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-07-08', balance: 35600, documentsCount: 0 },
    { id: '14', name: 'Yuki Tanaka', email: 'ytanaka@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-08-12', balance: 27300, documentsCount: 0 },
    { id: '15', name: 'Alex Johnson', email: 'ajohnson@example.com', status: 'Active', kycStatus: 'Approved', registeredDate: '2024-09-03', balance: 21100, documentsCount: 0 },
];

export const demoTransactions: Transaction[] = [
    { id: 't1', type: 'Deposit', amount: 5000, date: '2024-12-01T09:30:00', status: 'Completed', method: 'USDT' },
    { id: 't2', type: 'Deposit', amount: 2500, date: '2024-12-01T10:15:00', status: 'Completed', method: 'BTC' },
    { id: 't3', type: 'Withdrawal', amount: 1200, date: '2024-12-01T11:45:00', status: 'Completed', method: 'Bank Transfer' },
    { id: 't4', type: 'Deposit', amount: 3800, date: '2024-12-01T13:20:00', status: 'Completed', method: 'Card' },
    { id: 't5', type: 'IB Commission', amount: 450, date: '2024-12-01T14:00:00', status: 'Completed' },
    { id: 't6', type: 'Deposit', amount: 7500, date: '2024-11-30T16:30:00', status: 'Completed', method: 'USDT' },
    { id: 't7', type: 'Withdrawal', amount: 2000, date: '2024-11-30T09:00:00', status: 'Completed', method: 'USDT' },
    { id: 't8', type: 'IB Commission', amount: 680, date: '2024-11-29T10:00:00', status: 'Completed' },
];

export const demoLoginHistory: LoginEvent[] = [
    { id: 'l1', clientName: 'John Anderson', email: 'john@example.com', ipAddress: '203.163.244.215', device: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', loginAt: '12/1/2025, 1:58:49 PM' },
    { id: 'l2', clientName: 'Emma Thompson', email: 'emma.t@example.com', ipAddress: '192.168.1.105', device: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', loginAt: '12/1/2025, 11:23:15 AM' },
    { id: 'l3', clientName: 'David Kim', email: 'dkim@example.com', ipAddress: '45.123.87.92', device: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X)', loginAt: '12/1/2025, 9:45:22 AM' },
    { id: 'l4', clientName: 'Sarah Martinez', email: 'sarah.m@example.com', ipAddress: '89.234.156.78', device: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', loginAt: '11/30/2024, 5:12:38 PM' },
    { id: 'l5', clientName: 'Sophie Brown', email: 'sbrown@example.com', ipAddress: '172.16.254.1', device: 'Mozilla/5.0 (X11; Linux x86_64)', loginAt: '11/30/2024, 2:33:09 PM' },
];
