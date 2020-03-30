import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Board} from "../model/board.model";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards: Board[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("userIdBoards");
    if(!userId){
      this.apiService.allBoards().subscribe( data => { this.boards = data.result; })
    }else{
      this.apiService.boardsUser(+userId).subscribe( data => { this.boards = data.result; })
    }
    this.clearLocalStorage();
  }

  editBoard(board: Board): void {
    window.localStorage.removeItem("boardSerial");
    window.localStorage.setItem("boardSerial", board.boardSerial.toString());
    this.router.navigate(['edit-boards']);

  }

  clearLocalStorage(): void{
  window.localStorage.removeItem("userIdBoards");
  }

}
