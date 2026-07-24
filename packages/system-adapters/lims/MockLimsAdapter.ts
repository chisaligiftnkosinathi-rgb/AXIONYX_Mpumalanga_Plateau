import { IOperationalSystemAdapter, Observation, CapabilityDescriptor } from '../core/IOperationalSystemAdapter';

export class MockLimsAdapter implements IOperationalSystemAdapter {
  async connect(): Promise<void> {
    console.log('[MockLimsAdapter] Connected to System A (LIMS)');
  }

  async *observe(): AsyncIterable<Observation> {
    yield {
      sourceId: 'LIMS-SYS-A',
      timestamp: new Date().toISOString(),
      type: 'SampleRegistered',
      payload: { sampleId: 'S-8812', client: 'Alpha Mining' }
    };
  }

  capabilities(): CapabilityDescriptor[] {
    return [
      { type: 'Registration', description: 'Sample metadata ingestion' },
      { type: 'StatusSync', description: 'Bidirectional status synchronization' }
    ];
  }

  async disconnect(): Promise<void> {
    console.log('[MockLimsAdapter] Disconnected');
  }
}
