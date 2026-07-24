import React from 'react';
import { PrincipleView } from '../../../../packages/studio-contracts/src/principle-view';

interface PrincipleCardProps {
  principle: PrincipleView;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle }) => {
  return (
    <div className="principle-card" style={{ border: '1px solid #ffd700', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <h3 style={{ color: '#ffd700' }}>✓ {principle.name}</h3>
      <p>Confidence: {(principle.confidence * 100).toFixed(1)}%</p>
      
      <div className="domains">
        <strong>Applies to:</strong>
        <ul>
          {principle.domains.map(d => <li key={d}>{d}</li>)}
        </ul>
      </div>
      
      <div className="evidence">
        <strong>Evidence:</strong>
        <ul>
          {principle.evidence.map(ev => (
            <li key={ev.id} className="evidence-link">
              <a href={`#sim-${ev.simulationRunId}`}>{ev.description}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
