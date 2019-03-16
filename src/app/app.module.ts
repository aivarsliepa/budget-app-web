import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
