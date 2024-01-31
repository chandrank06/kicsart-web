import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaderInterceptorProvider } from './http/http-header.interceptor';
import { HttpErrorInterceptorProvider } from './http/http-error.interceptor';
import { spinnerProvider } from './spinner/spinner.interceptor';

import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [
    HttpHeaderInterceptorProvider,
    HttpErrorInterceptorProvider,
    spinnerProvider
  ]
})
export class CoreModule {}
