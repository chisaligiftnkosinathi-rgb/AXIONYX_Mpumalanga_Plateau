import React from 'react';

interface HealthCardProps {
  title: string;
  value: number;
  status: 'NORMAL' | 'WARNING' | 'CRITICAL';
}

export function HealthCard({ title, value, status }: HealthCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'NORMAL': return 'text-green-500 border-green-500';
      case 'WARNING': return 'text-amber-500 border-amber-500';
      case 'CRITICAL': return 'text-red-500 border-red-500';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  return (
    <div className={`p-4 border rounded shadow bg-slate-900 ${getStatusColor()}`}>
      <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-slate-400">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold">{value}%</span>
        <span className="text-sm font-mono tracking-widest">{status}</span>
      </div>
      {/* Visual progress bar */}
      <div className="w-full bg-slate-800 h-2 mt-4 rounded overflow-hidden">
        <div 
          className="h-full bg-current transition-all duration-500 ease-out" 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
}
