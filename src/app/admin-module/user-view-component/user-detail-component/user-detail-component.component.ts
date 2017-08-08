import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../../common/service/user.service";
import {User} from "../../../common/model/User.model";


@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit {

  user:User;
  userId:string;
  constructor( private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    console.log("ngonint")
    this.route.params.subscribe(
      (params:Params)=> { this.userId=params['userId'];
        this.userService.getUserById(this.userId).subscribe((user)=>{
          this.user=user;
        });
      }
    );
  }

}
