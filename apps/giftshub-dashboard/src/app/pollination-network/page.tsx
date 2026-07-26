"use client";
import React, { useState } from 'react';

export default function PollinationNetworkDashboard() {
  const [matchingStatus, setMatchingStatus] = useState<'IDLE' | 'ANALYZING' | 'MATCHED'>('IDLE');

  const ledgers = [
    { title: "RESOURCE LEDGER", desc: "Mpumalanga Coal, Platinum, Talent", color: "text-amber-500", border: "border-amber-900/50" },
    { title: "CAPABILITY LEDGER", desc: "450 Stage 3 Engineers, 12 Labs", color: "text-blue-500", border: "border-blue-900/50" },
    { title: "EVIDENCE LEDGER", desc: "89% Success Rate on localized repairs", color: "text-emerald-500", border: "border-emerald-900/50" },
    { title: "OPPORTUNITY LEDGER", desc: "Live Pollination Signals", color: "text-purple-500", border: "border-purple-900/50" }
  ];

  const handlePollinate = () => {
    setMatchingStatus('ANALYZING');
    setTimeout(() => {
      setMatchingStatus('MATCHED');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold text-purple-500">THE AFRICAN CAPABILITY BANK</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">IMPANDE POLLINATION NETWORK & OPPORTUNITY EXCHANGE</p>
      </header>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {ledgers.map((l, i) => (
          <div key={i} className={`p-4 border ${l.border} rounded-lg bg-black`}>
            <div className={`font-mono text-xs font-bold mb-2 ${l.color}`}>{l.title}</div>
            <div className="text-gray-300 text-sm">{l.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 h-[50vh]">
        
        {/* The Communication Soil */}
        <div className="border border-gray-800 rounded-lg p-6 bg-gray-900 flex flex-col">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">The Communication Soil (Input)</h2>
          
          <div className="flex-1 bg-black border border-gray-800 rounded p-4 font-mono text-sm overflow-y-auto space-y-4">
            <div className="text-gray-500 text-xs">SOURCE: WHATSAPP [eMalahleni Mine Manager Group]</div>
            <div className="text-green-400">"We have 20 farms and 3 local mines struggling with imported water monitoring sensors. They keep failing and we wait 6 weeks for replacements."</div>
            
            <div className="pt-4 mt-4 border-t border-gray-800">
              <div className="text-gray-500 text-xs mb-2">SYSTEM INTERPRETATION (Opportunity Ledger)</div>
              <div className="text-purple-400">Capability Gap Identified: Industrial Sensor Manufacturing & Maintenance</div>
              <div className="text-red-400">Demand Score: 0.95 (CRITICAL)</div>
            </div>
          </div>

          <button 
            onClick={handlePollinate}
            className="mt-4 w-full bg-purple-900/50 hover:bg-purple-800 text-purple-300 font-bold py-3 rounded border border-purple-700 transition-colors"
          >
            ACTIVATE POLLINATION NETWORK
          </button>
        </div>

        {/* The Capital Match */}
        <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">The Central Bank Match (Output)</h2>
          
          {matchingStatus === 'IDLE' && (
            <div className="h-full flex items-center justify-center text-gray-600 font-mono text-sm">
              Waiting for Opportunity Signal...
            </div>
          )}

          {matchingStatus === 'ANALYZING' && (
            <div className="h-full flex items-center justify-center text-purple-500 font-mono text-sm animate-pulse">
              Scanning Genome Map for Stage 3+ Capabilities...
            </div>
          )}

          {matchingStatus === 'MATCHED' && (
            <div className="animation-fade-in h-full flex flex-col justify-center space-y-6">
              <div className="p-4 border border-emerald-900/50 bg-emerald-950/20 rounded">
                <div className="text-emerald-500 font-mono text-xs font-bold mb-1">MATCH FOUND (EVIDENCE LEDGER VERIFIED)</div>
                <div className="text-gray-300 text-sm">
                  Found: <strong>Instrumentation Technician (Stage 3)</strong> + <strong>Electrical Engineer (Stage 3)</strong> in eMalahleni.
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

              <div className="p-4 border border-amber-900/50 bg-amber-950/20 rounded">
                <div className="text-amber-500 font-bold mb-1 text-lg">PROPOSE STAGE 4 BRANCH MERGER</div>
                <div className="text-gray-400 text-sm">
                  Capital follows evidence. Evidence follows action. Action follows need.<br/><br/>
                  <span className="text-amber-400 font-bold">STATUS: DEPLOY SUNLIGHT (CAPITAL UNLOCKED)</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
