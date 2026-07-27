"use client";
import React, { useState } from 'react';

export default function EcosystemGrowthDashboard() {
  const [activeTab, setActiveTab] = useState<'OBSERVATORY' | 'MUTATION'>('OBSERVATORY');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-400">
            A66.57: Ecosystem Growth & Impact Measurement
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            The Living Forest Observatory
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "A mature ecosystem is one that continuously measures, protects, regenerates, and evolves capability."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('OBSERVATORY')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'OBSERVATORY' ? 'bg-emerald-900 text-white border border-emerald-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌳 Forest Health Scanner
          </button>
          <button onClick={() => setActiveTab('MUTATION')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'MUTATION' ? 'bg-lime-900 text-white border border-lime-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🧬 Ecosystem Mutation Predictor
          </button>
        </div>

        {activeTab === 'OBSERVATORY' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-8">AXIONYX Forest Observatory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                <div className="text-sm text-slate-400 font-bold mb-2 uppercase tracking-widest">Survival Rate</div>
                <div className="text-4xl font-black text-emerald-400">92%</div>
                <div className="text-xs text-slate-500 mt-2">Operational continuity of nodes</div>
              </div>
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                <div className="text-sm text-slate-400 font-bold mb-2 uppercase tracking-widest">Capability Density</div>
                <div className="text-4xl font-black text-blue-400">High</div>
                <div className="text-xs text-slate-500 mt-2">Intelligence packed per node</div>
              </div>
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                <div className="text-sm text-slate-400 font-bold mb-2 uppercase tracking-widest">Coord Velocity</div>
                <div className="text-4xl font-black text-indigo-400">1.8x</div>
                <div className="text-xs text-slate-500 mt-2">Ecosystem response speed</div>
              </div>
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                <div className="text-sm text-slate-400 font-bold mb-2 uppercase tracking-widest">Regeneration Rate</div>
                <div className="text-4xl font-black text-teal-400">3.0</div>
                <div className="text-xs text-slate-500 mt-2">New nodes born from existing</div>
              </div>
            </div>

            <div className="relative bg-slate-950 p-8 rounded-xl border border-emerald-900/30 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-slate-950 to-slate-950"></div>
               
               <div className="relative z-10 flex flex-col items-center">
                  <div className="text-6xl mb-2 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">🌳</div>
                  <div className="text-xl font-bold text-white mb-8">AXIONYX Core</div>

                  <div className="flex flex-wrap justify-center gap-12 mb-8">
                     <div className="text-center group cursor-pointer">
                        <div className="text-5xl mb-2 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-transform group-hover:scale-110">🌲</div>
                        <div className="text-sm font-bold text-sky-400">Mobility Node</div>
                        <div className="text-xs text-slate-500">MG Autobody</div>
                     </div>
                     <div className="text-center group cursor-pointer">
                        <div className="text-5xl mb-2 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] transition-transform group-hover:scale-110">🌲</div>
                        <div className="text-sm font-bold text-amber-400">Mining Node</div>
                        <div className="text-xs text-slate-500">Melokuhle Sampling</div>
                     </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                     <div className="text-center">
                        <div className="text-2xl mb-1 text-emerald-600">🌱</div>
                        <div className="text-xs text-slate-400">Skills Active</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl mb-1 text-emerald-600">🌱</div>
                        <div className="text-xs text-slate-400">SMEs Funded</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl mb-1 text-emerald-600">🌱</div>
                        <div className="text-xs text-slate-400">Learners Engaged</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'MUTATION' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Capability Mutation Predictor</h2>
            <p className="text-slate-400 mb-8">Discovering future nodes based on pressure and existing density.</p>

            <div className="bg-slate-950 p-8 rounded-xl border border-lime-900/50">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                 
                 <div className="flex-1 space-y-6 w-full">
                    <div className="bg-slate-900 p-4 rounded-lg border border-red-900/30">
                       <h3 className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Environmental Pressure</h3>
                       <div className="text-red-400 font-bold">Coal Transition & Water Scarcity</div>
                    </div>
                    <div className="text-center text-slate-600 text-2xl">+</div>
                    <div className="bg-slate-900 p-4 rounded-lg border border-blue-900/30">
                       <h3 className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Existing Forest DNA</h3>
                       <div className="text-blue-400 font-bold">Analytical Chemistry + Mining Systems</div>
                    </div>
                 </div>

                 <div className="text-3xl text-lime-500 my-4 md:my-0">➔</div>

                 <div className="flex-1 w-full">
                    <div className="bg-lime-950/30 p-6 rounded-xl border border-lime-500 shadow-[0_0_25px_rgba(132,204,22,0.15)]">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h3 className="text-xs text-lime-600 font-bold uppercase tracking-wider mb-1">Mutation Candidate</h3>
                             <div className="text-xl font-bold text-lime-400">Clean Energy Intelligence Node</div>
                          </div>
                          <div className="bg-lime-900 text-lime-400 text-xs px-2 py-1 rounded font-bold">68% Prob</div>
                       </div>

                       <div className="space-y-4 border-t border-lime-900/50 pt-4 mt-4">
                          <div>
                             <div className="text-xs text-slate-400 mb-1">Required Missing Capability:</div>
                             <div className="flex gap-2 flex-wrap">
                                <span className="bg-slate-900 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700">Renewable Engineering</span>
                                <span className="bg-slate-900 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700">Carbon Accounting</span>
                             </div>
                          </div>
                          <div>
                             <div className="text-xs text-slate-400 mb-1">Activation Conditions:</div>
                             <div className="text-sm text-white">Targeted Capital & High Coordination Velocity</div>
                          </div>
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
