import { Component, OnInit } from '@angular/core';
import { NotificationModel } from '../../../shared/models/notification-model';
import { GlobalService } from '../../../shared/services/global.service';
import { ProfileService } from '../profile.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public _globalService: GlobalService, 
    private  _profileService: ProfileService,
    private formBuilder: FormBuilder,) {
      this.createForm();
     }

  profileForm: FormGroup;

  ngOnInit() { }

  private createForm() {
    this.profileForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  submit(){    
    // this._profileService.save({ "name": "amanda", "password": "987"});

    this._profileService.save({
      name: this.profileForm.value.username,
      password: this.profileForm.value.password
    }).subscribe(
      data => {          

        console.log(data)
       
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
