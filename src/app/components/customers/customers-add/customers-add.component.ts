import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../service/customers.service';
import { Router } from '@angular/router';
import { CustomersModel } from '../../../models/customers-model';
import { CountriesModel } from '../../../models/countries-model';
import { CountriesService } from '../../../service/countries.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers-add',
  templateUrl: './customers-add.component.html',
  styleUrl: './customers-add.component.css',
})
export class CustomersAddComponent implements OnInit {
  customerForm: FormGroup;
  countries: CountriesModel[];
  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService,
    private countriesService: CountriesService
  ) {}
  ngOnInit() {
    this.getCountries();
    this.customerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      gender: '',
      yearOfBirth: 0,
      maritalStatus: '',
      streetAddress: '',
      postalCode: '',
      city: '',
      cityId: 0,
      stateProvince: '',
      stateProvinceId: 0,
      country: this.formBuilder.group({
        countryId: 0,
      }),
      mainPhone: '',
      income: '',
      creditLimit: 0,
      email: '',
      total: '',
      totalId: 0,
      srcId: 0,
      effectiveFrom: null,
      effectiveTo: null,
      valid: '',
    });
    // Fetch countries for the dropdown
    // this.customersService.getCustomersByFirstName('Smith').subscribe((item:any) => {
    //   // this.countries = countries;
    //   this.customerForm = item;
    // });
  }

  onSubmit() {
    // Call the service method to add the new customer
    console.log(this.customerForm.value);
    this.customersService.addCustomer(this.customerForm.value).subscribe(
      (response) => {},

      (error) => {
        console.error(error);
      }
    );
  }
  getCountries() {
    this.countriesService.getCountries().subscribe((response) => {
      this.countries = response;
    });
  }
}
// }
