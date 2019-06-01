import { NgModule } from "@angular/core";

import { NewWalletDialogComponent } from "./new-wallet-dialog/new-wallet-dialog.component";
import { WalletListItemComponent } from "./wallet-list-item/wallet-list-item.component";
import { WalletListComponent } from "./wallet-list/wallet-list.component";
import { WalletsRoutingModule } from "./wallets-routing.module";
import { WalletsComponent } from "./wallets/wallets.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [SharedModule, WalletsRoutingModule],
  declarations: [
    NewWalletDialogComponent,
    WalletListItemComponent,
    WalletListComponent,
    WalletsComponent
  ],
  entryComponents: [NewWalletDialogComponent]
})
export class WalletsModule {}
