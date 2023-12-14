import { Component } from '@angular/core';
import { CustomersService } from '../../../service/customers.service';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {

  emp: any= [];
  constructor(private customerService: CustomersService) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
   

    this.customerService.getCustomersList().subscribe((data) => {
      this.emp = data;
      
    });
  }
}
