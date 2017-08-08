import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BookService} from "../../../common/service/book.service";
import {UserService} from "../../../common/service/user.service";
import {Book} from "../../../common/model/Book.model";
import {User} from "../../../common/model/User.model";

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail-component.component.html',
  styleUrls: ['./book-detail-component.component.css']
})
export class BookDetailComponentComponent implements OnInit {

  book:Book;
  id:number;
  seller:User;
  constructor(private route:ActivatedRoute,private bookServ:BookService,private userServ:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=> {this.id=+params['bookId'];
        this.book=this.bookServ.getbookById(this.id);
      });
  this.userServ.getUserById(this.book.sellerId).subscribe((user)=>{
    this.seller=user;
  });
      }
  }
