import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  register(username: string, password: string) {
    let user: User = new User;
    user.username = username;
    user.userpassword = password;
    this.registrationService.register(user).subscribe(data => {
      if (data) {
        this.router.navigate(["loginPage"])
      }
    });
  }

}
