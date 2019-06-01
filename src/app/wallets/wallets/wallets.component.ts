import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";

import { NewWalletDialogComponent } from "../new-wallet-dialog/new-wallet-dialog.component";
import { WalletService } from "src/app/core/services/wallet.service";
import { Observable } from "rxjs";
import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallets",
  templateUrl: "./wallets.component.html",
  styleUrls: ["./wallets.component.scss"]
})
export class WalletsComponent implements OnInit {
  wallets$?: Observable<Wallet[]>;

  constructor(private walletService: WalletService, private dialog: MatDialog) {}

  ngOnInit() {
    this.wallets$ = this.walletService.getWallets();
  }

  addWallet() {
    this.dialog.open(NewWalletDialogComponent, {
      maxWidth: "40rem",
      minWidth: "20rem"
    });
  }
}
