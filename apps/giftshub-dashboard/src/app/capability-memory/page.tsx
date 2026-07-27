"use client";
import React, { useState } from 'react';

export default function CapabilityMemoryDashboard() {
  const [activeTab, setActiveTab] = useState<'KNOWLEDGE_TREE' | 'WISDOM_ARCHIVE' | 'MUTATION_HISTORY'>('KNOWLEDGE_TREE');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <header className="border-b border-slate-800 pb-8 text-center">
          <div className="text-sm font-bold text-amber-500 tracking-[0.3em] uppercase mb-4">Civilization Inheritance Layer</div>
          <h1 className="text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            🧬📚 The Memory of the Forest
          </h1>
          <p className="text-slate-400 mt-4 text-xl font-light">
            "Every solved problem becomes inherited intelligence."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('KNOWLEDGE_TREE')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'KNOWLEDGE_TREE' ? 'bg-emerald-900 text-white border border-emerald-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌳 Knowledge Tree
          </button>
          <button onClick={() => setActiveTab('WISDOM_ARCHIVE')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'WISDOM_ARCHIVE' ? 'bg-indigo-900 text-white border border-indigo-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            📖 Wisdom Archive
          </button>
          <button onClick={() => setActiveTab('MUTATION_HISTORY')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'MUTATION_HISTORY' ? 'bg-sky-900 text-white border border-sky-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🧬 Mutation History
          </button>
        </div>

        {activeTab === 'KNOWLEDGE_TREE' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">The African Knowledge Tree</h2>
            <p className="text-slate-400 mb-12 text-center">Mapping the roots of the past to the seeds of the future.</p>

            <div className="relative max-w-4xl mx-auto min-h-[600px] flex flex-col items-center justify-between py-12">
               
               {/* Background abstract tree shape */}
               <div className="absolute inset-0 pointer-events-none flex flex-col items-center opacity-10">
                  <div className="w-1 h-32 bg-emerald-500 mt-20"></div>
                  <div className="w-4 h-48 bg-emerald-500 rounded-lg"></div>
                  <div className="w-8 h-48 bg-emerald-500 rounded-lg"></div>
               </div>

               {/* LEAVES / SEEDS (Future Generation) */}
               <div className="z-10 w-full flex justify-center mb-8">
                  <div className="bg-emerald-950/40 border border-emerald-500 p-6 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.2)] text-center w-full max-w-lg">
                     <div className="text-3xl mb-2">🌱</div>
                     <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">Leaves & Seeds</div>
                     <h3 className="text-xl font-bold text-white mb-2">Curiosity Engine (Chappies)</h3>
                     <p className="text-sm text-emerald-200">Receiving inherited quests: "Explore water quality monitoring based on historical coal sampling lessons."</p>
                  </div>
               </div>

               {/* Flow UP to seeds */}
               <div className="z-10 text-emerald-500 animate-bounce mb-8">↑ GENERATIONAL TRANSFER ↑</div>

               {/* BRANCHES (Future Possibility) */}
               <div className="z-10 w-full flex justify-around mb-8">
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center w-1/3 mx-2">
                     <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Branch</div>
                     <div className="text-white font-bold text-sm">Future Enterprises</div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center w-1/3 mx-2">
                     <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Branch</div>
                     <div className="text-white font-bold text-sm">New Technologies</div>
                  </div>
               </div>

               {/* TRUNK (Present) */}
               <div className="z-10 w-full flex justify-center mb-8">
                  <div className="bg-slate-800 border-2 border-slate-700 p-8 rounded-xl text-center w-64 shadow-2xl">
                     <div className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">The Trunk (Present)</div>
                     <h3 className="text-2xl font-black text-white mb-2">Current Capability</h3>
                     <p className="text-xs text-slate-300">Melokuhle Sampling, MG Autobody, PJS Lab, AXIONYX</p>
                  </div>
               </div>

               {/* ROOTS (History) */}
               <div className="z-10 w-full flex justify-between mt-8 opacity-70">
                  <div className="text-center w-1/4">
                     <div className="text-amber-500 mb-1">●</div>
                     <div className="text-xs text-slate-400">Ancestors & Traditions</div>
                  </div>
                  <div className="text-center w-1/4">
                     <div className="text-amber-500 mb-1">●</div>
                     <div className="text-xs text-slate-400">Universities & Research</div>
                  </div>
                  <div className="text-center w-1/4">
                     <div className="text-amber-500 mb-1">●</div>
                     <div className="text-xs text-slate-400">Past Failures</div>
                  </div>
                  <div className="text-center w-1/4">
                     <div className="text-amber-500 mb-1">●</div>
                     <div className="text-xs text-slate-400">Siphanda Phansi</div>
                  </div>
               </div>

            </div>
          </div>
        )}

        {activeTab === 'WISDOM_ARCHIVE' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Wisdom Archive</h2>
            
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex gap-4 mb-8">
               <input type="text" placeholder="Search lessons..." className="flex-1 bg-transparent border-none text-white focus:outline-none" defaultValue="accreditation" />
               <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-bold transition-colors">Search Patterns</button>
            </div>

            <div className="space-y-6">
               <div className="bg-indigo-950/20 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <div className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1">Lesson #001</div>
                        <h3 className="text-xl font-bold text-white">Evidence institutions accelerate trust.</h3>
                     </div>
                     <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded font-bold">PATTERN DISCOVERED</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                     <div className="bg-slate-950 p-4 rounded border border-slate-800">
                        <div className="text-xs text-slate-500 font-bold uppercase mb-1">Causality Condition</div>
                        <div className="text-sm text-slate-300">High industrial pressure + Visible human capability + Evidence institution</div>
                     </div>
                     <div className="bg-slate-950 p-4 rounded border border-slate-800">
                        <div className="text-xs text-slate-500 font-bold uppercase mb-1">Historical Origin</div>
                        <div className="text-sm text-slate-300">PJS Lab integration with Melos OS</div>
                     </div>
                     <div className="bg-slate-950 p-4 rounded border border-slate-800">
                        <div className="text-xs text-emerald-500 font-bold uppercase mb-1">Resulting Impact</div>
                        <div className="text-sm text-emerald-300">Enterprise formation probability increases significantly.</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'MUTATION_HISTORY' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Capability Mutation Lineage</h2>
            
            <div className="max-w-3xl mx-auto py-8">
               <div className="relative border-l-2 border-sky-900/50 pl-8 space-y-12">
                  
                  <div className="relative">
                     <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[41px] top-1 shadow-[0_0_10px_#0ea5e9]"></div>
                     <div className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-1">The Seed (Past)</div>
                     <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h3 className="text-lg font-bold text-white">Siphanda Phansi CC</h3>
                        <p className="text-sm text-slate-400">Isolated capability without coordination.</p>
                     </div>
                  </div>

                  <div className="relative">
                     <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[41px] top-1 shadow-[0_0_10px_#3b82f6]"></div>
                     <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Digital Mutation</div>
                     <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h3 className="text-lg font-bold text-white">Global IT & Siyaphakamisa</h3>
                        <p className="text-sm text-slate-400">Creation of digital coordination and human capability visibility.</p>
                     </div>
                  </div>

                  <div className="relative">
                     <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[41px] top-1 shadow-[0_0_10px_#6366f1]"></div>
                     <div className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1">Ecosystem Mutation (Present)</div>
                     <div className="bg-slate-950 p-4 rounded-xl border border-indigo-900/50">
                        <h3 className="text-lg font-bold text-white">AXIONYX Intelligence Engine</h3>
                        <p className="text-sm text-slate-300">Macro-economic translation, Melos Prime governance, and regional coordination.</p>
                     </div>
                  </div>

                  <div className="relative">
                     <div className="absolute w-4 h-4 bg-fuchsia-500 rounded-full -left-[41px] top-1 shadow-[0_0_10px_#d946ef] animate-pulse"></div>
                     <div className="text-xs text-fuchsia-400 font-bold uppercase tracking-widest mb-1">Federated Mutation (Future)</div>
                     <div className="bg-slate-950 p-4 rounded-xl border border-fuchsia-900/50">
                        <h3 className="text-lg font-bold text-white">African Intelligence Federation</h3>
                        <p className="text-sm text-slate-300">Continental capability exchange protocol.</p>
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
