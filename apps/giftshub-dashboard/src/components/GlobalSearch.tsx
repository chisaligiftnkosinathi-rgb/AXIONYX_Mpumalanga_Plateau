"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    // Identifier Resolver -> Entity Resolver -> Workspace Router
    const lower = query.toLowerCase();
    
    if (lower.startsWith('obs-')) {
      router.push('/laboratory/evidence?id=' + query);
    } else if (lower.startsWith('batch_')) {
      router.push('/laboratory/batch-processor?id=' + query);
    } else if (lower.startsWith('corr-') || query.length > 20) {
      // Guid / Correlation
      router.push('/engineering/tracing?id=' + query);
    } else if (lower.startsWith('c-')) {
      // Sample ID
      router.push('/laboratory/chain-of-custody?id=' + query);
    } else if (lower.startsWith('dec-')) {
      router.push('/decision-support/decisions?id=' + query);
    } else {
      // Generic search results page
      router.push('/search?q=' + query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-xl">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">🔍</span>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Sample ID, Observation, Correlation, Batch..." 
          className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:border-fuchsia-500"
        />
      </div>
    </form>
  );
}
