import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

import { WalletService } from "src/app/core/services/wallet.service";
import { Wallet } from "src/app/core/models/Wallet";

@Component({
  selector: "app-wallet-dashboard",
  templateUrl: "./wallet-dashboard.component.html",
  styleUrls: ["./wallet-dashboard.component.scss"]
})
export class WalletDashboardComponent implements OnInit {
  wallet$: Observable<Wallet> | undefined;

  constructor(private walletService: WalletService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.wallet$ = this.route.paramMap.pipe(
      switchMap(params => this.walletService.getWallet(params.get("walletId")))
    );
  }
}
