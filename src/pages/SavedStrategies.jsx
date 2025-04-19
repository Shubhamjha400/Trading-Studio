import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatusIndicator from '../components/StatusIndicator';

const SavedStrategies = () => {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStrategies([
        {
          id: '1',
          name: 'Momentum Strategy',
          description: 'Buys stocks with strong price momentum',
          lastModified: '2023-05-15',
          status: 'completed',
          returns: '+14.04%'
        },
        {
          id: '2',
          name: 'Value Strategy',
          description: 'Identifies undervalued stocks',
          lastModified: '2023-05-10',
          status: 'in-progress',
          returns: '--'
        },
        {
          id: '3',
          name: 'Swing Trading',
          description: 'Captures short-term price movements',
          lastModified: '2023-05-01',
          status: 'draft',
          returns: '--'
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCopyStrategy = (id) => {
    console.log('Copying strategy:', id);
    alert(`Strategy ${id} copied to new draft!`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading strategies...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Saved Strategies</h1>
        <Link
          to="/builder"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Create New Strategy
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Returns</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {strategies.map((strategy) => (
              <tr key={strategy.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{strategy.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-600">{strategy.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusIndicator status={strategy.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    strategy.returns.includes('+') ? 'bg-green-100 text-green-800' : 
                    strategy.returns.includes('-') ? 'bg-gray-100 text-gray-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {strategy.returns}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {strategy.lastModified}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleCopyStrategy(strategy.id)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Copy
                  </button>
                  <Link 
                    to={`/builder?strategy=${strategy.id}`} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {strategy.status === 'draft' ? 'Edit' : 'View'}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavedStrategies;