import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserViewComponentComponent} from "./user-view-component/user-view-component.component";
import {BookViewComponentComponent} from "./book-view-component/book-view-component.component";
import {AdminComponentComponent} from "./admin-component/admin-component.component";
import {UserDetailComponentComponent} from "./user-view-component/user-detail-component/user-detail-component.component";
import {BookDetailComponentComponent} from "./book-view-component/book-detail-component/book-detail-component.component";
import {UsersChartComponent} from "./users-chart/users-chart.component";
import {UserResolve} from "../common/service/user-detailResolve.resolve";
import {BookResolve} from "../common/service/book-detailResolve";
import {ProfileComponent} from "../shared-module/profile/profile.component";
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {BookDetailUserResolve} from "../common/service/book-detailUserResolver";
/**
 * Created by ajiben on 8/1/2017.
 */


const adminRoutes:Routes=[
  { path: '', component: AdminComponentComponent},
  { path: 'admin/profile' , component: AdminProfileComponent },
  {path:'admin/users',component:UserViewComponentComponent ,children:[
    {path:':userId',component:UserDetailComponentComponent,
      resolve: {
        userObject: UserResolve
      }}
  ]},
  {path:'admin/books',component:BookViewComponentComponent},
  {path:'admin/books/:bookId',
    resolve: {
      bookObject: BookResolve
    }, children:[
    {path:'',component:BookDetailComponentComponent,resolve:{
        bookUserObject:BookDetailUserResolve
    }}
  ]},
  {path:'admin/chart',component:UsersChartComponent}
];

@NgModule({
  imports:[RouterModule.forChild(adminRoutes)],
  exports:[RouterModule]
})
export class AdminRoutes {

}
