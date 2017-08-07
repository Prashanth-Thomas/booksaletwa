import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../../../../common/model/Book.model";

@Component({
  selector: 'app-book-item-component',
  templateUrl: './book-item-component.component.html',
  styleUrls: ['./book-item-component.component.css']
})
export class BookItemComponentComponent implements OnInit {

  @Input() book:Book;
  @Input() index:number;


  constructor() { }

  ngOnInit() {
  }

}
