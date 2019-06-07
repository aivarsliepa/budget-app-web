import { NgModule } from "@angular/core";

import { CategoryGroupListItemComponent } from "./category-group-list-item/category-group-list-item.component";
import { CategoryGroupListComponent } from "./category-group-list/category-group-list.component";
import { NewCategoryDialogComponent } from "./new-category-dialog/new-category-dialog.component";
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
    CategoryGroupListItemComponent,
    NewCategoryDialogComponent
  ],
  imports: [SharedModule, CategoriesRoutingModule],
  entryComponents: [NewCategoryDialogComponent]
})
export class CategoriesModule {}
