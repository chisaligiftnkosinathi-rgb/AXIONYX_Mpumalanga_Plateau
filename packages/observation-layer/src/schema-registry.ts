import fs from 'fs';
import path from 'path';

export interface ColumnSchema {
  name: string;
  canonicalName: string;
  type: 'string' | 'timestamp' | 'numeric';
  unit?: string;
  required: boolean;
  bounds?: { min: number; max: number };
}

export interface SchemaDefinition {
  schemaId: string;
  version: string;
  description: string;
  columns: ColumnSchema[];
}

export class SchemaRegistry {
  public static loadSchema(schemaPath: string): SchemaDefinition {
    const raw = fs.readFileSync(schemaPath, 'utf8');
    return JSON.parse(raw) as SchemaDefinition;
  }
}
