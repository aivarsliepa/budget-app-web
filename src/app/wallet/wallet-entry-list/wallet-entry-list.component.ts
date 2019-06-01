import { Component, Input } from "@angular/core";
import { WalletEntry } from "src/app/core/models/WalletEntry";

@Component({
  selector: "app-wallet-entry-list",
  templateUrl: "./wallet-entry-list.component.html",
  styleUrls: ["./wallet-entry-list.component.scss"]
})
export class WalletEntryListComponent {
  @Input() walletEntries?: WalletEntry[];
}
