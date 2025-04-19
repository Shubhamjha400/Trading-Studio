import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Trading Strategy Simulator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create, test, and optimize your trading strategies with our powerful backtesting platform
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/builder"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Create New Strategy
          </Link>
          <Link
            to="/saved"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            View Saved Strategies
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-600 mb-4">
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Build Strategies</h3>
          <p className="text-gray-600">
            Create complex trading strategies with our intuitive rule builder
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-600 mb-4">
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Backtest</h3>
          <p className="text-gray-600">
            Test your strategies against historical market data
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-600 mb-4">
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Analyze</h3>
          <p className="text-gray-600">
            Get detailed performance metrics and analytics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;