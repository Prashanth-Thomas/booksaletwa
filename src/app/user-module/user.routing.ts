import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookViewComponentComponent} from "./book-view-component/book-view-component.component";
import {PersonalLibComponent} from "./personal-lib/personal-lib.component";
import {PublicLibComponent} from "./public-lib/public-lib.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
/**
 * Created by ajiben on 8/1/2017.
 */


const adminRoutes:Routes=[
  { path: '', redirectTo: 'user/profile'},
  { path: 'user/profile' , component: UserProfileComponent },
  {path:'user/personal-lib',component:PersonalLibComponent},
  { path: 'user/profile' , component: PublicLibComponent }
];

@NgModule({
  imports:[RouterModule.forChild(adminRoutes)],
  exports:[RouterModule]
})
export class AdminRoutes {

}
