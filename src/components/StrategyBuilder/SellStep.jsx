import React, { useState } from 'react';

const SellStep = ({ config, setConfig }) => {
  const [newRule, setNewRule] = useState({
    type: 'trailing_stoploss',
    value: '5',
    days: '1',
    condition: 'AND'
  });

  const ruleTypes = [
    { value: 'trailing_stoploss', label: 'Trailing Stop Loss' },
    { value: 'fixed_stoploss', label: 'Fixed Stop Loss' },
    { value: 'target', label: 'Profit Target' },
    { value: 'time', label: 'Time Based Exit' },
  ];

  const addRule = () => {
    setConfig({
      ...config,
      rules: [...config.rules, newRule]
    });
    setNewRule({
      type: 'trailing_stoploss',
      value: '5',
      days: '1',
      condition: 'AND'
    });
  };

  const removeRule = (index) => {
    const updatedRules = [...config.rules];
    updatedRules.splice(index, 1);
    setConfig({ ...config, rules: updatedRules });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sell Trigger Conditions</h2>
      <p className="text-gray-600 mb-6">Define rules for when to exit positions</p>

      <div className="space-y-3 mb-6">
        {config.rules.map((rule, index) => (
          <div key={index} className="flex items-start bg-gray-50 p-3 rounded">
            <div className="flex-grow">
              <div className="font-medium capitalize">
                {rule.type.replace('_', ' ')}: {rule.value}%
              </div>
              {rule.days && rule.days !== '1' && (
                <div className="text-sm text-gray-600">
                  Minimum hold: {rule.days} days
                </div>
              )}
            </div>
            <button 
              onClick={() => removeRule(index)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-3">Add Sell Rule</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Rule Type</label>
            <select
              value={newRule.type}
              onChange={(e) => setNewRule({...newRule, type: e.target.value})}
              className="w-full p-2 border rounded text-sm"
            >
              {ruleTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Value (%)</label>
            <input
              type="number"
              value={newRule.value}
              onChange={(e) => setNewRule({...newRule, value: e.target.value})}
              className="w-full p-2 border rounded text-sm"
              placeholder="Percentage"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Min Days</label>
            <input
              type="number"
              value={newRule.days}
              onChange={(e) => setNewRule({...newRule, days: e.target.value})}
              className="w-full p-2 border rounded text-sm"
              placeholder="Minimum days"
            />
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          {config.rules.length > 0 && (
            <select
              value={newRule.condition}
              onChange={(e) => setNewRule({...newRule, condition: e.target.value})}
              className="p-2 border rounded text-sm"
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </select>
          )}
          
          <button
            onClick={addRule}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            + Add Rule
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellStep;