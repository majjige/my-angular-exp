import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintMyNameComponent } from './print-my-name/print-my-name.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintMyNameComponent,
    DateComponent,
    AddressCardComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
