export type RuntimeProfile = 'compose' | 'runtime' | 'pipeline' | 'replay';

export interface KernelConfig {
  profile: RuntimeProfile;
  databaseUrl?: string;
  mqttUrl?: string;
}

export function loadConfig(): KernelConfig {
  const envProfile = process.env.PROFILE as RuntimeProfile | undefined;
  return {
    profile: envProfile || 'runtime',
    databaseUrl: process.env.DATABASE_URL,
    mqttUrl: process.env.MQTT_URL,
  };
}
