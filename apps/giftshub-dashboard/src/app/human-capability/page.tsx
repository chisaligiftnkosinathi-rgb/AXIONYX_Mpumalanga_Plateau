"use client";
import React, { useState } from 'react';

export default function HumanCapabilityObservatory() {
  // Mock data for a single node progression
  const [nodeState, setNodeState] = useState<'ISOLATED' | 'TEAM_READY' | 'ENTERPRISE_READY'>('ISOLATED');
  
  const capabilityDNA = {
    knowledge: nodeState === 'ISOLATED' ? 0.8 : 0.9,
    skill: nodeState === 'ISOLATED' ? 0.7 : 0.9,
    reliability: nodeState === 'ENTERPRISE_READY' ? 0.9 : (nodeState === 'TEAM_READY' ? 0.7 : 0.4),
    scalability: nodeState === 'ENTERPRISE_READY' ? 0.8 : 0.3
  };

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-400">HUMAN CAPABILITY OBSERVATORY</h1>
          <p className="text-gray-400">Mapping the Atomic Unit of the Economy</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">OBSERVATION LAYER</div>
          <div className="text-xl font-bold text-blue-500 font-mono">A66.5.2</div>
        </div>
      </header>

      {/* Global KPIs */}
      <section className="mb-12 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">DISCOVERY RATE</div>
          <div className="text-2xl font-bold text-white">1,204 <span className="text-xs text-gray-500">/mo</span></div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">EVIDENCE COMPLETION</div>
          <div className="text-2xl font-bold text-blue-400">42%</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">CONVERSION RATE</div>
          <div className="text-2xl font-bold text-purple-400">18%</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">KNOWLEDGE TRANSFER</div>
          <div className="text-2xl font-bold text-emerald-400">2.4x</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">EMERGENCE INDEX</div>
          <div className="text-2xl font-bold text-yellow-400">0.14</div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Node Profile */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <div className="flex justify-between items-start border-b border-gray-800 pb-4 mb-6">
            <div>
              <div className="text-blue-500 font-mono text-sm font-bold mb-1">NODE: NODE-PLMB-8832</div>
              <h2 className="text-2xl font-bold text-gray-200">Skilled Plumber</h2>
              <div className="text-gray-400 text-sm mt-1">Domain: Water Infrastructure</div>
            </div>
            <div className={`px-3 py-1 rounded text-xs font-bold border ${
              nodeState === 'ISOLATED' ? 'bg-gray-800 text-gray-400 border-gray-700' :
              nodeState === 'TEAM_READY' ? 'bg-blue-900/30 text-blue-400 border-blue-900' :
              'bg-emerald-900/30 text-emerald-400 border-emerald-900'
            }`}>
              {nodeState.replace('_', ' ')}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Capability DNA</h3>
              
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Knowledge (Understanding)</span>
                    <span className="text-white">{(capabilityDNA.knowledge * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-black h-2 rounded"><div className="bg-blue-500 h-2 rounded" style={{width: `${capabilityDNA.knowledge * 100}%`}}></div></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Skill (Execution Evidence)</span>
                    <span className="text-white">{(capabilityDNA.skill * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-black h-2 rounded"><div className="bg-blue-500 h-2 rounded" style={{width: `${capabilityDNA.skill * 100}%`}}></div></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Reliability (Repetition/Quality)</span>
                    <span className="text-white">{(capabilityDNA.reliability * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-black h-2 rounded"><div className="bg-purple-500 h-2 rounded" style={{width: `${capabilityDNA.reliability * 100}%`}}></div></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Scalability (Training/Teams)</span>
                    <span className="text-white">{(capabilityDNA.scalability * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-black h-2 rounded"><div className="bg-emerald-500 h-2 rounded" style={{width: `${capabilityDNA.scalability * 100}%`}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Engine */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-emerald-400 border-b border-gray-800 pb-2">Capability Transformation</h2>
          
          <div className="flex-1 space-y-6">
            <p className="text-gray-400 text-sm">
              The Observatory converts isolated individuals into connected industrial networks by mapping invisible knowledge into validated evidence.
            </p>
            
            <div className="p-4 bg-black border border-gray-800 rounded">
              <h3 className="text-xs font-bold text-gray-500 mb-2">SIMULATE EVIDENCE GATHERING</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setNodeState('ISOLATED')}
                  className={`flex-1 py-2 text-xs font-bold rounded ${nodeState === 'ISOLATED' ? 'bg-gray-700 text-white' : 'bg-gray-900 text-gray-500 hover:bg-gray-800'}`}
                >
                  Raw Skill
                </button>
                <button 
                  onClick={() => setNodeState('TEAM_READY')}
                  className={`flex-1 py-2 text-xs font-bold rounded ${nodeState === 'TEAM_READY' ? 'bg-blue-700 text-white' : 'bg-gray-900 text-gray-500 hover:bg-gray-800'}`}
                >
                  + Add Reliability Evidence
                </button>
                <button 
                  onClick={() => setNodeState('ENTERPRISE_READY')}
                  className={`flex-1 py-2 text-xs font-bold rounded ${nodeState === 'ENTERPRISE_READY' ? 'bg-emerald-700 text-white' : 'bg-gray-900 text-gray-500 hover:bg-gray-800'}`}
                >
                  + Add Scalability Proof
                </button>
              </div>
            </div>

            <div className="p-4 bg-blue-900/10 border border-blue-900/50 rounded">
              <h3 className="text-xs font-bold text-blue-400 mb-2">OPPORTUNITY MATCHING</h3>
              <ul className="text-sm text-gray-300 space-y-2 font-mono">
                {nodeState === 'ISOLATED' && <li className="text-gray-500">Requires more reliability evidence to unlock matches.</li>}
                {nodeState === 'TEAM_READY' && (
                  <>
                    <li>[MATCH] Subcontractor: Municipal Housing Project Phase 1</li>
                    <li>[MATCH] Local Maintenance Cooperative</li>
                  </>
                )}
                {nodeState === 'ENTERPRISE_READY' && (
                  <>
                    <li className="text-emerald-400">[READY] Enterprise Formation Protocol Initiated</li>
                    <li>[MATCH] Tier 1 Contractor Status: Regional Water Grid</li>
                    <li>[MATCH] Apprenticeship Grant Funding: 5 Trainees</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
