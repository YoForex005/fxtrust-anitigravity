import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    RefreshCw,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Image as ImageIcon,
    List,
    Upload,
    Edit2,
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Link as LinkIcon,
    Code,
    FileText,
    Smile
} from 'lucide-react';

const UserDashboardTemplates = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        previewImage: null,
        template: ''
    });

    // Mock Data based on screenshot
    const templates = [
        { id: 1, title: 'Test', previewImage: null, hasBar: false },
        { id: 2, title: 'Test 1', previewImage: 'broken', hasBar: false },
        { id: 3, title: 'xasdasdasd', previewImage: null, hasBar: true },
        { id: 4, title: 'xasdasdasd', previewImage: null, hasBar: true },
        { id: 5, title: 'xasdasdasd', previewImage: null, hasBar: true },
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

    const handleReset = () => {
        setFormData({
            title: '',
            previewImage: null,
            template: ''
        });
    };

    const handleSubmit = () => {
        console.log('Template Data:', formData);
        alert('Template Created!');
        setIsCreateMode(false);
        handleReset();
    };

    // If in create mode, show the create form
    if (isCreateMode) {
        return (
            <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <h1 className="text-2xl font-bold text-text-main">Title</h1>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Create Form Card */}
                <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                    {/* Card Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/50">
                        <h2 className="text-lg font-medium text-text-main">Create</h2>
                        <button
                            onClick={() => setIsCreateMode(false)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-all font-bold shadow-lg shadow-[#5B7DBD]/20 text-sm"
                        >
                            <List className="w-4 h-4" />
                            List
                        </button>
                    </div>

                    {/* Form Body */}
                    <div className="p-8 space-y-8">
                        {/* Title Field */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium">
                                <span className="text-danger mr-1">*</span>Title
                            </label>
                            <div className="relative flex items-center max-w-xl">
                                <div className="absolute left-4 text-text-muted pointer-events-none">
                                    <Edit2 className="w-4 h-4" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                />
                            </div>
                        </div>

                        {/* Preview Image Upload */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                <span className="text-danger mr-1">*</span>Preview image
                            </label>
                            <div className="max-w-xl">
                                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center bg-background hover:bg-surface/30 transition-colors cursor-pointer">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <Upload className="w-12 h-12 text-text-muted/40" />
                                        </div>
                                        <button className="flex items-center gap-2 px-6 py-2 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-colors font-medium shadow-md text-sm">
                                            <Upload className="w-4 h-4" />
                                            Browse
                                        </button>
                                        <p className="text-text-muted text-sm">Or drag file here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Template / Rich Text Editor */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                Template
                            </label>
                            <div className="max-w-full">
                                {/* Toolbar */}
                                <div className="border border-border rounded-t-lg bg-surface/50 p-2 flex flex-wrap items-center gap-1">
                                    <select className="bg-background border border-border rounded px-2 py-1 text-xs text-text-main focus:outline-none focus:border-primary">
                                        <option>Normal</option>
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                    </select>
                                    <div className="w-px h-6 bg-border mx-1" />
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Bold">
                                        <Bold className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Italic">
                                        <Italic className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Underline">
                                        <Underline className="w-4 h-4" />
                                    </button>
                                    <div className="w-px h-6 bg-border mx-1" />
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Align Left">
                                        <AlignLeft className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Align Center">
                                        <AlignCenter className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Align Right">
                                        <AlignRight className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Justify">
                                        <AlignJustify className="w-4 h-4" />
                                    </button>
                                    <div className="w-px h-6 bg-border mx-1" />
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Link">
                                        <LinkIcon className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Image">
                                        <ImageIcon className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Code">
                                        <Code className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="File">
                                        <FileText className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-surface-lighter rounded text-text-muted hover:text-text-main transition-colors" title="Emoji">
                                        <Smile className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Editor Area */}
                                <textarea
                                    value={formData.template}
                                    onChange={(e) => setFormData({ ...formData, template: e.target.value })}
                                    className="w-full min-h-[400px] border-x border-b border-border rounded-b-lg p-4 text-sm text-text-main bg-background focus:outline-none focus:border-primary transition-colors resize-none font-mono"
                                    placeholder="Start typing your template content here..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Footer */}
                    <div className="flex items-center justify-start gap-3 px-8 py-6 border-t border-border bg-surface/30">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-surface border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Reset
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 px-8 py-2.5 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-all font-bold shadow-lg shadow-[#5B7DBD]/20"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Otherwise show the list view
    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Title</h1>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar Buttons */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded text-text-muted hover:text-white hover:bg-surface-lighter transition-colors text-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>

                <button
                    onClick={() => setIsCreateMode(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm"
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
                                        checked={selectedRows.length === templates.length && templates.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Title</th>
                                <th className="p-4 font-medium">Preview Image</th>
                                <th className="p-4 font-medium">Preview</th>
                                <th className="p-4 font-medium text-center">Action</th>
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
                                        <a href="#" className="text-primary hover:underline decoration-dotted underline-offset-4 font-medium">
                                            {item.title}
                                        </a>
                                    </td>
                                    <td className="p-4">
                                        {item.previewImage === 'broken' && (
                                            <div className="w-8 h-8 flex items-center justify-center bg-surface-lighter rounded border border-border text-text-muted">
                                                <ImageIcon className="w-4 h-4 opacity-50" />
                                            </div>
                                        )}
                                        {item.hasBar && (
                                            <div className="w-8 h-1.5 bg-surface-lighter rounded-full border border-border/50 shadow-sm relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <span className="text-text-muted">Preview</span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-3 text-text-muted">
                                            <button className="hover:text-primary transition-colors" title="Edit">
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button className="hover:text-danger transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
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

export default UserDashboardTemplates;
