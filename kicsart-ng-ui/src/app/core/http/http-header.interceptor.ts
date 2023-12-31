import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store,no-cache'
      }
    });
    return next.handle(request);
  }
}
export let HttpHeaderInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpHeaderInterceptor,
  multi: true
};
