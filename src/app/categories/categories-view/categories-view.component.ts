import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs";

import { NewCategoryDialogComponent } from "../new-category-dialog/new-category-dialog.component";
import { CategoryService } from "src/app/core/services/category.service";
import { CategoryGroup } from "src/app/core/models/Category";

@Component({
  selector: "app-categories-view",
  templateUrl: "./categories-view.component.html",
  styleUrls: ["./categories-view.component.scss"]
})
export class CategoriesViewComponent implements OnInit {
  categoryGroups$?: Observable<CategoryGroup[]>;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {}

  ngOnInit() {
    this.categoryGroups$ = this.categoryService.getCategoryGroups();
  }

  addCategory() {
    this.dialog.open(NewCategoryDialogComponent, {
      maxWidth: "40rem",
      minWidth: "20rem"
    });
  }
}
