"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';

export default function ImballyRealityPilot() {
  const [activeView, setActiveView] = useState<'ORGANISM' | 'EVOLUTION' | 'PRESSURE'>('ORGANISM');

  // Organism Nodes (The Three Branches)
  const organismNodes: Node[] = [
    { id: 'imb_root', position: { x: 400, y: 100 }, data: { label: 'GLOBAL IT & BUSINESS SOLUTIONS (Ermelo)' }, style: { background: '#020617', color: '#f8fafc', border: '2px solid #3b82f6', fontWeight: 'bold', width: 300, textAlign: 'center' } },
    { id: 'chem_branch', position: { x: 150, y: 300 }, data: { label: '🧪 CHEMICAL REALITY\nSibonisiwe Lab\n(Coal, Metallurgy)' }, style: { background: '#1e1b4b', color: '#c7d2fe', border: '2px solid #6366f1', textAlign: 'center' } },
    { id: 'dig_branch', position: { x: 450, y: 300 }, data: { label: '🌐 DIGITAL REALITY\nAXIONYX Systems\n(Intelligence, Data)' }, style: { background: '#064e3b', color: '#6ee7b7', border: '2px solid #10b981', textAlign: 'center' } },
    { id: 'mob_branch', position: { x: 750, y: 300 }, data: { label: '🔧 MOBILITY REALITY\nMG Autobody PanelBeat\n(Mechanical, Fleet)' }, style: { background: '#450a0a', color: '#fca5a5', border: '2px solid #ef4444', textAlign: 'center' } },
    { id: 'steward_mbali', position: { x: 400, y: 10 }, data: { label: '👑 Mbali F. Mokwena (MBA, Metallurgy)' }, style: { background: '#312e81', color: '#fbbf24', border: '1px dashed #fbbf24', width: 300, textAlign: 'center' } },
  ];

  const organismEdges: Edge[] = [
    { id: 'oe_mbali', source: 'steward_mbali', target: 'imb_root', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'oe1', source: 'imb_root', target: 'chem_branch', animated: true, label: 'Laboratory Pressure', style: { stroke: '#6366f1' } },
    { id: 'oe2', source: 'imb_root', target: 'dig_branch', animated: true, label: 'Complexity Pressure', style: { stroke: '#10b981' } },
    { id: 'oe3', source: 'imb_root', target: 'mob_branch', animated: true, label: 'Mobility Pressure', style: { stroke: '#ef4444' } },
  ];

  // Evolution Timeline Nodes
  const evolutionNodes: Node[] = [
    { id: 'ev1', position: { x: 100, y: 100 }, data: { label: 'Vaalbult Colliery\n(Matter Intel)' }, style: { background: '#1e293b', color: '#94a3b8' } },
    { id: 'ev2', position: { x: 300, y: 100 }, data: { label: 'Exxaro Belfast\n(Process Intel)' }, style: { background: '#1e293b', color: '#94a3b8' } },
    { id: 'ev3', position: { x: 500, y: 100 }, data: { label: 'Kendal Power\n(Energy Intel)' }, style: { background: '#1e293b', color: '#94a3b8' } },
    { id: 'ev4', position: { x: 700, y: 100 }, data: { label: 'Sibonisiwe Lab\n(Evidence Intel)' }, style: { background: '#1e293b', color: '#94a3b8' } },
    { id: 'ev5', position: { x: 900, y: 100 }, data: { label: 'Imbally Node\n(Industrial Organism)' }, style: { background: '#020617', color: '#38bdf8', border: '2px solid #38bdf8', fontWeight: 'bold' } },
  ];

  const evolutionEdges: Edge[] = [
    { id: 'ee1', source: 'ev1', target: 'ev2', style: { stroke: '#64748b' } },
    { id: 'ee2', source: 'ev2', target: 'ev3', style: { stroke: '#64748b' } },
    { id: 'ee3', source: 'ev3', target: 'ev4', style: { stroke: '#64748b' } },
    { id: 'ee4', source: 'ev4', target: 'ev5', animated: true, style: { stroke: '#38bdf8', strokeWidth: 2 } },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-500">
            Reality Pilot: Imbally Intelligent Industrial Node
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "Industrial ecosystems naturally create digital transformation pressure when human capability density exceeds traditional coordination limits."
          </p>
        </header>

        {/* Zoom Controls */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => setActiveView('ORGANISM')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeView === 'ORGANISM' ? 'bg-cyan-700 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🔬 Industrial Organism View
          </button>
          <button onClick={() => setActiveView('EVOLUTION')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeView === 'EVOLUTION' ? 'bg-cyan-700 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ⏳ Evolutionary Timeline
          </button>
          <button onClick={() => setActiveView('PRESSURE')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeView === 'PRESSURE' ? 'bg-cyan-700 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ⚙️ Complexity Pressure
          </button>
        </div>

        {/* Network Canvas */}
        {activeView !== 'PRESSURE' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl h-[500px] overflow-hidden relative shadow-xl">
            <ReactFlow 
              nodes={activeView === 'ORGANISM' ? organismNodes : evolutionNodes} 
              edges={activeView === 'ORGANISM' ? organismEdges : evolutionEdges} 
              fitView
            >
              <Background color="#1e293b" gap={16} />
              <Controls />
            </ReactFlow>
          </div>
        )}

        {/* Complexity Pressure View */}
        {activeView === 'PRESSURE' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="bg-slate-900 border border-emerald-900/50 rounded-xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 border-b border-emerald-900/50 pb-2">Digital Emergence Trigger (AXIONYX)</h3>
              <p className="text-sm text-slate-400 mb-6 font-mono">CPI = (People × Processes × Decisions × Evidence) / Coordination Capacity</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Phase 1: Physical Lab (Muscle)</span>
                  <span className="text-slate-500 font-mono">CPI: 2,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Phase 2: Knowledge Lab (Methods)</span>
                  <span className="text-slate-500 font-mono">CPI: 8,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-950/50 border border-emerald-500/30 rounded">
                  <span className="text-emerald-400 font-bold">Phase 3: Human Expansion (Safety, HR, Engineers)</span>
                  <span className="text-emerald-400 font-mono font-bold">CPI: 45,000 (THRESHOLD CROSSED)</span>
                </div>
                <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-300 border-l-4 border-l-emerald-500">
                  <p>When the physical lab's complexity threshold exceeded traditional human memory, it forced the emergence of the <strong>Digital Intelligence Layer (AXIONYX)</strong> as the nervous system to coordinate the organism.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-red-900/50 rounded-xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
              <h3 className="text-xl font-bold text-red-400 mb-4 border-b border-red-900/50 pb-2">Mobility Emergence Trigger (MG Autobody)</h3>
              <p className="text-sm text-slate-400 mb-6">Constraint creates capability.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center text-red-500">1</div>
                  <span>Mobility Pressure (High vehicle repair/diesel costs)</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center text-red-500">2</div>
                  <span>Knowledge Gap Detected (Dependence on external networks)</span>
                </div>
                <div className="flex items-center gap-4 text-red-400 font-bold p-2 bg-red-950/30 rounded border border-red-500/20">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">3</div>
                  <span>Mechanical Capability Required (Spawn MG Autobody)</span>
                </div>
                <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-300 border-l-4 border-l-red-500">
                  <p>A successful industrial ecosystem internalizes critical dependencies. The high cost of mobility forced the organism to sprout a new <strong>Mechanical Reality Branch</strong> at 15 Sluiter Street.</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
