import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from "@angular/material";
import { AngularFireModule } from "@angular/fire";
import { NgModule } from "@angular/core";

import { SideNavComponent } from "./side-nav/side-nav.component";
import { HeaderComponent } from "./header/header.component";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, SideNavComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {}
