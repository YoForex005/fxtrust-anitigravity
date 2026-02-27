import { Ticket } from '../types';

export const mockTickets: Ticket[] = [
    {
        id: 'TK-1001',
        clientId: 'CL1000',
        clientName: 'John Smith',
        subject: 'Unable to withdraw funds',
        category: 'financial',
        priority: 'high',
        status: 'in_progress',
        assignedTo: 'Sarah Johnson',
        createdAt: new Date('2024-11-28T10:30:00'),
        lastUpdated: new Date('2024-11-28T15:45:00'),
        messages: [
            {
                id: 'MSG-1',
                author: 'John Smith',
                authorType: 'client',
                message: 'I have been trying to withdraw $5,000 for the past 2 days but keep getting an error message. Can you help?',
                timestamp: new Date('2024-11-28T10:30:00')
            },
            {
                id: 'MSG-2',
                author: 'Sarah Johnson',
                authorType: 'admin',
                message: 'Hello John, I apologize for the inconvenience. Could you please provide the exact error message you\'re seeing?',
                timestamp: new Date('2024-11-28T11:15:00')
            },
            {
                id: 'MSG-3',
                author: 'John Smith',
                authorType: 'client',
                message: 'It says "Withdrawal limit exceeded". But I haven\'t withdrawn anything this month.',
                timestamp: new Date('2024-11-28T12:00:00')
            },
            {
                id: 'MSG-4',
                author: 'Sarah Johnson',
                authorType: 'admin',
                message: 'Thank you for that information. I\'m checking your account limits now. I\'ll get back to you within the hour.',
                timestamp: new Date('2024-11-28T12:15:00')
            }
        ]
    },
    {
        id: 'TK-1002',
        clientId: 'CL1005',
        clientName: 'Emma Williams',
        subject: 'API connection timeout',
        category: 'technical',
        priority: 'urgent',
        status: 'open',
        createdAt: new Date('2024-11-30T14:20:00'),
        lastUpdated: new Date('2024-11-30T14:20:00'),
        messages: [
            {
                id: 'MSG-5',
                author: 'Emma Williams',
                authorType: 'client',
                message: 'My trading bot keeps timing out when connecting to your API. This is causing me to miss trades!',
                timestamp: new Date('2024-11-30T14:20:00')
            }
        ]
    },
    {
        id: 'TK-1003',
        clientId: 'CL1012',
        clientName: 'Michael Brown',
        subject: 'Question about KYC documents',
        category: 'account',
        priority: 'medium',
        status: 'waiting_client',
        assignedTo: 'Alex Chen',
        createdAt: new Date('2024-11-27T09:00:00'),
        lastUpdated: new Date('2024-11-29T16:30:00'),
        messages: [
            {
                id: 'MSG-6',
                author: 'Michael Brown',
                authorType: 'client',
                message: 'What documents do I need to submit for KYC verification?',
                timestamp: new Date('2024-11-27T09:00:00')
            },
            {
                id: 'MSG-7',
                author: 'Alex Chen',
                authorType: 'admin',
                message: 'You need: 1) Government-issued photo ID, 2) Proof of address (utility bill), 3) Selfie with ID. Please upload these in your account settings.',
                timestamp: new Date('2024-11-27T10:30:00')
            },
            {
                id: 'MSG-8',
                author: 'Michael Brown',
                authorType: 'client',
                message: 'Thanks! Can I use a bank statement for proof of address?',
                timestamp: new Date('2024-11-28T14:00:00')
            },
            {
                id: 'MSG-9',
                author: 'Alex Chen',
                authorType: 'admin',
                message: 'Yes, a bank statement from the last 3 months is acceptable. Please ensure your name and address are clearly visible.',
                timestamp: new Date('2024-11-29T09:15:00')
            }
        ]
    },
    {
        id: 'TK-1004',
        clientId: 'CL1020',
        clientName: 'Lisa Garcia',
        subject: 'Bonus not credited',
        category: 'financial',
        priority: 'medium',
        status: 'resolved',
        assignedTo: 'Sarah Johnson',
        createdAt: new Date('2024-11-25T11:00:00'),
        lastUpdated: new Date('2024-11-26T15:00:00'),
        messages: [
            {
                id: 'MSG-10',
                author: 'Lisa Garcia',
                authorType: 'client',
                message: 'I made a deposit of $1,000 but didn\'t receive the 20% welcome bonus.',
                timestamp: new Date('2024-11-25T11:00:00')
            },
            {
                id: 'MSG-11',
                author: 'Sarah Johnson',
                authorType: 'admin',
                message: 'Let me check your account. One moment please.',
                timestamp: new Date('2024-11-25T11:30:00')
            },
            {
                id: 'MSG-12',
                author: 'Sarah Johnson',
                authorType: 'admin',
                message: 'I\'ve manually credited the $200 bonus to your account. It should appear within 5 minutes. Apologies for the delay!',
                timestamp: new Date('2024-11-25T12:00:00')
            },
            {
                id: 'MSG-13',
                author: 'Lisa Garcia',
                authorType: 'client',
                message: 'Received it, thank you!',
                timestamp: new Date('2024-11-25T12:05:00')
            }
        ]
    },
    {
        id: 'TK-1005',
        clientId: 'CL1033',
        clientName: 'David Martinez',
        subject: 'How to use copy trading feature?',
        category: 'general',
        priority: 'low',
        status: 'resolved',
        assignedTo: 'Mike Thompson',
        createdAt: new Date('2024-11-24T16:00:00'),
        lastUpdated: new Date('2024-11-25T10:00:00'),
        messages: [
            {
                id: 'MSG-14',
                author: 'David Martinez',
                authorType: 'client',
                message: 'I\'m interested in copy trading. How does it work?',
                timestamp: new Date('2024-11-24T16:00:00')
            },
            {
                id: 'MSG-15',
                author: 'Mike Thompson',
                authorType: 'admin',
                message: 'Copy trading allows you to automatically copy trades from experienced traders. Go to the Copy Trading section, browse master traders, and click "Follow" to start copying their trades. You can set your investment amount and risk level.',
                timestamp: new Date('2024-11-25T09:00:00')
            },
            {
                id: 'MSG-16',
                author: 'David Martinez',
                authorType: 'client',
                message: 'Perfect, that\'s exactly what I needed. Thanks!',
                timestamp: new Date('2024-11-25T10:00:00')
            }
        ]
    }
];
