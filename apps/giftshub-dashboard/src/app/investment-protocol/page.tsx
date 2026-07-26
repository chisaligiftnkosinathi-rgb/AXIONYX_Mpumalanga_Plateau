"use client";
import React, { useState } from 'react';

export default function InvestmentProtocolEngine() {
  const [evidenceDeployed, setEvidenceDeployed] = useState(false);

  // The Omars Case Study - Before
  const beforeMetrics = { d: 0.95, c: 0.85, e: 0.15, l: 0.80 };
  const beforeScore = (beforeMetrics.d * beforeMetrics.c * beforeMetrics.e * beforeMetrics.l).toFixed(3);

  // The Omars Case Study - After Walala Wasala Intervention
  const afterMetrics = { d: 0.95, c: 0.90, e: 0.88, l: 0.85 };
  const afterScore = (afterMetrics.d * afterMetrics.c * afterMetrics.e * afterMetrics.l).toFixed(3);

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-500">WALALA WASALA INVESTMENT PROTOCOL</h1>
          <p className="text-gray-400">Capital as an Industrial Catalyst</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">FINANCIAL LAYER</div>
          <div className="text-xl font-bold text-blue-500 font-mono">A66.6</div>
        </div>
      </header>

      <div className="mb-8 p-6 bg-black border border-gray-800 rounded text-center max-w-3xl mx-auto shadow-xl">
        <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4">THE GROWTH EQUATION</h2>
        <div className="text-2xl font-mono text-blue-400 font-bold">
          POTENTIAL = DEMAND × CAPABILITY × EVIDENCE × LEARNING
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Current Reality (Without Evidence) */}
        <section className={`p-6 rounded-lg border transition-all duration-500 ${evidenceDeployed ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-900 border-red-900/50 shadow-[0_0_15px_rgba(127,29,29,0.2)]'}`}>
          <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-2">
            <h2 className="text-xl font-bold text-gray-200">Pre-Intervention Reality</h2>
            <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-400 font-mono">NODE: OMARS DEALERSHIP</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-3 bg-black rounded border border-gray-800">
              <span className="text-gray-400 text-sm">Demand Intensity</span>
              <span className="text-emerald-400 font-mono font-bold">0.95</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black rounded border border-gray-800">
              <span className="text-gray-400 text-sm">Operational Capability</span>
              <span className="text-emerald-400 font-mono font-bold">0.85</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-950/30 rounded border border-red-900/50">
              <span className="text-red-400 text-sm font-bold">Evidence Maturity</span>
              <span className="text-red-500 font-mono font-bold">0.15</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black rounded border border-gray-800">
              <span className="text-gray-400 text-sm">Learning Rate</span>
              <span className="text-emerald-400 font-mono font-bold">0.80</span>
            </div>
          </div>

          <div className="text-center p-4 bg-black border border-gray-800 rounded mb-6">
            <div className="text-xs text-gray-500 mb-1">INVESTMENT POTENTIAL</div>
            <div className="text-3xl font-mono text-gray-300 font-bold">{beforeScore}</div>
          </div>

          <div className="p-4 bg-gray-800 rounded border border-gray-700 text-sm text-gray-300">
            <strong className="text-gray-400 block mb-1">TRADITIONAL BANK DECISION:</strong>
            "No collateral, high perceived risk. Loan Rejected."
          </div>

          {!evidenceDeployed && (
             <button 
             onClick={() => setEvidenceDeployed(true)}
             className="w-full py-4 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow-lg shadow-blue-900/50 transition-all uppercase tracking-wider"
           >
             Deploy Walala Wasala Evidence Layer
           </button>
          )}
        </section>

        {/* Upgraded Reality (With Evidence) */}
        <section className={`p-6 rounded-lg border transition-all duration-1000 ${evidenceDeployed ? 'bg-gray-900 border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'opacity-20 pointer-events-none border-gray-800 bg-gray-950'}`}>
          <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-2">
            <h2 className="text-xl font-bold text-blue-400">Post-Intervention State</h2>
            <span className="px-2 py-1 bg-blue-900/30 text-xs rounded text-blue-400 font-mono border border-blue-800/50">EVIDENCE UPGRADED</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-3 bg-black rounded border border-gray-800">
              <span className="text-gray-400 text-sm">Demand Intensity</span>
              <span className="text-emerald-400 font-mono font-bold">0.95</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black rounded border border-gray-800">
              <span className="text-gray-400 text-sm">Operational Capability</span>
              <span className="text-emerald-400 font-mono font-bold">0.90</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-950/30 rounded border border-blue-500/50">
              <span className="text-blue-400 text-sm font-bold">Evidence Maturity</span>
              <span className="text-blue-500 font-mono font-bold">0.88</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black rounded border border-gray-800">
              <span className="text-gray-400 text-sm">Learning Rate</span>
              <span className="text-emerald-400 font-mono font-bold">0.85</span>
            </div>
          </div>

          <div className="text-center p-4 bg-black border border-blue-900/50 rounded mb-6">
            <div className="text-xs text-blue-400 mb-1">NEW INVESTMENT POTENTIAL</div>
            <div className="text-4xl font-mono text-white font-bold">{afterScore}</div>
          </div>

          <div className="p-4 bg-blue-900/20 rounded border border-blue-800/50 text-sm text-gray-200">
            <strong className="text-blue-400 block mb-1">WALALA WASALA DECISION:</strong>
            "High Demand + High Capability + Verified Evidence. <br/>
            Triggering Industrial Capital Deployment."
          </div>
        </section>

      </div>
    </div>
  );
}
