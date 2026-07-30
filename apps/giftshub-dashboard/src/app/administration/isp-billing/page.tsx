"use client";
import React, { useState, useEffect } from 'react';

// We can mock fetching from the backend by defining the mock data directly here for the UI 
// (In production, this would hit an API endpoint that queries `EntityRegistry.getAllEntities()`)
const mockProvider = {
  entityId: 'isp_root_01',
  role: 'PROVIDER',
  legalName: 'Global IT and Business Solutions Pty Ltd',
  registrationNumber: '2021/999569/07',
  bankingDetails: {
    bankName: 'Mercantile Bank',
    branchName: 'Witbank',
    branchCode: '450105',
    accountName: 'Global IT and Business Solutions Pty Ltd',
    accountNumber: '1051030382',
    swiftAddress: 'CABLZAJJ'
  }
};

const mockClients = [
  {
    entityId: 'client_001',
    role: 'CLIENT',
    legalName: 'Acme Logistics South Africa',
    registrationNumber: '2019/123456/07',
    serviceMethod: 'ISP_5G_ROUTER',
    status: 'ACTIVE'
  },
  {
    entityId: 'client_002',
    role: 'CLIENT',
    legalName: 'Carolina Coal Processing',
    registrationNumber: '2015/654321/07',
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'client_003',
    role: 'CLIENT',
    legalName: 'Mpumalanga Rural Ops',
    registrationNumber: '2022/987654/07',
    serviceMethod: 'ISP_WIRELESS',
    status: 'PENDING_INSTALLATION'
  }
];

export default function IspBillingPage() {
  const [provider, setProvider] = useState<any>(mockProvider);
  const [clients, setClients] = useState<any[]>(mockClients);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 flex flex-col">
      <header className="border-b border-slate-800 pb-4 mb-6 flex justify-between items-end">
         <div>
           <div className="text-sm font-bold text-sky-500 tracking-[0.3em] uppercase mb-2">Administration</div>
           <h1 className="text-3xl font-black text-white">💼 ISP Operations & Billing</h1>
           <p className="text-slate-400 mt-2">Manage provider identities and registered client service methods</p>
         </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         {/* Provider Panel */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 px-3 py-1 bg-sky-900/50 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">ROOT PROVIDER</div>
               <h2 className="text-lg font-bold text-white mb-6">Service Provider Profile</h2>
               
               <div className="space-y-4">
                 <div>
                   <label className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Legal Entity</label>
                   <div className="text-sm font-medium text-white">{provider.legalName}</div>
                 </div>
                 <div>
                   <label className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Registration</label>
                   <div className="text-sm font-mono text-slate-300">{provider.registrationNumber}</div>
                 </div>
                 
                 <div className="mt-6 pt-4 border-t border-slate-800">
                   <h3 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                     </svg>
                     Verified Banking Details
                   </h3>
                   <div className="space-y-2 text-sm bg-slate-950 p-4 rounded border border-slate-800">
                     <div className="flex justify-between">
                       <span className="text-slate-500">Bank</span>
                       <span className="text-white font-medium">{provider.bankingDetails.bankName}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Branch</span>
                       <span className="text-white">{provider.bankingDetails.branchName} ({provider.bankingDetails.branchCode})</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Account</span>
                       <span className="text-white font-mono">{provider.bankingDetails.accountNumber}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">SWIFT</span>
                       <span className="text-white font-mono">{provider.bankingDetails.swiftAddress}</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
         </div>

         {/* Client Registry Panel */}
         <div className="xl:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg h-full">
               <h2 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                 <span>Registered Clients ({clients.length})</span>
                 <button className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-4 py-2 rounded uppercase tracking-widest font-bold transition-colors">
                   + Register Client
                 </button>
               </h2>
               
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-slate-800 text-xs uppercase tracking-widest text-slate-500">
                       <th className="py-3 px-4 font-normal">Business Name</th>
                       <th className="py-3 px-4 font-normal">Registration</th>
                       <th className="py-3 px-4 font-normal">Service Method</th>
                       <th className="py-3 px-4 font-normal">Status</th>
                     </tr>
                   </thead>
                   <tbody className="text-sm divide-y divide-slate-800/50">
                     {clients.map(client => (
                       <tr key={client.entityId} className="hover:bg-slate-800/30 transition-colors">
                         <td className="py-4 px-4 font-medium text-white">{client.legalName}</td>
                         <td className="py-4 px-4 font-mono text-slate-400">{client.registrationNumber}</td>
                         <td className="py-4 px-4">
                           <span className="bg-slate-950 border border-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                             {client.serviceMethod.replace('ISP_', '')}
                           </span>
                         </td>
                         <td className="py-4 px-4">
                           <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                             client.status === 'ACTIVE' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-amber-900/50 text-amber-400'
                           }`}>
                             {client.status}
                           </span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
