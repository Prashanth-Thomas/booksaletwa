import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../common/service/authentication.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name='';
  email = '';
  contact:number;
  role='User';
  address='';
  password1:string;
  password2:string;
  image='https://www.jamf.com/jamf-nation/img/default-avatars/generic-user.png';
  userId='0004';
  signinUserObj:{name:string, email:string, password:string, contact:number, role:string, address: string, image:string, userId;string};
  constructor(private authService: AuthenticationService) {
  }

  onSignUp() {
    if(this.password1===this.password2){
      this.signinUserObj.name=this.name;
      this.signinUserObj.email=this.email;
      this.signinUserObj.contact=this.contact;
      this.signinUserObj.role=this.role;
      this.signinUserObj.address=this.address;
      this.signinUserObj.image=this.image;
      this.signinUserObj.password=this.password1;
      this.signinUserObj.userId=this.userId;
      this.authService.signUpUser(this.signinUserObj);
    }

  }

  ngOnInit() {

  }

}
