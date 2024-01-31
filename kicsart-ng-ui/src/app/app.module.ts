import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';

@NgModule({
  declarations: [AppComponent, ServicesComponent, NavBarComponent, LandingBannerComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NgbModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
