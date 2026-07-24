import React from 'react';

export interface TimelineEventProps {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  type: 'OBSERVATION' | 'WORKFLOW' | 'EVIDENCE' | 'PUBLICATION';
  onExplain?: (id: string) => void;
}

export function TimelineEvent({ id, timestamp, title, description, type, onExplain }: TimelineEventProps) {
  const getIconColor = () => {
    switch (type) {
      case 'OBSERVATION': return 'bg-blue-500';
      case 'WORKFLOW': return 'bg-amber-500';
      case 'EVIDENCE': return 'bg-indigo-500';
      case 'PUBLICATION': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative pl-8 py-4 border-l-2 border-slate-700 last:border-l-0 group">
      {/* Timeline Node */}
      <div className={`absolute left-[-9px] top-5 w-4 h-4 rounded-full ${getIconColor()} ring-4 ring-slate-900`} />
      
      <div className="bg-slate-800 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-mono text-slate-400">{new Date(timestamp).toLocaleTimeString()}</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{type}</span>
        </div>
        <h4 className="text-sm font-bold text-slate-100">{title}</h4>
        <p className="text-sm text-slate-400 mt-1">{description}</p>
        
        {onExplain && (
          <button 
            onClick={() => onExplain(id)}
            className="mt-3 text-xs font-semibold text-indigo-400 hover:text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            [ Explain Reasoning ]
          </button>
        )}
      </div>
    </div>
  );
}
