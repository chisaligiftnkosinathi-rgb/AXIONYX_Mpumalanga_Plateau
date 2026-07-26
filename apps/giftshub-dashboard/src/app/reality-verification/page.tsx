"use client";
import React from 'react';

export default function RealityVerificationDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Reality Verification Network
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "A deviation between simulation and reality is not a failure. The difference is intelligence."
          </p>
        </header>

        {/* Experiment Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-teal-400">West-Southern African Capability Bridge Pilot</h2>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
            Testing the integration of 🇿🇦 South African Mining & Laboratory capabilities with 🇳🇬 Nigerian Software & Data platforms to create a unified African Intelligence Corridor.
          </p>
        </div>

        {/* Split Reality Mirror View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Simulation Side */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 relative">
            <div className="absolute top-0 right-0 bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">PREDICTED</div>
            <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>🔮</span> Simulation Forecast
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-300">
                  <span>Capabilities Created</span>
                  <span className="text-blue-400 font-mono">+500</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-300">
                  <span>Trust Growth</span>
                  <span className="text-blue-400 font-mono">+85%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-300">
                  <span>Jobs & Collaborations</span>
                  <span className="text-blue-400 font-mono">+2000</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Reality Side */}
          <div className="bg-slate-900 border border-emerald-900/50 rounded-xl p-6 relative shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <div className="absolute top-0 right-0 bg-emerald-900/80 text-emerald-100 text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">OBSERVED</div>
            <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
              <span>🌍</span> Verified Reality Pilot
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-300">
                  <span>Capabilities Created</span>
                  <span className="text-emerald-400 font-mono">+420</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-300">
                  <span>Trust Growth</span>
                  <span className="text-emerald-400 font-mono">+76%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: '76%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-300">
                  <span>Jobs & Collaborations</span>
                  <span className="text-emerald-400 font-mono">+1600</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div></div>
              </div>
            </div>
          </div>

        </div>

        {/* Delta Analysis & Model Update */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-teal-400 flex items-center gap-2 mb-2">
                <span>🔬</span> Delta Analysis (ACEI Validation)
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reality produced slightly fewer capabilities than simulated, primarily due to higher-than-expected cross-border API latency and trust-building delays between SA labs and Nigerian dev teams. This is a learning event.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <span className="text-lg">↓</span>
              </div>
              <div className="bg-indigo-900/30 border border-indigo-500/30 p-4 rounded-lg">
                <div className="text-indigo-400 font-bold mb-1">Model Improvement Executed</div>
                <div className="text-sm text-slate-300">Simulation physics updated with real-world latency variables.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
