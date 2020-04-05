import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Board} from "../model/board.model";

@Component({
    selector: 'app-user-boards',
    templateUrl: './user-boards.component.html',
    styleUrls: ['./user-boards.component.css']
  })
  export class UserBoardsComponent implements OnInit {
    boards: Board[];
  
    constructor(private router: Router, private apiService: ApiService) { }
  
    ngOnInit() {
      let userId = window.localStorage.getItem("userIdBoard");

      this.apiService.boardsUser(+userId).subscribe( data => { this.boards = data.result; });
      
    }
  
    editBoard(board: Board): void {
      window.localStorage.removeItem("boardSerial");
      window.localStorage.setItem("boardSerial", board.boardSerial.toString());
      this.router.navigate(['edit-boards']);
  
    };
  
    clearLocalStorage(): void{
      window.localStorage.removeItem("editUserId");
      window.localStorage.removeItem("boardSerial");
    };
  
    deleteBoard(board: Board): void{
      this.apiService.deleteBoard(board.boardSerial)
      .subscribe( data => {
        this.boards = this.boards.filter(b => b !== board);
      })
    };
  
    addBoard(): void{
      this.router.navigate(['add-board']);
    };
  
  }
