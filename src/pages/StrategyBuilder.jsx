import React, { useState } from 'react';
import ScannerStep from '../components/StrategyBuilder/ScannerStep';
import BuyStep from '../components/StrategyBuilder/BuyStep';
import SellStep from '../components/StrategyBuilder/SellStep';
import SimulationStep from '../components/StrategyBuilder/SimulationStep';
import MarketSelector from '../components/MarketSelector/MarketSelector';
import StrategySummary from '../components/StrategyBuilder/StrategySummary';

const StrategyBuilder = () => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [strategy, setStrategy] = useState({
    name: '',
    description: '',
    scannerStep: { rules: [] },
    buyStep: { rules: [] },
    sellStep: { rules: [] },
    simulationStep: { config: {} },
    status: 'draft'
  });

  const tabs = [
    { id: 'scanner', label: 'Scanner Step' },
    { id: 'buy', label: 'Buy Step' },
    { id: 'sell', label: 'Sell Step' },
    { id: 'simulation', label: 'Simulation Step' },
  ];

  const handleSaveDraft = () => {
    console.log('Saving draft:', strategy);
    alert('Strategy saved as draft!');
  };

  const handleSubmit = () => {
    console.log('Submitting strategy:', strategy);
    alert('Strategy submitted for simulation!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Strategy Builder</h1>
        <div className="flex space-x-3">
          <button 
            onClick={handleSaveDraft}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Save Draft
          </button>
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit for Simulation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-medium ${activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Strategy Name</label>
            <input
              type="text"
              value={strategy.name}
              onChange={(e) => setStrategy({...strategy, name: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter strategy name"
            />
          </div>

          {activeTab === 'scanner' && <ScannerStep config={strategy.scannerStep} setConfig={(config) => setStrategy({...strategy, scannerStep: config})} />}
          {activeTab === 'buy' && <BuyStep config={strategy.buyStep} setConfig={(config) => setStrategy({...strategy, buyStep: config})} />}
          {activeTab === 'sell' && <SellStep config={strategy.sellStep} setConfig={(config) => setStrategy({...strategy, sellStep: config})} />}
          {activeTab === 'simulation' && <SimulationStep config={strategy.simulationStep} setConfig={(config) => setStrategy({...strategy, simulationStep: config})} />}
        </div>

        <div className="space-y-6">
          <MarketSelector />
          <StrategySummary strategy={strategy} />
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;