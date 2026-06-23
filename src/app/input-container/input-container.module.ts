import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from './input-container.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FactDialogModule } from '../fact-dialog/fact-dialog.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FactDialogModule,
    MatProgressSpinnerModule
  ],
  declarations: [InputContainerComponent],
  exports: [InputContainerComponent]
})
export class InputContainerModule { }
