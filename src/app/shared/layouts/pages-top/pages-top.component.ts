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
  breed: string = 'breed';


  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _profileService: ProfileService,
    private globalService: GlobalService) {

    this._profileService.getPetProfile().subscribe(
      data => {
        if (data[0]) {
          this.globalService.petId = data[0]._id;
          this.globalService.name = data[0].name;
          this.globalService.breed = data[0].breed;
          this.userName = globalService.name;
          this.breed = globalService.breed;
        }
      }
    );

  }

  public _sidebarToggle() {
    /* this.globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this.globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this.globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this.globalService._sidebarToggleState(!this.sidebarToggle);
  }
}
