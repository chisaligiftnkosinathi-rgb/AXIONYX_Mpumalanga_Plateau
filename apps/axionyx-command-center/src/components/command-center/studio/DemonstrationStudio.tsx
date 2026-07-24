import React, { useState } from 'react';
import './DemonstrationStudio.css';

export const DemonstrationStudio = () => {
  const [selectedDemo, setSelectedDemo] = useState('Laboratory Drift');
  const [audience, setAudience] = useState('Executive');

  return (
    <div className="demonstration-studio">
      <h2>AXIONYX Experience Studio</h2>
      <p className="studio-desc">Assemble tailored operational intelligence presentations via the Knowledge Graph.</p>
      
      <div className="kg-selector">
        <select value={selectedDemo} onChange={e => setSelectedDemo(e.target.value)}>
          <option>Mining → ICP-MS → Turnaround Delays</option>
          <option>Fleet → GPS → Route Deviation</option>
          <option>Laboratory → GC-MS → Compliance Failure</option>
        </select>
        <select value={audience} onChange={e => setAudience(e.target.value)}>
          <option>Executive</option>
          <option>Auditor</option>
          <option>Operations Manager</option>
        </select>
        <button className="assemble-btn">Auto-Assemble Studio</button>
      </div>

      <div className="five-pillars">
        <div className="pillar">
          <h4>1. Observe</h4>
          <ul>
            <li>LIMS (System A)</li>
            <li>SCADA API</li>
            <li>CSV Inbox</li>
          </ul>
        </div>
        
        <div className="pillar">
          <h4>2. Understand</h4>
          <ul>
            <li>Mission Control</li>
            <li>Digital Twin</li>
            <li>Before vs After KPIs</li>
          </ul>
        </div>
        
        <div className="pillar">
          <h4>3. Decide</h4>
          <ul>
            <li>Policy Engine</li>
            <li>Workflow Engine</li>
            <li>Evidence Explorer (Explainability)</li>
          </ul>
        </div>

        <div className="pillar">
          <h4>4. Publish</h4>
          <ul>
            <li>Executive PDF Report</li>
            <li>Audit Summary</li>
            <li>Academy Lesson</li>
          </ul>
        </div>

        <div className="pillar">
          <h4>5. Create</h4>
          <ul>
            <li>AI Marketing Video (Runway)</li>
            <li>AI Presenter (HeyGen)</li>
            <li>LinkedIn Post</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
