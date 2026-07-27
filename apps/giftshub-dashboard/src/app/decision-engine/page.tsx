"use client";
import React, { useState } from 'react';

export default function DecisionEngineDashboard() {
  const [executionMode, setExecutionMode] = useState('RECOMMENDATION');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8 flex flex-col">
      
      <header className="border-b border-slate-800 pb-6 mb-8 text-center">
         <div className="text-sm font-bold text-amber-500 tracking-[0.3em] uppercase mb-2">Scientific Decision Layer</div>
         <h1 className="text-4xl font-black text-white">⚙️ AXIONYX Decision & Action Sandbox</h1>
         <p className="text-slate-400 mt-2">Every decision is an experiment. What should we do?</p>
      </header>

      <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-8">
         
         {/* Left: Decision Evaluator & Action Selector */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
               <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Decision Confidence Report</h2>
               
               <div className="space-y-4">
                  <div className="bg-slate-950 p-4 rounded border border-slate-800">
                     <div className="text-xs text-slate-400 font-bold uppercase mb-1">Scenario</div>
                     <div className="text-sm font-bold text-white">Increase dense medium density from 1.45 to 1.55</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-950 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-400 font-bold uppercase mb-1">Evidence Level</div>
                        <div className="text-lg font-black text-emerald-400">E4 (Verified)</div>
                     </div>
                     <div className="bg-slate-950 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-400 font-bold uppercase mb-1">Confidence</div>
                        <div className="text-lg font-black text-emerald-400">87%</div>
                     </div>
                     <div className="bg-slate-950 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-400 font-bold uppercase mb-1">Risk (Impact)</div>
                        <div className="text-lg font-black text-amber-400">MEDIUM</div>
                     </div>
                     <div className="bg-slate-950 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-400 font-bold uppercase mb-1">Uncertainty</div>
                        <div className="text-lg font-black text-emerald-400">LOW</div>
                     </div>
                  </div>

                  <div className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded">
                     <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1 flex justify-between">
                        <span>Decision: APPROVE</span>
                     </div>
                     <div className="text-xs text-emerald-200">
                        <strong>Reasoning:</strong> Historical evidence agrees with prediction. We know exactly what will happen if this fails (Low Uncertainty, Medium Risk).
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
               <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Approval Layer</h2>
               <div className="bg-slate-950 p-4 rounded border border-amber-900/50 flex justify-between items-center">
                  <div>
                     <div className="text-xs text-amber-500 font-bold uppercase mb-1">Authorization Required</div>
                     <div className="text-sm font-bold text-white">Plant Manager</div>
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded text-xs">
                     GRANT APPROVAL
                  </button>
               </div>
            </div>
         </div>

         {/* Right: Execution Modes & Learning */}
         <div className="xl:col-span-2 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
               <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                  <h2 className="text-xl font-bold text-white">Execution Adapter</h2>
                  <div className="flex bg-slate-950 rounded border border-slate-800 overflow-hidden text-xs font-bold">
                     <button onClick={() => setExecutionMode('RECOMMENDATION')} className={`px-4 py-2 ${executionMode === 'RECOMMENDATION' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>RECOMMENDATION</button>
                     <button onClick={() => setExecutionMode('SIMULATION')} className={`px-4 py-2 border-l border-r border-slate-800 ${executionMode === 'SIMULATION' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>SIMULATION</button>
                     <button onClick={() => setExecutionMode('OBSERVED')} className={`px-4 py-2 ${executionMode === 'OBSERVED' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>OBSERVED</button>
                  </div>
               </div>
               
               <div className="bg-slate-950 p-8 rounded border border-slate-800 min-h-[250px] flex items-center justify-center">
                  {executionMode === 'RECOMMENDATION' && (
                     <div className="text-center space-y-2">
                        <div className="text-sky-500 text-4xl mb-4">💬</div>
                        <div className="text-lg font-bold text-white">Action Suggested</div>
                        <div className="text-sm text-slate-400">"Increase dense medium density from 1.45 to 1.55."</div>
                        <div className="text-xs text-slate-500 mt-4">No execution has occurred.</div>
                     </div>
                  )}
                  {executionMode === 'SIMULATION' && (
                     <div className="text-center space-y-2 w-full max-w-md">
                        <div className="text-sky-500 text-4xl mb-4">📈</div>
                        <div className="text-lg font-bold text-white mb-4">Mathematical Estimation</div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-slate-900 p-3 rounded border border-slate-700">
                              <div className="text-xs text-slate-400 font-bold uppercase">Predicted Yield</div>
                              <div className="text-xl font-black text-sky-400">74.8%</div>
                           </div>
                           <div className="bg-slate-900 p-3 rounded border border-slate-700">
                              <div className="text-xs text-slate-400 font-bold uppercase">Predicted Ash</div>
                              <div className="text-xl font-black text-sky-400">18.1%</div>
                           </div>
                        </div>
                     </div>
                  )}
                  {executionMode === 'OBSERVED' && (
                     <div className="text-center space-y-2 w-full max-w-md">
                        <div className="text-sky-500 text-4xl mb-4">🔬</div>
                        <div className="text-lg font-bold text-white mb-4">Real Measurements Acquired</div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-slate-900 p-3 rounded border border-emerald-900/50">
                              <div className="text-xs text-slate-400 font-bold uppercase">Actual Yield</div>
                              <div className="text-xl font-black text-emerald-400">73.9%</div>
                           </div>
                           <div className="bg-slate-900 p-3 rounded border border-emerald-900/50">
                              <div className="text-xs text-slate-400 font-bold uppercase">Actual Ash</div>
                              <div className="text-xl font-black text-emerald-400">18.5%</div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>

            <div className={`bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg transition-all duration-500 ${executionMode === 'OBSERVED' ? 'opacity-100' : 'opacity-30'}`}>
               <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2 flex justify-between items-center">
                  <span>Learning Feedback Loop</span>
                  <span className="text-xs font-bold text-fuchsia-500 tracking-widest uppercase">Residual Analysis</span>
               </h2>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-4 rounded border border-slate-800">
                     <div className="text-xs text-slate-400 font-bold uppercase mb-2">Prediction</div>
                     <div className="text-sm text-slate-300">Yield: 74.8%</div>
                     <div className="text-sm text-slate-300">Ash: 18.1%</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded border border-slate-800">
                     <div className="text-xs text-slate-400 font-bold uppercase mb-2">Observation</div>
                     <div className="text-sm text-emerald-400">Yield: 73.9%</div>
                     <div className="text-sm text-emerald-400">Ash: 18.5%</div>
                  </div>
                  <div className="bg-fuchsia-950/20 p-4 rounded border border-fuchsia-900/50">
                     <div className="text-xs text-fuchsia-400 font-bold uppercase mb-2">Residual (Delta)</div>
                     <div className="text-sm font-bold text-fuchsia-300">Yield: 0.9% error</div>
                     <div className="text-sm font-bold text-fuchsia-300">Ash: -0.4% error</div>
                  </div>
               </div>
               
               <div className="mt-4 bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <span>🔄</span>
                  <span>Residuals fed back to Evidence Layer. Model update triggered.</span>
               </div>
            </div>

         </div>
         
      </div>
    </div>
  );
}
