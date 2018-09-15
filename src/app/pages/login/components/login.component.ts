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

  constructor(private globalService: GlobalService, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm) {
    this.globalService.getUser(f.value.username, f.value.password)
      .subscribe(data => {
        var id = data["id"];
        var password = data["password"];

        if (id) {
          this.globalService.userId = id;
          this.globalService.password = password;
          localStorage.setItem("userId", id);
          localStorage.setItem("password", f.value.password);
          this.router.navigate(['/admin/dashboard'])
        }
        else {
          this.globalService.createUser(f.value.username, f.value.password)
            .subscribe(dataUser => {
              this.globalService.userId = dataUser["id"];
              this.globalService.password = f.value.password;
              localStorage.setItem("userId", id);
              localStorage.setItem("password", f.value.password);
              this.router.navigate(['/admin/dashboard'])
            })
        }
      })
  }

}
