import { NgModule } from "@angular/core";

import { WalletDashboardComponent } from "./wallet-dashboard/wallet-dashboard.component";
import { WalletRoutingModule } from "./wallet-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [WalletDashboardComponent],
  imports: [SharedModule, WalletRoutingModule]
})
export class WalletModule {}
