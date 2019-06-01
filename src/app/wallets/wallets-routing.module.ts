import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { WalletsComponent } from "./wallets/wallets.component";

const routes: Routes = [
  {
    path: "",
    component: WalletsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletsRoutingModule {}
