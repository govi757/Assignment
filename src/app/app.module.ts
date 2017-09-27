import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicdivComponent } from './picdiv/picdiv.component';
import { MyPictureComponent } from './my-picture/my-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    PicdivComponent,
    MyPictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
