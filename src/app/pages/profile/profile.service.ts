import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { GlobalService } from '../../shared/services/global.service';
@Injectable()
export class ProfileService {

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
  }

  createProfile(formData: any) {
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
    this.httpClient
      .post(`${this.globalService.url}/pet/`, formData, httpOptions).subscribe()
  }

  updateProfile(formData: any) {
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
    this.httpClient
      .put(`${this.globalService.url}/pet/update/${this.globalService.petId}`, formData, httpOptions)
      .subscribe();
  }

  getPetProfile() {
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));

    return this.httpClient
      .get(`${this.globalService.url}/pet/${sessionStorage.getItem("userId")}`, httpOptions);
  }

  createStock(formData: any) {
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
    return this.httpClient
      .post(`${this.globalService.url}/thing/`, formData, httpOptions)
      .subscribe(data => {
        this.globalService.thingId = data["id"];
      });
  }

  updateStock(formData: any) {
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
    return this.httpClient
      .put(`${this.globalService.url}/thing/update/${this.globalService.thingId}`, formData, httpOptions).subscribe();
  }

  getThingData() {
    var httpOptions = this.globalService.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
    return this.httpClient
      .get(`${this.globalService.url}/thing/${sessionStorage.getItem("userId")}`, httpOptions);
  }
}
