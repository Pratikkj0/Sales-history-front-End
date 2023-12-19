import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomersAddComponent } from './components/customers/customers-add/customers-add.component';



const routes: Routes = [
  {path: 'app-customer-list',component: CustomerListComponent,},

  {path: 'customersadd',component: CustomersAddComponent,},
 
  
  



  // {
  //   path :"/customersListPage" ,
  //   component:CustomerListComponent

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
