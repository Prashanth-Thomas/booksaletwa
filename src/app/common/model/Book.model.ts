import {User} from "./User.model";
/**
 * Created by ajiben on 8/1/2017.
 */
export class Book {
  public Title:string;
  public Author:string;
  public sellerId:string;
  public price:number;
  public description:string;
  public image:string;
  bookId:number;

  constructor(title:string,author:string,price:number,sellerId:string,description:string,image:string,bookId:number){
    this.Title=title;
    this.Author=author;
    this.sellerId=sellerId;
    this.price=price;
    this.description=description;
    this.image=image;
    this.bookId=bookId;
  }
}
