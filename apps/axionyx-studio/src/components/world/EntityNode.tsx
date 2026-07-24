import React from 'react';
import { EntityView } from '../../../../packages/studio-contracts/src/entity-view';

interface EntityNodeProps {
  entity: EntityView;
  onClick: (id: string) => void;
}

export const EntityNode: React.FC<EntityNodeProps> = ({ entity, onClick }) => {
  return (
    <div 
      className={`entity-node status-${entity.currentState.statusIndicator}`}
      onClick={() => onClick(entity.id)}
      style={{
        border: '2px solid #ccc',
        borderRadius: '50%',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        background: '#1a1a1a',
        color: 'white'
      }}
    >
      <h4>{entity.name}</h4>
      <div className="state-label">{entity.currentState.label}</div>
    </div>
  );
};
