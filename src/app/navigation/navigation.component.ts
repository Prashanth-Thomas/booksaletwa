import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../common/service/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedin: boolean;
  isadmin: boolean;

  constructor(public authService: AuthenticationService) {
  }

  onLogout() {
    this.authService.logout();
    this.authService.isLoggedin=false;
    this.isLoggedin=false;
  }

  ngOnInit() {
    this.isLoggedin=this.authService.isLoggedin;
  }

}
