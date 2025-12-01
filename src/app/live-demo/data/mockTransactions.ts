import { Transaction } from '../types';
import { mockClients } from './mockClients';

const paymentMethods = ['Credit Card', 'Bank Transfer', 'Crypto (BTC)', 'Crypto (ETH)', 'Wire Transfer', 'PayPal', 'Skrill', 'Neteller'];
const transactionTypes: Array<'Deposit' | 'Withdrawal' | 'IB Commission' | 'Internal Transfer'> = ['Deposit', 'Withdrawal', 'IB Commission', 'Internal Transfer'];
const statuses: Array<'Completed' | 'Pending' | 'Rejected' | 'Processing'> = ['Completed', 'Pending', 'Rejected', 'Processing'];

const generateTransaction = (index: number): Transaction => {
    const type = transactionTypes[index % transactionTypes.length];
    const client = mockClients[index % mockClients.length];
    const daysAgo = Math.floor(Math.random() * 90);
    const statusRand = Math.random();

    let status: Transaction['status'];
    if (statusRand > 0.8) status = 'Pending';
    else if (statusRand > 0.95) status = 'Rejected';
    else if (statusRand > 0.9) status = 'Processing';
    else status = 'Completed';

    const amount = type === 'IB Commission'
        ? Math.floor(Math.random() * 1000) + 100
        : Math.floor(Math.random() * 50000) + 500;

    return {
        id: `TX${String(index + 10000).padStart(6, '0')}`,
        clientId: client.id,
        clientName: client.name,
        type,
        amount,
        currency: 'USD',
        status,
        paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
        date: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
        notes: status === 'Rejected' ? 'Insufficient funds' : status === 'Pending' ? 'Awaiting approval' : undefined
    };
};

export const mockTransactions: Transaction[] = Array.from({ length: 100 }, (_, i) => generateTransaction(i));
