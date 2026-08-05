import 'dotenv/config';
import { createKernel, loadConfig } from '@axionyx/kernel-runtime';
import fastify from 'fastify';
import { ObservationAdapter } from './adapters/ObservationAdapter';
import { hashEvidencePayload } from '@axionyx/kernel-runtime/src/crypto';
import { LaboratoryProjection } from './projections/LaboratoryProjection';
import { randomUUID } from 'crypto';
export async function buildApp() {
    console.log('🚀 Booting AXIONYX Reference Laboratory v1.0...');
    // 1. Load Configuration
    const config = loadConfig();
    console.log('✓ Configuration loaded');
    // 2. Instantiate Kernel
    const kernel = createKernel(config);
    await kernel.initialize();
    // 3. Create Fastify Server
    const app = fastify({ logger: true });
    app.get('/health', async (request, reply) => {
        return {
            status: 'healthy',
            ...kernel.getStatus(),
            timestamp: new Date().toISOString()
        };
    });
    app.get('/ready', async (request, reply) => {
        const status = kernel.getStatus();
        if (status.eventStore === 'memory' && process.env.DATABASE_URL) {
            // Degraded state: database configured but not connected
            reply.status(503).send({ status: 'degraded', reason: 'Database connection unavailable' });
            return;
        }
        return { status: 'ready', ...status };
    });
    app.get('/runtime/about', async (request, reply) => {
        return {
            kernelVersion: '1.0.0',
            specification: '1.0.0',
            certificationLevel: 'Gate 3.4',
            profile: config.profile,
            providers: {
                eventBus: kernel.getStatus().eventBus,
                eventStore: kernel.getStatus().eventStore,
                workflow: 'default',
                policyEngine: 'iso17025'
            }
        };
    });
    const observationAdapter = new ObservationAdapter();
    const laboratoryProjection = new LaboratoryProjection();
    app.post('/api/evidence', async (request, reply) => {
        // 1. Receive Observation
        const observation = request.body;
        // 2. Observation Adapter (produces CanonicalEvent)
        const canonicalEvent = observationAdapter.translate(observation);
        // 3. Workflow (manages state transition)
        // Stubbing workflow for now until XState is fully wired
        const workflowState = 'Processing';
        // 4. Policy Engine
        // In a real implementation this evaluates canonicalEvent.payload
        // We stub the outcome for the pipeline test
        const policyDecision = {
            policyId: 'ISO17025',
            policyVersion: '1.0',
            outcome: 'Accepted',
            findings: [],
            evaluatedAt: new Date().toISOString()
        };
        const eventId = canonicalEvent.eventId;
        const evidenceId = `evd-${randomUUID()}`;
        const timestamp = new Date().toISOString();
        // Hash before assembly
        const contentToHash = {
            eventId,
            observationId: observation.id,
            workflowId: 'default',
            policyVersion: policyDecision.policyVersion,
            timestamp,
            observation,
            canonicalEvent,
            policyDecision,
            workflowState
        };
        const hash = hashEvidencePayload(contentToHash);
        // 5. Evidence Ledger
        const evidence = {
            evidenceId,
            eventId,
            observationId: observation.id,
            workflowId: 'default',
            policyVersion: policyDecision.policyVersion,
            timestamp,
            hash,
            observation,
            canonicalEvent,
            policyDecision,
            workflowState,
        };
        // Persist to kernel.eventStore
        if (kernel.eventStore) {
            await kernel.eventStore.append({
                eventId: randomUUID(),
                eventType: 'EvidenceCreated',
                aggregateId: evidence.evidenceId,
                payload: evidence,
                emittedAt: new Date()
            });
        }
        // Update Projection
        laboratoryProjection.handle(evidence);
        // Publish to event bus
        if (kernel.eventBus) {
            await kernel.eventBus.publish({
                eventId: randomUUID(),
                eventType: 'EvidenceCreated',
                aggregateId: evidence.evidenceId,
                payload: evidence,
                emittedAt: new Date()
            });
        }
        // 7. HTTP Response
        return reply.status(200).send({
            accepted: policyDecision.outcome === 'Accepted',
            eventId: canonicalEvent.eventId,
            evidenceId: evidence.evidenceId,
            policy: policyDecision.policyId,
            status: policyDecision.outcome,
            hash: evidence.hash,
            fullEvidenceRecord: evidence
        });
    });
    app.post('/api/replay', async (request, reply) => {
        console.log('🧹 Wiping projection state (Proof 6)...');
        laboratoryProjection.reset();
        let processed = 0;
        const start = Date.now();
        let hashViolations = 0;
        await kernel.eventStore.replayAll(async (domainEvent) => {
            if (domainEvent.eventType === 'EvidenceCreated') {
                const evidence = domainEvent.payload;
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
                laboratoryProjection.handle(evidence);
                processed++;
            }
        });
        const duration = Date.now() - start;
        return reply.status(200).send({
            success: hashViolations === 0,
            eventsProcessed: processed,
            duration,
            hashViolations,
            projectionState: laboratoryProjection.getState()
        });
    });
    console.log('✓ Fastify created');
    return app;
}
