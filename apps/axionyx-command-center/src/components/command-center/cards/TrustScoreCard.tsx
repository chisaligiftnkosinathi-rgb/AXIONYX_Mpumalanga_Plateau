import React from 'react';

interface TrustScoreCardProps {
  score: number; // 0.0 to 1.0
}

export function TrustScoreCard({ score }: TrustScoreCardProps) {
  const percentage = (score * 100).toFixed(1);
  const isHighTrust = score >= 0.95;

  return (
    <div className={`p-6 border rounded shadow-lg ${isHighTrust ? 'bg-indigo-900/40 border-indigo-500/50' : 'bg-red-900/40 border-red-500/50'}`}>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">AXIONYX Systemic Trust</span>
        <span className={`text-6xl font-bold font-mono ${isHighTrust ? 'text-indigo-400' : 'text-red-400'}`}>
          {percentage}%
        </span>
        <span className="text-sm text-slate-500 mt-4 text-center max-w-xs">
          Cryptographically backed operational confidence score derived from immutable evidence chains.
        </span>
      </div>
    </div>
  );
}
