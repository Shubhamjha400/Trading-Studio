import React from 'react';
import StatusIndicator from '../StatusIndicator';

const StrategySummary = ({ strategy }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3">Strategy Summary</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700">Status</h4>
          <StatusIndicator status={strategy.status} />
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700">Scanner Rules</h4>
          <p className="text-sm text-gray-600">
            {strategy.scannerStep.rules.length} conditions
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700">Buy Rules</h4>
          <p className="text-sm text-gray-600">
            {strategy.buyStep.rules.length} triggers
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700">Sell Rules</h4>
          <p className="text-sm text-gray-600">
            {strategy.sellStep.rules.length} triggers
          </p>
        </div>
        
        {strategy.simulationStep.config && (
          <div>
            <h4 className="font-medium text-gray-700">Simulation Period</h4>
            <p className="text-sm text-gray-600">
              {strategy.simulationStep.config.start_date} to {strategy.simulationStep.config.end_date}
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <h4 className="font-medium text-gray-700 mb-2">Performance Preview</h4>
        <div className="bg-gray-100 p-3 rounded text-center">
          <p className="text-sm text-gray-600">Simulation results will appear here</p>
          <div className="mt-2 flex justify-between text-xs">
            <span>Expected Return: +14.04%</span>
            <span>Max Drawdown: -13.3%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategySummary;