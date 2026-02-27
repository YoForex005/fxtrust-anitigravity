import { Client } from '../types';

const firstNames = ['John', 'Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'James', 'Maria', 'Robert', 'Jennifer', 'William', 'Linda', 'Richard', 'Patricia', 'Thomas', 'Elizabeth', 'Christopher', 'Barbara', 'Daniel', 'Susan'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
const countries = ['United States', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Canada', 'Australia', 'Japan', 'Singapore', 'UAE', 'Netherlands', 'Sweden', 'Norway', 'Switzerland'];

const generateClient = (index: number): Client => {
    const firstName = firstNames[index % firstNames.length];
    const lastName = lastNames[Math.floor(index / firstNames.length) % lastNames.length];
    const daysAgo = Math.floor(Math.random() * 365);
    const statusRand = Math.random();
    const kycRand = Math.random();
    const balance = Math.floor(Math.random() * 100000);
    const deposits = Math.floor(Math.random() * 500000);
    const withdrawals = Math.floor(deposits * 0.6);

    return {
        id: `CL${String(index + 1000).padStart(4, '0')}`,
        name: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@example.com`,
        country: countries[index % countries.length],
        registrationDate: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
        status: statusRand > 0.9 ? 'suspended' : statusRand > 0.8 ? 'pending' : 'active',
        kycStatus: kycRand > 0.8 ? 'verified' : kycRand > 0.6 ? 'pending' : kycRand > 0.4 ? 'rejected' : 'not_submitted',
        balance,
        totalDeposits: deposits,
        totalWithdrawals: withdrawals,
        lifetimeValue: deposits - withdrawals,
        riskLevel: balance > 50000 ? 'high' : balance > 20000 ? 'medium' : 'low',
        lastActivity: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        segment: deposits > 100000 ? 'vip' : daysAgo < 30 ? 'new' : daysAgo > 180 ? 'inactive' : 'regular'
    };
};

export const mockClients: Client[] = Array.from({ length: 50 }, (_, i) => generateClient(i));
