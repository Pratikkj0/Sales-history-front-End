import { Component } from '@angular/core';
import { CustomersService } from '../../../service/customers.service';
import { CustomersModel } from '../../../models/customers-model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  emp: CustomersModel[] = [];
  tempemp: CustomersModel[]; //to prevent original data
  searchText: string; // ng model ka data aa raha
  searchCity: string;
  searchIncome: string;
  BycreditLimit: number;
  constructor(
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.customerService.getCustomersList().subscribe((data) => {
      this.emp = this.tempemp = data;
      console.log(data);
    });
  }

  searchCustomer() {
    this.customerService
      .getCustomersByFirstName(this.searchText)
      .subscribe((data) => {
        this.emp = this.tempemp = data;
      });
  }

  searchCustomerByCity() {
    this.customerService
      .getCustomersByCity(this.searchCity)
      .subscribe((data) => {
        this.emp = this.tempemp = data;
      });
  }

  searchCustomerByIncome() {
    this.customerService
      .getCustomerByIncome(this.searchIncome)
      .subscribe((data) => {
        this.emp = this.tempemp = data;
      });
  }
  searchByCreditLimit() {
    this.customerService
      .getCustomerByCreditLimit(this.BycreditLimit)
      .subscribe((data) => {
        this.emp = this.tempemp = data;
      });
  }
  deleteACustomers(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe((data) => {
      console.log(data);
      this.getdata();
    });
  }
}
