import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import { Board} from "../model/board.model";

@Component({
  selector: 'app-edit-boards',
  templateUrl: './edit-boards.component.html',
  styleUrls: ['./edit-boards.component.css']
})
export class EditBoardsComponent implements OnInit {
  boards: Board[];
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("UserIdBoards");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.apiService.boardsUser(+userId).subscribe( data => { this.boards = data.result; })
  }

}
