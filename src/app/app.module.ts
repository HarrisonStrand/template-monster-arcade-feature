import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Arcade1Component } from './arcade1/arcade1.component';
import { Arcade2Component } from './arcade2/arcade2.component';

@NgModule({
  declarations: [
    AppComponent,
    Arcade1Component,
    Arcade2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
