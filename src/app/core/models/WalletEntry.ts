type EntryType = "expense" | "income";

export interface WalletEntryData {
  value: number;
  date: Date;
  categoryId: string;
  description?: string;
  labels: string[];
  type: EntryType;
}

/**
 * Data + firestore id
 */
export interface WalletEntry extends WalletEntryData {
  id: string;
}
