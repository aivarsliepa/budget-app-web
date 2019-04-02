import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  email = "";
  password = "";

  constructor(private authService: AuthService) {}

  emailLogin() {
    this.authService.loginWithEmailAndPassword(this.email, this.password);
  }

  googleLogin() {
    this.authService.googleSignIn();
  }
}
