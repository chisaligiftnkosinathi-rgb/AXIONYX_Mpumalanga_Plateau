import React from 'react';

export default function CustomerReplay() {
  return (
    <div className="p-8 bg-black text-green-400 font-mono min-h-screen">
      <h1 className="text-2xl mb-8">CUSTOMER JOURNEY REPLAY #00001</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-white">Origin:</h2>
          <p>🇺🇸 United States</p>
        </div>
        <div>
          <h2 className="text-white">Customer Intent:</h2>
          <p>"I want a rare South African vehicle"</p>
        </div>
        <div className="text-center">↓</div>
        <div>
          <h2 className="text-white">AI Understanding:</h2>
          <ul className="list-none">
            <li>Purpose: Collector Vehicle</li>
            <li>Budget: Premium</li>
            <li>Interest: Automotive Heritage</li>
          </ul>
        </div>
        <div className="text-center">↓</div>
        <div>
          <h2 className="text-white">Matched:</h2>
          <p>OMARS VEHICLE INVENTORY</p>
        </div>
        <div className="text-center">↓</div>
        <div className="p-4 border border-green-400">
          <h2 className="text-white">Opportunity Created</h2>
          <p>Status: QUALIFIED BUYER</p>
        </div>
      </div>
    </div>
  );
}
