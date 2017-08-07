import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../../../common/model/User.model";


@Component({
  selector: 'app-user-item-component',
  templateUrl: './user-item-component.component.html',
  styleUrls: ['./user-item-component.component.css']
})
export class UserItemComponentComponent implements OnInit {

  @Input() user:User;
  @Input() index:number;
  @Input() selectedName:string;
  constructor() { }

  ngOnInit() {
  }

}
