import React from 'react';

const StatusIndicator = ({ status }) => {
  const statusConfig = {
    draft: {
      color: 'bg-gray-400',
      text: 'text-gray-800',
      label: 'Draft'
    },
    'in-progress': {
      color: 'bg-yellow-400',
      text: 'text-yellow-800',
      label: 'In Progress'
    },
    completed: {
      color: 'bg-green-400',
      text: 'text-green-800',
      label: 'Completed'
    },
    failed: {
      color: 'bg-red-400',
      text: 'text-red-800',
      label: 'Failed'
    }
  };

  const config = statusConfig[status] || statusConfig.draft;

  return (
    <div className="flex items-center">
      <span className={`h-3 w-3 rounded-full ${config.color} mr-2`}></span>
      <span className={`text-sm ${config.text}`}>{config.label}</span>
    </div>
  );
};

export default StatusIndicator;