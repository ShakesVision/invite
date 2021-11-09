import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAddToCalendarModule } from '@trademe/ng-add-to-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAddToCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
