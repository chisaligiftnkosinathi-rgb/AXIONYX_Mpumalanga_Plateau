"use client";
import React, { useState } from 'react';

export default function AdaptiveControlEngine() {
  const [cycle, setCycle] = useState(0);

  // Company A: Hides Failures (Low Learning Velocity)
  const companyA = {
    name: "Supplier A",
    baseCapability: 0.60,
    deviations: 1, // 40% deviation
    learningVelocity: 0.0,
    newCapability: 0.60 - 0.40 // Dropped due to uncorrected deviation
  };

  // Company B: Learns Fast (High Learning Velocity)
  const companyB = {
    name: "Supplier B",
    baseCapability: 0.60,
    deviations: 1, // 40% deviation
    learningVelocity: 0.85,
    newCapability: Math.min(1.0, 0.60 + (0.40 * 0.85)) // Grew due to learning
  };

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-pink-500">ADAPTIVE CONTROL ENGINE</h1>
          <p className="text-gray-400">The Industrial Pendulum & Capability Growth</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">INTELLIGENCE LAYER</div>
          <div className="text-xl font-bold text-pink-500 font-mono">A66.8</div>
        </div>
      </header>

      {/* The Universal Equation */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-gray-900 border border-gray-800 rounded">
          <div className="text-xs text-gray-500 font-bold mb-1">INTELLIGENCE</div>
          <div className="text-sm text-pink-400 font-mono">OBSERVATION + LEARNING + ADAPTATION</div>
        </div>
        <div className="p-4 bg-gray-900 border border-pink-900/50 rounded">
          <div className="text-xs text-pink-500 font-bold mb-1">CAPABILITY GROWTH</div>
          <div className="text-sm text-pink-400 font-mono">CAPABILITY + LEARNING - DEVIATION</div>
        </div>
        <div className="p-4 bg-gray-900 border border-emerald-900/50 rounded">
          <div className="text-xs text-emerald-500 font-bold mb-1">WISDOM</div>
          <div className="text-sm text-emerald-400 font-mono">INTELLIGENCE + RESPONSIBILITY</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Company A */}
        <section className="bg-gray-900 p-6 rounded-lg border border-red-900/50 shadow-xl">
          <h2 className="text-xl font-bold mb-2 text-gray-200">{companyA.name}</h2>
          <div className="text-xs text-red-400 font-mono mb-6 tracking-widest">BEHAVIOUR: HIDES FAILURES</div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Base Capability</span>
              <span className="font-mono">{companyA.baseCapability.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Deviation Vector (D)</span>
              <span className="text-red-400 font-mono">40%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Learning Velocity (LV)</span>
              <span className="text-red-500 font-mono font-bold">0.00</span>
            </div>
          </div>

          {cycle > 0 && (
            <div className="p-4 bg-black border border-red-900/50 rounded text-center animation-fade-in">
              <div className="text-xs text-red-500 mb-1">NEW CAPABILITY</div>
              <div className="text-4xl font-bold text-red-400 font-mono">{companyA.newCapability.toFixed(2)}</div>
              <div className="text-xs text-gray-500 mt-2">Uncorrected deviation collapsed capability.</div>
            </div>
          )}
        </section>

        {/* Company B */}
        <section className="bg-gray-900 p-6 rounded-lg border border-emerald-900/50 shadow-xl">
          <h2 className="text-xl font-bold mb-2 text-gray-200">{companyB.name}</h2>
          <div className="text-xs text-emerald-400 font-mono mb-6 tracking-widest">BEHAVIOUR: MAXIMIZES LEARNING</div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Base Capability</span>
              <span className="font-mono">{companyB.baseCapability.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Deviation Vector (D)</span>
              <span className="text-amber-400 font-mono">40%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Learning Velocity (LV)</span>
              <span className="text-emerald-400 font-mono font-bold">0.85</span>
            </div>
          </div>

          {cycle > 0 && (
            <div className="p-4 bg-black border border-emerald-900/50 rounded text-center animation-fade-in">
              <div className="text-xs text-emerald-500 mb-1">NEW CAPABILITY</div>
              <div className="text-4xl font-bold text-emerald-400 font-mono">{companyB.newCapability.toFixed(2)}</div>
              <div className="text-xs text-gray-500 mt-2">High LV converted uncertainty into growth.</div>
            </div>
          )}
        </section>

      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={() => setCycle(1)}
          className="px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded shadow-lg shadow-pink-900/50 transition-all uppercase tracking-wider disabled:opacity-50"
          disabled={cycle > 0}
        >
          {cycle === 0 ? 'Execute Evolutionary Cycle' : 'Equilibrium Reached'}
        </button>
      </div>

    </div>
  );
}
