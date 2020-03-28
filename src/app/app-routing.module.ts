import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {BoardsComponent} from "./boards/boards.component";
import {EditBoardsComponent} from "./edit-boards/edit-boards.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'boards', component: BoardsComponent},
  { path: 'edit-boards', component: EditBoardsComponent},
  { path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
