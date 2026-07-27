"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import { AXIONYX_GENOME_TREE } from '@packages/capability-continuity-engine/src/genome-sequencing/human-industrial-genome';

export default function CapabilityContinuityDashboard() {
  const [activeTab, setActiveTab] = useState<'TREE' | 'LAW'>('TREE');

  // Convert AXIONYX_GENOME_TREE to ReactFlow Nodes
  const treeNodes: Node[] = [
    { id: 'siphanda_phansi', position: { x: 400, y: 50 }, data: { label: '🌱 Siphanda Phansi CC\n(Genesis Node)' }, style: { background: '#020617', color: '#10b981', border: '2px solid #10b981', fontWeight: 'bold', width: 250, textAlign: 'center' } },
    
    { id: 'global_it', position: { x: 100, y: 200 }, data: { label: '🌿 Global IT\n(Digital Branch)' }, style: { background: '#1e293b', color: '#38bdf8', border: '1px solid #38bdf8', textAlign: 'center' } },
    { id: 'siyaphakamisa', position: { x: 300, y: 200 }, data: { label: '🌿 Siyaphakamisa\n(Human Branch)' }, style: { background: '#1e293b', color: '#f472b6', border: '1px solid #f472b6', textAlign: 'center' } },
    { id: 'imbally_node', position: { x: 500, y: 200 }, data: { label: '🌿 Imbally Node\n(Industrial Branch)' }, style: { background: '#1e293b', color: '#facc15', border: '1px solid #facc15', textAlign: 'center' } },
    { id: 'mg_autobody', position: { x: 700, y: 200 }, data: { label: '🌿 MG Autobody\n(Mobility Branch)' }, style: { background: '#1e293b', color: '#ef4444', border: '1px solid #ef4444', textAlign: 'center' } },

    { id: 'iphande', position: { x: 50, y: 350 }, data: { label: '🔍 iPhande\n(Observation Layer)' }, style: { background: '#0f172a', color: '#a78bfa', border: '1px dashed #a78bfa', textAlign: 'center' } },
    { id: 'nokuthula_eng', position: { x: 250, y: 350 }, data: { label: '🤝 Nokuthula Eng.\n(External Graft via Bolt)' }, style: { background: '#0f172a', color: '#fb923c', border: '1px dashed #fb923c', textAlign: 'center' } },

    { id: 'axionyx', position: { x: 400, y: 500 }, data: { label: '🌳 AXIONYX\n(Meaning Layer / OS)' }, style: { background: '#020617', color: '#ffffff', border: '3px solid #22d3ee', fontWeight: 'bold', width: 300, textAlign: 'center', padding: '10px' } },
  ];

  const treeEdges: Edge[] = [
    { id: 'e1', source: 'siphanda_phansi', target: 'global_it', animated: true, style: { stroke: '#10b981' } },
    { id: 'e2', source: 'siphanda_phansi', target: 'siyaphakamisa', animated: true, style: { stroke: '#10b981' } },
    { id: 'e3', source: 'siphanda_phansi', target: 'imbally_node', animated: true, style: { stroke: '#10b981' } },
    { id: 'e4', source: 'siphanda_phansi', target: 'mg_autobody', animated: true, style: { stroke: '#10b981' } },
    
    { id: 'e5', source: 'global_it', target: 'iphande', style: { stroke: '#38bdf8' } },
    { id: 'e6', source: 'global_it', target: 'nokuthula_eng', label: 'SARS / Tax Learning', style: { stroke: '#fb923c' } },

    { id: 'a1', source: 'global_it', target: 'axionyx', style: { stroke: '#22d3ee' } },
    { id: 'a2', source: 'siyaphakamisa', target: 'axionyx', style: { stroke: '#22d3ee' } },
    { id: 'a3', source: 'imbally_node', target: 'axionyx', style: { stroke: '#22d3ee' } },
    { id: 'a4', source: 'mg_autobody', target: 'axionyx', style: { stroke: '#22d3ee' } },
    { id: 'a5', source: 'iphande', target: 'axionyx', style: { stroke: '#22d3ee' } },
    { id: 'a6', source: 'nokuthula_eng', target: 'axionyx', style: { stroke: '#22d3ee' } },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            A66.45: Capability Continuity Engine
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "Organizations are temporary containers. Capability is the living intelligence that moves between containers."
          </p>
        </header>

        <div className="flex justify-center gap-4">
          <button onClick={() => setActiveTab('TREE')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'TREE' ? 'bg-emerald-700 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌳 AXIONYX Genome Tree
          </button>
          <button onClick={() => setActiveTab('LAW')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'LAW' ? 'bg-emerald-700 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ⚖️ The Continuity Law
          </button>
        </div>

        {activeTab === 'TREE' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl h-[600px] overflow-hidden relative shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <ReactFlow nodes={treeNodes} edges={treeEdges} fitView>
              <Background color="#1e293b" gap={16} />
              <Controls />
            </ReactFlow>
          </div>
        )}

        {activeTab === 'LAW' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-emerald-900/50 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 border-b border-emerald-900/50 pb-2">The Genesis Node</h3>
              <p className="text-slate-300 mb-4">
                <strong>Siphanda Phansi CC</strong> ("working from below") is the true ancestral node. The legal entity was merely the container. The genome was the intelligence (intention, skills, lessons, failures).
              </p>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-400">Container Survival (CIPC)</span>
                  <span className="font-mono text-red-400">0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400">Capability Continuity (AXIONYX)</span>
                  <span className="font-mono text-emerald-400">100%</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-cyan-900/50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">iPhande (Capability Observation)</h3>
                <p className="text-slate-400 text-sm italic mb-2">"The capability to see capability."</p>
                <p className="text-slate-300">
                  iPhande is not just software. It is the mirror where the ecosystem first learned to see itself. It answers: Who exists? What can they do? How do they connect?
                </p>
              </div>

              <div className="bg-slate-900 border border-orange-900/50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-400 mb-2">The SARS Institutional Learning Event</h3>
                <p className="text-slate-300">
                  The random Bolt encounter leading to an ecosystem merger with Nokuthula Engineering (Lwa Bantu / Noks Eight) generated an offline mission to SARS. 
                  The organism learned that <strong>creation is not enough; sustainability requires institutional compliance and legal continuity.</strong>
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
