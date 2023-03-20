import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL_UI_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
];

@NgModule({
  imports: [ ...MATERIAL_UI_COMPONENTS ],
  exports: [ ...MATERIAL_UI_COMPONENTS ],
})
export class MaterialUiModule { }
