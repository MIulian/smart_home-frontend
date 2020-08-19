import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ApiService } from "./core/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app-routing.module";
import { TokenInterceptor } from "./core/interceptor";
import { BoardsComponent } from './boards/boards.component';
import { UserBoardsComponent } from './user-boards/user-boards.component';
import { EditBoardsComponent } from './edit-boards/edit-boards.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    BoardsComponent,
    UserBoardsComponent,
    EditBoardsComponent,
    AddBoardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
