import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { LuFileAudio } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import './Layout.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/user/userSlice';
const Sidebar = ({ onLinkClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.user);
  console.log(user)
  const handleLogout = async () => {
   await dispatch(logoutUser());
    navigate('/');
  };
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
   <div className="lg:w-52 xs:w-[70vw] fixed left-0 top-4 h-[calc(100vh-4rem)] px-4 pt-2 border-r border-gray-300 bg-white z-40">
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
      <div className='absolute bottom-4 left-4 w-[85%] p-3 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 shadow-md'>
  <div className='flex items-center gap-3 mb-3 lg:hidden'>
    <img
      src={user?.picture || "https://via.placeholder.com/40"}
      alt="User Avatar"
      className="w-10 h-10 rounded-full border-2 border-purple-400 shadow-sm"
    />
    <div className="text-sm font-semibold text-purple-800">{user?.name || "Guest"}</div>
  </div>
  <button
    onClick={handleLogout}
    className="w-full text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 py-1.5 rounded-md shadow transition duration-200"
  >
    Logout
  </button>
</div>

    </div>
  );
};

export default Sidebar;