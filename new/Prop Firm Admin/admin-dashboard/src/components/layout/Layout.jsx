import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Toggle for mobile/desktop
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <Header toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 scrollbar-thin scrollbar-thumb-surface scrollbar-track-transparent">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
