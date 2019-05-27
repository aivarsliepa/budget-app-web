export interface WalletData {
  name: string;
}

/**
 * Data + firestore id
 */
export interface Wallet extends WalletData {
  id: string;
}
