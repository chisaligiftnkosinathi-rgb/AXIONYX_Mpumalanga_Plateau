import { SchemaRegistry } from './schema-registry';
import { CSVParser } from './csv-parser';
import { DataValidator, ValidationResult } from './data-validator';
import { v4 as uuidv4 } from 'uuid';

export interface BatchReport {
  batchId: string;
  schemaId: string;
  schemaVersion: string;
  totalRecords: number;
  accepted: number;
  rejected: number;
  results: { rowNumber: number; validation: ValidationResult }[];
}

export class CSVAdapter {
  public static processBatch(csvContent: string, schemaPath: string, fileName: string): BatchReport {
    const batchId = 'batch_' + uuidv4().substring(0, 8);
    const schema = SchemaRegistry.loadSchema(schemaPath);
    
    const records = CSVParser.parse(csvContent);
    const report: BatchReport = {
      batchId,
      schemaId: schema.schemaId,
      schemaVersion: schema.version,
      totalRecords: records.length,
      accepted: 0,
      rejected: 0,
      results: []
    };
    
    records.forEach(record => {
      const validation = DataValidator.validate(record, schema, batchId, fileName);
      if (validation.valid) {
        report.accepted++;
      } else {
        report.rejected++;
      }
      report.results.push({ rowNumber: record.rowNumber, validation });
    });
    
    return report;
  }
}
