import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Board} from "../model/board.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}token/generate-token`, loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}users/`);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}users/${id}`);
  }

  getUsernameById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}users/username/${id}`);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}users/`, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}users/${id}`);
  }

  boardsUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}boards/${id}`);
  }

  allBoards(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}boards/`);
  }

  deleteBoard(serial: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}boards/${serial}`);
  }

  editBoard(serial: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}boards/edit/${serial}`);
  }

  updateBoard(board: Board): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}boards/${board.boardId}`, board);

  }

  createNewBoard(board: Board): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}boards/`, board)
  }

}