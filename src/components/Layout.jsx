import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="app-layout flex flex-col min-h-screen ">
      <Header onHamburgerClick={toggleSidebar}  />

      {/* Sidebar and Main Content */}
      <div className="flex flex-row flex-grow min-h-0 pt-12">
        {/* Sidebar with fixed width */}
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



        {/* Main content takes remaining space */}
        <main className="flex-grow overflow-auto  lg:pl-52">
  <Outlet />
</main>

      </div>

     
    </div>
  );
};

export default Layout;
