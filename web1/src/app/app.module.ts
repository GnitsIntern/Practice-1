import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    ThirdComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
