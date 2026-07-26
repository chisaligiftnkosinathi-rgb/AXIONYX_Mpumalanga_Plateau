export interface AssetManifest {
  generationId: string;
  sourceReality: {
    realityId: string;
    version: string;
  };
  assets: {
    type: "VIDEO" | "IMAGE" | "AUDIO" | "DOCUMENT" | "PROMPT";
    outputPath: string;
    evidenceReferences: string[];
    validationStatus: "APPROVED" | "REJECTED";
  }[];
}
