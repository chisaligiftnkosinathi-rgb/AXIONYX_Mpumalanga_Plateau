"use client";
import React, { useState } from 'react';

// Mocking the backend BatchReport response
export default function BatchProcessorDashboard() {
  const [imported, setImported] = useState(false);
  const [report, setReport] = useState<any>(null);

  const mockCSVImport = () => {
    // In production, this would call CSVAdapter.processBatch(fileContent, schemaPath, fileName)
    setTimeout(() => {
      setReport({
        batchId: 'batch_9f8d7e6c',
        schemaId: 'coal-lab-csv',
        schemaVersion: '1.0',
        totalRecords: 20,
        accepted: 18,
        rejected: 2,
        results: [
          { rowNumber: 1, valid: true, error: null },
          { rowNumber: 4, valid: false, error: 'Invalid timestamp format for Sample Date: INVALID_DATE' },
          { rowNumber: 5, valid: false, error: 'Value out of bounds for Ash: 115.0 (Expected 0-100)' },
          { rowNumber: 8, valid: false, error: 'Missing required field: Ash' },
          // ... mocked rendering for demo
        ]
      });
      setImported(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 flex flex-col">
      <header className="border-b border-slate-800 pb-4 mb-6 text-center">
         <div className="text-sm font-bold text-fuchsia-500 tracking-[0.3em] uppercase mb-2">Alpha 1.0 (Phase C)</div>
         <h1 className="text-3xl font-black text-white">🗂️ AXIONYX Batch Processor</h1>
         <p className="text-slate-400 mt-2">Schema-Driven Historical Data Ingestion & Validation</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 flex-1">
         
         {/* Upload Zone */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg flex flex-col items-center justify-center h-48 border-dashed border-2 border-slate-700 hover:border-fuchsia-500 transition-colors cursor-pointer" onClick={mockCSVImport}>
               <div className="text-4xl mb-4">📥</div>
               <div className="font-bold text-white mb-1">Drop CSV File Here</div>
               <div className="text-xs text-slate-500">or click to browse</div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Active Schema</h2>
               <div className="text-sm">
                 <div className="flex justify-between border-b border-slate-800/50 py-2">
                   <span className="text-slate-400">Schema ID</span>
                   <span className="text-fuchsia-400 font-bold">coal-lab-csv</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800/50 py-2">
                   <span className="text-slate-400">Version</span>
                   <span className="text-white font-mono">1.0</span>
                 </div>
               </div>
            </div>
         </div>

         {/* Results */}
         <div className="xl:col-span-3 space-y-6 flex flex-col">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Batch Import Report</h2>
               
               {!imported ? (
                 <div className="h-[200px] flex items-center justify-center text-slate-600 italic">
                    Awaiting CSV ingestion...
                 </div>
               ) : (
                 <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-slate-950 p-4 rounded border border-slate-800 text-center">
                       <div className="text-3xl font-black text-white">{report.totalRecords}</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Imported</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded border border-emerald-900/50 text-center">
                       <div className="text-3xl font-black text-emerald-500">{report.accepted}</div>
                       <div className="text-xs text-emerald-700 uppercase tracking-widest mt-1">Accepted</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded border border-rose-900/50 text-center">
                       <div className="text-3xl font-black text-rose-500">{report.rejected}</div>
                       <div className="text-xs text-rose-700 uppercase tracking-widest mt-1">Rejected</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded border border-slate-800 text-center flex flex-col justify-center">
                       <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded text-xs tracking-widest uppercase">
                          Process Batch 🚀
                       </button>
                    </div>
                 </div>
               )}

               {imported && (
                 <div className="mt-6">
                   <h3 className="text-sm font-bold text-slate-300 uppercase mb-3">Validation Exceptions</h3>
                   <table className="w-full text-xs text-left">
                     <thead>
                       <tr className="border-b border-slate-800 text-slate-500">
                         <th className="py-2 w-20">Row</th>
                         <th className="py-2 w-32">Status</th>
                         <th className="py-2">Reason</th>
                       </tr>
                     </thead>
                     <tbody>
                       {report.results.filter((r: any) => !r.valid).map((res: any, idx: number) => (
                         <tr key={idx} className="border-b border-slate-800/50">
                           <td className="py-2 text-slate-300 font-mono">#{res.rowNumber}</td>
                           <td className="py-2 text-rose-500 font-bold">REJECTED</td>
                           <td className="py-2 text-rose-400">{res.error}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
