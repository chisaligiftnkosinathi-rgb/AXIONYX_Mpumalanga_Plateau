"use client";
import React from 'react';

export default function ActivityPanel() {
  return (
    <div className="w-64 bg-slate-900 border-l border-slate-800 p-4 h-full overflow-y-auto hidden 2xl:block">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Live Activity</h3>
      
      <div className="space-y-4">
        <div className="bg-slate-950 p-3 rounded border border-emerald-900/50">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-bold text-emerald-500">BATCH IMPORT</span>
            <span className="text-[10px] text-slate-500">Just now</span>
          </div>
          <div className="text-xs text-slate-300">batch_9f8d7e6c</div>
          <div className="text-[10px] text-slate-500 mt-1">20 records processed</div>
        </div>

        <div className="bg-slate-950 p-3 rounded border border-rose-900/50">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-bold text-rose-500">CONSTRAINT</span>
            <span className="text-[10px] text-slate-500">2m ago</span>
          </div>
          <div className="text-xs text-slate-300">Safety Violation Intercepted</div>
          <div className="text-[10px] text-slate-500 mt-1">OBS-105 / Ash bounds</div>
        </div>

        <div className="bg-slate-950 p-3 rounded border border-slate-800">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-bold text-sky-500">APPROVAL PENDING</span>
            <span className="text-[10px] text-slate-500">15m ago</span>
          </div>
          <div className="text-xs text-slate-300">Increase Density to 1.55</div>
          <div className="text-[10px] text-slate-500 mt-1">Mission: Export Coal</div>
        </div>
      </div>
    </div>
  );
}
