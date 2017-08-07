import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../common/service/authentication.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';
  constructor(private authService: AuthenticationService) {
  }

  onSignUp() {
    this.authService.signUpUser(this.email, this.password);
  }

  ngOnInit() {

  }

}
