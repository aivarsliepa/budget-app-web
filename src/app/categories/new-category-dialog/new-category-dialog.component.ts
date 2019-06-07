import { MatSnackBar, MatDialogRef, MatSelectChange } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CategoryGroup, Category, CategoryData } from "src/app/core/models/Category";
import { CategoryService } from "src/app/core/services/category.service";

@Component({
  selector: "app-new-category-dialog",
  templateUrl: "./new-category-dialog.component.html",
  styleUrls: ["./new-category-dialog.component.scss"]
})
export class NewCategoryDialogComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    parentId: new FormControl("")
  });

  parentName = new FormControl("");

  categoryGroups$?: Observable<CategoryGroup[]>;

  constructor(
    private dialogRef: MatDialogRef<NewCategoryDialogComponent>,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.categoryGroups$ = this.categoryService.getCategoryGroups();
  }

  submit() {
    if (this.categoryForm.valid) {
      const category: CategoryData = { ...this.categoryForm.value, type: "expense" };

      this.categoryService.createCategory(category).catch(err => {
        console.error(err);
        this.snackBar.open("Something went wrong...", "Close");
      });

      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  onParentCategorySelect($event: MatSelectChange) {
    const parentIdControl = this.categoryForm.get("parentId");
    const category: Category | undefined = $event.value;

    if (parentIdControl) {
      parentIdControl.setValue(category ? category.id : "");
    }
  }
}
