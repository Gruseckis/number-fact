import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactPageComponent } from './fact-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [FactPageComponent],
  exports: [FactPageComponent]
})
export class FactPageModule { }
