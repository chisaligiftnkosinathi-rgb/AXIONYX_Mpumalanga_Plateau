import React from 'react';
import './EvidenceExplorer.css';

export interface TraceNode {
  type: string;
  label: string;
  value: string;
  children?: TraceNode[];
}

interface ExplorerProps {
  rootNode: TraceNode;
}

export const EvidenceExplorer: React.FC<ExplorerProps> = ({ rootNode }) => {
  const renderNode = (node: TraceNode, depth: number = 0) => {
    return (
      <div className={`trace-node depth-${depth}`} key={node.label}>
        <div className="node-content">
          <span className="node-type">{node.type}</span>
          <span className="node-label">{node.label}</span>
          <span className="node-value">{node.value}</span>
        </div>
        {node.children && node.children.length > 0 && (
          <div className="node-children">
            <div className="because-connector">▼ because</div>
            {node.children.map(child => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="evidence-explorer">
      <h3>Operational Decision Trace</h3>
      <p className="explorer-desc">Navigate the cryptographically guaranteed evidence chain.</p>
      <div className="trace-tree">
        {renderNode(rootNode)}
      </div>
    </div>
  );
};
