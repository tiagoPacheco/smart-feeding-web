import { Component, OnInit } from '@angular/core';
import { NotificationModel } from '../../shared/models/notification-model';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public _globalService: GlobalService) { }

  ngOnInit() { }

  updateProfile(){
    this.alertMessage(
      {
        type: 'default',
        title: 'Look here!',
        value: 'updateProfile.'
      }
    );
  }

  updateStock(){
    this.alertMessage(
      {
        type: 'default',
        title: 'Look here!',
        value: 'updateStock.'
      }
    );
  }

  updateSettings(){
    this.alertMessage(
      {
        type: 'default',
        title: 'Look here!',
        value: 'updateSettings.'
      }
    );
  }

  alertMessage(data: NotificationModel = {
    type: 'default',
    title: 'Look here!',
    value: 'This alert needs your attention.'
  }) {
      //this._globalService._notification(data);
      this._globalService.dataBusChanged('notification', data);
  }
}
