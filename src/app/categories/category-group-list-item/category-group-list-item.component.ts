import { Component, Input } from "@angular/core";
import { CategoryGroup } from "src/app/core/models/Category";

@Component({
  selector: "app-category-group-list-item",
  templateUrl: "./category-group-list-item.component.html",
  styleUrls: ["./category-group-list-item.component.scss"]
})
export class CategoryGroupListItemComponent {
  @Input() categoryGroup?: CategoryGroup;
}
