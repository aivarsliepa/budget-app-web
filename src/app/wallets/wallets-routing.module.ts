import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { WalletListComponent } from "./wallet-list/wallet-list.component";

const routes: Routes = [
  {
    path: "",
    component: WalletListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {}
