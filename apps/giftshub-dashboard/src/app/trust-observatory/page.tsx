import React from 'react';

export default function TrustObservatory() {
  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-extrabold text-blue-400">TRUST OBSERVATORY</h1>
        <p className="text-gray-400">AXIONYX Partner Integrity & Verification Layer</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="bg-gray-900 p-6 rounded-lg border border-yellow-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-600 text-xs px-2 py-1 font-bold rounded-bl text-black">QUARANTINED</div>
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Omars MotorDen</h2>
          <p className="text-gray-400 mb-6">Capability: Automotive Mobility | Toyota Quantum</p>
          
          <div className="space-y-4 mb-6 font-mono text-sm">
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500">Trust State:</span>
              <span className="text-yellow-500 font-bold">REVIEW_REQUIRED</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500">Trust Maturity:</span>
              <span className="text-white">0.07 (Threshold: 0.70)</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500">Economic Routing:</span>
              <span className="text-red-500 font-bold">PAUSED</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500">Market Opportunity:</span>
              <span className="text-emerald-500 font-bold">ACTIVE (Toyota Quantum Demand)</span>
            </div>
          </div>

          <div className="bg-black p-4 rounded border border-gray-800 mt-4">
            <h3 className="text-xs text-red-500 uppercase font-bold mb-2">⚠ Risk Signals Detected</h3>
            <p className="text-gray-300 text-sm">External evidence requires verification (SIU Inquiry)</p>
          </div>

          <div className="bg-black p-4 rounded border border-gray-800 mt-4">
            <h3 className="text-xs text-yellow-500 uppercase font-bold mb-2">Missing Evidence</h3>
            <ul className="list-disc pl-4 text-gray-300 text-sm">
              <li>Corporate registration confirmation</li>
              <li>Compliance documentation</li>
              <li>Partner response history</li>
            </ul>
          </div>
        </section>

        <section className="space-y-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-white">The Partner Lifecycle</h2>
            <div className="flex flex-col space-y-2 font-mono text-xs text-gray-400">
              <div className="p-2 border border-gray-700 bg-gray-800 text-center">DISCOVERED</div>
              <div className="text-center">↓</div>
              <div className="p-2 border border-gray-700 bg-gray-800 text-center">EVIDENCE_COLLECTION</div>
              <div className="text-center">↓</div>
              <div className="p-2 border border-yellow-700 bg-yellow-900/20 text-yellow-500 text-center font-bold">REVIEW_REQUIRED</div>
              <div className="text-center">↓</div>
              <div className="p-2 border border-gray-700 bg-gray-800 text-center opacity-50">QUARANTINED / REASSESSMENT</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
