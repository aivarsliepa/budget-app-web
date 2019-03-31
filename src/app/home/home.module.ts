import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
