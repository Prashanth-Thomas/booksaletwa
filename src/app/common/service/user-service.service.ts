import { Injectable } from '@angular/core';
import {User} from "../model/User.model";

@Injectable()
export class UserServiceService {

  public users:User[]=[new User("anish",123456,"ani@gmail.com","anish address"),
                        new User("anish2",1234562,"ani2@gmail.com","anish2 address2"),
                        new User("anish3",123453,"ani3@gmail.com","anish3 address3")];
  constructor() { }

  getUsers(){
    return this.users;
  }



  getUser(name:string){
    console.log("get user"+name)
    for (const item of this.users) {
      if (item.name === name) {
        return item;
      }
    }
  }

}
