import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";
import { ReplaySubject, Subject, Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { documentChangeActionToData } from "../utils/firestore-utils";
import { WalletEntryData, WalletEntry } from "../models/WalletEntry";
import { WalletService } from "./wallet.service";

@Injectable({
  providedIn: "root"
})
export class WalletEntryService {
  private walletEntries$ = new ReplaySubject<WalletEntry[]>(1);
  private notifier = new Subject<void>();

  constructor(private walletService: WalletService, private db: AngularFirestore) {
    this.walletService.getSelectedWallet().subscribe(wallet => {
      this.notifier.next();

      if (!wallet) {
        this.walletEntries$.next([]);
        return;
      }

      this.db
        .collection<WalletEntryData>(this.walletEntryCollectionPath())
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(documentChangeActionToData)),
          takeUntil(this.notifier)
        )
        .subscribe(wallets => this.walletEntries$.next(wallets));
    });
  }

  private walletEntryCollectionPath(): string {
    return this.walletService.getSelectedWalletDocPath() + "/entries";
  }

  createEntry(walletEntry: WalletEntryData): Promise<DocumentReference> {
    return this.db.collection<WalletEntryData>(this.walletEntryCollectionPath()).add(walletEntry);
  }

  getWalletEntries(): Observable<WalletEntry[]> {
    return this.walletEntries$.asObservable();
  }
}
