"use client";
import React, { useState } from 'react';

export default function PlantOpportunityDashboard() {
  const [activeTab, setActiveTab] = useState<'GENESIS' | 'QUESTS'>('GENESIS');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            A66.56: Plant Opportunity Engine
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Reverse Capability Genesis Mechanism
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "An unresolved problem contains latent information about the skills required for its resolution."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('GENESIS')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'GENESIS' ? 'bg-orange-900 text-white border border-orange-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌱 Genesis Cycle
          </button>
          <button onClick={() => setActiveTab('QUESTS')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'QUESTS' ? 'bg-amber-900 text-white border border-amber-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            📜 Capability Quests
          </button>
        </div>

        {activeTab === 'GENESIS' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Top-Down Regeneration (Reality Driven)</h2>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-red-950/50 border border-red-900 p-4 rounded-xl text-center w-full max-w-lg">
                 <div className="text-sm text-red-400 font-bold mb-1">Reality Problem</div>
                 <div className="text-white">Carolina Transport Challenge</div>
              </div>
              <div className="text-2xl text-slate-600">↓</div>
              
              <div className="bg-orange-950/50 border border-orange-900 p-4 rounded-xl text-center w-full max-w-lg">
                 <div className="text-sm text-orange-400 font-bold mb-1">Opportunity Genome</div>
                 <div className="text-white">Mobility Opportunity Engine</div>
              </div>
              <div className="text-2xl text-slate-600">↓</div>

              <div className="bg-amber-950/50 border border-amber-900 p-4 rounded-xl text-center w-full max-w-lg">
                 <div className="text-sm text-amber-400 font-bold mb-1">Capability Blueprint</div>
                 <div className="text-slate-300 text-sm">
                   • Fleet Management<br/>
                   • Mechanical Diagnostics<br/>
                   • Software Engineering<br/>
                   • Driver Network
                 </div>
              </div>
              <div className="text-2xl text-slate-600">↓</div>

              <div className="bg-green-950/50 border border-green-900 p-4 rounded-xl text-center w-full max-w-lg">
                 <div className="text-sm text-green-400 font-bold mb-1">Chappies Learning Quests</div>
                 <div className="text-white text-sm">Targeting Carolina Youth & Mechanics</div>
              </div>
              <div className="text-2xl text-slate-600">↓</div>

              <div className="bg-teal-950/50 border border-teal-900 p-4 rounded-xl text-center w-full max-w-lg shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                 <div className="text-sm text-teal-400 font-bold mb-1">Enterprise Birth (CME)</div>
                 <div className="text-xl text-white font-black">Carolight Mobility Node</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'QUESTS' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Chappies Quest Integration</h2>
            <p className="text-slate-400 mb-8">Connecting bottom-up curiosity with top-down opportunity genomes.</p>

            <div className="bg-slate-950 p-6 rounded-xl border border-amber-900/50">
               <div className="flex flex-col md:flex-row justify-between gap-6">
                 
                 <div className="flex-1 bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Learner Input (Bottom-Up)</h3>
                    <div className="text-green-400 font-bold mb-1">Curiosity Signal:</div>
                    <div className="text-white italic">"How does water quality affect my community?"</div>
                    <div className="mt-4 pt-4 border-t border-slate-800">
                       <span className="text-xs text-slate-500 block">NGIX Tag:</span>
                       <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs">Environmental Science</span>
                    </div>
                 </div>

                 <div className="flex-1 bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Reality Input (Top-Down)</h3>
                    <div className="text-red-400 font-bold mb-1">Regional Need:</div>
                    <div className="text-white italic">Mining water monitoring compliance</div>
                    <div className="mt-4 pt-4 border-t border-slate-800">
                       <span className="text-xs text-slate-500 block">Opportunity Tag:</span>
                       <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs">Environmental Sampling</span>
                    </div>
                 </div>

               </div>

               <div className="mt-6 text-center">
                 <div className="text-3xl text-amber-500 mb-4">↓</div>
                 <div className="inline-block bg-amber-950 border border-amber-500 p-6 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] w-full max-w-2xl text-left">
                   <h3 className="text-lg font-bold text-amber-400 mb-3">Generated Capability Quest</h3>
                   <ul className="space-y-2 text-sm text-slate-300">
                     <li className="flex items-start">
                       <span className="text-amber-500 mr-2">1.</span> 
                       Align interest in water quality with industrial monitoring requirements.
                     </li>
                     <li className="flex items-start">
                       <span className="text-amber-500 mr-2">2.</span> 
                       Study chemistry basics and sampling protocols.
                     </li>
                     <li className="flex items-start">
                       <span className="text-amber-500 mr-2">3.</span> 
                       Perform local experiments and build an evidence portfolio.
                     </li>
                     <li className="flex items-start font-bold text-white mt-4">
                       <span className="text-emerald-500 mr-2">Goal:</span> 
                       Qualify for the Environmental Sampling Enterprise Node.
                     </li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
