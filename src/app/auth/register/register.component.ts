import { Component } from "@angular/core";

import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  email = "";
  password = "";
  confirmPassword = "";

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password);
  }

  googleLogin() {
    this.authService.googleSignIn();
  }
}
