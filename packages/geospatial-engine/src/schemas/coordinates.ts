// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/geospatial-engine/src/schemas/coordinates.ts

export interface GeoLocation {
  latitude: number;
  longitude: number;
  altitude: number;
  coordinateSystem: "WGS84";
}

export interface LocalCoordinate {
  x: number;
  y: number;
  z: number;
  origin: string;
  referenceAsset: string;
}

export interface SemanticLocation {
  locationId: string;
  relationships: {
    receives: string[];
    produces: string[];
    consumes: string[];
    creates: string[];
  };
}

export interface RealityGraphNode {
  assetId: string;
  global: GeoLocation;
  local?: LocalCoordinate;
  semantics: SemanticLocation;
}
