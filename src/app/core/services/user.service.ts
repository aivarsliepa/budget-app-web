import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

type User = firebase.User | null;

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user$ = new BehaviorSubject<User>(null);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(this.user$);
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
  }
}
