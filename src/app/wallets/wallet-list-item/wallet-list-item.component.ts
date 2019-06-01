import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { WalletService } from "src/app/core/services/wallet.service";
import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallet-list-item",
  templateUrl: "./wallet-list-item.component.html",
  styleUrls: ["./wallet-list-item.component.scss"]
})
export class WalletListItemComponent {
  @Input() wallet?: Wallet;

  constructor(private router: Router, private walletService: WalletService) {}

  selectWallet() {
    if (this.wallet) {
      this.walletService.selectWallet(this.wallet.id);
      this.router.navigate(["/wallet"]);
    }
  }
}
