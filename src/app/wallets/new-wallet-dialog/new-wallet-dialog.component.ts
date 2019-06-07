import { MatDialogRef, MatSnackBar } from "@angular/material";
import { FormControl, Validators } from "@angular/forms";
import { Component } from "@angular/core";

import { WalletService } from "src/app/core/services/wallet.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-wallet-dialog",
  templateUrl: "./new-wallet-dialog.component.html",
  styleUrls: ["./new-wallet-dialog.component.scss"]
})
export class NewWalletDialogComponent {
  name = new FormControl("", [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<NewWalletDialogComponent>,
    private walletService: WalletService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  submit() {
    if (this.name.valid) {
      this.walletService
        .createWallet({ name: this.name.value })
        .then(wallet => {
          this.walletService.selectWallet(wallet.id);
          this.router.navigate(["/wallet"]);
        })
        .catch(err => {
          console.error(err);
          this.snackBar.open("Something went wrong...", "Close");
        });

      this.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
