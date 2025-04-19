import React from 'react';

const SimulationStep = ({ config, setConfig }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value
    });
  };

  const handlePortfolioChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      portfolio: {
        ...config.portfolio,
        [name]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Simulation Configuration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              name="start_date"
              value={config.start_date || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1">End Date</label>
            <input
              type="date"
              name="end_date"
              value={config.end_date || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1">Initial Margin ($)</label>
            <input
              type="number"
              name="initial_margin"
              value={config.initial_margin || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="100000"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1">Order Sorting</label>
            <select
              name="order_sorting"
              value={config.order_sorting || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="top-gainer">Top Gainer First</option>
              <option value="random">Random</option>
              <option value="market-cap">Market Cap</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Portfolio Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Max Positions</label>
            <input
              type="number"
              name="max_positions"
              value={config.portfolio?.max_positions || ''}
              onChange={handlePortfolioChange}
              className="w-full p-2 border rounded"
              placeholder="20"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1">Max Per Instrument</label>
            <input
              type="number"
              name="max_per_instrument"
              value={config.portfolio?.max_per_instrument || ''}
              onChange={handlePortfolioChange}
              className="w-full p-2 border rounded"
              placeholder="1"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1">Per Order Value ($)</label>
            <input
              type="number"
              name="per_order_value"
              value={config.portfolio?.per_order_value || ''}
              onChange={handlePortfolioChange}
              className="w-full p-2 border rounded"
              placeholder="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationStep;