import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { LuFileAudio } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import './Layout.css';

const Sidebar = ({ onLinkClick }) => {
  const navItems = [
    { to: '/', icon: <IoHomeOutline />, label: 'Home' },
    { to: '/image-tools', icon: <CiImageOn />, label: 'Image Processing' },
    { to: '/audio-video', icon: <LuFileAudio />, label: 'Audio-Video' },
    { to: '/document-tools', icon: <IoDocumentTextOutline />, label: 'Document Tools' },
    { to: '/link-qr-tools', icon: <IoIosLink />, label: 'Link QR Tools' },
    { to: '/authentication', icon: <IoIosLink />, label: 'Authentication' },
    { to: '/ai-tools', icon: <IoIosLink />, label: 'AI Tools' },
  ];

  return (
    <div className="lg:w-52 xs:w-[70vw]  fixed  left-0 h-[calc(100vh-3rem)] px-4 pt-4 border-r border-gray-300 bg-white z-50">
      <ul>
        {navItems.map(({ to, icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `transition-colors flex items-center gap-2 px-2 py-1 mb-2 rounded-lg lg:text-sm text-lg font-medium ${
                  isActive
                    ? 'bg-purple-100 text-purple-900'
                    : 'text-gray-600 hover:bg-purple-100 hover:text-purple-900'
                }`
              }
            >
              {icon}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
