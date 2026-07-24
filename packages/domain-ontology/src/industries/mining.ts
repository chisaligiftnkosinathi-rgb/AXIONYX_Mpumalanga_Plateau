// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/domain-ontology/src/industries/mining.ts

export const MiningOntology = {
  domain: "Mining",
  concepts: [
    "Ore",
    "Mineral",
    "GeologicalLayer",
    "Sample",
    "Process",
    "Machine",
    "Crusher",
    "Conveyor",
    "Stockpile"
  ],
  relationships: [
    { from: "Machine", to: "Ore", type: "Extracts" },
    { from: "Process", to: "Mineral", type: "Refines" },
    { from: "Sample", to: "Ore", type: "Analyzes" }
  ]
};
