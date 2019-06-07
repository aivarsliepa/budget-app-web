import { MatDatepickerModule } from "@angular/material/datepicker";
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
import {
  MatNativeDateModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatButtonModule
} from "@angular/material";

const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
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
