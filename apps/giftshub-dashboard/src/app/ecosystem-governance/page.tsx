"use client";
import React, { useState } from 'react';

export default function EcosystemGovernanceDashboard() {
  const [activeTab, setActiveTab] = useState<'CHAMBER' | 'LEDGER'>('CHAMBER');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            A66.58: Ecosystem Governance & Constitutional Intelligence
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            The Constitutional Chamber & Safety Layer
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "Intelligence creates capability. Governance ensures capability serves regeneration."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('CHAMBER')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'CHAMBER' ? 'bg-purple-900 text-white border border-purple-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ⚖️ Constitutional Chamber
          </button>
          <button onClick={() => setActiveTab('LEDGER')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'LEDGER' ? 'bg-pink-900 text-white border border-pink-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            📜 Stewardship Ledger
          </button>
        </div>

        {activeTab === 'CHAMBER' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               
               <div className="flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">Melos Prime Balance</h2>
                  <div className="relative w-64 h-64 border-2 border-slate-800 rounded-full flex items-center justify-center">
                     <div className="absolute top-0 -mt-6 text-center">
                        <div className="text-sm font-bold text-blue-400 uppercase tracking-widest">Truth</div>
                        <div className="text-xs text-slate-500">Evidence Integrity</div>
                     </div>
                     <div className="absolute bottom-0 -mb-6 text-center">
                        <div className="text-sm font-bold text-pink-400 uppercase tracking-widest">Love</div>
                        <div className="text-xs text-slate-500">Human Benefit</div>
                     </div>
                     <div className="absolute left-0 -ml-12 text-center">
                        <div className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Order</div>
                        <div className="text-xs text-slate-500">Structure</div>
                     </div>
                     <div className="absolute right-0 -mr-12 text-center">
                        <div className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Mercy</div>
                        <div className="text-xs text-slate-500">Protection</div>
                     </div>
                     <div className="text-6xl text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">⚖️</div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Regeneration Integrity Score (RIS)</h2>
                  
                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-white">Node: Intelligent Car Doctor</h3>
                        <span className="bg-emerald-900 text-emerald-400 px-3 py-1 rounded text-xs font-bold border border-emerald-500">Level 0 - Healthy</span>
                     </div>
                     <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-400">Truth (Evidence)</span>
                           <span className="text-emerald-400 font-bold">Verified</span>
                        </div>
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-400">Love (Human Benefit)</span>
                           <span className="text-emerald-400 font-bold">High</span>
                        </div>
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-400">Regeneration (Renewal)</span>
                           <span className="text-emerald-400 font-bold">Active</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between">
                           <span className="font-bold text-slate-300">Total RIS</span>
                           <span className="font-black text-xl text-emerald-400">92%</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-xl border border-amber-900/50">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-white">Node: Legacy Transport SME</h3>
                        <span className="bg-amber-900 text-amber-400 px-3 py-1 rounded text-xs font-bold border border-amber-500">Level 1 - Advisory</span>
                     </div>
                     <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-400">Truth (Evidence)</span>
                           <span className="text-emerald-400 font-bold">Verified</span>
                        </div>
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-400">Regeneration (Renewal)</span>
                           <span className="text-amber-400 font-bold">Missing</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between">
                           <span className="font-bold text-slate-300">Total RIS</span>
                           <span className="font-black text-xl text-amber-400">65%</span>
                        </div>
                     </div>
                     <div className="mt-4 text-xs text-amber-400 bg-amber-950/30 p-2 rounded border border-amber-900/50">
                        Governance Recommendation: Allocate capability investment to trigger regeneration.
                     </div>
                  </div>

               </div>
            </div>
          </div>
        )}

        {activeTab === 'LEDGER' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Stewardship Decision Ledger</h2>
            <p className="text-slate-400 mb-8">Building institutional memory through recorded constitutional interventions.</p>

            <div className="space-y-6">
               <div className="bg-slate-950 p-6 rounded-xl border border-pink-900/50 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 border-r border-slate-800 pr-6">
                     <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Severity Level 3</div>
                     <div className="text-lg font-bold text-pink-400">Protection Event</div>
                     <div className="text-xs text-slate-600 mt-2">2026-07-27 14:30</div>
                  </div>
                  <div className="md:w-3/4 space-y-3">
                     <div><span className="text-slate-500 text-sm font-bold w-24 inline-block">Node:</span> <span className="text-white">Suzuki Ertiga Mobility</span></div>
                     <div><span className="text-slate-500 text-sm font-bold w-24 inline-block">Reason:</span> <span className="text-white">Financial Stress High + Capability Importance Critical</span></div>
                     <div><span className="text-slate-500 text-sm font-bold w-24 inline-block">Action:</span> <span className="text-emerald-400 font-bold bg-emerald-950/30 px-2 py-1 rounded">Triggered Recovery Protocol</span></div>
                     <div className="mt-4 pt-4 border-t border-slate-800">
                        <span className="text-slate-500 text-sm block mb-1 font-bold">Institutional Learning:</span>
                        <span className="text-slate-300 text-sm italic">"Critical physical assets require automated capital buffers before stress reaches critical levels."</span>
                     </div>
                  </div>
               </div>

               <div className="bg-slate-950 p-6 rounded-xl border border-blue-900/50 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 border-r border-slate-800 pr-6">
                     <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Severity Level 0</div>
                     <div className="text-lg font-bold text-blue-400">Healthy Approval</div>
                     <div className="text-xs text-slate-600 mt-2">2026-07-26 09:15</div>
                  </div>
                  <div className="md:w-3/4 space-y-3">
                     <div><span className="text-slate-500 text-sm font-bold w-24 inline-block">Node:</span> <span className="text-white">Melokuhle Sampling Services</span></div>
                     <div><span className="text-slate-500 text-sm font-bold w-24 inline-block">Reason:</span> <span className="text-white">RIS score > 90%. Fair participation verified.</span></div>
                     <div><span className="text-slate-500 text-sm font-bold w-24 inline-block">Action:</span> <span className="text-emerald-400 font-bold bg-emerald-950/30 px-2 py-1 rounded">Granted Full AXIONYX Network Access</span></div>
                  </div>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
