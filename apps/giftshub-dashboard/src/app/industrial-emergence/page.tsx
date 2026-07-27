"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';

export default function IndustrialEmergenceDashboard() {
  const [viewMode, setViewMode] = useState<'FOREST' | 'CONSTELLATION'>('FOREST');

  const constellationNodes: Node[] = [
    { id: 'min', position: { x: 100, y: 150 }, data: { label: 'Mining (🇿🇦)' }, style: { background: '#334155', color: '#fbbf24', border: '1px solid #fbbf24', borderRadius: 8, padding: 10 } },
    { id: 'chem', position: { x: 300, y: 50 }, data: { label: 'Chemistry (🇿🇦)' }, style: { background: '#334155', color: '#fbbf24', border: '1px solid #fbbf24', borderRadius: 8, padding: 10 } },
    { id: 'bat', position: { x: 500, y: 200 }, data: { label: '🔋 African Battery Intelligence' }, style: { background: '#0f172a', color: '#38bdf8', border: '2px solid #38bdf8', borderRadius: 12, padding: 15, fontWeight: 'bold' } },
    { id: 'soft', position: { x: 800, y: 150 }, data: { label: 'Software (🇳🇬)' }, style: { background: '#334155', color: '#10b981', border: '1px solid #10b981', borderRadius: 8, padding: 10 } },
    { id: 'fin', position: { x: 700, y: 350 }, data: { label: 'Finance (🇰🇪)' }, style: { background: '#334155', color: '#8b5cf6', border: '1px solid #8b5cf6', borderRadius: 8, padding: 10 } },
  ];

  const constellationEdges: Edge[] = [
    { id: 'e1', source: 'min', target: 'chem', animated: false, style: { stroke: '#64748b' } },
    { id: 'e2', source: 'chem', target: 'bat', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'e3', source: 'soft', target: 'bat', animated: true, style: { stroke: '#10b981' } },
    { id: 'e4', source: 'fin', target: 'bat', animated: true, style: { stroke: '#8b5cf6' } },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            African Industrial Emergence Simulator
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "A forest does not decide to become a tree. The environment creates the conditions where the tree emerges."
          </p>
        </header>

        {/* View Toggle */}
        <div className="flex justify-center gap-4">
          <button 
            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${viewMode === 'FOREST' ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            onClick={() => setViewMode('FOREST')}
          >
            🌳 Living Forest View
          </button>
          <button 
            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${viewMode === 'CONSTELLATION' ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            onClick={() => setViewMode('CONSTELLATION')}
          >
            ✨ Constellation View
          </button>
        </div>

        {/* Visual Engine Space */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[500px] overflow-hidden relative shadow-xl">
          
          {viewMode === 'FOREST' && (
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 bg-gradient-to-t from-slate-950 to-slate-900">
              {/* Abstract Forest */}
              <div className="relative w-full max-w-4xl h-full flex items-end justify-around px-12">
                
                {/* Tree 1 */}
                <div className="flex flex-col items-center group">
                  <div className="bg-emerald-950/80 border border-emerald-500/30 p-4 rounded-full mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="w-2 h-32 bg-gradient-to-t from-amber-900 to-emerald-900 rounded-t-full"></div>
                  <div className="mt-2 text-center">
                    <div className="font-bold text-emerald-400 text-sm">Industrial AI</div>
                    <div className="text-xs text-slate-500">IEPI: 76%</div>
                  </div>
                </div>

                {/* Tree 2 (Main) */}
                <div className="flex flex-col items-center group">
                  <div className="bg-cyan-950/80 border border-cyan-500/50 p-8 rounded-full mb-4 shadow-[0_0_50px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform relative">
                    <span className="text-4xl">🔋</span>
                    <div className="absolute -right-2 -top-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded animate-pulse">SHOCK TESTED</div>
                  </div>
                  <div className="w-4 h-48 bg-gradient-to-t from-amber-900 to-cyan-900 rounded-t-full"></div>
                  <div className="mt-2 text-center">
                    <div className="font-bold text-cyan-400 text-lg">African Battery Ecosystem</div>
                    <div className="text-sm text-cyan-200">IEPI: 82% ➔ <span className="text-emerald-400 font-bold">88% (Adapted)</span></div>
                  </div>
                </div>

                {/* Tree 3 */}
                <div className="flex flex-col items-center group">
                  <div className="bg-purple-950/80 border border-purple-500/30 p-5 rounded-full mb-4 shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🧪</span>
                  </div>
                  <div className="w-3 h-40 bg-gradient-to-t from-amber-900 to-purple-900 rounded-t-full"></div>
                  <div className="mt-2 text-center">
                    <div className="font-bold text-purple-400 text-sm">Advanced Materials</div>
                    <div className="text-xs text-slate-500">IEPI: 64%</div>
                  </div>
                </div>

              </div>
              <div className="w-full h-8 border-t-2 border-amber-900/50 bg-amber-950/20 text-center flex items-center justify-center text-amber-700 font-bold tracking-widest text-xs uppercase">
                AXIONYX Capability Root System
              </div>
            </div>
          )}

          {viewMode === 'CONSTELLATION' && (
            <div className="w-full h-full">
              <ReactFlow nodes={constellationNodes} edges={constellationEdges} fitView>
                <Background color="#1e293b" gap={16} />
                <Controls />
              </ReactFlow>
            </div>
          )}

        </div>

        {/* Reality Probability Matrix */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-teal-400 mb-6">Reality Probability Matrix</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 text-sm">
                  <th className="pb-3 px-4 font-medium">Emerging Industry</th>
                  <th className="pb-3 px-4 font-medium">Base IEPI</th>
                  <th className="pb-3 px-4 font-medium">Energy Shock (0.7)</th>
                  <th className="pb-3 px-4 font-medium">Adapted IEPI</th>
                  <th className="pb-3 px-4 font-medium">Main Constraint</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 px-4 font-bold text-cyan-400 flex items-center gap-2"><span className="text-lg">🔋</span> Battery Ecosystem</td>
                  <td className="py-4 px-4 text-slate-300">82%</td>
                  <td className="py-4 px-4 text-red-400">-30% Production</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">88% (Learning ↑)</td>
                  <td className="py-4 px-4 text-slate-400">Manufacturing</td>
                </tr>
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 px-4 font-bold text-emerald-400 flex items-center gap-2"><span className="text-lg">🌱</span> Industrial AI</td>
                  <td className="py-4 px-4 text-slate-300">76%</td>
                  <td className="py-4 px-4 text-slate-500">Minimal Impact</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">78%</td>
                  <td className="py-4 px-4 text-slate-400">Talent Scaling</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 px-4 font-bold text-purple-400 flex items-center gap-2"><span className="text-lg">🧪</span> Advanced Materials</td>
                  <td className="py-4 px-4 text-slate-300">64%</td>
                  <td className="py-4 px-4 text-red-400">-40% Capacity</td>
                  <td className="py-4 px-4 font-bold text-amber-400">58% (Fragile)</td>
                  <td className="py-4 px-4 text-slate-400">Research Investment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
