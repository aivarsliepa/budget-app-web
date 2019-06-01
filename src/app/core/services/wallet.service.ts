import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";
import { ReplaySubject, Subject, Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { documentChangeActionToData } from "../utils/firestore-utils";
import { Wallet, WalletData } from "../models/Wallet";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class WalletService {
  private selectedWallet$ = new ReplaySubject<Wallet | undefined>(1);
  private wallets$ = new ReplaySubject<Wallet[]>(1);
  private notifier = new Subject<void>();

  selectedWalletId?: string;

  constructor(private db: AngularFirestore, private userService: UserService) {
    this.userService.getUser().subscribe(user => {
      this.notifier.next();

      if (!user) {
        this.wallets$.next([]);
        this.selectedWallet$.next(undefined);
        return;
      }

      this.db
        .collection<WalletData>(this.walletCollectionPath(user.uid))
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(documentChangeActionToData)),
          takeUntil(this.notifier)
        )
        .subscribe(wallets => this.wallets$.next(wallets));

      this.wallets$
        .pipe(
          map(wallets => wallets.find(wallet => wallet.id === user.selectedWallet)),
          takeUntil(this.notifier)
        )
        .subscribe(wallet => {
          if (wallet) {
            this.selectedWalletId = wallet.id;
          }

          this.selectedWallet$.next(wallet);
        });
    });
  }

  walletCollectionPath(userId = this.userService.userId) {
    return `users/${userId}/wallets`;
  }

  createWallet(wallet: WalletData): Promise<DocumentReference> {
    return this.db.collection<WalletData>(this.walletCollectionPath()).add(wallet);
  }

  selectWallet(selectedWallet: string) {
    this.userService.update({ selectedWallet });
  }

  getWallets(): Observable<Wallet[]> {
    return this.wallets$.asObservable();
  }

  getSelectedWallet(): Observable<Wallet | undefined> {
    return this.selectedWallet$.asObservable();
  }
}
