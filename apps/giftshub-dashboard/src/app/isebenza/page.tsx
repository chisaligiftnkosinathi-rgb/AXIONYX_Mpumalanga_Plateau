"use client";
import React, { useState } from 'react';

export default function ISebenzaDashboard() {
  const [activeTab, setActiveTab] = useState<'MAP' | 'HEATMAP'>('MAP');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            A66.53.1: iSebenza 
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Advanced Skills Mapping Engine (The Eye of the Factory)
          </p>
          <p className="text-slate-500 text-sm mt-1 italic">
            "A capability that cannot be seen cannot be coordinated."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('MAP')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'MAP' ? 'bg-teal-900 text-white border border-teal-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            👁️ Capability Map
          </button>
          <button onClick={() => setActiveTab('HEATMAP')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'HEATMAP' ? 'bg-emerald-900 text-white border border-emerald-500' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🗺️ Skills Heatmap
          </button>
        </div>

        {activeTab === 'MAP' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Capability Activation Matcher</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="bg-slate-950 p-6 rounded-xl border border-blue-900/50">
                <h3 className="text-blue-400 font-bold mb-3 border-b border-blue-900 pb-2">Human Genome</h3>
                <ul className="text-sm space-y-2 text-slate-300">
                  <li><span className="text-slate-500">Node:</span> Sifiso & Gift</li>
                  <li><span className="text-slate-500">Skills:</span> Genetics, Chemistry</li>
                  <li><span className="text-slate-500">Exp:</span> Mining Labs</li>
                  <li><span className="text-slate-500">Evidence:</span> High (SANAS exp)</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="inline-block bg-teal-900/50 border border-teal-500 p-4 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <div className="text-sm text-teal-400 font-bold mb-1">Match Score</div>
                  <div className="text-4xl font-black text-white">92%</div>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-amber-900/50">
                <h3 className="text-amber-400 font-bold mb-3 border-b border-amber-900 pb-2">Industrial Demand</h3>
                <ul className="text-sm space-y-2 text-slate-300">
                  <li><span className="text-slate-500">Industry:</span> Mining</li>
                  <li><span className="text-slate-500">Need:</span> Trusted Chain of Custody</li>
                  <li><span className="text-slate-500">Location:</span> Mpumalanga</li>
                  <li><span className="text-slate-500">Gap:</span> High Evidence Sampling</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
               <span className="text-teal-500 font-bold">➔ Fused Capability:</span> <span className="text-white ml-2 bg-slate-800 px-3 py-1 rounded">Melokuhle Sampling Node</span>
            </div>
          </div>
        )}

        {activeTab === 'HEATMAP' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Regional Skills Heatmap</h2>
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-400 text-sm">Mapping visible capability density across regions.</p>
              <div className="bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                 <span className="text-slate-500 text-sm">Capability Activation Rate (CAR): </span>
                 <span className="text-teal-400 font-bold">12%</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Mpumalanga Hub</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Coal Chemistry', value: 85, color: 'bg-emerald-500' },
                    { label: 'Mechanical Skills', value: 65, color: 'bg-teal-500' },
                    { label: 'Agriculture', value: 50, color: 'bg-cyan-500' },
                    { label: 'Software Systems', value: 25, color: 'bg-blue-500' },
                    { label: 'Renewables', value: 15, color: 'bg-indigo-500' }
                  ].map((skill) => (
                    <div key={skill.label} className="flex items-center">
                      <div className="w-40 text-sm text-slate-300">{skill.label}</div>
                      <div className="flex-1 bg-slate-950 rounded-full h-3">
                        <div className={`${skill.color} h-3 rounded-full`} style={{ width: `${skill.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
