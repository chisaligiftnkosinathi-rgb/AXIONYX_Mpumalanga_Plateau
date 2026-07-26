class IdentityEngine {
    constructor() {
        this.profiles = new Map();
    }

    registerInstitution(id, name, type) {
        this.profiles.set(id, { id, name, type: 'INSTITUTION', role: type });
        console.log(`[IDENTITY] Registered Institution: ${name}`);
    }

    registerPerson(id, name, role, institutionId, capabilities) {
        this.profiles.set(id, {
            id, name, type: 'PERSON', role, institutionId, capabilities, contributions: 0
        });
        console.log(`[IDENTITY] Registered Person: ${name} (${role})`);
    }

    validateSubmission(submitterId, reviewerId) {
        if (submitterId === reviewerId) {
            throw new Error("Conflict of Interest: Submitter cannot be the Reviewer.");
        }
        console.log(`[IDENTITY] Provenance Validation Passed: Independent verification confirmed.`);
        return true;
    }

    generateSprint3Mock() {
        console.log("=========================================");
        console.log(" AXIONYX IDENTITY ENGINE (A61 Sprint 3)  ");
        console.log("=========================================\n");

        this.registerInstitution("INST_001", "University Laboratory (Pretoria)", "University");
        this.registerInstitution("INST_002", "Mining Partner Corp", "Industry");
        this.registerInstitution("INST_003", "AXIONYX Global Guardian", "Guardian");
        this.registerInstitution("INST_004", "Mpumalanga Community Council", "Community");

        this.registerPerson("PERS_001", "Dr. S. Mokoena", "Evidence Validator", "INST_001", ["Biochemistry"]);
        this.registerPerson("PERS_002", "Eng. J. Venter", "Field Data Provider", "INST_002", ["Hydrology"]);

        console.log("\nTesting Provenance Separation Rule:");
        try {
            this.validateSubmission("PERS_001", "PERS_001");
        } catch (e) {
            console.log(`[BLOCKED] ${e.message}`);
        }
        
        this.validateSubmission("PERS_002", "PERS_001");

        console.log("\n✅ Human Provenance layer online.");
    }
}

const engine = new IdentityEngine();
engine.generateSprint3Mock();
