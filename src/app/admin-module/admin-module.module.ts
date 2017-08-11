import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { BookViewComponentComponent } from './book-view-component/book-view-component.component';
import { UserViewComponentComponent } from './user-view-component/user-view-component.component';
import {BrowserModule} from "@angular/platform-browser";
import { BookListComponentComponent } from './book-view-component/book-list-component/book-list-component.component';
import { BookDetailComponentComponent } from './book-view-component/book-detail-component/book-detail-component.component';
import { UserListComponentComponent } from './user-view-component/user-list-component/user-list-component.component';
import { UserItemComponentComponent } from './user-view-component/user-list-component/user-item-component/user-item-component.component';
import { UserDetailComponentComponent } from './user-view-component/user-detail-component/user-detail-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import {BookItemComponentComponent} from "./book-view-component/book-list-component/book-item-component/book-item-component.component";
import {AdminRoutes} from "./admin-routing.module";
import { AdminComponentComponent } from './admin-component/admin-component.component';

import {FormsModule} from "@angular/forms";

import { UsersChartComponent } from './users-chart/users-chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {UserService} from "../common/service/user.service";
import {BookService} from "../common/service/book.service";
import {FilterPipe} from "../common/pipes/filter.pipe";
import {SearchService} from "../common/service/search.service";
import {UserResolve} from "../common/service/user-detailResolve.resolve";
import {BookResolve} from "../common/service/book-detailResolve";
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import {SharedModule} from "../shared-module/shared.module";
import {BookDetailUserResolve} from "../common/service/book-detailUserResolver";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    FormsModule,
    ChartsModule,
    SharedModule
  ],
  declarations: [
    BookViewComponentComponent,
    UserViewComponentComponent,
    BookListComponentComponent,
    BookDetailComponentComponent,
    BookItemComponentComponent,
    UserListComponentComponent,
    UserItemComponentComponent,
    UserDetailComponentComponent,
    SearchComponentComponent,
    AdminComponentComponent,
    FilterPipe,
    UsersChartComponent,
    SidebarComponent,
    AdminProfileComponent
  ],
  providers:[BookDetailUserResolve,UserService,BookService,SearchService,UserResolve,BookResolve],
  bootstrap: [AdminComponentComponent]
})
export class AdminModuleModule { }
