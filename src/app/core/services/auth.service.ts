import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

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
