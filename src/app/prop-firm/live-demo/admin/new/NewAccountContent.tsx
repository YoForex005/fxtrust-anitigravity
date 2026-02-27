'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function NewAccountContent() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Accounts');

    return (
        <div className={styles.container}>
            {/* Header */}
            <DynamicsHeader />

            <div className={styles.mainLayout}>
                {/* Sidebar */}
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />

                {/* Main Content */}
                <main className={styles.contentArea}>
                    {/* Command Bar */}
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton} onClick={() => router.back()}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Save & Close
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                            Set extension
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            Call Primary ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                            View Attachments
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
                            Login to CZ
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Open BU Settings
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            Run Dialog
                        </button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader} style={{ flexDirection: 'column', alignItems: 'flex-start', height: 'auto', padding: '10px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#0078d4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            </div>
                            <div>
                                <h1 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>New Account</h1>
                                <div style={{ fontSize: '12px', color: '#666' }}>Account • 365 Account Form ⌄</div>
                            </div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div style={{ padding: '20px', display: 'flex', gap: '20px', overflowY: 'auto', height: 'calc(100% - 130px)', background: '#f8f9fa' }}>

                        {/* Left Column */}
                        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Summary Section */}
                            <div className={styles.formSection}>
                                <h3 className={styles.formSectionTitle}>Summary</h3>
                                <div className={styles.formRow}>
                                    <label>Account Status</label>
                                    <div className={styles.formValue}>Lead</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Lead Status</label>
                                    <div className={styles.formValue}>New</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Main TP Account</label>
                                    <div className={styles.formValue}>---</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>FTD Exists</label>
                                    <div className={styles.formValue}><input type="checkbox" disabled /></div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>FTD Date</label>
                                    <div className={styles.formValue}>--- <span style={{ float: 'right' }}>📅</span></div>
                                </div>
                                <div className={styles.formRow}>
                                    <label style={{ fontSize: '11px', color: '#666' }}>Last updated:</label>
                                    <div className={styles.formValue} style={{ fontSize: '11px', color: '#666' }}>Not Available</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Last Deposit Date</label>
                                    <div className={styles.formValue}>--- <span style={{ float: 'right' }}>📅</span></div>
                                </div>
                                <div className={styles.formRow}>
                                    <label style={{ fontSize: '11px', color: '#666' }}>Last updated:</label>
                                    <div className={styles.formValue} style={{ fontSize: '11px', color: '#666' }}>Not Available</div>
                                </div>
                            </div>

                            {/* Account Information Section */}
                            <div className={styles.formSection}>
                                <h3 className={styles.formSectionTitle}>Account Information</h3>
                                <div className={styles.formRow}>
                                    <label>First Name <span style={{ color: 'red' }}>*</span></label>
                                    <div className={styles.formValue}><input type="text" className={styles.formInput} /></div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Last Name <span style={{ color: 'red' }}>*</span></label>
                                    <div className={styles.formValue}><input type="text" className={styles.formInput} /></div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>E-mail <span style={{ color: 'red' }}>*</span></label>
                                    <div className={styles.formValue}>
                                        <input type="text" className={styles.formInput} placeholder="******" />
                                        <span style={{ float: 'right' }}>📧</span>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Phone 1: Phone <span style={{ color: 'red' }}>*</span></label>
                                    <div className={styles.formValue}>
                                        <input type="text" className={styles.formInput} placeholder="******" />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Supplied Necessary Documents</label>
                                    <div className={styles.formValue}>No</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Approve Receive Commercial</label>
                                    <div className={styles.formValue}>No</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Owner Info Section */}
                            <div className={styles.formSection}>
                                <div className={styles.formRow}>
                                    <label>Owner <span style={{ color: 'red' }}>*</span></label>
                                    <div className={styles.formValue} style={{ color: '#0078d4' }}>👤 Leverate Demo Manager</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Brand</label>
                                    <div className={styles.formValue}>---</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Business Unit Name</label>
                                    <div className={styles.formValue}>---</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Conversion Owner</label>
                                    <div className={styles.formValue}>---</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Retention Owner</label>
                                    <div className={styles.formValue}>---</div>
                                </div>
                                <div className={styles.formRow}>
                                    <label>Account GUID</label>
                                    <div className={styles.formValue}>---</div>
                                </div>
                            </div>

                            {/* Timeline Section */}
                            <div className={styles.formSection} style={{ flex: 1 }}>
                                <h3 className={styles.formSectionTitle}>Timeline</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', color: '#666' }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: '10px' }}>
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                    <div style={{ fontWeight: '600' }}>Almost there</div>
                                    <div style={{ fontSize: '12px' }}>Select Save to see your timeline.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
