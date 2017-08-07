import {Injectable} from "@angular/core";
import {UserServiceService} from "./user-service.service";
import {Subject} from "rxjs";
/**
 * Created by ajiben on 8/3/2017.
 */
@Injectable()
export class SearchService{
  public searchSender = new Subject();
}
