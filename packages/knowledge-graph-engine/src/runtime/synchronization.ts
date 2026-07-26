import { EvidencePacket } from '../schemas/federation.schema';

export interface SyncOptions {
  retryMax: number;
  timeoutMs: number;
}

export class SynchronizationEngine {
  private inQueue: Map<string, EvidencePacket> = new Map();
  private outQueue: Map<string, EvidencePacket> = new Map();
  private processedIds: Set<string> = new Set(); // Deduplication

  /**
   * Enqueues an outgoing packet for broadcast.
   */
  public enqueueOutgoing(packet: EvidencePacket): void {
    this.outQueue.set(packet.header.id, packet);
    console.log(`[SyncEngine] Enqueued outgoing packet ${packet.header.id}`);
  }

  /**
   * Receives an incoming packet over the wire, deduplicates, and queues it.
   */
  public receiveIncoming(packet: EvidencePacket): boolean {
    if (this.processedIds.has(packet.header.id)) {
      console.log(`[SyncEngine] Dropped duplicate packet ${packet.header.id}`);
      return false; // Deduplicated
    }

    // TODO: Verify signature hash here

    this.inQueue.set(packet.header.id, packet);
    console.log(`[SyncEngine] Received incoming packet ${packet.header.id}`);
    return true;
  }

  /**
   * Processes the incoming queue.
   * In a real system, this handles ordering and replay.
   */
  public processIncomingQueue(): EvidencePacket[] {
    const packets = Array.from(this.inQueue.values());
    
    // Sort by timestamp (ordering)
    packets.sort((a, b) => new Date(a.header.timestamp).getTime() - new Date(b.header.timestamp).getTime());
    
    // Clear queue and mark as processed
    this.inQueue.clear();
    packets.forEach(p => this.processedIds.add(p.header.id));

    return packets;
  }
}
