import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';

const users = [
    { id: 1, name: 'Alex Thompson', email: 'alex.t@gmail.com', status: 'Active', plan: '100k Challenge', date: '2024-03-10', profit: '+$2,450' },
    { id: 2, name: 'Sarah Jen', email: 'sarah.j@yahoo.com', status: 'Review', plan: '50k Challenge', date: '2024-03-09', profit: '-$120' },
    { id: 3, name: 'Michael Chen', email: 'm.chen@outlook.com', status: 'Banned', plan: '200k Challenge', date: '2024-03-08', profit: '-$4,500' },
    { id: 4, name: 'Jessica Lee', email: 'jess.lee@gmail.com', status: 'Active', plan: '100k Challenge', date: '2024-03-08', profit: '+$890' },
    { id: 5, name: 'David Smith', email: 'd.smith@proton.me', status: 'Active', plan: '10k Challenge', date: '2024-03-07', profit: '+$1,100' },
];

const RecentUsersTable = () => {
    return (
        <div className="glass-panel rounded-lg overflow-hidden border border-border">
            <div className="p-6 border-b border-border flex justify-between items-center">
                <h2 className="text-lg font-bold text-text-main">Latest Registrations</h2>
                <button className="text-sm text-primary hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-surface-lighter text-text-dim text-xs uppercase tracking-wider font-semibold border-b border-border">
                        <tr>
                            <th className="p-4 font-medium">User</th>
                            <th className="p-4 font-medium">Plan</th>
                            <th className="p-4 font-medium">Joined</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium">Profit</th>
                            <th className="p-4 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-surface-lighter/50 transition-colors duration-200">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-text-main">{user.name}</p>
                                            <p className="text-xs text-text-muted">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-text-muted">{user.plan}</td>
                                <td className="p-4 text-sm text-text-muted">{user.date}</td>
                                <td className="p-4">
                                    <span className={cn(
                                        "px-2 py-1 rounded-full text-xs font-medium border",
                                        user.status === 'Active' ? "bg-success/10 text-success border-success/20" :
                                            user.status === 'Review' ? "bg-warning/10 text-warning border-warning/20" :
                                                "bg-danger/10 text-danger border-danger/20"
                                    )}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className={cn(
                                    "p-4 text-sm font-medium",
                                    user.profit.startsWith('+') ? "text-success" : "text-danger"
                                )}>
                                    {user.profit}
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-text-muted hover:text-text-main p-1 rounded-lg hover:bg-surface">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentUsersTable;
