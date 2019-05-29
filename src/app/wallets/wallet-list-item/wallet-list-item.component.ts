import { Component, Input } from "@angular/core";

import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallet-list-item",
  templateUrl: "./wallet-list-item.component.html",
  styleUrls: ["./wallet-list-item.component.scss"]
})
export class WalletListItemComponent {
  @Input() wallet: Wallet | null = null;
}
