import {Http,Response} from "@angular/http";
import { Injectable } from '@angular/core';
import {User} from "../model/User.model";
/**
 * Created by pthomas on 8/7/2017.
 */

@Injectable()
export class UserService {
  users:User[];
  constructor(private http:Http) { }

  getUsers() {
    return this.http.get("https://bookseller-d2aeb.firebaseio.com/Users").map((response:Response)=> {
      console.log("====================="+response.json());
      return response.json();
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

  getUserById (id:number) {
    for (const item of this.users) {
      if (item.userId === id) {
        return item;
      }
    }
  }

}
