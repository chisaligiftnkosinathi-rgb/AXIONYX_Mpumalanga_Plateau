import React from 'react';
import { WorldView } from '../../../../packages/studio-contracts/src/world-view';
import { EntityNode } from './EntityNode';
import { RelationshipEdge } from './RelationshipEdge';

interface WorldCanvasProps {
  worldData: WorldView;
  onNodeClick: (id: string) => void;
}

export const WorldCanvas: React.FC<WorldCanvasProps> = ({ worldData, onNodeClick }) => {
  return (
    <div className="world-canvas" style={{ position: 'relative', width: '100%', height: '600px', background: '#0a0a0a' }}>
      {/* Mock rendering loop */}
      {worldData.flows.map(flow => (
        <RelationshipEdge key={flow.id} flow={flow} />
      ))}
      
      {worldData.entities.map(entity => (
        <EntityNode key={entity.id} entity={entity} onClick={onNodeClick} />
      ))}
    </div>
  );
};
