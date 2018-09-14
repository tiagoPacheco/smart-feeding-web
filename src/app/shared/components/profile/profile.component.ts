import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/dog-profile.jpg';
  userName: string = 'Ralf';
  breed: string = 'Husky';
  
  constructor(public _globalService: GlobalService) {
    this.userName = _globalService.name;
    this.breed = _globalService.breed;
  }

  ngOnInit() {
  }

}
