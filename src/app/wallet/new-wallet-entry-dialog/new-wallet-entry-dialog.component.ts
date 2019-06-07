import {
  MatSnackBar,
  MatDialogRef,
  MatSelectChange,
  MatDatepickerInputEvent
} from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { WalletEntryService } from "src/app/core/services/wallet-entry.service";
import { CategoryService } from "src/app/core/services/category.service";
import { Category, CategoryGroup } from "src/app/core/models/Category";
import { WalletEntryData } from "src/app/core/models/WalletEntry";

@Component({
  selector: "app-new-wallet-entry-dialog",
  templateUrl: "./new-wallet-entry-dialog.component.html",
  styleUrls: ["./new-wallet-entry-dialog.component.scss"]
})
export class NewWalletEntryDialogComponent implements OnInit {
  form = new FormGroup({
    categoryId: new FormControl(""),
    description: new FormControl(""),
    value: new FormControl("", [Validators.required]),
    date: new FormControl(new Date(), [Validators.required])
  });

  categoryGroups$?: Observable<CategoryGroup[]>;

  today = new Date();

  constructor(
    private dialogRef: MatDialogRef<NewWalletEntryDialogComponent>,
    private walletEntryService: WalletEntryService,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.categoryGroups$ = this.categoryService.getCategoryGroups();
  }

  submit() {
    console.log(this.form.value);

    if (this.form.valid) {
      const walletEntry: WalletEntryData = { ...this.form.value, type: "expense", labels: [] };

      this.walletEntryService.createEntry(walletEntry).catch(err => {
        console.error(err);
        this.snackBar.open("Something went wrong...", "Close");
      });

      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  onCategorySelect($event: MatSelectChange) {
    const categoryIdControl = this.form.get("categoryId");
    const category: Category | undefined = $event.value;

    if (categoryIdControl) {
      categoryIdControl.setValue(category ? category.id : "");
    }
  }

  onDateSelect($event: MatDatepickerInputEvent<Date>) {
    const dateControl = this.form.get("date");
    if (dateControl) {
      dateControl.setValue($event.value);
    }
  }
}
