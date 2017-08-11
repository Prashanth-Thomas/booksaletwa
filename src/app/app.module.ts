import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginModule} from './login-module/login.module';
import { NavigationComponent } from './navigation/navigation.component';
import {AppRoutingModule} from './routing.module';
import {AuthenticationService} from './common/service/authentication.service';


import {AdminModuleModule} from "./admin-module/admin-module.module";
import {UserService} from "./common/service/user.service";
import {BookService} from "./common/service/book.service";
import {SearchService} from "./common/service/search.service";
import {SharedModule} from "./shared-module/shared.module";
import {UserModule} from "./user-module/user.module";
import {ProfileResolve} from "./common/service/profileResolve.resolve";



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    AppRoutingModule,
    AdminModuleModule,
    SharedModule,
    UserModule
  ],
  providers: [ AuthenticationService, UserService, SearchService, BookService,ProfileResolve ],
  bootstrap: [AppComponent]
})
export class AppModule { }

