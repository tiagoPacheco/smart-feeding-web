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
    private formBuilder: FormBuilder) {            
      this._profileService.getPetProfile().subscribe(
        data => {     
          if(data.length > 0){
            this.existProfile = true;
            this._globalService.petId = data[0]._id;
            this.name = data[0].name;
            this.weight = data[0].weight;
            this.breed = data[0].breed;
            this.birthDate = data[0].birthDate;
            this.gender = data[0].gender;
            this.amountFoodPetEat = data[0].amountFoodPetEat;
            this.createForm();
          }
        }
      );

      this._profileService.getThingData().subscribe(
        data => {     
          if(data.length > 0){
            this.existStock = true;
            this._globalService.thingId = data[0]._id;
            this.amountFood = data[0].amountFood;
          }
        }
      );

      this.createForm();

     }

  existStock = false;
  existProfile = false;
  profileForm: FormGroup;
  thingForm: FormGroup;
  name = '';
  weight = '';
  breed = '';
  birthDate = '';
  gender = '';
  amountFoodPetEat = '';
  amountFood = '';

  ngOnInit() { }

  private createForm() {
    this.profileForm = this.formBuilder.group({
      name: [this.name, Validators.compose([Validators.required])],
      weight: [this.weight, Validators.compose([Validators.required])],
      breed: [this.breed, Validators.compose([Validators.required])],
      birthDate: [this.birthDate, Validators.compose([Validators.required])],
      gender: [this.gender, Validators.compose([Validators.required])],
      amountFoodPetEat: [this.amountFoodPetEat, Validators.compose([Validators.required])]
    });
    this.thingForm = this.formBuilder.group({
      amountFood: [null, Validators.compose([Validators.required])]
    });
  }

  updateProfile(){
    this._globalService.name = this.name;
    this._globalService.breed = this.breed;
    
    if(this.existProfile){
      this._profileService.updateProfile({userId: this._globalService.userId, ...this.profileForm.value}).subscribe(
        data => {data});
    }
    else{
      this._profileService.createProfile({userId: this._globalService.userId, ...this.profileForm.value});
    }    

    this.alertMessage({ type: 'default', title: 'Updated!', value: 'The profile was updated' });
  }

  updateStock(){

    if(this.existProfile){      
      this._profileService.updateStock({userId: this._globalService.userId, ...this.thingForm.value}).subscribe(data => {data});
    }
    else{
      this._profileService.createStock({userId: this._globalService.userId, ...this.profileForm.value}).subscribe(data => {data});      
    }    

    this.alertMessage({ type: 'default', title: 'Updated!', value: 'The stock was updated' });
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

  alertMessage(data: NotificationModel) {      
      this._globalService.dataBusChanged('notification', data);
  }
}
