import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";

const materialModules = [
  MatFormFieldModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatSidenavModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {}
