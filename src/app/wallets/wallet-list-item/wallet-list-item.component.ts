import { Router, ActivatedRoute } from "@angular/router";
import { Component, Input } from "@angular/core";

import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallet-list-item",
  templateUrl: "./wallet-list-item.component.html",
  styleUrls: ["./wallet-list-item.component.scss"]
})
export class WalletListItemComponent {
  @Input() wallet: Wallet | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  selectWallet() {
    if (this.wallet) {
      this.router.navigate([this.wallet.id], { relativeTo: this.route });
    }
  }
}
