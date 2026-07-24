import React from 'react';

export function PlatformHealthCard() {
  return (
    <div className="p-4 border rounded shadow bg-slate-900 border-slate-700">
      <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-400">Platform Health</h3>
      
      <div className="space-y-3">
        <HealthMetric label="API Gateway" status="Healthy" />
        <HealthMetric label="MQTT Broker" status="Connected" />
        <HealthMetric label="Projection Engine" status="Running" />
        <HealthMetric label="Workflow Engine" status="Active" />
        
        <div className="border-t border-slate-800 pt-3 mt-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">SSE Clients</span>
            <span className="font-mono text-slate-300">3</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <span className="text-slate-500">Events/sec</span>
            <span className="font-mono text-blue-400">18</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthMetric({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-slate-300">{label}</span>
      <span className="text-xs font-mono px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded border border-emerald-800">
        {status}
      </span>
    </div>
  );
}
