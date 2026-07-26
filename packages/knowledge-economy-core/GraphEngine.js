const fs = require('fs');

class GraphEngine {
    constructor() {
        this.nodes = new Map();
        this.edges = [];
    }

    publishNode(id, type, name, domain, metadata = {}) {
        const node = { id, type, name, domain, metadata };
        this.nodes.set(id, node);
        console.log(`[GRAPH] Node Published: [${type}] ${name}`);
        return node;
    }

    linkNodes(sourceId, targetId, type, evidence, confidence) {
        if (!this.nodes.has(sourceId) || !this.nodes.has(targetId)) {
            throw new Error('Graph linkage failed: Node does not exist.');
        }
        if (!evidence) {
            throw new Error('AXIONYX DOCTRINE: Relationships require explicit evidence provenance.');
        }

        const edge = { sourceId, targetId, type, evidence, confidence };
        this.edges.push(edge);
        console.log(`[GRAPH] Link Forged: ${sourceId} --[${type}]--> ${targetId}`);
        return edge;
    }

    discoverEcosystem() {
        // Returns the JSON artifact of the graph
        return {
            totalNodes: this.nodes.size,
            totalRelationships: this.edges.length,
            nodes: Array.from(this.nodes.values()),
            edges: this.edges
        };
    }

    generateMermaid(filepath) {
        let md = '```mermaid\ngraph TD\n\n';
        
        // Output Nodes
        for (const [id, node] of this.nodes) {
            md += `    ${id}["${node.name}"]\n`;
        }
        md += '\n';

        // Output Edges
        for (const edge of this.edges) {
            md += `    ${edge.sourceId} -- "${edge.type}" --> ${edge.targetId}\n`;
        }

        md += '```\n';
        
        fs.writeFileSync(filepath, md);
        console.log(`[GRAPH] Mermaid Markdown generated at ${filepath}`);
    }
}

module.exports = new GraphEngine();
