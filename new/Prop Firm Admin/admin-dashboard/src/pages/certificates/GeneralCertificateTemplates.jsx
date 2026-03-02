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
// import NewCertificateTemplateModal from '../../components/modals/NewCertificateTemplateModal';

const GeneralCertificateTemplates = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);

    // Mock Data based on screenshot
    const templates = [
        {
            id: 1,
            pngFile: 'placeholder.png',
            ttfFile: '',
            name: 'Osama',
            creator: 'Funded',
            author: 'Funded',
            subject: 'Funded',
            keywords: 'Funded',
            fontName: 'helvetica',
            signature: 'Steve loten',
            created: '1 year ago',
            createdAt: '2024-08-28 12:48:09',
            usernameX: 900,
            usernameY: 1150,
            usernameWidth: 2200
        }
    ];

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

            {/* <NewCertificateTemplateModal
                isOpen={isNewModalOpen}
                onClose={() => setIsNewModalOpen(false)}
            /> */}

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">General Certificate Templates</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Create templates to generate certificates for contest winners, top traders of the month, payout confirmations, etc.</span>
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
                    onClick={() => navigate('/certificate-templates/general/new')}
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
                                <th className="p-4 font-medium whitespace-nowrap">Username Width</th>
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
                                        <div className="w-20 h-28 bg-white border border-border rounded flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                            {/* Simulated Preview */}
                                            <div className="absolute inset-0 p-1 flex flex-col gap-0.5 opacity-50">
                                                <div className="h-1 bg-slate-300 w-full rounded-sm"></div>
                                                <div className="h-1 bg-slate-300 w-3/4 rounded-sm"></div>
                                                <div className="h-1 bg-slate-300 w-1/2 rounded-sm mt-2"></div>
                                                <div className="bg-green-600 w-4 h-2 rounded absolute bottom-1 right-1"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-muted">{item.ttfFile || '-'}</td>
                                    <td className="p-4 text-text-main">{item.name}</td>
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
                                    <td className="p-4 text-text-muted">{item.usernameWidth}</td>
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

export default GeneralCertificateTemplates;
