import React from 'react';
import { LuMoon } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const Header = ( { onHamburgerClick }) => {
  const {user}= useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 md:px-28 h-16 flex items-center justify-between">
     <button
  className="md:hidden text-2xl"
  onClick={onHamburgerClick}
  aria-label="Toggle Sidebar"
>
  <GiHamburgerMenu />
</button>
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
          U
        </div>
        <span className="text-xl font-semibold text-gray-900 tracking-tight">UltimateUtils</span>
      </div>

      {/* Right Section: Buttons + Theme Icon */}
      <div className="flex items-center gap-4">
        {/* <Link to="/login" className="text-sm px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition">
         
        </Link> */}
        {!isLoginPage && (
           <div className="lg:flex items-center gap-3 p-1 px-3 rounded-lg xs:hidden  bg-purple-50 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <img
    src={user?.picture || "https://via.placeholder.com/40"}
    alt="User Avatar"
    className="w-10 h-10 rounded-full border-2 border-purple-400 shadow-md hover:scale-105 transition-transform duration-300"
  />
  <div className="text-sm font-semibold text-purple-800">{user?.name || "Guest"}</div>
</div>

        )}

        <button
          aria-label="Toggle dark mode"
          className="text-gray-600 hover:text-gray-800 transition"
        >
          <LuMoon className='cursor-pointer' size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;