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
    localStorage.removeItem("userId");
    localStorage.removeItem("password");
    localStorage.removeItem("username");
  }

  ngOnInit() {
  }

  login(f: NgForm) {
    this.globalService.getUser(f.value.username, f.value.password)
      .subscribe(data => {
        var id = data["id"];
        var password = data["password"];

        if (id) {
          localStorage.setItem("userId", id);
          localStorage.setItem("password", f.value.password);
          localStorage.setItem("username", f.value.username);
          this.router.navigate(['/admin/dashboard'])
        }
        else {
          this.globalService.createUser({ name: f.value.username, password: f.value.password })
            .subscribe(dataUser => {
              localStorage.setItem("userId", dataUser["id"]);
              localStorage.setItem("password", f.value.password);
              localStorage.setItem("username", f.value.username);
              this.router.navigate(['/admin/dashboard'])
            })
        }
      })
  }

}
