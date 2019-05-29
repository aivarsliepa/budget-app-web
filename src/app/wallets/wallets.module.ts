import { NgModule } from "@angular/core";

import { NewWalletDialogComponent } from "./new-wallet-dialog/new-wallet-dialog.component";
import { WalletListItemComponent } from "./wallet-list-item/wallet-list-item.component";
import { WalletListComponent } from "./wallet-list/wallet-list.component";
import { WalletRoutingModule } from "./wallets-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [SharedModule, WalletRoutingModule],
  declarations: [WalletListComponent, WalletListItemComponent, NewWalletDialogComponent],
  entryComponents: [NewWalletDialogComponent]
})
export class WalletModule {}
