import { Component, Input } from "@angular/core";

import { WalletEntry } from "src/app/core/models/WalletEntry";

@Component({
  selector: "app-wallet-entry-list-item",
  templateUrl: "./wallet-entry-list-item.component.html",
  styleUrls: ["./wallet-entry-list-item.component.scss"]
})
export class WalletEntryListItemComponent {
  @Input() walletEntry?: WalletEntry;

  getSign(): string {
    if (this.walletEntry && this.walletEntry.type === "expense") {
      return "-";
    }

    return "";
  }
}
