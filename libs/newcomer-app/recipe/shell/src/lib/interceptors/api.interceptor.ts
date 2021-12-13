import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

import { PanelType, SnackbarService } from "@newcomer-app/newcomer-app/recipe/util";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private _snackbarService: SnackbarService) {
  }

  onSuccess(): void {
    this._snackbarService.open('Retrieved data!', PanelType.Success);
  }

  handleError(error: Error): Observable<never> {
    this._snackbarService.open('There was an error while fetching data', PanelType.Error);
    return throwError(() => error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(this.onSuccess.bind(this)),
      catchError(this.handleError.bind(this))
    );
  }
}
