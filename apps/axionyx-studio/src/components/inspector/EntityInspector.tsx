import React from 'react';
import { EntityView } from '../../../../packages/studio-contracts/src/entity-view';
import { PrincipleView } from '../../../../packages/studio-contracts/src/principle-view';

interface EntityInspectorProps {
  entity: EntityView | null;
  principles: PrincipleView[];
  onClose: () => void;
}

export const EntityInspector: React.FC<EntityInspectorProps> = ({ entity, principles, onClose }) => {
  if (!entity) return null;

  return (
    <div className="inspector-panel" style={{ width: '300px', background: '#222', color: 'white', padding: '20px', position: 'absolute', right: 0, top: 0, height: '100%' }}>
      <button onClick={onClose} style={{ float: 'right' }}>X</button>
      <h2>{entity.name} Inspector</h2>
      
      <div className="state-section">
        <h3>Current State:</h3>
        <p>{entity.currentState.label} ({entity.currentState.statusIndicator})</p>
        <ul>
          {Object.entries(entity.currentState.metrics).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value as React.ReactNode}</li>
          ))}
        </ul>
      </div>

      <div className="principles-section">
        <h3>Learned Principles:</h3>
        <ul>
          {principles.map(p => (
            <li key={p.id}>✓ {p.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
