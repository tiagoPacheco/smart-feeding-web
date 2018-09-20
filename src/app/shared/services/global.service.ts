import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
/* models */
/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class GlobalService {
    url = 'http://localhost:3001';
    defaultUserId = ''
    defaultPassword = ''
    dafaultUsername = ''
    userId = sessionStorage.getItem("userId") ? sessionStorage.getItem("userId") : this.defaultUserId;
    password = sessionStorage.getItem("password") ? sessionStorage.getItem("password") : this.defaultPassword;
    username = sessionStorage.getItem("username") ? sessionStorage.getItem("username") : this.dafaultUsername;
    name = '';
    petId = '';
    thingId = '';    
    breed = '';
    httpOptions = {};

    constructor(private httpClient: HttpClient) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Basic " + btoa(`${this.username}:${this.password}`));
        headers = headers.append("Content-Type", "application/json");
        this.httpOptions = { headers: headers, withCredentials: true };
    }

    private dataSource = new Subject<DataSourceClass>();

    data$ = this.dataSource.asObservable();

    public dataBusChanged(ev, value) {
        this.dataSource.next({
            ev: ev,
            value: value
        })
    }

    feedPet() {
        this.httpClient
            .post(`${this.url}/thing/feed_pet`, null, this.httpOptions)
            .subscribe(null)
    }

    getPetCount() {
        return this.httpClient
            .get(`${this.url}/device-data/`, this.httpOptions)
    }

    getUser(name, password) {
        return this.httpClient
            .get(`${this.url}/users/get/${name}`, {});
    }

    getAmmountOfFood() {
        return this.httpClient
            .get(`${this.url}/food`, this.httpOptions);
    }
    
    createUser(formData) {
        return this.httpClient
            .post(`${this.url}/users/`, formData, {});
    }
}


export class DataSourceClass {
    ev: string;
    value: any
}
