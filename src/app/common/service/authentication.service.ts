import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
/**
 * Created by pthomas on 8/1/2017.
 */
@Injectable()
export class AuthenticationService {
  isLoggedin=false;
  isAdmin: boolean;
  token: string;
  email: string;
  loginSubject = new Subject();
/*  loginObservable: Observable<boolean>;
  loginObservable = Observable.create((observer: Observer<boolean>) => {
    observer.next(this.isLoggedin);
  }
  );*/

  constructor(private router:Router) {};

  public signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  public signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then( (token: string) => {
            this.token = token;
            this.loginStateChange(true);
            console.log(token);
            this.email=email;
            this.router.navigate(['/admin/admin/users']);
          });
        })
      .catch(error => console.log(error));
  }

  loginStateChange(value:boolean) {
    this.isLoggedin=value;
    this.loginSubject.next(value);
  }

  public logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('token');
    this.loginStateChange(false);
    this.router.navigate(['/login']);
  }

  public getToken() {
    firebase.auth().currentUser.getIdToken();
    return this.token;
  }

  public isAuthenticated() {
    console.log('Call me Quick!');
    return this.token != null;
  }
}
