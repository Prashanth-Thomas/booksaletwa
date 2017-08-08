/**
 * Created by ajiben on 8/1/2017.
 */

export class User{
  public name:string;
  public contact:number;
  public email:string;
  public address:string;
  public role:string;
  public userId:string;
  public image:string;

  constructor(userId:string,name:string,contact:number,email:string,address:string,role:string,image:string){
    this.name=name;
    this.contact=contact;
    this.email=email;
    this.address=address;
    this.image=image;
    this.role=role;
    this.userId=userId;
  }
}
