import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class ProfileService {

  httpOptions = { };

  constructor(private httpClient: HttpClient) { }  
    
  save(formData: any): Observable<any> {
    console.log(formData);
    return this.httpClient
      .post("localhost:3001/users", { "name": "amanda", "password": "987"}, {})
      .pipe(
        map((data: any) => data),
        catchError(() => of('Server Error'))
      )
  }

  // getData(): Observable<any> {  
  //   this.httpOptions = this.authenticationService.getHttpOptions();

  //   return this.httpClient
  //     .get(`${environment.serverUrl}/candidate/all/`, this.httpOptions)
  //     .pipe(
  //       map((data: any) => data),
  //       catchError(() => of('Server Error'))
  //     )
  // }
}
