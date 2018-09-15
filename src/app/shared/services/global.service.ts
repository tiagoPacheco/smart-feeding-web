import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
/* models */
/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class GlobalService {
    url = 'http://localhost:3001';
    userId = '5b9c67c55916d92a80078bf2';
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
        .subscribe(data => {
            console.log(`the data: ${data["name"]}`)
        })
    }
}


export class DataSourceClass {
    ev: string;
    value: any
}
