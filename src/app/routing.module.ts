import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login-module/login/login.component';
import {SignUpComponent} from './login-module/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './login-module/forgot-password/forgot-password.component';




const appRoutes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'signUp' , component: SignUpComponent },
  { path: 'forgotPassword' , component: ForgotPasswordComponent },
  { path: 'admin', loadChildren: "./admin-module/admin-module.module#AdminModuleModule"}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
