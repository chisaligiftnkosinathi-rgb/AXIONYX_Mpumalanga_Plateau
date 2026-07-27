export interface DigitalSample {
  id: string;
  source: string;
  collector: string;
  method: string;
  result: string;
  validationStatus: string;
}

export class ChainOfCustody {
  public logSample(sample: DigitalSample): void {
    console.log(`[CoC] Sample Logged: ${sample.id} via ${sample.method}`);
  }
}
