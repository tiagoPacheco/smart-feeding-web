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
    
  save(formData: any): Observable<any> {           
    return this.httpClient
      .post(`${this.globalService.url}/users/`, formData, {})
      .pipe(
        map((data: any) => data.json()),
        catchError((data) => data)
      )
  }

  getAllUsers(): Observable<any>{
    return this.httpClient
      .get(`${this.globalService.url}/users/`, this.httpOptions)
      .pipe(
        map((data: any) => data),
        catchError((data) => data)
    )
  }
}
