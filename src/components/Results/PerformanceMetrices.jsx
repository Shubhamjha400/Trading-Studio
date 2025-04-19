import React from 'react';

const PerformanceMetrics = ({ metrics }) => {
  const defaultMetrics = {
    overallReturn: '+14.04%',
    weeklyWinRate: '60%',
    maxDrawdown: '-13.3%',
    sharpeRatio: '1.2',
    sortinoRatio: '1.8',
    profitFactor: '2.1'
  };

  const data = metrics || defaultMetrics;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">Overall Return</p>
          <p className={`text-2xl font-bold ${
            data.overallReturn.includes('+') ? 'text-green-600' : 'text-red-600'
          }`}>
            {data.overallReturn}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">Weekly Win Rate</p>
          <p className="text-2xl font-bold text-gray-800">{data.weeklyWinRate}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">Max Drawdown</p>
          <p className="text-2xl font-bold text-red-600">{data.maxDrawdown}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">Sharpe Ratio</p>
          <p className="text-2xl font-bold text-gray-800">{data.sharpeRatio}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">Sortino Ratio</p>
          <p className="text-2xl font-bold text-gray-800">{data.sortinoRatio}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">Profit Factor</p>
          <p className="text-2xl font-bold text-gray-800">{data.profitFactor}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;