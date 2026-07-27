"use client";
import React, { useState, useEffect, useRef } from 'react';

// Normally this would be imported from the backend orchestrator
// Mocking the state for the UI demonstration
export default function OperationalPilotDashboard() {
  const [scenario, setScenario] = useState<'COAL' | 'ERTIGA'>('COAL');
  const [failureMode, setFailureMode] = useState<string>('NONE');
  
  const [stage, setStage] = useState(0);
  const [status, setStatus] = useState<'IDLE' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'FAILED'>('IDLE');
  const [logs, setLogs] = useState<{timestamp: string, message: string}[]>([]);
  const [metrics, setMetrics] = useState({ latency: 0, traceability: 100, provenance: 100, explainability: 100, replayability: 100, confidence: 0 });
  const [explainView, setExplainView] = useState<'EXECUTIVE' | 'AUDIT'>('EXECUTIVE');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stages = [
    'Observation Received', 'Evidence (OVL) Validated', 'Knowledge Graph Updated',
    'Mission Loaded', 'Constraints Evaluated', 'Decision Produced',
    'Explainability Generated', 'Approval Requested', 'Execution Recorded', 'Learning Updated'
  ];

  const resetPipeline = () => {
    setStage(0);
    setStatus('IDLE');
    setLogs([]);
    setMetrics({ latency: 0, traceability: 100, provenance: 100, explainability: 100, replayability: 100, confidence: 0 });
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const stepNext = () => {
    if (stage >= 10 || status === 'FAILED') return;
    
    setStatus('RUNNING');
    const nextStage = stage + 1;
    setStage(nextStage);
    
    const ts = new Date();
    const timeStr = `${ts.getHours().toString().padStart(2, '0')}:${ts.getMinutes().toString().padStart(2, '0')}:${ts.getSeconds().toString().padStart(2, '0')}.${ts.getMilliseconds().toString().padStart(3, '0')}`;
    
    let message = stages[nextStage - 1];
    let newStatus = 'RUNNING';
    let newMetrics = { ...metrics, latency: Math.random() * 0.5 };

    if (failureMode === 'SAFETY_VIOLATION' && nextStage === 5) {
      message = 'REJECTED: Safety Constraint Violated';
      newStatus = 'FAILED';
    } else if (failureMode === 'LOW_EVIDENCE' && nextStage === 2) {
      message = 'WARNING: Low Evidence Level (E1). Confidence downgraded.';
      newMetrics.confidence = 40;
    } else if (nextStage === 6 && newStatus !== 'FAILED') {
      newMetrics.confidence = newMetrics.confidence || 91;
    }

    if (nextStage === 10 && newStatus !== 'FAILED') newStatus = 'COMPLETED';

    setLogs(prev => [...prev, { timestamp: timeStr, message }]);
    setMetrics(newMetrics);
    setStatus(newStatus as any);
  };

  const playPipeline = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (status === 'COMPLETED' || status === 'FAILED') resetPipeline();
    setStatus('RUNNING');
    timerRef.current = setInterval(() => {
      setStage(prev => {
        if (prev >= 10 || status === 'FAILED') {
          if (timerRef.current) clearInterval(timerRef.current);
          return prev;
        }
        return prev;
      });
      stepNext(); // Requires functional state updates to work perfectly, simplified here
    }, 500);
  };

  // Simplistic auto-stepper for demo purposes
  useEffect(() => {
    if (status === 'RUNNING' && stage < 10) {
      const t = setTimeout(stepNext, 500);
      return () => clearTimeout(t);
    }
  }, [stage, status]);

  const startAuto = () => {
    resetPipeline();
    setStatus('RUNNING');
    setStage(0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 flex flex-col">
      <header className="border-b border-slate-800 pb-4 mb-6 text-center">
         <div className="text-sm font-bold text-rose-500 tracking-[0.3em] uppercase mb-2">Growth Ring #044</div>
         <h1 className="text-3xl font-black text-white">🚀 AXIONYX Operational Pilot</h1>
         <p className="text-slate-400 mt-2">End-to-End Scientific Event Pipeline Demonstrator</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 flex-1">
         
         {/* Col 1: Scenario & Replay Controls */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">1. Scenario</h2>
               <div className="flex bg-slate-950 rounded border border-slate-800 overflow-hidden text-xs font-bold mb-4">
                  <button onClick={() => { setScenario('COAL'); resetPipeline(); }} className={`flex-1 py-2 ${scenario === 'COAL' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>COAL PREP</button>
                  <button onClick={() => { setScenario('ERTIGA'); resetPipeline(); }} className={`flex-1 py-2 border-l border-slate-800 ${scenario === 'ERTIGA' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>SUZUKI ERTIGA</button>
               </div>
               
               <h3 className="text-xs text-slate-500 font-bold uppercase mb-2 mt-6">Failure Injection</h3>
               <select 
                  className="w-full bg-slate-950 border border-slate-800 text-sm text-slate-300 p-2 rounded"
                  value={failureMode}
                  onChange={e => { setFailureMode(e.target.value); resetPipeline(); }}
               >
                  <option value="NONE">Optimal Conditions</option>
                  <option value="LOW_EVIDENCE">Low Evidence (E1)</option>
                  <option value="SAFETY_VIOLATION">Safety Violation</option>
                  <option value="MISSING_PROVENANCE">Missing Provenance</option>
               </select>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">5. Replay & Diagnostics</h2>
               <div className="grid grid-cols-2 gap-2">
                  <button onClick={startAuto} className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-2">
                     <span>▶</span> Inject Observation
                  </button>
                  <button onClick={() => setStatus('PAUSED')} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-2">
                     <span>⏸</span> Pause
                  </button>
                  <button onClick={resetPipeline} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-2">
                     <span>↺</span> Reset
                  </button>
                  <button onClick={stepNext} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-2">
                     <span>⏭</span> Step
                  </button>
               </div>
               <div className="mt-4 text-center">
                  <span className={`text-xs font-black px-3 py-1 rounded tracking-widest uppercase ${status === 'COMPLETED' ? 'bg-emerald-950 text-emerald-500' : status === 'FAILED' ? 'bg-rose-950 text-rose-500' : status === 'RUNNING' ? 'bg-sky-950 text-sky-500 animate-pulse' : 'bg-slate-950 text-slate-500'}`}>
                     STATUS: {status}
                  </span>
               </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">4. Metrics Audit</h2>
               <table className="w-full text-xs text-left">
                  <thead>
                     <tr className="border-b border-slate-800 text-slate-500">
                        <th className="py-2">Metric</th>
                        <th className="py-2">Target</th>
                        <th className="py-2 text-right">Live</th>
                        <th className="py-2 text-center">Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="border-b border-slate-800/50">
                        <td className="py-2 text-slate-300">Obs. Latency</td>
                        <td className="py-2 text-slate-500">&lt;1 s</td>
                        <td className="py-2 text-right font-bold text-white">{metrics.latency.toFixed(2)} s</td>
                        <td className="py-2 text-center text-emerald-500">✅</td>
                     </tr>
                     <tr className="border-b border-slate-800/50">
                        <td className="py-2 text-slate-300">Traceability</td>
                        <td className="py-2 text-slate-500">100%</td>
                        <td className="py-2 text-right font-bold text-white">{metrics.traceability}%</td>
                        <td className="py-2 text-center text-emerald-500">✅</td>
                     </tr>
                     <tr className="border-b border-slate-800/50">
                        <td className="py-2 text-slate-300">Explainability</td>
                        <td className="py-2 text-slate-500">100%</td>
                        <td className="py-2 text-right font-bold text-white">{metrics.explainability}%</td>
                        <td className="py-2 text-center text-emerald-500">✅</td>
                     </tr>
                     <tr>
                        <td className="py-2 text-slate-300">Confidence</td>
                        <td className="py-2 text-slate-500">≥80%</td>
                        <td className={`py-2 text-right font-bold ${metrics.confidence >= 80 ? 'text-emerald-400' : metrics.confidence > 0 ? 'text-amber-400' : 'text-slate-500'}`}>{metrics.confidence}%</td>
                        <td className="py-2 text-center">{metrics.confidence >= 80 ? '✅' : metrics.confidence > 0 ? '⚠️' : '—'}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         {/* Col 2 & 3: Timeline & Explainability */}
         <div className="xl:col-span-3 space-y-6 flex flex-col">
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg flex-1">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">2. Event Timeline</h2>
               <div className="h-[300px] overflow-y-auto pr-4 space-y-4 font-mono text-sm">
                  {logs.length === 0 && <div className="text-slate-600 italic">Waiting for observation injection...</div>}
                  {logs.map((log, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="text-slate-500 w-24 shrink-0">{log.timestamp}</div>
                        <div className="flex flex-col items-center">
                           <div className={`w-3 h-3 rounded-full ${log.message.includes('REJECTED') ? 'bg-rose-500' : log.message.includes('WARNING') ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                           {i < logs.length - 1 && <div className="w-px h-full bg-slate-800 my-1"></div>}
                        </div>
                        <div className={`font-bold ${log.message.includes('REJECTED') ? 'text-rose-400' : log.message.includes('WARNING') ? 'text-amber-400' : 'text-white'}`}>
                           {log.message}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
               <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                  <h2 className="text-lg font-bold text-white">3. Explainability</h2>
                  <div className="flex bg-slate-950 rounded border border-slate-800 overflow-hidden text-xs font-bold">
                     <button onClick={() => setExplainView('EXECUTIVE')} className={`px-4 py-2 ${explainView === 'EXECUTIVE' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>EXECUTIVE</button>
                     <button onClick={() => setExplainView('AUDIT')} className={`px-4 py-2 border-l border-slate-800 ${explainView === 'AUDIT' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>AUDIT</button>
                  </div>
               </div>
               
               <div className="bg-slate-950 border border-slate-800 rounded p-6 min-h-[150px]">
                  {stage < 7 ? (
                     <div className="text-slate-600 italic text-sm text-center mt-8">Explainability is generated at Stage 7 (Decision).</div>
                  ) : explainView === 'EXECUTIVE' ? (
                     <div className="text-slate-300 text-sm leading-relaxed border-l-4 border-sky-500 pl-4 py-1 bg-sky-950/10">
                        {scenario === 'COAL' ? 
                           `"This recommendation satisfies all safety and equipment constraints, is supported by verified laboratory evidence, and is expected to reduce product ash while maintaining acceptable yield."` :
                           `"This recommendation satisfies all safety and fleet constraints, is supported by OBD-II diagnostic evidence, and is selected to prevent critical battery failure on the Ertiga."`
                        }
                     </div>
                  ) : (
                     <table className="w-full text-left border-collapse text-sm">
                        <tbody>
                           <tr className="border-b border-slate-800/50">
                              <th className="py-2 text-slate-400 font-bold w-1/4">Observation</th>
                              <td className="py-2 text-white">{scenario === 'COAL' ? 'Ash trend increasing' : 'Voltage dropping below 11.5V'}</td>
                           </tr>
                           <tr className="border-b border-slate-800/50">
                              <th className="py-2 text-slate-400 font-bold">Mission</th>
                              <td className="py-2 text-white">{scenario === 'COAL' ? 'Produce Export-Quality Coal' : 'Maintain Fleet Reliability'}</td>
                           </tr>
                           <tr>
                              <th className="py-2 text-slate-400 font-bold">Decision</th>
                              <td className="py-2 text-white">{scenario === 'COAL' ? 'Increase dense medium density to 1.55' : 'Schedule battery replacement immediately'}</td>
                           </tr>
                        </tbody>
                     </table>
                  )}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
