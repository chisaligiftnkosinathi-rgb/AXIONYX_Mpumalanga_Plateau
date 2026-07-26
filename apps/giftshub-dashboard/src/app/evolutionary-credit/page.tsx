"use client";
import React, { useState } from 'react';

export default function EvolutionaryCreditDashboard() {
  const [droughtActive, setDroughtActive] = useState(false);

  const handleDrought = () => {
    setDroughtActive(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold text-blue-400">THE EVOLUTIONARY CREDIT SCORE</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">THE NEW GOLD STANDARD | METABOLIZING FAILURE</p>
      </header>

      <div className="flex justify-between items-center mb-8 bg-gray-900 p-4 border border-gray-800 rounded">
        <div className="text-sm font-mono text-gray-400">
          <span className="text-blue-400 font-bold">C_new = C_old + L_f + L_s</span> (Capability Growth = Success Evidence + Failure Intelligence)
        </div>
        <button 
          onClick={handleDrought}
          disabled={droughtActive}
          className={`px-6 py-2 font-bold rounded border transition-colors ${droughtActive ? 'bg-red-950 border-red-900 text-red-500 cursor-not-allowed' : 'bg-red-900 hover:bg-red-800 text-white border-red-700'}`}
        >
          {droughtActive ? "DROUGHT ACTIVE" : "SIMULATE DROUGHT (FAILURE)"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 h-[60vh]">
        
        {/* Tree A (Traditional) */}
        <div className={`border rounded-lg p-6 flex flex-col transition-all duration-1000 ${droughtActive ? 'border-red-900/50 bg-red-950/10' : 'border-gray-800 bg-gray-900'}`}>
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Tree A (Untested Success)</h2>
          
          <div className="flex-1 space-y-4 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">C_old (Base Capability):</span>
              <span className="text-white">80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">L_s (Success Intelligence):</span>
              <span className="text-white">20</span>
            </div>
            
            {droughtActive && (
              <div className="animation-fade-in space-y-4 pt-4 border-t border-gray-800">
                <div className="p-3 bg-red-900/20 border border-red-900/50 rounded text-red-400">
                  CRITICAL FAILURE DETECTED (Supply Chain Shock)
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">L_f (Failure Intelligence):</span>
                  <span className="text-red-500 font-bold">0 (No Learning)</span>
                </div>
                <div className="text-xs text-gray-500">Tree experienced pain but gained no intelligence.</div>
                
                <div className="mt-8 p-4 bg-black border border-gray-800 rounded flex justify-between items-center">
                  <span className="text-gray-400 font-bold">Evolutionary Score (C_new):</span>
                  <span className="text-red-400 text-2xl font-bold">100</span>
                </div>
                <div className="text-red-500 text-center font-bold text-sm mt-2">CAPITAL WITHDRAWN</div>
              </div>
            )}
          </div>
        </div>

        {/* Tree B (Impande) */}
        <div className={`border rounded-lg p-6 flex flex-col transition-all duration-1000 ${droughtActive ? 'border-emerald-900/50 bg-emerald-950/10' : 'border-gray-800 bg-gray-900'}`}>
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Tree B (Metabolized Failure)</h2>
          
          <div className="flex-1 space-y-4 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">C_old (Base Capability):</span>
              <span className="text-white">60</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">L_s (Success Intelligence):</span>
              <span className="text-white">10</span>
            </div>

            {droughtActive && (
              <div className="animation-fade-in space-y-4 pt-4 border-t border-gray-800">
                <div className="p-3 bg-red-900/20 border border-red-900/50 rounded text-red-400">
                  CRITICAL FAILURE DETECTED (Supply Chain Shock)
                </div>
                
                <div className="p-3 bg-emerald-900/20 border border-emerald-900/50 rounded text-emerald-400 space-y-1">
                  <div>+ Root Cause Identified</div>
                  <div>+ Correction Implemented</div>
                  <div>+ New Civilizational Standard Created</div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">L_f (Failure Intelligence):</span>
                  <span className="text-emerald-500 font-bold">40 (Metabolized)</span>
                </div>
                <div className="text-xs text-gray-500">Tree converted pressure into capability. Grew deeper roots.</div>
                
                <div className="mt-8 p-4 bg-black border border-gray-800 rounded flex justify-between items-center">
                  <span className="text-gray-400 font-bold">Evolutionary Score (C_new):</span>
                  <span className="text-emerald-400 text-2xl font-bold">110</span>
                </div>
                <div className="text-emerald-500 text-center font-bold text-sm mt-2">CAPITAL DEPLOYED (SUNLIGHT)</div>
              </div>
            )}
          </div>
        </div>

      </div>

      {droughtActive && (
        <div className="mt-8 p-6 bg-blue-950/20 border border-blue-900/50 rounded-lg animation-fade-in">
          <div className="text-blue-500 font-mono text-xs font-bold mb-2">THE NEW GOLD STANDARD</div>
          <div className="text-xl font-bold text-gray-300">
            Gold Standard = (Verified Capability × Trust × Learning) / Systemic Risk
          </div>
          <p className="text-gray-400 mt-2 text-sm">
            AMEN: "I say this is true" ➔ "Reality confirms it." <br/>
            Wealth is not the possession of resources; wealth is the ability to transform resources through trusted relationships into lasting value.
          </p>
        </div>
      )}
    </div>
  );
}
