import { MatDialog } from "@angular/material";
import { Component } from "@angular/core";

import { NewWalletDialogComponent } from "../new-wallet-dialog/new-wallet-dialog.component";
import { WalletService } from "src/app/core/services/wallet.service";

@Component({
  selector: "app-wallet-list",
  templateUrl: "./wallet-list.component.html",
  styleUrls: ["./wallet-list.component.scss"]
})
export class WalletListComponent {
  constructor(public walletService: WalletService, private dialog: MatDialog) {}

  addWallet() {
    this.dialog.open(NewWalletDialogComponent, {
      maxWidth: "40rem",
      minWidth: "20rem"
    });
  }
}
