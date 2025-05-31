import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/authentication'; // Add more paths if needed

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-layout flex flex-col min-h-screen">
      <Header onHamburgerClick={toggleSidebar} />

      <div className="flex flex-row flex-grow min-h-0 pt-12">
        {/* Show Sidebar only if not on the Authentication page */}
        {!isAuthPage && (
          <div
            className={`
              z-50
              w-[70vw] fixed
              lg:w-52 lg:fixed
              top-[49.5px]
              h-[calc(100vh-3rem)]
              transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              lg:translate-x-0
            `}
          >
            <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
          </div>
        )}

        <main className={`flex-grow overflow-auto ${!isAuthPage ? 'lg:pl-52' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;