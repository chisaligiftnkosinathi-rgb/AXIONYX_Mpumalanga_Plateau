import React from 'react';

export default function CrystalViewer({ params }: { params: { id: string } }) {
  // Mock data for Sprint 2 MVP
  const crystal = {
    id: "AXIONYX_REALITY_CRYSTAL_001",
    name: "Mpumalanga Acid Mine Drainage Regeneration Pilot",
    domain: "Environmental Chemistry",
    hypothesis: "Can targeted AMD treatment restore river health while maintaining local economic stability?",
    maturity: "C3 Lab Validated",
    confidence: 0.82,
    uncertainties: [
      "Long-term ecosystem adaptation",
      "Seasonal nutrient cycles",
      "Local employment transition rate"
    ],
    status: "Awaiting Field Validation",
    evidenceCount: 1,
    lineage: [
        { type: "Experiment", text: "Laboratory closed-system bioreactor" },
        { type: "Source", text: "University Laboratory (Pretoria)" },
        { type: "Measurement", text: "pH reduction: 3.2 to 6.8 over 30 days" },
        { type: "Reviewer", text: "Dr. S. Mokoena" }
    ]
  };

  return (
    <main className="min-h-screen p-24 bg-slate-950 text-slate-50 font-mono">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">{crystal.id}</h1>
      <h2 className="text-xl text-slate-300 mb-8">{crystal.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
            <h3 className="text-yellow-400 font-bold mb-4 uppercase">Core Claim</h3>
            <p className="mb-2"><span className="text-slate-500">Domain:</span> {crystal.domain}</p>
            <p className="mb-2"><span className="text-slate-500">Hypothesis:</span> {crystal.hypothesis}</p>
            <p className="mb-2"><span className="text-slate-500">Status:</span> <span className="text-orange-300">{crystal.status}</span></p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
            <h3 className="text-yellow-400 font-bold mb-4 uppercase">Epistemic Metrics</h3>
            <p className="mb-2"><span className="text-slate-500">Maturity:</span> <span className="text-blue-300">{crystal.maturity}</span></p>
            <p className="mb-2"><span className="text-slate-500">Confidence:</span> <span className="text-green-400">{crystal.confidence}</span></p>
            <div className="mt-4">
                <span className="text-slate-500 block mb-2">Known Unknowns:</span>
                <ul className="list-disc pl-5 text-red-300">
                    {crystal.uncertainties.map((u, i) => <li key={i}>{u}</li>)}
                </ul>
            </div>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-green-400 font-bold mb-4 uppercase">Evidence Lineage</h3>
          <div className="pl-4 border-l-2 border-slate-700">
              {crystal.lineage.map((item, index) => (
                  <div key={index} className="mb-4">
                      <span className="text-slate-500">├── {item.type}:</span> {item.text}
                  </div>
              ))}
          </div>
      </div>
    </main>
  );
}
