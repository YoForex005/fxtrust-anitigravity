import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function SidebarItem({ icon, label, active, onClick, href, className }: SidebarItemProps) {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      href={href} 
      className={`${styles.navItem} ${active ? styles.active : ''} ${className || ''}`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Component>
  );
}
