import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoggedOutGuard } from "./core/guards/logged-out.guard";
import { LoggedInGuard } from "./core/guards/logged-in.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule",
    canActivate: [LoggedInGuard]
  },
  {
    path: "wallets/:walletId",
    loadChildren: "./wallet/wallet.module#WalletModule",
    canActivate: [LoggedInGuard],
    pathMatch: "full"
  },
  {
    path: "wallets",
    loadChildren: "./wallets/wallets.module#WalletsModule",
    canActivate: [LoggedInGuard]
  },
  {
    path: "login",
    loadChildren: "./auth/login/login.module#LoginModule",
    canActivate: [LoggedOutGuard]
  },
  {
    path: "register",
    loadChildren: "./auth/register/register.module#RegisterModule",
    canActivate: [LoggedOutGuard]
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
