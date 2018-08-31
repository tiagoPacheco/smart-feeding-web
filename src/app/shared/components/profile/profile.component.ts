import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/dog-profile.jpg';
  userName: string = 'Ralf';
  breed: string = 'Husky';
  
  constructor() { }

  ngOnInit() {
  }

}
