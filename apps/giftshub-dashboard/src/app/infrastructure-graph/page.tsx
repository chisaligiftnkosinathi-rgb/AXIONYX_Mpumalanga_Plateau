"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

export default function InfrastructureGraphDashboard() {
  const [activeLayer, setActiveLayer] = useState<'MATTER' | 'INFORMATION' | 'KNOWLEDGE' | 'FUSION'>('FUSION');

  // Matter (Physical) Nodes
  const matterNodes: Node[] = [
    { id: 'm_drc', position: { x: 100, y: 100 }, data: { label: '⛏️ DRC (Minerals)' }, style: { background: '#450a0a', color: '#fca5a5', border: '1px solid #fca5a5' } },
    { id: 'm_zm', position: { x: 300, y: 100 }, data: { label: '🏭 Zambia (Processing)' }, style: { background: '#450a0a', color: '#fca5a5', border: '1px solid #fca5a5' } },
    { id: 'm_sa', position: { x: 500, y: 100 }, data: { label: '⚙️ South Africa (Engineering)' }, style: { background: '#450a0a', color: '#fca5a5', border: '1px solid #fca5a5' } },
    { id: 'm_eg', position: { x: 700, y: 100 }, data: { label: '🏭 Egypt (Manufacturing)' }, style: { background: '#450a0a', color: '#fca5a5', border: '1px solid #fca5a5' } },
  ];

  // Information (Digital) Nodes
  const infoNodes: Node[] = [
    { id: 'i_ng', position: { x: 400, y: 200 }, data: { label: '🌐 Nigeria (Software / Intelligence)' }, style: { background: '#064e3b', color: '#6ee7b7', border: '1px solid #6ee7b7' } },
    { id: 'i_ke', position: { x: 600, y: 200 }, data: { label: '📱 Kenya (Networks / Mobile)' }, style: { background: '#064e3b', color: '#6ee7b7', border: '1px solid #6ee7b7' } },
  ];

  // Knowledge (Institutional) Nodes
  const knowledgeNodes: Node[] = [
    { id: 'k_uni', position: { x: 300, y: 300 }, data: { label: '🎓 African Research Universities' }, style: { background: '#312e81', color: '#a5b4fc', border: '1px solid #a5b4fc' } },
    { id: 'k_lab', position: { x: 500, y: 300 }, data: { label: '🧪 Materials & Chemistry Labs' }, style: { background: '#312e81', color: '#a5b4fc', border: '1px solid #a5b4fc' } },
  ];

  // Fusion Output Node
  const fusionNodes: Node[] = [
    { id: 'f_core', position: { x: 400, y: 450 }, data: { label: '🔋 African Battery Intelligence Corridor' }, style: { background: '#020617', color: '#38bdf8', border: '2px solid #38bdf8', borderRadius: 12, padding: 20, fontWeight: 'bold', width: 250, textAlign: 'center' } },
  ];

  // Edges based on layer
  const matterEdges: Edge[] = [
    { id: 'e_m1', source: 'm_drc', target: 'm_zm', type: 'smoothstep', style: { stroke: '#fca5a5', strokeWidth: 2 } },
    { id: 'e_m2', source: 'm_zm', target: 'm_sa', type: 'smoothstep', style: { stroke: '#fca5a5', strokeWidth: 2 } },
    { id: 'e_m3', source: 'm_sa', target: 'm_eg', type: 'smoothstep', style: { stroke: '#fca5a5', strokeWidth: 2 } },
  ];

  const infoEdges: Edge[] = [
    { id: 'e_i1', source: 'i_ng', target: 'i_ke', type: 'smoothstep', style: { stroke: '#6ee7b7', strokeDasharray: '5,5' } },
  ];

  const fusionEdges: Edge[] = [
    ...matterEdges,
    ...infoEdges,
    { id: 'e_f1', source: 'm_sa', target: 'i_ng', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'e_f2', source: 'i_ng', target: 'k_uni', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'e_f3', source: 'k_lab', target: 'f_core', animated: true, style: { stroke: '#38bdf8', strokeWidth: 3 } },
    { id: 'e_f4', source: 'm_eg', target: 'f_core', animated: true, style: { stroke: '#38bdf8', strokeWidth: 3 } },
    { id: 'e_f5', source: 'i_ke', target: 'f_core', animated: true, style: { stroke: '#38bdf8', strokeWidth: 3 } },
  ];

  const getActiveNodes = () => {
    switch (activeLayer) {
      case 'MATTER': return matterNodes;
      case 'INFORMATION': return infoNodes;
      case 'KNOWLEDGE': return knowledgeNodes;
      case 'FUSION': return [...matterNodes, ...infoNodes, ...knowledgeNodes, ...fusionNodes];
    }
  };

  const getActiveEdges = () => {
    switch (activeLayer) {
      case 'MATTER': return matterEdges;
      case 'INFORMATION': return infoEdges;
      case 'KNOWLEDGE': return [];
      case 'FUSION': return fusionEdges;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-500">
            African Capability Infrastructure Graph
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "A trade corridor is not just a road. It is a living system that transports matter, information, knowledge, capital, and trust."
          </p>
        </header>

        {/* Intelligence Layer Toggles */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => setActiveLayer('MATTER')} className={`px-4 py-2 rounded font-bold border ${activeLayer === 'MATTER' ? 'bg-red-950/50 border-red-500 text-red-400' : 'border-slate-800 text-slate-500'}`}>
            🚂 Matter (Physical)
          </button>
          <button onClick={() => setActiveLayer('INFORMATION')} className={`px-4 py-2 rounded font-bold border ${activeLayer === 'INFORMATION' ? 'bg-emerald-950/50 border-emerald-500 text-emerald-400' : 'border-slate-800 text-slate-500'}`}>
            🌐 Information (Digital)
          </button>
          <button onClick={() => setActiveLayer('KNOWLEDGE')} className={`px-4 py-2 rounded font-bold border ${activeLayer === 'KNOWLEDGE' ? 'bg-indigo-950/50 border-indigo-500 text-indigo-400' : 'border-slate-800 text-slate-500'}`}>
            🎓 Knowledge (Institutional)
          </button>
          <button onClick={() => setActiveLayer('FUSION')} className={`px-4 py-2 rounded font-bold border shadow-[0_0_15px_rgba(56,189,248,0.2)] ${activeLayer === 'FUSION' ? 'bg-cyan-950/50 border-cyan-500 text-cyan-400' : 'border-slate-800 text-slate-500'}`}>
            🧠 Fusion (Intelligent Network)
          </button>
        </div>

        {/* Visual Engine Space */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl h-[600px] overflow-hidden relative shadow-xl">
          <ReactFlow nodes={getActiveNodes()} edges={getActiveEdges()} fitView>
            <Background color="#1e293b" gap={16} />
            <Controls />
          </ReactFlow>
        </div>

        {/* Metrics Matrix */}
        {activeLayer === 'FUSION' && (
          <div className="bg-slate-900 border border-cyan-900/50 rounded-xl p-6 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <h3 className="text-xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">Corridor Health Metrics: African Battery Intelligence</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-mono text-emerald-400 mb-1">84%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Connectivity</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-mono text-emerald-400 mb-1">79%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Conversion</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-mono text-emerald-400 mb-1">92%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Learning</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-mono text-emerald-400 mb-1">88%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Resilience</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-mono text-cyan-400 mb-1 font-bold">95%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Sovereignty</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-xs font-bold">VERIFIED</span>
                <span className="text-sm text-slate-300">This corridor represents a massive shift from foreign resource extraction to sovereign African industrial intelligence.</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
