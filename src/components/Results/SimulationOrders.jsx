import React from 'react';

const SimulationOrders = ({ orders }) => {
  const defaultOrders = [
    { date: '2023-05-10', symbol: 'AAPL', action: 'BUY', price: 172.50, quantity: 10, pnl: '--' },
    { date: '2023-05-15', symbol: 'MSFT', action: 'BUY', price: 308.20, quantity: 5, pnl: '--' },
    { date: '2023-05-20', symbol: 'AAPL', action: 'SELL', price: 175.30, quantity: 10, pnl: '+28.00' },
    { date: '2023-05-22', symbol: 'GOOG', action: 'BUY', price: 122.40, quantity: 8, pnl: '--' },
    { date: '2023-05-25', symbol: 'MSFT', action: 'SELL', price: 312.75, quantity: 5, pnl: '+22.75' }
  ];

  const data = orders || defaultOrders;

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
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
            {data.map((order, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.action === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {order.action}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  order.pnl === '--' ? 'text-gray-500' : 
                  order.pnl.includes('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {order.pnl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimulationOrders;