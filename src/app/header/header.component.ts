import { Component, OnInit } from "@angular/core";

import { SideNavService } from "../core/services/side-nav.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(private sideNavService: SideNavService) {}

  public openMenu() {
    this.sideNavService.setShowSideNav(true);
  }
}
