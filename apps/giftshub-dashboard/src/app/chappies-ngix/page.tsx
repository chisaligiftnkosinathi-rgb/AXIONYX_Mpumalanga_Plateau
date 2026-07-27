"use client";
import React, { useState } from 'react';

export default function ChappiesDashboard() {
  const [activeTab, setActiveTab] = useState<'CURIOSITY' | 'NGIX'>('CURIOSITY');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
            A66.55: Chappies & NGIX
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            The Curiosity Engine & Knowledge Intelligence Exchange
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "Industrial capability begins when a mind encounters reality and chooses to understand it."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('CURIOSITY')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'CURIOSITY' ? 'bg-green-900 text-white border border-green-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌱 Curiosity Detector
          </button>
          <button onClick={() => setActiveTab('NGIX')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'NGIX' ? 'bg-emerald-900 text-white border border-emerald-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🧠 NGIX Knowledge Graph
          </button>
        </div>

        {activeTab === 'CURIOSITY' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Curiosity ➔ Capability Pipeline</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between bg-slate-950 p-8 rounded-xl border border-green-900/50">
               <div className="text-center w-full">
                 <div className="text-4xl mb-3">❓</div>
                 <div className="text-green-400 font-bold text-lg">Curiosity Question</div>
                 <div className="text-slate-400 text-sm italic mt-2">"How is coal analysed?"</div>
               </div>
               
               <div className="text-3xl text-slate-600 my-4 md:my-0">➔</div>
               
               <div className="text-center w-full">
                 <div className="text-4xl mb-3">📚</div>
                 <div className="text-emerald-400 font-bold text-lg">Learning Pathway</div>
                 <div className="text-slate-400 text-sm mt-2">Analytical Chemistry <br/> + Mining Science</div>
               </div>
               
               <div className="text-3xl text-slate-600 my-4 md:my-0">➔</div>
               
               <div className="text-center w-full">
                 <div className="text-4xl mb-3">👁️</div>
                 <div className="text-teal-400 font-bold text-lg">iSebenza Node</div>
                 <div className="text-slate-400 text-sm mt-2">Visible Capability <br/> (Laboratory Specialist)</div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'NGIX' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">NGIX: Academic ➔ Industrial Translation</h2>
            <p className="text-slate-400 mb-8">Translating foundational academic knowledge into practical industrial capability.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Sifiso's Genome</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-slate-500 text-xs uppercase tracking-wider">Academic Input</span>
                    <span className="text-lg text-emerald-400 font-bold">UNISA Genetics Research</span>
                  </div>
                  <div className="pl-4 border-l-2 border-emerald-900 py-2">
                    <span className="block text-slate-500 text-xs uppercase tracking-wider mb-2">NGIX Translation</span>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>➔ Biotechnology</li>
                      <li>➔ Environmental Monitoring</li>
                      <li>➔ Sampling Science & Chain of Custody</li>
                    </ul>
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs uppercase tracking-wider">Industrial Output</span>
                    <span className="text-lg text-teal-400 font-bold">Melokuhle Co-Founder</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-center items-center">
                 <div className="text-center mb-6">
                   <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Curiosity Conservation Law</div>
                   <div className="text-lg text-slate-300 italic">"Every question is a potential capability seed."</div>
                 </div>
                 
                 <div className="w-full bg-slate-900 rounded-lg p-4 text-center border border-green-900/30">
                   <span className="text-green-500 font-bold">Seed</span> <span className="text-slate-600 px-2">→</span>
                   <span className="text-emerald-500 font-bold">Learner</span> <span className="text-slate-600 px-2">→</span>
                   <span className="text-teal-500 font-bold">Expert</span>
                 </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
