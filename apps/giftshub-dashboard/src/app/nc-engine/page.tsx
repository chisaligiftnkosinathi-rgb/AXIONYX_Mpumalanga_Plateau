"use client";
import React, { useState } from 'react';

export default function NonConformanceEngine() {
  const [ncState, setNcState] = useState('EVIDENCE_REVIEW');

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-extrabold text-red-500">NON-CONFORMANCE ENGINE</h1>
        <p className="text-gray-400">Global Capability Management System (ISO 9001 / ISO 17025 Architecture)</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* NC Details */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <div className="flex justify-between items-start border-b border-gray-800 pb-4 mb-4">
            <div>
              <div className="text-red-500 font-mono text-sm font-bold">GIFT-HUB-NC-001</div>
              <h2 className="text-2xl font-bold text-gray-200 mt-1">Global Capability Translation Gap</h2>
            </div>
            <div className="bg-red-900/30 text-red-400 border border-red-900 px-3 py-1 rounded text-xs font-bold">
              STRATEGIC SEVERITY
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase">Root Cause (5-Why Confirmed)</h3>
            <p className="text-gray-300 bg-black p-4 rounded border border-gray-800 font-mono text-sm">
              Missing Industrial Translation Infrastructure. Markets optimize transactions, failing to bridge Research, Capital, and Manufacturing into sovereign capability.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase">Translation Bridge Status</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between p-2 bg-black border border-gray-800 rounded items-center">
                <span className="text-gray-300">Mineral → Material</span>
                <span className="text-red-500 flex items-center gap-2">🔴 NON-CONFORMING</span>
              </div>
              <div className="flex justify-between p-2 bg-black border border-gray-800 rounded items-center">
                <span className="text-gray-300">Research → Industry</span>
                <span className="text-orange-400 flex items-center gap-2">🟠 PARTIAL CONFORMANCE</span>
              </div>
              <div className="flex justify-between p-2 bg-black border border-gray-800 rounded items-center">
                <span className="text-gray-300">Demand → Strategy</span>
                <span className="text-orange-400 flex items-center gap-2">🟠 PARTIAL CONFORMANCE</span>
              </div>
            </div>
          </div>
        </section>

        {/* State Machine & Governance */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-emerald-400 border-b border-gray-800 pb-2">Capability Upgrade Pathway</h2>
          
          <div className="flex-1 flex flex-col justify-center space-y-4 font-mono text-xs mb-8 relative">
            {/* Connection Line */}
            <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-800 z-0"></div>

            {['DETECTED', 'ROOT_CAUSE_CONFIRMED', 'CAPA_IMPLEMENTATION', 'EVIDENCE_REVIEW', 'CAPABILITY_IMPROVED', 'CLOSED'].map((state, idx) => {
              const isActive = ncState === state;
              const isPast = ['DETECTED', 'ROOT_CAUSE_CONFIRMED', 'CAPA_IMPLEMENTATION'].includes(state) && ncState === 'EVIDENCE_REVIEW';
              
              let bgColor = 'bg-black';
              let borderColor = 'border-gray-800';
              let textColor = 'text-gray-600';

              if (isActive) {
                bgColor = 'bg-emerald-900/20';
                borderColor = 'border-emerald-500';
                textColor = 'text-emerald-400';
              } else if (isPast) {
                bgColor = 'bg-gray-800';
                borderColor = 'border-gray-600';
                textColor = 'text-gray-400';
              }

              return (
                <div key={state} className={`relative z-10 p-3 rounded border flex items-center gap-4 ${bgColor} ${borderColor} ${textColor}`}>
                  <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-emerald-500' : isPast ? 'bg-gray-500' : 'bg-gray-800'}`}></div>
                  {state}
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-black border border-emerald-900 rounded-lg">
            <h3 className="text-sm font-bold text-emerald-500 mb-2">Governance Action Required</h3>
            <p className="text-gray-400 text-xs mb-4">Evidence for "Advanced Materials Laboratory" submitted. Requires independent validation before Capability Upgrade Event is fired.</p>
            <button 
              onClick={() => setNcState('CAPABILITY_IMPROVED')}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded transition-colors text-sm"
            >
              VALIDATE EVIDENCE & UPGRADE CAPABILITY
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
