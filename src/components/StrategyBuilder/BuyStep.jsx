import React, { useState } from 'react';

const BuyStep = ({ config, setConfig }) => {
  const [newCondition, setNewCondition] = useState({
    type: 'price',
    comparison: '>',
    value: '',
    days: '30',
    condition: 'AND'
  });

  const conditionTypes = [
    { value: 'price', label: 'Price' },
    { value: 'moving_average', label: 'Moving Average' },
    { value: 'volume', label: 'Volume' },
    { value: 'rsi', label: 'RSI' },
  ];

  const comparisons = ['>', '<', '>=', '<=', '==', '!='];

  const addCondition = () => {
    if (newCondition.value) {
      setConfig({
        ...config,
        rules: [...config.rules, newCondition]
      });
      setNewCondition({
        type: 'price',
        comparison: '>',
        value: '',
        days: '30',
        condition: 'AND'
      });
    }
  };

  const removeCondition = (index) => {
    const updatedRules = [...config.rules];
    updatedRules.splice(index, 1);
    setConfig({ ...config, rules: updatedRules });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Buy Trigger Conditions</h2>
      <p className="text-gray-600 mb-6">Define rules for when to enter positions</p>

      <div className="space-y-3 mb-6">
        {config.rules.map((rule, index) => (
          <div key={index} className="flex items-center bg-gray-50 p-3 rounded">
            <div className="flex-grow">
              <span className="font-medium capitalize">{rule.type.replace('_', ' ')} </span>
              <span>{rule.comparison} </span>
              <span>{rule.value} </span>
              {rule.days && <span>(last {rule.days} days)</span>}
            </div>
            <button 
              onClick={() => removeCondition(index)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-3">Add Buy Condition</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Type</label>
            <select
              value={newCondition.type}
              onChange={(e) => setNewCondition({...newCondition, type: e.target.value})}
              className="w-full p-2 border rounded text-sm"
            >
              {conditionTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Comparison</label>
            <select
              value={newCondition.comparison}
              onChange={(e) => setNewCondition({...newCondition, comparison: e.target.value})}
              className="w-full p-2 border rounded text-sm"
            >
              {comparisons.map(comp => (
                <option key={comp} value={comp}>{comp}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Value</label>
            <input
              type="text"
              value={newCondition.value}
              onChange={(e) => setNewCondition({...newCondition, value: e.target.value})}
              className="w-full p-2 border rounded text-sm"
              placeholder="Enter value"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Time Period</label>
            <select
              value={newCondition.days}
              onChange={(e) => setNewCondition({...newCondition, days: e.target.value})}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          {config.rules.length > 0 && (
            <select
              value={newCondition.condition}
              onChange={(e) => setNewCondition({...newCondition, condition: e.target.value})}
              className="p-2 border rounded text-sm"
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </select>
          )}
          
          <button
            onClick={addCondition}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            + Add Condition
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyStep;