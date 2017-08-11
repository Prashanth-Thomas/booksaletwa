/**
 * Created by pthomas on 8/11/2017.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {User} from "../model/User.model";
import {UserService} from "./user.service";


@Injectable()
export class ProfileResolve implements Resolve<User> {

  constructor(private userervice: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userervice.getcurrentUser();
  }
}
