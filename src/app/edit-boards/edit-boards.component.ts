import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { Board } from '../model/board.model';

@Component({
  selector: 'app-edit-boards',
  templateUrl: './edit-boards.component.html',
  styleUrls: ['./edit-boards.component.css']
})
export class EditBoardsComponent implements OnInit {
  board: Board;
  editBoardForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let boardSerial = window.localStorage.getItem("boardSerial");
    if(!boardSerial) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editBoardForm = this.formBuilder.group({
      boardId: [''],
      boardName: ['', Validators.required],
      boardSerial: ['',Validators.required],
      boardStart: ['',Validators.required],
      boardAutoStart: ['',Validators.required],
      boardContor: ['',Validators.required],
      boardOff: ['',Validators.required]
    });
    
    this.apiService.editBoard(boardSerial.toString())
    .subscribe( data => { 
      this.editBoardForm.setValue(data.result);});
    
  }
  onSubmit() {
    this.apiService.updateBoard(this.editBoardForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Board updated successfully.');
            this.router.navigate(['boards']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });

  }

}