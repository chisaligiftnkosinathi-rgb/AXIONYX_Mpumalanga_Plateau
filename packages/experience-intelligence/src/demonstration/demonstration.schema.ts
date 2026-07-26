export interface Scene {
  title: string;
  evidence: string[];
  explanation: string;
}

export interface Demonstration {
  id: string;
  title: string;
  realityReference: string;
  scenes: Scene[];
  replayEnabled: boolean;
}
