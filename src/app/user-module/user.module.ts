/**
 * Created by pthomas on 8/9/2017.
 */
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/shared.module";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PersonalLibComponent } from './personal-lib/personal-lib.component';
import { PublicLibComponent } from './public-lib/public-lib.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    SharedModule
  ],
  declarations: [
  UserProfileComponent,
  PersonalLibComponent,
  PublicLibComponent],
  providers:[],
  bootstrap: [UserProfileComponent]
})
export class UserModule { }
