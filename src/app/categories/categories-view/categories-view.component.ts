import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CategoryService } from "src/app/core/services/category.service";
import { CategoryGroup } from "src/app/core/models/Category";

@Component({
  selector: "app-categories-view",
  templateUrl: "./categories-view.component.html",
  styleUrls: ["./categories-view.component.scss"]
})
export class CategoriesViewComponent implements OnInit {
  categoryGroups$?: Observable<CategoryGroup[]>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryGroups$ = this.categoryService.getCategoryGroups();
  }

  addCategory() {
    // TODO
    alert("addCategory");
  }
}
