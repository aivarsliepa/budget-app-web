import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { Component } from "@angular/core";

const icons = ["google-logo", "enter", "exit", "wallet", "menu", "add", "categories"];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    icons.forEach(icon => {
      this.registerIcon(icon);
    });
  }

  private registerIcon(iconName: string) {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/${iconName}.svg`)
    );
  }
}
