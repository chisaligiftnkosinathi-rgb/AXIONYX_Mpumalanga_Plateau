"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

export default function ContinentalAtlasDashboard() {
  const [viewMode, setViewMode] = useState<'GEOGRAPHY' | 'NETWORK'>('GEOGRAPHY');

  // Network Mode Data
  const networkNodes: Node[] = [
    { id: 'sa', position: { x: 100, y: 100 }, data: { label: '🇿🇦 SA: Physical Intelligence\n(Mining, Chemistry, Labs)' }, style: { background: '#1e293b', color: '#fbbf24', border: '2px solid #fbbf24', borderRadius: 8, padding: 10, textAlign: 'center' } },
    { id: 'ng', position: { x: 700, y: 100 }, data: { label: '🇳🇬 NG: Coordination Intelligence\n(Software, FinTech, Markets)' }, style: { background: '#1e293b', color: '#10b981', border: '2px solid #10b981', borderRadius: 8, padding: 10, textAlign: 'center' } },
    { id: 'ke', position: { x: 700, y: 300 }, data: { label: '🇰🇪 KE: Distribution Intelligence\n(Mobile, Payments, Logistics)' }, style: { background: '#1e293b', color: '#8b5cf6', border: '2px solid #8b5cf6', borderRadius: 8, padding: 10, textAlign: 'center' } },
    { id: 'eg', position: { x: 100, y: 300 }, data: { label: '🇪🇬 EG: Infrastructure Intelligence\n(Energy, Transport, Construction)' }, style: { background: '#1e293b', color: '#ef4444', border: '2px solid #ef4444', borderRadius: 8, padding: 10, textAlign: 'center' } },
    { id: 'core', position: { x: 400, y: 200 }, data: { label: '🔋 African Battery Intelligence Ecosystem\nEmergent Capability Layer' }, style: { background: '#020617', color: '#38bdf8', border: '2px solid #38bdf8', borderRadius: 12, padding: 20, textAlign: 'center', fontWeight: 'bold' } },
  ];

  const networkEdges: Edge[] = [
    { id: 'e1', source: 'sa', target: 'core', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'e2', source: 'ng', target: 'core', animated: true, style: { stroke: '#10b981' } },
    { id: 'e3', source: 'ke', target: 'core', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e4', source: 'eg', target: 'core', animated: true, style: { stroke: '#ef4444' } },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Continental Capability Genome Atlas
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "A continent is not poor when it lacks resources. A continent is constrained when its capabilities cannot see each other."
          </p>
        </header>

        {/* View Toggle */}
        <div className="flex justify-center gap-4">
          <button 
            className={`px-6 py-2 rounded-full font-bold transition-all ${viewMode === 'GEOGRAPHY' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            onClick={() => setViewMode('GEOGRAPHY')}
          >
            🌍 Geographic Mode
          </button>
          <button 
            className={`px-6 py-2 rounded-full font-bold transition-all ${viewMode === 'NETWORK' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            onClick={() => setViewMode('NETWORK')}
          >
            🕸️ Capability Network Mode
          </button>
        </div>

        {/* Dual Mode Display */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[600px] overflow-hidden relative shadow-xl">
          
          {viewMode === 'GEOGRAPHY' && (
            <div className="absolute inset-0 p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-slate-300 mb-8">Continental Geography Layer</h2>
              
              <div className="relative w-full max-w-3xl flex-1 border border-slate-800 bg-slate-950 rounded-xl p-8">
                {/* Abstract Africa Map Layout */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                  <span className="text-sm font-bold text-red-400">🇪🇬 Infrastructure Intelligence</span>
                </div>

                <div className="absolute top-1/3 left-16 text-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mx-auto mb-2 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-sm font-bold text-emerald-400">🇳🇬 Coordination Intelligence</span>
                </div>

                <div className="absolute top-1/3 right-16 text-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                  <span className="text-sm font-bold text-purple-400">🇰🇪 Mobile Intelligence</span>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                  <div className="w-4 h-4 bg-amber-500 rounded-full mx-auto mb-2 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                  <span className="text-sm font-bold text-amber-400">🇿🇦 Physical Intelligence</span>
                </div>
              </div>
            </div>
          )}

          {viewMode === 'NETWORK' && (
            <div className="w-full h-full flex flex-col">
              <h2 className="text-2xl font-bold text-slate-300 mb-4 px-4 pt-4">Capability Network Layer (Emergence)</h2>
              <div className="flex-1">
                <ReactFlow nodes={networkNodes} edges={networkEdges} fitView>
                  <Background color="#1e293b" gap={16} />
                  <Controls />
                </ReactFlow>
              </div>
            </div>
          )}

        </div>

        {/* CCEI & Evidence Ledger Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">🔬 Continental Capability Emergence Index</h3>
            <p className="text-slate-400 text-sm mb-4">
              <strong>Scenario B (Fusion Model):</strong> High CCEI. By distributing capability across SA (Mining), NG (Software), KE (Mobile), and EG (Infrastructure), the Dependency Risk Index (DRI) collapses.
            </p>
            <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
              <div className="text-3xl font-mono text-emerald-400">96.4</div>
              <div className="text-sm text-slate-300">African Battery Intelligence Ecosystem Viability Score</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">⚖️ Evidence Ledger</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-slate-300">🇿🇦 Mining Capability</span>
                <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded text-xs font-bold">VERIFIED</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-slate-300">🇳🇬 Digital Financial Networks</span>
                <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded text-xs font-bold">VERIFIED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">🇰🇪 Continental Battery Logistics</span>
                <span className="bg-amber-900/50 text-amber-400 px-3 py-1 rounded text-xs font-bold">HYPOTHESIS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
