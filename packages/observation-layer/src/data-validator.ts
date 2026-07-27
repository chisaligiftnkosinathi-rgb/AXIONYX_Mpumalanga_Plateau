import { SchemaDefinition, ColumnSchema } from './schema-registry';
import { RawRecord } from './csv-parser';
import { ObservationEvent } from './observation';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  observation?: ObservationEvent;
}

export class DataValidator {
  public static validate(record: RawRecord, schema: SchemaDefinition, batchId: string, fileName: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const payload: any = {};
    
    // Check missing fields and build payload
    schema.columns.forEach(col => {
      const val = record.data[col.name];
      if (col.required && (!val || val === '')) {
        errors.push(`Missing required field: ${col.name}`);
        return;
      }
      if (!val || val === '') return;
      
      // Type enforcement
      if (col.type === 'numeric') {
        const num = parseFloat(val);
        if (isNaN(num)) {
          errors.push(`Invalid numeric value for ${col.name}: ${val}`);
        } else {
          if (col.bounds && (num < col.bounds.min || num > col.bounds.max)) {
            errors.push(`Value out of bounds for ${col.name}: ${num} (Expected ${col.bounds.min}-${col.bounds.max})`);
          }
          payload[col.canonicalName] = num;
        }
      } else if (col.type === 'timestamp') {
        const d = new Date(val);
        if (isNaN(d.getTime())) {
          errors.push(`Invalid timestamp format for ${col.name}: ${val}`);
        } else {
          payload[col.canonicalName] = d.toISOString();
        }
      } else {
        payload[col.canonicalName] = val;
      }
    });

    if (errors.length > 0) {
      return { valid: false, errors, warnings };
    }

    // Determine the measurement and value dynamically for the Canonical Envelope
    // In this basic CSV structure we map Ash, Moisture, CV individually, so let's pick the primary required numeric
    const primaryMetricCol = schema.columns.find(c => c.type === 'numeric' && c.required) || schema.columns.find(c => c.type === 'numeric');
    
    if (!primaryMetricCol) {
      errors.push("No primary numeric metric found in schema");
      return { valid: false, errors, warnings };
    }

    const observation: ObservationEvent = {
      metadata: {
        eventType: 'CSV_IMPORT',
        adapterId: payload['metadata.adapterId'] || 'CSV-Adapter',
        version: schema.version
      },
      payload: {
        id: `obs_${batchId}_${record.rowNumber}`,
        occurredAt: payload.occurredAt,
        receivedAt: new Date().toISOString(),
        source: payload.source,
        asset: payload.source, // Assumed equal for this demo
        measurement: primaryMetricCol.canonicalName,
        value: payload[primaryMetricCol.canonicalName],
        unit: primaryMetricCol.unit || 'unknown',
        confidence: 100, // Starting confidence
        provenance: `File: ${fileName}, Row: ${record.rowNumber}, Batch: ${batchId}`,
        checksum: 'TBD' // Scientific hashing done downstream
      },
      provenance: {
        origin: `CSVAdapter / ${fileName}`,
        chainHashes: [batchId, `row-${record.rowNumber}`]
      },
      evidenceStatus: 'PENDING_OVL'
    };

    return { valid: true, errors, warnings, observation };
  }
}
