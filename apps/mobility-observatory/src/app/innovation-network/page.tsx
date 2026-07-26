import React from 'react';

export default function InnovationNetwork() {
  return (
    <div className="p-8 bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold mb-12 text-emerald-400">Future Mobility Laboratory</h1>
      <div className="flex flex-col items-center space-y-4 text-xl">
        <div className="px-6 py-3 border border-slate-700 bg-slate-800 rounded">Vehicle</div>
        <div className="text-slate-500">↓</div>
        <div className="px-6 py-3 border border-slate-700 bg-slate-800 rounded">Engine</div>
        <div className="text-slate-500">↓</div>
        <div className="px-6 py-3 border border-emerald-700 bg-emerald-900 rounded">Materials Node</div>
        <div className="text-slate-500">↓</div>
        <div className="px-6 py-3 border border-slate-700 bg-slate-800 rounded">Research Labs</div>
        <div className="text-slate-500">↓</div>
        <div className="px-6 py-3 border border-blue-700 bg-blue-900 rounded">Renewable Technology</div>
      </div>
    </div>
  );
}
