import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { LoginResponse } from "@interfaces/loginResponse";

import { User } from "@interfaces/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) {
   }

  /**
   * signin
   */
  public signin(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.getBackend()}user/signin`, user);
  }

  public loggedIn(){  
    return !!localStorage.getItem('token'); //si existe devuelve un true o false
  }

  public logout(): Observable<any>{
    return this.http.get<any>(`${this.getBackend()}user/logout`)
  }

  public httpOptions(): HttpHeaders {
    return new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
  }

  public getBackend(): string{
    return 'https://app-mascotitas.herokuapp.com/';
  }

}
