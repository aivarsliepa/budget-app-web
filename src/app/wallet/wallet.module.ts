import { NgModule } from "@angular/core";

import { NewWalletEntryDialogComponent } from "./new-wallet-entry-dialog/new-wallet-entry-dialog.component";
import { WalletEntryListItemComponent } from "./wallet-entry-list-item/wallet-entry-list-item.component";
import { WalletEntryListComponent } from "./wallet-entry-list/wallet-entry-list.component";
import { WalletDashboardComponent } from "./wallet-dashboard/wallet-dashboard.component";
import { WalletRoutingModule } from "./wallet-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    WalletDashboardComponent,
    WalletEntryListComponent,
    WalletEntryListItemComponent,
    NewWalletEntryDialogComponent
  ],
  imports: [SharedModule, WalletRoutingModule],
  entryComponents: [NewWalletEntryDialogComponent]
})
export class WalletModule {}
