import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
/**
 * Created by pthomas on 8/1/2017.
 */
@Injectable()
export class AuthenticationService {
  isLoggedin=false;
  isAdmin: boolean;
  token: string;

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
            this.isLoggedin=true;
            console.log(token);
          });
        })
      .catch(error => console.log(error));
  }

  public logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('token');
    this.isLoggedin=false;
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
