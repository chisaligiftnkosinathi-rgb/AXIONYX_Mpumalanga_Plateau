export interface PackDependency {
  id: string;
  version: string;
}

export interface PackManifest {
  id: string;
  version: string;
  engine: string;
  dependencies: PackDependency[];
  exports: string[];
}

export interface KnowledgePack {
  manifest: PackManifest;
  nodes: any[];
  edges: any[];
}
