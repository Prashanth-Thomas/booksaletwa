import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../common/service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(public authService: AuthenticationService) {
    this.isAuthenticated = authService.isAuthenticated();
  }

  ngOnInit() {
  }

}
