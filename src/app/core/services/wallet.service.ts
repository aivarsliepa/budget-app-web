import { AngularFirestore, DocumentChangeAction, DocumentReference } from "@angular/fire/firestore";
import { ReplaySubject, BehaviorSubject, Observable, Subject } from "rxjs";
import { map, switchMap, flatMap, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { Wallet, WalletData } from "../models/Wallet";
import { UserService } from "./user.service";

const actionToWallet = (action: DocumentChangeAction<WalletData>): Wallet => ({
  id: action.payload.doc.id,
  ...action.payload.doc.data()
});

@Injectable({
  providedIn: "root"
})
export class WalletService {
  public wallets = new ReplaySubject<Wallet[]>(1);
  private notifier = new Subject();

  constructor(private db: AngularFirestore, private userService: UserService) {
    this.userService
      .getUser()
      .pipe(
        switchMap(user => {
          this.notifier.next(true);

          if (!user) {
            return new BehaviorSubject([]).pipe(takeUntil(this.notifier));
          }

          return this.db
            .collection<WalletData>(this.walletCollectionPath(user.uid))
            .snapshotChanges()
            .pipe(
              map(actions => actions.map(actionToWallet)),
              takeUntil(this.notifier)
            );
        })
      )
      .subscribe(this.wallets);
  }

  createWallet(wallet: WalletData): Promise<DocumentReference> {
    return this.db.collection<WalletData>(this.walletCollectionPath()).add(wallet);
  }

  getWallet(id: string | null | undefined): Observable<Wallet> {
    return this.wallets.pipe(
      flatMap(wallets => {
        return wallets.filter(wallet => wallet.id === id);
      })
    );
  }

  private walletCollectionPath(userId = this.userService.getUserId()) {
    return `users/${userId}/wallets`;
  }
}
