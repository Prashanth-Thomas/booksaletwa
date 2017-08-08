import {Http,Response} from "@angular/http";
import { Injectable } from '@angular/core';
import {User} from "../model/User.model";
/**
 * Created by pthomas on 8/7/2017.
 */

@Injectable()
export class UserService {
  users:User[];
  constructor(private http:Http) {
    console.log("CONSTRUCTOR USER!");
  }

  getUsers() {
    return this.http.get("https://bookseller-d2aeb.firebaseio.com/Users.json").map((response:Response)=> {
      console.log("====================="+response.json());
      this.users=response.json()
      return this.users;
    });
  }

  usersQuickStore() {
    this.getUsers().subscribe((data)=> {
      this.users=data;
      console.log("hiiiiiiiiiiiiiiii");
    }, (err) => {
      console.log(err);
  });
  }

  getUserById (id:string) {
    this.usersQuickStore();
  for (const item of this.users) {
    console.log("item user id "+item.userId);
    if (item.userId === id) {
      console.log("inside if");
      return item;
    }
  }
}

}
