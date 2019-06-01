import { Component, Input } from "@angular/core";

import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallet-list",
  templateUrl: "./wallet-list.component.html",
  styleUrls: ["./wallet-list.component.scss"]
})
export class WalletListComponent {
  @Input() wallets?: Wallet[];
}
