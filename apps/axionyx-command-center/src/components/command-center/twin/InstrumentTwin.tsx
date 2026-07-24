import React from 'react';

interface InstrumentTwinProps {
  id: string;
  status: 'READY' | 'RUNNING' | 'PAUSED' | 'ERROR';
  argon: number;
  rfPower: number;
  vacuum: number;
  torchHours: number;
  drift: number;
}

export function InstrumentTwin({ id, status, argon, rfPower, vacuum, torchHours, drift }: InstrumentTwinProps) {
  
  const getStatusColor = () => {
    switch (status) {
      case 'READY': return 'text-emerald-400 bg-emerald-400/10 border-emerald-500/50';
      case 'RUNNING': return 'text-blue-400 bg-blue-400/10 border-blue-500/50';
      case 'PAUSED': return 'text-amber-400 bg-amber-400/10 border-amber-500/50';
      case 'ERROR': return 'text-red-400 bg-red-400/10 border-red-500/50';
      default: return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div className="p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl relative overflow-hidden">
      {/* Decorative Twin Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCBMIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')] opacity-20" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
          <div>
            <h2 className="text-2xl font-bold font-mono text-slate-100">{id}</h2>
            <span className="text-xs uppercase tracking-widest text-slate-500">Digital Twin Active</span>
          </div>
          <div className={`px-4 py-2 rounded font-bold tracking-widest text-sm border ${getStatusColor()}`}>
            ● {status}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <TwinMetric label="Argon Flow" value={`${argon.toFixed(1)} L/min`} />
          <TwinMetric label="RF Power" value={`${rfPower.toFixed(0)} W`} />
          <TwinMetric label="Vacuum" value={`${vacuum.toFixed(4)} Pa`} />
          <TwinMetric label="Torch" value={`${torchHours} Hours`} />
          <div className="col-span-2">
            <TwinMetric label="Drift" value={`${drift.toFixed(2)}%`} highlight={drift > 0.05} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TwinMetric({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="flex flex-col bg-slate-800/50 p-4 rounded border border-slate-700/50">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{label}</span>
      <span className={`text-xl font-mono ${highlight ? 'text-red-400 font-bold' : 'text-slate-200'}`}>
        {value}
      </span>
    </div>
  );
}
