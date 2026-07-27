"use client";
import React, { useState } from 'react';

export default function IThubaDashboard() {
  const [activeTab, setActiveTab] = useState<'DETECTOR' | 'OAP' | 'BIRTH'>('DETECTOR');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            A66.54: iThuba 
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Capability Marketplace & Opportunity Exchange Gateway
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "Capability becomes economic power only when connected to a verified opportunity."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('DETECTOR')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'DETECTOR' ? 'bg-indigo-900 text-white border border-indigo-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🎯 Opportunity Detector
          </button>
          <button onClick={() => setActiveTab('OAP')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'OAP' ? 'bg-blue-900 text-white border border-blue-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            📊 OAP Scoreboard
          </button>
          <button onClick={() => setActiveTab('BIRTH')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'BIRTH' ? 'bg-cyan-900 text-white border border-cyan-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🧬 Node Birth Predictor
          </button>
        </div>

        {activeTab === 'DETECTOR' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Opportunity Gap Matching</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-slate-950 p-6 rounded-xl border border-indigo-900/50">
                <div className="w-1/3">
                  <h3 className="text-slate-400 text-sm mb-1">Raw Capability (from iSebenza)</h3>
                  <div className="text-lg font-bold text-blue-400">Genetics + Chemistry Experience</div>
                  <div className="text-xs text-slate-500 mt-1">Sifiso & Gift</div>
                </div>
                <div className="w-1/6 text-center text-3xl text-slate-600">➔</div>
                <div className="w-1/3">
                  <h3 className="text-slate-400 text-sm mb-1">Industrial Problem</h3>
                  <div className="text-lg font-bold text-red-400">Mining Chain of Custody</div>
                  <div className="text-xs text-slate-500 mt-1">Mpumalanga Sector</div>
                </div>
                <div className="w-1/6 text-center text-3xl text-indigo-500">➔</div>
                <div className="w-1/3 text-right">
                  <h3 className="text-slate-400 text-sm mb-1">Detected Opportunity</h3>
                  <div className="text-lg font-bold text-indigo-400">Independent Sampling Services</div>
                  <div className="text-xs text-emerald-500 font-bold mt-1">Match Verified</div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-950 p-6 rounded-xl border border-indigo-900/50">
                <div className="w-1/3">
                  <h3 className="text-slate-400 text-sm mb-1">Raw Capability (from iSebenza)</h3>
                  <div className="text-lg font-bold text-blue-400">Mechanical Data + MG Autobody</div>
                  <div className="text-xs text-slate-500 mt-1">Suzuki Ertiga Network</div>
                </div>
                <div className="w-1/6 text-center text-3xl text-slate-600">➔</div>
                <div className="w-1/3">
                  <h3 className="text-slate-400 text-sm mb-1">Industrial Problem</h3>
                  <div className="text-lg font-bold text-red-400">High Mobility Downtime</div>
                  <div className="text-xs text-slate-500 mt-1">E-hailing Sector</div>
                </div>
                <div className="w-1/6 text-center text-3xl text-indigo-500">➔</div>
                <div className="w-1/3 text-right">
                  <h3 className="text-slate-400 text-sm mb-1">Detected Opportunity</h3>
                  <div className="text-lg font-bold text-indigo-400">Predictive Mobility Maintenance</div>
                  <div className="text-xs text-emerald-500 font-bold mt-1">Match Verified</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'OAP' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Opportunity Activation Probability (OAP)</h2>
            <p className="text-slate-400 mb-6">Predicting the likelihood of successful capability fusion.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Independent Sampling Services</h3>
                
                <div className="space-y-4">
                  {[
                    { label: 'Capability Strength', val: 90, color: 'bg-emerald-500' },
                    { label: 'Market Demand', val: 85, color: 'bg-blue-500' },
                    { label: 'Evidence Level', val: 95, color: 'bg-indigo-500' },
                    { label: 'Capital Availability', val: 60, color: 'bg-amber-500' },
                    { label: 'Network Support', val: 80, color: 'bg-purple-500' }
                  ].map(metric => (
                    <div key={metric.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">{metric.label}</span>
                        <span className="text-slate-300">{metric.val}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                         <div className={`${metric.color} h-1.5 rounded-full`} style={{ width: `${metric.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="font-bold text-slate-300">OAP Score</span>
                  <span className="text-3xl font-black text-emerald-400">82%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'BIRTH' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Node Birth Predictor</h2>
            
            <div className="inline-block bg-slate-950 p-8 rounded-2xl border border-cyan-900 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
               <div className="text-lg text-slate-400 mb-4">If the following conditions fuse:</div>
               <div className="text-xl font-bold text-blue-400 mb-2">Analytical Chemistry + Genetics</div>
               <div className="text-slate-500 mb-2">meets</div>
               <div className="text-xl font-bold text-red-400 mb-6">Chain of Custody Sampling Gap</div>
               
               <div className="text-sm text-cyan-500 mb-2">Predicted Industrial Node Output:</div>
               <div className="text-3xl font-black text-cyan-400 px-6 py-3 bg-cyan-950 rounded-xl border border-cyan-800">
                 Melokuhle Sampling Services
               </div>
               
               <div className="mt-8">
                 <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                   Pipe to CME Factory ➔
                 </button>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
