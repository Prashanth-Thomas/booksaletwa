import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOPmPsRokwGisPhvc6Hc7nsRlNuWdEeZM',
      authDomain: 'bookseller-d2aeb.firebaseapp.com'
    });
  }
}
