import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthenticationService} from '../../common/service/authentication.service';
import {Router} from '@angular/router';
import {UserService} from "../../common/service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email= '';
  password= '';

  constructor(private router: Router, private authService: AuthenticationService, private userService: UserService) { }

  onSubmit() {
    console.log('Trying to login');
    //this.authService.signInUser(this.email, this.password);
    this.email = '';
    this.password = '';
    if(this.authService.isLoggedin){
      this.userService.usersQuickStore();
    }

  }

  onForget() {
    console.log('Forgot Component Loading');
    this.router.navigate(['/forgotPassword']);
  }

  ngOnInit() {
  }

}
