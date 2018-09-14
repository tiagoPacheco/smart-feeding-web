import { Component } from '@angular/core';
import { GlobalService } from './shared/services/global.service';
import { ProfileService } from './pages/profile/profile.service';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';

  constructor(private _profileService: ProfileService,
    private _globalService: GlobalService) {
    this._profileService.getPetProfile().subscribe(
      data => {
        if (data.length > 0) {
          this._globalService.userId = data[0].userId;
          this._globalService.petId = data[0]._id;
          this._globalService.name = data[0].name;
          this._globalService.breed = data[0].breed;
        }
      }
    );
  }
}
