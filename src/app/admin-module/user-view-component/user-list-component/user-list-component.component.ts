import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../common/service/search.service";
import {UserService} from "../../../common/service/user.service";
import {User} from "../../../common/model/User.model";


@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {
  searchData='';
  private userscmp:User[];
  constructor(private userService:UserService, private  searchService: SearchService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data)=> {
      this.userscmp=data;
    });

    this.searchService.searchSender.subscribe((data:string)=> {
      this.searchData=data;});

  }

}
