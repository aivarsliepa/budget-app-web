import { AngularFirestore, DocumentChangeAction, DocumentReference } from "@angular/fire/firestore";
import { ReplaySubject, BehaviorSubject } from "rxjs";
import { map, switchMap } from "rxjs/operators";
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

  constructor(private db: AngularFirestore, private userService: UserService) {
    this.userService
      .getUser()
      .pipe(
        switchMap(user => {
          if (!user) {
            return new BehaviorSubject([]);
          }

          return this.db
            .collection<WalletData>(this.walletCollectionPath(user.uid))
            .snapshotChanges()
            .pipe(map(actions => actions.map(actionToWallet)));
        })
      )
      .subscribe(this.wallets);
  }

  createWallet(wallet: WalletData): Promise<DocumentReference> {
    return this.db.collection<WalletData>(this.walletCollectionPath()).add(wallet);
  }

  private walletCollectionPath(userId = this.userService.getUserId()) {
    return `users/${userId}/wallets`;
  }
}
