import React from 'react';

export default function DealerCommand() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-extrabold text-blue-400">OMARS MOTORDEN</h1>
        <p className="text-gray-400">Global Mobility Observatory | eMalahleni</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-gray-800 p-6 rounded border border-gray-700 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-xs px-2 py-1 font-bold rounded-bl">LIVE MARKET SIGNALS</div>
          <h2 className="text-xl font-bold mb-6 text-emerald-400 border-b border-gray-700 pb-2">GLOBAL QUANTUM DEMAND (Today)</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between"><span>🇿🇦 Mpumalanga</span><span>47 potential buyers</span></div>
              <div className="w-full bg-gray-700 h-2 mt-1"><div className="bg-emerald-500 h-2 w-[47%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between"><span>🇧🇼 Botswana</span><span>12 potential buyers</span></div>
              <div className="w-full bg-gray-700 h-2 mt-1"><div className="bg-emerald-500 h-2 w-[12%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between"><span>🇿🇲 Zambia</span><span>18 potential buyers</span></div>
              <div className="w-full bg-gray-700 h-2 mt-1"><div className="bg-emerald-500 h-2 w-[18%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between"><span>🇺🇸 USA</span><span>5 collector inquiries</span></div>
              <div className="w-full bg-gray-700 h-2 mt-1"><div className="bg-emerald-500 h-2 w-[5%]"></div></div>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-gray-700 mt-4">
            <h3 className="text-sm text-gray-500 uppercase">Most Requested</h3>
            <p className="text-xl text-white font-bold">Toyota Quantum 2.8 GD-6</p>
            <p className="text-emerald-400 mt-1">Main reason: Business income generation</p>
          </div>
        </section>

        <section className="bg-gray-800 p-6 rounded border border-purple-900 shadow-lg relative">
          <h2 className="text-xl font-bold mb-4 text-purple-400">Quantum Economic Calculator</h2>
          <p className="text-gray-300 mb-6">Transform customer perspective from expense to investment.</p>
          <a href="/roi-calculator" className="inline-block w-full text-center px-6 py-4 bg-purple-700 hover:bg-purple-600 text-white rounded font-bold transition-colors">
            Launch ROI Simulation Calculator
          </a>
        </section>
      </div>
    </div>
  );
}
