import React from 'react';

export default function ROICalculator() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen font-sans flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-black text-center mb-2 text-emerald-400">QUANTUM ECONOMIC SIMULATOR</h1>
        <p className="text-center text-gray-400 mb-8">Demonstrating the Toyota Quantum as a Mobility Asset</p>
        
        <div className="space-y-4 font-mono text-lg">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Vehicle Cost:</span>
            <span>R650 000</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Finance:</span>
            <span className="text-red-400">R12 500 / month</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Potential Usage:</span>
            <span className="text-blue-400">Taxi / Shuttle / Delivery</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Daily Revenue Simulation:</span>
            <span className="text-emerald-400">R800</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2 pt-4">
            <span className="text-gray-200 font-bold">Monthly Revenue (30 days):</span>
            <span className="text-emerald-400 font-bold">R24 000</span>
          </div>
          <div className="flex justify-between bg-gray-900 p-4 rounded mt-6 border border-emerald-900">
            <span className="text-white font-black text-xl">Possible Margin:</span>
            <span className="text-emerald-400 font-black text-2xl">R11 500 / month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
