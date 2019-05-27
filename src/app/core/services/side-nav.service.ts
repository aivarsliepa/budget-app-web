import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SideNavService {
  private showSideNav$ = new BehaviorSubject(false);

  getShowSideNav(): Observable<boolean> {
    return this.showSideNav$.asObservable();
  }

  setShowSideNav(showSideNav: boolean): void {
    // push new value only if value has changed
    this.showSideNav$.pipe(first()).subscribe(previousValue => {
      if (showSideNav !== previousValue) {
        this.showSideNav$.next(showSideNav);
      }
    });
  }
}
