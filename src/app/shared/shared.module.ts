import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

const modules = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedModule {}
