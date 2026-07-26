"use client";
import React, { useState, useEffect } from 'react';

export default function SimulationDashboard() {
  const [stage, setStage] = useState(0);
  const [certificate, setCertificate] = useState<any>(null);

  const stages = [
    { id: 1, name: "SEED", desc: "Reality signal detected (WhatsApp)", icon: "🌱" },
    { id: 2, name: "ROOT", desc: "Knowledge search begins (ACRI)", icon: "🌿" },
    { id: 3, name: "TREE", desc: "Capabilities connected (Genome)", icon: "🌳" },
    { id: 4, name: "SUNLIGHT", desc: "Capital deployed (Bank)", icon: "☀️" },
    { id: 5, name: "FLOWER", desc: "Solution produced (Fruit)", icon: "🌻" },
    { id: 6, name: "RING", desc: "Learning preserved (Memory)", icon: "🌲" }
  ];

  const runSimulation = () => {
    setStage(1);
    
    // Simulate progression
    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setStage(current);
      
      if (current === 6) {
        clearInterval(interval);
        generateCertificate();
      }
    }, 1500);
  };

  const generateCertificate = () => {
    setCertificate({
      simulation: "Sensor Tree - eMalahleni",
      timestamp: "2026-07-27",
      master_equation: "Capability Growth = Need × Evidence × Trust × Collaboration × Learning",
      growth_score: 0.522,
      status: "LIVING TREE VERIFIED",
      seed: "Need for affordable environmental sensors",
      genome: ["Analytical Chemistry", "Electronics Engineering", "Manufacturing", "Testing Laboratory"],
      capital: "APPROVED: Evidence + Need + Trust + Capability",
      fruit: "Prototype environmental sensor",
      growth_ring: {
        failure: "Calibration drift (Temperature)",
        learning: "Temperature compensation algorithm created",
        new_standard: "AXIONYX Sensor Calibration Protocol v1"
      }
    });
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-emerald-500">ROOT SIMULATION ENGINE</h1>
          <p className="text-gray-400 font-mono text-sm mt-1">THE SENSOR TREE | A66.27.1</p>
        </div>
        <button 
          onClick={runSimulation}
          disabled={stage > 0 && stage < 6}
          className="px-6 py-2 bg-emerald-900 text-white font-bold rounded hover:bg-emerald-800 disabled:opacity-50"
        >
          {stage === 0 ? "INITIATE SIMULATION" : stage < 6 ? "SIMULATING..." : "RE-RUN SIMULATION"}
        </button>
      </header>

      <div className="grid grid-cols-3 gap-8">
        
        {/* The Lifecycle Visualizer */}
        <div className="col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">The Transformation Lifecycle</h2>
          
          <div className="space-y-4 relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-800 z-0"></div>

            {stages.map((s) => (
              <div 
                key={s.id} 
                className={`relative z-10 flex items-center p-4 rounded-lg border transition-all duration-500 ${
                  stage >= s.id 
                    ? 'bg-emerald-950/40 border-emerald-500/50 transform scale-105 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                    : 'bg-gray-900 border-gray-800 opacity-50'
                }`}
              >
                <div className={`text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-black border ${stage >= s.id ? 'border-emerald-500' : 'border-gray-700'}`}>
                  {s.icon}
                </div>
                <div className="ml-4">
                  <div className={`font-bold text-sm font-mono ${stage >= s.id ? 'text-emerald-400' : 'text-gray-500'}`}>
                    STAGE {s.id}: {s.name}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Living Proof Certificate */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Living Proof Certificate</h2>
          
          <div className={`transition-all duration-1000 ${certificate ? 'opacity-100' : 'opacity-0'}`}>
            {certificate && (
              <div className="bg-gray-900 border border-emerald-500/30 rounded-xl p-8 font-mono text-sm relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>

                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <div className="text-emerald-500 font-bold text-lg">CERTIFICATE OF CAPABILITY</div>
                    <div className="text-gray-500">ID: {certificate.simulation}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-500">DATE: {certificate.timestamp}</div>
                    <div className="text-emerald-400 font-bold bg-emerald-900/30 px-3 py-1 rounded mt-1 border border-emerald-800">
                      {certificate.status}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300">
                  <div>
                    <span className="text-gray-500 block mb-1">MASTER EQUATION:</span>
                    <span className="text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/50">{certificate.master_equation}</span>
                    <span className="ml-4 font-bold text-white">GROWTH SCORE = {certificate.growth_score}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-black p-4 rounded border border-gray-800">
                      <span className="text-emerald-500 text-xs block mb-2">1. REALITY SIGNAL (SEED)</span>
                      {certificate.seed}
                    </div>
                    <div className="bg-black p-4 rounded border border-gray-800">
                      <span className="text-emerald-500 text-xs block mb-2">2. COLLABORATION (GENOME)</span>
                      <ul className="list-disc list-inside">
                        {certificate.genome.map((g: string) => <li key={g}>{g}</li>)}
                      </ul>
                    </div>
                    <div className="bg-black p-4 rounded border border-gray-800">
                      <span className="text-emerald-500 text-xs block mb-2">3. SUNLIGHT (CAPITAL)</span>
                      {certificate.capital}
                    </div>
                    <div className="bg-black p-4 rounded border border-gray-800">
                      <span className="text-emerald-500 text-xs block mb-2">4. PRODUCTION (FRUIT)</span>
                      {certificate.fruit}
                    </div>
                  </div>

                  <div className="bg-amber-950/20 border border-amber-900/50 p-6 rounded mt-6">
                    <span className="text-amber-500 text-xs font-bold block mb-4 border-b border-amber-900/50 pb-2">5. METABOLIZED FAILURE (GROWTH RING)</span>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-red-400 text-xs mb-1">FAILURE:</div>
                        <div>{certificate.growth_ring.failure}</div>
                      </div>
                      <div>
                        <div className="text-blue-400 text-xs mb-1">LEARNING:</div>
                        <div>{certificate.growth_ring.learning}</div>
                      </div>
                      <div>
                        <div className="text-emerald-400 text-xs mb-1">NEW STANDARD:</div>
                        <div className="font-bold">{certificate.growth_ring.new_standard}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-8 mt-8 border-t border-gray-800">
                    <p className="text-gray-500 italic text-sm">"The system converts reality into wisdom. The forest can remember."</p>
                  </div>
                </div>
              </div>
            )}
            
            {!certificate && stage > 0 && (
              <div className="h-full flex items-center justify-center flex-col text-gray-500">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mb-4"></div>
                <p>SIMULATING CIVILIZATIONAL METABOLISM...</p>
              </div>
            )}
            
            {!certificate && stage === 0 && (
              <div className="h-full flex items-center justify-center border border-dashed border-gray-800 rounded-xl p-12 text-center text-gray-500">
                Awaiting Simulation Initialization...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
