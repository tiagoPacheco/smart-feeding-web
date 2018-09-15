import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ProfileService } from '../../../pages/profile/profile.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/dog-profile.jpg';
  userName: string = 'Dog name';
  breed: string = '123';


  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _profileService: ProfileService,
    private _globalService: GlobalService) {
    this._profileService.getPetProfile().subscribe(
      data => {
        if (data[0]) {
          this._globalService.petId = data[0]._id;
          // this._globalService.userId = data[0].userId;
          this._globalService.name = data[0].name;
          this._globalService.breed = data[0].breed;
          this.userName = _globalService.name;
          this.breed = _globalService.breed;
        }
      }
    );

    const savedCredentials = localStorage.getItem("userId");
    if (savedCredentials) {
      this._globalService.userId = savedCredentials;
    }
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
}
