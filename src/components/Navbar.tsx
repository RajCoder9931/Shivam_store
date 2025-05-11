import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, MenuIcon, XIcon, UserIcon, LogOutIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">Shivam General Store</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Home
            </Link>
            <Link to="/shop" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Shop
            </Link>
            <Link to="/blogs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Blogs
            </Link>
            {user ? <div className="relative ml-3 flex items-center">
                {user.isAdmin && <Link to="/admin" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                    Admin
                  </Link>}
                <button onClick={handleLogout} className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                  <LogOutIcon className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div> : <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                <UserIcon className="h-4 w-4 mr-1" />
                Login
              </Link>}
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/blogs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            {user ? <>
                {user.isAdmin && <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600" onClick={() => setIsMenuOpen(false)}>
                    Admin
                  </Link>}
                <button onClick={() => {
            handleLogout();
            setIsMenuOpen(false);
          }} className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
                  <LogOutIcon className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </> : <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-600" onClick={() => setIsMenuOpen(false)}>
                <UserIcon className="h-4 w-4 mr-1" />
                Login
              </Link>}
          </div>
        </div>}
    </nav>;
};
export default Navbar;