import { NgModule } from '@angular/core';

import {MainBannerComponent} from "./main-banner.component";

@NgModule({
  declarations: [
    MainBannerComponent,
  ],
  imports: [],
  providers: [],
  exports: [
    MainBannerComponent
  ],
  bootstrap: [MainBannerComponent]
})
export class MainBannerModule { }
