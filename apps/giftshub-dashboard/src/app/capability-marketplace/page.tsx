"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

// Network Graph visualizing the Solution Assembly
const initialNodes: Node[] = [
  { id: '1', position: { x: 400, y: 50 }, data: { label: '🌍 Reality Need: Mine Water Sensors' }, style: { background: '#0f172a', color: '#38bdf8', border: '1px solid #38bdf8', padding: 10, borderRadius: 8, width: 200 } },
  { id: '2', position: { x: 200, y: 150 }, data: { label: '🧪 Analytical Chemist' }, style: { background: '#0f172a', color: '#a78bfa', border: '1px solid #a78bfa', padding: 10, borderRadius: 8 } },
  { id: '3', position: { x: 600, y: 150 }, data: { label: '⚙️ Sensor Engineer' }, style: { background: '#0f172a', color: '#a78bfa', border: '1px solid #a78bfa', padding: 10, borderRadius: 8 } },
  { id: '4', position: { x: 400, y: 250 }, data: { label: '🌱 Capability Assembly' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8 } },
  { id: '5', position: { x: 400, y: 350 }, data: { label: '🏭 Local Manufacturer' }, style: { background: '#0f172a', color: '#a78bfa', border: '1px solid #a78bfa', padding: 10, borderRadius: 8 } },
  { id: '6', position: { x: 400, y: 450 }, data: { label: '🌻 Solution Flower' }, style: { background: '#0f172a', color: '#34d399', border: '1px solid #34d399', padding: 10, borderRadius: 8 } },
  { id: '7', position: { x: 400, y: 550 }, data: { label: '🍎 Economic Fruit (CVI: 76)' }, style: { background: '#0f172a', color: '#f43f5e', border: '1px solid #f43f5e', padding: 10, borderRadius: 8 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e6-7', source: '6', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
];

export default function CapabilityMarketplaceDashboard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Capability Exchange Marketplace
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "The forest does not sell flowers. It creates the ecosystem where flowers exchange seeds, nutrients, and knowledge."
          </p>
        </header>

        {/* CVI Metric */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between">
          <div>
            <h3 className="text-slate-400 text-sm uppercase tracking-widest">Active Assembly Status</h3>
            <div className="text-2xl font-bold mt-1 text-emerald-400">Sensor Tree Prototype 001</div>
          </div>
          <div className="text-right">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest">Capability Value Index (CVI)</h3>
            <div className="text-3xl font-bold mt-1 text-rose-400">76</div>
          </div>
        </div>

        {/* Network Graph */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[700px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-emerald-500">🌍</span> Opportunity Forest Assembly
          </h2>
          <p className="text-slate-400 mb-4 text-sm max-w-3xl">
            Value is not created when ownership transfers. Value is created when capability increases. 
            This graph demonstrates how AXIONYX discovers capability roots and assembles them to satisfy a reality need.
          </p>
          <div className="flex-1 border border-slate-800 rounded-lg overflow-hidden">
            <ReactFlow nodes={nodes} edges={edges} fitView>
              <Background color="#1e293b" gap={16} />
              <Controls />
            </ReactFlow>
          </div>
        </div>

        {/* Transformation Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-rose-400 font-bold mb-4">Traditional Marketplace</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Focus</span> <span>Products listed</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Actors</span> <span>Sellers</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Trust Metric</span> <span>Reviews</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Output</span> <span>Sales</span></li>
              <li className="flex justify-between"><span>Activity</span> <span>Transactions</span></li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-emerald-400 font-bold mb-4">AXIONYX Marketplace</h3>
            <ul className="space-y-3 text-slate-100">
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Focus</span> <span className="font-semibold text-emerald-300">Capabilities discovered</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Actors</span> <span className="font-semibold text-emerald-300">Capability nodes</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Trust Metric</span> <span className="font-semibold text-emerald-300">Evidence history</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Output</span> <span className="font-semibold text-emerald-300">Value creation events</span></li>
              <li className="flex justify-between"><span>Activity</span> <span className="font-semibold text-emerald-300">Learning exchanges</span></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
