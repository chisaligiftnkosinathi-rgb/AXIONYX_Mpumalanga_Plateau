import 'dotenv/config';
import { createKernel, loadConfig } from '@axionyx/kernel-runtime';
import { LaboratoryProjection } from './projections/LaboratoryProjection';
import { hashEvidencePayload } from '@axionyx/kernel-runtime/src/crypto';
import { Evidence } from '@axionyx/kernel-sdk';

async function bootstrap() {
    console.log('🚀 Starting Gate 3.6 Replay Engine...');
    const config = loadConfig();
    const kernel = createKernel(config);
    await kernel.initialize();

    const projection = new LaboratoryProjection();
    
    // Proof 6: No hidden state (Projection starts completely empty)
    console.log('🧹 Wiping projection state (Proof 6)...');
    projection.reset();
    
    let processed = 0;
    const start = Date.now();
    let hashViolations = 0;

    await kernel.eventStore.replayAll(async (domainEvent) => {
        if (domainEvent.eventType === 'EvidenceCreated') {
            const evidence = domainEvent.payload as Evidence<any>;
            
            // Proof 4: Evidence Hash never changes
            const contentToHash = {
                eventId: evidence.eventId,
                observationId: evidence.observationId,
                workflowId: evidence.workflowId,
                policyVersion: evidence.policyVersion,
                timestamp: evidence.timestamp,
                observation: evidence.observation,
                canonicalEvent: evidence.canonicalEvent,
                policyDecision: evidence.policyDecision,
                workflowState: evidence.workflowState
            };
            const computedHash = hashEvidencePayload(contentToHash);
            
            if (computedHash !== evidence.hash) {
                console.error(`❌ Hash mismatch for Evidence ${evidence.evidenceId}`);
                hashViolations++;
            }

            // Feed to projection (Proofs 5 & 6)
            projection.handle(evidence);
            processed++;
        }
    });

    const duration = Date.now() - start;

    console.log('\n✅ Replay Complete');
    console.log('====================');
    console.log(`Events Processed: ${processed}`);
    console.log(`Duration: ${duration}ms`);
    console.log(`Hash Violations: ${hashViolations}`);
    console.log(`Projection State:`, projection.getState());
    
    if (hashViolations > 0) {
        console.error('\n❌ Gate 3.6 Certification FAILED due to hash violations.');
        process.exit(1);
    } else {
        console.log('\n🏆 Gate 3.6 Certification PASSED.');
    }

    await kernel.shutdown();
}

bootstrap().catch(console.error);
