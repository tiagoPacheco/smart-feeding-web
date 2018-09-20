import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { GlobalService } from '../../../shared/services/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private globalService: GlobalService, private router: Router) {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("username");
  }

  ngOnInit() {
  }

  login(f: NgForm) {
    this.globalService.getUser(f.value.username, f.value.password)
      .subscribe(data => {
        var id = data["id"];
        var password = data["password"];

        if (id) {
          sessionStorage.setItem("userId", id);
          sessionStorage.setItem("password", f.value.password);
          sessionStorage.setItem("username", f.value.username);
          this.router.navigate(['/pages/index'])
        }
        else {
          this.globalService.createUser({ name: f.value.username, password: f.value.password })
            .subscribe(dataUser => {
              sessionStorage.setItem("userId", dataUser["id"]);
              sessionStorage.setItem("password", f.value.password);
              sessionStorage.setItem("username", f.value.username);
              this.router.navigate(['/pages/index'])
            })
        }
      });
  }

}
