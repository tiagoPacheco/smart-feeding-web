import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { GlobalService } from '../../shared/services/global.service';
@Injectable()
export class IndexService {

  constructor(private _httpClient: HttpClient, private globalService: GlobalService) {
  }

  getThingData(): Observable<any> {    
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
    return this._httpClient
      .get(`${this.globalService.url}/thing/${sessionStorage.getItem("userId")}`, httpOptions);
  }
}
