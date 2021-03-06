import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers()
      .subscribe( data => {
          this.users = data.result;
      });
      
      this.clearLocalStorage();

  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

  getBoards(user: User):void {
    window.localStorage.removeItem("userIdBoard");
    window.localStorage.setItem("userIdBoard", user.id.toString());
    this.router.navigate(['user-boards']);
  };
  
  clearLocalStorage(): void{
    window.localStorage.removeItem("userIdBoard");
    window.localStorage.removeItem("editUserId");
    window.localStorage.removeItem("boardSerial");
  };

}

