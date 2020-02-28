import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumberApiServiceService } from '../numbers-api-service/number-api-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { FactDialogComponent } from '../fact-dialog/fact-dialog.component';
import { DialogData, ApiResponse } from '../app.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnDestroy {
  public formProcessing = false;
  public form = new FormGroup({
    number: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private service: NumberApiServiceService,
    private dialog: MatDialog
    ) { }

  public findFact() {
    if (this.form.controls.number.value && !this.formProcessing && this.form.valid) {
      this.formProcessing = true;
      this.service.getFact(this.form.controls.number.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe((response: ApiResponse) => {
          this.openDialog({
            number: response.number,
            fact: response.text,
            found: response.found
          });
        }, (error: HttpErrorResponse) => {
          this.handleError(error);
          this.formProcessing = false;
        });
    }
  }

  public randomFact() {
    this.formProcessing = true;
    this.service.getRandomFact()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((response: ApiResponse) => {
        this.openDialog({
          number: response.number,
          fact: response.text,
          found: response.found,
          random: true
        });
      }, (error: HttpErrorResponse) => {
        this.handleError(error);
      });
  }

  public handleError(error: HttpErrorResponse) {
    this.openDialog({
      number: null,
      fact: null,
      error,
      found: false,
    });
  }

  public onKeyUp(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.findFact();
    }
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private openDialog(data: DialogData) {
    this.form.controls.number.setValue(null);
    this.form.markAsUntouched();
    this.formProcessing = false;
    this.dialog.open(FactDialogComponent, {
      width: '400px',
      data
    });
  }
}
