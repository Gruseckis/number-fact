import { HttpErrorResponse } from '@angular/common/http';

export interface DialogData {
  number: number;
  fact: string;
  found: boolean;
  random?: boolean;
  error?: HttpErrorResponse;
}

export interface ApiResponse {
  text: string;
  number: number;
  found: boolean;
  type: string;
}
