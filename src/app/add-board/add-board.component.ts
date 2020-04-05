import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Board} from "../model/board.model";

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {

  userIdBoard: String;
  board: Board;
  addBoardForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    this.userIdBoard = window.localStorage.getItem("userIdBoard");

    this.addBoardForm = this.formBuilder.group({
      username:['',Validators.required],
      boardId: [''],
      boardName: ['', Validators.required],
      boardSerial: ['',Validators.required],
      boardStart: ['',Validators.required],
      boardAutoStart: ['',Validators.required],
      boardContor: ['',Validators.required],
      boardOff: ['',Validators.required]
    })

    if(this.userIdBoard !== null){
      this.apiService.getUsernameById(+this.userIdBoard).subscribe( data =>{
        this.addBoardForm.patchValue({username: data.result})
      })}

  }

  onSubmit() {
    if(this.userIdBoard !== null){
      this.apiService.createNewBoard(this.addBoardForm.value)
      .subscribe( data => {
        this.router.navigate(['user-boards']);
      });
    }else{
      this.apiService.createNewBoard(this.addBoardForm.value)
        .subscribe( data => {
          this.router.navigate(['boards']);
        });
      }
  }

}