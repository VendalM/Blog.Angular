import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MainBannerComponent} from "./main-banner.component";

@NgModule({
  declarations: [
    MainBannerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    MainBannerComponent
  ],
  bootstrap: [MainBannerComponent]
})
export class MainBannerModule { }
