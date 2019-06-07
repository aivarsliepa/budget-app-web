import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs";

import { NewWalletEntryDialogComponent } from "../new-wallet-entry-dialog/new-wallet-entry-dialog.component";
import { WalletEntryService } from "src/app/core/services/wallet-entry.service";
import { WalletService } from "src/app/core/services/wallet.service";
import { WalletEntry } from "src/app/core/models/WalletEntry";
import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallet-dashboard",
  templateUrl: "./wallet-dashboard.component.html",
  styleUrls: ["./wallet-dashboard.component.scss"]
})
export class WalletDashboardComponent implements OnInit {
  wallet$?: Observable<Wallet | undefined>;
  walletEntries$?: Observable<WalletEntry[]>;

  constructor(
    private walletService: WalletService,
    private walletEntryService: WalletEntryService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.walletEntries$ = this.walletEntryService.getWalletEntries();
    this.wallet$ = this.walletService.getSelectedWallet();
  }

  addEntry() {
    this.dialog.open(NewWalletEntryDialogComponent, {
      maxWidth: "40rem",
      minWidth: "20rem"
    });
  }
}
