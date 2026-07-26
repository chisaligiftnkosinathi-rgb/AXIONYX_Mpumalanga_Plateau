"use client";
import React, { useState } from 'react';

export default function AcriPollinationDashboard() {
  const [showPollination, setShowPollination] = useState(false);

  const triggerPollination = () => {
    setShowPollination(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold text-amber-500">ACRI POLLINATION INTELLIGENCE</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">THE TRUST KING MODEL | THE MUSA INDEX</p>
      </header>

      <div className="flex justify-between items-center mb-8 bg-gray-900 p-4 border border-gray-800 rounded">
        <div className="text-sm font-mono text-gray-400">
          <div className="text-amber-500 font-bold mb-1">Musa Index (M) = (Value × Empowered × Trust) / Resources Consumed</div>
          <div>Flower Health = Capability × Trust × Collaboration × Adaptation</div>
        </div>
        <button 
          onClick={triggerPollination}
          disabled={showPollination}
          className={`px-6 py-2 font-bold rounded border transition-colors ${showPollination ? 'bg-emerald-950 border-emerald-900 text-emerald-500 cursor-not-allowed' : 'bg-emerald-900 hover:bg-emerald-800 text-white border-emerald-700'}`}
        >
          {showPollination ? "ECOSYSTEM ACTIVE" : "ACTIVATE POLLINATORS"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 h-[60vh]">
        
        {/* Isolated Flower */}
        <div className="border border-gray-800 bg-gray-900 rounded-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Flower A (Isolated Monopoly)</h2>
          
          <div className="flex-1 space-y-4 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Individual Capability:</span>
              <span className="text-white">95%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Collaboration Network:</span>
              <span className="text-red-500">5%</span>
            </div>
            
            <div className="mt-8 p-4 bg-black border border-gray-800 rounded">
              <div className="text-gray-500 text-xs mb-2">MUSA INDEX</div>
              <div className="flex justify-between">
                <span>Value Created: 100</span>
                <span>Resources: 90</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2 mb-2">
                <span>People Empowered: 1</span>
                <span>Trust: 0.5</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-400 font-bold">Score (M):</span>
                <span className="text-red-400 text-xl font-bold">0.55</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-4">This node consumes almost as much as it creates. It relies entirely on its own genetics. It leaves the garden weaker.</div>
          </div>
        </div>

        {/* Ecosystem Flower */}
        <div className={`border rounded-lg p-6 flex flex-col transition-all duration-1000 ${showPollination ? 'border-amber-900/50 bg-amber-950/10' : 'border-gray-800 bg-gray-900'}`}>
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Flower B (The Trust King)</h2>
          
          <div className="flex-1 space-y-4 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Individual Capability:</span>
              <span className="text-white">70%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Collaboration Network:</span>
              <span className="text-emerald-500">{showPollination ? '95%' : '10%'}</span>
            </div>

            {showPollination && (
              <div className="animation-fade-in space-y-4">
                <div className="p-3 bg-emerald-900/20 border border-emerald-900/50 rounded text-emerald-400 text-xs space-y-1">
                  <div>+ Scientist (Soil Knowledge)</div>
                  <div>+ Engineer (Irrigation)</div>
                  <div>+ Manufacturer (Scale)</div>
                  <div className="pt-1 mt-1 border-t border-emerald-900/50 text-amber-500">POLLINATION ACHIEVED</div>
                </div>

                <div className="mt-8 p-4 bg-black border border-amber-900/50 rounded">
                  <div className="text-amber-500 text-xs mb-2">MUSA INDEX (THE GARDENER)</div>
                  <div className="flex justify-between text-gray-300">
                    <span>Value Created: 100</span>
                    <span>Resources: 20</span>
                  </div>
                  <div className="flex justify-between text-gray-300 border-b border-gray-800 pb-2 mb-2">
                    <span>People Empowered: 15</span>
                    <span>Trust: 0.9</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400 font-bold">Score (M):</span>
                    <span className="text-amber-400 text-3xl font-bold">67.5</span>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mt-2">
                  This node acts as a super-connector. It creates massive circulation of capability. It leaves the garden exponentially stronger.
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
