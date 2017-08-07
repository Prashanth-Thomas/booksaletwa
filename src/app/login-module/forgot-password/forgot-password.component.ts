import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  check = false;
  constructor() { }

  onResetPassword() {
    console.log('Printing !!');
    this.check = true;
    setTimeout(() => {this.check = false; }, 4000);
  }
  ngOnInit() {
  }

}
