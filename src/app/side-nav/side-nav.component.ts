import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { SideNavService } from "../core/services/side-nav.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit, OnDestroy {
  @ViewChild("sidenav") sidenav: MatSidenav;

  private sideNavServiceSub: Subscription;
  private sideNavSub: Subscription;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit() {
    this.sideNavServiceSub = this.sideNavService.getShowSideNav().subscribe(showNav => {
      if (showNav && !this.sidenav.opened) {
        this.sidenav.open();
      } else if (!showNav && this.sidenav.opened) {
        this.sidenav.close();
      }
    });

    this.sideNavSub = this.sidenav.openedChange.subscribe(val =>
      this.sideNavService.setShowSideNav(val)
    );
  }

  ngOnDestroy() {
    this.sideNavServiceSub.unsubscribe();
    this.sideNavSub.unsubscribe();
  }
}
