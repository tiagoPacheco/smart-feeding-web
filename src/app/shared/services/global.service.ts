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
    name = '';
    petId = '';
    thingId = '';
    breed = '';
    httpOptions = {};

    constructor(private httpClient: HttpClient) {

    }

    getHttpOptions(username, password) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Basic " + btoa(`${username}:${password}`));
        headers = headers.append("Content-Type", "application/json");
        return this.httpOptions = { headers: headers, withCredentials: true };
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
        console.log(sessionStorage.getItem("username"));

        var httpOptions = this.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
        this.httpClient
            .post(`${this.url}/thing/feed_pet`, null, httpOptions)
            .subscribe(null)
    }

    getPetCount() {
        var httpOptions = this.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
        return this.httpClient
            .get(`${this.url}/device-data/`, httpOptions)
    }

    getUser(name, password) {
        return this.httpClient
            .get(`${this.url}/users/get/${name}`, {});
    }

    getAmmountOfFood() {
        var httpOptions = this.getHttpOptions(sessionStorage.getItem("username"), sessionStorage.getItem("password"));
        return this.httpClient
            .get(`${this.url}/food`, httpOptions);
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
