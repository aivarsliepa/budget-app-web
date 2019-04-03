import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { take, map } from "rxjs/operators";
import { Observable } from "rxjs";

import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root"
})
export class LoggedOutGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getUser().pipe(
      take(1),
      map(user => {
        if (user) {
          return this.router.createUrlTree(["/home"]);
        }
        return true;
      })
    );
  }
}
