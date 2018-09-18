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
    this.httpClient
      .post(`${this.globalService.url}/pet/`, formData, this.globalService.httpOptions).subscribe()
  }

  updateProfile(formData: any) {
    this.httpClient
      .put(`${this.globalService.url}/pet/update/${this.globalService.petId}`, formData, this.globalService.httpOptions)
      .subscribe();
  }

  getPetProfile() {
    return this.httpClient
      .get(`${this.globalService.url}/pet/${this.globalService.userId}`, this.globalService.httpOptions);
  }

  createStock(formData: any) {
    return this.httpClient
      .post(`${this.globalService.url}/thing/`, formData, this.globalService.httpOptions)
      .subscribe(data => {
        this.globalService.thingId = data["id"];
      });
  }

  updateStock(formData: any) {
    return this.httpClient
      .put(`${this.globalService.url}/thing/update/${this.globalService.thingId}`, formData, this.globalService.httpOptions).subscribe();
  }

  getThingData() {
    return this.httpClient
      .get(`${this.globalService.url}/thing/${this.globalService.userId}`, this.globalService.httpOptions);
  }
}
