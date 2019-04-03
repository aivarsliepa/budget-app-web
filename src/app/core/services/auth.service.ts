import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authState = {
    initial: true
  };

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (this.authState.initial) {
        this.authState.initial = false;
        return;
      }

      const route = user ? "/home" : "/login";
      this.router.navigate([route]);
    });
  }

  loginWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(console.warn);
  }

  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(console.warn);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(console.warn);
  }
}
