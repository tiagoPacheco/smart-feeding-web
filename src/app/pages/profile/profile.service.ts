import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { GlobalService } from '../../shared/services/global.service';
@Injectable()
export class ProfileService {

  httpOptions = { };
  constructor(private httpClient: HttpClient, private globalService: GlobalService) {       
  }  
    
  createProfile(formData: any): Observable<any> {           
    return this.httpClient
      .post(`${this.globalService.url}/pet/`, formData, {})
      .pipe(
        map((data: any) => data.json()),
        catchError((data) => data)
      )
  }

  updateProfile(formData: any): Observable<any> {         
    return this.httpClient
      .put(`${this.globalService.url}/pet/update/${this.globalService.petId}`, formData, {})
      .pipe(
        map((data: any) => data.json()),
        catchError((data) => data)
      )
  }

  getPetProfile(): Observable<any>{
    return this.httpClient
      .get(`${this.globalService.url}/pet/${this.globalService.userId}`, this.httpOptions)
      .pipe(
        map((data: any) => data),
        catchError((data) => data)
    )
  }

  createStock(formData: any): Observable<any> {   
    return this.httpClient
      .post(`${this.globalService.url}/thing/`, formData, {})
      .pipe(
        map((data: any) => data.json()),
        catchError((data) => data)
      )
  }

  updateStock(formData: any): Observable<any> {   
    return this.httpClient
      .put(`${this.globalService.url}/thing/update/${this.globalService.thingId}`, formData, {})
      .pipe(
        map((data: any) => data.json()),
        catchError((data) => data)
      )
  }

  getThingData(): Observable<any>{
    return this.httpClient
      .get(`${this.globalService.url}/thing/${this.globalService.userId}`, this.httpOptions)
      .pipe(
        map((data: any) => data),
        catchError((data) => data)
    )
  }
}
