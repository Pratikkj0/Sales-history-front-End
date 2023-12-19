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
import { CustomersAddComponent } from './components/customers/customers-add/customers-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CustomersAddComponent,
    CustomerListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
