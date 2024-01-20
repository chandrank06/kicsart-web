import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorService } from './http-error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private httpErrorService: HttpErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        let errorString = '';
        if (error.error instanceof ErrorEvent) {
          errorString = `An error occurred:${error.error.message}`;
        } else {
          errorString = `HTTP Error:${error.status},${error.statuText}`;
        }
        this.httpErrorService.setErrorMessage(errorString);
        if (error.status === 403) {
        }
        return throwError(error);
      })
    );
  }
}
export let HttpErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true
};
