import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDeckComponent } from './app-deck/app-deck.component';
import { AppDeckService } from "./app-deck/app-deck.service";

@NgModule({
  declarations: [
    AppComponent,
    AppDeckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppDeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
