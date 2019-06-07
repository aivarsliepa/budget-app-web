type EntryType = "expense";

export interface WalletEntryData {
  value: number;
  date: Date;
  categoryId: string;
  description?: string;
  labels: string[];
  type: EntryType;
}

export interface WalletEntryWithId extends WalletEntryData {
  id: string; // firestore ID
}

export interface WalletEntry extends WalletEntryWithId {
  name: string; // category name or "Other" if without
}
