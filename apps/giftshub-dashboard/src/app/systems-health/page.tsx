"use client";
import React, { useState } from 'react';

export default function SystemsHealthEngine() {
  const [activeDomain, setActiveDomain] = useState<'ENERGY' | 'PHARMA'>('ENERGY');
  const [impurityDetected, setImpurityDetected] = useState(false);

  // Health Equation = (E * I * C * Env * R) * LV
  const baseMetrics = { e: 0.9, i: 0.95, c: 0.85, env: 0.80, r: 0.90, lv: 0.95 };
  const healthScore = (baseMetrics.e * baseMetrics.i * baseMetrics.c * baseMetrics.env * baseMetrics.r * baseMetrics.lv).toFixed(3);

  const energyScenario = {
    title: "Emalahleni Energy System",
    sensor: "Coal Quality Spectrometer",
    expected: "Sulphur: 0.5%",
    observed: "Sulphur: 1.2%",
    deviation: "140% Deviation Vector",
    reaction: "Isolating coal batch from turbine feed. Modifying combustion temperature parameters."
  };

  const pharmaScenario = {
    title: "Pharmaceutical Quality System",
    sensor: "Active Ingredient Assay",
    expected: "Purity: 99.8%",
    observed: "Purity: 99.1%",
    deviation: "0.7% Deviation Vector",
    reaction: "Quarantining Batch MED-001. Tracing impurity back to chemical synthesis node."
  };

  const active = activeDomain === 'ENERGY' ? energyScenario : pharmaScenario;

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-cyan-500">SYSTEMS HEALTH ENGINE</h1>
          <p className="text-gray-400">The Digital Immune System of Industrial Capability</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">HEALTH LAYER</div>
          <div className="text-xl font-bold text-cyan-500 font-mono">A66.9</div>
        </div>
      </header>

      {/* Domain Switcher */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => { setActiveDomain('ENERGY'); setImpurityDetected(false); }}
          className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeDomain === 'ENERGY' ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-400'}`}
        >
          [ EMALAHLENI ENERGY NODE ]
        </button>
        <button 
          onClick={() => { setActiveDomain('PHARMA'); setImpurityDetected(false); }}
          className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeDomain === 'PHARMA' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400'}`}
        >
          [ PHARMACOLOGY NODE ]
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* The 5 Nodes */}
        <section className="lg:col-span-1 bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-gray-200 border-b border-gray-800 pb-2">The Emalahleni Model</h2>
          
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-800">
              <span className="text-gray-400">Energy (E)</span>
              <span className="text-cyan-400">{baseMetrics.e}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-cyan-900/30 rounded border border-cyan-500/50">
              <span className="text-cyan-300 font-bold">Instrumentation (I)</span>
              <span className="text-cyan-400 font-bold">{baseMetrics.i}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-800">
              <span className="text-gray-400">Capability (C)</span>
              <span className="text-cyan-400">{baseMetrics.c}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-800">
              <span className="text-gray-400">Environment (Env)</span>
              <span className="text-cyan-400">{baseMetrics.env}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-800">
              <span className="text-gray-400">Resources (R)</span>
              <span className="text-cyan-400">{baseMetrics.r}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-pink-900/20 rounded border border-pink-900/50 mt-4">
              <span className="text-pink-400">Learning Vel. (LV)</span>
              <span className="text-pink-400">{baseMetrics.lv}</span>
            </div>
          </div>

          <div className="mt-6 text-center p-4 bg-black border border-cyan-900/50 rounded">
            <div className="text-xs text-gray-500 mb-1">INDUSTRIAL HEALTH SCORE</div>
            <div className="text-3xl font-bold text-white font-mono">{healthScore}</div>
          </div>
        </section>

        {/* Reaction Chamber */}
        <section className="lg:col-span-2 bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b border-gray-800 pb-2">Digital Immune System: {active.title}</h2>
          
          <div className="flex-1 flex flex-col justify-center items-center">
            {!impurityDetected ? (
              <div className="text-center w-full">
                <div className="p-8 bg-black border border-gray-800 rounded-full w-48 h-48 mx-auto flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                  <span className="text-cyan-500 font-mono font-bold tracking-widest text-sm">EQUILIBRIUM</span>
                </div>
                <button 
                  onClick={() => setImpurityDetected(true)}
                  className="px-8 py-4 bg-red-900/80 hover:bg-red-800 text-white font-bold rounded shadow-lg shadow-red-900/50 transition-all uppercase tracking-wider border border-red-500/50"
                >
                  Simulate Environmental Impurity
                </button>
              </div>
            ) : (
              <div className="w-full animation-fade-in space-y-4">
                <div className="p-4 bg-red-950/40 border border-red-900/50 rounded flex justify-between items-center">
                  <div>
                    <div className="text-xs text-red-400 font-bold mb-1">SENSOR ALERT: {active.sensor}</div>
                    <div className="text-sm text-gray-300 font-mono line-through opacity-50">Expected: {active.expected}</div>
                    <div className="text-lg text-white font-mono font-bold">Observed: {active.observed}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">{active.deviation}</div>
                  </div>
                </div>

                <div className="flex justify-center my-2">
                  <div className="w-1 h-8 bg-gray-700"></div>
                </div>

                <div className="p-4 bg-black border border-gray-800 rounded">
                  <div className="text-xs text-gray-500 font-bold mb-2">IMMUNE RESPONSE INITIATED</div>
                  <div className="text-sm text-gray-300">
                    Impurity is treated as a signal of an unknown state, not an enemy.
                  </div>
                </div>

                <div className="flex justify-center my-2">
                  <div className="w-1 h-8 bg-gray-700"></div>
                </div>

                <div className="p-4 bg-cyan-950/30 border border-cyan-500/50 rounded text-center">
                  <div className="text-cyan-400 font-bold mb-1">ADAPTIVE CORRECTION</div>
                  <div className="text-sm text-white font-mono">
                    {active.reaction}
                  </div>
                  <div className="text-xs text-emerald-400 mt-2 font-mono">EQUILIBRIUM RESTORED VIA LEARNING VELOCITY</div>
                </div>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
