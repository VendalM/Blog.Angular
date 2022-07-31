import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {MainBannerModule} from "./main-banner/main-banner.module";
import {DopInfoModule} from "./dop-info/dop-info.module";
import {CompanyDescriptionModule} from "./company-description/company-description.module";
import {ProductModule} from "./product/product.module";
import {FormModule} from "./form/form.module";
import {FooterComponent} from "./shared/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainBannerModule,
    DopInfoModule,
    CompanyDescriptionModule,
    ProductModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
