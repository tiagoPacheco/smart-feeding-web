import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpHeaders } from '@angular/common/http';
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

    private dataSource = new Subject<DataSourceClass>();

    data$ = this.dataSource.asObservable();

    public dataBusChanged(ev, value) {
        this.dataSource.next({
            ev: ev,
            value: value
        })
    }
}


export class DataSourceClass {
    ev: string;
    value: any
}