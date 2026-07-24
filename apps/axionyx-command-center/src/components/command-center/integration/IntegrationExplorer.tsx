import React from 'react';
import './IntegrationExplorer.css';

const CONNECTED_SYSTEMS = [
  { name: 'System A (Mock LIMS)', status: '🟢', type: 'Laboratory API' },
  { name: 'Agilent ICP-MS', status: '🟢', type: 'CSV Inbox' },
  { name: 'Plant MQTT Broker', status: '🟢', type: 'IoT Stream' },
  { name: 'Fleet GPS Feed', status: '🟢', type: 'Telematics' },
  { name: 'AXIONYX PostgreSQL', status: '🟢', type: 'Event Store' }
];

export const IntegrationExplorer = () => {
  return (
    <div className="integration-explorer">
      <h3>Integration Explorer</h3>
      <p className="explorer-desc">Live operational systems normalizing data into AXIONYX Observations.</p>
      
      <div className="system-list">
        {CONNECTED_SYSTEMS.map(sys => (
          <div key={sys.name} className="system-item">
            <span className="status-indicator">{sys.status}</span>
            <div className="sys-info">
              <span className="sys-name">{sys.name}</span>
              <span className="sys-type">{sys.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
