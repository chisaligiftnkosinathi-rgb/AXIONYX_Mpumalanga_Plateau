// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/finance-evidence-engine/src/index.ts

export interface JournalEntry {
  transactionId: string;
  evidenceId: string; // The unbreakable link to reality (e.g. PDF Invoice ID)
  date: string;
  lines: LedgerLine[];
}

export interface LedgerLine {
  account: string;
  debit: number;
  credit: number;
}

export class DoubleEntryLedger {
  private entries: JournalEntry[] = [];

  /**
   * The core physical law of AXIONYX Finance.
   * Every transaction must be backed by evidence, and Debits must exactly equal Credits.
   */
  postTransaction(entry: JournalEntry) {
    console.log(`[Finance Evidence Engine] Validating Journal Entry [TX-${entry.transactionId}]...`);
    
    // 1. Evidence Check
    if (!entry.evidenceId) {
      throw new Error(`[Finance Evidence Engine] REJECTED: Transaction lacks an Evidence ID. AXIONYX cannot process assumed finances.`);
    }

    // 2. Mathematical Check
    let totalDebit = 0;
    let totalCredit = 0;
    
    for (const line of entry.lines) {
      totalDebit += line.debit;
      totalCredit += line.credit;
    }

    // Floating point safe comparison
    if (Math.abs(totalDebit - totalCredit) > 0.001) {
      throw new Error(`[Finance Evidence Engine] REJECTED: Ledger imbalance. Debits (${totalDebit}) != Credits (${totalCredit}).`);
    }

    this.entries.push(entry);
    console.log(`[Finance Evidence Engine] ACCEPTED: Transaction successfully posted to the ledger.`);
    console.log(`  -> Provenance anchored to Evidence: ${entry.evidenceId}`);
  }
}
