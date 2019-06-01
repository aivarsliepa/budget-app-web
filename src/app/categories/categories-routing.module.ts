import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { CategoriesViewComponent } from "./categories-view/categories-view.component";

const routes: Routes = [{ path: "", component: CategoriesViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
