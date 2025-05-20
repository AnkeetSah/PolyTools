import React from 'react';
import { LuMoon } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ( { onHamburgerClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 md:px-28 py-2 flex items-center  justify-between">
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
        <Link
          to="/signup"
          className="text-sm px-4 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition"
        >
           Login/Signup
        </Link>
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
