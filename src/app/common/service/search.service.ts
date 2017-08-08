import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
/**
 * Created by ajiben on 8/3/2017.
 */
@Injectable()
export class SearchService{
  public searchSender = new Subject();
}
