import React from 'react';

export default function WalalaWasalaCalibration() {
  return (
    <div className="p-8 bg-black text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-extrabold text-blue-500">WALALA WASALA</h1>
        <p className="text-gray-400 text-lg">Reality Calibration Engine</p>
        <p className="text-xs text-blue-400 mt-2 font-mono uppercase">Principle: Reality is the final validator.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Mobility Node (Omars MotorDen) */}
        <section className="bg-gray-900 p-6 rounded-lg border border-purple-900 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-purple-600 text-xs px-2 py-1 font-bold rounded-bl text-white">LEARNING_IN_PROGRESS</div>
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Mobility (Omars MotorDen)</h2>
          <p className="text-gray-400 mb-6 italic">"Provide vehicles that enable people and businesses to achieve mobility"</p>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Intent Integrity:</span><span className="text-white">0.85</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Evidence Strength:</span><span className="text-white">0.55</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Execution Reality:</span><span className="text-red-400 line-through">0.40</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Learning Quality:</span><span className="text-emerald-400">0.95</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-purple-400 font-bold">Reality Alignment:</span><span className="text-purple-400 font-bold">0.69</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Economic Opportunity: ACTIVE | Partner Routing: REVIEW_REQUIRED</p>
        </section>

        {/* Materials Node (Failure with Learning) */}
        <section className="bg-gray-900 p-6 rounded-lg border border-purple-900 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-purple-600 text-xs px-2 py-1 font-bold rounded-bl text-white">LEARNING_IN_PROGRESS</div>
          <h2 className="text-2xl font-bold mb-2 text-purple-400">Materials (Commerce)</h2>
          <p className="text-gray-400 mb-6 italic">"This material can solve an engineering problem"</p>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Intent Integrity:</span><span className="text-white">0.95</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Evidence Strength:</span><span className="text-white">0.95</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Execution Reality:</span><span className="text-red-400 line-through">0.40</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Learning Quality:</span><span className="text-emerald-400">0.85</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-purple-400 font-bold">Reality Alignment:</span><span className="text-purple-400 font-bold">0.75</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Governance Note: Execution failure protected by high learning state.</p>
        </section>

        {/* Chappies Node */}
        <section className="bg-gray-900 p-6 rounded-lg border border-emerald-900 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-xs px-2 py-1 font-bold rounded-bl text-white">ALIGNED</div>
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Chappies (Curiosity)</h2>
          <p className="text-gray-400 mb-6 italic">"Did curiosity become a useful opportunity?"</p>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Intent Integrity:</span><span className="text-white">0.85</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Evidence Strength:</span><span className="text-white">0.75</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Execution Reality:</span><span className="text-white">0.90</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-1">
              <span className="text-gray-500">Learning Quality:</span><span className="text-white">0.80</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-emerald-400 font-bold">Reality Alignment:</span><span className="text-emerald-400 font-bold">0.83</span>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center mt-12 border-t border-gray-800 pt-8">
        <p className="font-mono text-sm text-gray-500">Gift's Hub | The cycle: Promise → Reality Test → Difference Detected → Learning → Improved Future Action</p>
      </div>
    </div>
  );
}
