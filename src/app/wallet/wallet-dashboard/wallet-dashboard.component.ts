import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

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
    private walletEntryService: WalletEntryService
  ) {}

  ngOnInit() {
    this.walletEntries$ = this.walletEntryService.getWalletEntries();
    this.wallet$ = this.walletService.getSelectedWallet();
  }

  addEntry() {
    this.walletEntryService.createEntry({
      categoryId: "t",
      date: new Date(),
      labels: [],
      type: "expense",
      value: 1
    });
  }
}
