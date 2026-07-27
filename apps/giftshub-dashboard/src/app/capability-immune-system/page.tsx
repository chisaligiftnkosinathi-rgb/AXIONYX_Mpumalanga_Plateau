"use client";
import React, { useState } from 'react';

export default function CapabilityImmuneSystemDashboard() {
  const [activeTab, setActiveTab] = useState<'CLR' | 'PROTOCOL'>('CLR');

  const clrMetrics = {
    financialStress: 90,
    operationalValue: 95,
    knowledgeValue: 80,
    replacementDifficulty: 85,
    socialImpact: 75
  };

  const calculateTotalRisk = () => {
    return (
      (clrMetrics.financialStress * 0.15) +
      (clrMetrics.operationalValue * 0.30) +
      (clrMetrics.knowledgeValue * 0.20) +
      (clrMetrics.replacementDifficulty * 0.20) +
      (clrMetrics.socialImpact * 0.15)
    ).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">
            A66.50: Capability Immune System
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "Capital should not only chase existing success. Intelligent capital should protect emerging capability before it disappears."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('CLR')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'CLR' ? 'bg-red-900 text-white border border-red-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🚨 Capability Loss Risk (CLR)
          </button>
          <button onClick={() => setActiveTab('PROTOCOL')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'PROTOCOL' ? 'bg-rose-900 text-white border border-rose-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ❤️ Recovery Protocol
          </button>
        </div>

        {activeTab === 'CLR' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Patient Zero: Suzuki Ertiga Node (KVD 367 MP)</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Traditional finance views the vehicle as an expense (installment + fuel + maintenance). 
              The AXIONYX Immune System views it as a critical discovery node. We measure the systemic risk if this node is lost.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Financial Stress (Arrears, Maintenance)', value: clrMetrics.financialStress, color: 'bg-red-500' },
                { label: 'Operational Value (Trips, Income)', value: clrMetrics.operationalValue, color: 'bg-emerald-500' },
                { label: 'Knowledge Value (Bolt Discovery, AXIONYX Research)', value: clrMetrics.knowledgeValue, color: 'bg-cyan-500' },
                { label: 'Replacement Difficulty (Intelligence Replacement)', value: clrMetrics.replacementDifficulty, color: 'bg-amber-500' },
                { label: 'Social Impact (Livelihood, Partners)', value: clrMetrics.socialImpact, color: 'bg-fuchsia-500' }
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-slate-300">{metric.label}</span>
                    <span className="text-slate-400">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className={`${metric.color} h-3 rounded-full`} style={{ width: `${metric.value}%` }}></div>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-slate-800 mt-8">
                <div className="flex justify-between items-center bg-slate-950 p-6 rounded-xl border border-red-900/50">
                  <span className="text-xl font-bold text-slate-300">Overall Capability Loss Risk</span>
                  <span className="text-4xl font-bold text-red-400">{calculateTotalRisk()}%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'PROTOCOL' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <h3 className="text-xl font-bold text-white mb-2">Phase 1: Stabilisation</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">Melos Prime: TRUTH</p>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Establish accurate financial reality</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Create maintenance baseline</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Negotiate transparently with creditors</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Prevent immediate asset loss</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <h3 className="text-xl font-bold text-white mb-2">Phase 2: Metabolism Repair</h3>
              <p className="text-amber-400 text-sm font-semibold mb-4">Melos Prime: ORDER</p>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-amber-500 mr-2">✓</span> Route Bolt income to core metabolism</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">✓</span> Optimize industrial visits for leads</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">✓</span> Activate predictive maintenance (MG Autobody)</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
              <h3 className="text-xl font-bold text-white mb-2">Phase 3: Growth</h3>
              <p className="text-rose-400 text-sm font-semibold mb-4">Melos Prime: MERCY & LOVE</p>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-rose-500 mr-2">✓</span> Transition to Intelligent Asset Prototype</li>
                <li className="flex items-start"><span className="text-rose-500 mr-2">✓</span> Scale model to industrial fleets</li>
                <li className="flex items-start"><span className="text-rose-500 mr-2">✓</span> Protect human livelihood indefinitely</li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
