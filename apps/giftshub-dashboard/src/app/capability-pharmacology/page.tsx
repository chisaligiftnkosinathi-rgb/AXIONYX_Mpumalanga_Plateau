"use client";
import React, { useState } from 'react';

export default function CapabilityPharmacologyEngine() {
  const [activeProfile, setActiveProfile] = useState<'DANGEROUS' | 'TRUSTED'>('TRUSTED');

  const dangerousCompound = {
    title: "UNKNOWN CAPABILITY SUBSTANCE",
    environment: "Mpumalanga Mobility Imbalance",
    intent: "Short-term extraction (Profit)",
    activeIngredient: "Unverified Manufacturing",
    excipients: ["Informal Supply", "Unmeasured Electricity"],
    evidence: 0.15,
    pharmacovigilance: 0.0,
    classification: "DANGEROUS_COMPOUND",
    action: "DO NOT DEPLOY CAPITAL. Unknown variables introduce systemic toxicity.",
    color: "red"
  };

  const trustedMedicine = {
    title: "VERIFIED CAPABILITY COMPOUND",
    environment: "Mpumalanga Mobility Imbalance",
    intent: "Capability Development",
    activeIngredient: "Precision Materials Engineering",
    excipients: ["Energy Grid", "Quality Laboratory", "Capital Network"],
    evidence: 0.95,
    pharmacovigilance: 0.92,
    classification: "TRUSTED_MEDICINE",
    action: "DEPLOY SYSTEMIC CAPITAL. Compound heals environmental imbalance safely.",
    color: "emerald"
  };

  const active = activeProfile === 'TRUSTED' ? trustedMedicine : dangerousCompound;

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-500">CAPABILITY PHARMACOLOGY</h1>
          <p className="text-gray-400">Classifying the Active Ingredients of Civilization</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">PHARMACOPOEIA LAYER</div>
          <div className="text-xl font-bold text-indigo-500 font-mono">A66.10</div>
        </div>
      </header>

      {/* Profile Switcher */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveProfile('TRUSTED')}
          className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeProfile === 'TRUSTED' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400'}`}
        >
          [ TRUSTED MEDICINE ]
        </button>
        <button 
          onClick={() => setActiveProfile('DANGEROUS')}
          className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeProfile === 'DANGEROUS' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400'}`}
        >
          [ DANGEROUS COMPOUND ]
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Environment & Diagnosis */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-gray-200 border-b border-gray-800 pb-2">The Diagnosis</h2>
          
          <div className="space-y-6">
            <div>
              <div className="text-xs text-indigo-400 font-bold mb-1">ENVIRONMENTAL CONDITION (THE PATIENT)</div>
              <div className="text-lg font-mono text-white p-3 bg-black border border-gray-800 rounded">{active.environment}</div>
            </div>
            
            <div>
              <div className="text-xs text-indigo-400 font-bold mb-1">INTENT (THE TREATMENT GOAL)</div>
              <div className="text-lg font-mono text-white p-3 bg-black border border-gray-800 rounded">{active.intent}</div>
            </div>
          </div>
        </section>

        {/* The Capability Insert */}
        <section className={`bg-gray-900 p-6 rounded-lg border shadow-xl ${active.color === 'emerald' ? 'border-emerald-900/50' : 'border-red-900/50'}`}>
          <h2 className={`text-xl font-bold mb-6 border-b pb-2 ${active.color === 'emerald' ? 'text-emerald-400 border-emerald-900/50' : 'text-red-400 border-red-900/50'}`}>
            Capability Insert: {active.title}
          </h2>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center p-2 bg-black rounded">
              <span className="text-gray-400">ACTIVE INGREDIENT</span>
              <span className="text-white font-bold">{active.activeIngredient}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded">
              <span className="text-gray-400">EXCIPIENTS (SUPPORT)</span>
              <span className="text-gray-300">{active.excipients.join(' + ')}</span>
            </div>
            
            <div className="flex justify-center my-4">
              <div className="w-full h-px bg-gray-800"></div>
            </div>

            <div className="flex justify-between items-center p-2 bg-black rounded">
              <span className="text-gray-400">EVIDENCE MATURITY (TESTING)</span>
              <span className={`font-bold ${active.color === 'emerald' ? 'text-emerald-400' : 'text-red-400'}`}>{(active.evidence * 100).toFixed(0)}%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded">
              <span className="text-gray-400">PHARMACOVIGILANCE (LEARNING)</span>
              <span className={`font-bold ${active.color === 'emerald' ? 'text-emerald-400' : 'text-red-400'}`}>{(active.pharmacovigilance * 100).toFixed(0)}%</span>
            </div>
          </div>

          <div className={`mt-6 p-4 border rounded text-center animation-fade-in ${active.color === 'emerald' ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-red-950/30 border-red-500/50'}`}>
            <div className={`text-xs mb-1 font-bold ${active.color === 'emerald' ? 'text-emerald-400' : 'text-red-400'}`}>CLINICAL CLASSIFICATION: {active.classification}</div>
            <div className="text-sm text-white font-mono mt-2">
              {active.action}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
