import { MatButtonModule } from "@angular/material";
import { NgModule } from "@angular/core";

const materialModules = [MatButtonModule];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
