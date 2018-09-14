import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { GlobalService } from '../../shared/services/global.service';
@Injectable()
export class IndexService {

  httpOptions = { };
  constructor(private _httpClient: HttpClient, private _globalService: GlobalService) {       
  } 
    
  getThingData(): Observable<any>{
    return this._httpClient
      .get(`${this._globalService.url}/thing/${this._globalService.userId}`, this.httpOptions)
      .pipe(
        map((data: any) => data),
        catchError((data) => data)
    )
  }
}
