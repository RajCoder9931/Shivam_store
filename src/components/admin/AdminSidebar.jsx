import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, ShoppingBagIcon, NewspaperIcon, UsersIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
const AdminSidebar = () => {
  const location = useLocation();
  const {
    logout
  } = useAuth();
  const isActive = path => {
    return location.pathname === path;
  };
  const navItems = [{
    path: '/admin',
    icon: <LayoutDashboardIcon className="h-5 w-5" />,
    label: 'Dashboard'
  }, {
    path: '/admin/products',
    icon: <ShoppingBagIcon className="h-5 w-5" />,
    label: 'Products'
  }, {
    path: '/admin/blogs',
    icon: <NewspaperIcon className="h-5 w-5" />,
    label: 'Blogs'
  }, {
    path: '/admin/users',
    icon: <UsersIcon className="h-5 w-5" />,
    label: 'Users'
  }, {
    path: '/admin/settings',
    icon: <SettingsIcon className="h-5 w-5" />,
    label: 'Settings'
  }];
  return <div className="bg-white border-r border-gray-200 w-64 fixed h-full">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <Link to="/" className="text-xl font-bold text-green-700">
            Shivam Admin
          </Link>
        </div>
        <div className="flex-grow p-4">
          <nav className="space-y-1">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${isActive(item.path) ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>)}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button onClick={logout} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-medium">
            <LogOutIcon className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>;
};
export default AdminSidebar;