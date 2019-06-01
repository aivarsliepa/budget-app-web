import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { take, map } from "rxjs/operators";
import { Observable } from "rxjs";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoggedOutGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          return this.router.createUrlTree(["/home"]);
        }
        return true;
      }),
      take(1)
    );
  }
}
