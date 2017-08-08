import { Component, OnInit } from '@angular/core';
import {UserService} from "../../common/service/user.service";
import {User} from "../../common/model/User.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: User;
  constructor(private  userService: UserService) { }

  ngOnInit() {
    this.userService.getcurrentUser().subscribe((currentUser)=>{
      this.user= currentUser;
    });
  }

}
