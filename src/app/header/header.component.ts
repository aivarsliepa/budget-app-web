import { Component } from "@angular/core";

import { SideNavService } from "../core/services/side-nav.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(private sideNavService: SideNavService) {}

  openMenu() {
    this.sideNavService.setShowSideNav(true);
  }
}
