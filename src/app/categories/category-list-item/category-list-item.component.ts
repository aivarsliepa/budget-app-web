import { Component, Input } from "@angular/core";

import { Category } from "src/app/core/models/Category";

@Component({
  selector: "app-category-list-item",
  templateUrl: "./category-list-item.component.html",
  styleUrls: ["./category-list-item.component.scss"]
})
export class CategoryListItemComponent {
  @Input() category?: Category;
  @Input() showDivider?: boolean;
}
