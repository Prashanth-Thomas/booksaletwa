import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../common/service/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isadmin: boolean;
  isloggedin: boolean;
  constructor(public authService: AuthenticationService) {
    console.log(this.authService.isLoggedin);
  }

  onLogout() {
    this.authService.logout();
    this.authService.isLoggedin=false;

  }

  ngOnInit() {
    this.authService.loginSubject.subscribe((value:boolean)=>{
      this.isloggedin=value;
    });
  }

}
