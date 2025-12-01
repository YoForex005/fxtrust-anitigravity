'use client';

import GenericTableView from '../shared/GenericTableView';
import GenericFormView from '../shared/GenericFormView';
import { mockMT5Groups } from '../../data/mockDataExpanded';

export function MT5GroupsView() {
    return (
        <GenericTableView
            title="MT5 Groups"
            subtitle="Manage trading groups and conditions"
            data={mockMT5Groups}
            columns={[
                { header: 'Group Name', accessor: 'name', className: 'font-mono' },
                { header: 'Leverage', accessor: 'leverage' },
                { header: 'Stop Out', accessor: (item) => `${item.stopOut}%` },
                { header: 'Commission', accessor: (item) => `$${item.commission}` },
                { header: 'Accounts', accessor: 'totalAccounts' }
            ]}
            actions={[
                { label: 'Configure', onClick: () => { }, variant: 'secondary' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Sync Groups"
        />
    );
}

export function CreateGroupView() {
    return (
        <GenericFormView
            title="Create MT5 Group"
            subtitle="Configure new trading group parameters"
            fields={[
                { name: 'groupName', label: 'Group Name', type: 'text', placeholder: 'real\\new_group' },
                { name: 'leverage', label: 'Leverage', type: 'select', options: [{ label: '1:100', value: '100' }, { label: '1:500', value: '500' }] },
                { name: 'currency', label: 'Currency', type: 'select', options: [{ label: 'USD', value: 'USD' }, { label: 'EUR', value: 'EUR' }] },
                { name: 'marginCall', label: 'Margin Call Level (%)', type: 'number', defaultValue: 100 },
                { name: 'stopOut', label: 'Stop Out Level (%)', type: 'number', defaultValue: 50 },
                { name: 'enableSwap', label: 'Enable Swaps', type: 'checkbox', defaultValue: true }
            ]}
            onSubmit={(data) => console.log(data)}
        />
    );
}

export function SpreadsView() {
    const spreads = [
        { id: 1, symbol: 'EURUSD', group: 'real\standard', spread: 12, markup: 2 },
        { id: 2, symbol: 'GBPUSD', group: 'real\standard', spread: 15, markup: 2 },
        { id: 3, symbol: 'XAUUSD', group: 'real\ecn', spread: 25, markup: 0 },
    ];

    return (
        <GenericTableView
            title="Spread Management"
            subtitle="Configure spread markups per symbol and group"
            data={spreads}
            columns={[
                { header: 'Symbol', accessor: 'symbol', className: 'font-bold' },
                { header: 'Group', accessor: 'group' },
                { header: 'Base Spread (pts)', accessor: 'spread' },
                { header: 'Markup (pts)', accessor: 'markup' }
            ]}
            actions={[
                { label: 'Edit', onClick: () => { } }
            ]}
        />
    );
}
