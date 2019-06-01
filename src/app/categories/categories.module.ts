import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoryListItemComponent } from "./category-list-item/category-list-item.component";
import { CategoriesViewComponent } from "./categories-view/categories-view.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoriesRoutingModule } from "./categories-routing.module";

@NgModule({
  declarations: [CategoriesViewComponent, CategoryListComponent, CategoryListItemComponent],
  imports: [CommonModule, CategoriesRoutingModule]
})
export class CategoriesModule {}
