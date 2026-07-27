"use client";
import React, { useState } from 'react';

export default function InstitutionalBridgeDashboard() {
  const [activeTab, setActiveTab] = useState<'NETWORK' | 'TRANSLATION'>('NETWORK');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
            A66.59: Institutional Bridge & Regional Intelligence
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            The Macro-Economic Translation Layer
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "A capability becomes scalable when it can communicate across different systems without losing its meaning."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('NETWORK')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'NETWORK' ? 'bg-sky-900 text-white border border-sky-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌍 Regional Network
          </button>
          <button onClick={() => setActiveTab('TRANSLATION')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'TRANSLATION' ? 'bg-indigo-900 text-white border border-indigo-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🗣️ Institutional Translation
          </button>
        </div>

        {activeTab === 'NETWORK' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
               <h2 className="text-2xl font-bold text-white">Mpumalanga Plateau Intelligence Map</h2>
               <div className="text-right">
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">Regional Capability Index (RCI)</div>
                  <div className="text-3xl font-black text-sky-400">842 <span className="text-sm text-slate-500">/ 1000</span></div>
               </div>
            </div>
            
            <div className="relative bg-slate-950 p-12 rounded-xl border border-sky-900/30 overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
               {/* Connections Background */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                 <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
                 <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
                 <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
                 <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
               </svg>
               
               {/* Nodes */}
               <div className="absolute top-10 left-20 text-center">
                  <div className="text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">🎓</div>
                  <div className="font-bold text-slate-300">VUT / UNISA</div>
                  <div className="text-xs text-sky-400">Academia</div>
               </div>
               
               <div className="absolute top-10 right-20 text-center">
                  <div className="text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">🏭</div>
                  <div className="font-bold text-slate-300">Mining Corp</div>
                  <div className="text-xs text-amber-400">Industry</div>
               </div>

               <div className="z-10 bg-sky-950 border-2 border-sky-500 p-6 rounded-full shadow-[0_0_30px_rgba(56,189,248,0.4)] text-center">
                  <div className="text-3xl font-black text-white">AXIONYX</div>
                  <div className="text-xs text-sky-300 font-bold tracking-widest mt-1">TRANSLATION CORE</div>
               </div>

               <div className="absolute bottom-10 left-20 text-center">
                  <div className="text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">🏛️</div>
                  <div className="font-bold text-slate-300">Municipality</div>
                  <div className="text-xs text-emerald-400">Government</div>
               </div>

               <div className="absolute bottom-10 right-20 text-center">
                  <div className="text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">💷</div>
                  <div className="font-bold text-slate-300">Funders</div>
                  <div className="text-xs text-pink-400">Capital</div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'TRANSLATION' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Institutional Partnership Engine</h2>
            <p className="text-slate-400 mb-8">Bridging the gap between raw capability and institutional language.</p>

            <div className="grid grid-cols-1 gap-8">
               
               {/* Example 1: Industry */}
               <div className="bg-slate-950 p-6 rounded-xl border border-indigo-900/50">
                  <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                     <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                           <span className="text-2xl">🏭</span> Industrial Adapter
                        </h3>
                        <div className="text-sm text-slate-400">Target: Mining Company (Environmental Division)</div>
                     </div>
                     <div className="text-right">
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Activation Score (IAS)</div>
                        <div className="text-2xl font-black text-emerald-400">92% <span className="text-sm font-normal text-emerald-500 ml-2 bg-emerald-950 px-2 py-1 rounded border border-emerald-900">High Match</span></div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">AXIONYX Internal Language</div>
                        <div className="text-white font-bold mb-1">Capability:</div>
                        <div className="text-indigo-300 text-sm mb-3">Melokuhle Sampling Services</div>
                        <div className="text-white font-bold mb-1">Evidence:</div>
                        <div className="text-indigo-300 text-sm">Field Testing Evidence</div>
                     </div>
                     
                     <div className="flex items-center justify-center text-3xl text-indigo-500 font-black">➔</div>
                     
                     <div className="bg-indigo-950/30 p-4 rounded-lg border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                        <div className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-2">Translated Output</div>
                        <div className="text-white font-bold mb-1">Supplier Profile:</div>
                        <div className="text-emerald-400 text-sm mb-3">Verified Environmental Service Provider</div>
                        <div className="text-white font-bold mb-1">Compliance Readiness:</div>
                        <div className="text-emerald-400 text-sm">Accreditation Pathway Initiated</div>
                     </div>
                  </div>
               </div>

               {/* Example 2: Government */}
               <div className="bg-slate-950 p-6 rounded-xl border border-sky-900/50">
                  <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                     <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                           <span className="text-2xl">🏛️</span> Government Adapter (SARS / Municipality)
                        </h3>
                        <div className="text-sm text-slate-400">Target: Local Economic Development Dept</div>
                     </div>
                     <div className="text-right">
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Activation Score (IAS)</div>
                        <div className="text-2xl font-black text-amber-400">75% <span className="text-sm font-normal text-amber-500 ml-2 bg-amber-950 px-2 py-1 rounded border border-amber-900">Moderate Match</span></div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">AXIONYX Internal Language</div>
                        <div className="text-white font-bold mb-1">Node:</div>
                        <div className="text-sky-300 text-sm mb-3">Suzuki Ertiga Mobility Node</div>
                        <div className="text-white font-bold mb-1">Status:</div>
                        <div className="text-sky-300 text-sm">Generating Revenue</div>
                     </div>
                     
                     <div className="flex items-center justify-center text-3xl text-sky-500 font-black">➔</div>
                     
                     <div className="bg-sky-950/30 p-4 rounded-lg border border-sky-500/50 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                        <div className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-2">Translated Output</div>
                        <div className="text-white font-bold mb-1">Economic Dev Asset:</div>
                        <div className="text-emerald-400 text-sm mb-3">Active Transport SME</div>
                        <div className="text-white font-bold mb-1">Tax Readiness:</div>
                        <div className="text-amber-400 text-sm">Requires SARS Compliance Translation</div>
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
