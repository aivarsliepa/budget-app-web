import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

const modules = [CommonModule, FormsModule, MaterialModule, FlexLayoutModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedModule {}
