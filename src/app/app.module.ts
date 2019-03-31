import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test2WaysCombinationComponent } from './test2-ways-combination/test2-ways-combination.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2WaysCombinationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
