"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

// NGSA: South Africa + Nigeria Capability Bridge Graph
const initialNodes: Node[] = [
  // SOUTH AFRICA GENOME
  { id: 'sa', position: { x: 100, y: 50 }, data: { label: '🇿🇦 SOUTH AFRICA\nNCSI: 82% | Constraint: Energy' }, style: { background: '#0f172a', color: '#fbbf24', border: '2px solid #fbbf24', padding: 15, borderRadius: 10, width: 250, textAlign: 'center', fontWeight: 'bold' } },
  { id: 'sa-cap1', position: { x: 50, y: 150 }, data: { label: 'Mineral Science' }, style: { background: '#1e293b', color: '#cbd5e1', border: '1px solid #475569', padding: 10, borderRadius: 8 } },
  { id: 'sa-cap2', position: { x: 200, y: 150 }, data: { label: 'Industrial Systems' }, style: { background: '#1e293b', color: '#cbd5e1', border: '1px solid #475569', padding: 10, borderRadius: 8 } },
  { id: 'sa-cap3', position: { x: 125, y: 220 }, data: { label: 'Engineering Labs' }, style: { background: '#1e293b', color: '#cbd5e1', border: '1px solid #475569', padding: 10, borderRadius: 8 } },

  // NIGERIA GENOME
  { id: 'ng', position: { x: 650, y: 50 }, data: { label: '🇳🇬 NIGERIA\nNCSI: 79% | Constraint: Scaling' }, style: { background: '#0f172a', color: '#10b981', border: '2px solid #10b981', padding: 15, borderRadius: 10, width: 250, textAlign: 'center', fontWeight: 'bold' } },
  { id: 'ng-cap1', position: { x: 600, y: 150 }, data: { label: 'Digital Platforms' }, style: { background: '#1e293b', color: '#cbd5e1', border: '1px solid #475569', padding: 10, borderRadius: 8 } },
  { id: 'ng-cap2', position: { x: 750, y: 150 }, data: { label: 'Entrepreneurship' }, style: { background: '#1e293b', color: '#cbd5e1', border: '1px solid #475569', padding: 10, borderRadius: 8 } },
  { id: 'ng-cap3', position: { x: 675, y: 220 }, data: { label: 'Market Networks' }, style: { background: '#1e293b', color: '#cbd5e1', border: '1px solid #475569', padding: 10, borderRadius: 8 } },

  // CAPABILITY BRIDGE
  { id: 'bridge', position: { x: 375, y: 350 }, data: { label: '🌍 African Industrial Intelligence Corridor\nCTP: Very High\nResult: Mutual Growth' }, style: { background: '#064e3b', color: '#34d399', border: '2px solid #34d399', padding: 15, borderRadius: 10, width: 250, textAlign: 'center', fontWeight: 'bold' } },
];

const initialEdges: Edge[] = [
  // SA Edges
  { id: 'e-sa-1', source: 'sa', target: 'sa-cap1', style: { stroke: '#475569' } },
  { id: 'e-sa-2', source: 'sa', target: 'sa-cap2', style: { stroke: '#475569' } },
  { id: 'e-sa-3', source: 'sa', target: 'sa-cap3', style: { stroke: '#475569' } },

  // NG Edges
  { id: 'e-ng-1', source: 'ng', target: 'ng-cap1', style: { stroke: '#475569' } },
  { id: 'e-ng-2', source: 'ng', target: 'ng-cap2', style: { stroke: '#475569' } },
  { id: 'e-ng-3', source: 'ng', target: 'ng-cap3', style: { stroke: '#475569' } },

  // Bridge Edges
  { id: 'e-bridge-sa', source: 'sa-cap3', target: 'bridge', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#fbbf24' }, style: { stroke: '#fbbf24' } },
  { id: 'e-bridge-ng', source: 'ng-cap1', target: 'bridge', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }, style: { stroke: '#10b981' } },
];

export default function NGSADashboard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
            Nation Growth Sustainability Agent (NGSA)
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "The role of intelligence is not to judge nations, but to reveal pathways for sustainable capability expansion."
          </p>
        </header>

        {/* Dynamic Constraint Analysis */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <span>🏛️</span> Capability Mapping: Constraint Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h3 className="text-fbbf24 font-bold mb-2">🇿🇦 Constraint: Energy Instability</h3>
              <p className="text-sm text-slate-300">
                Traditional Interpretation: Permanent Weakness<br/>
                <strong>NGSA Interpretation:</strong> Renewable Capability Acceleration Opportunity.<br/>
                <em>Constraint Transformation Potential (CTP): 94%</em>
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h3 className="text-emerald-400 font-bold mb-2">🇳🇬 Constraint: Industrial Scaling</h3>
              <p className="text-sm text-slate-300">
                Traditional Interpretation: Dependency Weakness<br/>
                <strong>NGSA Interpretation:</strong> Digital Ecosystem Integration Opportunity.<br/>
                <em>Constraint Transformation Potential (CTP): 91%</em>
              </p>
            </div>
          </div>
        </div>

        {/* Living Capability Map */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[700px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-rose-400">🌍</span> Living Capability Map (NGSA View)
          </h2>
          <p className="text-slate-400 mb-4 text-sm max-w-3xl">
            This graph demonstrates how NGSA discovers capability pathways. By linking South Africa's deep industrial/mining engineering with Nigeria's expansive digital market and platforms, the constraints of both nations are resolved through the creation of an African Industrial Intelligence Corridor.
          </p>
          <div className="flex-1 border border-slate-800 rounded-lg overflow-hidden">
            <ReactFlow nodes={nodes} edges={edges} fitView>
              <Background color="#1e293b" gap={16} />
              <Controls />
            </ReactFlow>
          </div>
        </div>

      </div>
    </div>
  );
}
