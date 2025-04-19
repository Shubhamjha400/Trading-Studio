import React, { useState } from 'react';

const MarketSelector = () => {
  const [selectedMarkets, setSelectedMarkets] = useState(['NSE', 'NASDAQ']);
  
  const markets = [
    { code: 'MYSK', name: 'Malaysia Stock Exchange' },
    { code: 'NASDAQ', name: 'NASDAQ' },
    { code: 'NSE', name: 'National Stock Exchange (India)' },
    { code: 'JPX', name: 'Japan Exchange Group' },
    { code: 'NMSE', name: 'Nigeria Stock Exchange' },
    { code: 'EUROJECT', name: 'EuroNext' },
    { code: 'SIX', name: 'SIX Swiss Exchange' },
    { code: 'TBX', name: 'Taipei Exchange' },
    { code: 'LSE', name: 'London Stock Exchange' },
  ];

  const toggleMarket = (marketCode) => {
    setSelectedMarkets(prev => 
      prev.includes(marketCode) 
        ? prev.filter(code => code !== marketCode) 
        : [...prev, marketCode]
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3">Global Markets</h3>
      <div className="grid grid-cols-3 gap-2">
        {markets.map(market => (
          <div key={market.code} className="flex items-center">
            <input
              type="checkbox"
              id={`market-${market.code}`}
              checked={selectedMarkets.includes(market.code)}
              onChange={() => toggleMarket(market.code)}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor={`market-${market.code}`} className="ml-2 text-sm">
              {market.code}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketSelector;