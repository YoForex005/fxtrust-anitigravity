import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    RefreshCw,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    FileImage
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const ChallengeCertificateTemplates = () => {
    // Mock Data based on screenshot
    const templates = [
        {
            id: 1,
            pngFile: 'certificate-preview.png',
            ttfFile: '',
            name: 'Faisal Khan',
            creator: 'FundedScale',
            author: 'FundedScale',
            subject: 'FundedScale',
            keywords: 'FundedScale',
            fontName: 'helvetica',
            signature: 'Steve loten',
            created: '1 year ago',
            createdAt: '2024-12-05 16:24:24',
            usernameX: 900,
            usernameY: 1150,
            usernameWidth: 2200 // Assumed based on previous view, cut off in screenshot but typical
        }
    ];

    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(templates.map(t => t.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">Challenge Certificate Templates</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Create templates to automatically generate certificates confirming challenge completion.</span>
                </div>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline mt-1">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted font-medium rounded-lg hover:bg-surface-lighter transition-colors text-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>

                <button
                    onClick={() => navigate('/certificate-templates/challenge-completion/new')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#5d6bb3] text-white font-bold rounded-lg hover:bg-[#4d5999] transition-colors text-sm shadow-lg shadow-primary/20"
                >
                    <Plus className="w-4 h-4" />
                    New
                </button>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={templates.length > 0 && selectedRows.length === templates.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium whitespace-nowrap">Png Template File</th>
                                <th className="p-4 font-medium whitespace-nowrap">Ttf File</th>
                                <th className="p-4 font-medium whitespace-nowrap">Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">Creator</th>
                                <th className="p-4 font-medium whitespace-nowrap">Author</th>
                                <th className="p-4 font-medium whitespace-nowrap">Subject</th>
                                <th className="p-4 font-medium whitespace-nowrap">Keywords</th>
                                <th className="p-4 font-medium whitespace-nowrap">Font Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">Signature</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created At</th>
                                <th className="p-4 font-medium whitespace-nowrap">Username X</th>
                                <th className="p-4 font-medium whitespace-nowrap">Username Y</th>
                                <th className="p-4 font-medium whitespace-nowrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {templates.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="w-48 h-28 bg-[#1e1e1e] border-4 border-[#c5a666] rounded flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                            {/* Simulated Detail Certificate Preview */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#c5a666] p-2 text-center">
                                                <div className="text-[6px] uppercase tracking-widest mb-1">Certificate of Completion</div>
                                                <div className="text-xl font-serif text-white mb-1">Scoopy</div>
                                                <div className="text-[4px] text-gray-400">Scoopy Has been rewarded</div>
                                                <div className="text-[4px] text-gray-400">69000$ by MorningStarRohit</div>
                                                <div className="absolute bottom-2 left-2 w-4 h-[1px] bg-[#c5a666]"></div>
                                                <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-[#c5a666]"></div>
                                                <div className="absolute bottom-2 w-3 h-3 rounded-full border border-[#c5a666] flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-[#c5a666] rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-muted">{item.ttfFile || '-'}</td>
                                    <td className="p-4 text-text-main max-w-[100px] break-words">{item.name}</td>
                                    <td className="p-4 text-text-muted">{item.creator}</td>
                                    <td className="p-4 text-text-muted">{item.author}</td>
                                    <td className="p-4 text-text-muted">{item.subject}</td>
                                    <td className="p-4 text-text-muted">{item.keywords}</td>
                                    <td className="p-4 text-text-muted">{item.fontName}</td>
                                    <td className="p-4 text-text-muted">
                                        <div className="flex flex-col">
                                            <span>{item.signature}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-muted whitespace-nowrap">{item.created}</td>
                                    <td className="p-4 text-text-muted max-w-[100px] leading-tight">
                                        {item.createdAt}
                                    </td>
                                    <td className="p-4 text-text-muted">{item.usernameX}</td>
                                    <td className="p-4 text-text-muted">{item.usernameY}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2 text-text-muted">
                                            <button className="hover:text-primary transition-colors" title="Edit">
                                                <Pencil className="w-3 h-3" />
                                            </button>
                                            <button className="hover:text-danger transition-colors" title="Delete">
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{templates.length}</span> of <span className="font-medium text-text-main">{templates.length}</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden">
                            <button className="p-2 hover:bg-surface transition-colors border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                            <button className="p-2 hover:bg-surface transition-colors border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCertificateTemplates;
