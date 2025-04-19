import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const strategy = location.state?.strategy || {
    name: 'Momentum Strategy',
    returns: '+14.04%',
    weeklyWinRate: '60%',
    maxDrawdown: '-13.3%'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Simulation Results</h1>
        <h2 className="text-xl text-gray-600">{strategy.name}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
          <div className="bg-gray-100 h-64 flex items-center justify-center rounded">
            <p className="text-gray-500">Performance chart visualization</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Overall Return</h4>
              <p className="text-2xl font-bold text-gray-800">{strategy.returns}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Weekly Win Rate</h4>
              <p className="text-2xl font-bold text-gray-800">{strategy.weeklyWinRate}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Max Drawdown</h4>
              <p className="text-2xl font-bold text-gray-800">{strategy.maxDrawdown}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Simulation Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P&L</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-{10+i}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{['AAPL', 'MSFT', 'GOOG', 'AMZN', 'TSLA'][i]}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i % 2 === 0 ? 'BUY' : 'SELL'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(150 + i * 10).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i + 1}0</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    i % 2 === 0 ? 'text-gray-500' : i % 3 === 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {i % 2 === 0 ? '--' : i % 3 === 0 ? `+${i * 25}.00` : `-${i * 15}.00`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;