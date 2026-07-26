import { IntentRouter } from './IntentRouter';
import { CapabilityResolver } from './CapabilityResolver';
import { EvidenceConnector } from './EvidenceConnector';
import { OpportunityPublisher } from './OpportunityPublisher';
import { NodeHealth } from './NodeHealth';

export class NodeExecutor {
    private router = new IntentRouter();
    private resolver = new CapabilityResolver();
    private evidence = new EvidenceConnector();
    private publisher = new OpportunityPublisher();

    public execute(signal: any): void {
        console.log(`\n--- Node Executor Triggered ---`);
        
        // 1. Intent Understanding
        const intent = this.router.route(signal);
        
        // 2. Capability Search
        const capability = this.resolver.resolve(intent);
        
        // 3. Evidence Validation
        const validatedOpportunity = this.evidence.validate({ intent, capability });
        
        // 4. Opportunity Crystal (Publishing to Graph)
        this.publisher.publish(validatedOpportunity);

        // 5. Emit Health
        NodeHealth.emit({
            node: intent.targetNode,
            heartbeat: new Date().toISOString(),
            signals_processed: 1,
            opportunities_created: 1,
            evidence_quality: validatedOpportunity.evidence.qualityScore
        });
        
        console.log(`-------------------------------\n`);
    }
}
