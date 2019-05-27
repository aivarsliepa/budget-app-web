import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, ReplaySubject } from "rxjs";
import { Injectable } from "@angular/core";

export type User = firebase.User | null;

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user$ = new ReplaySubject<User>(1);
  private userId: string | null = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(user => {
      this.userId = user ? user.uid : null;
      this.user$.next(user);
    });
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
  }

  getUserId(): string | null {
    return this.userId;
  }
}
