import React from 'react';
import { FlowView } from '../../../../packages/studio-contracts/src/flow-view';

interface RelationshipEdgeProps {
  flow: FlowView;
}

export const RelationshipEdge: React.FC<RelationshipEdgeProps> = ({ flow }) => {
  return (
    <div className={`flow-edge ${flow.isAnimated ? 'animated' : ''}`}>
      <span>{flow.label}</span>
      {/* In a real implementation using ReactFlow/Three.js, this would render an svg path or WebGL line */}
    </div>
  );
};
