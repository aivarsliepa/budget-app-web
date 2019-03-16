import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { NgModule } from "@angular/core";

const materialModules = [
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
