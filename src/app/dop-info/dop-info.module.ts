import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DopInfoComponent} from "./dop-info.component";

@NgModule({
  declarations: [
    DopInfoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    DopInfoComponent
  ],
  bootstrap: [DopInfoComponent]
})
export class DopInfoModule { }
