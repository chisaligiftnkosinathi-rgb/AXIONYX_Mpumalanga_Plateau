import React from 'react';

interface ExplainabilityPanelProps {
  eventId: string | null;
  onClose: () => void;
}

export function ExplainabilityPanel({ eventId, onClose }: ExplainabilityPanelProps) {
  if (!eventId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-lg font-bold font-mono text-slate-200">Event Provenance: {eventId}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>

        {/* Chain Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-[120px_1fr] gap-4">
            
            <div className="text-sm font-semibold text-slate-400 text-right pr-4 border-r border-slate-700">Observation</div>
            <div className="text-sm font-mono text-blue-400 bg-blue-900/20 p-2 rounded">
              Argon Flow: 13.2 L/min (Expected: 15.0 ±0.5)
            </div>

            <div className="text-sm font-semibold text-slate-400 text-right pr-4 border-r border-slate-700">Rule</div>
            <div className="text-sm text-slate-300">
              <span className="bg-slate-800 px-2 py-1 rounded text-xs font-mono border border-slate-600 mr-2">ISO 17025</span>
              Drift Threshold Exceeded
            </div>

            <div className="text-sm font-semibold text-slate-400 text-right pr-4 border-r border-slate-700">Workflow</div>
            <div className="text-sm font-bold text-amber-500">
              RUNNING &rarr; PAUSED
            </div>

            <div className="text-sm font-semibold text-slate-400 text-right pr-4 border-r border-slate-700">Evidence</div>
            <div className="text-sm font-mono text-indigo-400">
              Evidence Record #EV-3482-9A
            </div>

            <div className="text-sm font-semibold text-slate-400 text-right pr-4 border-r border-slate-700">Trust Impact</div>
            <div className="text-sm font-bold text-red-400">
              -15% (Current: 85%)
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-800/50 border-t border-slate-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white">Close</button>
          <button className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded">
            View Audit Report
          </button>
        </div>
      </div>
    </div>
  );
}
