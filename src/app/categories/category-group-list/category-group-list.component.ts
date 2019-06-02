import { Component, Input } from "@angular/core";
import { CategoryGroup } from "src/app/core/models/Category";

@Component({
  selector: "app-category-group-list",
  templateUrl: "./category-group-list.component.html",
  styleUrls: ["./category-group-list.component.scss"]
})
export class CategoryGroupListComponent {
  @Input() categoryGroups?: CategoryGroup[];
}
