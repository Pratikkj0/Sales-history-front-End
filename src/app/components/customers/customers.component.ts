import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  constructor(private router: Router) {}

//   openCustomerForm( ){
//     this.router.navigate(['/customersadd']);
//     // this.open(CustomersAddComponent)
//   }

//   openCustomerList(){
//     this.router.navigate(['/customerlist']);
//   }
// 
}