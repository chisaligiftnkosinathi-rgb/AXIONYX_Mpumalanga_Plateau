import * as k8s from '@kubernetes/client-node';
import { InMemoryEventBus } from '@axionyx/event-bus';
import { InfrastructureEventType } from '@axionyx/ontology/src/infrastructure/InfrastructureEvents';

async function main() {
  console.log('Starting AXIONYX Infrastructure Observer...');
  
  const eventBus = new InMemoryEventBus();
  
  const kc = new k8s.KubeConfig();
  // For local development, load from default kubeconfig
  // In production cluster, this would be kc.loadFromCluster()
  kc.loadFromDefault();
  
  const watch = new k8s.Watch(kc);
  
  console.log('Connecting to Kubernetes API to observe events...');
  
  // Watch Pods
  watch.watch('/api/v1/pods',
    {},
    (type, apiObj, watchObj) => {
      const podName = apiObj.metadata?.name || 'unknown-pod';
      const namespace = apiObj.metadata?.namespace || 'default';
      
      let eventType = InfrastructureEventType.PodStarted;
      if (type === 'DELETED') {
        eventType = InfrastructureEventType.PodStopped;
      } else if (apiObj.status?.phase === 'Failed') {
        eventType = InfrastructureEventType.PodFailed;
      }
      
      // Map Kubernetes reality to AXIONYX Event
      eventBus.publish({
        id: `k8s-pod-${apiObj.metadata?.uid}`,
        type: eventType,
        timestamp: new Date(),
        payload: {
          entityId: podName,
          entityType: 'POD',
          namespace: namespace,
          message: `Pod ${podName} transitioned to ${type}`
        }
      });
      
      console.log(`[OBSERVED] ${eventType} -> Pod: ${podName} in ${namespace}`);
    },
    (err) => {
      console.error('Watch error:', err);
    }
  );

  console.log('Observer is actively listening to the Deployment Digital Twin.');
}

main().catch(console.error);
