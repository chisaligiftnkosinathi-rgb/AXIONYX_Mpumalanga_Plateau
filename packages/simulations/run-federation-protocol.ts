import { HPLCRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { InstrumentProfile, EvidencePacket } from '../knowledge-graph-engine/src/schemas/federation.schema';
import { KnowledgeNode, KnowledgeEdge } from '../knowledge-graph-engine/src/schemas/engine.schema';

import { saPack } from '../pack-south-africa/src/index';
import { statssaPack } from '../pack-statssa/src/index';

async function runFederationProtocol() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: EVIDENCE FEDERATION PROTOCOL (EFP)');
  console.log(' Simulating EFP Handshake and Counter-Evidence Merging');
  console.log('===========================================================');

  // --- 1. Boot up Province Instrument (Mpumalanga) ---
  const province = new HPLCRuntime();
  province.loadPack(saPack);
  
  const provinceProfile: InstrumentProfile = {
    id: 'mpumalanga-hplc',
    runtimeVersion: '1.5.0',
    schemaVersion: 'CSL-1.0',
    capabilities: {
      exports: { 'provincial-roads': { domain: 'provincial-roads', version: '1.0', authority: 'mpumalanga-hplc' } },
      imports: { 'local-measurements': { domain: 'local-measurements', version: '1.0', authority: 'any' } }
    },
    health: { calibration: 1.0, qualification: 1.0, validation: 1.0, health: 1.0, drift: 0, diagnostics: [], readyForExecution: true }
  };
  
  province.setProfile(provinceProfile);
  province.compile(); // Boot

  // Insert authoritative node owned by Province
  (province.graph as any).addNode({
    id: 'road-n4',
    type: 'Asset',
    name: 'N4 Highway Segment',
    description: 'Provincial Road',
    temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null },
    authority: 'mpumalanga-hplc',
    metadata: { status: 'GOOD' }
  });

  // --- 2. Boot up Municipal Instrument (eMalahleni) ---
  const municipality = new HPLCRuntime();
  municipality.loadPack(saPack);

  const municipalityProfile: InstrumentProfile = {
    id: 'emalahleni-hplc',
    runtimeVersion: '1.5.0',
    schemaVersion: 'CSL-1.0',
    capabilities: {
      exports: { 'local-measurements': { domain: 'local-measurements', version: '1.0', authority: 'emalahleni-hplc' } },
      imports: { 'provincial-roads': { domain: 'provincial-roads', version: '1.0', authority: 'mpumalanga-hplc' } }
    },
    health: { calibration: 1.0, qualification: 1.0, validation: 1.0, health: 1.0, drift: 0, diagnostics: [], readyForExecution: true }
  };

  municipality.setProfile(municipalityProfile);
  municipality.compile();

  // Load imported node into municipality (representing a prior sync)
  (municipality.graph as any).addNode({
    id: 'road-n4',
    type: 'Asset',
    name: 'N4 Highway Segment',
    description: 'Provincial Road',
    temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null },
    authority: 'mpumalanga-hplc',
    metadata: { status: 'GOOD' }
  });

  console.log('\n[1] EFP NEGOTIATION (Handshake)');
  const negotiation = province.federationEngine!.handleHandshake(municipalityProfile);
  console.log(`  Municipality Handshake Accepted: ${negotiation.accepted}`);
  if (negotiation.accepted) {
    console.log(`  Agreed Capabilities Exchange: ${negotiation.agreedCapabilities.join(', ')}`);
  }

  console.log('\n[2] LOCAL OBSERVATION (Municipality detects road failure)');
  // The municipality wants to say the road is FAILED, but it does NOT own the node.
  // It generates an EvidencePacket reporting its view of the asset.
  const modifiedNode: KnowledgeNode = {
    id: 'road-n4',
    type: 'Asset',
    name: 'N4 Highway Segment',
    description: 'Provincial Road',
    temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null },
    authority: 'mpumalanga-hplc', // It knows who owns it
    metadata: { status: 'FAILED' } // The mutated data
  };

  const packet: EvidencePacket = {
    header: {
      id: 'pkt-1234',
      timestamp: new Date().toISOString(),
      schemaVersion: 'CSL-1.0',
      instrumentId: 'emalahleni-hplc'
    },
    status: 'CREATED',
    instrument: municipalityProfile,
    trust: { signature: '0xabc123', certificateId: 'cert-ema', timestamp: new Date().toISOString() },
    payload: {
      nodes: [modifiedNode],
      edges: []
    }
  };

  console.log(`  Publishing EvidencePacket: ${packet.header.id}`);
  municipality.federationEngine!.publish(packet);
  
  // Simulate network transport to province
  const outPacket = Array.from(municipality.federationEngine!.syncEngine['outQueue'].values())[0];
  province.federationEngine!.syncEngine.receiveIncoming(outPacket);

  console.log('\n[3] FEDERATION MERGE (Province consumes packet)');
  province.federationEngine!.consumeIncoming();

  console.log('\n[4] VERIFYING AUTHORITY & CONFLICT RESOLUTION');
  // Check the canonical node in the Province's graph
  const n4 = province.graph!.getNode('road-n4');
  console.log(`  Canonical Node (road-n4) Status: ${n4?.metadata?.status}`); // Should remain 'GOOD'
  
  // Look for counter-evidence generated by the federation engine
  const claims = Array.from((province.graph as any).nodes.values() as KnowledgeNode[]).filter(n => n.type === 'Claim');
  console.log(`  Counter-Evidence Claims Generated: ${claims.length}`);
  if (claims.length > 0) {
    console.log(`  Claim ID: ${claims[0].id}`);
    console.log(`  Claiming Authority: ${claims[0].authority}`);
    console.log(`  Claimed Status: ${(claims[0].metadata as any).originalNodePayload.metadata.status}`);
  }

  console.log('\n===========================================================');
  console.log(' EFP SIMULATION COMPLETE');
  console.log('===========================================================');
}

runFederationProtocol().catch(console.error);
