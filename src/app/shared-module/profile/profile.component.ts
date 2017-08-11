import { Component, OnInit } from '@angular/core';
import {UserService} from "../../common/service/user.service";
import {User} from "../../common/model/User.model";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: User;
  constructor(private  userService: UserService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['userObject'];
    /*this.userService.getcurrentUser().subscribe((currentUser)=>{
      this.user= currentUser;
    });*/
  }

}
