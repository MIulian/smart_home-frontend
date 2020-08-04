import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {BoardsComponent} from "./boards/boards.component";
import {UserBoardsComponent} from "./user-boards/user-boards.component";
import {EditBoardsComponent} from "./edit-boards/edit-boards.component";
import {AddBoardComponent} from "./add-board/add-board.component";
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'boards', component: BoardsComponent},
  { path: 'user-boards', component: UserBoardsComponent},
  { path: 'edit-boards', component: EditBoardsComponent},
  { path: 'add-board', component: AddBoardComponent},
  { path : '', component : ListUserComponent}
];

export const routing = RouterModule.forRoot(routes);
