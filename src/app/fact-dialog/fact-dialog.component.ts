import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../app.model';

@Component({
  selector: 'app-fact-dialog',
  templateUrl: './fact-dialog.component.html'
})
export class FactDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  public closeClick() {
    this.dialogRef.close();
  }
}
