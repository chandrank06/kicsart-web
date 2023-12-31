import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/dist/types/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  activeRequests: number = 0;
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const showSpinner = true;
    if (showSpinner) {
      if (this.activeRequests === 0) {
        this.spinnerService.startLoading();
      }
      this.activeRequests++;
      return next.handle(request).pipe(
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.spinnerService.stopLoading();
          }
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
export let spinnerProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: SpinnerInterceptor,
  multi: true
};
