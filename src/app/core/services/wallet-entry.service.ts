import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";
import { ReplaySubject, Subject, Observable, combineLatest } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { documentChangeActionToData } from "../utils/firestore-utils";
import { WalletEntryData, WalletEntry, WalletEntryWithId } from "../models/WalletEntry";
import { CategoryService } from "./category.service";
import { WalletService } from "./wallet.service";

@Injectable({
  providedIn: "root"
})
export class WalletEntryService {
  private walletEntriesWithId$ = new ReplaySubject<WalletEntryWithId[]>(1);
  private walletEntries$ = new ReplaySubject<WalletEntry[]>(1);
  private notifier = new Subject<void>();

  constructor(
    private walletService: WalletService,
    private db: AngularFirestore,
    private categoryService: CategoryService
  ) {
    this.walletService.getSelectedWallet().subscribe(wallet => {
      this.notifier.next();

      if (!wallet) {
        this.walletEntriesWithId$.next([]);
        return;
      }

      this.db
        .collection<WalletEntryData>(this.walletEntryCollectionPath())
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(documentChangeActionToData)),
          takeUntil(this.notifier)
        )
        .subscribe(entries => this.walletEntriesWithId$.next(entries));
    });

    combineLatest(
      this.walletEntriesWithId$,
      this.categoryService.getCategoryIdToNameMap()
    ).subscribe(([walletEntries, categoryIdToNameMap]) => {
      const entries: WalletEntry[] = walletEntries.map(entry => ({
        ...entry,
        name: categoryIdToNameMap[entry.categoryId] || "Other"
      }));

      this.walletEntries$.next(entries);
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
