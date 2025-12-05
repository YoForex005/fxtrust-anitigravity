import React from 'react';
import styles from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  collapsed: boolean;
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onLogout?: () => void;
}

export default function Sidebar({ collapsed, activeItem = 'Home', onItemClick, onLogout }: SidebarProps) {
  
  const handleItemClick = (label: string) => {
    if (onItemClick) {
      onItemClick(label);
    }
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ''}`}>
      <nav className={styles.sidebarNav}>
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>}
          label="Home"
          active={activeItem === 'Home'}
          onClick={() => handleItemClick('Home')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>}
          label="Funds"
          active={activeItem === 'Funds'}
          onClick={() => handleItemClick('Funds')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
          label="Deposit"
          active={activeItem === 'Deposit'}
          onClick={() => handleItemClick('Deposit')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>}
          label="Withdraw"
          active={activeItem === 'Withdraw'}
          onClick={() => handleItemClick('Withdraw')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>}
          label="Refer & earn"
          active={activeItem === 'Refer & earn'}
          onClick={() => handleItemClick('Refer & earn')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
          label="Economic Calendar"
          active={activeItem === 'Economic Calendar'}
          onClick={() => handleItemClick('Economic Calendar')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>}
          label="Refer & Earn"
          active={activeItem === 'Refer & Earn'}
          onClick={() => handleItemClick('Refer & Earn')}
          className="text-orange-500 font-semibold"
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>}
          label="Trading Analysis"
          active={activeItem === 'Trading Analysis'}
          onClick={() => handleItemClick('Trading Analysis')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
          label="Help Center"
          active={activeItem === 'Help Center'}
          onClick={() => handleItemClick('Help Center')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>}
          label="Personal Settings"
          active={activeItem === 'Personal Settings'}
          onClick={() => handleItemClick('Personal Settings')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>}
          label="Trader's Education"
          active={activeItem === "Trader's Education"}
          onClick={() => handleItemClick("Trader's Education")}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>}
          label="Upload documents"
          active={activeItem === 'Upload documents'}
          onClick={() => handleItemClick('Upload documents')}
        />
        
        <div className={styles.divider}></div>
        
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>}
          label="Dark Mode"
          onClick={() => handleItemClick('Dark Mode')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>}
          label="Tour guide"
          onClick={() => handleItemClick('Tour guide')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.3 1.3a4.3 4.3 0 0 0-3.6 2.2 4.3 4.3 0 0 0 3.6-2.2zm-4.6 3.6a5.5 5.5 0 0 0 1.4 3.9 5.5 5.5 0 0 0 4-2 5.5 5.5 0 0 0-1.4-3.9 5.5 5.5 0 0 0-4 2zM5.6 20.3c.6 1.7 2.6 3.7 4.6 3.7s2.7-1.2 5.1-1.2 2.9 1.2 5.1 1.2 3.6-3.3 4.9-7.2c-4.2-2.3-3.4-8.7 1-10.5-2.2-3.1-5.6-3.5-6.8-3.5-2 0-3.8 1.1-4.8 1.1-1 0-2.5-1.1-4.1-1.1C6.3 2.8 2 6.5 2 12.6c0 4.2 1.9 8.3 3.6 7.7z"/></svg>}
          label="App for iOS"
          onClick={() => handleItemClick('App for iOS')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.5 22h-11c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2zM5 20h14V7H5v13zm3-15h8v1H8V5zm1.5-3h5v1h-5V2z"/></svg>} // Generic phone icon as Android logo is complex
          label="App for Android"
          onClick={() => handleItemClick('App for Android')}
        />
        <SidebarItem 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>}
          label="Log out"
          onClick={onLogout}
        />
        
        <div className={styles.shareApp}>
          Share the app
        </div>
        
        <div className={styles.socialIcons}>
          <svg className={styles.socialIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          <svg className={styles.socialIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <svg className={styles.socialIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </div>

      </nav>
    </aside>
  );
}
