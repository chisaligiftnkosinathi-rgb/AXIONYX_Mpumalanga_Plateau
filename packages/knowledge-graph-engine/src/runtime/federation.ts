import { EvidencePacket, InstrumentProfile } from '../schemas/federation.schema';
import { KnowledgeGraph, KnowledgeNode, KnowledgeEdge } from '../schemas/engine.schema';
import { NegotiationEngine, NegotiationResult } from './negotiation';
import { SynchronizationEngine } from './synchronization';

export class FederationEngine {
  private negotiationEngine: NegotiationEngine;
  public syncEngine: SynchronizationEngine;
  private subscriptions: Set<string> = new Set(); // Domains we subscribe to

  constructor(
    private localProfile: InstrumentProfile,
    private graph: KnowledgeGraph
  ) {
    this.negotiationEngine = new NegotiationEngine(localProfile);
    this.syncEngine = new SynchronizationEngine();
  }

  /**
   * Called when a remote instrument attempts to connect to us.
   */
  public handleHandshake(remoteProfile: InstrumentProfile): NegotiationResult {
    return this.negotiationEngine.negotiate(remoteProfile);
  }

  /**
   * Called to subscribe to a remote capability domain.
   */
  public subscribe(domain: string): void {
    this.subscriptions.add(domain);
    console.log(`[Federation] Subscribed to domain: ${domain}`);
  }

  /**
   * Publishes an EvidencePacket to the outgoing sync queue.
   */
  public publish(packet: EvidencePacket): void {
    packet.status = 'CREATED';
    // -> SIGNED (simulated)
    packet.status = 'SIGNED';
    this.syncEngine.enqueueOutgoing(packet);
  }

  /**
   * Processes the incoming sync queue and merges packets into the graph.
   */
  public consumeIncoming(): void {
    const packets = this.syncEngine.processIncomingQueue();

    for (const packet of packets) {
      // Transition lifecycle
      packet.status = 'VERIFIED';
      
      console.log(`[Federation] Consuming packet ${packet.header.id} from ${packet.instrument.id}`);
      this.mergePacket(packet);
      
      packet.status = 'INDEXED';
    }
  }

  /**
   * Merges imported nodes into the canonical graph.
   * Enforces Authority Domain immutability and Counter-Evidence.
   */
  private mergePacket(packet: EvidencePacket): void {
    for (const node of packet.payload.nodes) {
      // 1. Is it a node we already have?
      const existing = this.graph.getNode(node.id);
      
      if (existing) {
        // We have it. Who owns it?
        if (existing.authority === this.localProfile.id) {
          // WE own it. They are sending us something about OUR node.
          // Is it an exact match? If not, we don't overwrite. We treat it as counter-evidence (Claim).
          
          // Check if it's a conflict
          if (JSON.stringify(existing.metadata) !== JSON.stringify(node.metadata)) {
            console.log(`[Federation] CONFLICT: Remote ${packet.instrument.id} disagrees on ${node.id}. Generating Counter-Evidence.`);
            
            const claimId = `claim-${packet.instrument.id}-${node.id}`;
            const claimNode: KnowledgeNode = {
              id: claimId,
              type: 'Claim',
              name: `Remote Claim about ${node.id}`,
              description: `Counter-evidence supplied by ${packet.instrument.id}`,
              temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null },
              authority: packet.instrument.id,
              metadata: { originalNodePayload: node }
            };
            
            const claimEdge: KnowledgeEdge = {
              id: `edge-${claimId}`,
              sourceId: claimId,
              targetId: node.id,
              type: 'contradicted_by', // Or 'assesses'
              temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null }
            };

            this.graph.addNode(claimNode);
            this.graph.addEdge(claimEdge);
          }
        } else if (existing.authority === packet.instrument.id) {
          // THEY own it, so they are allowed to update it.
          // But imported nodes are READ ONLY for us, meaning we just safely replace our cached copy.
          console.log(`[Federation] Updating imported read-only node ${node.id} from authoritative owner ${packet.instrument.id}`);
          (this.graph as any).nodes.set(node.id, node); // Hack to bypass read-only map for now
        } else {
          // SOMEONE ELSE owns it. Ignore it from this sender.
          console.warn(`[Federation] REJECTED: ${packet.instrument.id} attempted to modify ${node.id} owned by ${existing.authority}`);
        }
      } else {
        // We don't have it. Insert as a read-only imported node.
        console.log(`[Federation] Importing new node ${node.id} from ${packet.instrument.id}`);
        this.graph.addNode(node);
      }
    }

    // Merge edges
    for (const edge of packet.payload.edges) {
      if (!this.graph.getEdge(edge.id)) {
        try {
          this.graph.addEdge(edge);
        } catch (e: any) {
          console.warn(`[Federation] Failed to add edge ${edge.id}: ${e.message}`);
        }
      }
    }
  }
}
