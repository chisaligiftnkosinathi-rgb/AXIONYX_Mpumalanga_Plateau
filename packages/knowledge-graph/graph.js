class KnowledgeGraph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(id, type, label) {
        this.nodes.push({ id, type, label });
    }

    addEdge(sourceId, targetId, relationship) {
        this.edges.push({ source: sourceId, target: targetId, relationship });
    }

    generateSprint2Mock() {
        console.log("=========================================");
        console.log(" AXIONYX KNOWLEDGE GRAPH (A61 Sprint 2)  ");
        console.log("=========================================\n");

        this.addNode("C_001", "Reality Crystal", "Mpumalanga AMD Regeneration");
        this.addNode("E_001", "Evidence", "pH reduction measurement");
        this.addNode("X_001", "Experiment", "Bioreactor Simulation");
        this.addNode("I_001", "Institution", "University Laboratory (Pretoria)");
        this.addNode("H_001", "Human Element", "Dr. S. Mokoena");

        this.addEdge("C_001", "E_001", "SUPPORTED_BY");
        this.addEdge("E_001", "X_001", "MEASURED_VIA");
        this.addEdge("X_001", "I_001", "HOSTED_AT");
        this.addEdge("X_001", "H_001", "OBSERVED_BY");

        this.nodes.forEach(n => console.log(`[${n.type.toUpperCase()}] ${n.id}: ${n.label}`));
        console.log("\nRELATIONSHIPS:");
        this.edges.forEach(e => console.log(` -> ${e.source} [${e.relationship}] ${e.target}`));
        
        console.log("\n✅ The first living AXIONYX graph is online.");
    }
}

const graph = new KnowledgeGraph();
graph.generateSprint2Mock();
