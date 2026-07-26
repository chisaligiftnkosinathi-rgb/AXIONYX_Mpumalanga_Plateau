"use client";
import React, { useState } from 'react';

export default function BankSimulationDashboard() {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const script = [
    {
      q: "Q1: How do we know this business is real? They have no collateral.",
      traditional: "They registered a company and have a credit score.",
      axionyx: "Registration is only a seed. We need evidence of life.",
      proof: [
        "Seed: Founder identified & Skill verified",
        "Root: Technician experience recorded",
        "Growth Ring: Survived material shortage",
        "Fruit: Tested sensor & Repeat demand"
      ],
      shift: "Unknown Business ➔ Verified Capability ➔ Investment Candidate"
    },
    {
      q: "Q2: What happens if the company fails? We lose the capital.",
      traditional: "Failure = Total Loss. Liquidate collateral.",
      axionyx: "Failure = Data. If they fail, you own the learning.",
      proof: [
        "Observation of Failure",
        "Root Cause Analysis",
        "Correction & Standardization",
        "The next company does not start from zero."
      ],
      shift: "Financial Loss ➔ Institutional Memory (Growth Rings)"
    },
    {
      q: "Q3: How does this create outsized returns?",
      traditional: "Interest on isolated debt.",
      axionyx: "Capital without intelligence is dependency. Capital with traceability is multiplication.",
      proof: [
        "Detect Mining Need: Water sensors",
        "Search ACRI Trust Graph: Find Chemist + Engineer",
        "Form Collaboration Node",
        "Bank funds the ecosystem, not an isolated company."
      ],
      shift: "Funding Companies ➔ Funding Capability Ecosystems"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold text-amber-500">THE INSTITUTIONAL PITCH</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">BANK BOARDROOM SIMULATION | THE COGNITIVE SHIFT</p>
      </header>

      <div className="grid grid-cols-3 gap-8">
        
        {/* Risk Committee Objections */}
        <div className="col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">The Risk Committee</h2>
          {script.map((step, index) => (
            <div 
              key={index}
              onClick={() => setActiveQuestion(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                activeQuestion === index 
                  ? 'bg-amber-950/30 border-amber-500/50' 
                  : 'bg-gray-900 border-gray-800 hover:bg-gray-800'
              }`}
            >
              <div className="font-bold text-amber-400 mb-2">{step.q}</div>
              <div className="text-xs text-gray-500">Traditional: {step.traditional}</div>
            </div>
          ))}
          
          <div className="mt-12 p-4 border border-red-900/50 bg-red-950/20 rounded">
            <div className="text-red-500 font-mono text-xs font-bold mb-1">TRADITIONAL PARADIGM</div>
            <div className="text-gray-400 text-sm">"How do we prevent losing money?"</div>
          </div>
        </div>

        {/* The AXIONYX Proof */}
        <div className="col-span-2 border border-gray-800 rounded-lg p-6 bg-gray-900">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">The AXIONYX / Impande Proof</h2>
          
          <div className="animation-fade-in space-y-6">
            <div className="text-2xl font-bold text-emerald-400 border-l-4 border-emerald-500 pl-4 py-2">
              "{script[activeQuestion].axionyx}"
            </div>

            <div className="bg-black border border-gray-800 rounded p-6">
              <div className="text-gray-500 font-mono text-xs mb-4">SYSTEM LEDGER EVIDENCE</div>
              <div className="space-y-3">
                {script[activeQuestion].proof.map((line, i) => (
                  <div key={i} className="flex items-center text-gray-300 font-mono text-sm">
                    <span className="text-emerald-500 mr-3">➔</span> {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border border-amber-900/50 bg-amber-950/20 rounded">
              <div className="text-amber-500 font-bold text-xs mb-1">THE COGNITIVE SHIFT</div>
              <div className="text-white font-bold text-lg">{script[activeQuestion].shift}</div>
            </div>
          </div>

          <div className="mt-12 p-4 border border-emerald-900/50 bg-emerald-950/20 rounded">
            <div className="text-emerald-500 font-mono text-xs font-bold mb-1">NEW PARADIGM</div>
            <div className="text-gray-300 text-sm">
              "We are not asking the bank to give money to uncertainty. We are providing a microscope that reveals where life already exists. <strong className="text-emerald-400">Where does verified capability exist, and how can we help it multiply?</strong>"
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
