import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BookService} from "../../../common/service/book.service";
import {UserService} from "../../../common/service/user.service";
import {Book} from "../../../common/model/Book.model";

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail-component.component.html',
  styleUrls: ['./book-detail-component.component.css']
})
export class BookDetailComponentComponent implements OnInit {

  book:Book;
  seller:UserService;
  id:number;
  constructor(private route:ActivatedRoute,private bookServ:BookService,private userServ:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=> {this.id=params['id'];
        this.book=this.bookServ.getBookById(this.id);
      }
    );
  }

}
