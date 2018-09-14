import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpHeaders } from '@angular/common/http';
/* models */
/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class GlobalService {
    url = 'http://localhost:3001';
    userId = '5b987d7a9bad0c346cdc0d0d';
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