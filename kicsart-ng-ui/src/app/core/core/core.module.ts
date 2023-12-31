import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaderInterceptorProvider } from '../http/http-header.interceptor';
import { HttpErrorInterceptorProvider } from '../http/http-error.interceptor';
import { spinnerProvider } from '../spinner/spinner.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    HttpHeaderInterceptorProvider,
    HttpErrorInterceptorProvider,
    spinnerProvider
  ]
})
export class CoreModule {}
