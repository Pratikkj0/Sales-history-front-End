import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountriesModel } from '../models/countries-model';
import { Observable,  tap } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  getcountrycount() {
    throw new Error('Method not implemented.');
  }
  getCountryData: any;
  baseUrl: any;
 
  constructor(private http:HttpClient){}
 url = "http://localhost:8084/countries";
 urlRegionCount = "http://localhost:8086/api/v1/countries/totalCountByCountry";
 result: any;
   
 
  getCountries(): Observable<any[]>{
  return this.http.get<any[]>(this.url)
  }
 
  addData(data: any): Observable<any>{
    return this.http.post('http://localhost:8084/countries', data);
 
  }
 
  // updateData(countryId: Number, data: any): Observable<any>{
  //   return this.http.post('http://localhost:8086/api/v1/countries', data);
 
  // }
 
 
  deleteCountry(countryId: number): Observable<any> {
    return this.http.delete(this.url+"/"+countryId)
 
 
   }
 
   saveCountry(): Observable<any> {
    // Implement your save logic and return an Observable
    // For example, you can make an HTTP POST request to save the country
    // Adjust the URL and request body based on your API
 
    const url = 'http://localhost:8084/countries';
    const requestBody = {}; // Add your request body if needed
 
    return this.http.post(url, requestBody);
 
   
  }
 
  //  getCountryNames(): Observable<string[]> {
  //   const url = `${this.urlRegionCount}.key;
  //   return this.http.get<string[]>(urlRegionCount);
  // }
 
  }
 
 
  //  }
   
  //  getcountrycount(): Observable<any>{
  //    return this.http.get('this.urlRegionCount')
      // .pipe(tap((result: any) => console.log("result",result)), map((result: any)=> (this.result = result)));
   
  //
  //
 