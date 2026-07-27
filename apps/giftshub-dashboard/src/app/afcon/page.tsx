"use client";
import React, { useState } from 'react';

export default function AFCONDashboard() {
  const [activeTab, setActiveTab] = useState<'VELOCITY' | 'CHEMISTRY' | 'DETECTOR'>('VELOCITY');

  // Hardcoded for presentation
  const velocityMetrics = {
    capabilityDensity: 85,
    evidenceQuality: 90,
    networkConnectivity: 80,
    adaptationCapacity: 95,
    coordinationDelay: 12
  };

  const calculateEVS = () => {
    const numerator = 
      velocityMetrics.capabilityDensity * 
      velocityMetrics.evidenceQuality * 
      velocityMetrics.networkConnectivity * 
      velocityMetrics.adaptationCapacity;
    
    return Math.round((numerator / velocityMetrics.coordinationDelay) / 10000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-400">
            A66.52: AFCON
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Adaptive Fusion Capability Operating Network
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "Capability is measured by how quickly an ecosystem can transform pressure into new capability."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('VELOCITY')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'VELOCITY' ? 'bg-indigo-900 text-white border border-indigo-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ⚡ Ecosystem Velocity
          </button>
          <button onClick={() => setActiveTab('CHEMISTRY')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'CHEMISTRY' ? 'bg-purple-900 text-white border border-purple-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🧪 Capability Chemistry
          </button>
          <button onClick={() => setActiveTab('DETECTOR')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'DETECTOR' ? 'bg-fuchsia-900 text-white border border-fuchsia-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🔍 Emerging Node Detector
          </button>
        </div>

        {activeTab === 'VELOCITY' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Ecosystem Velocity Score (EVS)</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Measures the reaction rate of the ecosystem. A region becomes powerful when capable people exist, evidence is trusted, connections are strong, and decisions happen quickly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { label: 'Capability Density', value: velocityMetrics.capabilityDensity, color: 'bg-emerald-500' },
                  { label: 'Evidence Quality', value: velocityMetrics.evidenceQuality, color: 'bg-cyan-500' },
                  { label: 'Network Connectivity', value: velocityMetrics.networkConnectivity, color: 'bg-blue-500' },
                  { label: 'Adaptation Capacity', value: velocityMetrics.adaptationCapacity, color: 'bg-indigo-500' }
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-slate-300">{metric.label}</span>
                      <span className="text-slate-400">{metric.value}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className={`${metric.color} h-2 rounded-full`} style={{ width: `${metric.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col justify-center items-center bg-slate-950 border border-indigo-900/50 rounded-xl p-8">
                <p className="text-slate-400 mb-2">Coordination Delay: <span className="text-red-400 font-bold">{velocityMetrics.coordinationDelay}</span></p>
                <div className="text-center mt-4">
                  <span className="block text-sm text-slate-500 mb-1">Velocity Score (EVS)</span>
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {calculateEVS()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'CHEMISTRY' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Capability Reaction Chamber</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h3 className="text-orange-400 font-bold mb-4">Exothermic Zone (Energy Released)</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-orange-500">🔥</span> Mining Contracts ➔ Revenue</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">🔥</span> Sampling Services ➔ Expansion</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">🔥</span> Vehicle Repairs ➔ Uptime</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h3 className="text-cyan-400 font-bold mb-4">Endothermic Zone (Energy Absorbed)</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-cyan-500">❄️</span> University Studies ➔ Future Capability</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">❄️</span> Software Dev ➔ Future Intelligence</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">❄️</span> Equipment Investment ➔ Future Expansion</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'DETECTOR' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Emerging Node Detector</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-950 p-6 rounded-xl border border-purple-900/50 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <span className="block text-slate-400 text-sm mb-1">Exo-Pressure</span>
                  <span className="font-bold text-red-400">Suzuki Maintenance Pressure</span>
                </div>
                <div className="text-2xl text-slate-600">+</div>
                <div className="flex-1 text-center">
                  <span className="block text-slate-400 text-sm mb-1">Endo-Capability</span>
                  <span className="font-bold text-blue-400">MG Autobody Mechanical Knowledge</span>
                </div>
                <div className="text-2xl text-purple-500">➔</div>
                <div className="flex-1 text-center md:text-right">
                  <span className="block text-slate-400 text-sm mb-1">Fused Node</span>
                  <span className="font-bold text-purple-400 bg-purple-900/30 px-4 py-2 rounded-lg">Intelligent Car Doctor Node</span>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-emerald-900/50 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <span className="block text-slate-400 text-sm mb-1">Exo-Pressure</span>
                  <span className="font-bold text-red-400">Fragmented Laboratory Knowledge</span>
                </div>
                <div className="text-2xl text-slate-600">+</div>
                <div className="flex-1 text-center">
                  <span className="block text-slate-400 text-sm mb-1">Endo-Capability</span>
                  <span className="font-bold text-blue-400">Analytical Chemistry + Digital Systems</span>
                </div>
                <div className="text-2xl text-emerald-500">➔</div>
                <div className="flex-1 text-center md:text-right">
                  <span className="block text-slate-400 text-sm mb-1">Fused Node</span>
                  <span className="font-bold text-emerald-400 bg-emerald-900/30 px-4 py-2 rounded-lg">AXIONYX Laboratory Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
