export enum InfrastructureEventType {
  ClusterCreated = 'ClusterCreated',
  NodeReady = 'NodeReady',
  NodeNotReady = 'NodeNotReady',
  PodStarted = 'PodStarted',
  PodStopped = 'PodStopped',
  PodRestarted = 'PodRestarted',
  PodFailed = 'PodFailed',
  DeploymentScaled = 'DeploymentScaled',
  DeploymentRolledBack = 'DeploymentRolledBack',
  ImageUpdated = 'ImageUpdated',
  CertificateExpired = 'CertificateExpired',
  VolumeAttached = 'VolumeAttached',
  VolumeDetached = 'VolumeDetached',
  IngressUpdated = 'IngressUpdated',
  NetworkPolicyChanged = 'NetworkPolicyChanged'
}

export interface InfrastructureEventPayload {
  entityId: string;
  entityType: string; // e.g. POD, DEPLOYMENT
  reason?: string;
  message?: string;
  metrics?: Record<string, number>;
}
