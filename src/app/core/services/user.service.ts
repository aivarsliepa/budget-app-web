import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, ReplaySubject } from "rxjs";
import { Injectable } from "@angular/core";

type User = firebase.User | null;

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user$ = new ReplaySubject<User>(1);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(this.user$);
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
  }
}
