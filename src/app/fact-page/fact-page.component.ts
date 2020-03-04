import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap, map } from 'rxjs/operators';
import { NumberApiServiceService } from '../numbers-api-service/number-api-service.service';
import { ApiResponse } from '../app.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fact-page',
  templateUrl: './fact-page.component.html',
  styleUrls: ['./fact-page.component.css']
})
export class FactPageComponent implements OnInit, OnDestroy {
  public processing = true;
  public numberFact: ApiResponse;
  public networkError: HttpErrorResponse;
  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: NumberApiServiceService,
  ) { }

  public ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this.onDestroy$),
        map(params => {
          if (isNaN(params.id)) {
            this.router.navigateByUrl('/');
          } else {
            this.service.getFact(params.id)
              .subscribe((response: ApiResponse) => {
                this.numberFact = response;
                this.processing = false;
              }, (error: HttpErrorResponse) => {
                this.networkError = error;
                this.processing = false;
              });
          }
        })
      );
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
