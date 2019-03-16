import { NgModule } from "@angular/core";

import { SideNavComponent } from "./side-nav/side-nav.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, SideNavComponent, HeaderComponent],
  imports: [CoreModule, SharedModule, MaterialModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
