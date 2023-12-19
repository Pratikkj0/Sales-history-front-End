import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersModel } from '../models/customers-model';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private baseUrl = 'http://localhost:8084/api/v1/customers';
  constructor(private httpclient: HttpClient) {}

  getCustomersList(): Observable<CustomersModel[]> {
    return this.httpclient.get<CustomersModel[]>(this.baseUrl);
  }
  getCustomersByFirstName(firstName: string): Observable<CustomersModel[]> {
    return this.httpclient.get<CustomersModel[]>(
      this.baseUrl + '/' + firstName
    );
  }
  getCustomersByCity(city: string): Observable<CustomersModel[]> {
    return this.httpclient.get<CustomersModel[]>(
      this.baseUrl + '/city/' + city
    );
  }

  getCustomerByIncome(income: string): Observable<CustomersModel[]> {
    return this.httpclient.get<CustomersModel[]>(
      this.baseUrl + '/income/' + income
    );
  }
  getCustomerByCreditLimit(creditLimit: number): Observable<CustomersModel[]> {
    return this.httpclient.get<CustomersModel[]>(
      this.baseUrl + '/limit/' + creditLimit
    );
  }

  addCustomer(formData): Observable<string> {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      }),
    };
    return this.httpclient.post<string>(this.baseUrl, formData);
  }



  deleteCustomer(customerId: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.baseUrl}/${customerId}`);
  }
}
