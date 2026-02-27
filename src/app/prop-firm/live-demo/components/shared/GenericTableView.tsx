'use client';

import { useState } from 'react';
import styles from '../../demo.module.css';
import filterStyles from '../../styles/filters.module.css';

interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    className?: string;
}

interface Action<T> {
    label: string;
    onClick: (item: T) => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    icon?: React.ReactNode;
}

interface Filter {
    key: string;
    label: string;
    options: { label: string; value: string }[];
}

export interface SummaryCardData {
    label: string;
    value: string | number;
    trend?: string;
    trendUp?: boolean;
    icon?: React.ReactNode;
}

interface GenericTableViewProps<T> {
    title: string;
    subtitle?: string;
    data: T[];
    columns: Column<T>[];
    actions?: Action<T>[];
    filters?: Filter[];
    summaryCards?: SummaryCardData[];
    searchPlaceholder?: string;
    onSearch?: (query: string) => void;
    onNewItem?: () => void;
    newItemLabel?: string;
}

export default function GenericTableView<T extends { id: string | number }>({
    title,
    subtitle,
    data,
    columns,
    actions,
    filters,
    summaryCards,
    searchPlaceholder = 'Search...',
    onSearch,
    onNewItem,
    newItemLabel = 'Add New'
}: GenericTableViewProps<T>) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter logic
    const filteredData = data.filter(item => {
        // Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesSearch = Object.values(item as any).some(val =>
                String(val).toLowerCase().includes(query)
            );
            if (!matchesSearch) return false;
        }

        // Filters
        for (const [key, value] of Object.entries(activeFilters)) {
            if (value && String((item as any)[key]) !== value) {
                return false;
            }
        }

        return true;
    });

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <div>
                    <h1 className={styles.viewTitle}>{title}</h1>
                    {subtitle && <p className={styles.viewSubtitle}>{subtitle}</p>}
                </div>
                {onNewItem && (
                    <button className={styles.primaryButton} onClick={onNewItem}>
                        <span className={styles.buttonIcon}>+</span>
                        {newItemLabel}
                    </button>
                )}
            </div>

            {summaryCards && (
                <div className={styles.summaryGrid}>
                    {summaryCards.map((card, idx) => (
                        <div key={idx} className={styles.summaryCard} style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className={styles.summaryContent}>
                                <span className={styles.summaryLabel}>{card.label}</span>
                                <div className={styles.summaryValueRow}>
                                    <span className={styles.summaryValue}>{card.value}</span>
                                    {card.trend && (
                                        <span className={`${styles.summaryTrend} ${card.trendUp ? styles.trendUp : styles.trendDown}`}>
                                            {card.trendUp ? '↑' : '↓'} {card.trend}
                                        </span>
                                    )}
                                </div>
                            </div>
                            {card.icon && <div className={styles.summaryIcon}>{card.icon}</div>}
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.filterBar}>
                <div className={styles.searchWrapper}>
                    <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input
                        type="text"
                        placeholder={searchPlaceholder}
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            onSearch?.(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>

                <div className={filterStyles.filterGroup}>
                    {filters?.map(filter => (
                        <div key={filter.key} className={filterStyles.filterItem}>
                            <select
                                className={filterStyles.filterSelect}
                                value={activeFilters[filter.key] || ''}
                                onChange={(e) => {
                                    setActiveFilters(prev => ({
                                        ...prev,
                                        [filter.key]: e.target.value
                                    }));
                                    setCurrentPage(1);
                                }}
                            >
                                <option value="">{filter.label}: All</option>
                                <option disabled>──────────</option>
                                {filter.options.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.tableCard}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className={col.className}>{col.header}</th>
                            ))}
                            {actions && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item, idx) => (
                                <tr key={item.id} style={{ animationDelay: `${idx * 50}ms` }} className={styles.tableRow}>
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className={col.className}>
                                            {typeof col.accessor === 'function'
                                                ? col.accessor(item)
                                                : (item[col.accessor] as React.ReactNode)}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td>
                                            <div className={styles.actionButtons}>
                                                {actions.map((action, actionIdx) => (
                                                    <button
                                                        key={actionIdx}
                                                        className={`${styles.actionButton} ${styles[action.variant || 'ghost']}`}
                                                        onClick={() => action.onClick(item)}
                                                        title={action.label}
                                                    >
                                                        {action.icon || action.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (actions ? 1 : 0)} className={styles.emptyState}>
                                    <div className={styles.emptyStateContent}>
                                        <span className={styles.emptyStateIcon}>🔍</span>
                                        <h3>No items found</h3>
                                        <p>Try adjusting your search or filters</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <span className={styles.pageInfo}>
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
                    </span>
                    <div className={styles.pageControls}>
                        <button
                            className={styles.pageButton}
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => p - 1)}
                        >
                            ←
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className={styles.pageButton}
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => p + 1)}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
