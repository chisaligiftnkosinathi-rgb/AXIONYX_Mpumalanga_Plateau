import React from 'react';
import { KnowledgeView } from '../../../../packages/studio-contracts/src/knowledge-view';
import { PrincipleCard } from './PrincipleCard';

interface KnowledgeGraphProps {
  knowledge: KnowledgeView;
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ knowledge }) => {
  return (
    <div className="knowledge-graph-container" style={{ padding: '20px', background: '#111', color: '#eee' }}>
      <h2>Knowledge Observatory: {knowledge.domainId}</h2>
      <div className="principles-grid" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {knowledge.principles.map(principle => (
          <PrincipleCard key={principle.id} principle={principle} />
        ))}
      </div>
    </div>
  );
};
