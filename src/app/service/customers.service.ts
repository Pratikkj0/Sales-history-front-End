import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersModel } from '../models/customers-model'; 
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
//why private
  private baseUrl ="http://localhost:8084/api/v1/customers";
  constructor(private httpclient :HttpClient) { }

  getCustomersList() : Observable<CustomersModel[]>{
    return this.httpclient.get<CustomersModel[]>(this.baseUrl);
  }

 
}
