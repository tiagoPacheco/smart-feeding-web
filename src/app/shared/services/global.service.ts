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
    userId = localStorage.getItem("userId");
    password = localStorage.getItem("password");
    petId = '';
    thingId = '';
    name = '';    
    breed = '';

    constructor(private httpClient: HttpClient) {
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
            .post(`${this.url}/thing/feed_pet`, null, {})
            .subscribe(null)
    }

    getUser(name, password) {
        return this.httpClient
            .get(`${this.url}/users/get/${name}`, {});
    }

    createUser(name, password) {
        return this.httpClient
            .post(`${this.url}/users/`, { name: name, password: password }, {});
    }
}


export class DataSourceClass {
    ev: string;
    value: any
}
