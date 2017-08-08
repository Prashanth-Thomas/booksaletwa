/**
 * Created by pthomas on 8/8/2017.
 */
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from '../common/service/authentication.service';
import {ProfileComponent} from "./profile/profile.component";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AuthenticationService],
  bootstrap: [ProfileComponent],
  exports: [ProfileComponent]
})
export class SharedModule { }
