"use client";
import React, { useState } from 'react';

export default function FutureSimulationDashboard() {
  const [pressure, setPressure] = useState(50);
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <header className="border-b border-slate-800 pb-8 text-center">
          <div className="text-sm font-bold text-fuchsia-500 tracking-[0.3em] uppercase mb-4">The Imagination Layer</div>
          <h1 className="text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            🌌 The Possibility Observatory
          </h1>
          <p className="text-slate-400 mt-4 text-xl font-light">
            "Every future is a capability configuration waiting to be cultivated."
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Pressure Simulator */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
               <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Pressure Simulator</h2>
               
               <div className="mb-8">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Coal Transition Pressure</label>
                  <input 
                    type="range" 
                    min="0" max="100" 
                    value={pressure} 
                    onChange={(e) => setPressure(parseInt(e.target.value))}
                    className="w-full accent-fuchsia-500" 
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                     <span>Low</span>
                     <span>High</span>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-slate-600"></div>
                     <div className="text-xs text-slate-500 font-bold uppercase mb-1">Old Capability</div>
                     <div className="text-white font-bold">Mining Reliance</div>
                  </div>
                  <div className="flex justify-center text-slate-600">↓</div>
                  <div className="bg-fuchsia-950/20 p-4 rounded-lg border border-fuchsia-900/50 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-500"></div>
                     <div className="text-xs text-fuchsia-400 font-bold uppercase mb-1">Mutation Pressure (Level: {pressure})</div>
                     <div className="text-fuchsia-100 font-bold">Analytical Chemistry + AI</div>
                  </div>
                  <div className="flex justify-center text-slate-600">↓</div>
                  <div className="bg-emerald-950/20 p-4 rounded-lg border border-emerald-900/50 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                     <div className="text-xs text-emerald-400 font-bold uppercase mb-1">New Capability</div>
                     <div className="text-emerald-100 font-bold">Environmental Intelligence</div>
                  </div>
               </div>
            </div>

            {/* Trinity Alignment */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
               <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Melos OS Alignment</h2>
               <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-950 p-3 rounded border border-slate-800">
                     <span className="text-sm font-bold text-white">🔬 PJS Lab (Evidence)</span>
                     <span className="text-emerald-500 text-xs font-black">PASS</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950 p-3 rounded border border-slate-800">
                     <span className="text-sm font-bold text-white">♟️ AXIONYX (Strategy)</span>
                     <span className="text-emerald-500 text-xs font-black">PASS</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950 p-3 rounded border border-slate-800">
                     <span className="text-sm font-bold text-white">👑 K-Builders (Dignity)</span>
                     <span className="text-emerald-500 text-xs font-black">PASS</span>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT: Future Galaxy & Bridge */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl min-h-[400px] flex flex-col relative overflow-hidden">
               
               {/* Background Stars */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-950 to-slate-950"></div>

               <h2 className="text-2xl font-bold text-white mb-8 z-10">The Possibility Galaxy</h2>
               
               <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="w-full max-w-2xl relative h-64">
                     
                     {/* Present Node */}
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 text-center">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full mx-auto shadow-[0_0_15px_#10b981] mb-2"></div>
                        <div className="text-xs font-bold text-emerald-400">PRESENT</div>
                     </div>

                     {/* Lines */}
                     <svg className="absolute left-8 top-0 w-[calc(100%-8rem)] h-full pointer-events-none" preserveAspectRatio="none">
                        <path d="M 0 50% Q 50% 10%, 100% 10%" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
                        <path d="M 0 50% L 100% 50%" fill="none" stroke="#d946ef" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" />
                        <path d="M 0 50% Q 50% 90%, 100% 90%" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
                     </svg>

                     {/* Future A */}
                     <div className="absolute right-0 top-[10%] -translate-y-1/2 text-center opacity-50">
                        <div className="w-3 h-3 bg-slate-500 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs font-bold text-slate-400">Future A (Slow)</div>
                     </div>

                     {/* Future B (Approved) */}
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 text-center z-20">
                        <div className="w-6 h-6 bg-fuchsia-500 rounded-full mx-auto shadow-[0_0_20px_#d946ef] animate-pulse mb-2 border-2 border-white"></div>
                        <div className="text-xs font-bold text-fuchsia-400 uppercase">Future B</div>
                        <div className="text-[10px] text-white bg-fuchsia-900/50 px-2 py-1 rounded mt-1">Clean Energy Hub</div>
                     </div>

                     {/* Future C */}
                     <div className="absolute right-0 top-[90%] -translate-y-1/2 text-center opacity-50">
                        <div className="w-3 h-3 bg-slate-500 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs font-bold text-slate-400">Future C (Mutation)</div>
                     </div>

                  </div>
               </div>
            </div>

            {/* Future -> Curiosity Bridge */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
               <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🌉</span> Future-to-Curiosity Pipeline
               </h2>
               <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                     
                     <div className="text-center md:text-left flex-1">
                        <div className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest mb-1">Approved Future Requires</div>
                        <div className="text-lg font-black text-white">Electrochemical Engineers</div>
                     </div>
                     
                     <div className="text-fuchsia-500 text-2xl animate-pulse">➔</div>
                     
                     <div className="bg-emerald-950/30 border border-emerald-900 p-4 rounded-lg flex-1">
                        <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Chappies Engine Spawn</div>
                        <div className="text-sm font-bold text-emerald-100">"Learn electrolysis chemistry"</div>
                        <div className="text-xs text-emerald-500 mt-2 flex items-center gap-1">
                           <span>🌱</span> 14 New Quests Initiated
                        </div>
                     </div>

                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
