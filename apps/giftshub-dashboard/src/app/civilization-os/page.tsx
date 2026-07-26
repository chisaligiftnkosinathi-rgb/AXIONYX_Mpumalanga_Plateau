"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

// Global Capability Map visualizing the Lithium Battery Challenge
const initialNodes: Node[] = [
  // Reality Need
  { id: '1', position: { x: 400, y: 50 }, data: { label: '🌍 Global Challenge:\nSustainable Battery Tech' }, style: { background: '#0f172a', color: '#60a5fa', border: '1px solid #60a5fa', padding: 10, borderRadius: 8, width: 250, textAlign: 'center' } },
  
  // International Capability Nodes
  { id: '2', position: { x: 50, y: 250 }, data: { label: '🇿🇦 South Africa\n(Minerals)' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '3', position: { x: 200, y: 250 }, data: { label: '🇨🇱 Chile\n(Lithium Base)' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '4', position: { x: 350, y: 250 }, data: { label: '🇩🇪 Germany\n(Engineering)' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '5', position: { x: 500, y: 250 }, data: { label: '🇯🇵 Japan\n(Battery Science)' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '6', position: { x: 650, y: 250 }, data: { label: '🇨🇳 China\n(Manufacturing)' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '7', position: { x: 800, y: 250 }, data: { label: '🇺🇸 USA\n(Advanced R&D)' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  
  // Capability Assembly (The Output)
  { id: '8', position: { x: 400, y: 450 }, data: { label: '🌐 Global Capability Branch\nTrust: High | Verified' }, style: { background: '#0f172a', color: '#34d399', border: '2px solid #34d399', padding: 15, borderRadius: 10, textAlign: 'center', fontWeight: 'bold' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#475569' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#475569' } },
  { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#475569' } },
  { id: 'e1-5', source: '1', target: '5', animated: true, style: { stroke: '#475569' } },
  { id: 'e1-6', source: '1', target: '6', animated: true, style: { stroke: '#475569' } },
  { id: 'e1-7', source: '1', target: '7', animated: true, style: { stroke: '#475569' } },
  
  { id: 'e2-8', source: '2', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' }, style: { stroke: '#34d399' } },
  { id: 'e3-8', source: '3', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' }, style: { stroke: '#34d399' } },
  { id: 'e4-8', source: '4', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' }, style: { stroke: '#34d399' } },
  { id: 'e5-8', source: '5', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' }, style: { stroke: '#34d399' } },
  { id: 'e6-8', source: '6', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' }, style: { stroke: '#34d399' } },
  { id: 'e7-8', source: '7', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' }, style: { stroke: '#34d399' } },
];

export default function CivilizationOSDashboard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Capability Civilization OS
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "No actor owns the intelligence of the ecosystem. The ecosystem belongs to the collective growth of humanity."
          </p>
        </header>

        {/* Governance Health */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
            <span>⚖️</span> Distributed Governance Health
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1 text-slate-300">
                <span>Scientific Validation</span>
                <span>94%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1 text-slate-300">
                <span>Community Validation</span>
                <span>88%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1 text-slate-300">
                <span>Transparency</span>
                <span>99%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '99%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1 text-slate-300">
                <span>Capture Risk (Entropy Active)</span>
                <span className="text-rose-400">12%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Capability Graph */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[700px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-blue-400">🌐</span> Planetary Capability Map (Capability Diplomacy)
          </h2>
          <p className="text-slate-400 mb-4 text-sm max-w-3xl">
            Simulating the Lithium Battery Challenge. The Civilization OS bypasses traditional political negotiation and artificial scarcity, instantly mapping and coordinating global capability centers into a verified, ethical collaboration branch.
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
