"use client";
import React, { useState } from 'react';

export default function CivilizationEngineDashboard() {
  const [activeTab, setActiveTab] = useState<'CLI' | 'INNOVATION' | 'INCLUSION' | 'TRACEABILITY'>('CLI');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-10 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-extrabold text-blue-500 tracking-wider">CIVILIZATION ENGINE 2.0</h1>
          <p className="text-gray-400 mt-2 font-mono">WALALA WASALA MACRO-ARCHITECTURE | TRANSFORMATION: T = O × E × L × A</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button onClick={() => setActiveTab('CLI')} className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeTab === 'CLI' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>A66.14: LEARNING INDEX</button>
        <button onClick={() => setActiveTab('INNOVATION')} className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeTab === 'INNOVATION' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>A66.15: INNOVATION</button>
        <button onClick={() => setActiveTab('INCLUSION')} className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeTab === 'INCLUSION' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>A66.16: INCLUSION</button>
        <button onClick={() => setActiveTab('TRACEABILITY')} className={`px-6 py-2 rounded font-bold font-mono text-sm transition-all ${activeTab === 'TRACEABILITY' ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>A66.17: TRACEABILITY</button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-2xl animation-fade-in min-h-[500px]">
        {activeTab === 'CLI' && (
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Civilization Learning Index (CLI)</h2>
            <div className="p-4 bg-black rounded font-mono text-sm mb-6 border border-gray-800 text-gray-300">
              <span className="text-blue-500 font-bold">EQUATION:</span> Wealth (W) = Resources (R) × Capability (C) × Learning Velocity (Lv) × Trust (T)
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="p-6 border border-gray-800 rounded bg-gray-950">
                <h3 className="font-bold text-white mb-2">Extraction Economy (Stagnant)</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between"><span>Resources:</span> <span className="text-emerald-500">0.90</span></div>
                  <div className="flex justify-between"><span>Learning Velocity:</span> <span className="text-red-500">0.10</span></div>
                  <div className="mt-4 p-2 bg-red-950/30 text-red-400 rounded">CLI Score: 0.09 (Failing)</div>
                </div>
              </div>
              <div className="p-6 border border-blue-900/50 rounded bg-blue-950/10">
                <h3 className="font-bold text-blue-300 mb-2">Learning Civilization (Adaptive)</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between"><span>Resources:</span> <span className="text-amber-500">0.40</span></div>
                  <div className="flex justify-between"><span>Learning Velocity:</span> <span className="text-emerald-500">0.95</span></div>
                  <div className="mt-4 p-2 bg-blue-900/50 text-blue-300 rounded font-bold">CLI Score: 0.85 (Exponential)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'INNOVATION' && (
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Continuous Innovation Engine</h2>
            <div className="p-4 bg-black rounded font-mono text-sm mb-6 border border-gray-800 text-gray-300">
              <span className="text-indigo-500 font-bold">STATE TRANSITION:</span> I = Pressure × Observation × Evidence × Learning × Action
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-950 border border-gray-800 rounded">
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-xs font-bold text-gray-400">PRESSURE</div>
                <div className="text-indigo-400">1.0</div>
              </div>
              <div className="text-gray-600">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">👁️</div>
                <div className="text-xs font-bold text-gray-400">OBSERVATION</div>
                <div className="text-indigo-400">0.9</div>
              </div>
              <div className="text-gray-600">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">🧪</div>
                <div className="text-xs font-bold text-gray-400">EVIDENCE</div>
                <div className="text-red-500">0.0</div>
              </div>
              <div className="text-gray-600">→</div>
              <div className="text-center opacity-30">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-xs font-bold text-gray-400">SCALE</div>
                <div className="text-gray-500">0.0</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-red-400 font-mono text-center">IMMUNE SYSTEM TRIGGERED: Innovation equals zero due to lack of Evidence. Scaling blocked.</div>
          </div>
        )}

        {activeTab === 'INCLUSION' && (
          <div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Human-System Inclusion Index</h2>
            <div className="p-4 bg-black rounded font-mono text-sm mb-6 border border-gray-800 text-gray-300">
              <span className="text-emerald-500 font-bold">AXIOM:</span> Civilization Capability = Designed Systems + Living Systems
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="border border-red-900/50 p-6 rounded bg-red-950/10">
                <h3 className="font-bold text-red-400 mb-2">Designed System (Master Plan)</h3>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  <li>Infrastructure laid out</li>
                  <li>Routes mapped</li>
                  <li>Budgets allocated</li>
                </ul>
              </div>
              <div className="border border-emerald-900/50 p-6 rounded bg-emerald-950/10">
                <h3 className="font-bold text-emerald-400 mb-2">Living System (Route Guardians)</h3>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  <li>Excluded from planning</li>
                  <li>Possess hyper-local reality data</li>
                  <li>Adapt to daily environmental shifts</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center p-4 bg-red-900/20 text-red-400 rounded font-mono text-sm">
              WARNING: High Inclusion Gap. Uncertainty generates conflict. Add Route Guardians as sensor nodes.
            </div>
          </div>
        )}

        {activeTab === 'TRACEABILITY' && (
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Capability Traceability Graph</h2>
            <div className="p-4 bg-black rounded font-mono text-sm mb-6 border border-gray-800 text-gray-300">
              <span className="text-amber-500 font-bold">DIAGNOSIS:</span> Half-truths destroy systemic integrity because they prevent learning.
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-950 border border-gray-800 rounded">
              <div className="text-center"><div className="text-sm font-bold text-amber-500">Resource Origin</div><div className="text-xs text-gray-500">Verified</div></div>
              <div className="h-px bg-amber-500 w-16"></div>
              <div className="text-center"><div className="text-sm font-bold text-amber-500">Transformation</div><div className="text-xs text-gray-500">Verified</div></div>
              <div className="h-px bg-red-500 w-16 border-t-2 border-dashed border-red-500"></div>
              <div className="text-center"><div className="text-sm font-bold text-red-500">Sub-Assembly</div><div className="text-xs text-red-500">Half-Truth / Unknown</div></div>
              <div className="h-px bg-red-500 w-16 border-t-2 border-dashed border-red-500"></div>
              <div className="text-center"><div className="text-sm font-bold text-gray-400">Field Output</div><div className="text-xs text-red-400">DEFECT (Blame Moves Randomly)</div></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
