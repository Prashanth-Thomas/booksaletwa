import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserViewComponentComponent} from "./user-view-component/user-view-component.component";
import {BookViewComponentComponent} from "./book-view-component/book-view-component.component";
import {AdminComponentComponent} from "./admin-component/admin-component.component";
import {UserDetailComponentComponent} from "./user-view-component/user-detail-component/user-detail-component.component";
import {BookDetailComponentComponent} from "./book-view-component/book-detail-component/book-detail-component.component";
import {UsersChartComponent} from "./users-chart/users-chart.component";
/**
 * Created by ajiben on 8/1/2017.
 */


const adminRoutes:Routes=[
  { path: '', component: AdminComponentComponent},
  {path:'admin/users',component:UserViewComponentComponent ,children:[
    {path:':userId',component:UserDetailComponentComponent}
  ]},
  {path:'admin/books',component:BookViewComponentComponent},
  {path:'admin/books/:bookId', component:BookDetailComponentComponent},
  {path:'admin/chart',component:UsersChartComponent}
];

@NgModule({
  imports:[RouterModule.forChild(adminRoutes)],
  exports:[RouterModule]
})
export class AdminRoutes {

}
