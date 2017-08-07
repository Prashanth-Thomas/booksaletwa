/**
 * Created by pthomas on 8/1/2017.
 */

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from '../common/service/authentication.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AuthenticationService ],
  bootstrap: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
