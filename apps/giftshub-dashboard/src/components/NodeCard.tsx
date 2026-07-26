import React from 'react';

interface NodeCardProps {
  emoji: string;
  name: string;
  status: 'ONLINE' | 'OFFLINE';
  metrics: { label: string; value: string | number }[];
}

export const NodeCard: React.FC<NodeCardProps> = ({ emoji, name, status, metrics }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl transition-all hover:border-blue-500">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>{emoji}</span> {name}
        </h3>
        <span className={`px-2 py-1 rounded text-xs font-bold ${status === 'ONLINE' ? 'bg-green-900 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        {metrics.map((metric, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-gray-400">{metric.label}:</span>
            <span className="text-white font-mono">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
