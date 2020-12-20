import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginData = {
    username: "admin",
    password: "admin"
  }
  login = {
    username: "",
    password: ""
  }

  constructor(public userData: UserData, public router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if ((this.login.username === this.loginData.username) && (this.login.password === this.loginData.password)) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/admin-panel');
    }
  }

}
