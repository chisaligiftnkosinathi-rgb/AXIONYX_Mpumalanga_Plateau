"use client";
import React, { useState } from 'react';

export default function CapabilityAuthenticityDashboard() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const genomeData = [
    {
      id: 'energy',
      sector: 'Energy',
      company: 'Eskom (Local Power Supply)',
      logo: '⚡',
      claimedMeaning: 'Power, speed, reliability',
      evidenceLayer: 'Large generation capacity, but frequent load-shedding, aging infrastructure',
      cai: 0.45,
      caiLevel: 'Medium',
      frictionFlags: ['Grid Instability', 'Maintenance Deficits'],
      intervention: 'Fund local micro-grids & maintenance steward nodes.'
    },
    {
      id: 'mining',
      sector: 'Mining',
      company: 'Exxaro (Coal Mining)',
      logo: '⛏️',
      claimedMeaning: 'Strength, resource extraction',
      evidenceLayer: 'Major coal producer, ISO-certified labs, export contracts',
      cai: 0.90,
      caiLevel: 'High',
      frictionFlags: ['Environmental Impact'],
      intervention: 'Deploy environmental monitoring sensors to track toxicological footprint.'
    },
    {
      id: 'transport',
      sector: 'Transport',
      company: 'Putco Bus Service',
      logo: '🚍',
      claimedMeaning: 'Mobility, reliability, national backbone',
      evidenceLayer: 'Large fleet, but aging buses, inconsistent schedules, high friction',
      cai: 0.30,
      caiLevel: 'Low-Medium',
      frictionFlags: ['Maintenance Gaps', 'Route Inefficiency', 'Asset Decay'],
      intervention: 'Trigger local spare-parts manufacturing & fleet diagnostic stewards.'
    },
    {
      id: 'laboratory',
      sector: 'Laboratory',
      company: 'Kendal Power Station Lab',
      logo: '🔬',
      claimedMeaning: 'Truth, precision, scientific rigor',
      evidenceLayer: 'Water quality testing, ISO standards, trained technicians',
      cai: 0.95,
      caiLevel: 'High',
      frictionFlags: [],
      intervention: 'Scale node into a regional training hub for capability evidence.'
    },
    {
      id: 'technology',
      sector: 'Technology',
      company: 'Local IT Startups',
      logo: '💻',
      claimedMeaning: 'Intelligence, automation, future tech',
      evidenceLayer: 'Small developer teams, limited scale, growing fintech presence',
      cai: 0.60,
      caiLevel: 'Medium',
      frictionFlags: ['Capital Shortage', 'Scale Limitations'],
      intervention: 'Provide controlled capital deployment and mentorship excipients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-10 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-500 tracking-wider">CAPABILITY AUTHENTICITY INDEX</h1>
          <p className="text-gray-400 mt-2">eMalahleni Capability Genome Map — A66.12.1</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">BUSINESS ETYMOLOGY INTELLIGENCE</div>
          <div className="text-xl font-bold text-blue-500 font-mono">CAI SCANNER</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* The Genome Map List */}
        <section className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-12 gap-4 text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 px-4">
            <div className="col-span-1">Logo</div>
            <div className="col-span-3">Entity</div>
            <div className="col-span-4">Claimed vs Evidence</div>
            <div className="col-span-2 text-center">CAI Score</div>
            <div className="col-span-2 text-right">Status</div>
          </div>
          
          {genomeData.map((node) => (
            <div 
              key={node.id} 
              onClick={() => setSelectedSector(node.id)}
              className={`grid grid-cols-12 gap-4 items-center p-4 rounded cursor-pointer border transition-all ${selectedSector === node.id ? 'bg-blue-900/20 border-blue-500/50' : 'bg-gray-900 border-gray-800 hover:border-gray-600'}`}
            >
              <div className="col-span-1 text-3xl">{node.logo}</div>
              <div className="col-span-3">
                <div className="font-bold text-gray-200">{node.company}</div>
                <div className="text-xs text-gray-500">{node.sector}</div>
              </div>
              <div className="col-span-4">
                <div className="text-xs text-blue-400 italic mb-1">"{node.claimedMeaning}"</div>
                <div className="text-xs text-gray-400 font-mono line-clamp-2">{node.evidenceLayer}</div>
              </div>
              <div className="col-span-2 flex justify-center">
                <div className={`text-xl font-mono font-bold ${node.cai >= 0.8 ? 'text-emerald-500' : node.cai >= 0.5 ? 'text-amber-500' : 'text-red-500'}`}>
                  {(node.cai * 100).toFixed(0)}%
                </div>
              </div>
              <div className="col-span-2 text-right">
                <span className={`text-xs px-2 py-1 rounded font-bold uppercase tracking-wider ${node.cai >= 0.8 ? 'bg-emerald-900/50 text-emerald-400' : node.cai >= 0.5 ? 'bg-amber-900/50 text-amber-400' : 'bg-red-900/50 text-red-400'}`}>
                  {node.caiLevel}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Intelligent Steward Inspector */}
        <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-2xl flex flex-col">
          <h2 className="text-xl font-bold text-blue-400 mb-6 border-b border-gray-800 pb-2">Steward Inspector</h2>
          
          {selectedSector ? (() => {
            const node = genomeData.find(n => n.id === selectedSector)!;
            return (
              <div className="flex-1 flex flex-col animation-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{node.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{node.company}</h3>
                    <div className="text-sm text-gray-400 font-mono">SECTOR: {node.sector}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-black rounded border border-gray-800">
                    <div className="text-xs text-gray-500 font-bold mb-1">CAPABILITY GAP ANALYSIS</div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Claimed Capability</span>
                      <span className="text-sm text-blue-400">100%</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-400">Evidence Supported</span>
                      <span className={`text-sm font-bold ${node.cai >= 0.8 ? 'text-emerald-500' : node.cai >= 0.5 ? 'text-amber-500' : 'text-red-500'}`}>
                        {(node.cai * 100).toFixed(0)}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-gray-800 rounded overflow-hidden">
                      <div 
                        className={`h-full ${node.cai >= 0.8 ? 'bg-emerald-500' : node.cai >= 0.5 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${node.cai * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {node.frictionFlags.length > 0 && (
                    <div>
                      <div className="text-xs text-red-500 font-bold mb-2">FRICTION FLAGS DETECTED</div>
                      <div className="flex flex-wrap gap-2">
                        {node.frictionFlags.map((flag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-red-950/30 text-red-400 border border-red-900/50 rounded flex items-center gap-1">
                            ⚠️ {flag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-blue-950/20 border border-blue-900/50 rounded mt-auto">
                    <div className="text-xs text-blue-400 font-bold mb-2">STEWARD INTERVENTION PROTOCOL</div>
                    <p className="text-sm text-gray-300 font-mono">
                      {node.intervention}
                    </p>
                  </div>
                </div>
              </div>
            );
          })() : (
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <div className="text-6xl mb-4 opacity-20">👁️</div>
                <div className="text-gray-500 font-mono text-sm">Select an industrial node to run a<br/>Capability Authenticity Scan</div>
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
