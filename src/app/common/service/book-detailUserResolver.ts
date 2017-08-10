import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {User} from "../model/User.model";
import {UserService} from "./user.service";
import {Book} from "../model/Book.model";
/**
 * Created by pthomas on 8/10/2017.
 */

@Injectable()
export class BookDetailUserResolve implements Resolve<User> {

  book:Book;
  constructor(private userervice: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.book=route.parent.data['bookObject']
    return this.userervice.getUserById(this.book.sellerId);
  }
}
