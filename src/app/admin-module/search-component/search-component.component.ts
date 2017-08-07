import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../common/service/search.service";



@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  searchText:string;
  constructor(private searchService:SearchService) { }

  ngOnInit() {
  }

  onSearch(){
    this.searchService.searchSender.next(this.searchText);
  }
}
