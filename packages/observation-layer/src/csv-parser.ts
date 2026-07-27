export interface RawRecord {
  rowNumber: number;
  data: Record<string, string>;
}

export class CSVParser {
  public static parse(csvContent: string): RawRecord[] {
    const lines = csvContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length < 2) return [];
    
    const headers = lines[0].split(',').map(h => h.trim());
    const records: RawRecord[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const data: Record<string, string> = {};
      headers.forEach((header, index) => {
        data[header] = values[index] || '';
      });
      records.push({ rowNumber: i + 1, data });
    }
    
    return records;
  }
}
