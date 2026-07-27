"use client";
import React, { useState } from 'react';

export default function RegionalOSDashboard() {
  const [activeTab, setActiveTab] = useState<'NERVOUS_SYSTEM' | 'HEALTH_MAP'>('NERVOUS_SYSTEM');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
            A66.60: Regional Operating System
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Multi-Ecosystem Coordination Layer
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "A region becomes intelligent when it can observe itself, coordinate its capabilities, protect its critical nodes, and regenerate new opportunities."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('NERVOUS_SYSTEM')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'NERVOUS_SYSTEM' ? 'bg-blue-900 text-white border border-blue-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌐 Regional Nervous System
          </button>
          <button onClick={() => setActiveTab('HEALTH_MAP')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'HEALTH_MAP' ? 'bg-cyan-900 text-white border border-cyan-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            📊 Regional Health Map
          </button>
        </div>

        {activeTab === 'NERVOUS_SYSTEM' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Macro-Economic Circulation</h2>
            <p className="text-slate-400 mb-12 text-center">Tracking the flow of Knowledge, Opportunity, Capital, and Capability across the region.</p>
            
            <div className="relative max-w-4xl mx-auto min-h-[500px] flex flex-col items-center justify-between">
               
               {/* Connections */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                  {/* Vertical Flow Lines */}
                  <path d="M50% 15% L50% 85%" stroke="#38bdf8" strokeWidth="4" strokeDasharray="10,10" className="animate-[dash_2s_linear_infinite]" />
                  <path d="M45% 15% L45% 85%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M55% 15% L55% 85%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
                  
                  <style>
                    {`@keyframes dash { to { stroke-dashoffset: -20; } }`}
                  </style>
               </svg>

               <div className="z-10 bg-slate-950 border border-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-lg flex justify-between items-center">
                  <div className="text-center">
                     <div className="text-3xl mb-1">🎓</div>
                     <div className="text-xs font-bold text-slate-400 uppercase">Education</div>
                  </div>
                  <div className="text-emerald-400 font-bold text-sm tracking-widest uppercase">← Knowledge Flow →</div>
                  <div className="text-center">
                     <div className="text-3xl mb-1">🏭</div>
                     <div className="text-xs font-bold text-slate-400 uppercase">Industry</div>
                  </div>
               </div>

               <div className="z-10 my-8">
                  <div className="bg-blue-950/50 border-2 border-blue-500 p-8 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)] text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
                     <div className="text-4xl font-black text-white relative z-10">AXIONYX OS</div>
                     <div className="text-xs text-blue-300 font-bold tracking-widest mt-2 relative z-10">COORDINATION LAYER</div>
                  </div>
               </div>

               <div className="z-10 w-full max-w-lg space-y-4">
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center">
                     <div className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-1">↓ Opportunity Flow ↓</div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center">
                     <div className="text-pink-400 font-bold text-sm tracking-widest uppercase mb-1">↓ Capital Flow ↓</div>
                  </div>
               </div>

               <div className="z-10 mt-8 bg-slate-950 border border-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-lg flex justify-between items-center">
                  <div className="text-center">
                     <div className="text-3xl mb-1">🏛️</div>
                     <div className="text-xs font-bold text-slate-400 uppercase">Government</div>
                  </div>
                  <div className="text-cyan-400 font-bold text-sm tracking-widest uppercase">← Capability Regeneration →</div>
                  <div className="text-center">
                     <div className="text-3xl mb-1">👥</div>
                     <div className="text-xs font-bold text-slate-400 uppercase">People</div>
                  </div>
               </div>

            </div>
          </div>
        )}

        {activeTab === 'HEALTH_MAP' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Mpumalanga Plateau Health</h2>
            <p className="text-slate-400 mb-8">Layer: <span className="text-cyan-400 font-bold bg-cyan-950 px-2 py-1 rounded">DISTRICT (Chief Albert Luthuli)</span></p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               
               {/* Metrics Panel */}
               <div className="space-y-6">
                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                     <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                        <h3 className="text-lg font-bold text-white">Regional Activation Score</h3>
                        <div className="text-3xl font-black text-cyan-400">86%</div>
                     </div>
                     
                     <div className="space-y-4">
                        <div>
                           <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                              <span>Capability Density</span>
                              <span>90%</span>
                           </div>
                           <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div></div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                              <span>Opportunity Flow</span>
                              <span>75%</span>
                           </div>
                           <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div></div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                              <span>Institution Links</span>
                              <span>95%</span>
                           </div>
                           <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-indigo-500 h-2 rounded-full" style={{width: '95%'}}></div></div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                              <span>Capital Circulation</span>
                              <span>60%</span>
                           </div>
                           <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-pink-500 h-2 rounded-full" style={{width: '60%'}}></div></div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                              <span>Regeneration Rate</span>
                              <span>85%</span>
                           </div>
                           <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div></div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-xl border border-red-900/50">
                     <h3 className="text-sm font-bold text-red-400 flex items-center gap-2 mb-2 uppercase tracking-widest">
                        🛡️ Regional Immune Layer
                     </h3>
                     <div className="text-white text-sm">Monitoring capability fluctuations. No critical node collapse detected in the current district.</div>
                  </div>
               </div>

               {/* Active Reactions Panel */}
               <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">Active Regional Reactions</h3>
                  
                  <div className="space-y-6">
                     <div className="relative pl-6 border-l-2 border-emerald-900/50 pb-6">
                        <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Pressure Identified</div>
                        <div className="text-white font-bold mb-3">Mining Compliance & Water Monitoring</div>
                        
                        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 mb-3 text-sm">
                           <span className="text-blue-400 font-bold">DNA Match:</span> Analytical Chemistry + Sampling Protocols
                        </div>
                        
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                           <span>➔</span> Born: Melokuhle Sampling Node
                        </div>
                     </div>

                     <div className="relative pl-6 border-l-2 border-amber-900/50">
                        <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[7px] top-1"></div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Pressure Identified</div>
                        <div className="text-white font-bold mb-3">Transport Reliability</div>
                        
                        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 mb-3 text-sm">
                           <span className="text-blue-400 font-bold">DNA Match:</span> Mechanical Diagnostics + Driver Network
                        </div>
                        
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                           <span>➔</span> Born: MG Autobody / Intelligent Asset OS
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
