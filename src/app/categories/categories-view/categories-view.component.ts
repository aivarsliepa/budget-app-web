import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CategoryService } from "src/app/core/services/category.service";
import { Category } from "src/app/core/models/Category";

@Component({
  selector: "app-categories-view",
  templateUrl: "./categories-view.component.html",
  styleUrls: ["./categories-view.component.scss"]
})
export class CategoriesViewComponent implements OnInit {
  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

  addCategory() {
    // TODO
    alert("addCategory");
  }
}
