import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactDialogComponent } from './fact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [FactDialogComponent],
  declarations: [FactDialogComponent],
  exports: [FactDialogComponent]
})
export class FactDialogModule { }
