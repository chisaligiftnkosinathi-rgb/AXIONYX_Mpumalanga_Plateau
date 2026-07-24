import React from 'react';

export type ScenarioType = 'NORMAL' | 'DRIFT' | 'CALIBRATION' | 'CUSTODY_FAILURE' | 'APPROVED';

interface ScenarioRunnerProps {
  onRunScenario: (scenario: ScenarioType) => void;
  onReplay: () => void;
}

export function ScenarioRunner({ onRunScenario, onReplay }: ScenarioRunnerProps) {
  const scenarios: { type: ScenarioType, label: string }[] = [
    { type: 'NORMAL', label: 'Normal Operation' },
    { type: 'DRIFT', label: 'Instrument Drift' },
    { type: 'CALIBRATION', label: 'Calibration Complete' },
    { type: 'CUSTODY_FAILURE', label: 'Chain of Custody Failure' },
    { type: 'APPROVED', label: 'Measurement Approved' }
  ];

  return (
    <div className="p-4 bg-slate-900 border border-slate-700 rounded shadow">
      <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-400">Scenario Control</h3>
      <div className="flex flex-col gap-2 mb-6">
        {scenarios.map(s => (
          <button 
            key={s.type}
            onClick={() => onRunScenario(s.type)}
            className="text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded transition-colors"
          >
            ○ {s.label}
          </button>
        ))}
      </div>
      
      <div className="border-t border-slate-700 pt-4">
        <button 
          onClick={onReplay}
          className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded flex justify-center items-center gap-2"
        >
          <span>▶</span> Deterministic Replay
        </button>
        <p className="text-xs text-slate-500 mt-2 text-center">
          Reconstruct state from immutable events.
        </p>
      </div>
    </div>
  );
}
