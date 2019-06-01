import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { map, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { UserData } from "../models/UserData";

export type User = (firebase.User & UserData) | null;

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user$ = new ReplaySubject<User>(1);
  private notifier = new Subject<void>();

  userId?: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.afAuth.user.subscribe(firebaseUser => {
      this.notifier.next();

      if (!firebaseUser) {
        return this.user$.next(null);
      }

      this.userId = firebaseUser.uid;

      this.getUserDocument()
        .valueChanges()
        .pipe(
          map((userData = {}) => ({ ...firebaseUser, ...userData })),
          takeUntil(this.notifier)
        )
        .subscribe(user => this.user$.next(user));
    });
  }

  private getUserDocument(): AngularFirestoreDocument<UserData> {
    return this.db.doc<UserData>(this.getUserDocPath());
  }

  update(userData: Partial<UserData>): Promise<void> {
    return this.getUserDocument().set(userData, { merge: true });
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
  }

  getUserDocPath(): string {
    return `users/${this.userId}`;
  }
}
