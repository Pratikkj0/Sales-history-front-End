import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SalesComponent } from './components/sales/sales.component';
import { CostsComponent } from './components/costs/costs.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { TimesComponent } from './components/times/times.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomersHeaderComponent } from './components/customers/customers-header/customers-header.component';
import { CustomersAddComponent } from './components/customers/customers-add/customers-add.component';
import { CustomersDeleteComponent } from './components/customers/customers-delete/customers-delete.component';
import { CustomersUpdateComponent } from './components/customers/customers-update/customers-update.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CountriesComponent,
    SalesComponent,
    CostsComponent,
    CustomersComponent,
    ChannelsComponent,
    TimesComponent,
    PromotionsComponent,
     CustomersListComponent,
    CustomersHeaderComponent,
    CustomersAddComponent,
    CustomersDeleteComponent,
    CustomersUpdateComponent
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
