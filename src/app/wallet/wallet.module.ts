import { NgModule } from "@angular/core";

import { WalletEntryListItemComponent } from "./wallet-entry-list-item/wallet-entry-list-item.component";
import { WalletEntryListComponent } from "./wallet-entry-list/wallet-entry-list.component";
import { WalletDashboardComponent } from "./wallet-dashboard/wallet-dashboard.component";
import { WalletRoutingModule } from "./wallet-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [WalletDashboardComponent, WalletEntryListComponent, WalletEntryListItemComponent],
  imports: [SharedModule, WalletRoutingModule]
})
export class WalletModule {}
