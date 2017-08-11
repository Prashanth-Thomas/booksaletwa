import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../common/service/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  isadmin: boolean;
  isLoggedin= false;
  constructor(private authService: AuthenticationService, private changeDetector: ChangeDetectorRef) {
    console.log(this.authService.isLoggedin);
    this.authService.loginSubject.subscribe((value:boolean)=> {
      this.isLoggedin=value;
      console.log("Is Logged in: "+ value);
      this.changeDetector.markForCheck();
      console.log(this.isLoggedin);
    });
  }

  onLogout() {
    this.authService.logout();
    this.authService.loginStateChange(false);
  }

  ngOnInit() {

  }

}
