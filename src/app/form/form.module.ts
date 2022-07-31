import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormComponent} from "./form.component";
import {NgClass} from "@angular/common";

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    NgClass
  ],
  providers: [],
  exports: [
    FormComponent
  ],
  bootstrap: [FormComponent]
})
export class FormModule { }
