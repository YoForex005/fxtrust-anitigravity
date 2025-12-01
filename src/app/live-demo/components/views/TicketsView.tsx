'use client';

import { useState } from 'react';
import styles from '../../demo.module.css';
import Modal from '../Modal';
import { mockTickets } from '../../data/mockTickets';
import { Ticket } from '../../types';

export default function TicketsView() {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [filter, setFilter] = useState<'all' | 'open' | 'in_progress' | 'waiting_client' | 'resolved'>('all');
    const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high' | 'urgent'>('all');
    const [newMessage, setNewMessage] = useState('');

    const filteredTickets = mockTickets.filter(ticket => {
        if (filter !== 'all' && ticket.status !== filter) return false;
        if (priorityFilter !== 'all' && ticket.priority !== priorityFilter) return false;
        return true;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'open': return '#3B82F6';
            case 'in_progress': return '#F59E0B';
            case 'waiting_client': return '#8B5CF6';
            case 'resolved': return '#10B981';
            case 'closed': return '#64748B';
            default: return '#64748B';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'urgent': return '#DC2626';
            case 'high': return '#EF4444';
            case 'medium': return '#F59E0B';
            case 'low': return '#64748B';
            default: return '#64748B';
        }
    };

    const handleSendMessage = () => {
        if (!newMessage.trim() || !selectedTicket) return;

        // Simulate adding message
        console.log('Sending message:', newMessage);
        setNewMessage('');
    };

    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <h1 className={styles.viewTitle}>Support Tickets</h1>
                <div className={styles.viewActions}>
                    <button className={styles.btnPrimary}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        New Ticket
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className={styles.filterRow}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Status:</label>
                    <select
                        className={styles.filterSelect}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as any)}
                    >
                        <option value="all">All Status</option>
                        <option value="open">Open</option>
                        <option value="in_progress">In Progress</option>
                        <option value="waiting_client">Waiting Client</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Priority:</label>
                    <select
                        className={styles.filterSelect}
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value as any)}
                    >
                        <option value="all">All Priorities</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>
            </div>

            {/* Tickets List */}
            <div className={styles.ticketsList}>
                {filteredTickets.map(ticket => (
                    <div
                        key={ticket.id}
                        className={styles.ticketCard}
                        onClick={() => setSelectedTicket(ticket)}
                    >
                        <div className={styles.ticketHeader}>
                            <span className={styles.ticketId}>{ticket.id}</span>
                            <div className={styles.ticketBadges}>
                                <span
                                    className={styles.ticketStatus}
                                    style={{ background: getStatusColor(ticket.status) + '20', color: getStatusColor(ticket.status), border: `1px solid ${getStatusColor(ticket.status)}40` }}
                                >
                                    {ticket.status.replace('_', ' ')}
                                </span>
                                <span
                                    className={styles.ticketPriority}
                                    style={{ background: getPriorityColor(ticket.priority) + '20', color: getPriorityColor(ticket.priority), border: `1px solid ${getPriorityColor(ticket.priority)}40` }}
                                >
                                    {ticket.priority}
                                </span>
                            </div>
                        </div>
                        <h3 className={styles.ticketSubject}>{ticket.subject}</h3>
                        <div className={styles.ticketMeta}>
                            <span>{ticket.clientName}</span>
                            <span>•</span>
                            <span>{ticket.category}</span>
                            {ticket.assignedTo && (
                                <>
                                    <span>•</span>
                                    <span>Assigned to {ticket.assignedTo}</span>
                                </>
                            )}
                        </div>
                        <div className={styles.ticketFooter}>
                            <span className={styles.ticketDate}>
                                Updated {new Date(ticket.lastUpdated).toLocaleDateString()}
                            </span>
                            <span className={styles.ticketMessages}>
                                {ticket.messages.length} messages
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ticket Detail Modal */}
            {selectedTicket && (
                <Modal
                    isOpen={!!selectedTicket}
                    onClose={() => setSelectedTicket(null)}
                    title={`Ticket ${selectedTicket.id}`}
                    size="large"
                >
                    <div className={styles.ticketDetail}>
                        <div className={styles.ticketDetailHeader}>
                            <div>
                                <h2 className={styles.ticketDetailSubject}>{selectedTicket.subject}</h2>
                                <div className={styles.ticketDetailMeta}>
                                    <span className={styles.ticketDetailMetaItem}>
                                        <strong>Client:</strong> {selectedTicket.clientName}
                                    </span>
                                    <span className={styles.ticketDetailMetaItem}>
                                        <strong>Category:</strong> {selectedTicket.category}
                                    </span>
                                    {selectedTicket.assignedTo && (
                                        <span className={styles.ticketDetailMetaItem}>
                                            <strong>Assigned to:</strong> {selectedTicket.assignedTo}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className={styles.ticketDetailBadges}>
                                <span
                                    className={styles.ticketStatus}
                                    style={{ background: getStatusColor(selectedTicket.status) + '20', color: getStatusColor(selectedTicket.status), border: `1px solid ${getStatusColor(selectedTicket.status)}40` }}
                                >
                                    {selectedTicket.status.replace('_', ' ')}
                                </span>
                                <span
                                    className={styles.ticketPriority}
                                    style={{ background: getPriorityColor(selectedTicket.priority) + '20', color: getPriorityColor(selectedTicket.priority), border: `1px solid ${getPriorityColor(selectedTicket.priority)}40` }}
                                >
                                    {selectedTicket.priority}
                                </span>
                            </div>
                        </div>

                        <div className={styles.ticketMessages}>
                            {selectedTicket.messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`${styles.ticketMessage} ${message.authorType === 'admin' ? styles.ticketMessageAdmin : ''}`}
                                >
                                    <div className={styles.ticketMessageHeader}>
                                        <span className={styles.ticketMessageAuthor}>{message.author}</span>
                                        <span className={styles.ticketMessageTime}>
                                            {new Date(message.timestamp).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className={styles.ticketMessageText}>{message.message}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.ticketReply}>
                            <textarea
                                className={styles.ticketReplyInput}
                                placeholder="Type your reply..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                rows={4}
                            />
                            <div className={styles.ticketReplyActions}>
                                <button className={styles.btnSecondary} onClick={() => setSelectedTicket(null)}>
                                    Close
                                </button>
                                <button className={styles.btnPrimary} onClick={handleSendMessage}>
                                    Send Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
