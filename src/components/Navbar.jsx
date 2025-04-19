import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 border-blue-600' : 'text-gray-500 hover:text-gray-700';
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                TradingStudio
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/')} border-transparent hover:border-gray-300`}
              >
                Home
              </Link>
              <Link
                to="/builder"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/builder')} border-transparent hover:border-gray-300`}
              >
                Strategy Builder
              </Link>
              <Link
                to="/saved"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/saved')} border-transparent hover:border-gray-300`}
              >
                Saved Strategies
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;