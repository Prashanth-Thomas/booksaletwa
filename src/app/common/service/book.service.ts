/**
 * Created by pthomas on 8/7/2017.
 */
import { Injectable } from '@angular/core';
import {Book} from "../model/Book.model";
import {UserService} from "./user.service";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class BookService {

  books:Book[];
  constructor(private userService:UserService, private http: Http) { }

  getBooks() {
    return this.http.get("https://bookseller-d2aeb.firebaseio.com/Books.json").map((response: Response)=> {
      console.log(response.json());
      this.books=response.json();
      return response.json();
    });
  }


  getbookById (id:number) {
    for (const item of this.books) {
      console.log("item user id "+item.bookId);
      if (item.bookId === id) {
        console.log("inside if");
        return item;
      }
    }
  }
}
