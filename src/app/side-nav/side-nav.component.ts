import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Subscription } from "rxjs";

import { SideNavService } from "../core/services/side-nav.service";
import { UserService, User } from "../core/services/user.service";
import { AuthService } from "../core/services/auth.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit, OnDestroy {
  @ViewChild("sidenav") sideNav: MatSidenav | null = null;

  private sideNavServiceSub: Subscription | null = null;
  private sideNavSub: Subscription | null = null;
  private userSub: Subscription | null = null;

  public user: User = null;

  constructor(
    private sideNavService: SideNavService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSub = this.userService.getUser().subscribe(user => (this.user = user));

    this.sideNavServiceSub = this.sideNavService.getShowSideNav().subscribe(showNav => {
      if (!this.sideNav) {
        return;
      }

      if (showNav && !this.sideNav.opened) {
        this.sideNav.open();
      } else if (!showNav && this.sideNav.opened) {
        this.sideNav.close();
      }
    });

    if (!this.sideNav) {
      return;
    }

    this.sideNavSub = this.sideNav.openedChange.subscribe((val: boolean) =>
      this.sideNavService.setShowSideNav(val)
    );
  }

  ngOnDestroy() {
    if (this.sideNavServiceSub) {
      this.sideNavServiceSub.unsubscribe();
    }

    if (this.sideNavSub) {
      this.sideNavSub.unsubscribe();
    }

    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  logout() {
    this.authService.logout();
  }
}
