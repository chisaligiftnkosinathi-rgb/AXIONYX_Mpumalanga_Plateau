"use client";
import React, { useState } from 'react';

export default function CapabilityFusionDashboard() {
  const [simulationState, setSimulationState] = useState<'IDLE' | 'FUSING' | 'EMERGED'>('IDLE');

  const runSimulation = () => {
    setSimulationState('FUSING');
    setTimeout(() => {
      setSimulationState('EMERGED');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Capability Fusion Engine (CFE)
          </h1>
          <p className="text-slate-400 mt-2 text-lg max-w-3xl mx-auto">
            "A civilization advances when separate capabilities combine into new capabilities. Africa's greatest limitation is not lack of resources; it is disconnected capability."
          </p>
        </header>

        {/* The Experiment Context */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-pink-400 flex items-center gap-2 mb-4">
            <span>🔬</span> Fusion Candidate 001
          </h2>
          <div className="text-slate-300">
            <strong>Hypothesis:</strong> If South Africa provides industrial depth and Nigeria provides digital scale, what capability emerges that neither country possessed independently?
          </div>
        </div>

        {/* The Fusion Chamber */}
        <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
          
          {/* Animated Background Particles during Fusion */}
          {simulationState === 'FUSING' && (
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-96 h-96 bg-purple-500 rounded-full blur-[100px] animate-pulse"></div>
              <div className="w-96 h-96 bg-emerald-500 rounded-full blur-[100px] animate-pulse delay-75"></div>
            </div>
          )}

          <div className="flex flex-col md:flex-row w-full justify-between items-center z-10 gap-8">
            
            {/* Input Genome A: South Africa */}
            <div className={`transition-all duration-1000 ${simulationState === 'FUSING' ? 'translate-x-12 opacity-80' : ''} bg-slate-900 border border-slate-700 p-6 rounded-xl w-72 shadow-lg`}>
              <h3 className="text-lg font-bold text-amber-400 mb-4 border-b border-slate-700 pb-2">🇿🇦 SOUTH AFRICA</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-mono">
                <li>+ Minerals</li>
                <li>+ Chemistry</li>
                <li>+ Laboratories</li>
                <li>+ Engineering</li>
                <li>+ Mining</li>
              </ul>
            </div>

            {/* The Fusion Core */}
            <div className="flex flex-col items-center justify-center">
              <button 
                onClick={runSimulation}
                disabled={simulationState !== 'IDLE'}
                className={`w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-500 ${
                  simulationState === 'IDLE' ? 'border-purple-500 hover:scale-105 hover:bg-purple-900/30 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.5)]' :
                  simulationState === 'FUSING' ? 'border-pink-500 animate-spin border-t-transparent' :
                  'border-emerald-500 bg-emerald-900/20 shadow-[0_0_30px_rgba(16,185,129,0.8)]'
                }`}
              >
                {simulationState === 'IDLE' && <span className="font-bold text-purple-400 text-lg">FUSE</span>}
                {simulationState === 'FUSING' && <span className="font-bold text-pink-400">SYNTHESIZING</span>}
                {simulationState === 'EMERGED' && <span className="font-bold text-emerald-400 text-2xl">✓</span>}
              </button>
            </div>

            {/* Input Genome B: Nigeria */}
            <div className={`transition-all duration-1000 ${simulationState === 'FUSING' ? '-translate-x-12 opacity-80' : ''} bg-slate-900 border border-slate-700 p-6 rounded-xl w-72 shadow-lg`}>
              <h3 className="text-lg font-bold text-emerald-400 mb-4 border-b border-slate-700 pb-2">🇳🇬 NIGERIA</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-mono">
                <li>+ Software</li>
                <li>+ AI</li>
                <li>+ Fintech</li>
                <li>+ Market Scale</li>
                <li>+ Digital Networks</li>
              </ul>
            </div>
            
          </div>

          {/* Emergent Capability Result */}
          <div className={`mt-12 transition-all duration-1000 transform ${simulationState === 'EMERGED' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-emerald-950/50 border border-emerald-500/50 p-8 rounded-2xl text-center max-w-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              <h3 className="text-sm text-emerald-400 uppercase tracking-widest mb-2">Emergent Capability Discovered</h3>
              <h2 className="text-3xl font-bold text-white mb-4">African Battery Technology Ecosystem 🔋</h2>
              <p className="text-slate-300 leading-relaxed">
                By fusing SA's deep material science and chemistry with Nigeria's digital scaling and AI optimization, the system bypasses the extraction model. The result is a continental system capable of discovering resources, designing materials, manufacturing components, and distributing energy storage solutions globally.
              </p>
              <div className="mt-6 flex justify-center gap-4 text-sm font-mono">
                <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">CEI: <span className="text-emerald-400">92.5</span></span>
                <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Friction: <span className="text-amber-400">Low</span></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
