import { ReplaySubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SideNavService {
  private showSideNav$ = new ReplaySubject<boolean>();

  constructor() {
    this.showSideNav$.next(false);
  }

  getShowSideNav(): Observable<boolean> {
    return this.showSideNav$.asObservable();
  }

  setShowSideNav(showSideNav: boolean): void {
    this.showSideNav$.pipe(first()).subscribe(previousValue => {
      if (showSideNav !== previousValue) {
        this.showSideNav$.next(showSideNav);
      }
    });
  }
}
