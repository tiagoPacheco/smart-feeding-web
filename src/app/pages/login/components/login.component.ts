import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { GlobalService } from '../../../shared/services/global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  login(f: NgForm) {
    console.log(f.value.username)
    console.log(f.value.password)
  }

}
