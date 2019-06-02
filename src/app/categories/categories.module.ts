import { NgModule } from "@angular/core";

import { CategoryGroupListItemComponent } from "./category-group-list-item/category-group-list-item.component";
import { CategoryGroupListComponent } from "./category-group-list/category-group-list.component";
import { CategoryListItemComponent } from "./category-list-item/category-list-item.component";
import { CategoriesViewComponent } from "./categories-view/categories-view.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoriesRoutingModule } from "./categories-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CategoriesViewComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryGroupListComponent,
    CategoryGroupListItemComponent
  ],
  imports: [SharedModule, CategoriesRoutingModule]
})
export class CategoriesModule {}
