/**
 * Created by ajiben on 8/8/2017.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import {Book} from "../model/Book.model";
import {BookService} from "./book.service";


@Injectable()
export class BookResolve implements Resolve<Book> {

  bookId:number;
  constructor(private bookservice: BookService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.bookservice.getbookById(+route.paramMap.get('bookId'));
  }
}
