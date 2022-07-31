import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CompanyDescriptionComponent} from "./company-description.component";

@NgModule({
  declarations: [
    CompanyDescriptionComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    CompanyDescriptionComponent
  ],
  bootstrap: [CompanyDescriptionComponent]
})
export class CompanyDescriptionModule { }
