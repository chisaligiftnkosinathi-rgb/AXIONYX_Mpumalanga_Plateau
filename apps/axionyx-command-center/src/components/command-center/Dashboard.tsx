import React, { useState, useEffect } from 'react';
import { HealthCard } from './cards/HealthCard';
import { TrustScoreCard } from './cards/TrustScoreCard';
import { PlatformHealthCard } from './cards/PlatformHealthCard';
import { InstrumentTwin } from './twin/InstrumentTwin';
import { ScenarioRunner, ScenarioType } from './twin/ScenarioRunner';
import { Timeline } from './timeline/Timeline';
import { ExplainabilityPanel } from './explainability/ExplainabilityPanel';

export function Dashboard() {
  const [instrument, setInstrument] = useState({
    id: 'ICPMS-01',
    status: 'READY' as any,
    health: 100,
    argon: 15.0,
    rfPower: 1500,
    vacuum: 0.00003,
    torchHours: 812,
    drift: 0.01,
    confidence: 1.0
  });

  const [events, setEvents] = useState<any[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Simulated SSE Connection to Projection Engine
  useEffect(() => {
    // In production, this connects to GET /live/dashboard
    console.log('[SSE] Connected to AXIONYX Projection Engine');
  }, []);

  const handleRunScenario = (scenario: ScenarioType) => {
    console.log(`[Command] Dispatching Scenario: ${scenario}`);
    // HTTP POST to API to trigger the scenario in the simulator
    if (scenario === 'DRIFT') {
      setInstrument(prev => ({ ...prev, status: 'RUNNING', drift: 0.08, health: 85, confidence: 0.85 }));
      setEvents(prev => [{
        id: `EV-${Date.now()}`,
        timestamp: new Date().toISOString(),
        title: 'Instrument Drift Detected',
        description: 'Argon Flow drift exceeded ISO 17025 tolerances.',
        type: 'OBSERVATION'
      }, ...prev]);
      
      setTimeout(() => {
        setInstrument(prev => ({ ...prev, status: 'PAUSED', confidence: 0.5 }));
        setEvents(prev => [{
          id: `EV-${Date.now()+1}`,
          timestamp: new Date().toISOString(),
          title: 'Workflow Suspended',
          description: 'Affected sample batch halted pending QC review.',
          type: 'WORKFLOW'
        }, ...prev]);
      }, 1500);
    }
  };

  const handlePublishAudit = () => {
    console.log('[Command] Generating Audit Report via Publication Engine');
    alert('Audit Report generated successfully. See Terminal for output.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8 font-sans">
      <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">AXIONYX Command Center</h1>
          <p className="text-slate-400 mt-1">Laboratory Operational Intelligence</p>
        </div>
        <button 
          onClick={handlePublishAudit}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded shadow-lg font-bold flex items-center gap-2"
        >
          <span>📑</span> Publish Audit Report
        </button>
      </header>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: Control & Platform */}
        <div className="col-span-3 space-y-6">
          <ScenarioRunner onRunScenario={handleRunScenario} onReplay={() => console.log('Replaying...')} />
          <PlatformHealthCard />
          <TrustScoreCard score={instrument.confidence} />
        </div>

        {/* Center Column: Digital Twin */}
        <div className="col-span-6 space-y-6">
          <InstrumentTwin {...instrument} />
          <div className="grid grid-cols-2 gap-6">
            <HealthCard title="Argon Supply" value={92} status="NORMAL" />
            <HealthCard title="System Vacuum" value={instrument.health} status={instrument.health < 90 ? 'WARNING' : 'NORMAL'} />
          </div>
        </div>

        {/* Right Column: Evidence & Timeline */}
        <div className="col-span-3">
          <Timeline events={events} />
        </div>
      </div>

      <ExplainabilityPanel eventId={selectedEventId} onClose={() => setSelectedEventId(null)} />
    </div>
  );
}
