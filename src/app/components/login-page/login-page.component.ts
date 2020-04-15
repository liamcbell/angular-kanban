import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/login-services.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServicesService) { }

  ngOnInit(): void {
  }
  username: string;
  password: string;
  navigate(username: string, userpassword: string) {
    let user: User = new User;
    user.username = username;
    user.userpassword = userpassword;
    let tempUser: string = user.username
    this.loginService.login(user).subscribe(data => {
      if (data) {
        this.router.navigate(['todoList', { tempUser }]);
      }
    });
  }

  navigateReg() {
    this.router.navigate(["registration"]);
  }

  returnUser() {
    let user: User = new User;
    user.username = this.username;
    user.userpassword = this.password;
    return user;
  }

}
