import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageMissingComponent } from './page-missing/page-missing.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    LandingPageComponent,
    PageMissingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
