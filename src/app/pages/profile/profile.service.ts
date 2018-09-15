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
    
  createProfile(formData: any) {           
    this.httpClient
      .post(`${this.globalService.url}/pet/`, formData, {}).subscribe()
  }

  updateProfile(formData: any) {         
    this.httpClient
      .put(`${this.globalService.url}/pet/update/${this.globalService.petId}`, formData, {})
      .subscribe();
  }

  getPetProfile() {
    return this.httpClient
      .get(`${this.globalService.url}/pet/${this.globalService.userId}`, this.httpOptions);
  }

  createStock(formData: any) {   
    console.log('Create stock')
    return this.httpClient
      .post(`${this.globalService.url}/thing/`, formData, {})
      .subscribe(data => { 
        this.globalService.thingId = data["id"];
      });
  }

  updateStock(formData: any) {   
    return this.httpClient
      .put(`${this.globalService.url}/thing/update/${this.globalService.thingId}`, formData, {}).subscribe();
  }

  getThingData() {
    return this.httpClient
      .get(`${this.globalService.url}/thing/${this.globalService.userId}`, this.httpOptions);
  }
}
