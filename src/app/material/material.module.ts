import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
// import { MatMenuModule } from "@angular/material/menu";
import { NgModule } from "@angular/core";

const materialModules = [
  MatFormFieldModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule
  // MatMenuModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {}
