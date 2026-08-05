import { IEventBus, DomainEvent } from '@axionyx/event-bus';
import { IEventStore } from '@axionyx/event-store/src/IEventStore';
import { PolicyEngine } from '@axionyx/policy-engine/src/PolicyEngine';
import { IWorkflowEngine } from '@axionyx/workflow-engine/src/index';

import { KernelConfig } from './config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as mqtt from 'mqtt';
import { PostgresEventStore } from '@axionyx/event-store/src/PostgresEventStore';
import { InMemoryEventBus } from '@axionyx/event-bus/src/providers/InMemoryEventBus';
import { MqttEventBus } from '@axionyx/event-bus/src/providers/MqttEventBus';
import { XStateAdapter } from '@axionyx/workflow-engine/src/adapters/XStateAdapter';
import { InMemoryEventStore } from '@axionyx/event-store/src/InMemoryEventStore';

export class KernelRuntime {
  public eventBus!: IEventBus;
  public eventStore!: IEventStore;
  public policyEngine!: PolicyEngine;
  public workflowEngine!: IWorkflowEngine;

  private pgPool?: Pool;
  private mqttClient?: mqtt.MqttClient;

  constructor(private readonly config: KernelConfig) {}

  public async initialize(): Promise<void> {
    // 1. Database & Event Store
    if (this.config.databaseUrl) {
      try {
        this.pgPool = new Pool({ connectionString: this.config.databaseUrl });
        await this.pgPool.query('SELECT 1');
        const db = drizzle(this.pgPool!);
        this.eventStore = new PostgresEventStore(db);
        console.log('✓ PostgreSQL connected');
        console.log('✓ EventStore initialized (Postgres)');
      } catch (err: any) {
        console.error('✗ PostgreSQL connection failed:', err.message);
        this.eventStore = new InMemoryEventStore();
        console.log('✓ EventStore initialized (Memory fallback)');
      }
    } else {
      this.eventStore = new InMemoryEventStore();
      console.log('✓ EventStore initialized (Memory stub)');
    }

    // 2. MQTT & Event Bus
    if (this.config.mqttUrl) {
      try {
        this.mqttClient = mqtt.connect(this.config.mqttUrl);
        
        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => reject(new Error('MQTT connection timeout')), 5000);
          this.mqttClient!.once('connect', () => {
            clearTimeout(timeout);
            resolve();
          });
          this.mqttClient!.once('error', (err) => {
            clearTimeout(timeout);
            reject(err);
          });
        });
        
        this.eventBus = new MqttEventBus(this.mqttClient);
        console.log('✓ MQTT connected');
        console.log('✓ EventBus initialized (MQTT)');
      } catch (err: any) {
        console.error('✗ MQTT connection failed:', err.message);
        this.eventBus = new InMemoryEventBus();
        console.log('✓ EventBus initialized (Memory fallback)');
      }
    } else {
      this.eventBus = new InMemoryEventBus();
      console.log('✓ EventBus initialized (Memory)');
    }

    // 3. Workflow Engine
    this.workflowEngine = new XStateAdapter();
    console.log('✓ Workflow initialized');

    // 4. Policy Engine
    this.policyEngine = new PolicyEngine();
    console.log('✓ PolicyEngine initialized');
  }

  public async shutdown(): Promise<void> {
    if (this.pgPool) {
      await this.pgPool.end();
      console.log('✓ PostgreSQL disconnected');
    }
    if (this.mqttClient) {
      this.mqttClient.end();
      console.log('✓ MQTT disconnected');
    }
  }

  public getStatus() {
    return {
      kernel: 'ready',
      eventBus: this.eventBus instanceof MqttEventBus ? 'mqtt' : 'memory',
      eventStore: this.config.databaseUrl ? 'postgres' : 'memory',
      policyEngine: this.policyEngine ? 'ready' : 'uninitialized',
      workflow: this.workflowEngine ? 'ready' : 'uninitialized',
    };
  }
}
