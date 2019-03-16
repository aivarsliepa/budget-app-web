import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

const modules = [CommonModule, FormsModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class SharedModule {}
