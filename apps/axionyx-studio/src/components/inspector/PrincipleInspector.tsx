import React from 'react';
import { PrincipleView } from '../../../../packages/studio-contracts/src/principle-view';

interface PrincipleInspectorProps {
  principle: PrincipleView | null;
  onClose: () => void;
}

export const PrincipleInspector: React.FC<PrincipleInspectorProps> = ({ principle, onClose }) => {
  if (!principle) return null;

  return (
    <div className="inspector-panel" style={{ width: '300px', background: '#2a2211', color: 'white', padding: '20px', position: 'absolute', right: 0, top: 0, height: '100%' }}>
      <button onClick={onClose} style={{ float: 'right' }}>X</button>
      <h2 style={{ color: '#ffd700' }}>{principle.name}</h2>
      
      <div className="evidence-section">
        <h3>Evidence Map:</h3>
        <ul>
          {principle.evidence.map(ev => (
            <li key={ev.id} style={{ marginBottom: '10px' }}>
              <strong>{ev.description}</strong>
              <div style={{ fontSize: '0.8em', color: '#aaa' }}>
                Contribution: {(ev.confidenceContribution * 100).toFixed(1)}% <br/>
                <a href={`#sim-${ev.simulationRunId}`} style={{ color: '#5dade2' }}>View Observation -></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
