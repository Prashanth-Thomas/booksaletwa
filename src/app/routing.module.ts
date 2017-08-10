import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login-module/login/login.component';
import {SignUpComponent} from './login-module/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './login-module/forgot-password/forgot-password.component';
import {ProfileComponent} from "./shared-module/profile/profile.component";
import {UserProfileComponent} from "./user-module/user-profile/user-profile.component";
import {PersonalLibComponent} from "./user-module/personal-lib/personal-lib.component";
import {PublicLibComponent} from "./user-module/public-lib/public-lib.component";




const appRoutes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'signUp' , component: SignUpComponent },
  { path: 'forgotPassword' , component: ForgotPasswordComponent },
  { path: 'admin', loadChildren: "./admin-module/admin-module.module#AdminModuleModule"},
  { path: 'user/profile' , component: UserProfileComponent },
  { path: 'user/personal-lib' , component: PersonalLibComponent },
  { path: 'user/public-lib' , component: PublicLibComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
