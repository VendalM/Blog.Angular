import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import {CompanyDescriptionModule} from "../company-description/company-description.module";
import {ProductModule} from "../product/product.module";
import {MainBannerModule} from "../main-banner/main-banner.module";
import {FormModule} from "../form/form.module";
import {DopInfoModule} from "../dop-info/dop-info.module";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    MainBannerModule,
    DopInfoModule,
    CompanyDescriptionModule,
    ProductModule,
    FormModule,
    CompanyDescriptionModule,
    ProductModule,
    MainBannerModule,
    FormModule,
    DopInfoModule,
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
