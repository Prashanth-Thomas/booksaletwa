import { Component, OnInit } from '@angular/core';

import {BookService} from "../../../common/service/book.service";
import {Book} from "../../../common/model/Book.model";

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent implements OnInit {

  books:Book[];
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data)=> {
      this.books=data;
    });
  }

}
