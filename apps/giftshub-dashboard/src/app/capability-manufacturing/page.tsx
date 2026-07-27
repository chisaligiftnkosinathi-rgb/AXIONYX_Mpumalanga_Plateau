"use client";
import React, { useState } from 'react';

export default function CapabilityManufacturingDashboard() {
  const [activeTab, setActiveTab] = useState<'FACTORY' | 'INCUBATOR'>('FACTORY');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
            A66.53: Capability Manufacturing Engine (CME)
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Intentional Cultivation of Human Potential
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('FACTORY')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'FACTORY' ? 'bg-orange-900 text-white border border-orange-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🏭 Capability Factory
          </button>
          <button onClick={() => setActiveTab('INCUBATOR')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'INCUBATOR' ? 'bg-yellow-900 text-white border border-yellow-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🧪 Node Incubator
          </button>
        </div>

        {activeTab === 'FACTORY' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Manufacturing Pipeline</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 bg-slate-950 p-6 rounded-xl border border-blue-900/50 text-center w-full">
                <span className="block text-2xl mb-2">👤</span>
                <span className="font-bold text-blue-400 block">Human Seed</span>
                <span className="text-xs text-slate-500">e.g. Sifiso / Gift</span>
              </div>
              <span className="text-2xl text-slate-600">+</span>
              <div className="flex-1 bg-slate-950 p-6 rounded-xl border border-purple-900/50 text-center w-full">
                <span className="block text-2xl mb-2">🧠</span>
                <span className="font-bold text-purple-400 block">Knowledge Substrate</span>
                <span className="text-xs text-slate-500">Genetics & Chemistry</span>
              </div>
              <span className="text-2xl text-slate-600">+</span>
              <div className="flex-1 bg-slate-950 p-6 rounded-xl border border-red-900/50 text-center w-full">
                <span className="block text-2xl mb-2">⚠️</span>
                <span className="font-bold text-red-400 block">Reality Pressure</span>
                <span className="text-xs text-slate-500">Mining Compliance</span>
              </div>
              <span className="text-2xl text-slate-600">➔</span>
              <div className="flex-1 bg-orange-950 p-6 rounded-xl border border-orange-500 text-center w-full shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <span className="block text-3xl mb-2">🏭</span>
                <span className="font-bold text-orange-400 block">New Node</span>
                <span className="text-xs text-orange-200">Melokuhle Sampling</span>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-950 rounded-xl border border-slate-800 text-center">
               <h3 className="text-slate-400 mb-2">Capability Production Rate (CPR)</h3>
               <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  4.2 Nodes / Year
               </div>
               <p className="text-sm text-slate-500 mt-2">Based on current Coordination Delay</p>
            </div>
          </div>
        )}

        {activeTab === 'INCUBATOR' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Candidate Incubation</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-emerald-400">Intelligent Car Doctor Node</h3>
                    <p className="text-sm text-slate-400">Ingredients: MG Autobody + Suzuki Ertiga Data + AI Diagnostics</p>
                  </div>
                  <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/50">
                    STAGE: PROTOTYPE
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-1/2"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Seed</span>
                  <span>Prototype</span>
                  <span>Commercial</span>
                  <span>Regional</span>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400">AXIONYX Laboratory Intelligence</h3>
                    <p className="text-sm text-slate-400">Ingredients: Imbally Lab + Analytical Chemistry + AXIONYX Digital</p>
                  </div>
                  <span className="bg-cyan-900/50 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/50">
                    STAGE: COMMERCIAL
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Seed</span>
                  <span>Prototype</span>
                  <span>Commercial</span>
                  <span>Regional</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
