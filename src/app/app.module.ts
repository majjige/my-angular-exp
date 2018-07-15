import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintMyNameComponent } from './print-my-name/print-my-name.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintMyNameComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
