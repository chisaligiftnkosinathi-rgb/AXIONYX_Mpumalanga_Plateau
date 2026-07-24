import React, { useState, useEffect } from 'react';
import { PlatformHealthCard } from './cards/PlatformHealthCard';
import { InstrumentTwin } from './twin/InstrumentTwin';
import { TimelineEvent } from './timeline/TimelineEvent';
import { ExplainabilityPanel } from './explainability/ExplainabilityPanel';
import './Dashboard.css';

export const MissionControlDashboard = () => {
  const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    // Connect to the Fastify SSE Projection Engine endpoint
    const evtSource = new EventSource('http://localhost:3000/live/dashboard');
    evtSource.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === 'TIMELINE_UPDATE') {
        setTimelineEvents(prev => [data.event, ...prev]);
      }
    };
    return () => evtSource.close();
  }, []);

  return (
    <div className="mission-control">
      <header className="mission-control-header">
        <h1>AXIONYX Mission Control</h1>
        <div className="kpi-bar">
          <div className="kpi">Trust Score: <strong>98%</strong></div>
          <div className="kpi">Active Samples: <strong>4</strong></div>
          <div className="kpi">Instruments: <strong>2</strong></div>
          <div className="kpi policy-ok">Policy: <strong>100% OK</strong></div>
        </div>
      </header>

      <main className="mission-control-grid">
        {/* Left/Center Module: The Digital Twin */}
        <section className="digital-twin-module">
          <h2>Living Laboratory Twin</h2>
          <div className="instruments-grid">
            <InstrumentTwin id="ICP-MS-01" status="RUNNING" analyte="Pb" />
            <InstrumentTwin id="Balance-A" status="IDLE" analyte="N/A" />
          </div>
          
          <div className="workflow-queue">
            <h3>Active Sample Lifecycle: S-001</h3>
            <div className="lifecycle-track">
              <span className="step complete">Registered ✓</span>
              <span className="step complete">Received ✓</span>
              <span className="step active">Analyzed (Live)</span>
              <span className="step pending">Policy Check</span>
              <span className="step pending">Approved</span>
            </div>
          </div>
        </section>

        {/* Right Module: The Evidence Timeline */}
        <section className="evidence-timeline-module">
          <h2>Evidence Timeline</h2>
          <div className="timeline-stream">
            {timelineEvents.map((evt, idx) => (
              <TimelineEvent 
                key={idx} 
                event={evt} 
                onClick={() => setSelectedEvent(evt)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* The Traceable Knowledge Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <ExplainabilityPanel event={selectedEvent} />
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
