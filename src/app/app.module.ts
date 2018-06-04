import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageMissingComponent } from './page-missing/page-missing.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    LandingPageComponent,
    PageMissingComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
