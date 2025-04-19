import React, { useState } from 'react';

const ScannerStep = ({ config, setConfig }) => {
  const [newRule, setNewRule] = useState({
    field: 'exchange',
    operator: '=',
    value: 'NSE',
    condition: 'AND',
    group: 'AND' // For nested conditions
  });

  const fields = [
    { value: 'exchange', label: 'Exchange' },
    { value: 'instrument_type', label: 'Instrument Type' },
    { value: 'price_growth', label: 'Price Growth' },
    { value: 'price', label: 'Price' },
    { value: 'market_cap_rank', label: 'Market Cap Rank' },
    { value: 'avg_transaction_value', label: 'Avg Transaction Value' },
  ];

  const operators = ['=', '!=', '>', '<', '>=', '<='];
  const conditions = ['AND', 'OR'];

  const addRule = () => {
    setConfig({
      ...config,
      rules: [...config.rules, newRule]
    });
    setNewRule({
      field: 'exchange',
      operator: '=',
      value: '',
      condition: 'AND',
      group: 'AND'
    });
  };

  const removeRule = (index) => {
    const updatedRules = [...config.rules];
    updatedRules.splice(index, 1);
    setConfig({ ...config, rules: updatedRules });
  };

  const addGroup = () => {
    setConfig({
      ...config,
      rules: [...config.rules, { group: 'AND', rules: [] }]
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Scanner Configuration</h2>
      <p className="text-gray-600 mb-6">Define rules to filter financial instruments</p>

      <div className="space-y-3 mb-6">
        {config.rules.map((rule, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded">
            {rule.group ? (
              <div className="pl-4 border-l-4 border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{rule.group} GROUP</span>
                  <button 
                    onClick={() => removeRule(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
                {rule.rules && rule.rules.length > 0 ? (
                  rule.rules.map((subRule, subIndex) => (
                    <div key={subIndex} className="ml-4 mb-2 flex items-center">
                      <span className="mr-2 text-sm">{subIndex > 0 ? subRule.condition : 'WHERE'}</span>
                      <span className="px-2 py-1 bg-white border rounded text-sm">{subRule.field}</span>
                      <span className="px-2 py-1 bg-white border rounded text-sm">{subRule.operator}</span>
                      <span className="px-2 py-1 bg-white border rounded text-sm">{subRule.value}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 italic">No rules in this group</p>
                )}
              </div>
            ) : (
              <div className="flex items-center">
                <span className="mr-2">{index > 0 ? rule.condition : 'WHERE'}</span>
                <span className="px-2 py-1 bg-white border rounded">{rule.field}</span>
                <span className="px-2 py-1 bg-white border rounded">{rule.operator}</span>
                <span className="px-2 py-1 bg-white border rounded">{rule.value}</span>
                <button 
                  onClick={() => removeRule(index)}
                  className="ml-auto text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="font-medium mb-3">Add New Rule</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div>
            <select
              value={newRule.field}
              onChange={(e) => setNewRule({...newRule, field: e.target.value})}
              className="w-full p-2 border rounded text-sm"
            >
              {fields.map(field => (
                <option key={field.value} value={field.value}>{field.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select
              value={newRule.operator}
              onChange={(e) => setNewRule({...newRule, operator: e.target.value})}
              className="w-full p-2 border rounded text-sm"
            >
              {operators.map(op => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>
          </div>
          
          <div className="md:col-span-2">
            <input
              type="text"
              value={newRule.value}
              onChange={(e) => setNewRule({...newRule, value: e.target.value})}
              className="w-full p-2 border rounded text-sm"
              placeholder="Value"
            />
          </div>
          
          {config.rules.length > 0 && (
            <div>
              <select
                value={newRule.condition}
                onChange={(e) => setNewRule({...newRule, condition: e.target.value})}
                className="w-full p-2 border rounded text-sm"
              >
                {conditions.map(cond => (
                  <option key={cond} value={cond}>{cond}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        
        <div className="mt-3 flex space-x-3">
          <button
            onClick={addRule}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            Add Rule
          </button>
          <button
            onClick={addGroup}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition text-sm"
          >
            Add Condition Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScannerStep;