import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Jobs
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Press
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Accessibility
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Partners
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2023 TradingStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;